import re,json,subprocess
script=open('align.py').read().split('script="""')[1].split('"""')[0]
words=script.split()
def syl(w):
    w=w.lower(); w=re.sub(r'[^a-zäöüß]','',w)
    w=re.sub(r'(ei|ie|au|eu|äu|aa|ee|oo)','V',w)
    n=len(re.findall(r'[aeiouyäöüV]+',w)); return max(1,n)
wt=[syl(w)+0.15*len(re.sub(r'\W','',w))/4 for w in words]
punct=[bool(re.search(r'[.!?…:,]$',w)) for w in words]
def sil(d,n):
    out=subprocess.run(['ffmpeg','-i','vo.mp3','-af',f'silencedetect=noise={n}dB:d={d}','-f','null','-'],capture_output=True,text=True).stderr
    ss=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',out)];se=[float(x) for x in re.findall(r'silence_end: ([\d.]+)',out)]
    return ss,se
ss,se=sil(0.13,-36)
END=85.0
chunks=[(0.0,ss[0])]+[(se[i], ss[i+1] if i+1<len(ss) else END) for i in range(len(se))]
m=[]
for c in chunks:
    if m and (c[1]-c[0]<0.2 or c[0]-m[-1][1]<0.0): m[-1]=(m[-1][0],c[1])
    else: m.append(c)
chunks=m
K=len(chunks);N=len(words)
cum=[0]
for w in wt: cum.append(cum[-1]+w)
speech=sum(b-a for a,b in chunks); rate=cum[-1]/speech
dur=[b-a for a,b in chunks]
INF=1e18
# dp over (chunk k ends after word j) ; boundaries any word end; penalty if not punct
pen=lambda j: 0 if punct[j-1] else 1.2
import math
dp=[[INF]*(N+1) for _ in range(K)];pv=[[-1]*(N+1) for _ in range(K)]
for j in range(1,N+1):
    dp[0][j]=(cum[j]/rate-dur[0])**2+pen(j)
for k in range(1,K):
    for j in range(k+1,N+1):
        best=INF;bi=-1
        lo=max(k,j-25)
        for i in range(lo,j):
            v=dp[k-1][i]
            if v>=INF: continue
            v+= ((cum[j]-cum[i])/rate-dur[k])**2 + (pen(j) if j<N else 0)
            if v<best: best=v;bi=i
        dp[k][j]=best;pv[k][j]=bi
j=N;bounds=[N]
for k in range(K-1,0,-1): j=pv[k][j]; bounds.append(j)
bounds.append(0);bounds=bounds[::-1]
res=[]
for k,(a,b) in enumerate(chunks):
    ws=list(range(bounds[k],bounds[k+1]));tw=sum(wt[i] for i in ws) or 1;t=a
    print(f'{a:6.2f}-{b:6.2f} ({(b-a):.2f}s, rate {tw/(b-a):.1f})',' '.join(words[i] for i in ws))
    for i in ws:
        d=(b-a)*wt[i]/tw;res.append({'w':words[i],'s':round(t,3),'e':round(t+d,3)});t+=d
json.dump(res,open('words2.json','w'),ensure_ascii=False)
