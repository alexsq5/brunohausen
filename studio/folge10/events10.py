import json
W=json.load(open('words.json'))
def w(k,n=1):
    l=[x['s'] for x in W if x['w']==k];return l[n-1]
E_=[]
def ev(t,s,db):E_.append({'t':round(max(0,t),3),'s':s,'db':db})
ev(0.05,'whoosh',-10);ev(w('Schlafmütze…'),'shimmer',-8);ev(w('meine.')-0.05,'stamp',-6)
ev(w('Ich')-0.1,'whoosh',-10);ev(w('Schlafanzug!'),'stamp',-8);ev(w('Durch'),'pop',-10)
ev(w('Aber')-0.1,'whoosh',-10);ev(w('glaube'),'pop',-9);ev(w('Schlüssel')-0.1,'pop',-10);ev(w('Hmm…'),'typing',-16);ev(w('Egal!'),'stamp',-6)
ev(w('Zehn')-0.15,'whoosh',-10);ev(w('Zehn'),'pop',-10)
c0=w('Zehn')+0.2;c1=w('Euro!')+0.2
for i in range(10):ev(c0+0.3+(c1-c0-0.3)*i/9,'coin',-14)
ev(w('Plus'),'kaching',-10);ev(w('vierunddreißigtausend.'),'stamp',-7)
ev(w('Die',2)-0.15,'whoosh',-10);ev(w('Hotel:'),'pop',-10);ev(w('Gym:'),'pop',-10);ev(w('SIEBEN!'),'boom',-7);ev(w('SIEBEN!')+0.15,'cheer',-10)
ev(w('Das')-0.1,'whoosh',-10);ev(w('gebaut!')-0.05,'boom',-4);ev(w('gebaut!'),'build',-7);ev(w('Minus'),'kaching',-10)
for k in ['Gastelgott,','Marius','Tim,']:ev(w(k),'pop',-10)
ev(w('reib'),'coin',-11)
ev(w('Sebastian…'),'whoosh',-11);ev(w('kriegst')+0.15,'boom',-5);ev(w('kriegst')+0.2,'build',-8);ev(w('Milchkühen!'),'pop',-9);ev(w('Minus',2),'kaching',-10);ev(w('Muuuh!'),'stamp',-7)
ev(w('Neu')-0.2,'whoosh',-11)
for k in ['Einar,','Silant,','Tilo,','Basti,','Johannes','Marius!']:ev(w(k)+0.05,'pop',-10)
ev(w('Hundertdreiundsechzig'),'cheer',-11)
ev(w('Johannes',2)-0.15,'whoosh',-10)
for k in [('Johannes',2),('Timo',1),('Lionell',1)]:ev(w(*k),'pop',-9)
ev(w('Kraftwerksmeister')-0.6,'whoosh',-10);ev(w('Felix!'),'shimmer',-8);ev(w('Kilian'),'pop',-11);ev(w('Marcel,'),'pop',-11)
ev(w('wünscht')-0.25,'whoosh',-10);ev(w('Schule'),'pop',-10);ev(w('Gefängnis.'),'pop',-10);ev(w('Was'),'pop',-10);ev(w("Schreibt's"),'typing',-14)
ev(w('Nacht…')-0.85,'whoosh',-10);ev(w('schließ'),'stamp',-8)
E_.sort(key=lambda e:e['t']);json.dump(E_,open('events10.json','w'));print(len(E_))
h=w('Nacht…')-1.0
open('mutes.txt','w').write(f"{h:.2f}-90")
