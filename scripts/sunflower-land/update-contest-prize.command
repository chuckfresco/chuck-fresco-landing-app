#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../../apps/chuckfresco.com" && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/contestStart.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/contestStart.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/contestStart.json"

finish() {
  local exit_status=$?
  echo
  if (( exit_status != 0 )); then
    echo "The contest-prize updater stopped because of the error shown above."
  fi
  read "?Press Enter to close..."
  return $exit_status
}
trap finish EXIT

echo "Sunflower Land contest prize calculator"
echo
echo "Fetching the current FLOWER price from CoinGecko..."
COINGECKO_URL="https://api.coingecko.com/api/v3/simple/price?ids=flower-2&vs_currencies=usd"
FLOWER_PRICE=""

if command -v curl >/dev/null 2>&1; then
  PRICE_RESPONSE="$(curl --fail --silent --show-error \
    --header "Accept: application/json" \
    --header "User-Agent: ChuckFresco-Contest-Prize-Calculator/1.0" \
    "$COINGECKO_URL" 2>/dev/null || true)"

  if [ -n "$PRICE_RESPONSE" ]; then
    FLOWER_PRICE="$(node -e '
      try {
        const payload = JSON.parse(process.argv[1]);
        const price = Number(payload?.["flower-2"]?.usd);
        if (Number.isFinite(price) && price > 0) process.stdout.write(String(price));
      } catch (error) {}
    ' "$PRICE_RESPONSE")"
  fi
fi

if [ -z "$FLOWER_PRICE" ]; then
  echo "CoinGecko price lookup failed."
  read "FLOWER_PRICE?Enter the current FLOWER price in USD manually: "
else
  echo "CoinGecko FLOWER price: \$$FLOWER_PRICE USD"
  echo "Source: https://www.coingecko.com/en/coins/flower-2"
fi

echo
read "BUDGET_USD?Maximum contest budget in USD [10]: "
BUDGET_USD="${BUDGET_USD:-10}"
read "WINNER_COUNT?Number of winners [8]: "
WINNER_COUNT="${WINNER_COUNT:-8}"

RECOMMENDATION="$(node - "$FLOWER_PRICE" "$BUDGET_USD" "$WINNER_COUNT" <<'NODE'
const [priceInput, budgetInput, winnersInput] = process.argv.slice(2);
const flowerPriceUsd = Number(priceInput);
const budgetUsd = Number(budgetInput);
const winnerCount = Number(winnersInput);

if (!Number.isFinite(flowerPriceUsd) || flowerPriceUsd <= 0) {
  console.error("ERROR: FLOWER price must be a number greater than zero.");
  process.exit(1);
}
if (!Number.isFinite(budgetUsd) || budgetUsd <= 0) {
  console.error("ERROR: Budget must be a number greater than zero.");
  process.exit(1);
}
if (!Number.isInteger(winnerCount) || winnerCount < 1 || winnerCount > 100) {
  console.error("ERROR: Winner count must be a whole number from 1 through 100.");
  process.exit(1);
}

const recommendation = Math.floor((budgetUsd / flowerPriceUsd) / winnerCount);
if (recommendation < 1) {
  console.error("ERROR: This budget cannot provide at least 1 FLOWER to every winner.");
  process.exit(1);
}
process.stdout.write(String(recommendation));
NODE
)"

echo
echo "Recommendation: $RECOMMENDATION FLOWER per winner"
echo "Projected total: $((RECOMMENDATION * WINNER_COUNT)) FLOWER across $WINNER_COUNT winners"
node -e 'console.log(`Projected USD cost: $${(Number(process.argv[1]) * Number(process.argv[2]) * Number(process.argv[3])).toFixed(2)}`)' "$RECOMMENDATION" "$WINNER_COUNT" "$FLOWER_PRICE"
echo
read "PRIZE_PER_WINNER?FLOWER amount per winner [$RECOMMENDATION]: "
PRIZE_PER_WINNER="${PRIZE_PER_WINNER:-$RECOMMENDATION}"

RESULT="$(node - "$JSON_FILE" "$FLOWER_PRICE" "$BUDGET_USD" "$WINNER_COUNT" "$PRIZE_PER_WINNER" <<'NODE'
const fs = require("fs");
const [filePath, priceInput, budgetInput, winnersInput, prizeInput] = process.argv.slice(2);
const flowerPriceUsd = Number(priceInput);
const budgetUsd = Number(budgetInput);
const winnerCount = Number(winnersInput);
const prizePerWinner = Number(prizeInput);

if (!Number.isFinite(flowerPriceUsd) || flowerPriceUsd <= 0) {
  console.error("ERROR: FLOWER price must be a number greater than zero.");
  process.exit(1);
}
if (!Number.isFinite(budgetUsd) || budgetUsd <= 0) {
  console.error("ERROR: Budget must be a number greater than zero.");
  process.exit(1);
}
if (!Number.isInteger(winnerCount) || winnerCount < 1 || winnerCount > 100) {
  console.error("ERROR: Winner count must be a whole number from 1 through 100.");
  process.exit(1);
}
if (!Number.isInteger(prizePerWinner) || prizePerWinner < 1) {
  console.error("ERROR: Prize per winner must be a whole FLOWER amount greater than zero.");
  process.exit(1);
}

let contest;
try {
  contest = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch (error) {
  console.error("ERROR: contestStart.json is not valid JSON.");
  process.exit(1);
}

contest.winnerCount = winnerCount;
contest.prizePerWinner = prizePerWinner;
const totalFlower = winnerCount * prizePerWinner;
const estimatedUsd = totalFlower * flowerPriceUsd;
const temporaryPath = `${filePath}.tmp`;
fs.writeFileSync(temporaryPath, `${JSON.stringify(contest, null, 2)}\n`);
fs.renameSync(temporaryPath, filePath);

process.stdout.write(JSON.stringify({ winnerCount, prizePerWinner, totalFlower, estimatedUsd, budgetUsd, flowerPriceUsd, overBudget: estimatedUsd > budgetUsd }));
NODE
)"

node -e '
const result = JSON.parse(process.argv[1]);
console.log("\nUpdated local contest prize:");
console.log(`  Winners:         ${result.winnerCount}`);
console.log(`  Prize per winner: ${result.prizePerWinner} FLOWER`);
console.log(`  Total payout:     ${result.totalFlower} FLOWER`);
console.log(`  Estimated cost:   $${result.estimatedUsd.toFixed(2)} at $${result.flowerPriceUsd} per FLOWER`);
console.log(`  Budget:           $${result.budgetUsd.toFixed(2)}`);
if (result.overBudget) console.log("  WARNING: This selection is over the entered budget.");
' "$RESULT"

echo
read "UPLOAD_REPLY?Upload these prize settings to the live site now? [y/N] "

if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  aws s3 cp "$JSON_FILE" "$S3_TARGET" \
    --acl public-read \
    --content-type "application/json" \
    --cache-control "no-cache, no-store, must-revalidate"

  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "$CLOUDFRONT_PATH"

  echo
  echo "Contest prize settings uploaded and CloudFront refresh requested."
else
  echo
  echo "Local contest JSON updated. The live site was not changed."
fi
