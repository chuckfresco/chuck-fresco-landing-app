#!/bin/zsh
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
JSON_FILE="$SCRIPT_DIR/../../apps/chuckfresco.com/public/assets/sunflower-land/xGiveaway.json"
POST_VALUE="${1:-}"
if [[ -z "$POST_VALUE" ]]; then
  read "POST_VALUE?Paste the current X giveaway post URL (or NA for no active contest): "
fi
node "$SCRIPT_DIR/updateXGiveaway.js" "$JSON_FILE" "$POST_VALUE"
read "UPLOAD_REPLY?Upload this giveaway setting now? [y/N] "
if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  aws s3 cp "$JSON_FILE" "s3://chuckfresco/assets/sunflower-land/xGiveaway.json" \
    --acl public-read --content-type "application/json" --cache-control "no-cache, no-store, must-revalidate"
  aws cloudfront create-invalidation --distribution-id "E1H3KEWTL5RFCL" --paths "/assets/sunflower-land/xGiveaway.json"
  echo "Giveaway uploaded. The helpers page refreshes the contest within one minute."
else
  echo "Local giveaway updated. The live site was not changed."
fi
