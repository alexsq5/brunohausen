import json
W=json.load(open('words.json'))
def w(k,n=1):
    l=[x['s'] for x in W if x['w']==k];return l[n-1]
E_=[]
def ev(t,s,db):E_.append({'t':round(max(0,t),3),'s':s,'db':db})
ev(0.05,'whoosh',-10);ev(0.55,'boom',-3);ev(0.6,'build',-7);ev(w('noch')-0.1,'shimmer',-10)
c0=w('Achtundfünfzig')+0.2;c1=w('Euro!')+0.3
ev(w('Achtundfünfzig'),'pop',-10)
for i in range(0,58,3):ev(c0+0.3+(c1-c0-0.3)*i/57,'coin',-14)
ev(w('Plus'),'kaching',-10);ev(w('Minus'),'pop',-9);ev(w('Stadtkasse:'),'stamp',-7)
ev(w('Und')-0.1,'whoosh',-10);ev(w('Schlüssel')-0.2,'whoosh',-12);ev(w('passt!'),'stamp',-5);ev(w('auf…')-0.2,'boom',-9)
ev(w('liegen…')+0.2,'shimmer',-8);ev(w('fünfhundert'),'kaching',-8)
ev(w('DAS')-0.05,'cheer',-8);ev(w('DAS'),'kaching',-9);ev(w('Ich'),'coin',-10);ev(w('LIEBE'),'kaching',-9)
ev(w('EUCH!')-0.15,'pop',-9);ev(w('Stadtkasse:',2),'coin',-10);ev(w('neunundzwanzigtausend.'),'stamp',-8)
ev(w('Aber',2),'whoosh',-11);ev(w('Schlafmütze?'),'shimmer',-7);ev(w('Schlafmütze?')+0.7,'pop',-9);ev(w('Neu')-0.25,'whoosh',-11)
for k in ['Janosch,','Justin,','Lionell,','Lisa,','Gastelgott,','Marty,','Timo,','Pinguin,','Theresa,','Ben,','Kilian,','Celine','Jonas!']:ev(w(k)+0.05,'pop',-10)
ev(w('Hundertsiebenundfünfzig'),'cheer',-11)
for k in ['Merlin,','Marcel,','Louis','Davit:']:ev(w(k),'pop',-12)
ev(w('Felix'),'whoosh',-12);ev(w('Kraftwerksmeister'),'pop',-11);ev(w('Wer'),'pop',-11)
ev(w('Gastelgott'),'whoosh',-12);ev(w('Gastelgott')+0.2,'pop',-11);ev(w('Tim.'),'pop',-11);ev(w('Hm…'),'coin',-12);ev(w('Geld…')+0.2,'stamp',-9)
ev(w('Hotel,')-0.35,'whoosh',-10)
for k in ['Hotel,','Gym','Casino?']:ev(w(k),'pop',-10)
ev(w('Und',3)-0.05,'whoosh',-10);ev(w('Und',3),'shimmer',-9);ev(w("Schreibt's"),'typing',-14)
E_.sort(key=lambda e:e['t']);json.dump(E_,open('events9.json','w'));print(len(E_))
a=w('Äh…')-0.1;b=w('EUCH!')-0.1;h=w('Hoffentlich')-0.15
open('mutes.txt','w').write(f"{a:.2f}-{b:.2f},{h:.2f}-90")
