#!/bin/zsh

set -e

PUBLIC_SITE_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
ASSET_DIR="$PUBLIC_SITE_DIR/public/assets/sunflower-land"
BACKUP_DIR="$ASSET_DIR/backups"
PUBLIC_ASSET_BASE="https://chuckfresco.com/assets/sunflower-land"

CHEERS_FILE="$ASSET_DIR/helperCheers.json"
HELPS_FILE="$ASSET_DIR/helperHelps.json"

echo "Pulling latest Sunflower Land helper JSON files from chuckfresco.com..."
echo

if ! command -v curl >/dev/null 2>&1; then
  echo "ERROR: curl was not found. Install it first, then try again."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js was not found. Install it first, then try again."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

mkdir -p "$ASSET_DIR"
mkdir -p "$BACKUP_DIR"

TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

download_and_replace() {
  local name="$1"
  local local_file="$2"
  local remote_file="$PUBLIC_ASSET_BASE/$name"
  local tmp_file="$TMP_DIR/$name"

  echo "Downloading:"
  echo "$remote_file"
  echo

  curl -fsSL "$remote_file" -o "$tmp_file"

  node -e "JSON.parse(require('fs').readFileSync(process.argv[1], 'utf8'))" "$tmp_file"

  if [ -f "$local_file" ]; then
    cp "$local_file" "$BACKUP_DIR/$name.$TIMESTAMP.bak"
  fi

  mv "$tmp_file" "$local_file"

  echo "Updated:"
  echo "$local_file"
  echo
}

download_and_replace "helperCheers.json" "$CHEERS_FILE"
download_and_replace "helperHelps.json" "$HELPS_FILE"

echo "Done. Local helper JSON files are now synced from chuckfresco.com."
echo "Backups saved in:"
echo "$BACKUP_DIR"
echo

read -k 1 "?Press any key to close..."
