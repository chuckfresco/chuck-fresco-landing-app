#!/bin/zsh

set -e

ADMIN_SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_DIR="$ADMIN_SITE_DIR/src/starter/build"
S3_TARGET="s3://admin.chuckfresco.com"
CLOUDFRONT_DISTRIBUTION_ID="E133IZNQQ1EXLJ"
CLOUDFRONT_PATH="/*"

echo "Building the admin.chuckfresco.com UI..."
echo

cd "$ADMIN_SITE_DIR"

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

ENV_FILES_FOUND="$(find "$BUILD_DIR" \( -name ".env" -o -name ".env.*" -o -name "*.env" -o -name "*.env.*" \) -print)"

if [ -n "$ENV_FILES_FOUND" ]; then
  echo
  echo "ERROR: Refusing to upload because env files were found in the build folder:"
  echo "$ENV_FILES_FOUND"
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

echo
echo "Uploading only the admin UI build folder to $S3_TARGET..."
echo "Source: $BUILD_DIR/"
echo "This does not upload .env files, repo source files, or the Node admin server."
echo

aws s3 sync "$BUILD_DIR/" "$S3_TARGET" \
  --delete \
  --exclude ".env*" \
  --exclude "*/.env*"

if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
  echo
  echo "Creating CloudFront invalidation for $CLOUDFRONT_PATH..."
  echo

  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "$CLOUDFRONT_PATH"
else
  echo
  echo "Skipping CloudFront invalidation because CLOUDFRONT_DISTRIBUTION_ID is not set in this command file."
  echo "After your admin distribution is ready, paste its distribution ID into this file to enable invalidations."
fi

echo
echo "Done. CloudFront may take a minute or two to show the newest admin UI."
echo "Check: https://admin.chuckfresco.com"
echo

read -k 1 "?Press any key to close..."
