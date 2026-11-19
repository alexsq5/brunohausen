# Brunohausen – Stadtbuch & Video-Baukasten

Stand: 17.11.2026, nach Folge 9 (fertig, noch nicht gepostet)

## Stand der Stadt
- 694 Follower · 157 Einwohner · 29.000 € Stadtkasse
- Gebaut: Rathaus, Dönerbude, BBI, Polizei, 3 Mehrfamilienhäuser, Finanzamt, Krankenhaus, Platz mit Wegen und Spielplatz, Schlüsselladen (Ekram), Atomkraftwerk am Fluss (Folge 9, oberhalb vom Fluss, altes Schild ist weg)
- Rätsel: Der Schlüssel passt zur Tür hinten am AKW. Dahinter lagen die geklauten 500 € (zurück in der Kasse) und eine Schlafmütze. Folge 10: Bruno ist schlafgewandelt (Rückblende auf Folge 6 im Schlafanzug) – Bruno flüstert am Ende von Folge 9 „Hoffentlich findet das keiner raus…“
- Neuer Stil ab Folge 9: Bruno hat Charakter (geldgeil, schummelt, redet mit den Zuschauern), kindgerechter Humor, alle 3–5 s passiert etwas, kein „seht ihr in Folge X“. Jede Folge bekommt ein eigenes neues Cover.
- Kraftwerksmeister gesucht: Felix und Kilian wollen ins AKW
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
| 9 | 694 | 157 | 29.000 € | AKW gebaut (−20.000), +58 Follower (+29.000), geklaute 500 € hinter der AKW-Tür gefunden (+500) + Schlafmütze, 13 ziehen ein (Janosch, Justin, Lionell, Lisa, Gastelgott, Marty, Timo, Pinguin, Theresa, Ben, Kilian, Celine, Jonas), Felix will Kraftwerksmeister, Umfrage Hotel/Gym/Casino |
| 8 | 636 | 144 | 19.500 € | Gleichstand 2:2, Bruno entscheidet: Schlüsselladen (−5.000), 21 neue, Schlüssel trägt AKW-Zeichen, Leon + Lukas W. Feuerwehr, neue Einzieh-Regel |
| 7 | 615 | 123 | 14.000 € | Krankenhaus (−10.000), AKW freigeschaltet, Dome = Nr. 600, Xavi BBI-Ermittler, Lesander Pflegefachkraft, Ekram will Schlüsselladen, Platz + Spielplatz |
| 6 | 584 | 92 | 8.500 € | Schlüssel des Diebs passt nirgends, 16 neue, 3 weg, Versicherung zahlt nicht (<20 Kommentare) |
| 5 | 571 | 79 | 500 € | Dieb klaut Geld, Polizei + 3 Mehrfamilienhäuser, Mario Finanzamt-Chef |
| 4 | 568 | – | – | Fluss repariert |

## Rollen
Felix – will Kraftwerksmeister werden · Gastelgott – neu, will Casino · Janosch, Justin, Lionell, Lisa – neu (Folge 9) · Mario – Finanzamt-Chef · Ekram – Chef Schlüsselladen · Leon, Lukas W. – Feuerwehr · Sebastian – will Landwirt werden · Davit – neu (will Rettungswache leiten) · Lena – Dönerbude · Justus – sucht BBI-Leute · Xavi – BBI-Ermittler · Dome – Follower Nr. 600 · Lesander – Pflegefachkraft · Kyle – Haus 3 · Wohnung 39 · Tim – wollte Casino · Kevin – wohnt einfach hier

Alle weiteren Namen stehen in `index.html` (CONFIG.named).

## Für Folge 10
- ENTWURF Sprechertext: `studio/folgen/folge10/script_entwurf.txt` (Stand 19.11. 7:20) – um 13:00 nur Zahlen/neue Namen aktualisieren, Rest so lassen
- Von Alex festgelegt: Casino gewinnt; Casino-Chefs sind Gastelgott, Marius UND Tim (nicht Gastelgott allein)
- Bruno gesteht: Schlafmütze ist seine, er ist schlafgewandelt; ob er das Geld geklaut hat bleibt offen
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

## Plan ab ca. Folge 15 (NICHT vorher in Videos erwähnen!)
Erst mit dem neuen Look („Bruno kommt aus dem Urlaub zurück“, neue Stadt mit Bäckerei, Supermarkt, 3 MFH):
- Bank: jeder Einwohner hat ein Konto in „Bruno-Taler“, Startkapital 250 Taler, auf der Website einsehbar (Namen suchen).
- Tageslohn: mit Job 20 Taler/Tag, ohne Job 5 Taler Stadtgeld; täglich um 13:00 automatisch hochrechnen.
- Haus bauen: 1.000 Taler. Grundstücke werden unter Kommentaren („Ich will das Grundstück“) verlost; reicht das Geld nicht, bleibt es reserviert.
- Später evtl. Shop (limitierte Grundstücke, eigenes Geschäft, Stadtrat-Abo). Taler nie in echtes Geld tauschbar, kein Glücksspiel.
Bis dahin: Folgen 10–14 normal im alten Stil, keine Bank/Taler erwähnen.
- Website ab Folge 15: komplett neues Design im Video-Look (hochwertiges, animiertes Stadtbild wie im neuen Video). Nicht frei bedienbar – man sucht seinen Namen, dann fährt die Kamera zu seinem Haus und zeigt Konto/Job/Guthaben. Die alte Website bis dahin nicht mehr groß ausbauen.
