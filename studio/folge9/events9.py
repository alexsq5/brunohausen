import json
W=json.load(open('words.json'))
def w(k,n=1):
    l=[x['s'] for x in W if x['w']==k];return l[n-1]
E_=[]
def ev(t,s,db):E_.append({'t':round(t,3),'s':s,'db':db})
land=w('weit!')+0.15
ev(land,'boom',-4);ev(land+0.05,'build',-6)
c0=w('Achtunddreißig');c1=w('Euro!')+0.5
ev(c0,'pop',-10)
for i in range(0,38,2):ev(c0+0.5+(c1-c0-0.5)*i/37,'coin',-14)
ev(w('Plus'),'kaching',-10);ev(w('Stadtkasse:'),'kaching',-12)
ev(w('zwanzigtausend.'),'kaching',-10);ev(w('Gebaut!'),'stamp',-6);ev(w('Gebaut!')+0.1,'cheer',-10)
ev(w('Und')-0.05,'whoosh',-11);ev(w('Atomkraftwerk-Zeichen.'),'shimmer',-9)
ev(w('Schlüssel!')-0.2,'whoosh',-12);ev(w('passt!'),'stamp',-6);ev(w('auf…')-0.1,'boom',-8)
ev(w('liegt…'),'shimmer',-8);ev(w('seht'),'stamp',-8);ev(w('Jetzt')-0.1,'whoosh',-11)
ev(w('Achtunddreißig',2),'pop',-10);ev(w('fünf'),'pop',-10);ev(w('Nur'),'stamp',-8)
for k in ['Janosch,','Justin,','Lionell,','Lisa','Gastelgott!']:ev(w(k)+0.1,'coin',-11)
for k in ['Merlin,','Marcel,','Louis','Davit:']:ev(w(k),'pop',-12)
ev(w('Felix'),'whoosh',-12);ev(w('Kraftwerksmeister'),'pop',-11);ev(w('Bewerbt'),'pop',-11)
ev(w('Lisa,'),'whoosh',-12);ev(w('steht'),'pop',-11);ev(w('Tim…'),'whoosh',-12);ev(w('Gastelgott'),'pop',-11)
ev(w('Was')-0.05,'whoosh',-11)
for k in ['Hotel,','Gym','Casino?']:ev(w(k),'pop',-10)
ev(w("Schreibt's"),'typing',-14);ev(w('Folge',2),'whoosh',-10);ev(w('Folge',2)+0.15,'boom',-9);ev(w('Folge',2)+0.3,'cheer',-10)
E_.sort(key=lambda e:e['t']);json.dump(E_,open('events9.json','w'))
print(len(E_))
