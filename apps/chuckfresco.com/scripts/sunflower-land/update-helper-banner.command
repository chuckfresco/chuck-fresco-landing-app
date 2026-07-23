#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_SITE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
JSON_FILE="$PUBLIC_SITE_DIR/public/assets/sunflower-land/updateHelperBanner.json"
S3_TARGET="s3://chuckfresco/assets/sunflower-land/updateHelperBanner.json"
DISTRIBUTION_ID="E1H3KEWTL5RFCL"
CLOUDFRONT_PATH="/assets/sunflower-land/updateHelperBanner.json"

echo "Sunflower Land helper banner updater"
echo
echo "Enter a new value for each field. Press Enter to keep the current value."
echo

read_banner_field() {
  node - "$JSON_FILE" "$1" <<'NODE'
const fs = require("fs");
const filePath = process.argv[2];
const field = process.argv[3];

try {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  process.stdout.write(String(data[field] || ""));
} catch (error) {
  console.error(`ERROR: Could not read ${filePath} as valid JSON.`);
  process.exit(1);
}
NODE
}

CURRENT_TITLE="$(read_banner_field title)"
CURRENT_MESSAGE="$(read_banner_field message)"
CURRENT_PRIMARY_NOTICE="$(node - "$JSON_FILE" <<'NODE'
const fs = require("fs");
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
process.stdout.write(String((data.emphasizedMessages || [])[0] || ""));
NODE
)"
CURRENT_SECONDARY_NOTICE="$(node - "$JSON_FILE" <<'NODE'
const fs = require("fs");
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
process.stdout.write(String((data.emphasizedMessages || [])[1] || ""));
NODE
)"
CURRENT_LINK_TEXT="$(read_banner_field linkText)"
CURRENT_LINK_URL="$(read_banner_field linkUrl)"

echo "Current title: $CURRENT_TITLE"
read "NEW_TITLE?New title: "
echo
echo "Current message: $CURRENT_MESSAGE"
read "NEW_MESSAGE?New message: "
echo
echo "Current bold notice 1: $CURRENT_PRIMARY_NOTICE"
read "NEW_PRIMARY_NOTICE?New bold notice 1: "
echo
echo "Current bold notice 2: $CURRENT_SECONDARY_NOTICE"
read "NEW_SECONDARY_NOTICE?New bold notice 2: "
echo
echo "Current link text: $CURRENT_LINK_TEXT"
read "NEW_LINK_TEXT?New link text: "
echo
echo "Current link URL: $CURRENT_LINK_URL"
read "NEW_LINK_URL?New link URL: "

TITLE="${NEW_TITLE:-$CURRENT_TITLE}"
MESSAGE="${NEW_MESSAGE:-$CURRENT_MESSAGE}"
PRIMARY_NOTICE="${NEW_PRIMARY_NOTICE:-$CURRENT_PRIMARY_NOTICE}"
SECONDARY_NOTICE="${NEW_SECONDARY_NOTICE:-$CURRENT_SECONDARY_NOTICE}"
LINK_TEXT="${NEW_LINK_TEXT:-$CURRENT_LINK_TEXT}"
LINK_URL="${NEW_LINK_URL:-$CURRENT_LINK_URL}"

node - "$JSON_FILE" "$TITLE" "$MESSAGE" "$PRIMARY_NOTICE" "$SECONDARY_NOTICE" "$LINK_TEXT" "$LINK_URL" <<'NODE'
const fs = require("fs");

const [filePath, title, message, primaryNotice, secondaryNotice, linkText, linkUrl] = process.argv.slice(2);
if (!title.trim() || !message.trim()) {
  console.error("ERROR: The banner title and message cannot be empty.");
  process.exit(1);
}
if ((linkText.trim() && !linkUrl.trim()) || (!linkText.trim() && linkUrl.trim())) {
  console.error("ERROR: Link text and link URL must both have values.");
  process.exit(1);
}
if (linkUrl.trim()) {
  try {
    const url = new URL(linkUrl.trim());
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error("Unsupported protocol");
  } catch (error) {
    console.error("ERROR: Link URL must be a valid http or https URL.");
    process.exit(1);
  }
}

const banner = {
  title: title.trim(),
  message: message.trim(),
  emphasizedMessages: [primaryNotice.trim(), secondaryNotice.trim()].filter(Boolean),
  linkText: linkText.trim(),
  linkUrl: linkUrl.trim()
};

const temporaryPath = `${filePath}.tmp`;
fs.writeFileSync(temporaryPath, `${JSON.stringify(banner, null, 2)}\n`);
fs.renameSync(temporaryPath, filePath);
console.log(`\nUpdated ${filePath}`);
NODE

echo
echo "Banner JSON updated successfully."
echo
read "UPLOAD_REPLY?Upload this banner to S3 now? [y/N] "

if [[ "$UPLOAD_REPLY" == [yY] || "$UPLOAD_REPLY" == [yY][eE][sS] ]]; then
  if ! command -v aws >/dev/null 2>&1; then
    echo "ERROR: AWS CLI was not found. The local JSON file was still updated."
    read -k 1 "?Press any key to close..."
    exit 1
  fi

  aws s3 cp "$JSON_FILE" "$S3_TARGET" \
    --acl public-read \
    --content-type "application/json" \
    --cache-control "no-cache, no-store, must-revalidate"

  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "$CLOUDFRONT_PATH"

  echo
  echo "Uploaded to S3 and requested a CloudFront refresh."
else
  echo
  echo "Local file updated. S3 was not changed."
fi

echo
read -k 1 "?Press any key to close..."
