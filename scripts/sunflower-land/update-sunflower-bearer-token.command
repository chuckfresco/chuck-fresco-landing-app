#!/bin/zsh

set -e

SECRET_ID="${SUNFLOWER_SECRET_ID:-sunflower-land/bearer-token}"

pause_before_close() {
  local exit_status=$?
  echo
  if (( exit_status != 0 )); then
    echo "The bearer-token updater stopped because of the error shown above."
  else
    echo "The bearer-token update completed successfully."
  fi
  echo
  read "?Press Enter to close..."
  return $exit_status
}
trap pause_before_close EXIT

echo "Updating Sunflower Land bearer token in AWS Secrets Manager..."
echo "This updates only the Sunflower token secret; it does not deploy any site files."
echo

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found. Install it first, then try again."
  exit 1
fi

echo "The token will stay hidden while you paste it."
read -s "BEARER_TOKEN?Paste the new bearer token, then press Enter: "
echo
echo

BEARER_TOKEN="${BEARER_TOKEN#Bearer }"
BEARER_TOKEN="${BEARER_TOKEN#bearer }"

if [ -z "$BEARER_TOKEN" ]; then
  echo "ERROR: Bearer token is required."
  exit 1
fi

TOKEN_LENGTH=${#BEARER_TOKEN}
echo "Received a hidden token containing $TOKEN_LENGTH characters."
read "CONFIRM_SAVE?Type SAVE and press Enter to update AWS: "

if [[ "$CONFIRM_SAVE" != "SAVE" ]]; then
  echo "Token update cancelled. Nothing was changed in AWS."
  exit 1
fi

echo "Saving the token to AWS Secrets Manager..."
echo

SAVED_VERSION="$(AWS_PAGER="" aws secretsmanager put-secret-value \
  --secret-id "$SECRET_ID" \
  --secret-string "{\"bearerToken\":\"$BEARER_TOKEN\"}" \
  --query 'VersionId' \
  --output text)"

if [ -z "$SAVED_VERSION" ] || [ "$SAVED_VERSION" = "None" ]; then
  echo "ERROR: AWS did not return a saved secret version."
  exit 1
fi

echo
echo "SUCCESS: The Sunflower bearer token was updated."
echo "Secret:  $SECRET_ID"
echo "Version: $SAVED_VERSION"
echo
echo "Reminder: the token was saved without the Bearer prefix."
