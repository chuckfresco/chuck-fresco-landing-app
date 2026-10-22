const fs = require("fs");

function parseGiveaway(value) {
  const input = value.trim();
  if (input.toUpperCase() === "NA") return { url: null, statusId: null };
  let url;
  try { url = new URL(input); } catch { throw new Error("Paste an X post URL or NA."); }
  const match = url.pathname.match(/^\/(?:[A-Za-z0-9_]+|i\/web)\/status\/(\d+)(?:\/(?:photo|video)\/\d+)?\/?$/);
  if (url.protocol !== "https:" || url.username || url.password || url.port ||
      !["x.com", "www.x.com", "twitter.com", "www.twitter.com"].includes(url.hostname) || !match) {
    throw new Error("Paste a valid https://x.com/username/status/123 post URL or NA.");
  }
  return { url: `https://x.com${url.pathname.replace(/\/(photo|video)\/\d+\/?$/, "")}`, statusId: match[1] };
}

if (require.main === module) {
  try {
    const [file, input = ""] = process.argv.slice(2);
    const setting = parseGiveaway(input);
    fs.writeFileSync(`${file}.tmp`, `${JSON.stringify(setting, null, 2)}\n`);
    fs.renameSync(`${file}.tmp`, file);
    console.log(setting.url ? `Current contest: ${setting.url}` : "No active contest");
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exitCode = 1;
  }
}
module.exports = { parseGiveaway };
