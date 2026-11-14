#!/bin/bash
# Video compression script using GStreamer
# Reduces file size ~40-60% while keeping 1280px wide H.264 output

DIR="/var/www/html/wonder-nav-maker/tours images"
OUT="$DIR/optimised"
mkdir -p "$OUT"

compress() {
  INPUT="$1"
  OUTPUT="$2"
  echo "▶ Compressing: $INPUT"
  gst-launch-1.0 -e \
    filesrc location="$INPUT" ! \
    qtdemux name=d d.video_0 ! \
    queue ! decodebin ! \
    videoscale ! "video/x-raw,width=1280" ! \
    videoconvert ! \
    x264enc bitrate=800 ! \
    mp4mux ! \
    filesink location="$OUTPUT" 2>/dev/null
  ORIG=$(stat -c%s "$INPUT")
  NEW=$(stat -c%s "$OUTPUT")
  PCT=$((100 - NEW * 100 / ORIG))
  echo "✅ Done: $(($ORIG/1024))KB → $(($NEW/1024))KB ($PCT% smaller)"
}

compress "$DIR/A lion sitting on the side of the raod.mp4"    "$OUT/lion-roadside-web.mp4"
compress "$DIR/A lion walking on the road during the day.mp4"  "$OUT/lion-walking-web.mp4"
compress "$DIR/lion at night video.mp4"                        "$OUT/lion-night-web.mp4"

echo ""
echo "=== All videos compressed ==="
du -sh "$OUT"/*.mp4
