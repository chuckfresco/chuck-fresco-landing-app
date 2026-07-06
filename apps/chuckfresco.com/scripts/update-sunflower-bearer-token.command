#!/bin/zsh

set -e

SECRET_ID="${SUNFLOWER_SECRET_ID:-sunflower-land/bearer-token}"

echo "Updating Sunflower Land bearer token in AWS Secrets Manager..."
echo "This updates only the Sunflower token secret; it does not deploy any site files."
echo

if ! command -v aws >/dev/null 2>&1; then
  echo "ERROR: AWS CLI was not found. Install it first, then try again."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

read -s "BEARER_TOKEN?Paste the new bearer token: "
echo
echo

BEARER_TOKEN="${BEARER_TOKEN#Bearer }"
BEARER_TOKEN="${BEARER_TOKEN#bearer }"

if [ -z "$BEARER_TOKEN" ]; then
  echo "ERROR: Bearer token is required."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

aws secretsmanager put-secret-value \
  --secret-id "$SECRET_ID" \
  --secret-string "{\"bearerToken\":\"$BEARER_TOKEN\"}"

echo
echo "Done. Updated secret:"
echo "$SECRET_ID"
echo
echo "Reminder: the token was saved without the Bearer prefix."
echo

read -k 1 "?Press any key to close..."
