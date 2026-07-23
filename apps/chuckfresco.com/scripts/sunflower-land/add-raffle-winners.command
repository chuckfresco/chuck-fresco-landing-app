#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
WINNERS_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/winners.json"
CONTEST_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/contestStart.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/winners.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/winners.json"

echo "Sunflower Land raffle winner archive"
echo
echo "After selecting all 8 winners, click Copy 8 winners on the website."
echo "Paste the copied line below, then press Enter."
echo
read "WINNER_DATA?Paste winners: "

if [ -z "${WINNER_DATA//[[:space:]]/}" ]; then
  echo "ERROR: No winner data was pasted."
  read -k 1 "?Press any key to close..."
  exit 1
fi

node - "$WINNER_DATA" "$WINNERS_FILE" "$CONTEST_FILE" <<'NODE'
const fs = require("fs");
let raffle;

try {
  raffle = JSON.parse(process.argv[2]);
} catch (error) {
  console.error("ERROR: The pasted text is not valid winner data. Use Copy 8 winners on the raffle page.");
  process.exit(1);
}

const archivePath = process.argv[3];
const contestPath = process.argv[4];
let minimumTickets = 14;
try {
  const contest = JSON.parse(fs.readFileSync(contestPath, "utf8"));
  const configuredMinimum = Number(contest.minimumTickets);
  if (Number.isInteger(configuredMinimum) && configuredMinimum > 0 && configuredMinimum <= 28) {
    minimumTickets = configuredMinimum;
  }
} catch (error) {
  console.error("ERROR: The contest configuration is not valid JSON.");
  process.exit(1);
}
if (["contestStart", "contestEnd", "drawnAt"].some(field => Number.isNaN(new Date(raffle[field]).getTime()))) {
  console.error("ERROR: The winner data is missing valid contest or drawing dates.");
  process.exit(1);
}
if (!Array.isArray(raffle.winners) || raffle.winners.length !== 8) {
  console.error(`ERROR: Exactly 8 winners are required. Received ${Array.isArray(raffle.winners) ? raffle.winners.length : 0}.`);
  process.exit(1);
}

const farmIds = new Set();
for (const winner of raffle.winners) {
  const farmId = String(winner.farmId || "").trim();
  const username = String(winner.username || "").trim();
  const tickets = Number(winner.tickets);
  const prize = Number(winner.prize);
  if (!farmId || !username || !Number.isInteger(tickets) || tickets < minimumTickets || tickets > 28 || prize !== 20) {
    console.error(`ERROR: Invalid winner record for ${username || "unknown player"}.`);
    console.error(`Each winner needs a farm ID, username, ${minimumTickets}–28 tickets, and a 20 FLOWER prize.`);
    process.exit(1);
  }
  if (farmIds.has(farmId)) {
    console.error(`ERROR: Farm ${farmId} appears more than once.`);
    process.exit(1);
  }
  farmIds.add(farmId);
}

let archive = { raffles: [] };
if (fs.existsSync(archivePath)) {
  try {
    archive = JSON.parse(fs.readFileSync(archivePath, "utf8"));
  } catch (error) {
    console.error("ERROR: The existing winners.json file is not valid JSON.");
    process.exit(1);
  }
}
if (!Array.isArray(archive.raffles)) archive.raffles = [];

const contestStart = new Date(raffle.contestStart).toISOString();
if (archive.raffles.some(saved => new Date(saved.contestStart).toISOString() === contestStart)) {
  console.error("ERROR: Winners for this contest are already in winners.json.");
  process.exit(1);
}

archive.raffles.push({
  contestStart,
  contestEnd: new Date(raffle.contestEnd).toISOString(),
  drawnAt: new Date(raffle.drawnAt).toISOString(),
  totalPrize: 160,
  winners: raffle.winners.map(winner => ({
    farmId: String(winner.farmId),
    username: String(winner.username),
    tickets: Number(winner.tickets),
    prize: 20,
    pickedAt: new Date(winner.pickedAt).toISOString()
  }))
});
archive.raffles.sort((a, b) => new Date(b.contestStart) - new Date(a.contestStart));
fs.writeFileSync(archivePath, `${JSON.stringify(archive, null, 2)}\n`);
console.log("\nAdded 8 winners to winners.json.");
console.log(`Saved raffles: ${archive.raffles.length}`);
NODE

echo
read "UPLOAD_REPLY?Upload the updated winner archive to S3 now? [y/N] "

if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  if ! command -v aws >/dev/null 2>&1; then
    echo "ERROR: AWS CLI was not found. The local winners file was still updated."
    read -k 1 "?Press any key to close..."
    exit 1
  fi
  aws s3 cp "$WINNERS_FILE" "$S3_TARGET" \
    --acl public-read \
    --content-type "application/json" \
    --cache-control "no-cache, no-store, must-revalidate"
  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "$CLOUDFRONT_PATH"
  echo
  echo "Winner archive uploaded and CloudFront refresh requested."
else
  echo
  echo "Local winner archive updated. S3 was not changed."
fi

echo
read -k 1 "?Press any key to close..."
