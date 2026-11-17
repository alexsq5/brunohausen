from PIL import Image, ImageDraw, ImageFilter
import numpy as np
im=Image.open('plateD.jpg').convert('RGB');W,H=im.size
a=np.asarray(im).astype(np.float32)
poly=[(680,425),(735,372),(830,358),(960,378),(1050,425),(1080,445),(1080,712),(1040,700),(960,650),(880,592),(800,522),(720,462),(690,445)]
pm=Image.new('L',(W,H),0);ImageDraw.Draw(pm).polygon(poly,fill=255)
inside=np.asarray(pm)>0
# Stämme finden (braun)
r,g,b=a[...,0],a[...,1],a[...,2]
brown=(r>110)&(r<170)&(g>65)&(g<120)&(b>35)&(b<90)&(r-g>25)
from scipy import ndimage
lab,n=ndimage.label(brown)
m=Image.new('L',(W,H),0);d=ImageDraw.Draw(m);d.polygon(poly,fill=255)
cnt=0
for sl in ndimage.find_objects(lab):
    ys,xs=sl;cy=ys.stop;cx=(xs.start+xs.stop)//2
    if ys.stop-ys.start<8: continue
    # Stamm im erweiterten Bereich?
    if 0<=cy<H and 660<=cx<W and (inside[min(cy,H-1),cx] or inside[max(cy-35,0),cx]):
        d.ellipse([cx-52,cy-140,cx+52,cy+24],fill=255);cnt+=1
m=m.filter(ImageFilter.GaussianBlur(5))
rng=np.random.default_rng(3)
base=np.array([129,196,91],np.float32)
yy,xx=np.mgrid[0:H,0:W]
var=(np.sin(xx/90.0)+np.cos(yy/70.0+xx/160.0))*3.0
gr=base[None,None,:]+var[...,None]+rng.normal(0,1.2,(H,W,1))
mm=(np.asarray(m).astype(np.float32)/255.0)[...,None]
# Fluss/Sand nicht übermalen
riv=((b>200)&(r<140))|((r>200)&(g>180)&(b>130))
riv=ndimage.binary_dilation(riv,iterations=3)
mm[riv]=0
out=a*(1-mm)+gr*mm
Image.fromarray(out.clip(0,255).astype(np.uint8)).save('plateD9.jpg',quality=95)
print('trees removed',cnt)
