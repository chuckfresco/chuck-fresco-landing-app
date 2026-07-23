#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_DIR="$SCRIPT_DIR/../../public/assets/sunflower-land"
HELPS_FILE="$DATA_DIR/helperHelps.json"
CHEERS_FILE="$DATA_DIR/helperCheers.json"
OUTPUT_FILE="$SCRIPT_DIR/helpers-without-cheers.txt"
MINIMUM_HELPS="${1:-2}"

if ! [[ "$MINIMUM_HELPS" =~ ^[1-9][0-9]*$ ]]; then
  echo "Error: minimum helps must be a positive whole number."
  echo "Usage: $0 [minimum-helps]"
  exit 1
fi

if [[ ! -f "$HELPS_FILE" || ! -f "$CHEERS_FILE" ]]; then
  echo "Error: helperHelps.json or helperCheers.json was not found in:"
  echo "$DATA_DIR"
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is required but was not found."
  exit 1
fi

node - "$HELPS_FILE" "$CHEERS_FILE" "$OUTPUT_FILE" "$MINIMUM_HELPS" <<'NODE'
const fs = require("fs");

const [, , helpsPath, cheersPath, outputPath, minimumArg] = process.argv;
const minimumHelps = Number(minimumArg);
const helpsJson = JSON.parse(fs.readFileSync(helpsPath, "utf8"));
const cheersJson = JSON.parse(fs.readFileSync(cheersPath, "utf8"));
const helps = helpsJson?.data?.feed;
const cheers = cheersJson?.data?.feed;

if (!Array.isArray(helps) || !Array.isArray(cheers)) {
  throw new Error("Expected both JSON files to contain a data.feed array.");
}

const helpers = new Map();
const cheererIds = new Set();

for (const entry of helps) {
  const id = entry?.sender?.id;
  const name = entry?.sender?.username;
  if (id == null || !name) continue;

  const key = String(id);
  const helper = helpers.get(key) || { name, count: 0 };
  helper.name = name;
  helper.count += 1;
  helpers.set(key, helper);
}

for (const entry of cheers) {
  const id = entry?.sender?.id;
  if (id != null) cheererIds.add(String(id));
}

const matches = [...helpers.entries()]
  .filter(([id, helper]) => helper.count >= minimumHelps && !cheererIds.has(id))
  .map(([, helper]) => helper)
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

const heading = `Helpers with at least ${minimumHelps} helps and no cheers`;
const lines = [
  heading,
  `Generated: ${new Date().toLocaleString()}`,
  `Found: ${matches.length}`,
  "",
  ...matches.map(helper => `${helper.name} - ${helper.count} helps`),
  ""
];

fs.writeFileSync(outputPath, lines.join("\n"), "utf8");
console.log(lines.join("\n"));
console.log(`Saved to: ${outputPath}`);
NODE
