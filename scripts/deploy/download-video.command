#!/bin/zsh

# Double-click this file, paste a video URL, and the MP4 will be saved in Movies.

YT_DLP="/opt/homebrew/bin/yt-dlp"
YT_DLP_FOLDER="/Users/chuckfresco/Documents/yt-dlp-master"
PYTHON="/opt/homebrew/bin/python3"
MOVIES_DIR="$HOME/Movies"
FFMPEG_DIR="/opt/homebrew/bin"

clear
echo "Video Downloader"
echo "================"
echo
printf "Paste the video link, then press Return: "
IFS= read -r VIDEO_URL

# Remove accidental leading/trailing whitespace.
VIDEO_URL="${VIDEO_URL#"${VIDEO_URL%%[![:space:]]*}"}"
VIDEO_URL="${VIDEO_URL%"${VIDEO_URL##*[![:space:]]}"}"

if [[ -z "$VIDEO_URL" ]]; then
  echo
  echo "No link was entered."
  echo
  read -k 1 "?Press any key to close..."
  echo
  exit 1
fi

if [[ -x "$YT_DLP" ]]; then
  YT_DLP_COMMAND=("$YT_DLP")
elif [[ -x "$PYTHON" && -f "$YT_DLP_FOLDER/yt_dlp/__main__.py" ]]; then
  YT_DLP_COMMAND=("$PYTHON" -m yt_dlp)
else
  echo
  echo "Could not find yt-dlp. Install it with:"
  echo "brew install yt-dlp"
  echo
  read -k 1 "?Press any key to close..."
  echo
  exit 1
fi

mkdir -p "$MOVIES_DIR"

echo
echo "Downloading to $MOVIES_DIR ..."
echo

"${YT_DLP_COMMAND[@]}" \
  --ffmpeg-location "$FFMPEG_DIR" \
  --extractor-args "youtube:player_client=web_embedded" \
  --format "bv*[ext=mp4]+ba[ext=m4a]/b[ext=mp4]/best" \
  --merge-output-format mp4 \
  --windows-filenames \
  --no-playlist \
  --output "$MOVIES_DIR/%(title)s [%(id)s].%(ext)s" \
  "$VIDEO_URL"

STATUS=$?
echo

if [[ $STATUS -eq 0 ]]; then
  echo "Done. Your MP4 is in:"
  echo "$MOVIES_DIR"
else
  echo "The download failed (error $STATUS). Review the message above."
fi

echo
read -k 1 "?Press any key to close..."
echo
exit $STATUS
