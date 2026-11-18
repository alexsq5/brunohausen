// ===================== FOLGE 9 =====================
// Stand vorher (Folge 8): 636 Follower, 144 Einwohner, 19.500 € Kasse
// Folge 9: 674 Follower (+38 = +19.000 €), AKW −20.000 €, 5 neue Einwohner (nur wer kommentiert hat)
const AKWP=[765,478];           // Vorderkante Reaktorhalle, oberhalb vom Fluss
const F9_NEW=['Janosch','Justin','Lionell','Lisa','Gastelgott','Marty','Timo','Pinguin','Theresa','Ben','Kilian','Celine','Jonas'];
const F9_FOLLOW0=636,F9_FOLLOW1=694,F9_EINW0=144,F9_KASSE0=19500;
let NEW9=[],COINS=[],FELIX=null,LISA=null,GASTEL=null,KILIAN=null,ALREADY=[];

function kasse(t){
 let k=F9_KASSE0;
 for(const c of COINS)if(t>=c.t1)k+=500*clamp((t-c.t1)/0.15,0,1);
 k-=20000*ease((t-T.minus)/0.6);
 k+=500*ease((t-T.found)/0.5);
 return k;
}
function einw(t){let n=F9_EINW0;for(const b of NEW9)if(t>=b.land)n++;return n;}
function followers(t){let n=F9_FOLLOW0;for(const c of COINS)if(t>=c.t1)n++;return n;}
function bottomPill(t,a=1){
 if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 const txt=t<T.gebaut?`${followers(t)} FOLLOWER · ☢️ AKW: 20.000 €`:`${followers(t)} FOLLOWER · ☢️ AKW STEHT ✅`;
 ctx.fillText(txt,x+w/2,y+h/2+2);ctx.restore();
}

