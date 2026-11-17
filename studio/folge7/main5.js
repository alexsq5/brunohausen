// ===================== FOLGE 5 =====================
let RES=[];           // Folge-4 residents [{name,spot,shirt}]
let NEW=[];           // new residents this episode
const HOUSES=[[905,1262],[975,1225],[1040,1188]];
const POL=[841,1108];
const RATHAUS_DOOR=[556,990];

function nthW(k,n=1){const l=WORDS.filter(x=>x.w===k);return l.length>=n?l[n-1].s:0;}
function wt(k,n=1){return nthW(k,n);}
let T={};

// ---------- counters ----------
function kasse(t){
 let k=9000;
 k-=500*ease((t-T.weg)/0.5);
 for(const b of NEW)if(t>=b.land)k+=500*clamp((t-b.land)/0.25,0,1);
 k-=4500*ease((t-T.minusH)/0.6);
 k-=5000*ease((t-T.minusP)/0.6);
 return k;
}
function einw(t){let n=77;if(t>=T.weg)n--;for(const b of NEW)if(t>=b.land)n++;return n;}
function followers(t){let n=569;if(t>=T.weg)n--;for(const b of NEW)if(t>=b.land)n++;return n;}

function hud(t){
 const k=kasse(t), e=einw(t);
 pill(70,140,455,118,'€',YEL,'STADTKASSE',fmt(Math.round(k/100)*100)+' €',PULSE(t,T.kPulse));
 pill(570,140,445,118,'person',GREEN,'EINWOHNER',String(e),PULSE(t,T.ePulse));
}
function PULSE(t,list){let m=0;for(const k of list){const u=t-k;if(u>0&&u<0.9)m=Math.max(m,Math.sin(u/0.9*Math.PI));}return m;}

