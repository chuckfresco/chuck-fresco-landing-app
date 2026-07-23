#!/bin/zsh

set -e

PUBLIC_SITE_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
RESPONSE_FILE="$PUBLIC_SITE_DIR/sunflower-helper-updater-response.json"

# Put your exact AWS Lambda function name here, or run with:
# SUNFLOWER_HELPER_LAMBDA_NAME=your-function-name npm run update:sunflower-live
LAMBDA_FUNCTION_NAME="${SUNFLOWER_HELPER_LAMBDA_NAME:-sunflower-land-helper-updater}"

echo "Running Sunflower Land helper updater Lambda..."
echo

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found. Install it first, then try again."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

if [ -z "$LAMBDA_FUNCTION_NAME" ]; then
  echo "No Lambda function name is set yet."
  echo
  echo "Paste your Lambda function name and press Enter."
  echo "Tip: to skip this prompt next time, open this file and set LAMBDA_FUNCTION_NAME near the top:"
  echo "$PUBLIC_SITE_DIR/scripts/sunflower-land/run-sunflower-helper-updater.command"
  echo
  read "LAMBDA_FUNCTION_NAME?Lambda function name: "
  echo

  if [ -z "$LAMBDA_FUNCTION_NAME" ]; then
    echo "ERROR: Lambda function name is required."
    echo
    read -k 1 "?Press any key to close..."
    exit 1
  fi
fi

cd "$PUBLIC_SITE_DIR"

aws lambda invoke \
  --function-name "$LAMBDA_FUNCTION_NAME" \
  --cli-binary-format raw-in-base64-out \
  --payload '{}' \
  "$RESPONSE_FILE"

echo
echo "Lambda response:"
cat "$RESPONSE_FILE"
echo
echo
echo "Done. If the Lambda succeeded, it updated these public JSON files:"
echo "https://chuckfresco.com/assets/sunflower-land/helperHelps.json"
echo "https://chuckfresco.com/assets/sunflower-land/helperCheers.json"
echo

read -k 1 "?Press any key to close..."
