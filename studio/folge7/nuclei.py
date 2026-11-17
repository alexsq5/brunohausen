import numpy as np,wave,json,re,subprocess
w=wave.open('vo16.wav');sr=w.getframerate();x=np.frombuffer(w.readframes(w.getnframes()),np.int16).astype(np.float32)/32768
# band-limited energy 300-3000Hz via FFT frames
hop=160;win=400
n=(len(x)-win)//hop
fr=np.lib.stride_tricks.as_strided(x,(n,win),(x.strides[0]*hop,x.strides[0])).copy()*np.hanning(win)
S=np.abs(np.fft.rfft(fr,axis=1));f=np.fft.rfftfreq(win,1/sr)
band=S[:,(f>300)&(f<2500)].sum(1)
e=20*np.log10(band+1e-6)
k=np.ones(5)/5;e=np.convolve(e,k,'same')
t=np.arange(n)*hop/sr
# peaks: local max, > neighbours by 2.5dB dip on both sides, above floor
floor=np.percentile(e,30)+8
peaks=[]
i=1
cand=[i for i in range(2,n-2) if e[i]>=e[i-1] and e[i]>e[i+1] and e[i]>floor]
# require dip >=3dB between successive kept peaks
kept=[]
for c in cand:
    if not kept: kept.append(c);continue
    p=kept[-1];dip=min(e[p:c+1])
    if min(e[p],e[c])-dip>=2.5: kept.append(c)
    elif e[c]>e[p]: kept[-1]=c
pk=[float(t[i]) for i in kept]
json.dump(pk,open('peaks.json','w'))
print(len(pk))
