#!/bin/zsh

set -e

PUBLIC_SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_DIR="$PUBLIC_SITE_DIR/build"
S3_TARGET="s3://chuckfresco"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/*"

echo "Building the public chuckfresco.com site..."
echo

cd "$PUBLIC_SITE_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm was not found. Install Node/npm first, then try again."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found. Install it first, then try again."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

npm run build

echo
echo "Uploading only the public site build folder to $S3_TARGET..."
echo "Source: $BUILD_DIR/"
echo "This does not upload admin.chuckfresco.com, api.chuckfreso.com, or repo source files."
echo

aws s3 sync "$BUILD_DIR/" "$S3_TARGET" \
  --acl public-read \
  --exclude "assets/sunflower-land/helperCheers.json" \
  --exclude "assets/sunflower-land/helperHelps.json"

echo
echo "Creating CloudFront invalidation for $CLOUDFRONT_PATH..."
echo

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "$CLOUDFRONT_PATH"

echo
echo "Done. CloudFront may take a minute or two to show the newest site."
echo "Check: https://chuckfresco.com"
echo

read -k 1 "?Press any key to close..."
