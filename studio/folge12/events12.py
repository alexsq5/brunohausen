import json
W=json.load(open('words.json'))
def w(k,n=1):
    l=[x['s'] for x in W if x['w']==k];return l[n-1]
E_=[]
def ev(t,s,db):E_.append({'t':round(max(0,t),3),'s':s,'db':db})
ev(0.05,'whoosh',-10);ev(w('Finale!')-0.2,'boom',-7);ev(w('Finale!'),'cheer',-12)
ev(w('Erst')-0.15,'whoosh',-10)
ev(w('Fuchs?')-0.2,'pop',-9);ev(w('Waschbär?')-0.3,'stamp',-9);ev(w('Waschbär?')-0.2,'pop',-9);ev(w('Oder…'),'stamp',-9)
ev(w('Elster!')-0.25,'pop',-8);ev(w('Elster!'),'boom',-6);ev(w('Elster!')+0.1,'cheer',-11)
ev(w('Sie')-0.1,'whoosh',-10);ev(w('glänzenden'),'shimmer',-8);ev(w('AKW-Tür'),'pop',-10)
ev(w('Richtig')-0.1,'whoosh',-10);ev(w('nikg3d!'),'kaching',-9);ev(w('nikg3d!')+0.1,'cheer',-9);ev(w('Respekt,'),'stamp',-8)
ev(w('Ab'),'boom',-8);ev(w('sobald'),'stamp',-9)
ev(w('Sechs')-0.15,'whoosh',-10)
c0=w('Sechs')+0.1;c1=w('Euro!')+0.2
for i in range(6):ev(c0+0.3+(c1-c0-0.3)*i/5,'coin',-13)
ev(w('Plus'),'kaching',-10);ev(w('achtzehntausendfünfhundert.'),'stamp',-7)
ev(w('Jamie')-0.2,'whoosh',-11);ev(w('Jamie')+0.05,'pop',-9);ev(w('Hundertsiebenundsechzig'),'cheer',-11)
ev(w('Aber',1)-0.1,'whoosh',-9);ev(w('Aber',1),'stamp',-9)
for k in range(8):ev(w('piept!')-0.15+k*0.5,'pop',-12)
ev(w('Tür')-0.1,'whoosh',-11);ev(w('undicht!')-0.05,'boom',-5);ev(w('undicht!'),'stamp',-7)
ev(w('Fluss…')-0.1,'shimmer',-7);ev(w('grün!'),'stamp',-8)
ev(w('raus!')-0.1,'boom',-6);ev(w('Schnell!'),'whoosh',-9)
ev(w('Nehmt')-0.15,'whoosh',-10);ev(w('Koffer…')-0.1,'pop',-8)
for k in ['Hut…','Kette…','Stadtkasse…']:ev(w(k),'whoosh',-12);ev(w(k)+0.55,'pop',-9)
ev(w('Stadtkasse…')+0.5,'kaching',-10);ev(w('natürlich.'),'pop',-11)
ev(w('Tschüss,')-0.1,'whoosh',-10);ev(w('Aber',2)-0.1,'boom',-8)
E_.sort(key=lambda e:e['t']);json.dump(E_,open('events12.json','w'));print(len(E_))
