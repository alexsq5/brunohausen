# Brunohausen – Stadtbuch & Video-Baukasten

Stand: 17.11.2026, nach Folge 7

## Stand der Stadt
- 615 Follower · 123 Einwohner · 14.000 € Stadtkasse
- Gebaut: Rathaus, Dönerbude, BBI, Polizei, 3 Mehrfamilienhäuser, Finanzamt, Krankenhaus, Platz mit Wegen und Spielplatz
- Freigeschaltet: Atomkraftwerk (20.000 €, 6.000 € fehlen), kommt an den Fluss, nicht ans alte Schild
- Offene Abstimmung: Schlüsselladen oder Atomkraftwerk

## Regeln
- 1 Follower = 1 Einwohner + 500 € (Insta-Bio sagt noch 1.000 €, ändern)
- Seit 17.11.: Einziehen nur per Kommentar „Ich zieh ein + Name“
- Jede Folge baut auf der vorherigen auf, keine Fehler bei Zahlen/Namen/Gebäuden
- Die ersten 2 Sekunden sind alles
- Eine Person = ein Job
- Pro Folge eine große Änderung, Stadt langsam umbauen
- Kevin bekommt nichts extra, wohnt einfach hier, zahlt keine Steuer
- Stimme: ElevenLabs „Jonas Falk“, Voice-ID GpMEuRGYD0oLjmn4ptQZ, Modell eleven_v4

## Folgen
| Folge | Follower | Einwohner | Kasse | Inhalt |
|---|---|---|---|---|
| 7 | 615 | 123 | 14.000 € | Krankenhaus (−10.000), AKW freigeschaltet, Dome = Nr. 600, Xavi BBI-Ermittler, Lesander Pflegefachkraft, Ekram will Schlüsselladen, Platz + Spielplatz |
| 6 | 584 | 92 | 8.500 € | Schlüssel des Diebs passt nirgends, 16 neue, 3 weg, Versicherung zahlt nicht (<20 Kommentare) |
| 5 | 571 | 79 | 500 € | Dieb klaut Geld, Polizei + 3 Mehrfamilienhäuser, Mario Finanzamt-Chef |
| 4 | 568 | – | – | Fluss repariert |

## Rollen
Mario – Finanzamt-Chef · Lena – Dönerbude · Justus – sucht BBI-Leute · Xavi – BBI-Ermittler · Dome – Follower Nr. 600 · Lesander – Pflegefachkraft · Ekram – will Schlüsselladen · Kyle – Haus 3 · Wohnung 39 · Tim – wollte Casino · Kevin – wohnt einfach hier

Alle weiteren Namen stehen in `index.html` (CONFIG.named).

## Für Folge 8
- Neue Regel ansagen („Ich zieh ein + Name“)
- Ergebnis Schlüsselladen vs. Atomkraftwerk
- Schlüssel-Rätsel weiter
- 2 Einwohner aus Folge 7 noch ohne Namen

## Video-Baukasten (`studio/`)
- `folge7/` – Renderer der letzten Folge: `build.py` baut `render.html` aus Kopf, `chunks.js` und `main7.js`; `render.js` rendert mit Playwright in 4 Teilen, ffmpeg fügt zusammen und legt Ton drunter
- Wort-Timing: `make_words.sh` (vo.mp3 → vo16.wav → `nuclei.py` → `align5.py` → words.json)
- Hintergründe: `plateD.jpg` (Tag mit Platz), `plateNC.jpg` (Nacht ohne Leute), `occ_*.png` Vordergrund-Ausschnitte, `synth2.py` baut den Platz
- `sprites/` – Bäume, `bruno_big.png` / `bruno_pj.png` – Bruno
- `folgen/folgeN/` – Sprechertext und Wort-Timing jeder Folge

Kein Token und keine Passwörter in dieses Repo!
