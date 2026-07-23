const fs = require("fs");
const path = require("path");

const FARM_ID = "7089202106478272";
const outputPaths = {
  cheer: path.resolve(__dirname, "../../public/assets/sunflower-land/helperCheers.json"),
  help: path.resolve(__dirname, "../../public/assets/sunflower-land/helperHelps.json")
};

const snapshotType = process.argv[2];
const inputPath = process.argv[3];

const readStdin = () => fs.readFileSync(0, "utf8");

const getFeed = payload => {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.feed)) return payload.feed;
  if (payload && payload.data && Array.isArray(payload.data.feed)) return payload.data.feed;
  if (payload && payload.data && Array.isArray(payload.data)) return payload.data;

  throw new Error("Snapshot must be a JSON array, { feed: [...] }, or { data: { feed: [...] } }.");
};

const normalizeEntry = item => {
  if (!item || !item.sender || !item.recipient) return null;
  if (String(item.recipient.id) !== FARM_ID) return null;
  if (item.type !== snapshotType) return null;

  return {
    sender: {
      id: item.sender.id,
      username: item.sender.username || "Unknown"
    },
    recipient: {
      id: item.recipient.id,
      username: item.recipient.username || "ChuckFresco"
    },
    message: item.message || (item.type === "help" ? "Helped your farm!" : "Cheered your farm!"),
    createdAt: Number(item.createdAt),
    type: item.type,
    helpedThemToday: Boolean(item.helpedThemToday),
    cheeredThemToday: Boolean(item.cheeredThemToday)
  };
};

const run = () => {
  if (!outputPaths[snapshotType] || !inputPath) {
    throw new Error("Usage: npm run update:sunflower-helpers -- cheer path/to/cheers.json OR npm run update:sunflower-helpers -- help path/to/helps.json");
  }

  const raw = inputPath === "-" ? readStdin() : fs.readFileSync(path.resolve(inputPath), "utf8");
  const payload = JSON.parse(raw);
  const feed = getFeed(payload)
    .map(normalizeEntry)
    .filter(Boolean)
    .filter(item => Number.isFinite(item.createdAt))
    .sort((a, b) => b.createdAt - a.createdAt);

  fs.writeFileSync(
    outputPaths[snapshotType],
    `${JSON.stringify({
      snapshotAt: new Date().toISOString(),
      farmId: FARM_ID,
      feed
    }, null, 2)}\n`
  );

  console.log(`Updated ${path.relative(process.cwd(), outputPaths[snapshotType])} with ${feed.length} ${snapshotType} entries.`);
};

try {
  run();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
