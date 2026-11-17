import cv2,numpy as np,json
src=cv2.imread('plateC.jpg');H,W=src.shape[:2];f=src.astype(np.float32)
S=4
def P(pts):return (np.array(pts,np.float64)*S).astype(np.int32)
def fillpoly(img,pts,col,aa=True):
    cv2.fillPoly(img,[P(pts)],col,cv2.LINE_AA,shift=2)
def polyline(img,pts,col,th,closed=True):
    cv2.polylines(img,[P(pts)],closed,col,th,cv2.LINE_AA,shift=2)
# --- synthesized layer
grass=np.array([85,192,120],np.float32)
rng=np.random.default_rng(7)
noise=cv2.resize(rng.normal(0,1,(10,6)).astype(np.float32),(W,H),interpolation=cv2.INTER_CUBIC)
syn=(np.ones((H,W,3),np.float32)*grass+noise[...,None]*np.array([2,4,3],np.float32))
syn8=np.clip(syn,0,255).astype(np.uint8)
# slight grass tufts
for _ in range(260):
    x,y=int(rng.integers(0,W)),int(rng.integers(1290,H))
    c=(60,165,95)
    cv2.line(syn8,(x,y),(x-3,y-7),c,2,cv2.LINE_AA);cv2.line(syn8,(x+3,y),(x+3,y-8),c,2,cv2.LINE_AA);cv2.line(syn8,(x+6,y),(x+9,y-6),c,2,cv2.LINE_AA)
# plaza quad
T=(470,1268);R=(860,1483);L=(198,1418);B=(L[0]+R[0]-T[0],L[1]+R[1]-T[1])
quad=[T,R,B,L]
# curb (slightly bigger, darker)
def grow(q,k):
    c=np.mean(q,0);return [tuple(c+(np.array(p)-c)*k) for p in q]
fillpoly(syn8,[(x,y+5) for x,y in grow(quad,1.03)],(120,150,165))
fillpoly(syn8,grow(quad,1.03),(160,190,210))
fillpoly(syn8,quad,(183,218,238))
# tile lines
mask=np.zeros((H,W),np.uint8);fillpoly(mask,quad,255)
lines=np.zeros_like(syn8)
u=np.array(R)-np.array(T);v=np.array(L)-np.array(T)
for i in range(1,12):
    a=np.array(T)+u*i/12;cv2.line(lines,tuple(int(q*S) for q in a),tuple(int(q*S) for q in a+v),(255,255,255),1*S,cv2.LINE_AA,shift=2)
for i in range(1,8):
    a=np.array(T)+v*i/8;cv2.line(lines,tuple(int(q*S) for q in a),tuple(int(q*S) for q in a+u),(255,255,255),1*S,cv2.LINE_AA,shift=2)
