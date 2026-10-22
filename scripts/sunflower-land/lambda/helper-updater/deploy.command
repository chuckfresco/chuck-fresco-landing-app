#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
FUNCTION_NAME="${SUNFLOWER_HELPER_LAMBDA_NAME:-sunflower-land-helper-updater}"
PACKAGE_DIR="$(mktemp -d)"
PACKAGE_FILE="$PACKAGE_DIR/helper-updater.zip"

cleanup() {
  rm -rf "$PACKAGE_DIR"
}
trap cleanup EXIT

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found."
  exit 1
fi

if ! command -v zip >/dev/null 2>&1; then
  echo "ERROR: zip was not found."
  exit 1
fi

cp "$SCRIPT_DIR/index.mjs" "$PACKAGE_DIR/index.mjs"
(cd "$PACKAGE_DIR" && zip -q "$PACKAGE_FILE" index.mjs)

echo "Uploading $FUNCTION_NAME..."
aws lambda update-function-code \
  --function-name "$FUNCTION_NAME" \
  --zip-file "fileb://$PACKAGE_FILE" \
  --output json \
  --query '{FunctionName:FunctionName,Version:Version,LastModified:LastModified}'

echo "Waiting for the Lambda update to finish..."
aws lambda wait function-updated --function-name "$FUNCTION_NAME"

echo "Deployment complete. Monthly helps tracking is active (manual pause settings are preserved)."
