#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../../apps/chuckfresco.com" && pwd)"
WINNERS_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/winners.json"
CONTEST_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/contestStart.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/winners.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/winners.json"

pause_on_error() {
  local exit_status=$?
  if (( exit_status != 0 )); then
    echo
    echo "The raffle winner updater stopped because of the error shown above."
    read -k 1 "?Press any key to close..."
  fi
}
trap pause_on_error EXIT

echo "Sunflower Land raffle winner archive"
echo
echo "After selecting all winners, click Copy winners on the website."
echo "Reading the copied winner data directly from your clipboard now."
echo
if ! command -v pbpaste >/dev/null 2>&1; then
  echo "ERROR: The macOS pbpaste command was not found. No files were changed."
  exit 1
fi

WINNER_DATA="$(pbpaste)"

if [ -z "${WINNER_DATA//[[:space:]]/}" ]; then
  echo "ERROR: The clipboard does not contain winner data. Click Copy winners and try again."
  exit 1
fi

echo "Captured ${#WINNER_DATA} characters from the clipboard. Verifying now..."

node - "$WINNER_DATA" "$WINNERS_FILE" "$CONTEST_FILE" <<'NODE'
const fs = require("fs");
let raffle;

try {
  raffle = JSON.parse(process.argv[2]);
} catch (error) {
  console.error("ERROR: The pasted text is not valid winner data. Use Copy winners on the raffle page.");
  process.exit(1);
}

const archivePath = process.argv[3];
const contestPath = process.argv[4];
let minimumTickets = 12;
let winnerCount = 8;
let perfectWinnerCount = 3;
let prizePerWinner = 20;
try {
  const contest = JSON.parse(fs.readFileSync(contestPath, "utf8"));
  const configuredMinimum = Number(contest.minimumTickets);
  if (Number.isInteger(configuredMinimum) && configuredMinimum > 0 && configuredMinimum <= 28) {
    minimumTickets = configuredMinimum;
  }
  const configuredWinnerCount = Number(contest.winnerCount);
  const configuredPerfectWinnerCount = Number(contest.perfectWinnerCount);
  const configuredPrize = Number(contest.prizePerWinner);
  if (Number.isInteger(configuredWinnerCount) && configuredWinnerCount > 0) winnerCount = configuredWinnerCount;
  if (Number.isInteger(configuredPerfectWinnerCount) && configuredPerfectWinnerCount > 0 && configuredPerfectWinnerCount < winnerCount) {
    perfectWinnerCount = configuredPerfectWinnerCount;
  }
  if (Number.isFinite(configuredPrize) && configuredPrize > 0) prizePerWinner = configuredPrize;
} catch (error) {
  console.error("ERROR: The contest configuration is not valid JSON.");
  process.exit(1);
}
if (["contestStart", "contestEnd", "drawnAt"].some(field => Number.isNaN(new Date(raffle[field]).getTime()))) {
  console.error("ERROR: The winner data is missing valid contest or drawing dates.");
  process.exit(1);
}
if (!Array.isArray(raffle.winners) || raffle.winners.length !== winnerCount) {
  console.error(`ERROR: Exactly ${winnerCount} winners are required. Received ${Array.isArray(raffle.winners) ? raffle.winners.length : 0}.`);
  process.exit(1);
}

const farmIds = new Set();
let savedPerfectWinners = 0;
let savedGeneralWinners = 0;
for (const winner of raffle.winners) {
  const farmId = String(winner.farmId || "").trim();
  const username = String(winner.username || "").trim();
  const tickets = Number(winner.tickets);
  const prize = Number(winner.prize);
  const pool = String(winner.pool || "").trim().toLowerCase();
  if (!farmId || !username || !Number.isInteger(tickets) || tickets < minimumTickets || tickets > 28 || prize !== prizePerWinner || !["perfect", "general"].includes(pool)) {
    console.error(`ERROR: Invalid winner record for ${username || "unknown player"}.`);
    console.error(`Each winner needs a farm ID, username, ${minimumTickets}–28 tickets, a ${prizePerWinner} FLOWER prize, and a perfect/general pool.`);
    process.exit(1);
  }
  if (farmIds.has(farmId)) {
    console.error(`ERROR: Farm ${farmId} appears more than once.`);
    process.exit(1);
  }
  farmIds.add(farmId);
  if (pool === "perfect") savedPerfectWinners += 1;
  if (pool === "general") savedGeneralWinners += 1;
}

if (savedPerfectWinners !== perfectWinnerCount || savedGeneralWinners !== winnerCount - perfectWinnerCount) {
  console.error(`ERROR: Expected ${perfectWinnerCount} Perfect Helper winners and ${winnerCount - perfectWinnerCount} general winners.`);
  console.error(`Received ${savedPerfectWinners} Perfect Helper winners and ${savedGeneralWinners} general winners.`);
  process.exit(1);
}

const poolsAreInDrawOrder = raffle.winners.every((winner, index) => (
  index < perfectWinnerCount
    ? String(winner.pool).toLowerCase() === "perfect"
    : String(winner.pool).toLowerCase() === "general"
));
if (!poolsAreInDrawOrder) {
  console.error(`ERROR: The first ${perfectWinnerCount} winners must come from the Perfect Helper draw, followed by the general winners.`);
  process.exit(1);
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
  totalPrize: winnerCount * prizePerWinner,
  winners: raffle.winners.map(winner => ({
    farmId: String(winner.farmId),
    username: String(winner.username),
    tickets: Number(winner.tickets),
    prize: prizePerWinner,
    pool: String(winner.pool),
    pickedAt: new Date(winner.pickedAt).toISOString()
  }))
});
archive.raffles.sort((a, b) => new Date(b.contestStart) - new Date(a.contestStart));
console.log(`Verified winner data: ${winnerCount} winners (${savedPerfectWinners} perfect, ${savedGeneralWinners} general).`);
fs.writeFileSync(archivePath, `${JSON.stringify(archive, null, 2)}\n`);
console.log(`\nAdded ${winnerCount} winners to winners.json.`);
console.log(`Saved raffles: ${archive.raffles.length}`);
NODE

echo
read "UPLOAD_REPLY?Upload the updated winner archive to S3 now? [y/N] "

if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  if ! command -v aws >/dev/null 2>&1; then
    echo "ERROR: AWS CLI was not found. The local winners file was still updated."
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
