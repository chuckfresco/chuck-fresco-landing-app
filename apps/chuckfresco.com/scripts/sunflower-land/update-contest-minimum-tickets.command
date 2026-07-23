#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/contestStart.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/contestStart.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/contestStart.json"

echo "Sunflower Land contest minimum-ticket updater"
echo

CURRENT_MINIMUM="$(node - "$JSON_FILE" <<'NODE'
const fs = require("fs");

try {
  const contest = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
  const value = Number(contest.minimumTickets);
  process.stdout.write(String(Number.isInteger(value) ? value : 14));
} catch (error) {
  console.error("ERROR: contestStart.json is not valid JSON.");
  process.exit(1);
}
NODE
)"

echo "Current minimum: $CURRENT_MINIMUM tickets"
echo

if [ "$#" -gt 0 ]; then
  MINIMUM_TICKETS="$1"
  echo "Using new minimum: $MINIMUM_TICKETS"
else
  read "MINIMUM_TICKETS?New minimum ticket count: "
fi

node - "$JSON_FILE" "$MINIMUM_TICKETS" <<'NODE'
const fs = require("fs");
const filePath = process.argv[2];
const minimumTickets = Number(process.argv[3]);

if (!Number.isInteger(minimumTickets) || minimumTickets < 1 || minimumTickets > 28) {
  console.error("ERROR: Minimum tickets must be a whole number from 1 through 28.");
  process.exit(1);
}

let contest;
try {
  contest = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch (error) {
  console.error("ERROR: contestStart.json is not valid JSON.");
  process.exit(1);
}

if (!contest.contestStart || Number.isNaN(new Date(contest.contestStart).getTime())) {
  console.error("ERROR: contestStart.json does not contain a valid contestStart value.");
  process.exit(1);
}

contest.minimumTickets = minimumTickets;
const temporaryPath = `${filePath}.tmp`;
fs.writeFileSync(temporaryPath, `${JSON.stringify(contest, null, 2)}\n`);
fs.renameSync(temporaryPath, filePath);

console.log(`\nUpdated local minimum to ${minimumTickets} tickets.`);
console.log(`Preserved contest start: ${contest.contestStart}`);
NODE

echo
read "UPLOAD_REPLY?Upload this change to the live site now? [y/N] "

if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  if ! command -v aws >/dev/null 2>&1; then
    echo "ERROR: AWS CLI was not found. The local JSON file was still updated."
    read -k 1 "?Press any key to close..."
    exit 1
  fi

  aws s3 cp "$JSON_FILE" "$S3_TARGET" \
    --acl public-read \
    --content-type "application/json" \
    --cache-control "no-cache, no-store, must-revalidate"

  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "$CLOUDFRONT_PATH"

  echo
  echo "Uploaded the contest rules and requested a CloudFront refresh."
  echo "Live file: https://chuckfresco.com/assets/sunflower-land/contestStart.json"
else
  echo
  echo "Local JSON updated. The live site was not changed."
fi

echo
read -k 1 "?Press any key to close..."