// ---------- Atomkraftwerk ----------
function coolingTower(x,y,s,t){ // x,y = Mitte unten
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 const hb=46,hw=30,ht=36,H=150;
 ctx.beginPath();ctx.ellipse(0,0,hb+6,(hb+6)*0.4,0,0,7);ctx.fillStyle='rgba(20,50,20,.25)';ctx.fill();
 ctx.beginPath();ctx.moveTo(-hb,0);ctx.quadraticCurveTo(-hw*0.7,-H*0.62,-ht,-H);ctx.lineTo(ht,-H);ctx.quadraticCurveTo(hw*0.7,-H*0.62,hb,0);
 ctx.ellipse(0,0,hb,hb*0.36,0,0,Math.PI);ctx.closePath();
 const g=ctx.createLinearGradient(-hb,0,hb,0);g.addColorStop(0,'#F1F3F7');g.addColorStop(0.6,'#D7DCE4');g.addColorStop(1,'#B9C1CE');
 ctx.fillStyle=g;ctx.fill();ctx.lineWidth=3;ctx.strokeStyle=NAVY;ctx.stroke();
 // roter Streifen oben
 ctx.save();ctx.clip();ctx.fillStyle='#E5483F';ctx.fillRect(-60,-H,120,16);ctx.fillStyle='#fff';ctx.fillRect(-60,-H+16,120,8);ctx.fillStyle='#E5483F';ctx.fillRect(-60,-H+24,120,8);ctx.restore();
 ctx.beginPath();ctx.ellipse(0,-H,ht,ht*0.36,0,0,7);ctx.fillStyle='#5d6475';ctx.fill();ctx.lineWidth=3;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.restore();
}
function steam(x,y,t,a=1){
 if(a<=0)return;ctx.save();ctx.globalAlpha=a*0.9;
 for(let i=0;i<7;i++){const u=((t*0.35+i/7)%1);const px=x+Math.sin(u*5+i)*10+u*40,py=y-u*170,r=18+u*38;
  ctx.globalAlpha=a*0.85*(1-u);ctx.beginPath();ctx.arc(px,py,r,0,7);ctx.fillStyle='#ffffff';ctx.fill();}
 ctx.restore();
}
function akw(x,y,t,s=1){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate(-x,-y);
 // Betonplatte
 poly([[x+10,y+22],[x+170,y-58],[x+40,y-123],[x-120,y-43]],'#C4C9D1',NAVY,2.5);
 poly([[x+10,y+22],[x+170,y-58],[x+170,y-50],[x+10,y+30]],'#9EA5B1',NAVY,2);
 poly([[x+10,y+22],[x-120,y-43],[x-120,y-35],[x+10,y+30]],'#AEB4BF',NAVY,2);
 // Kühlturm hinten rechts
 coolingTower(x+92,y-62,1,t);
 steam(x+92,y-62-150,t,1);
 // Reaktorhalle
 const a=70,b=96,h=64;
 const P=box(x,y,a,b,h,'#EEF1F5','#CBD2DC','#9AA4B5',2.8);
 // Kuppel
 const top=[x+(a-b)/2,y-(a+b)/4-h];
 ctx.beginPath();ctx.ellipse(top[0],top[1]+4,34,15,0,Math.PI,0);ctx.lineTo(top[0]+34,top[1]+4);
 ctx.beginPath();ctx.moveTo(top[0]-34,top[1]+4);ctx.bezierCurveTo(top[0]-34,top[1]-40,top[0]+34,top[1]-40,top[0]+34,top[1]+4);ctx.ellipse(top[0],top[1]+4,34,13,0,0,Math.PI);ctx.closePath();
 const dg=ctx.createLinearGradient(top[0]-34,0,top[0]+34,0);dg.addColorStop(0,'#F7F8FA');dg.addColorStop(1,'#B8C0CC');ctx.fillStyle=dg;ctx.fill();ctx.lineWidth=2.8;ctx.strokeStyle=NAVY;ctx.stroke();
 // Fenster rechts
 for(let i=0;i<3;i++)quadR(P,h,0.15+i*0.26,0.31+i*0.26,0.55,0.8,'#A9DDF2',1.6);
 // gelb-schwarzer Streifen unten
 const n=8;for(let i=0;i<n;i++)poly([onL(P,h,i/n,0),onL(P,h,(i+1)/n,0),onL(P,h,(i+1)/n,0.12),onL(P,h,i/n,0.12)],i%2?NAVY:YEL,null);
 for(let i=0;i<10;i++)poly([onR(P,h,i/10,0),onR(P,h,(i+1)/10,0),onR(P,h,(i+1)/10,0.12),onR(P,h,i/10,0.12)],i%2?NAVY:YEL,null);
 // Schild ☢️ links
 const sp=onL(P,h,0.5,0.55);ctx.save();ctx.translate(sp[0],sp[1]);ctx.transform(1,0.5,0,1,0,0);
 rr(-24,-24,48,48,8);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=2.4;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`32px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('☢️',0,2);ctx.restore();
 // Leuchten
 const gl=0.25+0.15*Math.sin(t*5);const g=ctx.createRadialGradient(x,y-40,10,x,y-40,160);g.addColorStop(0,`rgba(140,255,90,${gl})`);g.addColorStop(1,'rgba(140,255,90,0)');
 ctx.fillStyle=g;ctx.fillRect(x-170,y-200,340,300);
 // Dachschild
 ctx.save();ctx.translate(top[0]-4,top[1]-58);rr(-92,-18,184,34,8);ctx.fillStyle='#2e8b2e';ctx.fill();ctx.lineWidth=2.6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 19px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#fff';ctx.fillText('ATOMKRAFTWERK ☢️',0,0);ctx.restore();
 ctx.restore();
}

// ---------- Overlays ----------
function moneyCard(t){ // 38 neue Follower
 const inn=easeOut((t-T.m0)/0.35),out=1-ease((t-T.m1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;
 yelPill(`+${Math.min(58,COINS.filter(c=>t>=c.t1).length)} FOLLOWER`,540,420,pop(t,T.m0,0.35),56,'#fff');
 if(t>T.plus-0.1)yelPill('+29.000 € 💰',540,540,pop(t,T.plus,0.35),56);
 if(t>T.minus-0.15)yelPill('−20.000 € ☢️',540,660,pop(t,T.minus-0.1,0.35),56,'#fff');
 ctx.restore();
}
function coins(t){ // Münzen fliegen in die Stadtkasse (Bildschirm-Koordinaten)
 for(const c of COINS){if(t<c.t0||t>c.t1+0.05)continue;const u=easeOut((t-c.t0)/(c.t1-c.t0));
  const x=lerp(c.x,170,u),y=lerp(c.y,200,u)-Math.sin(u*Math.PI)*160;ctx.save();ctx.translate(x,y);ctx.scale(1-0.4*u,1-0.4*u);ctx.font=`54px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🪙',0,0);ctx.restore();}
}
// ---------- Requisiten ----------
function bill(x,y,r,s){ctx.save();ctx.translate(x,y);ctx.rotate(r);ctx.scale(s,s);rr(-46,-24,92,48,6);ctx.fillStyle='#7BC67E';ctx.fill();ctx.lineWidth=3.5;ctx.strokeStyle='#1f5d2a';ctx.stroke();
 ctx.beginPath();ctx.arc(0,0,14,0,7);ctx.fillStyle='#A9E0AB';ctx.fill();ctx.stroke();ctx.font=`900 20px ${F}`;ctx.fillStyle='#1f5d2a';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('€',0,1);ctx.restore();}
