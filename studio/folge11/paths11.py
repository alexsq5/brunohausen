from PIL import Image,ImageDraw,ImageFilter,ImageChops
import sys
src,dst=sys.argv[1],sys.argv[2]
base=Image.open(src).convert('RGB'); W,H=base.size; S=2
PATHS=[
 [(150,1246),(238,1198),(335,1150)],                       # Schlüsselladen -> Platz
 [(228,872),(242,1005),(300,1068)],             # Krankenhaus -> Platz
 [(332,724),(252,858)],                         # Bauernhof -> Krankenhaus-Weg
 [(776,818),(690,905)],                         # Casino -> Rathaus
 [(806,1088),(752,1180),(600,1196),(520,1150)],            # Polizei -> Platz
 [(1064,1164),(852,1286),(752,1180)],           # Mehrfamilienhäuser
 [(846,1468),(912,1506)],                       # Spielplatz
]
WID=58
def mask(w):
  m=Image.new('L',(W*S,H*S),0); d=ImageDraw.Draw(m)
  for pl in PATHS:
    pts=[(x*S,y*S) for x,y in pl]; d.line(pts,fill=255,width=int(w*S))
    for p in pts: r=w*S/2; d.ellipse([p[0]-r,p[1]-r,p[0]+r,p[1]+r],fill=255)
  return m
outer=mask(WID+6); inner=mask(WID)
tile=Image.new('RGB',(W*S,H*S),(236,221,182)); d=ImageDraw.Draw(tile)
# iso-Fugen wie auf dem großen Platz (Steigung ±0.53)
sp=34*S
for k in range(-H*S,W*S*2,sp):
  d.line([(k,0),(k+H*S/0.53,H*S)],fill=(214,197,154),width=2*S)
  d.line([(k,0),(k-H*S/0.53,H*S)],fill=(214,197,154),width=2*S)
edge=Image.new('RGB',(W*S,H*S),(196,177,134))
big=base.resize((W*S,H*S),Image.LANCZOS)
shadow=outer.filter(ImageFilter.GaussianBlur(4*S)).point(lambda v:int(v*0.22))
dark=Image.new('RGB',(W*S,H*S),(40,70,25))
big=Image.composite(dark,big,ImageChops.offset(shadow,0,3*S))
big=Image.composite(edge,big,outer); big=Image.composite(tile,big,inner)
big.resize((W,H),Image.LANCZOS).save(dst,quality=95)
