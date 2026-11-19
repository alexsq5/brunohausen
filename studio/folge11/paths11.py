from PIL import Image,ImageDraw,ImageFilter
import math,sys
S=2
src=sys.argv[1]; dst=sys.argv[2]
base=Image.open(src).convert('RGB'); W,H=base.size
PATHS=[
 [(140,1240),(240,1205),(330,1180)],                 # Schlüsselladen
 [(212,872),(250,900),(240,985),(300,1060)],          # Krankenhaus
 [(333,722),(295,800),(250,900)],                     # Bauernhof
 [(775,818),(700,900),(600,985),(520,1040)],          # Casino
 [(805,1080),(770,1175),(620,1205),(555,1170)],       # Polizei
 [(1060,1168),(860,1282),(770,1232),(770,1175)],      # Mehrfamilienhäuser
 [(850,1470),(905,1505)],                             # Spielplatz
]
def draw(img,w,col):
  d=ImageDraw.Draw(img)
  for pl in PATHS:
    pts=[(x*S,y*S) for x,y in pl]
    d.line(pts,fill=col,width=int(w*S),joint='curve')
    for p in pts: d.ellipse([p[0]-w*S/2,p[1]-w*S/2,p[0]+w*S/2,p[1]+w*S/2],fill=col)
big=Image.new('RGBA',(W*S,H*S),(0,0,0,0))
draw(big,46,(196,176,132,255)); draw(big,40,(234,218,176,255))
# Fugen
d=ImageDraw.Draw(big)
for pl in PATHS:
  for (x0,y0),(x1,y1) in zip(pl,pl[1:]):
    L=math.hypot(x1-x0,y1-y0); ux,uy=(x1-x0)/L,(y1-y0)/L; nx,ny=-uy,ux
    k=14
    while k<L-6:
      cx,cy=x0+ux*k,y0+uy*k
      d.line([((cx+nx*18)*S,(cy+ny*18)*S),((cx-nx*18)*S,(cy-ny*18)*S)],fill=(214,196,150,255),width=2*S); k+=26
    d.line([((x0+nx*0)*S,(y0)*S),((x1)*S,(y1)*S)],fill=(214,196,150,255),width=2*S)
sm=big.resize((W,H),Image.LANCZOS)
sh=Image.new('RGBA',(W,H),(0,0,0,0)); a=sm.split()[3].filter(ImageFilter.GaussianBlur(3)).point(lambda v:int(v*0.18))
sh.putalpha(a); 
shadow=Image.merge('RGBA',(*Image.new('RGB',(W,H),(30,60,20)).split(),a)); out=base.convert('RGBA'); out.alpha_composite(shadow,(0,3)); out.alpha_composite(sm)
out.convert('RGB').save(dst,quality=95)
