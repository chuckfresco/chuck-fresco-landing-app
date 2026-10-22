#!/bin/zsh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Configure automatic Sunflower Land helper updates"
echo
echo "  true  = pause updates"
echo "  false = resume updates"
echo

read "REQUESTED_VALUE?Set UPDATES_PAUSED to true or false: "
REQUESTED_VALUE="$(echo "$REQUESTED_VALUE" | tr '[:upper:]' '[:lower:]')"

if [[ "$REQUESTED_VALUE" != "true" && "$REQUESTED_VALUE" != "false" ]]; then
  echo
  echo "ERROR: Enter true or false."
  read -k 1 "?Press any key to close..."
  exit 1
fi

SUNFLOWER_HELPER_NO_PAUSE=true "$SCRIPT_DIR/set-helper-updates-paused.command" "$REQUESTED_VALUE"
EXIT_STATUS=$?

if (( EXIT_STATUS == 0 )) && [[ "$REQUESTED_VALUE" == "false" ]]; then
  echo
  echo "Updates resumed. Running the helper updater Lambda now..."
  echo
  SUNFLOWER_HELPER_NO_PAUSE=true "$SCRIPT_DIR/run-sunflower-helper-updater.command"
  EXIT_STATUS=$?
fi

echo
if (( EXIT_STATUS != 0 )); then
  echo "The update failed. Review the AWS error above."
elif [[ "$REQUESTED_VALUE" == "false" ]]; then
  echo "Updates are active and the Lambda was invoked successfully."
else
  echo "Updates are paused."
fi

read -k 1 "?Press any key to close..."
exit $EXIT_STATUS
