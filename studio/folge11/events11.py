import json
W=json.load(open('words.json'))
def w(k,n=1):
    l=[x['s'] for x in W if x['w']==k];return l[n-1]
E_=[]
def ev(t,s,db):E_.append({'t':round(max(0,t),3),'s':s,'db':db})
ev(0.05,'whoosh',-10);ev(w('Spuren!')-0.1,'stamp',-6);ev(w('offen!')-0.2,'boom',-9)
ev(w('Ich')-0.15,'whoosh',-10)
for k in ['Fuchs.','Waschbär.','Elster.']:ev(w(k)-0.2,'pop',-9)
ev(w('glänzt…'),'shimmer',-9);ev(w("war's?")-0.2,'stamp',-7);ev(w('Schreibt'),'typing',-14);ev(w('zwölf'),'pop',-10)
ev(w('So…')-0.1,'whoosh',-10);ev(w('Drei'),'pop',-10)
c0=w('Drei')+0.1;c1=w('Euro!')+0.2
for i in range(3):ev(c0+0.3+(c1-c0-0.3)*i/2,'coin',-12)
ev(w('Plus'),'kaching',-10);ev(w('fünfzehntausendfünfhundert.'),'stamp',-7)
ev(w('Neu')-0.2,'whoosh',-11)
for k in ['Leonard,','Saphira','Leonita!']:ev(w(k)+0.05,'pop',-10)
ev(w('Hundertsechsundsechzig'),'cheer',-11)
ev(w('eröffnet')-0.3,'whoosh',-10);ev(w('Leo!')-0.05,'boom',-5);ev(w('Leo!'),'build',-8);ev(w('tanzen!'),'cheer',-9)
ev(w('Gym.'),'pop',-10);ev(w('Schreib'),'stamp',-8)
ev(w('Leonita…'),'pop',-10);ev(w('Euro'),'coin',-12);ev(w('manchmal.'),'pop',-11)
ev(w('Sebastian'),'whoosh',-11);ev(w('roten'),'pop',-9);ev(w('sechzig'),'pop',-9);ev(w('Muuuh!'),'stamp',-7);ev(w('selbst'),'kaching',-12)
ev(w('Noch')-0.15,'whoosh',-10);ev(w('Gefängnis.'),'boom',-8);ev(w('Dieb'),'stamp',-7)
ev(w('Also…')-0.15,'whoosh',-10)
for k,n in [('eins,',2),('zwei',2),('drei?',1)]:ev(w(k,n),'pop',-9)
E_.sort(key=lambda e:e['t']);json.dump(E_,open('events11.json','w'));print(len(E_))
