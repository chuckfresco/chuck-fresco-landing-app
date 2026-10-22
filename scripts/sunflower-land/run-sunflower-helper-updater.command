#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PUBLIC_SITE_DIR="$REPO_ROOT/apps/chuckfresco.com"
RESPONSE_FILE="$PUBLIC_SITE_DIR/sunflower-helper-updater-response.json"
INVOKE_METADATA_FILE="$(mktemp)"

cleanup() {
  rm -f "$INVOKE_METADATA_FILE"
}

# Put your exact AWS Lambda function name here, or run with:
# SUNFLOWER_HELPER_LAMBDA_NAME=your-function-name npm run update:sunflower-live
LAMBDA_FUNCTION_NAME="${SUNFLOWER_HELPER_LAMBDA_NAME:-sunflower-land-helper-updater}"

pause_on_error() {
  local exit_status=$?
  cleanup
  if (( exit_status != 0 )); then
    echo
    echo "The Sunflower helper updater stopped because of the error shown above."
    if [[ "$SUNFLOWER_HELPER_NO_PAUSE" != "true" ]]; then
      read -k 1 "?Press any key to close..."
    fi
  fi
}
trap pause_on_error EXIT

echo "Running Sunflower Land helper updater Lambda..."
echo

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found. Install it first, then try again."
  exit 1
fi

if [ -z "$LAMBDA_FUNCTION_NAME" ]; then
  echo "No Lambda function name is set yet."
  echo
  echo "Paste your Lambda function name and press Enter."
  echo "Tip: to skip this prompt next time, open this file and set LAMBDA_FUNCTION_NAME near the top:"
  echo "$REPO_ROOT/scripts/sunflower-land/run-sunflower-helper-updater.command"
  echo
  read "LAMBDA_FUNCTION_NAME?Lambda function name: "
  echo

  if [ -z "$LAMBDA_FUNCTION_NAME" ]; then
    echo "ERROR: Lambda function name is required."
    exit 1
  fi
fi

cd "$PUBLIC_SITE_DIR"

aws lambda invoke \
  --function-name "$LAMBDA_FUNCTION_NAME" \
  --cli-binary-format raw-in-base64-out \
  --payload '{}' \
  "$RESPONSE_FILE" > "$INVOKE_METADATA_FILE"

echo
cat "$INVOKE_METADATA_FILE"
echo
echo "Lambda response:"
cat "$RESPONSE_FILE"
echo
echo

node - "$INVOKE_METADATA_FILE" "$RESPONSE_FILE" <<'NODE'
const fs = require("fs");
const metadata = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const responseText = fs.readFileSync(process.argv[3], "utf8").trim();
let response = null;

try {
  response = responseText ? JSON.parse(responseText) : null;
} catch (error) {
  console.error("ERROR: The Lambda returned an invalid JSON response.");
  process.exit(1);
}

if (metadata.FunctionError || (response && (response.errorType || response.errorMessage))) {
  console.error(`ERROR: The Lambda failed${response && response.errorMessage ? `: ${response.errorMessage}` : "."}`);
  process.exit(1);
}
NODE

echo "Done. If the Lambda succeeded, it updated these public JSON files:"
echo "https://chuckfresco.com/assets/sunflower-land/helperHelps.json"
echo "https://chuckfresco.com/assets/sunflower-land/helperCheers.json"
echo

if [[ "$SUNFLOWER_HELPER_NO_PAUSE" != "true" ]]; then
  read -k 1 "?Press any key to close..."
fi
