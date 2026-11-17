set -e
ffmpeg -v error -y -i vo.mp3 -ac 1 -ar 16000 vo16.wav
python3 nuclei.py
python3 align5.py
