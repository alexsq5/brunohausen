import json
W=json.load(open('words.json'))
def w(k,n=1):
    l=[x['s'] for x in W if x['w']==k];return l[n-1]
E_=[]
def ev(t,s,db):E_.append({'t':round(max(0,t),3),'s':s,'db':db})
# Hook
ev(0.0,'boom',-12);ev(0.05,'heartbeat',-6);ev(1.0,'heartbeat',-8);ev(w('erwische')-0.05,'stamp',-9);ev(w('Bleibt')-0.1,'pop',-9)
# News
ev(w('Aber')-0.12,'whoosh',-10);ev(w('News')-0.05,'stamp',-9)
for i in range(4):ev(w('Luvki,')-0.4+i*0.22,'step',-14)
ev(w('zweihundert'),'kaching',-9);ev(w('Hahn!')-0.05,'shimmer',-8);ev(w('Hahn!')+0.05,'boom',-11);ev(w('Hahn!')+0.15,'cheer',-13)
for i in range(4):ev(w('Ekram')-0.5+i*0.22,'step',-14)
ev(w('Wolf!')-0.05,'shimmer',-8);ev(w('Wolf!')+0.05,'boom',-11)
# Warteliste
ev(w('Kyle')-0.12,'whoosh',-10)
for k in ['Kyle','Rishi','watchdogman…']:ev(w(k)-0.05,'pop',-8)
ev(w('Kakerlake!'),'sting',-16);ev(w('„Ja“')-0.1,'stamp',-9)
# Kevin
ev(w('Und',2)-0.12,'whoosh',-10);ev(w('neu')-0.05,'stamp',-9)
for i in range(5):ev(w('Kevin!')-0.9+i*0.2,'step',-14)
ev(w('Kevin!'),'pop',-8);ev(w('Firma')-0.1,'typing',-12);ev(w('Websites')-0.1,'kaching',-10)
# Casino
ev(w('Und',3)-0.12,'whoosh',-10);ev(w('Casino')-0.05,'kaching',-9);ev(w('offen!')-0.1,'stamp',-9);ev(w('offen!'),'cheer',-12);ev(w('offen!')+0.3,'coin',-12)
for i in range(4):ev(w('Marvin,')-0.6+i*0.22,'step',-14)
ev(w('„Bei')-0.1,'pop',-9);ev(w('Marius')-0.05,'pop',-8);ev(w('Gastelgott')-0.05,'pop',-8);ev(w('Roulette…')-0.1,'coin',-10)
ev(w('Tim,')-0.35,'whoosh',-12);ev(w('Tim,')-0.2,'shimmer',-12)
# Brief
ev(w('Aber',2)-0.12,'boom',-8);ev(w('Brief.')-0.15,'whoosh',-8);ev(w('Brief.')-0.1,'shimmer',-8)
ev(w('„Heute.'),'stamp',-11);ev(w('Mitternacht.'),'boom',-9);ev(w('allein.“'),'heartbeat',-6)
# Mitternacht
ev(w('Es')-0.12,'drone',-15)
for i in range(10):ev(w('Es')+0.1+i*0.55,'step',-17)
for i in range(6):ev(w('Ich')+i*1.0,'tick',-14)
for i in range(4):ev(w('Hallo…?')-0.2+i*0.85,'heartbeat',-9)
ev(w('Da!')-0.08,'sting',-6);ev(w('Da!')-0.05,'boom',-4);ev(w('Stehen'),'run',-6);ev(w('Stehen')+0.4,'run',-8);ev(w('Stehen')+0.8,'whoosh',-9)
# Hinweis
ev(w('Weg.')-0.1,'whoosh',-12);ev(w('Haar.')-0.15,'shimmer',-8);ev(w('braunes')-0.1,'stamp',-10);ev(w('Zettel:')-0.1,'whoosh',-9);ev(w('„Fast,'),'heartbeat',-6);ev(w('Fast.“'),'boom',-8)
# Outro
ev(w('Wer')-0.12,'stamp',-8);ev(w('Wer')+0.1,'build',-14);ev(w('Schreibt')-0.1,'pop',-9);ev(w('Folge')-0.05,'pop',-9)
L=W[-1]['e'];ev(L+0.25,'stamp',-9);ev(L+0.7,'pop',-9)
E_.sort(key=lambda e:e['t']);json.dump(E_,open('ev.json','w'));print(len(E_))
