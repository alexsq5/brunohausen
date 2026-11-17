#!/usr/bin/env python3
"""Brunohausen-Tonmischung: Stimme + Musik (geduckt) + Atmo + Geräusche.
Aufruf: python3 mix.py vo.mp3 events.json out.m4a [dauer_s]
events.json: [{"t": 12.3, "s": "pop", "db": -6}, ...]  (s = Dateiname ohne .mp3 in diesem Ordner)
"""
import json, os, subprocess, sys
D = os.path.dirname(os.path.abspath(__file__))
vo, evf, out = sys.argv[1], sys.argv[2], sys.argv[3]
dur = float(sys.argv[4]) if len(sys.argv) > 4 else float(subprocess.check_output(
    ['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', vo]).decode()) + 2.6
ev = json.load(open(evf))
MUSIC_DB, AMB_DB = -17, -27   # Grundpegel unter der Stimme
inp = ['-i', vo, '-stream_loop', '-1', '-i', f'{D}/music.mp3', '-stream_loop', '-1', '-i', f'{D}/ambience.mp3']
fc = [
    f'[0:a]aformat=sample_rates=48000:channel_layouts=stereo,apad=whole_dur={dur},asplit=2[vo][key]',
    f'[1:a]aformat=sample_rates=48000:channel_layouts=stereo,atrim=0:{dur},volume={MUSIC_DB}dB,afade=t=in:d=0.6,afade=t=out:st={dur-1.8}:d=1.8[mus]',
    '[mus][key]sidechaincompress=threshold=0.03:ratio=6:attack=40:release=450:makeup=1[musd]',
    f'[2:a]aformat=sample_rates=48000:channel_layouts=stereo,atrim=0:{dur},volume={AMB_DB}dB,afade=t=in:d=1,afade=t=out:st={dur-1.5}:d=1.5[amb]',
]
labels = ['[vo]', '[musd]', '[amb]']
for i, e in enumerate(ev):
    inp += ['-i', f"{D}/{e['s']}.mp3"]
    ms = max(0, int(e['t'] * 1000))
    fc.append(f"[{i+3}:a]aformat=sample_rates=48000:channel_layouts=stereo,volume={e.get('db', -8)}dB,adelay={ms}|{ms}[e{i}]")
    labels.append(f'[e{i}]')
fc.append(''.join(labels) + f'amix=inputs={len(labels)}:normalize=0:duration=first,atrim=0:{dur},loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[out]')
cmd = ['ffmpeg', '-v', 'error', '-y', *inp, '-filter_complex', ';'.join(fc), '-map', '[out]', '-c:a', 'aac', '-b:a', '192k', out]
subprocess.run(cmd, check=True)
print('ok', out, round(dur, 2), 's,', len(ev), 'Geräusche')
