#!/bin/zsh

set -e

FUNCTION_NAME="${SUNFLOWER_HELPER_LAMBDA_NAME:-sunflower-land-helper-updater}"
REQUESTED_VALUE="${1:-}"
TMP_DIR="$(mktemp -d)"
CURRENT_CONFIG_FILE="$TMP_DIR/current-config.json"
UPDATED_ENV_FILE="$TMP_DIR/updated-environment.json"

cleanup() {
  local exit_status=$?
  rm -rf "$TMP_DIR"

  if (( exit_status != 0 )); then
    echo
    echo "The Lambda pause updater stopped because of the error shown above."
  fi

  if [[ "$SUNFLOWER_HELPER_NO_PAUSE" != "true" ]]; then
    echo
    read "?Press Enter to close..."
  fi

  return $exit_status
}
trap cleanup EXIT

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found."
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js was not found."
  exit 1
fi

if [ -z "$REQUESTED_VALUE" ]; then
  echo "Set automatic Sunflower helper updates"
  echo
  echo "  true  = freeze the current raffle data"
  echo "  false = resume API updates"
  echo
  read "REQUESTED_VALUE?Set UPDATES_PAUSED to true or false: "
fi

REQUESTED_VALUE="$(echo "$REQUESTED_VALUE" | tr '[:upper:]' '[:lower:]')"

if [[ "$REQUESTED_VALUE" != "true" && "$REQUESTED_VALUE" != "false" ]]; then
  echo "ERROR: The value must be true or false."
  exit 1
fi

echo "Reading the current Lambda configuration..."

aws lambda get-function-configuration \
  --function-name "$FUNCTION_NAME" \
  --output json \
  > "$CURRENT_CONFIG_FILE"

node - "$CURRENT_CONFIG_FILE" "$UPDATED_ENV_FILE" "$REQUESTED_VALUE" <<'NODE'
const fs = require("fs");
const currentConfigPath = process.argv[2];
const updatedEnvironmentPath = process.argv[3];
const requestedValue = process.argv[4];
const currentConfig = JSON.parse(fs.readFileSync(currentConfigPath, "utf8"));
const variables = currentConfig.Environment && currentConfig.Environment.Variables
  ? currentConfig.Environment.Variables
  : {};

fs.writeFileSync(
  updatedEnvironmentPath,
  JSON.stringify({
    Variables: {
      ...variables,
      UPDATES_PAUSED: requestedValue
    }
  })
);
NODE

echo "Setting UPDATES_PAUSED=$REQUESTED_VALUE..."

aws lambda update-function-configuration \
  --function-name "$FUNCTION_NAME" \
  --environment "file://$UPDATED_ENV_FILE" \
  --output json \
  --query 'Environment.Variables.UPDATES_PAUSED'

echo "Waiting for the Lambda configuration update to finish..."

UPDATE_STATUS="InProgress"
for ATTEMPT in {1..30}; do
  UPDATE_STATUS="$(aws lambda get-function-configuration \
    --function-name "$FUNCTION_NAME" \
    --query 'LastUpdateStatus' \
    --output text)"

  if [[ "$UPDATE_STATUS" == "Successful" ]]; then
    break
  fi

  if [[ "$UPDATE_STATUS" == "Failed" ]]; then
    FAILURE_REASON="$(aws lambda get-function-configuration \
      --function-name "$FUNCTION_NAME" \
      --query 'LastUpdateStatusReason' \
      --output text)"
    echo "ERROR: The Lambda configuration update failed: $FAILURE_REASON"
    exit 1
  fi

  sleep 2
done

if [[ "$UPDATE_STATUS" != "Successful" ]]; then
  echo "ERROR: Timed out waiting for the Lambda configuration update."
  exit 1
fi

SAVED_VALUE="$(aws lambda get-function-configuration \
  --function-name "$FUNCTION_NAME" \
  --query 'Environment.Variables.UPDATES_PAUSED' \
  --output text)"

if [[ "$SAVED_VALUE" != "$REQUESTED_VALUE" ]]; then
  echo "ERROR: Expected UPDATES_PAUSED=$REQUESTED_VALUE but AWS returned $SAVED_VALUE."
  exit 1
fi

echo
if [[ "$SAVED_VALUE" == "true" ]]; then
  echo "Helper updates are PAUSED. EventBridge invocations will preserve the current raffle data."
else
  echo "Helper updates are ACTIVE. EventBridge can update the helper and cheer snapshots."
fi
