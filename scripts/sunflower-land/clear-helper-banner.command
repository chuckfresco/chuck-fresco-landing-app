#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../../apps/chuckfresco.com" && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/updateHelperBanner.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/updateHelperBanner.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/updateHelperBanner.json"

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found."
  exit 1
fi

if [ -f "$JSON_FILE" ]; then
  cp "$JSON_FILE" "$JSON_FILE.bak"
fi

node - "$JSON_FILE" <<'NODE'
const fs = require("fs");
const filePath = process.argv[2];
const temporaryPath = `${filePath}.tmp`;

fs.writeFileSync(temporaryPath, "{}\n");
fs.renameSync(temporaryPath, filePath);
NODE

echo "Cleared the local helper banner."
echo "Uploading the empty banner configuration..."

aws s3 cp "$JSON_FILE" "$S3_TARGET" \
  --acl public-read \
  --content-type "application/json" \
  --cache-control "no-cache, no-store, must-revalidate"

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "$CLOUDFRONT_PATH" \
  --query 'Invalidation.Id' \
  --output text

echo
echo "The helper banner is disabled. Refresh the leaderboard page if it is already open."
echo "The previous local configuration is available at:"
echo "$JSON_FILE.bak"
