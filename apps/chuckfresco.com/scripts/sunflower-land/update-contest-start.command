#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/contestStart.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/contestStart.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/contestStart.json"

echo "Sunflower Land raffle start-date updater"
echo
echo "Enter Pacific time like: July 16 7pm PST"
echo "You can also include a year: July 16 2026 7:00pm PST"
echo

if [ "$#" -gt 0 ]; then
  DATE_INPUT="$*"
  echo "Using: $DATE_INPUT"
else
  read "DATE_INPUT?Contest start: "
fi

if [ -z "${DATE_INPUT//[[:space:]]/}" ]; then
  echo "ERROR: A contest start date is required."
  read -k 1 "?Press any key to close..."
  exit 1
fi

TZ="America/Los_Angeles" node - "$DATE_INPUT" "$JSON_FILE" <<'NODE'
const fs = require("fs");

const input = process.argv[2].trim().replace(/\s+/g, " ");
const outputPath = process.argv[3];
const match = input.match(/^([a-z]+)\s+(\d{1,2})(?:,?\s+(\d{4}))?\s+(?:at\s+)?(\d{1,2})(?::(\d{2}))?\s*(am|pm)(?:\s+(pst|pdt|pt|pacific))?$/i);

if (!match) {
  console.error("ERROR: Date format not recognized.");
  console.error("Try: July 16 7pm PST");
  console.error("Or:  July 16 2026 7:00pm PST");
  process.exit(1);
}

const monthNames = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];
const shortMonthNames = monthNames.map(month => month.slice(0, 3));
const monthInput = match[1].toLowerCase();
let month = monthNames.indexOf(monthInput);
if (month < 0) month = shortMonthNames.indexOf(monthInput.slice(0, 3));

if (month < 0) {
  console.error(`ERROR: Unknown month "${match[1]}".`);
  process.exit(1);
}

const currentYear = Number(new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  year: "numeric"
}).format(new Date()));
const year = match[3] ? Number(match[3]) : currentYear;
const day = Number(match[2]);
let hour = Number(match[4]);
const minute = match[5] ? Number(match[5]) : 0;
const meridiem = match[6].toLowerCase();

if (hour < 1 || hour > 12 || minute < 0 || minute > 59) {
  console.error("ERROR: Enter a valid 12-hour time, such as 7pm or 7:30pm.");
  process.exit(1);
}

if (meridiem === "am" && hour === 12) hour = 0;
if (meridiem === "pm" && hour !== 12) hour += 12;

const start = new Date(year, month, day, hour, minute, 0, 0);
if (
  start.getFullYear() !== year ||
  start.getMonth() !== month ||
  start.getDate() !== day ||
  start.getHours() !== hour ||
  start.getMinutes() !== minute
) {
  console.error("ERROR: That calendar date or local time is not valid in Pacific time.");
  process.exit(1);
}

const pad = value => String(value).padStart(2, "0");
const offsetMinutes = -start.getTimezoneOffset();
const offsetSign = offsetMinutes >= 0 ? "+" : "-";
const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
const offsetRemainder = Math.abs(offsetMinutes) % 60;
const timestamp = [
  `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`,
  `T${pad(start.getHours())}:${pad(start.getMinutes())}:00`,
  `${offsetSign}${pad(offsetHours)}:${pad(offsetRemainder)}`
].join("");

fs.writeFileSync(outputPath, `${JSON.stringify({ contestStart: timestamp }, null, 2)}\n`);

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short"
});

console.log("\nUpdated contestStart.json");
console.log(`Pacific time: ${formatter.format(start)}`);
console.log(`JSON value:   ${timestamp}`);
NODE

echo
read "UPLOAD_REPLY?Upload this start date to S3 now? [y/N] "

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
  echo "Uploaded to S3 and requested a CloudFront refresh."
else
  echo
  echo "Local file updated. S3 was not changed."
fi

echo
read -k 1 "?Press any key to close..."
