import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const secrets = new SecretsManagerClient({});
const s3 = new S3Client({});

const SECRET_ID = process.env.SECRET_ID;
const BUCKET_NAME = process.env.BUCKET_NAME;
const FARM_ID = process.env.FARM_ID;
const UPDATES_PAUSED = String(process.env.UPDATES_PAUSED).toLowerCase() === "true";
const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_PAGES = 100;
// Always retain a rolling 60-day window, independent of contest configuration.
const RETENTION_DAYS = 60;

const endpoints = {
  help: {
    url: `https://api.sunflower-land.com/data?type=feedInteractions&farmId=${encodeURIComponent(FARM_ID)}&isGlobal=true&filter=help`,
    key: "assets/sunflower-land/helperHelps.json",
  },
};

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

const getBearerToken = async () => {
  const result = await secrets.send(new GetSecretValueCommand({ SecretId: SECRET_ID }));
  if (!result.SecretString) throw new Error(`Secret ${SECRET_ID} does not contain SecretString`);

  let secret;
  try {
    secret = JSON.parse(result.SecretString);
  } catch {
    throw new Error(`Secret ${SECRET_ID} does not contain valid JSON`);
  }

  const bearerToken = typeof secret.bearerToken === "string"
    ? secret.bearerToken.replace(/^Bearer\s+/i, "").trim()
    : "";
  if (!bearerToken) throw new Error(`Secret ${SECRET_ID} does not contain bearerToken`);
  return bearerToken;
};

const requestFeedPage = async (type, url, bearerToken) => {
  const maxAttempts = 4;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        Accept: "application/json",
        "User-Agent": "chuckfresco-helper-updater/2.3",
      },
    });

    if (response.ok) {
      const text = await response.text();
      try {
        return JSON.parse(text);
      } catch {
        throw new Error(`Sunflower ${type} API returned invalid JSON`);
      }
    }

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === maxAttempts) {
      throw new Error(`Sunflower ${type} API failed: ${response.status} ${response.statusText}`);
    }
    const delay = 500 * 2 ** (attempt - 1);
    console.warn(`Sunflower ${type} API returned ${response.status}. Retrying in ${delay}ms.`);
    await sleep(delay);
  }
  throw new Error(`Sunflower ${type} API request failed`);
};

const getEntryKey = entry => {
  const providedId = entry.id || entry.interactionId || entry.activityId;
  return providedId
    ? `id:${providedId}`
    : [entry.type, entry.sender?.id, entry.recipient?.id, entry.createdAt, entry.message || ""].join(":");
};

const toPublicEntry = entry => {
  const publicEntry = {
    sender: { id: entry.sender?.id, username: entry.sender?.username || "Unknown" },
    recipient: { id: entry.recipient?.id, username: entry.recipient?.username || "ChuckFresco" },
    message: entry.message || (entry.type === "help" ? "Helped your farm!" : "Cheered your farm!"),
    createdAt: Number(entry.createdAt),
    type: entry.type,
    helpedThemToday: Boolean(entry.helpedThemToday),
    cheeredThemToday: Boolean(entry.cheeredThemToday),
  };
  const providedId = entry.id || entry.interactionId || entry.activityId;
  if (providedId !== undefined) publicEntry.id = providedId;
  return publicEntry;
};

const fetchFeed = async (type, baseUrl, bearerToken, cutoff) => {
  const collected = [];
  const seenEntries = new Set();
  let cursor;
  let pageCount = 0;

  while (pageCount < MAX_PAGES) {
    const requestUrl = new URL(baseUrl);
    if (cursor !== undefined) requestUrl.searchParams.set("cursor", String(cursor));
    const payload = await requestFeedPage(type, requestUrl.toString(), bearerToken);
    const page = Array.isArray(payload?.data?.feed) ? payload.data.feed : [];
    pageCount += 1;
    console.log(`Fetched ${type} page ${pageCount}: ${page.length} entries`);
    if (page.length === 0) break;

    for (const entry of page) {
      const createdAt = Number(entry.createdAt);
      if (!Number.isFinite(createdAt) || createdAt < cutoff) continue;
      if (String(entry.recipient?.id) !== String(FARM_ID) || entry.type !== type) continue;
      const entryKey = getEntryKey(entry);
      if (!seenEntries.has(entryKey)) {
        seenEntries.add(entryKey);
        collected.push(entry);
      }
    }

    const validTimestamps = page.map(entry => Number(entry?.createdAt)).filter(Number.isFinite);
    if (validTimestamps.length === 0) {
      throw new Error(`Sunflower ${type} page ${pageCount} did not contain a valid pagination timestamp`);
    }
    const nextCursor = Math.min(...validTimestamps);
    if (nextCursor < cutoff) break;
    if (cursor !== undefined && nextCursor >= cursor) {
      throw new Error(`Sunflower ${type} cursor did not move backward on page ${pageCount}`);
    }
    cursor = nextCursor;
  }

  if (pageCount === MAX_PAGES) {
    throw new Error(`Sunflower ${type} reached the ${MAX_PAGES}-page safety limit`);
  }
  collected.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
  return { data: { feed: collected.map(toPublicEntry) }, pageCount };
};

const uploadJson = async (key, body) => {
  await s3.send(new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: JSON.stringify(body, null, 2),
    ContentType: "application/json; charset=utf-8",
    CacheControl: "no-cache, no-store, must-revalidate",
  }));
};

export const handler = async () => {
  if (UPDATES_PAUSED) {
    console.log("Helper updates are manually paused. Existing S3 snapshots were not changed.");
    return { ok: true, skipped: true, reason: "UPDATES_PAUSED" };
  }
  if (!SECRET_ID) throw new Error("Missing SECRET_ID environment variable");
  if (!BUCKET_NAME) throw new Error("Missing BUCKET_NAME environment variable");
  if (!FARM_ID) throw new Error("Missing FARM_ID environment variable");

  const updateTime = Date.now();
  const bearerToken = await getBearerToken();
  const updatedAt = new Date(updateTime).toISOString();
  const cutoff = updateTime - RETENTION_DAYS * DAY_MS;
  const cutoffAt = new Date(cutoff).toISOString();
  const fetched = {};

  for (const [type, config] of Object.entries(endpoints)) {
    fetched[type] = await fetchFeed(type, config.url, bearerToken, cutoff);
  }

  const results = {};
  for (const [type, config] of Object.entries(endpoints)) {
    const snapshot = {
      snapshotAt: updatedAt,
      cutoffAt,
      retentionDays: RETENTION_DAYS,
      farmId: FARM_ID,
      data: fetched[type].data,
    };
    await uploadJson(config.key, snapshot);
    results[type] = {
      key: config.key,
      entries: fetched[type].data.feed.length,
      pages: fetched[type].pageCount,
    };
  }

  return { ok: true, updatedAt, cutoffAt, retentionDays: RETENTION_DAYS, results };
};