function nightcap(x,y,s,r=0){ctx.save();ctx.translate(x,y);ctx.rotate(r);ctx.scale(s,s);
 ctx.beginPath();ctx.moveTo(-60,20);ctx.quadraticCurveTo(-20,-70,70,-90);ctx.quadraticCurveTo(30,-30,60,20);ctx.closePath();ctx.fillStyle='#3D5AFE';ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.save();ctx.clip();ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=10;for(let i=-3;i<4;i++){ctx.beginPath();ctx.moveTo(-80+i*34,40);ctx.lineTo(-10+i*34,-100);ctx.stroke();}ctx.restore();
 rr(-70,10,140,30,14);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.beginPath();ctx.arc(72,-92,18,0,7);ctx.fillStyle='#fff';ctx.fill();ctx.stroke();ctx.restore();}
function personBubble(x,y,txt,a,size=34){if(a<=0)return;ctx.save();ctx.globalAlpha*=Math.min(1,a);const s=0.6+0.4*Math.min(1,a);ctx.translate(x,y);ctx.scale(s,s);
 ctx.font=`900 ${size}px ${F}, ${EMO}`;const w=ctx.measureText(txt).width+56;rr(-w/2,-44,w,88,40);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.beginPath();ctx.moveTo(-20,42);ctx.lineTo(-44,82);ctx.lineTo(6,44);ctx.fillStyle='#fff';ctx.fill();ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,3);ctx.restore();}