lm=(lines[...,0]>0)&(mask>0)
syn8[lm]=(syn8[lm]*0.88).astype(np.uint8)
# path from left (connect to old sand path) and to the right
sand=(141,191,219)
fillpoly(syn8,[(L[0]-30,L[1]-16),(L[0]+20,L[1]+12),(-60,1600),(-110,1572)],sand)
# center flower bed
C=((T[0]+B[0])//2,(T[1]+B[1])//2)
cv2.ellipse(syn8,(C[0]*S,(C[1]+4)*S),(52*S,28*S),0,0,360,(120,150,165),-1,cv2.LINE_AA,shift=2)
cv2.ellipse(syn8,(C[0]*S,C[1]*S),(52*S,28*S),0,0,360,(170,190,205),-1,cv2.LINE_AA,shift=2)
cv2.ellipse(syn8,(C[0]*S,(C[1]-2)*S),(44*S,22*S),0,0,360,(70,160,95),-1,cv2.LINE_AA,shift=2)
for k in range(26):
    a=rng.random()*6.28;r=rng.random()**0.5
    x=C[0]+np.cos(a)*r*36;y=C[1]-2+np.sin(a)*r*17
    col=[(90,90,235),(80,200,250),(220,140,240),(255,255,255)][k%4]
    cv2.circle(syn8,(int(x*S),int(y*S)),4*S,col,-1,cv2.LINE_AA,shift=2)
# playground (right of plaza)
G=(960,1590);ga,gb=95,80
gq=[G,(G[0]+ga,G[1]-ga*0.55),(G[0]+ga-gb,G[1]-ga*0.55-gb*0.55),(G[0]-gb,G[1]-gb*0.55)]
fillpoly(syn8,gq,(150,200,228))  # sand
polyline(syn8,gq,(70,110,150),2)
# fence posts
for i in range(4):
    p0=np.array(gq[i]);p1=np.array(gq[(i+1)%4])
    for s in np.linspace(0,1,7):
        q=p0+(p1-p0)*s;cv2.line(syn8,(int(q[0]*S),int(q[1]*S)),(int(q[0]*S),int((q[1]-12)*S)),(60,90,140),2*S,cv2.LINE_AA,shift=2)
    cv2.line(syn8,(int(p0[0]*S),int((p0[1]-10)*S)),(int(p1[0]*S),int((p1[1]-10)*S)),(60,90,140),2*S,cv2.LINE_AA,shift=2)
cv2.imwrite('syn_tmp.png',syn8)
# --- region mask: below boundary
M=np.zeros((H,W),np.float32)
cv2.fillPoly(M,[np.array([(290,1300),(470,1272),(700,1306),(1080,1300),(1080,1920),(0,1920),(0,1560)],np.int32)],1)
M=cv2.GaussianBlur(M,(0,0),8)
out=f*(1-M[...,None])+syn8.astype(np.float32)*M[...,None]
# --- trees
spr={}
for k in ['decC','decE','pineB']:
    im=cv2.imread(f'sp/{k}.png',cv2.IMREAD_UNCHANGED).astype(np.float32);spr[k]=(im[...,:3],im[...,3]/255)
spr['pineL']=(cv2.resize(spr['pineB'][0],None,fx=1.2,fy=1.2),cv2.resize(spr['pineB'][1],None,fx=1.2,fy=1.2))
spr['decL']=(cv2.resize(spr['decC'][0],None,fx=1.15,fy=1.15),cv2.resize(spr['decC'][1],None,fx=1.15,fy=1.15))
keys=list(spr)
pq=grow(quad,1.12);ggq=grow(gq,1.25)
inq=lambda q,x,y:cv2.pointPolygonTest(np.array(q,np.float32),(float(x),float(y)),False)>=0
plant=[]
for gy in range(1280,1960,70):
  for gx in range(-30,1100,85):
    x=gx+int(rng.integers(-25,25))+(42 if (gy//70)%2 else 0);y=gy+int(rng.integers(-15,15))
    k=keys[int(rng.integers(0,len(keys)))];h,w=spr[k][1].shape
    bx,by=x+w//2,y+h-10
    if M[min(H-1,max(0,by)),min(W-1,max(0,bx))]<0.6:continue
    if inq(pq,bx,by) or inq(pq,bx,y+h//2) or inq(ggq,bx,by) or inq(ggq,bx,y+h//2):continue
    if any(inq(grow(quad,1.04),x+w*a,y+h*b) for a in (0.1,0.5,0.9) for b in (0.1,0.5,0.9)):continue
    if any(inq(grow(gq,1.1),x+w*a,y+h*b) for a in (0.1,0.5,0.9) for b in (0.3,0.6,0.9)):continue
    if by<1400 and 560<bx<1080 and rng.random()<0.3:continue
    if rng.random()<0.12:continue
    plant.append((k,x,y))
def shadowmask(c,a):
    h=a.shape[0];sh=((c[...,1]>c[...,2]+20)&(c[...,1]>c[...,0]+20)).astype(np.float32)
    brown=(c[...,2]>c[...,1]+15)&(a>0.5);rows=np.where(brown.any(1))[0];tb=rows.max() if len(rows) else int(h*0.8)
    sh[:max(0,tb-16)]=0;return sh
order=sorted(plant,key=lambda t:t[2]+spr[t[0]][0].shape[0])
for pas in (0,1):
  for k,x,y in order:
    c,a=spr[k];h,w=a.shape;sm=shadowmask(c,a);al=a*sm if pas==0 else a*(1-sm)
    x0,y0,x1,y1=max(0,x),max(0,y),min(W,x+w),min(H,y+h)
    if x1<=x0 or y1<=y0:continue
    aa=al[y0-y:y1-y,x0-x:x1-x,None];out[y0:y1,x0:x1]=out[y0:y1,x0:x1]*(1-aa)+c[y0-y:y1-y,x0-x:x1-x]*aa
cv2.imwrite('plateD.jpg',np.clip(out,0,255).astype(np.uint8),[cv2.IMWRITE_JPEG_QUALITY,95])
# --- spots on the plaza
spots=[]
for i in range(1,24):
  for j in range(1,15):
    p=np.array(T)+u*(i/24)+v*(j/15)
    x,y=p[0]+rng.uniform(-4,4),p[1]+rng.uniform(-3,3)
    if ((x-C[0])/66)**2+((y-C[1])/38)**2<1:continue
    spots.append([round(x,1),round(y,1)])
json.dump({'spots':spots,'play':gq,'quad':quad,'C':C},open('plaza.json','w'))
print(len(spots),len(plant))
