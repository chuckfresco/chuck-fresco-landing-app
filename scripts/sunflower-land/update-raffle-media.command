#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../../apps/chuckfresco.com" && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/raffleMedia.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/raffleMedia.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/raffleMedia.json"
PLATFORM="${1:-}"
X_URL="${2:-}"

if [ -z "$PLATFORM" ]; then
  echo "Choose what appears beside the raffle information:"
  echo
  echo "  twitch = Chuck Fresco live stream"
  echo "  x      = recorded X post"
  echo
  read "PLATFORM?Enter twitch or x: "
fi

PLATFORM="$(echo "$PLATFORM" | tr '[:upper:]' '[:lower:]')"

if [[ "$PLATFORM" != "twitch" && "$PLATFORM" != "x" ]]; then
  echo "ERROR: Choose twitch or x."
  exit 1
fi

if [[ "$PLATFORM" == "x" && -z "$X_URL" ]]; then
  echo
  read "X_URL?Paste the X post link: "
fi

node - "$JSON_FILE" "$PLATFORM" "$X_URL" <<'NODE'
const fs = require("fs");
const filePath = process.argv[2];
const platform = process.argv[3];
const suppliedUrl = process.argv[4].trim();
let media;

if (platform === "twitch") {
  media = {
    platform: "twitch",
    url: "https://www.twitch.tv/chuckfresco"
  };
} else {
  let parsedUrl;
  try {
    parsedUrl = new URL(suppliedUrl);
  } catch {
    console.error("ERROR: Paste a valid X post URL.");
    process.exit(1);
  }

  if (!["x.com", "www.x.com", "twitter.com", "www.twitter.com"].includes(parsedUrl.hostname.toLowerCase())) {
    console.error("ERROR: The recording URL must be from x.com or twitter.com.");
    process.exit(1);
  }

  const statusMatch = parsedUrl.pathname.match(/\/status\/(\d+)/);
  if (!statusMatch) {
    console.error("ERROR: The X URL does not contain a valid status ID.");
    process.exit(1);
  }

  media = {
    platform: "x",
    url: suppliedUrl,
    statusId: statusMatch[1]
  };
}

const temporaryPath = `${filePath}.tmp`;
fs.writeFileSync(temporaryPath, `${JSON.stringify(media, null, 2)}\n`);
fs.renameSync(temporaryPath, filePath);
console.log(`Configured raffle media for ${platform}.`);
NODE

echo
read "UPLOAD_REPLY?Upload this raffle media setting now? [y/N] "

if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  aws s3 cp "$JSON_FILE" "$S3_TARGET" \
    --acl public-read \
    --content-type "application/json" \
    --cache-control "no-cache, no-store, must-revalidate"

  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "$CLOUDFRONT_PATH"

  echo
  echo "Raffle media updated. Refresh the helpers page to see it."
else
  echo
  echo "Local raffle media updated. The live site was not changed."
fi
