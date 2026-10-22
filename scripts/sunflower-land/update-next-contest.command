#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../../apps/chuckfresco.com" && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/nextContest.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/nextContest.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/nextContest.json"
PUBLIC_URL="https://chuckfresco.com${CLOUDFRONT_PATH}"
DATE_VALUE="${1:-}"
TIME_VALUE="${2:-17:00}"
OFFSET_VALUE="${3:--07:00}"

echo "Sunflower Land next-contest countdown"
echo

if [ -z "$DATE_VALUE" ]; then
  read "DATE_VALUE?Next contest date (YYYY-MM-DD): "
  read "TIME_VALUE?Pacific time in 24-hour format [17:00]: "
  TIME_VALUE="${TIME_VALUE:-17:00}"
  read "OFFSET_VALUE?Pacific UTC offset [-07:00 for PDT, -08:00 for PST] [-07:00]: "
  OFFSET_VALUE="${OFFSET_VALUE:--07:00}"
fi

node - "$JSON_FILE" "$DATE_VALUE" "$TIME_VALUE" "$OFFSET_VALUE" <<'NODE'
const fs = require("fs");
const [filePath, dateValue, timeValue, offsetValue] = process.argv.slice(2);

if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
  console.error("ERROR: Date must use YYYY-MM-DD.");
  process.exit(1);
}
if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(timeValue)) {
  console.error("ERROR: Time must use 24-hour HH:MM format.");
  process.exit(1);
}
if (!/^-0[78]:00$/.test(offsetValue)) {
  console.error("ERROR: Pacific offset must be -07:00 (PDT) or -08:00 (PST).");
  process.exit(1);
}

const start = `${dateValue}T${timeValue}:00${offsetValue}`;
const timestamp = new Date(start).getTime();
if (!Number.isFinite(timestamp)) {
  console.error("ERROR: The supplied contest date is invalid.");
  process.exit(1);
}

const temporaryPath = `${filePath}.tmp`;
fs.writeFileSync(temporaryPath, `${JSON.stringify({ start }, null, 2)}\n`);
fs.renameSync(temporaryPath, filePath);
console.log(`Next contest: ${start}`);
NODE

echo
read "UPLOAD_REPLY?Upload this countdown now? [y/N] "

if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  aws s3 cp "$JSON_FILE" "$S3_TARGET" \
    --acl public-read \
    --content-type "application/json" \
    --cache-control "no-cache, no-store, must-revalidate"

  INVALIDATION_ID="$(aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "$CLOUDFRONT_PATH" \
    --query "Invalidation.Id" \
    --output text)"

  EXPECTED_START="$(node -p "require(process.argv[1]).start" "$JSON_FILE")"
  LIVE_START=""

  echo "Invalidation $INVALIDATION_ID created. Waiting for the public file to update..."
  for ATTEMPT in {1..25}; do
    LIVE_START="$(curl --fail --silent --show-error \
      -H "Cache-Control: no-cache" \
      "${PUBLIC_URL}?verify=$(date +%s)-${ATTEMPT}" |
      node -e '
        let input = "";
        process.stdin.on("data", chunk => input += chunk);
        process.stdin.on("end", () => {
          const data = JSON.parse(input);
          process.stdout.write(data.start || "");
        });
      ')" || LIVE_START=""

    if [ "$LIVE_START" = "$EXPECTED_START" ]; then
      break
    fi

    sleep 2
  done

  if [ "$LIVE_START" != "$EXPECTED_START" ]; then
    echo "ERROR: Live countdown verification failed."
    echo "Expected: $EXPECTED_START"
    echo "Received: ${LIVE_START:-<empty>}"
    exit 1
  fi

  echo
  echo "Next-contest countdown uploaded, invalidated, and verified live."
else
  echo
  echo "Local countdown updated. The live site was not changed."
fi
