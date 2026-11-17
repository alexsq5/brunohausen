import re,json,subprocess
DUR=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0','vo.mp3'],capture_output=True,text=True).stdout)
exec(open('align2.py').read().split('def sil')[0])
def syl(w):
    w=w.lower(); w=re.sub(r'[^a-zäöüß]','',w)
    w=re.sub(r'(ia|io|ua)',lambda m:m.group(0)[0]+'_'+m.group(0)[1],w)
    w=re.sub(r'(ei|ie|au|eu|äu|aa|ee|oo)','V',w)
    return max(1,len(re.findall(r'[aeiouyäöüV]+',w)))
pk=json.load(open('peaks.json'))
def sild(d,n):
    out=subprocess.run(['ffmpeg','-i','vo.mp3','-af',f'silencedetect=noise={n}dB:d={d}','-f','null','-'],capture_output=True,text=True).stderr
    return [float(x) for x in re.findall(r'silence_start: ([\d.]+)',out)],[float(x) for x in re.findall(r'silence_end: ([\d.]+)',out)]
ss,se=sild(0.13,-36)
chunks=[(0.0,ss[0])]+[(se[i], ss[i+1] if i+1<len(ss) else DUR) for i in range(len(se))]
m=[]
for c in chunks:
    if m and c[1]-c[0]<0.2: m[-1]=(m[-1][0],c[1])
    else: m.append(c)
chunks=m
P=[[p for p in pk if a-0.03<=p<b+0.03] for a,b in chunks]
sy=[syl(w) for w in words]
cs=[0]
for v in sy: cs.append(cs[-1]+v)
K=len(chunks);N=len(words);INF=1e18
isend=lambda j: bool(re.search(r'[.!?…]$',words[j-1]))
pen=lambda j: 0 if isend(j) else (0.6 if punct[j-1] else 3.0)
dp=[[INF]*(N+1) for _ in range(K)];pv=[[-1]*(N+1) for _ in range(K)]
for j in range(1,N+1): dp[0][j]=(cs[j]-len(P[0]))**2/(1+0.15*len(P[0]))+pen(j)
for k in range(1,K):
    for j in range(k+1,N+1):
        for i in range(max(k,j-30),j):
            v=dp[k-1][i]
            if v>=INF: continue
            v+=(cs[j]-cs[i]-len(P[k]))**2/(1+0.15*len(P[k]))+(pen(j) if j<N else 0)
            if v<dp[k][j]: dp[k][j]=v;pv[k][j]=i
j=N;bd=[N]
for k in range(K-1,0,-1): j=pv[k][j];bd.append(j)
bd.append(0);bd=bd[::-1]
for k in range(1,len(bd)-1):
    if re.search(r'[.!?]$',words[bd[k]-1]): continue
    for n in (1,2):
        j=bd[k]-n
        if j-1>bd[k-1] and re.search(r'[.!?]$',words[j-1]): bd[k]=j;break
res=[]
for k,(a,b) in enumerate(chunks):
    ws=list(range(bd[k],bd[k+1]));ns=sum(sy[i] for i in ws);pp=P[k]
    print(f'{a:6.2f}-{b:6.2f} syl {ns:2d} pk {len(pp):2d}',' '.join(words[i] for i in ws))
    # map syllable index -> time: if counts equal use peaks; else interpolate over peak list
    def stime(si):
        if not pp: return a+(b-a)*si/max(ns,1)
        if len(pp)==1: return pp[0]
        x=si*(len(pp)-1)/max(ns-1,1); i0=int(x); f=x-i0
        if i0>=len(pp)-1: return pp[-1]
        return pp[i0]+(pp[i0+1]-pp[i0])*f
    si=0
    for n,i in enumerate(ws):
        st=a if n==0 else max(a,stime(si)-0.10)
        res.append({'w':words[i],'s':round(st,3)}); si+=sy[i]
for i,r in enumerate(res): r['e']=res[i+1]['s'] if i+1<len(res) else DUR
json.dump(res,open('words.json','w'),ensure_ascii=False)
