// ---------- drawing primitives (plate space) ----------
function strokeText(txt,x,y,size,fill,stroke,lw,align='center',font=F,weight=900){
 ctx.font=`${weight} ${size}px ${font}, ${EMO}`;ctx.textAlign=align;ctx.textBaseline='middle';
 ctx.lineJoin='round';ctx.miterLimit=2;
 if(lw>0){ctx.lineWidth=lw;ctx.strokeStyle=stroke;ctx.strokeText(txt,x,y);}
 ctx.fillStyle=fill;ctx.fillText(txt,x,y);
}
function tag(txt,x,y,s=1,a=1){ // white pill with navy border, like Folge 3
 if(a<=0)return; ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);
 ctx.font=`900 22px ${F}`;const w=ctx.measureText(txt).width+30,h=36;
 rr(-w/2,-h/2,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=3.5;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,1);
 ctx.restore();
}
function person(x,y,shirt,s=1,opts={}){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.fillStyle='rgba(30,60,30,.22)';ctx.beginPath();ctx.ellipse(0,0,9,4,0,0,7);ctx.fill();
 ctx.lineWidth=1.6;ctx.strokeStyle='#2a2438';
 // legs
 ctx.fillStyle='#262a40';ctx.fillRect(-5,-12,3.6,12);ctx.fillRect(1.4,-12,3.6,12);
 // body
 rr(-7.5,-29,15,19,4);ctx.fillStyle=shirt;ctx.fill();ctx.stroke();
 // head
 ctx.beginPath();ctx.arc(0,-37,7.5,0,7);ctx.fillStyle='#F8DCC4';ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.arc(0,-38,7.5,Math.PI*1.05,Math.PI*1.95);ctx.closePath();ctx.fillStyle=opts.hair||'#6B3B22';ctx.fill();
 ctx.restore();
}
function fishbowl(x,y,s,t){
 ctx.save();ctx.translate(x,y);ctx.scale(s*1.15,s*1.15);
 ctx.fillStyle='rgba(30,60,30,.22)';ctx.beginPath();ctx.ellipse(0,0,13,4.5,0,0,7);ctx.fill();
 ctx.beginPath();ctx.arc(0,-15,14,0,7);ctx.fillStyle='rgba(150,215,245,.85)';ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle='#fff';ctx.globalAlpha*=.6;ctx.beginPath();ctx.ellipse(-6,-22,3,5,-.5,0,7);ctx.fill();ctx.globalAlpha/=.6;
 const fx=Math.sin(t*2.2)*4;ctx.save();ctx.translate(fx,-13);ctx.scale(Math.cos(t*2.2)>0?1:-1,1);
 ctx.fillStyle='#F7931E';ctx.beginPath();ctx.ellipse(0,0,6,4,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(-5,0);ctx.lineTo(-10,-4);ctx.lineTo(-10,4);ctx.closePath();ctx.fill();
 ctx.fillStyle=NAVY;ctx.beginPath();ctx.arc(3,-1,1,0,7);ctx.fill();ctx.restore();
 ctx.fillStyle='#8a6a48';rr(-15,-1,30,3,1.5);ctx.fill();
 ctx.restore();}
function balloon(x,y,s=1,phase=0){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.rotate(Math.sin(phase)*0.05);
 // ropes
 ctx.strokeStyle='#5b4632';ctx.lineWidth=1.5;
 ctx.beginPath();ctx.moveTo(-20,-30);ctx.lineTo(-9,6);ctx.moveTo(20,-30);ctx.lineTo(9,6);ctx.stroke();
 // basket
 rr(-12,4,24,17,3);ctx.fillStyle='#C98545';ctx.fill();ctx.lineWidth=2.5;ctx.strokeStyle='#5a3a22';ctx.stroke();
 ctx.strokeStyle='rgba(90,58,34,.6)';ctx.lineWidth=1.2;for(const xx of[-4,4]){ctx.beginPath();ctx.moveTo(xx,6);ctx.lineTo(xx,20);ctx.stroke();}
 // envelope
 const env=()=>{ctx.beginPath();ctx.moveTo(-20,-30);ctx.bezierCurveTo(-46,-52,-44,-108,0,-110);ctx.bezierCurveTo(44,-108,46,-52,20,-30);ctx.closePath();};
 ctx.save();env();ctx.clip();
 const cols=['#E25D52','#F5F0E6','#6286D6','#F5F0E6','#E25D52','#F5F0E6','#6286D6'];
 for(let i=0;i<7;i++){ctx.fillStyle=cols[i];ctx.fillRect(-46+i*13.2,-112,13.4,84);}
 const g=ctx.createLinearGradient(-45,0,45,0);g.addColorStop(0,'rgba(255,255,255,.18)');g.addColorStop(.6,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(20,20,60,.25)');ctx.fillStyle=g;ctx.fillRect(-50,-115,100,90);
 ctx.restore();env();ctx.lineWidth=3;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.restore();
}
// isometric box: F front-bottom vertex, a = right extent, b = left extent, h height. slope .5
function isoPts(x,y,a,b){return{F:[x,y],R:[x+a,y-a*.5],L:[x-b,y-b*.5],K:[x+a-b,y-a*.5-b*.5]};}
function poly(pts,fill,stroke=NAVY,lw=3){ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.lineWidth=lw;ctx.lineJoin='round';ctx.strokeStyle=stroke;ctx.stroke();}}
function box(x,y,a,b,h,cl,cr,ct,lw=3){
 const P=isoPts(x,y,a,b);const up=p=>[p[0],p[1]-h];
 poly([P.L,P.F,up(P.F),up(P.L)],cl,NAVY,lw);
 poly([P.F,P.R,up(P.R),up(P.F)],cr,NAVY,lw);
 poly([up(P.L),up(P.F),up(P.R),up(P.K)],ct,NAVY,lw);
 return P;
}
// point on left face: u along F->L (0..1), v height (0..1)
function onL(P,h,u,v){return[lerp(P.F[0],P.L[0],u),lerp(P.F[1],P.L[1],u)-v*h];}
function onR(P,h,u,v){return[lerp(P.F[0],P.R[0],u),lerp(P.F[1],P.R[1],u)-v*h];}
function quadL(P,h,u0,u1,v0,v1,fill,lw=2){poly([onL(P,h,u0,v0),onL(P,h,u1,v0),onL(P,h,u1,v1),onL(P,h,u0,v1)],fill,NAVY,lw);}
function quadR(P,h,u0,u1,v0,v1,fill,lw=2){poly([onR(P,h,u0,v0),onR(P,h,u1,v0),onR(P,h,u1,v1),onR(P,h,u0,v1)],fill,NAVY,lw);}
function skewTextL(P,h,u,v,txt,size,fill){ // text along left face
 const p=onL(P,h,u,v);ctx.save();ctx.translate(p[0],p[1]);ctx.transform(1,0.5,0,1,0,0);
 ctx.font=`900 ${size}px ${F}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=fill;ctx.fillText(txt,0,0);ctx.restore();}
function skewTextR(P,h,u,v,txt,size,fill){
 const p=onR(P,h,u,v);ctx.save();ctx.translate(p[0],p[1]);ctx.transform(1,-0.5,0,1,0,0);
 ctx.font=`900 ${size}px ${F}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=fill;ctx.fillText(txt,0,0);ctx.restore();}

// Dönerbude: front vertex
function doener(x,y){
 const a=50,b=70,h=46;
 ctx.fillStyle='rgba(20,50,20,.25)';poly([[x,y+4],[x+a+6,y-a*.5+2],[x+a-b,y-a*.5-b*.5],[x-b-6,y-b*.5+2]],'rgba(20,50,20,.22)',null);
 const P=box(x,y,a,b,h,'#F4E3C6','#D9BC93','#C9443B',2.6);
 // counter window on left face
 quadL(P,h,0.15,0.85,0.25,0.72,'#6F4A33',2);
 // döner spit
 const sp=onL(P,h,0.5,0.5);ctx.beginPath();ctx.moveTo(sp[0]-5,sp[1]-12);ctx.lineTo(sp[0]+5,sp[1]-12);ctx.lineTo(sp[0]+3,sp[1]+10);ctx.lineTo(sp[0]-3,sp[1]+10);ctx.closePath();ctx.fillStyle='#B8692E';ctx.fill();ctx.lineWidth=1.5;ctx.strokeStyle=NAVY;ctx.stroke();
 // counter
 quadL(P,h,0.1,0.9,0.18,0.28,'#FFFFFF',2);
 // awning stripes on left face top
 const n=6;for(let i=0;i<n;i++){const u0=i/n,u1=(i+1)/n;
  const p0=onL(P,h,u0,1),p1=onL(P,h,u1,1);const d=[-6,16];
  poly([p0,p1,[p1[0]+d[0],p1[1]+d[1]],[p0[0]+d[0],p0[1]+d[1]]],i%2?'#FFFFFF':'#E5483F',NAVY,1.6);}
 // roof sign
 const top=[x+(a-b)/2,y-(a+b)/4-h];
 ctx.save();ctx.translate(top[0],top[1]-20);
 rr(-46,-17,92,30,7);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=2.6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 19px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#C9332B';ctx.fillText('DÖNER',-6,-1);
 ctx.font=`16px ${EMO}`;ctx.fillText('🥙',30,-1);
 ctx.restore();
 ctx.strokeStyle=NAVY;ctx.lineWidth=2.6;ctx.beginPath();ctx.moveTo(top[0]-30,top[1]-6);ctx.lineTo(top[0]-30,top[1]+6);ctx.moveTo(top[0]+30,top[1]-6);ctx.lineTo(top[0]+30,top[1]+6);ctx.stroke();
}
function feuerwehr(x,y){
 const a=100,b=100,h=92;
 const P=box(x,y,a,b,h,'#EE5E52','#C8423B','#8F98AB',3);
 // white band
 quadL(P,h,0,1,0.78,0.92,'#FFFFFF',2);quadR(P,h,0,1,0.78,0.92,'#FFFFFF',2);
 skewTextL(P,h,0.5,0.85,'FEUERWEHR',15,'#C9332B');
 // garage doors on left face
 for(const u of[[0.12,0.45],[0.55,0.88]])quadL(P,h,u[0],u[1],0.02,0.6,'#F3F3F3',2);
 for(const v of[0.18,0.32,0.46])for(const u of[[0.12,0.45],[0.55,0.88]]){const p0=onL(P,h,u[0],v),p1=onL(P,h,u[1],v);ctx.strokeStyle='rgba(35,40,69,.45)';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(p0[0],p0[1]);ctx.lineTo(p1[0],p1[1]);ctx.stroke();}
 // windows right face
 for(const u of[[0.18,0.38],[0.48,0.68],[0.78,0.92]])quadR(P,h,u[0],u[1],0.4,0.65,'#9FD3F2',2);
 // tower on back
 const tx=x+(a-b)/2+20,ty=y-(a+b)/4-h+10;
 const T=box(tx,ty,26,26,62,'#EE5E52','#C8423B','#8F98AB',2.6);
 // siren
 const sx=tx,sy=ty-62-13;ctx.beginPath();ctx.ellipse(sx,sy+6,9,4,0,0,7);ctx.fillStyle='#2b3150';ctx.fill();
 ctx.beginPath();ctx.arc(sx,sy+2,7,Math.PI,0);ctx.closePath();ctx.fillStyle=SIREN;ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=NAVY;ctx.stroke();
}
let SIREN='#4A8BF0';
function radSign(x,y,t,t0){
 const s=pop(t,t0,0.4);if(s<=0)return;
 ctx.save();ctx.translate(x,y);ctx.scale(s*1.6,s*1.6);
 // glow
 const gl=0.35+0.25*Math.sin(t*9);
 const g=ctx.createRadialGradient(0,-60,10,0,-60,150);g.addColorStop(0,`rgba(140,255,90,${gl})`);g.addColorStop(1,'rgba(140,255,90,0)');ctx.fillStyle=g;ctx.fillRect(-170,-220,340,320);
 ctx.fillStyle='#6b4423';ctx.fillRect(-28,-30,7,32);ctx.fillRect(21,-30,7,32);
 rr(-70,-112,140,84,8);ctx.fillStyle='#C9925A';ctx.fill();ctx.lineWidth=3.5;ctx.strokeStyle='#5b3a1e';ctx.stroke();
 rr(-63,-105,126,70,5);ctx.lineWidth=1.5;ctx.strokeStyle='rgba(90,58,30,.5)';ctx.stroke();
 ctx.font=`900 15px ${F}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#D9443C';ctx.fillText('ATOMKRAFTWERK',0,-92);
 ctx.font=`34px ${EMO}`;ctx.fillText('☢️',0,-64);
 ctx.font=`900 14px ${F}`;ctx.fillStyle='#3a2a1a';ctx.fillText('bei 600 Followern',0,-41);
 ctx.restore();
}
function kevin(x,y,s,lean,sleepy=true){
 ctx.save();ctx.translate(x,y);ctx.rotate(lean);ctx.scale(s,s);
 ctx.fillStyle='rgba(30,60,30,.25)';ctx.beginPath();ctx.ellipse(0,0,13,5,0,0,7);ctx.fill();
 ctx.lineWidth=1.8;ctx.strokeStyle='#2a2438';
 ctx.fillStyle='#3a5a9a';ctx.fillRect(-7,-14,5,14);ctx.fillRect(2,-14,5,14);ctx.strokeRect(-7,-14,5,14);ctx.strokeRect(2,-14,5,14);
 rr(-11,-37,22,25,7);ctx.fillStyle='#F28C28';ctx.fill();ctx.stroke(); // hoodie
 ctx.beginPath();ctx.moveTo(-2,-34);ctx.lineTo(-3,-24);ctx.moveTo(2,-34);ctx.lineTo(3,-24);ctx.strokeStyle='#fff';ctx.lineWidth=1.2;ctx.stroke();
 ctx.lineWidth=1.8;ctx.strokeStyle='#2a2438';
 ctx.beginPath();ctx.arc(0,-47,10,0,7);ctx.fillStyle='#F8DCC4';ctx.fill();ctx.stroke();
 // messy hair
 ctx.beginPath();ctx.moveTo(-10,-49);ctx.lineTo(-8,-58);ctx.lineTo(-4,-54);ctx.lineTo(-1,-60);ctx.lineTo(3,-55);ctx.lineTo(7,-59);ctx.lineTo(10,-50);ctx.arc(0,-47,10,-0.2,Math.PI+0.2,true);ctx.closePath();ctx.fillStyle='#E2B23A';ctx.fill();ctx.stroke();
 // sleepy eyes
 ctx.strokeStyle='#2a2438';ctx.lineWidth=1.6;
 ctx.beginPath();ctx.moveTo(-6,-46);ctx.lineTo(-2,-46);ctx.moveTo(2,-46);ctx.lineTo(6,-46);ctx.stroke();
 ctx.beginPath();ctx.arc(0,-41,2,0,Math.PI);ctx.stroke();
 ctx.restore();
}


function pill(x,y,w,h,icon,col,label,val,pulse=0){
 ctx.save();const s=1+0.08*pulse;ctx.translate(x+w/2,y+h/2);ctx.scale(s,s);ctx.translate(-w/2,-h/2);
 rr(0,0,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 if(pulse>0){rr(0,0,w,h,h/2);ctx.fillStyle=`rgba(253,211,58,${0.35*pulse})`;ctx.fill();}
 ctx.beginPath();ctx.arc(h/2+3,h/2,44,0,7);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=5;ctx.stroke();
 if(icon==='€'){ctx.font=`900 50px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('€',h/2+3,h/2+2);}
 else{ctx.fillStyle=NAVY;ctx.beginPath();ctx.arc(h/2+3,h/2-10,11,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(h/2+3,h/2+17,19,13,0,Math.PI,0);ctx.fill();}
 ctx.textAlign='left';ctx.textBaseline='alphabetic';
 ctx.font=`700 26px ${F}`;ctx.fillStyle='#7A8099';ctx.fillText(label,h+12,48);
 ctx.font=`900 48px ${F}`;ctx.fillStyle=NAVY;ctx.fillText(val,h+11,98);
 ctx.restore();
}

// ---------- particles ----------
function dust(x,y,t,t0,n=10,r=60){
 const u=(t-t0)/0.8;if(u<0||u>1)return;
 for(let i=0;i<n;i++){const ang=i/n*Math.PI*2;const d=r*easeOut(u);
  ctx.beginPath();ctx.arc(x+Math.cos(ang)*d,y+Math.sin(ang)*d*0.45,14*(1-u)+4,0,7);ctx.fillStyle=`rgba(245,240,225,${0.85*(1-u)})`;ctx.fill();}
}
function floatText(txt,x,y,t,t0,col,size=46){
 const u=(t-t0)/1.3;if(u<0||u>1)return;
 ctx.save();ctx.globalAlpha=u<0.8?1:(1-u)/0.2;const s=0.6+0.4*backOut(u*4);
 ctx.translate(x,y-70*easeOut(u));ctx.scale(s,s);strokeText(txt,0,0,size,col,'#fff',10);ctx.restore();
}
function redPill(txt,x,y,s,size=26){
 if(s<=0)return;ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.font=`900 ${size}px ${F}, ${EMO}`;
 const w=ctx.measureText(txt).width+34,h=size*1.75;rr(-w/2,-h/2,w,h,h/2);ctx.fillStyle='#E5483F';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle='#fff';ctx.stroke();
 ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,2);ctx.restore();
}
function zzz(x,y,t,ph){const u=((t*0.7+ph)%1);ctx.save();ctx.globalAlpha=Math.sin(u*Math.PI);strokeText('z',x+u*18,y-u*40,26+u*16,'#fff',NAVY,7);ctx.restore();}


function bigChoice(txt,x,y,s,rot){if(s<=0)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);
 ctx.font=`900 46px ${F}, ${EMO}`;const w=ctx.measureText(txt).width+56,h=104;rr(-w/2,-h/2,w,h,28);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,3);ctx.restore();}