function bottomPill(t,a=1){
 if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 const f=followers(t);
 const txt=t<T.polT?`${f} FOLLOWER · POLIZEI BEI 571 🚓`:`${f} FOLLOWER · BEI 600: ??? ☢️`;
 ctx.fillText(txt,x+w/2,y+h/2+2);
 ctx.restore();
}
function timeline(t,t0,t1){
 const u=Math.min(easeOut((t-t0)/0.5),1-ease((t-t1)/0.35));if(u<=0)return;
 ctx.save();ctx.globalAlpha=u;ctx.translate(0,(1-u)*80);
 const x=70,y=1520,w=940,h=230;rr(x,y,w,h,40);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 const reach=t>=T.n571;
 const nodes=[[200,'568','Folge 4','',true],[540,'571','Polizei','🚓',reach],[880,'600','???','☢️',false]];
 ctx.fillStyle='#E2E7F1';rr(200,1606,680,16,8);ctx.fill();
 const fill=0.06+0.44*ease((t-T.n571+0.9)/0.9);
 ctx.fillStyle=GREEN;rr(200,1606,680*fill,16,8);ctx.fill();
 for(const[nx,num,lab,emo,on]of nodes){
  const ps=(nx===540&&reach)?1+0.35*Math.max(0,1-(t-T.n571)/0.4):1;
  ctx.save();ctx.translate(nx,1614);ctx.scale(ps,ps);ctx.translate(-nx,-1614);
  ctx.font=`900 46px ${F}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=on?NAVY:'#A6ACC0';ctx.fillText(num,nx,1560);
  ctx.beginPath();ctx.arc(nx,1614,on?32:25,0,7);ctx.fillStyle=on?GREEN:'#F1F3F8';ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=NAVY;ctx.stroke();
  if(emo){ctx.font=`26px ${EMO}`;ctx.fillText(emo,nx,1616);}
  ctx.font=`800 32px ${F}`;ctx.fillStyle=on?NAVY:'#A6ACC0';ctx.fillText(lab,nx,1690);
  ctx.restore();
 }
 ctx.restore();
}

// ---------- buildings ----------
function mfh(x,y,k){ // Mehrfamilienhaus, front vertex
 const a=36,b=36,h=118;
 poly([[x,y+4],[x+a+8,y-a*.5+2],[x+a-b,y-a*.5-b*.5],[x-b-8,y-b*.5+2]],'rgba(20,50,20,.22)',null);
 const wall=['#F2E2C4','#E7D0F0','#CFE6F5'][k%3],wallR=['#D9C29C','#CBB0D8','#AFCBE0'][k%3],roof='#C9564B';
 const P=box(x,y,a,b,h,wall,wallR,'#9AA3B5',2.6);
 // floors: windows both faces, 4 floors
 for(let f=0;f<4;f++){const v0=0.08+f*0.235,v1=v0+0.13;
  for(const u of[[0.14,0.40],[0.58,0.84]]){quadL(P,h,u[0],u[1],v0,v1,'#9FD3F2',1.6);quadR(P,h,u[0],u[1],v0,v1,'#8CC4E6',1.6);}
  if(f>0){quadL(P,h,0.1,0.44,v0-0.03,v0+0.005,'#ffffff',1.4);} // balcony rail
 }
 // door
 quadL(P,h,0.6,0.86,0,0.07,'#7A4E35',1.6);
 // roof rim
 const top=[[P.F[0],P.F[1]-h],[P.R[0],P.R[1]-h],[P.K[0],P.K[1]-h],[P.L[0],P.L[1]-h]];
 poly(top,roof,NAVY,2.6);
 const c=[(top[0][0]+top[2][0])/2,(top[0][1]+top[2][1])/2];
 poly(top.map(p=>[lerp(p[0],c[0],0.22),lerp(p[1],c[1],0.22)]),'#B4483F',null);
}
function polizei(x,y,t){
 const a=105,b=119,h=92;
 poly([[x,y+4],[x+a+8,y-a*.5+2],[x+a-b,y-a*.5-b*.5],[x-b-8,y-b*.5+2]],'rgba(20,50,20,.22)',null);
 const P=box(x,y,a,b,h,'#F4F6FB','#D6DCE8','#8F98AB',3);
 // blue band
 quadL(P,h,0,1,0.7,0.86,'#2F5FD0',2);quadR(P,h,0,1,0.7,0.86,'#2F5FD0',2);
 skewTextL(P,h,0.5,0.78,'POLIZEI',17,'#ffffff');
 // door + windows
 quadL(P,h,0.42,0.6,0.0,0.45,'#2F5FD0',2);
 for(const u of[[0.1,0.3],[0.7,0.9]])quadL(P,h,u[0],u[1],0.22,0.5,'#9FD3F2',2);
 for(const u of[[0.12,0.32],[0.42,0.62],[0.72,0.9]])quadR(P,h,u[0],u[1],0.22,0.5,'#8CC4E6',2);
 // blue light on roof
 const top=[x+(a-b)/2,y-(a+b)/4-h];
 const on=Math.floor(t*5)%2;
 const g=ctx.createRadialGradient(top[0],top[1]-8,2,top[0],top[1]-8,60);g.addColorStop(0,on?'rgba(80,140,255,.55)':'rgba(255,80,80,.45)');g.addColorStop(1,'rgba(80,140,255,0)');ctx.fillStyle=g;ctx.fillRect(top[0]-60,top[1]-70,120,120);
 ctx.beginPath();ctx.ellipse(top[0],top[1],12,5,0,0,7);ctx.fillStyle='#2b3150';ctx.fill();
 ctx.beginPath();ctx.arc(top[0],top[1]-3,9,Math.PI,0);ctx.closePath();ctx.fillStyle=on?'#4A8BF0':'#E5483F';ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=NAVY;ctx.stroke();
}

// ---------- characters ----------
function thief(x,y,s,run,t,sack=true){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.fillStyle='rgba(10,20,10,.3)';ctx.beginPath();ctx.ellipse(0,0,11,4.5,0,0,7);ctx.fill();
 const ph=run?Math.sin(t*22):0;
 ctx.lineWidth=1.8;ctx.strokeStyle='#14161f';
 ctx.fillStyle='#1d2030';ctx.save();ctx.translate(-3.5,-12);ctx.rotate(ph*0.5);ctx.fillRect(-2,0,4.2,12);ctx.restore();
 ctx.save();ctx.translate(3.5,-12);ctx.rotate(-ph*0.5);ctx.fillRect(-2,0,4.2,12);ctx.restore();
 rr(-9,-32,18,22,6);ctx.fillStyle='#2a2d3d';ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.arc(0,-40,8.5,0,7);ctx.fillStyle='#F8DCC4';ctx.fill();ctx.stroke();
 // hood
 ctx.beginPath();ctx.arc(0,-41,9.5,Math.PI*0.95,Math.PI*2.05);ctx.lineTo(9,-34);ctx.lineTo(-9,-34);ctx.closePath();ctx.fillStyle='#2a2d3d';ctx.fill();
 // mask band
 rr(-8.5,-44,17,6,3);ctx.fillStyle='#0c0d12';ctx.fill();
 ctx.fillStyle='#fff';ctx.fillRect(-5,-42.4,2.4,2.4);ctx.fillRect(2.6,-42.4,2.4,2.4);
 if(sack){ctx.save();ctx.translate(11,-30+ph*1.5);
  ctx.beginPath();ctx.moveTo(-3,-6);ctx.quadraticCurveTo(14,-4,13,10);ctx.quadraticCurveTo(6,17,-3,12);ctx.quadraticCurveTo(-8,4,-3,-6);ctx.closePath();
  ctx.fillStyle='#C9A66B';ctx.fill();ctx.lineWidth=1.8;ctx.stroke();
  ctx.font=`900 11px ${F}`;ctx.fillStyle='#5b3a1e';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('€',4,4);ctx.restore();}
 ctx.restore();
}
function crown(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.beginPath();ctx.moveTo(-12,0);ctx.lineTo(-12,-12);ctx.lineTo(-6,-6);ctx.lineTo(0,-15);ctx.lineTo(6,-6);ctx.lineTo(12,-12);ctx.lineTo(12,0);ctx.closePath();ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=NAVY;ctx.stroke();ctx.restore();}
function bubble(x,y,s,txt,size=30){ // thought bubble
 if(s<=0)return;ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.font=`900 ${size}px ${F}, ${EMO}`;const w=ctx.measureText(txt).width+40,h=size*1.9;
 ctx.fillStyle='#fff';ctx.strokeStyle=NAVY;ctx.lineWidth=4;
 ctx.beginPath();ctx.arc(-6,h/2+20,6,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(-16,h/2+36,4,0,7);ctx.fill();ctx.stroke();
 rr(-w/2,-h/2,w,h,h/2);ctx.fill();ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,2);ctx.restore();
}
function yelPill(txt,x,y,s,size=40,fill=YEL){
 if(s<=0)return;ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.font=`900 ${size}px ${F}, ${EMO}`;const tw=ctx.measureText(txt).width+70,h=size*2.1;
 rr(-tw/2,-h/2,tw,h,h/2);ctx.fillStyle=fill;ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,3);ctx.restore();
}
function stamp(txt,x,y,t,t0,rot=-0.15,size=74,col='#D9443C'){
 if(t<t0)return;const s=1+1.2*(1-easeOut((t-t0)/0.25));ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s*0.8,s*0.8);ctx.globalAlpha*=clamp((t-t0)/0.12,0,1);
 ctx.font=`900 ${size}px ${F}, ${EMO}`;const w=ctx.measureText(txt).width+60;
 rr(-w/2,-size*0.85,w,size*1.7,16);ctx.fillStyle='rgba(255,255,255,.85)';ctx.fill();ctx.lineWidth=11;ctx.strokeStyle=col;ctx.stroke();
 ctx.fillStyle=col;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,4);ctx.restore();
}

// ---------- big Bruno (normal or pajama) ----------
function bigBruno(cx,bottom,s,shock=false,shakeA=0,pj=false){
 const im=pj?IMG.pj:IMG.bruno;const oy=pj?40:0;const h=(im.height-oy)*s;
 ctx.save();ctx.translate(cx+shakeA,bottom-h);ctx.scale(s,s);
 ctx.drawImage(im,-353/2,-oy);
 if(shock){
  const ox=-353/2;
  ctx.fillStyle='#F0C89E';ctx.beginPath();ctx.ellipse(ox+176,358,44,19,0,0,7);ctx.fill();
  ctx.fillStyle='#3a2729';ctx.beginPath();ctx.ellipse(ox+176,366,19,25,0,0,7);ctx.fill();
  ctx.fillStyle='#E06058';ctx.beginPath();ctx.ellipse(ox+176,380,12,8,0,0,7);ctx.fill();
  ctx.fillStyle='#7EC8F2';ctx.strokeStyle='#3a2729';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(ox+300,190+oy*0);ctx.quadraticCurveTo(ox+318,225,ox+300,232);ctx.quadraticCurveTo(ox+282,225,ox+300,190);ctx.fill();ctx.stroke();
 }
 ctx.restore();
}

// ---------- cards ----------
function card(t,t0,t1,draw,h=520,y=330){
 const inn=easeOut((t-t0)/0.4),out=1-ease((t-t1)/0.35);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.fillStyle=`rgba(18,28,24,${0.45*a})`;ctx.fillRect(0,0,W,H);ctx.restore();
 ctx.save();ctx.globalAlpha=a;const sc=0.85+0.15*inn;ctx.translate(540,y+h/2);ctx.scale(sc,sc);ctx.translate(-540,-(y+h/2));
 const x=60,w=960;
 ctx.fillStyle='#6b4423';ctx.fillRect(x+140,y+h-10,26,60);ctx.fillRect(x+w-166,y+h-10,26,60);
 rr(x,y,w,h,26);ctx.fillStyle='#C9925A';ctx.fill();ctx.lineWidth=9;ctx.strokeStyle='#5b3a1e';ctx.stroke();
 rr(x+18,y+18,w-36,h-36,16);ctx.fillStyle='#E8C48F';ctx.fill();ctx.lineWidth=3;ctx.strokeStyle='rgba(91,58,30,.5)';ctx.stroke();
 draw(x,y,w,h);
 ctx.restore();
}
function row(x,y,w,rt,t,emo,title,sub,subCol){
 const s=pop(t,rt,0.35);if(s<=0)return;const rh=96;
 ctx.save();ctx.translate(540,y+rh/2);ctx.scale(s,s);ctx.translate(-540,-(y+rh/2));
 rr(x+46,y,w-92,rh-16,18);ctx.fillStyle='#FFF6E6';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle='rgba(91,58,30,.55)';ctx.stroke();
 ctx.font=`48px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(emo,x+106,y+(rh-16)/2+2);
 ctx.textAlign='left';ctx.font=`900 36px ${F}`;ctx.fillStyle=NAVY;ctx.fillText(title,x+155,y+30);
 if(sub){ctx.font=`800 26px ${F}`;ctx.fillStyle=subCol||'#8a6a48';ctx.fillText(sub,x+155,y+64);}
 ctx.restore();
}
function wanted(t){ // Steckbrief: der Neue
 card(t,T.wanted0,T.wanted1,(x,y,w,h)=>{
  ctx.font=`900 64px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#D9443C';ctx.fillText('GESUCHT',540,y+80);
  ctx.font=`800 28px ${F}`;ctx.fillStyle='#6b4a2a';ctx.fillText('Täter: „Der Neue“',540,y+128);
  // silhouette
  ctx.save();ctx.translate(230,y+330);
  rr(-100,-150,200,240,18);ctx.fillStyle='#FFF6E6';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle='rgba(91,58,30,.55)';ctx.stroke();
  ctx.fillStyle='#2a2d3d';ctx.beginPath();ctx.arc(0,-55,46,0,7);ctx.fill();rr(-70,0,140,95,40);ctx.fill();
  rr(-44,-72,88,22,10);ctx.fillStyle='#0c0d12';ctx.fill();
  strokeText('?',0,-50,90,'#fff','#2a2d3d',8);
  ctx.restore();
  const rows=[[T.w1,'Eingezogen: gestern','✅'],[T.w2,'Steuern bezahlt: 500 €','✅'],[T.w3,'Heute Nacht: 500 € weg','❌']];
  rows.forEach(([rt,txt,em],i)=>{const s=pop(t,rt,0.3);if(s<=0)return;ctx.save();ctx.translate(410,y+215+i*78);ctx.scale(s,s);
   ctx.font=`900 31px ${F}`;ctx.textAlign='left';ctx.textBaseline='middle';const tw=ctx.measureText(txt).width;ctx.fillStyle=i==2?'#D9443C':NAVY;ctx.fillText(txt,0,0);
   ctx.font=`30px ${EMO}`;ctx.fillText(em,tw+12,0);ctx.restore();});
  stamp('ZURÜCKGEHOLT?!',560,y+h-62,t,T.w4,-0.06,46);
 },560,330);
}
function finanzCard(t){
 card(t,T.fin0,T.fin1,(x,y,w,h)=>{
  ctx.font=`900 60px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#D9443C';ctx.fillText('💼 FINANZAMT',540,y+80);
  ctx.font=`800 28px ${F}`;ctx.fillStyle='#6b4a2a';ctx.fillText('Wahl: meiste Likes',540,y+128);
  row(x,y+175,w,T.fin0+0.3,t,'👑','Mario','Chef vom Finanzamt',NAVY);
  row(x,y+275,w,T.maxi,t,'🙈','Maximilian','vielleicht nächstes Mal…');
  stamp('GEWÄHLT!',x+w-190,y+215,t,T.marioT+0.15,-0.14,52);
 },420,330);
}
function insurance(t){
 card(t,T.ins0,T.ins1,(x,y,w,h)=>{
  ctx.font=`900 58px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=NAVY;ctx.fillText('🛡️ VERSICHERUNG',540,y+80);
  ctx.font=`800 28px ${F}`;ctx.fillStyle='#6b4a2a';ctx.fillText('Schadensfall: Stadtkasse Brunohausen',540,y+128);
  row(x,y+170,w,T.ins0+0.3,t,'💰','500 € zurück','für den Diebstahl',NAVY);
  const s=pop(t,T.insIf,0.35);
  if(s>0){ctx.save();ctx.translate(540,y+330);ctx.scale(s,s);
   ctx.font=`900 40px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#D9443C';ctx.fillText('NUR WENN:',0,-40);
   const bw=700;rr(-bw/2,0,bw,44,22);ctx.fillStyle='#FFF6E6';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle=NAVY;ctx.stroke();
   const f=0.04+0.06*Math.abs(Math.sin((t-T.insIf)*2));rr(-bw/2,0,bw*f,44,22);ctx.fillStyle=GREEN;ctx.fill();
   ctx.font=`900 30px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.fillText('💬 0 / 20 Kommentare',0,23);
   ctx.restore();}
 },470,330);
}

// ---------- night ----------
function nightAmt(t){
 // night from start until morning; dusk again at end
 const m=1-ease((t-T.aber)/(T.morgen-T.aber+0.4));
 const d=0.75*ease((t-T.ach)/0.8)*(t<T.EC?1:1);
 return Math.max(t<T.morgen+0.5?m:0,t>=T.ach?d:0);
}
function nightOverlay(t){
 const n=nightAmt(t);if(n<=0)return;
 ctx.save();
 ctx.globalCompositeOperation='multiply';ctx.fillStyle=`rgba(${lerp(255,95,n)},${lerp(255,110,n)},${lerp(255,185,n)},1)`;ctx.fillRect(0,0,W,H);
 ctx.globalCompositeOperation='source-over';
 const g=ctx.createRadialGradient(540,960,300,540,960,1200);g.addColorStop(0,'rgba(0,0,30,0)');g.addColorStop(1,`rgba(0,0,30,${0.45*n})`);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 ctx.restore();
}
function moon(t){
 const n=nightAmt(t);if(n<=0.05)return;ctx.save();ctx.globalAlpha=n;
 const g=ctx.createRadialGradient(900,420,20,900,420,170);g.addColorStop(0,'rgba(255,250,210,.5)');g.addColorStop(1,'rgba(255,250,210,0)');ctx.fillStyle=g;ctx.fillRect(700,240,400,400);
 ctx.beginPath();ctx.arc(900,420,52,0,7);ctx.fillStyle='#FFF6C8';ctx.fill();
 ctx.beginPath();ctx.arc(924,402,48,0,7);ctx.fillStyle='rgba(40,50,110,0.0)';ctx.fill();
 for(const[sx,sy,r]of[[120,330,3],[260,400,2],[420,320,2.5],[640,360,2],[760,470,2],[180,520,2],[1000,560,2.5],[560,450,1.8]]){ctx.globalAlpha=n*(0.6+0.4*Math.sin(t*3+sx));ctx.beginPath();ctx.arc(sx,sy,r,0,7);ctx.fillStyle='#fff';ctx.fill();}
 ctx.restore();
}
function alarm(t){
 if(t<T.alarm||t>T.alarmEnd)return;
 const u=(t-T.alarm);const ph=Math.floor(u*6)%2;const a=0.28*(1-clamp((t-T.alarmEnd+0.5)/0.5,0,1));
 ctx.fillStyle=ph?`rgba(229,72,63,${a})`:`rgba(74,139,240,${a})`;ctx.fillRect(0,0,W,H);
}

// ---------- captions ----------
const HL=new Set(['3','Uhr','Fast.','Gestalt.','Maske.','Stadtkasse.','KLICK!','ALARM!','DIEB!','500','€.','Weg.','Neue.','zurück.','Schlafanzug.','MEINER','Tim.','Julian.','Magigcram!','1.500','10.000 €.','HÄUSER!','Häuser…','Hafen?','Mehrfamilienhäuser.','4.500 €.','Gebaut!','Bett.','Magigcram','571.','POLIZEI!','Nikpe,','5.000 €.','Übrig:','geklaut','Finanzamt','Mario!','Maximilian…','Justus','BBI?','Lena','Ermittlerin.','Job:','Dönerbude.','Job','Person.','Lena…','Döner','Dönerbude?','Tim','Casino.','BEKLAUT.','Polizei','Chef.','Kommentare.','Likes','Versicherung?','20','Kommentare','Tatort','verloren…','6.','ab.','5','Euro']);
const DISP={'Drei':'3','Fünfhundert':'500','fünfhundert':'500','Euro.':'€.','Euro':'€','tausendfünfhundert':'1.500','zehntausend.':'10.000 €.','viertausendfünfhundert.':'4.500 €.','fünfhunderteinundsiebzig.':'571.','fünftausend.':'5.000 €.','zwanzig':'20','fünf':'5','sechs.':'6.','Klick.':'KLICK!','…Zu':'Zu'};
let PHRASES=[];
function buildPhrases(){
 let cur=[];
 WORDS.forEach((w,i)=>{
  cur.push(w);
  const end=/[.!?:]$/.test(w.w)||(/…$/.test(w.w))||i===WORDS.length-1;
  const len=cur.map(x=>x.d).join(' ').length;
  if(end||len>26){PHRASES.push(cur);cur=[];}
 });
 if(cur.length)PHRASES.push(cur);
 PHRASES.forEach((p,i)=>{p.start=p[0].s;p.end=(i+1<PHRASES.length?PHRASES[i+1][0].s:END);});
}
function capY(t){
 if(t>=T.EC)return -1;
 for(const [a,b] of T.cardSpans)if(t>=a-0.1&&t<b)return 1450;
 if(t<T.bigOut)return 1180;
 return 1330;
}
function captions(t){
 const y0=capY(t);if(y0<0)return;
 const p=PHRASES.find(p=>t>=p.start&&t<p.end);if(!p)return;
 const shown=p.filter(w=>t>=w.s-0.04);if(!shown.length)return;
 const size=96;ctx.font=`900 ${size}px ${F}, ${EMO}`;
 const sp=ctx.measureText(' ').width*1.0;
 const lines=[[]];let lw=0;
 for(const w of p){const ww=ctx.measureText(w.d).width;if(lw+ww>930&&lines[lines.length-1].length){lines.push([]);lw=0;}lines[lines.length-1].push([w,ww]);lw+=ww+sp;}
 const lh=size*1.02;const top=y0-(lines.length-1)*lh/2;
 lines.forEach((ln,li)=>{
  const tw=ln.reduce((s,[w,ww])=>s+ww,0)+sp*(ln.length-1);let x=540-tw/2;const y=top+li*lh;
  for(const[w,ww]of ln){
   if(t>=w.s-0.04){
    const age=t-(w.s-0.04);const s=age<0.12?0.75+0.25*backOut(age/0.12):1;
    ctx.save();ctx.translate(x+ww/2,y);ctx.scale(s,s);
    strokeText(w.d,0,0,size,HL.has(w.d)?YEL:'#fff',NAVY,20);
    ctx.restore();
   }
   x+=ww+sp;
  }
 });
}

// ---------- camera ----------
let CAM=[];
function cam(t){
 if(t>=CAM[CAM.length-1][0])return CAM[CAM.length-1].slice(1);
 let k=0;for(let i=0;i<CAM.length-1;i++){if(t<CAM[i+1][0]){k=i;break;}}
 const a=CAM[k],b=CAM[k+1];const span=b[0]-a[0];
 const mv=Math.min(span,a[4]||0.9);const u=ease((t-(b[0]-mv))/mv);
 return [lerp(a[1],b[1],u),lerp(a[2],b[2],u),lerp(a[3],b[3],u)];
}
function thiefPos(t){
 // sneak from lower-left path to the door, then run off to bottom-left
 const p0=[250,1240],p1=[330,1150],p2=[RATHAUS_DOOR[0],RATHAUS_DOOR[1]+8];
 if(t<T.sneak0)return [p0[0],p0[1],false,true];
 if(t<T.click){const u=clamp((t-T.sneak0)/(T.click-T.sneak0),0,1);
  const q=u<0.45?[lerp(p0[0],p1[0],u/0.45),lerp(p0[1],p1[1],u/0.45)]:[lerp(p1[0],p2[0],(u-0.45)/0.55),lerp(p1[1],p2[1],(u-0.45)/0.55)];
  return [q[0],q[1]+Math.abs(Math.sin(t*9))*-2,false,true];}
 if(t<T.run0)return [p2[0],p2[1],false,true];
 const u=clamp((t-T.run0)/1.3,0,1);const e=u*u;
 return [lerp(p2[0],60,e),lerp(p2[1],1420,e),true,true];
}

// ---------- main frame ----------
function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);
 const pm=T.meiner;if(t>pm-0.05&&t<pm+0.6)z*=1+0.06*Math.sin(clamp((t-pm)/0.6,0,1)*Math.PI);
 cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;
 for(const st of[...T.hLand,T.pLand,T.alarm]){const u=t-st;if(u>0&&u<0.35){shx+=Math.sin(u*90)*10*(1-u/0.35);shy+=Math.cos(u*70)*6*(1-u/0.35);}}
 ctx.save();
 ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 ctx.drawImage(t>=T.pLand?IMG.plateC:IMG.plateB,0,0);
 {const na=clamp(nightAmt(t)*1.6,0,1);if(na>0){ctx.save();ctx.globalAlpha=na;ctx.drawImage(t>=T.pLand?IMG.plateNC:IMG.plateN,0,0);ctx.restore();}}
 // existing buildings from Folge 4
 feuerwehr(472,900);ctx.drawImage(IMG.occ,280,700);
 doener(170,1068);
 // --- drawables sorted by y
 const D=[];
 const housesIn=t>=T.hLand[0];
 const inHouse=(p)=>HOUSES.some(([hx,hy])=>Math.abs(p[0]-hx)<52&&p[1]<hy+6&&p[1]>hy-60);
 const resA=clamp(1-nightAmt(t)*1.6,0,1); // nachts sind alle drinnen
 const withA=(f)=>()=>{if(resA<=0)return;ctx.save();ctx.globalAlpha*=resA;f();ctx.restore();};
 if(resA>0)for(const r of RES){
  if(housesIn&&t>=T.hLand[2]&&inHouse(r.spot))continue;
  if(r.name==='Goldfisch')D.push([r.spot[1],withA(()=>fishbowl(r.spot[0],r.spot[1],1,t))]);
  else D.push([r.spot[1],withA(()=>person(r.spot[0],r.spot[1],r.shirt,1))]);}
 for(const b of NEW){if(t>=b.land+0.15){const s=backOut((t-b.land-0.15)/0.3);D.push([b.spot[1],withA(()=>person(b.spot[0],b.spot[1],b.shirt,s))]);}}
 HOUSES.forEach(([hx,hy],i)=>{const t0=T.hLand[i]-0.55;if(t<t0)return;const yoff=t<T.hLand[i]?-560*(1-ease((t-t0)/0.55)):0;D.push([hy,()=>{mfh(hx,hy+yoff,i);dust(hx,hy-10,t,T.hLand[i],10,70);}]);});
 if(t>=T.pLand-0.55){const yoff=t<T.pLand?-560*(1-ease((t-T.pLand+0.55)/0.55)):0;D.push([POL[1],()=>{polizei(POL[0],POL[1]+yoff,t);ctx.drawImage(IMG.occBBI,0,0);dust(POL[0]-10,POL[1]-30,t,T.pLand,14,100);}]);}
 // thief
 if(t<T.run0+1.4){const[tx,ty,run]=thiefPos(t);D.push([ty,()=>{const g=ctx.createRadialGradient(tx,ty-25,4,tx,ty-25,60);g.addColorStop(0,'rgba(255,240,170,.55)');g.addColorStop(1,'rgba(255,240,170,0)');ctx.fillStyle=g;ctx.fillRect(tx-60,ty-85,120,120);thief(tx,ty,1.25,run||(t>T.sneak0&&t<T.click),t);}]);}
 D.sort((a,b)=>a[0]-b[0]);D.forEach(d=>d[1]());
 // tags
 if(t>=T.pLand)tag('Nikpe',POL[0]-20,POL[1]-235,1,ease((t-T.nikpe)/0.3));
 tag('Justus',660,905,0.95,(t>T.justus-0.1&&t<T.ach)?1:0);
 for(const b of NEW){if(t>=b.land-0.3&&t<b.land+1.8)tag(b.name,b.spot[0],b.spot[1]-70,1,clamp((t-b.land+0.3)/0.2,0,1)*(t<b.land+1.5?1:1-(t-b.land-1.5)/0.3));
  if(t>=b.land)floatText('+500 €',b.spot[0]+30,b.spot[1]-100,t,b.land,'#2FA84F',34);}
 // balloons for new residents
 for(const b of NEW){if(t<b.t0||t>b.land+2.6)continue;const[sx,sy]=b.spot;let bx,by,al=1;
  if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*700;}
  else{const u=ease((t-b.land-1.2)/1.4);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.8)/0.8,0,1);}
  ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.78,t*2+sx);ctx.restore();}
 // thief extras
 if(t>=T.click&&t<T.click+1.0){const u=(t-T.click);ctx.save();ctx.globalAlpha=1-u;strokeText('klick',RATHAUS_DOOR[0]+30,RATHAUS_DOOR[1]-70-u*30,30,'#fff',NAVY,7);ctx.restore();}
 if(t>T.weg-0.1)floatText('−500 €',RATHAUS_DOOR[0],RATHAUS_DOOR[1]-90,t,T.weg,'#E5483F',48);
 // ! over residents during alarm

 // houses: money / beds
 floatText('−4.500 €',975,1020,t,T.minusH,'#E5483F',48);
 if(t>T.bett-0.1)for(let i=0;i<3;i++)floatText('🛏️',HOUSES[i][0],HOUSES[i][1]-150,t,T.bett+i*0.15,'#fff',40);
 floatText('−5.000 €',POL[0],POL[1]-260,t,T.minusP,'#E5483F',48);
 // Mario crown
 const mario=RES.find(r=>r.name==='Mario');
 if(t>T.marioT-0.1){crown(mario.spot[0],mario.spot[1]-50,pop(t,T.marioT,0.35));tag('Mario',mario.spot[0],mario.spot[1]-82,1,clamp((t-T.marioT)/0.2,0,1)*(t<T.fin0+0.2?1:0));}
 // Lena (owner of Döner) + choice
 const lena=RES.find(r=>r.name==='Lena');
 if(t>T.lenaQ-0.1&&t<T.tim0){bubble(lena.spot[0]+60,lena.spot[1]-120,pop(t,T.lenaQ,0.35),'🥙 oder 🕵️?',30);}
 // Tim casino
 const tim=NEW.find(b=>b.name==='Tim');
 if(t>T.tim0-0.1&&t<T.polChef){tag('Tim',tim.spot[0],tim.spot[1]-70,1,clamp((t-T.tim0)/0.2,0,1));bubble(tim.spot[0]+70,tim.spot[1]-140,pop(t,T.casino,0.35),'🎰 Casino?',30);}
 // Tatort clue
 if(t>T.tatort-0.2){const a=clamp((t-T.tatort+0.2)/0.4,0,1);const cxl=RATHAUS_DOOR[0]+40,cyl=RATHAUS_DOOR[1]+40;
  ctx.save();ctx.globalAlpha=a;const gl=0.5+0.3*Math.sin(t*6);const g=ctx.createRadialGradient(cxl,cyl,2,cxl,cyl,46);g.addColorStop(0,`rgba(255,240,150,${gl})`);g.addColorStop(1,'rgba(255,240,150,0)');ctx.fillStyle=g;ctx.fillRect(cxl-50,cyl-50,100,100);
  ctx.filter='blur(3px)';ctx.beginPath();ctx.ellipse(cxl,cyl,9,6,0.3,0,7);ctx.fillStyle='#fff3b0';ctx.fill();ctx.filter='none';
  strokeText('?',cxl,cyl-34,36,YEL,NAVY,8);
  // Justus with magnifier
  person(cxl-46,cyl+6,'#2f3a5c',1.1);tag('Justus',cxl-46,cyl-62,0.9,1);
  ctx.font=`26px ${EMO}`;ctx.textAlign='center';ctx.fillText('🔍',cxl-26,cyl-26);
  ctx.restore();}
 ctx.restore(); // end camera

 nightOverlay(t);alarm(t);

 // ---- screen overlays
 wanted(t);finanzCard(t);insurance(t);
 // Häuser oder Hafen
 if(t>T.hq-0.1&&t<T.hq1){const s1=pop(t,T.hq,0.35),s2=pop(t,T.hafen,0.35);const out=1-ease((t-T.hq1+0.35)/0.35);
  ctx.save();ctx.globalAlpha=out;bigChoice('🏠 HÄUSER',260,470,s1*(t>T.hWin?1+0.12*Math.sin(clamp((t-T.hWin)/0.4,0,1)*Math.PI):1),-0.05);bigChoice('⚓ HAFEN',820,470,s2,0.05);
  if(s2>0)strokeText('oder',540,470,54,'#fff',NAVY,14);
  if(t>T.hWin){const u=ease((t-T.hWin)/0.25);ctx.strokeStyle='#E5483F';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(700,430);ctx.lineTo(700+240*u,510);ctx.stroke();}
  ctx.restore();}
 // rule pill + Döner/BBI choice
 if(t>T.rule-0.1&&t<T.tim0){const s=pop(t,T.rule,0.35);yelPill('☝️ 1 Person = 1 Job',540,470,s,40,'#fff');}
 if(t>T.lenaQ-0.1&&t<T.tim0){bigChoice('🥙 DÖNER',260,600,pop(t,T.lenaQ+0.2,0.35),-0.05);bigChoice('🕵️ BBI',820,600,pop(t,T.bbiQ,0.35),0.05);}
 if(t>T.uebernimmt-0.1&&t<T.tim0)yelPill('🥙 Neuer Chef für die Dönerbude?',540,740,pop(t,T.uebernimmt,0.35),34);
 // Polizeichef
 if(t>T.polChef-0.1&&t<T.ins0){yelPill('👮 POLIZEICHEF GESUCHT',540,470,pop(t,T.polChef,0.35),42,'#fff');if(t>T.likes-0.1)yelPill('🗳️ Meiste Likes = Chef!',540,600,pop(t,T.likes,0.35),38);}
 // 500 = geklaut
 if(t>T.genau-0.1&&t<T.fin0)yelPill('😅 genau die geklauten 500 €',540,470,pop(t,T.genau,0.35),36,'#fff');
 // Folge 6 teaser
 if(t>T.f6-0.1&&t<T.EC){const s=pop(t,T.f6,0.4);if(s>0){ctx.save();ctx.translate(540,520);ctx.rotate(-0.06);ctx.scale(s,s);strokeText('FOLGE 6 👀',0,0,120,YEL,NAVY,22);ctx.restore();}}

 // bottom bar / timeline
 const hideB=(t<T.bigOut)||T.cardSpans.some(([a,b])=>t>a-0.1&&t<b)||(t>T.tl0-0.1&&t<T.tl1);
 if(!hideB&&t<T.EC)bottomPill(t,ease((t-T.bigOut)/0.3));
 timeline(t,T.tl0,T.tl1);

 // big Bruno moments
 if(t>T.bb0-0.1&&t<T.bigOut+0.6){const inn=backOut((t-T.bb0+0.1)/0.4),out=ease((t-T.bigOut)/0.5);const bot=1920+(1-inn)*700+out*800;
  const sh=(t>T.meiner-0.05&&t<T.meiner+0.5)?Math.sin(t*60)*9:0;bigBruno(540,bot,1.0,true,sh,true);}
 if(t>T.beklaut-0.1&&t<T.beklaut+1.5){const inn=backOut((t-T.beklaut+0.1)/0.3),out=ease((t-T.beklaut-1.05)/0.4);bigBruno(830,1920+(1-inn)*600+out*700,0.75,true,Math.sin(t*60)*6*(1-out));}
 // alarm Bruno (pajama, popping in)
 if(t>T.alarm&&t<T.zu){const inn=backOut((t-T.alarm)/0.3),out=ease((t-T.zu+0.4)/0.4);bigBruno(830,1920+(1-inn)*600+out*700,0.72,true,Math.sin(t*60)*7,true);
  const s=pop(t,T.alarm+0.15,0.3)*(1-out);if(s>0){ctx.save();ctx.translate(330,1500);ctx.rotate(-0.08);redPill('🚨 ALARM!',0,0,s,60);ctx.restore();}}

 hud(t);
 captions(t);

 // end card
 const ec=T.EC;
 if(t>=ec){const u=ease((t-ec)/0.35);
  ctx.fillStyle=`rgba(16,32,20,${0.5*u})`;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=u;
  const s=backOut((t-ec)/0.4);
  ctx.save();ctx.translate(540,690);ctx.scale(s,s);
  strokeText('FOLGEN',0,-128,128,'#fff',NAVY,24);strokeText('HEISST',0,0,128,'#fff',NAVY,24);
  strokeText('EINZIEHEN',-50,128,128,YEL,NAVY,24);ctx.font=`104px ${EMO}`;ctx.textAlign='center';ctx.fillText('🏠',375,134);
  ctx.restore();
  const ps=pop(t,ec+0.25,0.35);
  if(ps>0){ctx.save();ctx.translate(540,975);ctx.scale(ps,ps);ctx.font=`900 44px ${F}, ${EMO}`;const txt='💬 20 Kommentare = 500 € zurück!';const tw=ctx.measureText(txt).width+70;
   rr(-tw/2,-46,tw,92,46);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,3);ctx.restore();}
  bigBruno(540,1920+(1-backOut((t-ec-0.1)/0.45))*700,1.0,false,0,true);
  ctx.restore();
 }
}

window.init=async function(words,res4){
 IMG.plateB=await load('plateB.jpg');IMG.plateC=await load('plateC.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');IMG.plateN=await load('plateN.jpg');IMG.plateNC=await load('plateNC.jpg');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.2;
 RES=res4;
 buildPhrases();
 const w=wt;
 T.sneak0=w('Gestalt.')-0.3; T.click=w('Klick.'); T.alarm=w('ALARM!')-0.05; T.run0=w('DIEB!'); T.zu=w('…Zu'); T.weg=w('Weg.');
 T.alarmEnd=w('Und',1)+0.2;
 T.wanted0=w('wisst',1)-0.2; T.w1=w('Gestern'); T.w2=w('Steuern'); T.w3=w('Nacht…'); T.w4=w('zurück.',1); T.wanted1=w('Ich')-0.1;
 T.bb0=w('Ich'); T.meiner=w('MEINER'); T.bigOut=w('Aber',1)+0.1;
 T.aber=w('Aber',1); T.morgen=w('Morgen');
 const sp=[[690,1290],[600,1360],[520,1385]];
 NEW=[['Tim',w('Tim.',1)],['Julian',w('Julian.')],['Magigcram',w('Magigcram!')]].map(([n,l],i)=>({name:n,land:l-0.1,t0:l-1.4,spot:sp[i],shirt:['#E8435A','#4BA3E8','#8E6CF0'][i]}));
 T.hq=w('Häuser…'); T.hafen=w('Hafen?'); T.hWin=w('HÄUSER!'); T.hq1=w('Mehrfamilienhäuser.')+0.2;
 const mf=w('Mehrfamilienhäuser.');T.hLand=[mf+0.1,mf+0.45,mf+0.8];
 T.minusH=w('viertausendfünfhundert.'); T.bett=w('Bett.');
 T.tl0=w('Moment…')-0.1; T.n571=w('fünfhunderteinundsiebzig.')+0.2; T.tl1=w('POLIZEI!')-0.05;
 T.polT=w('POLIZEI!'); T.pLand=w('POLIZEI!')+0.45; T.nikpe=w('Nikpe,'); T.minusP=w('fünftausend.'); T.genau=w('Genau');
 T.fin0=w('Finanzamt')-0.25; T.marioT=w('Mario!'); T.maxi=w('Maximilian…'); T.fin1=w('Justus',1)-0.15;
 T.justus=w('Justus',1); T.rule=w('gilt:'); T.lenaQ=w('Lena…'); T.bbiQ=w('BBI?',2); T.uebernimmt=w('übernimmt');
 T.tim0=w('Tim'); T.casino=w('Casino.'); T.beklaut=w('BEKLAUT.')-0.6;
 T.polChef=w('Polizei',1)>0?WORDS.filter(x=>x.w==='Polizei')[0].s:w('braucht'); T.likes=w('Likes');
 T.ins0=w('Versicherung?')-0.2; T.insIf=w('nur…'); T.ins1=w('Ach,')-0.1;
 T.ach=w('Ach,'); T.tatort=w('Tatort'); T.f6=w('Folge'); T.EC=w('Schließt');
 T.kPulse=[T.weg,w('Stadtkasse:'),T.minusH,T.minusP,w('Übrig:')]; T.ePulse=[T.weg,...NEW.map(b=>b.land)];
 T.cardSpans=[[T.wanted0,T.wanted1],[T.fin0,T.fin1],[T.ins0,T.ins1]];
 buildCam();
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
function buildCam(){
 const w=wt,D=RATHAUS_DOOR;
 CAM=[
  [0,420,1060,1.7,0.9],[T.sneak0-0.6,420,1060,1.75],[T.sneak0+0.2,300,1190,3.0],[T.sneak0+1.6,400,1100,2.8],[T.click-0.2,D[0],D[1]+20,2.6],[T.alarm+0.1,D[0],D[1]+20,2.7],
  [T.run0+0.2,420,1120,1.55],[T.weg+0.6,470,1080,1.5],
  [T.aber,470,1080,1.35],[T.morgen+0.3,600,1250,1.6],[w('Stadtkasse:')+0.3,600,1250,1.65],
  [w('entschieden.'),560,1150,1.25],[T.hWin+0.2,800,1160,1.5],[T.bett+0.4,800,1160,1.55],
  [T.tl0+0.1,700,1100,1.3],[T.polT-0.2,700,1100,1.32],[T.polT+0.2,850,1010,1.9],[T.genau+0.3,850,1010,2.0],
  [T.fin0+0.2,180,1250,1.9],[T.fin1,180,1250,1.95],[T.justus+0.2,650,1020,1.85],[w('Lena',1)+0.1,190,1080,1.8],[T.lenaQ,190,1080,1.85],[T.lenaQ+0.4,420,1060,1.2],
  [T.tim0-0.3,420,1060,1.25],[T.tim0+0.3,640,1320,1.9],[T.polChef,640,1320,1.95],[T.polChef+0.5,850,1010,1.7],
  [T.ins0+0.3,850,1010,1.72],[T.ach,600,1050,1.5],[T.tatort+0.2,D[0]+10,D[1]+30,2.6],[T.EC,D[0]+10,D[1]+30,2.7],[END,D[0]+10,D[1]+30,2.75]];
}
window.frame=frame;
