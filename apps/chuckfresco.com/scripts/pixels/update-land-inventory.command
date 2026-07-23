#!/bin/zsh

set -e

PUBLIC_SITE_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/pixels/land/landInventory.json"
S3_TARGET="s3://chuckfresco/assets/pixels/land/landInventory.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/pixels/land/landInventory.json"

echo "Updating Pixels land inventory JSON..."
echo

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found. Install it first, then try again."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

if [ ! -f "$JSON_FILE" ]; then
  echo "ERROR: Could not find:"
  echo "$JSON_FILE"
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

echo "Uploading:"
echo "$JSON_FILE"
echo "to:"
echo "$S3_TARGET"
echo "This updates only the public chuckfresco.com JSON asset."
echo

aws s3 cp "$JSON_FILE" "$S3_TARGET" \
  --content-type application/json \
  --cache-control "no-cache"

echo
echo "Creating CloudFront invalidation for $CLOUDFRONT_PATH..."
echo

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "$CLOUDFRONT_PATH"

echo
echo "Done. CloudFront may take a minute or two to show the newest JSON."
echo "Check: https://chuckfresco.com$CLOUDFRONT_PATH"
echo

read -k 1 "?Press any key to close..."
