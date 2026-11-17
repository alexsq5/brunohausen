# Brunohausen – Stadtbuch & Video-Baukasten

Stand: 17.11.2026, nach Folge 8

## Stand der Stadt
- 636 Follower · 144 Einwohner · 19.500 € Stadtkasse
- Gebaut: Rathaus, Dönerbude, BBI, Polizei, 3 Mehrfamilienhäuser, Finanzamt, Krankenhaus, Platz mit Wegen und Spielplatz, Schlüsselladen (links am Weg, Chef Ekram)
- Atomkraftwerk (20.000 €): fehlen nur noch 500 € = 1 Follower, kommt in Folge 9 an den Fluss (nicht ans alte Schild)
- Rätsel: Der Schlüssel des Diebs passt zu keiner Tür, weil die Tür noch nicht gebaut ist. Auf dem Schlüssel ist das AKW-Zeichen (Xavi/BBI hat es entdeckt)
- Wunschliste: Bauernhof mit Milchkühen (Sebastian will Landwirt sein), Tims Casino wartet immer noch, Rettungswache mit Hubschrauber (Davit)

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
| 8 | 636 | 144 | 19.500 € | Gleichstand 2:2, Bruno entscheidet: Schlüsselladen (−5.000), 21 neue, Schlüssel trägt AKW-Zeichen, Leon + Lukas W. Feuerwehr, neue Einzieh-Regel |
| 7 | 615 | 123 | 14.000 € | Krankenhaus (−10.000), AKW freigeschaltet, Dome = Nr. 600, Xavi BBI-Ermittler, Lesander Pflegefachkraft, Ekram will Schlüsselladen, Platz + Spielplatz |
| 6 | 584 | 92 | 8.500 € | Schlüssel des Diebs passt nirgends, 16 neue, 3 weg, Versicherung zahlt nicht (<20 Kommentare) |
| 5 | 571 | 79 | 500 € | Dieb klaut Geld, Polizei + 3 Mehrfamilienhäuser, Mario Finanzamt-Chef |
| 4 | 568 | – | – | Fluss repariert |

## Rollen
Mario – Finanzamt-Chef · Ekram – Chef Schlüsselladen · Leon, Lukas W. – Feuerwehr · Sebastian – will Landwirt werden · Davit – neu (will Rettungswache leiten) · Lena – Dönerbude · Justus – sucht BBI-Leute · Xavi – BBI-Ermittler · Dome – Follower Nr. 600 · Lesander – Pflegefachkraft · Kyle – Haus 3 · Wohnung 39 · Tim – wollte Casino · Kevin – wohnt einfach hier

Alle weiteren Namen stehen in `index.html` (CONFIG.named).

## Für Folge 9
- Atomkraftwerk bauen (am Fluss), sobald 637+ Follower
- Die Tür finden, zu der der Schlüssel passt (im AKW?)
- Nur wer „Ich zieh ein + Name“ kommentiert, bekommt Namen + Wohnung

## Video-Baukasten (`studio/`)
- `folge8/` – Änderungen Folge 8 (`main8.js`, `build8.py`: baut aus folge7-Dateien + main8.js)
- `folge7/` – Renderer-Basis: `build.py` baut `render.html` aus Kopf, `chunks.js` und `main7.js`; `render.js` rendert mit Playwright in 4 Teilen, ffmpeg fügt zusammen und legt Ton drunter
- Wort-Timing: `make_words.sh` (vo.mp3 → vo16.wav → `nuclei.py` → `align5.py` → words.json)
- Hintergründe: `plateD.jpg` (Tag mit Platz), `plateNC.jpg` (Nacht ohne Leute), `occ_*.png` Vordergrund-Ausschnitte, `synth2.py` baut den Platz
- `sprites/` – Bäume, `bruno_big.png` / `bruno_pj.png` – Bruno
- `folgen/folgeN/` – Sprechertext und Wort-Timing jeder Folge

Kein Token und keine Passwörter in dieses Repo!
