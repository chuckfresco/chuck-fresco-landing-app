#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PUBLIC_SITE_DIR="$REPO_ROOT/apps/chuckfresco.com"
BUILD_DIR="$PUBLIC_SITE_DIR/build"
S3_TARGET="s3://chuckfresco"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/*"

pause_on_error() {
  local exit_status=$?
  if (( exit_status != 0 )); then
    echo
    echo "Deployment stopped because of the error shown above."
    read -k 1 "?Press any key to close..."
  fi
}
trap pause_on_error EXIT

echo "Building the public chuckfresco.com site..."
echo

cd "$PUBLIC_SITE_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm was not found. Install Node/npm first, then try again."
  exit 1
fi

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found. Install it first, then try again."
  exit 1
fi

npm run build

ENV_FILES_FOUND="$(find "$BUILD_DIR" \( -name ".env" -o -name ".env.*" -o -name "*.env" -o -name "*.env.*" \) -print)"

if [ -n "$ENV_FILES_FOUND" ]; then
  echo
  echo "ERROR: Refusing to upload because env files were found in the build folder:"
  echo "$ENV_FILES_FOUND"
  exit 1
fi

echo
echo "Uploading only the public site build folder to $S3_TARGET..."
echo "Source: $BUILD_DIR/"
echo "This does not upload admin.chuckfresco.com, api.chuckfreso.com, or repo source files."
echo

aws s3 sync "$BUILD_DIR/" "$S3_TARGET" \
  --acl public-read \
  --exclude ".env*" \
  --exclude "*/.env*" \
  --exclude ".social-pages/*" \
  --exclude "assets/sunflower-land/helperCheers.json" \
  --exclude "assets/sunflower-land/helperHelps.json" \
  --exclude "assets/sunflower-land/contestStart.json" \
  --exclude "assets/sunflower-land/winners.json"

echo
echo "Uploading route-specific crawler metadata..."
echo

node "$REPO_ROOT/scripts/seo/upload-social-pages.js"

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
