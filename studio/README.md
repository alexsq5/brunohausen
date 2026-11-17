# Brunohausen – Stadtbuch & Video-Baukasten

Stand: 17.11.2026, nach Folge 9 (fertig, noch nicht gepostet)

## Stand der Stadt
- 674 Follower · 149 Einwohner · 18.500 € Stadtkasse
- Gebaut: Rathaus, Dönerbude, BBI, Polizei, 3 Mehrfamilienhäuser, Finanzamt, Krankenhaus, Platz mit Wegen und Spielplatz, Schlüsselladen (Ekram), Atomkraftwerk am Fluss (Folge 9, oberhalb vom Fluss, altes Schild ist weg)
- Rätsel: Der Schlüssel passt zur Tür auf der Rückseite vom AKW. Die Tür ist offen, drin liegt etwas Unbekanntes (grün leuchtend, „?“) → Auflösung in Folge 10
- Kraftwerksmeister gesucht: Felix hat sich beworben, weitere Bewerbungen per Kommentar
- Abstimmung läuft: Hotel, Gym oder Casino? (Gastelgott und Tim wollen beide ein Casino)
- Wunschliste: Bauernhof mit Milchkühen (Sebastian), Rettungswache mit Hubschrauber (Davit), Fußballverein (7aho78 als Trainer), Lukas-Gym, Biogasanlage, Tabakladen (Luvki)

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
| 9 | 674 | 149 | 18.500 € | AKW gebaut (−20.000), +38 Follower (+19.000), nur 5 haben kommentiert und ziehen ein (Janosch, Justin, Lionell, Lisa, Gastelgott), Schlüssel passt zur AKW-Tür, Felix will Kraftwerksmeister, Umfrage Hotel/Gym/Casino |
| 8 | 636 | 144 | 19.500 € | Gleichstand 2:2, Bruno entscheidet: Schlüsselladen (−5.000), 21 neue, Schlüssel trägt AKW-Zeichen, Leon + Lukas W. Feuerwehr, neue Einzieh-Regel |
| 7 | 615 | 123 | 14.000 € | Krankenhaus (−10.000), AKW freigeschaltet, Dome = Nr. 600, Xavi BBI-Ermittler, Lesander Pflegefachkraft, Ekram will Schlüsselladen, Platz + Spielplatz |
| 6 | 584 | 92 | 8.500 € | Schlüssel des Diebs passt nirgends, 16 neue, 3 weg, Versicherung zahlt nicht (<20 Kommentare) |
| 5 | 571 | 79 | 500 € | Dieb klaut Geld, Polizei + 3 Mehrfamilienhäuser, Mario Finanzamt-Chef |
| 4 | 568 | – | – | Fluss repariert |

## Rollen
Felix – will Kraftwerksmeister werden · Gastelgott – neu, will Casino · Janosch, Justin, Lionell, Lisa – neu (Folge 9) · Mario – Finanzamt-Chef · Ekram – Chef Schlüsselladen · Leon, Lukas W. – Feuerwehr · Sebastian – will Landwirt werden · Davit – neu (will Rettungswache leiten) · Lena – Dönerbude · Justus – sucht BBI-Leute · Xavi – BBI-Ermittler · Dome – Follower Nr. 600 · Lesander – Pflegefachkraft · Kyle – Haus 3 · Wohnung 39 · Tim – wollte Casino · Kevin – wohnt einfach hier

Alle weiteren Namen stehen in `index.html` (CONFIG.named).

## Für Folge 10
- Was liegt hinter der AKW-Tür? (im Folgenplan: Spur zum Dieb, Auflösung Folge 12)
- Ergebnis der Umfrage Hotel/Gym/Casino zählen
- Kraftwerksmeister wählen (Felix + weitere Bewerber, nur wer noch keinen Job hat)
- Seit Folge 9 gilt: Follower bringen 500 €, aber Einwohner + Name + Wohnung nur mit Kommentar „Ich zieh ein + Name“

## Video-Baukasten (`studio/`)
- `folge9/` – Folge 9 (`main9.js`, `build9.py`: baut aus folge7-Dateien + main8.js + main9.js; `events9.py` erzeugt die Geräusch-Zeitpunkte aus words.json; `cover9.js`; `clear9.py` macht `plateD9.jpg`: Hintergrund mit freier Wiese am Fluss fürs AKW, ab Folge 9 diesen Hintergrund nehmen)
- `folge8/` – Änderungen Folge 8 (`main8.js`, `build8.py`: baut aus folge7-Dateien + main8.js)
- `folge7/` – Renderer-Basis: `build.py` baut `render.html` aus Kopf, `chunks.js` und `main7.js`; `render.js` rendert mit Playwright in 4 Teilen, ffmpeg fügt zusammen und legt Ton drunter
- Wort-Timing: `make_words.sh` (vo.mp3 → vo16.wav → `nuclei.py` → `align5.py` → words.json)
- Hintergründe: `plateD.jpg` (Tag mit Platz), `plateNC.jpg` (Nacht ohne Leute), `occ_*.png` Vordergrund-Ausschnitte, `synth2.py` baut den Platz
- `sprites/` – Bäume, `bruno_big.png` / `bruno_pj.png` – Bruno
- `folgen/folgeN/` – Sprechertext und Wort-Timing jeder Folge

Kein Token und keine Passwörter in dieses Repo!

## Ton (ab Folge 8)
- `studio/sound/`: `music.mp3` (fröhliche Aufbau-Musik, ohne Gesang, 90 s, ElevenLabs Music), `ambience.mp3` (Stadtplatz: Vögel, Leute, Brunnen) und Geräusche: `pop`, `whoosh`, `coin`, `kaching`, `build`, `stamp`, `shimmer`, `boom`, `cheer`, `typing` (alle auf -3 dB Spitze normalisiert)
- `python3 studio/sound/mix.py vo.mp3 events.json out.m4a [dauer]` mischt Stimme + Musik (duckt automatisch unter der Stimme) + Atmo + Geräusche, Lautheit -14 LUFS für Instagram
- `events.json` = Liste `{t, s, db}` aus den Zeitpunkten der Folge (Beispiel: `folge8/events8.json`): pop bei Einblendungen, coin pro neuem Einwohner, kaching bei Geld, build beim Bauen, stamp bei Stempeln, shimmer/boom bei Enthüllungen, whoosh bei Szenenwechseln, cheer am Ende
