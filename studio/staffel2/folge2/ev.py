import json
W=json.load(open('words.json'))
def w(k,n=1):
    l=[x['s'] for x in W if x['w']==k];return l[n-1]
E_=[]
def ev(t,s,db):E_.append({'t':round(max(0,t),3),'s':s,'db':db})
ev(0.05,'whoosh',-10);ev(w('Jobs')-0.1,'stamp',-9);ev(w('vergeben!'),'boom',-7);ev(w('vergeben!')+0.1,'cheer',-11)
ev(w('Yaro')-0.15,'whoosh',-10)
for k in ['Yaro','Rishi','Lukas','Resi','Elektriker,','Tankstelle,','Landmaschinenhändler,','Unfallchirurg,','Helfer','Gruppenführer']:ev(w(k)-0.15,'pop',-9)
ev(w('Schule!'),'kaching',-10);ev(w('Feuerwehr!'),'cheer',-11)
ev(w('Und',2)-0.12,'whoosh',-10);ev(w('Tim,'),'pop',-8);ev(w('Tiger!'),'stamp',-8);ev(w('Skin'),'kaching',-10)
ev(w('Das')-0.12,'whoosh',-10);ev(w('Schreibt'),'pop',-9);ev(w('Wunschtier'),'pop',-10)
ev(w('Und',3)-0.12,'whoosh',-10);ev(w('November'),'stamp',-9)
for i in range(3):ev(w('Und',3)+0.4+i*0.35,'pop',-11)
ev(w('hundert'),'kaching',-9)
ev(w('Aber…')-0.12,'whoosh',-9);ev(w('Aber…')+0.3,'boom',-8);ev(w('Brief')-0.15,'shimmer',-8);ev(w('„Ich'),'shimmer',-9);ev(w('Wer…'),'boom',-6);ev(w('Wer…')+0.05,'stamp',-8)
ev(w('Tippt')-0.12,'whoosh',-10);ev(w('Tippt'),'stamp',-9);ev(w('Kommentare!',2)+0.4,'cheer',-10)
E_.sort(key=lambda e:e['t']);json.dump(E_,open('ev.json','w'));print(len(E_))
