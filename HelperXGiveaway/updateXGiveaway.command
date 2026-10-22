#!/bin/zsh

# Finder opens this command in Terminal. Keep the result visible when it finishes.
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

/bin/zsh "$SCRIPT_DIR/../scripts/sunflower-land/updateXGiveaway.command" "$@"
RESULT=$?

echo
if [[ "$RESULT" -ne 0 ]]; then
  echo "The giveaway update did not finish. See the error above."
fi
read "CLOSE_REPLY?Press Return to close. "
exit "$RESULT"