// ---------- Tür ----------
function doorVis(t){return Math.max(0,Math.min(easeOut((t-T.d0)/0.35),1-ease((t-T.d1)/0.35)));}
function door(t){
 const a=doorVis(t);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(10,18,30,.86)';ctx.fillRect(0,0,W,H);
 const cx=540,cy=930,dw=380,dh=600;
 const zz=1+0.12*ease((t-T.liegen)/1.2);ctx.save();ctx.translate(cx,cy);ctx.scale(zz,zz);ctx.translate(-cx,-cy);
 rr(cx-300,cy-360,600,760,26);ctx.fillStyle='#BFC6D1';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
 for(let i=0;i<7;i++){ctx.fillStyle=i%2?NAVY:YEL;ctx.fillRect(cx-300+i*86,cy+360,86,40);}
 const op=ease((t-T.auf)/0.9);
 rr(cx-dw/2,cy-dh/2,dw,dh,14);ctx.fillStyle='#05080d';ctx.fill();
 if(op>0){ctx.save();rr(cx-dw/2,cy-dh/2,dw,dh,14);ctx.clip();
  const gl=ctx.createRadialGradient(cx,cy+60,20,cx,cy+60,330);gl.addColorStop(0,`rgba(255,230,120,${0.7*op})`);gl.addColorStop(1,'rgba(255,230,120,0)');ctx.fillStyle=gl;ctx.fillRect(cx-dw/2,cy-dh/2,dw,dh);
  // Geldstapel
  const ms=pop(t,T.liegen+0.2,0.4);if(ms>0){for(let i=0;i<9;i++){const bx=cx-110+(i%3)*80+((i*37)%17),by=cy+210-Math.floor(i/3)*30;bill(bx,by-(1-ms)*40,((i*13)%7-3)*0.06,ms);}}
  // Schlafmütze
  const ns=pop(t,T.muetze,0.45);if(ns>0){nightcap(cx+100,cy+60,0.9*ns,0.25);
   if(t<T.d1){const pulse=0.5+0.5*Math.sin(t*8);ctx.beginPath();ctx.arc(cx+100,cy+40,110,0,7);ctx.lineWidth=6;ctx.strokeStyle=`rgba(255,210,61,${0.5+0.4*pulse})`;ctx.stroke();}}
  ctx.restore();}
 const ang=op*1.25,vis=Math.cos(ang),lw=dw*vis;
 if(lw>4){ctx.save();ctx.translate(cx-dw/2,0);
  ctx.beginPath();ctx.moveTo(0,cy-dh/2);ctx.lineTo(lw,cy-dh/2-Math.sin(ang)*40);ctx.lineTo(lw,cy+dh/2+Math.sin(ang)*40);ctx.lineTo(0,cy+dh/2);ctx.closePath();
  const dg=ctx.createLinearGradient(0,0,lw,0);dg.addColorStop(0,'#8E98A8');dg.addColorStop(1,'#A7B0BE');ctx.fillStyle=dg;ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.save();ctx.transform(vis,0,0,1,0,0);
  ctx.fillStyle='#5c6475';for(const ry of[cy-dh/2+30,cy+dh/2-30])for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(30+i*80,ry,7,0,7);ctx.fill();}
  ctx.save();ctx.translate(dw/2,cy-120);rr(-110,-110,220,220,24);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`150px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('☢️',0,8);ctx.restore();
  ctx.save();ctx.translate(dw-70,cy+60);ctx.beginPath();ctx.arc(0,0,30,0,7);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.fillStyle=NAVY;ctx.beginPath();ctx.arc(0,-6,8,0,7);ctx.fill();ctx.fillRect(-4,-4,8,20);ctx.restore();
  ctx.restore();ctx.restore();}
 if(t>T.schl-0.1&&t<T.auf+0.25){const u=easeOut((t-T.schl)/0.7);const kx=lerp(-120,cx+dw/2-70-128,u),ky=lerp(1500,cy+60,u);
  const rot=t<T.passt?0:-Math.PI/2*ease((t-T.passt)/0.3);const ka=1-ease((t-T.auf)/0.25);
  ctx.save();ctx.globalAlpha=a*ka;ctx.translate(kx+128,ky);ctx.scale(Math.cos(rot)*0.6+0.4,1);ctx.translate(-(kx+128),-ky);keyShape(kx,ky,1.0,0);ctx.restore();}
 ctx.restore();
 if(t<T.justus+1.2&&t>T.d0)yelPill('🔄 Hinten am AKW',540,370,pop(t,T.d0+0.1,0.35),44,'#fff');
 if(t>T.passt-0.05&&t<T.auf+1.2)personBubble(300,1430,'Justus: Er passt! 🔑',pop(t,T.passt,0.3),36);
 if(t>T.passt-0.05&&t<T.liegen)stamp('PASST! ✅',540,380,t,T.passt,-0.08,84,'#2FA84F');
 if(t>T.euro-0.1&&t<T.geld0)stamp('500 € ZURÜCK! 💰',540,380,t,T.euro,-0.06,74,'#2FA84F');
 if(t>T.muetze-0.05){yelPill('🧢 Eine Schlafmütze?!',540,380,pop(t,T.muetze,0.35),50,'#fff');
  if(t>T.muetze+0.7)personBubble(540,1460,'Justus: Ich wusste es! Der Dieb trägt Schlafmütze!',pop(t,T.muetze+0.7,0.3),28);}
 ctx.restore();
}
// ---------- Bruno liebt Geld ----------
let BILLS=[];
function loveMoney(t){
 const inn=easeOut((t-T.geld0)/0.3),out=1-ease((t-T.geld1)/0.35);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;
 const g=ctx.createRadialGradient(540,900,100,540,900,1100);g.addColorStop(0,'rgba(255,214,90,.95)');g.addColorStop(1,'rgba(230,140,20,.95)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 if(t<T.euch-0.05){for(const b of BILLS){const u=(t-T.geld0)*b.v+b.o;const y=-120+((u*420)%2200);const x=b.x+Math.sin(u*2+b.o)*60;bill(x,y,Math.sin(u*3+b.o)*0.8,b.s);}}
 const z=t<T.euch?1+0.5*ease((t-T.liebe2)/1.0):1.25;
 ctx.save();ctx.translate(540,1920);ctx.scale(z,z);ctx.translate(-540,-1920);bigBruno(540,1920+(1-backOut((t-T.geld0)/0.45))*700,1.0,false);ctx.restore();
 if(t<T.aeh){const s1=pop(t,T.geld0,0.3);ctx.save();ctx.translate(540,330);ctx.scale(s1,s1);ctx.rotate(-0.05);strokeText('DAS GELD IST WIEDER DA!',0,0,70,'#fff',NAVY,18);ctx.restore();
  if(t>T.liebe1-0.05){const s2=pop(t,T.liebe1,0.3);ctx.save();ctx.translate(540,470);ctx.scale(s2,s2);ctx.rotate(0.04);strokeText('ICH ❤️ GELD!',0,0,110,'#2FA84F',NAVY,22);ctx.restore();}}
 else{const s3=pop(t,T.euch,0.35);if(s3>0){ctx.save();ctx.translate(540,420);ctx.scale(s3,s3);ctx.rotate(-0.04);strokeText('…ich ❤️ EUCH!',0,0,100,'#E5483F',NAVY,22);ctx.restore();}
  if(t<T.euch-0.05){ctx.save();ctx.translate(540,420);strokeText('😳 Äh…',0,0,90,'#fff',NAVY,20);ctx.restore();}}
 ctx.restore();
}
function pollCard(t){
 const inn=easeOut((t-T.p0)/0.35),out=1-ease((t-T.p1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(10,18,30,.7)';ctx.fillRect(0,0,W,H);
 const hs=pop(t,T.p0,0.4);ctx.save();ctx.translate(540,330);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('IHR ENTSCHEIDET!',0,0,92,YEL,NAVY,22);ctx.restore();
 [['🏨','HOTEL',T.hotel,'#FFF4D6'],['🏋️','GYM',T.gym,'#E3F0FF'],['🎰','CASINO',T.casino2,'#FCE4EC']].forEach(([e,n,tt,col],i)=>{const s=pop(t,tt,0.35);if(s<=0)return;const y=560+i*250;ctx.save();ctx.translate(540,y);ctx.scale(s,s);ctx.rotate((i-1)*0.02);
  rr(-400,-105,800,210,34);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`110px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,-250,6);
  ctx.font=`900 84px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='left';ctx.fillText(n,-130,8);ctx.restore();});
 ctx.restore();
}

const HL=new Set(['noch','nie','Atomkraftwerk','gebaut!','58','Follower!','29.000','€!','20.000','28.500.','Tür.','Justus,','Schlüssel','Dieb!','passt!','auf…','500','€!','GELD','DA!','Geld!','LIEBE','GELD!','EUCH!','29.000.','Moment…','Schlafmütze?','kommentiert','Janosch,','Justin,','Lionell,','Lisa,','Gastelgott,','Marty,','Timo,','Pinguin,','Theresa,','Ben,','Kilian,','Celine','Jonas!','157','Merlin,','Marcel,','Louis','Davit:','chillt','Felix','Kraftwerksmeister','Gastelgott','Casino.','Tim.','Geld…','Hotel,','Gym','Casino?','entscheidet!','Schlafmütze?','Kommentare!','keiner','raus…']);
const DISP={'Achtundfünfzig':'58','neunundzwanzigtausend':'29.000','Euro!':'€!','zwanzigtausend':'20.000','achtundzwanzigtausendfünfhundert.':'28.500.','fünfhundert':'500','neunundzwanzigtausend.':'29.000.','Hundertsiebenundfünfzig':'157'};
function capY(t){
 if(t>=T.EC)return -1;
 if(doorVis(t)>0.3)return 1640;
 if(t>T.geld0&&t<T.geld1)return 1450;
 if(t>T.p0&&t<T.p1)return 1450;
 return 1330;
}

function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;for(const st of[T.land,T.passt,T.geld0]){const u=t-st;if(u>0&&u<0.45){shx+=Math.sin(u*90)*12*(1-u/0.45);shy+=Math.cos(u*70)*8*(1-u/0.45);}}
 ctx.save();ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 ctx.drawImage(IMG.plateD,0,0);
 feuerwehr(472,900);ctx.drawImage(IMG.occ,280,700);doener(170,1068);
 if(t<T.land){const sa=1-ease((t-T.land+0.25)/0.25);if(sa>0){ctx.save();ctx.globalAlpha=sa;radSign(890,800,10,-10);ctx.restore();}}
 {const yoff=t<T.land?-620*(1-Math.pow(clamp(t/T.land,0,1),2)):0;
  if(t<T.land){const sh=0.3+0.7*ease(t/T.land);ctx.save();ctx.globalAlpha=0.35*sh;ctx.beginPath();ctx.ellipse(AKWP[0]+30,AKWP[1]-40,150*sh,60*sh,0,0,7);ctx.fillStyle='#000';ctx.fill();ctx.restore();}
  akw(AKWP[0],AKWP[1]+yoff,t);dust(AKWP[0]+20,AKWP[1]-20,t,T.land,16,140);}
 const D=[];
 D.push([1060,()=>kevin(522,1060,1.25,0)]);
 D.push([POL[1],()=>{polizei(POL[0],POL[1],t);ctx.drawImage(IMG.occBBI,0,0);}]);
 HOUSES.forEach(([hx,hy],i)=>D.push([hy,()=>mfh(hx,hy,i)]));
 D.push([HOSP[1],()=>krankenhaus(HOSP[0],HOSP[1])]);
 D.push([SHOP[1],()=>schluessel(SHOP[0],SHOP[1])]);
 for(const r of RES){if(!r.spot2)continue;
  if(r.name==='Kyle'){D.push([KYLE_DOOR[1],()=>person(KYLE_DOOR[0],KYLE_DOOR[1],r.shirt,1)]);continue;}
  const q=r.spot2;if(r.name==='Goldfisch')D.push([q[1],()=>fishbowl(q[0],q[1],1,t)]);else D.push([q[1],()=>person(q[0],q[1],r.shirt,1)]);}
 NEW5.forEach(([n,sp0,sh],i)=>{const sp=S5S[i];D.push([sp[1],()=>person(sp[0],sp[1],sh,1)]);});
 S6S.forEach((sp,i)=>{if(i===1)return;
  if(i===2){D.push([EKRAM_DOOR[1],()=>person(EKRAM_DOOR[0],EKRAM_DOOR[1],SHIRTS[2],1)]);return;}
  if(i===0){const p=FW_SPOTS[0];D.push([p[1],()=>{person(p[0],p[1],SHIRTS[0],1);helmet(p[0],p[1],1);}]);return;}
  D.push([sp[1],()=>person(sp[0],sp[1],SHIRTS[i],1)]);});
 NEW7.forEach(b=>D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,1)]));
 D.push([PLAY[0][1]-20,()=>playground(t)]);
 {const lp=[HOSP[0]+30,HOSP[1]+28];D.push([lp[1],()=>person(lp[0],lp[1],'#ffffff',1)]);}
 for(const b of NEW){const p=b===LUKAS?FW_SPOTS[1]:b.spot;D.push([p[1],()=>{person(p[0],p[1],b.shirt,1);if(b===LUKAS)helmet(p[0],p[1],1);}]);}
 D.push([JUSTUS_SHOP[1],()=>person(JUSTUS_SHOP[0],JUSTUS_SHOP[1],'#2f3a5c',1.05)]);
 for(const b of NEW9){if(t>=b.land+0.1){const s=backOut((t-b.land-0.1)/0.25);D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,s)]);}}
 D.sort((a,b)=>a[0]-b[0]);D.forEach(d=>d[1]());
 for(const b of NEW9){if(t>=b.t0&&t<b.land+1.8){const[sx,sy]=b.spot;let bx,by,al=1;
   if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*600;}
   else{const u=ease((t-b.land-0.8)/1.0);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.1)/0.7,0,1);}
   ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.6,t*2+sx);ctx.restore();}}
 if(t>T.n0-0.2&&t<T.al0){for(const b of NEW9)if(t>=b.land)tag(b.name,b.spot[0],b.spot[1]-62,1,pop(t,b.land,0.25));}
 if(t>T.al0-0.1&&t<T.felix-0.1){ALREADY.forEach(([n,p,tt])=>{if(t>=tt-0.05)tag(n,p[0],p[1]-62,1,pop(t,tt,0.3));});
  if(t>T.schon-0.1){const m=ALREADY.reduce((s,[n,p])=>[s[0]+p[0]/4,s[1]+p[1]/4],[0,0]);yelPill('😎 chillt mal',m[0],m[1]-150,pop(t,T.chillt,0.35)*0.55,40);}}
 if(t>T.felix-0.2&&t<T.gastel-0.2){const p=FELIX.spot;tag('Felix',p[0],p[1]-62,1,1);bubble(p[0]+70,p[1]-160,pop(t,T.kwm,0.35)*0.85,'☢️ Kraftwerksmeister!',24);
  if(t>T.wer-0.1){const k=KILIAN.spot;tag('Kilian',k[0],k[1]-62,1,pop(t,T.wer,0.3));yelPill('💬 Wer traut sich noch?',p[0],p[1]+46,pop(t,T.wer,0.35)*0.55,40);}}
 if(t>T.gastel-0.2&&t<T.p0){const g=GASTEL.spot;tag('Gastelgott',g[0],g[1]-62,1,1);bubble(g[0]+60,g[1]-150,pop(t,T.gastel,0.35)*0.85,'🎰 Mein Casino!',26);
  if(t>T.tim-0.1){const tm=S5S[0];tag('Tim',tm[0],tm[1]-62,1,1);bubble(tm[0]+60,tm[1]-150,pop(t,T.tim,0.35)*0.85,t>T.endlich?'🎰 ENDLICH!':'🎰 Ich auch!',26);}
  if(t>T.hm-0.1){const m=[(GASTEL.spot[0]+S5S[0][0])/2,(GASTEL.spot[1]+S5S[0][1])/2];yelPill('🤑 Bruno rechnet…',m[0],m[1]+70,pop(t,T.hm,0.35)*0.6,40);}}
 ctx.restore();
 if(t>T.title0&&t<T.m0){const s=pop(t,T.title0,0.35);ctx.save();ctx.translate(540,700);ctx.scale(s,s);ctx.rotate(-0.04);strokeText('NOCH NIE PASSIERT… 😱',0,0,80,YEL,NAVY,20);ctx.restore();}
 moneyCard(t);coins(t);
 if(t>T.bezahlt-0.1&&t<T.d0)stamp('BEZAHLT! ✅',540,470,t,T.bezahlt,-0.08,90,'#2FA84F');
 if(t>T.kasse2-0.1&&t<T.moment)stamp('+500 € ✅',540,470,t,T.kasse2,-0.08,90,'#2FA84F');
 door(t);loveMoney(t);pollCard(t);
 const hideB=doorVis(t)>0.05||(t>T.geld0&&t<T.geld1)||(t>T.p0&&t<T.p1);
 if(!hideB&&t<T.EC)bottomPill(t,1);
 hud(t);captions(t);
 const ec=T.EC;
 if(t>=ec){const u=ease((t-ec)/0.35);
  ctx.fillStyle=`rgba(10,18,30,${0.72*u})`;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=u;
  const ns=pop(t,ec+0.05,0.45);if(ns>0){nightcap(540,700,2.1*ns,0.2+Math.sin(t*2)*0.05);}
  const ps=pop(t,ec+0.2,0.35);if(ps>0){ctx.save();ctx.translate(540,990);ctx.scale(ps,ps);strokeText('Wem gehört die Schlafmütze? 👀',0,0,62,'#fff',NAVY,16);ctx.restore();}
  if(t>T.schreibt-0.1)yelPill('💬 Schreibt’s in die Kommentare!',540,1120,pop(t,T.schreibt,0.35),46);
  const wz=t>T.whisper?1+0.35*ease((t-T.whisper)/2.2):1;
  ctx.save();ctx.translate(540,1920);ctx.scale(wz,wz);ctx.translate(-540,-1920);bigBruno(540,1920+(1-backOut((t-ec-0.1)/0.45))*700,0.9,false);ctx.restore();
  if(t>T.whisper){const k=ease((t-T.whisper)/0.5);ctx.save();ctx.globalAlpha=k*0.9;ctx.font=`italic 900 48px ${F}`;ctx.fillStyle='#fff';ctx.textAlign='center';ctx.fillText('psst… 🤫',780,1380);ctx.restore();}
  ctx.restore();
  const bl=ease((t-(END-1.2))/1.0);if(bl>0){ctx.fillStyle=`rgba(0,0,0,${bl})`;ctx.fillRect(0,0,W,H);}}
}

window.init=async function(words,res4){
 IMG.plateC=await load('plateC.jpg');IMG.plateD=await load('plateD9.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.2;RES=res4;buildPhrases();
 const w=wt;
 // --- Endstand Folge 8 nachbauen (gleiche Reihenfolge wie Folge 7/8) ---
 const sp=SPOTS7.slice();
 NEW7=[{name:'Dome',shirt:'#3a3f55'},{name:'Xavi',shirt:'#2F5FD0'}];
 for(let i=0;i<sp.length-2;i++)NEW7.push({name:'',shirt:SHIRTS[(i*7)%SHIRTS.length]});
 const inH=(p)=>HOUSES.some(([hx,hy])=>Math.abs(p[0]-hx)<52&&p[1]<hy+6&&p[1]>hy-60);const lv=(p)=>LEAVERS.some(l=>Math.abs(l[0]-p[0])<1&&Math.abs(l[1]-p[1])<1);
 const pool=PLAZA.slice();const take=()=>pool.shift();
 NEW7.forEach(b=>{b.spot=take();});
 RES.forEach(r=>{r.spot2=(inH(r.spot)||lv(r.spot)||r.name==='Kyle')?null:take();if(r.name==='Kyle')r.spot2=take();});
 S5S=NEW5.map(()=>take());S6S=SPOTS6.map(()=>take());
 SEB=NEW7[12];EKRAM0=S6S[2];LEON0=S6S[0];
 NEW=[];for(let i=0;i<21;i++)NEW.push({name:i===0?'Davit':i===1?'Lukas W.':'',spot:take(),shirt:SHIRTS[(i*5+3)%SHIRTS.length]});
 // --- Folge 9 (Stil neu) ---
 T.land=0.55; T.title0=w('noch')-0.1;
 T.m0=w('Achtundfünfzig'); T.plus=w('Plus'); T.minus=w('Minus')+0.1; T.bezahlt=w('Stadtkasse:'); T.gebaut=T.bezahlt; T.m1=w('Stadtkasse:')+0.6;
 const c0=w('Achtundfünfzig')+0.2,c1=w('Euro!')+0.3;
 COINS=[];for(let i=0;i<58;i++){const t1=lerp(c0+0.3,c1,i/57);COINS.push({t0:t1-0.5,t1,x:140+((i*197)%800),y:1500+((i*83)%300)});}
 T.d0=w('Und')-0.1; T.justus=w('Justus,'); T.schl=w('Schlüssel')-0.2; T.passt=w('passt!'); T.auf=w('auf…')-0.2; T.liegen=w('liegen…'); T.euro=w('fünfhundert');
 T.geld0=w('DAS')-0.05; T.liebe1=w('Ich'); T.liebe2=w('LIEBE'); T.aeh=w('Äh…')-0.1; T.euch=w('EUCH!')-0.15; T.geld1=w('Stadtkasse:',2)-0.15;
 T.found=w('neunundzwanzigtausend.')-0.2; T.kasse2=w('neunundzwanzigtausend.');
 T.moment=w('Aber',2); T.d0b=T.moment-0.1; T.muetze=w('Schlafmütze?'); T.d1=w('Neu')-0.25;
 // zweite Tür-Phase: Tür bleibt offen sichtbar ab "Aber Moment"
 BILLS=[];for(let i=0;i<26;i++)BILLS.push({x:60+((i*173)%960),v:0.8+((i*7)%5)*0.15,o:i*0.37,s:0.9+((i*11)%5)*0.12});
 const names=['Janosch,','Justin,','Lionell,','Lisa,','Gastelgott,','Marty,','Timo,','Pinguin,','Theresa,','Ben,','Kilian,','Celine','Jonas!'];
 NEW9=F9_NEW.map((n,i)=>{const l=w(names[i])+0.05;return{name:n,spot:take(),land:l,t0:l-0.7,shirt:SHIRTS[(i*3+5)%SHIRTS.length]};});
 GASTEL=NEW9[4];KILIAN=NEW9[10];FELIX=NEW7[5];
 T.n0=NEW9[0].land; T.al0=w('Merlin,');
 ALREADY=[['Merlin',NEW[2].spot,w('Merlin,')],['Marcel',NEW[3].spot,w('Marcel,')],['Louis',NEW[4].spot,w('Louis')],['Davit',NEW[0].spot,w('Davit:')]];
 T.schon=w('Ihr'); T.chillt=w('chillt'); T.felix=w('Felix'); T.kwm=w('Kraftwerksmeister'); T.wer=w('Wer');
 T.gastel=w('Gastelgott'); T.tim=w('Tim.'); T.hm=w('Hm…'); T.endlich=w('Geld…')+0.2;
 T.p0=w('Hotel,')-0.35; T.hotel=w('Hotel,'); T.gym=w('Gym'); T.casino2=w('Casino?'); T.p1=w('Und',3)-0.1;
 T.EC=w('Und',3)-0.05; T.schreibt=w("Schreibt's"); T.whisper=w('Hoffentlich')-0.1;
 T.kPulse=[T.bezahlt,T.minus,T.kasse2,...COINS.filter((c,i)=>i%5===0).map(c=>c.t1)]; T.ePulse=NEW9.map(b=>b.land);
 T.cardSpans=[];
 const ak=[AKWP[0]+10,AKWP[1]-80];
 const mid=(ps)=>ps.reduce((s,p)=>[s[0]+p[0]/ps.length,s[1]+p[1]/ps.length],[0,0]);
 const nm=mid(NEW9.map(b=>b.spot)),am=mid(ALREADY.map(a=>a[1])),fe=mid([FELIX.spot,KILIAN.spot]),tg=mid([S5S[0],GASTEL.spot]);
 CAM=[[0,ak[0],ak[1]+40,1.75],[T.land+0.4,ak[0],ak[1]+40,1.7],[T.title0,ak[0],ak[1]+40,1.55],[T.m0-0.1,560,900,1.15],[w('Minus')-0.3,560,900,1.15],[w('Minus')+0.3,ak[0],ak[1]+60,1.6],
  [T.d1,ak[0],ak[1]+60,1.6],[T.d1+0.5,nm[0],nm[1]-40,1.3],[T.al0-0.4,nm[0],nm[1]-40,1.35],[T.al0+0.1,am[0],am[1]-40,1.5],
  [T.felix-0.3,am[0],am[1]-40,1.5],[T.felix+0.1,fe[0],fe[1]-60,1.55],[T.gastel-0.3,fe[0],fe[1]-60,1.55],[T.gastel+0.1,tg[0],tg[1]-60,1.45],
  [T.hm,tg[0],tg[1]-60,1.45],[T.endlich,tg[0],tg[1]-60,1.7],[T.p0+0.6,540,1150,1.2],[END,540,1150,1.2]];
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
window.frame=frame;
