// ===================== FOLGE 8 =====================
const SHOP=[95,1215];
const EKRAM_DOOR=[132,1226];
const JUSTUS_SHOP=[178,1282];
const FW_SPOTS=[[300,1092],[342,1108]];
let NEW7=[],SEB=null,LUKAS=null,EKRAM0=null,LEON0=null;
function kasse(t){let k=14000;for(const b of NEW)if(t>=b.land)k+=500*clamp((t-b.land)/0.25,0,1);k-=5000*ease((t-T.minusS)/0.6);return k;}
function einw(t){let n=123;for(const b of NEW)if(t>=b.land)n++;return n;}
function followers(t){let n=615;for(const b of NEW)if(t>=b.land)n++;return n;}
function bottomPill(t,a=1){
 if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillText(`${followers(t)} FOLLOWER · ☢️ AKW: 20.000 €`,x+w/2,y+h/2+2);ctx.restore();
}
function moveP(a,b,t,t0,dur){const u=ease((t-t0)/dur);return[lerp(a[0],b[0],u),lerp(a[1],b[1],u)];}
function helmet(x,y,s=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.beginPath();ctx.arc(0,-39,8.8,Math.PI,0);ctx.closePath();ctx.fillStyle='#E5483F';ctx.fill();ctx.lineWidth=1.6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.beginPath();ctx.ellipse(0,-39,11.5,2.6,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=YEL;ctx.fillRect(-2,-46,4,5);ctx.restore();}
function schluessel(x,y){
 const a=60,b=72,h=58;
 poly([[x,y+4],[x+a+6,y-a*.5+2],[x+a-b,y-a*.5-b*.5],[x-b-6,y-b*.5+2]],'rgba(20,50,20,.22)',null);
 const P=box(x,y,a,b,h,'#F3E6CC','#DCC9A2','#2E7D7A',2.8);
 // shop window on left face with keys
 quadL(P,h,0.12,0.88,0.22,0.72,'#A9DDF2',2);
 for(let i=0;i<4;i++){const p=onL(P,h,0.22+i*0.18,0.5);ctx.save();ctx.translate(p[0],p[1]);ctx.font=`13px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🔑',0,0);ctx.restore();}
 // door on right face
 quadR(P,h,0.3,0.7,0,0.68,'#8A5A3C',2);
 const dk=onR(P,h,0.62,0.32);ctx.beginPath();ctx.arc(dk[0],dk[1],2.2,0,7);ctx.fillStyle=YEL;ctx.fill();
 // awning stripes on left face
 const n=6;for(let i=0;i<n;i++){const u0=i/n,u1=(i+1)/n;const p0=onL(P,h,u0,1),p1=onL(P,h,u1,1);const d=[-6,15];
  poly([p0,p1,[p1[0]+d[0],p1[1]+d[1]],[p0[0]+d[0],p0[1]+d[1]]],i%2?'#FFFFFF':'#2E7D7A',NAVY,1.5);}
 // roof sign
 const top=[x+(a-b)/2,y-(a+b)/4-h];
 ctx.save();ctx.translate(top[0],top[1]-22);
 rr(-62,-17,124,30,7);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=2.6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 17px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#1F5E5B';ctx.fillText('SCHLÜSSEL',-10,-1);
 ctx.font=`16px ${EMO}`;ctx.fillText('🔑',44,-1);
 ctx.restore();
 ctx.strokeStyle=NAVY;ctx.lineWidth=2.6;ctx.beginPath();ctx.moveTo(top[0]-36,top[1]-7);ctx.lineTo(top[0]-36,top[1]+6);ctx.moveTo(top[0]+36,top[1]-7);ctx.lineTo(top[0]+36,top[1]+6);ctx.stroke();
}
// ---- hook: Gleichstand ----
function hook8(t){
 const out=1-ease((t-T.aber+0.2)/0.4);if(out<=0)return;
 ctx.save();ctx.globalAlpha=out;ctx.fillStyle='rgba(10,18,30,.66)';ctx.fillRect(0,0,W,H);
 const gs=backOut(clamp(t/0.3,0,1));ctx.save();ctx.translate(540,330);ctx.scale(gs,gs);ctx.rotate(-0.04);strokeText('GLEICHSTAND!',0,0,118,YEL,NAVY,24);ctx.restore();
 const won=t>=T.win;
 const cards=[['🔑','SCHLÜSSELLADEN',290,0.12,'#fff','xuall255 · m3rlin',true],['☢️','ATOMKRAFTWERK',790,0.3,'#E9F7E4','miri.hsc · davit_2107',false]];
 for(const[e,n,x,tt,col,who,isWin]of cards){let s=pop(t,tt,0.35);if(s<=0)continue;
  let sc=s,al=1;if(won){const u=ease((t-T.win)/0.35);if(isWin)sc=s*(1+0.16*u);else{al=1-0.6*u;sc=s*(1-0.12*u);}}
  ctx.save();ctx.globalAlpha=out*al;ctx.translate(x,640);ctx.scale(sc,sc);ctx.rotate((x<540?-1:1)*0.03);
  rr(-225,-200,450,400,34);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`110px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,0,-80);
  ctx.font=`900 38px ${F}`;ctx.fillStyle=NAVY;ctx.fillText(n,0,30);
  ctx.font=`900 96px ${F}`;ctx.fillStyle=isWin?'#2F5FD0':'#2e8b2e';ctx.fillText('2',0,120);
  ctx.font=`800 24px ${F}`;ctx.fillStyle='#5a6078';ctx.fillText(who,0,178);
  ctx.restore();}
 if(pop(t,0.3,0.3)>0&&!won)strokeText(':',540,760,110,'#fff',NAVY,18);
 if(t>=T.win)stamp('BRUNOS STIMME ✅',360,900,t,T.win,-0.1,54,'#2FA84F');
 if(t>T.bm-0.15){const inn=backOut((t-T.bm+0.15)/0.4);bigBruno(820,1990+(1-inn)*650,0.62,false);}
 ctx.restore();
}
// ---- key reveal ----
function keyReveal(t){
 const inn=easeOut((t-T.k0)/0.4),out=1-ease((t-T.k1)/0.35);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(10,18,30,.74)';ctx.fillRect(0,0,W,H);
 const z=1+0.4*ease((t-T.zeichen+0.2)/0.7);const ky=700+Math.sin(t*2)*8;
 const glow=t>T.akwW-0.05;
 const g=ctx.createRadialGradient(540,ky,30,540,ky,440);g.addColorStop(0,glow?'rgba(120,255,120,.55)':'rgba(255,220,120,.5)');g.addColorStop(1,'rgba(255,220,120,0)');ctx.fillStyle=g;ctx.fillRect(60,ky-460,960,920);
 let shx=0;if(glow){const u=t-T.akwW;if(u<0.45)shx=Math.sin(u*80)*12*(1-u/0.45);}
 ctx.save();ctx.translate(540+shx,ky);ctx.scale(z,z);ctx.translate(-540,-ky);
 const kx=548;keyShape(kx,ky,1.05,-0.18+Math.sin(t*1.5)*0.05);
 // radiation mark on key bow
 const rs=pop(t,T.zeichen,0.5);if(rs>0){const bx=kx+Math.cos(-0.18)*(-120*1.05),by=ky+Math.sin(-0.18)*(-120*1.05);ctx.save();ctx.translate(bx,by);ctx.scale(rs,rs);ctx.font=`58px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('☢️',0,3);ctx.restore();}
 ctx.restore();
 // magnifier sweeping
 if(t<T.der0+0.2){const u=(t-T.k0);const mx=540+Math.sin(u*1.6)*170,my=ky-10+Math.cos(u*2.1)*40;ctx.save();ctx.lineWidth=14;ctx.strokeStyle=NAVY;ctx.beginPath();ctx.arc(mx,my,80,0,7);ctx.fillStyle='rgba(200,235,255,.25)';ctx.fill();ctx.stroke();ctx.lineWidth=22;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(mx+58,my+58);ctx.lineTo(mx+130,my+130);ctx.stroke();ctx.restore();}
 // doors with X
 const dOut=1-ease((t-T.weil+0.1)/0.3);
 if(dOut>0)for(const[dx,dt0]of[[300,T.keiner],[540,T.keiner+0.25],[780,T.keiner+0.5]]){const ds=pop(t,dt0,0.3);if(ds<=0)continue;ctx.save();ctx.globalAlpha=a*dOut;ctx.translate(dx,1110);ctx.scale(ds,ds);
  rr(-60,-90,120,180,14);ctx.fillStyle='#8a5a3c';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=NAVY;ctx.stroke();ctx.beginPath();ctx.arc(34,6,9,0,7);ctx.fillStyle=YEL;ctx.fill();ctx.stroke();
  const xs=pop(t,dt0+0.15,0.25);if(xs>0){ctx.scale(xs,xs);ctx.strokeStyle='#E5483F';ctx.lineWidth=18;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-55,-55);ctx.lineTo(55,55);ctx.moveTo(55,-55);ctx.lineTo(-55,55);ctx.stroke();}
  ctx.restore();}
 // ghost door "noch nicht gebaut"
 const gIn=pop(t,T.weil,0.35),gOut=1-ease((t-T.zeichen+0.2)/0.3);
 if(gIn>0&&gOut>0){ctx.save();ctx.globalAlpha=a*gOut;ctx.translate(540,1110);ctx.scale(gIn,gIn);ctx.setLineDash([16,12]);rr(-70,-105,140,210,16);ctx.lineWidth=7;ctx.strokeStyle='#fff';ctx.stroke();ctx.setLineDash([]);
  strokeText('?',0,8,120,YEL,NAVY,18);ctx.restore();
  if(t>T.gebaut)stamp('NOCH NICHT GEBAUT!',540,1300,t,T.gebaut,-0.08,50,'#E5483F');}
 if(glow)stamp('☢️ ATOMKRAFTWERK?!',540,1180,t,T.akwW,-0.07,62,'#2e8b2e');
 ctx.restore();
}
// ---- rule card ----
function ruleCard(t){
 const inn=easeOut((t-T.r0)/0.4),out=1-ease((t-T.r1)/0.35);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(10,18,30,.66)';ctx.fillRect(0,0,W,H);
 const hs=pop(t,T.r0,0.4);ctx.save();ctx.translate(540,420);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('NEUE REGEL!',0,0,110,YEL,NAVY,22);ctx.restore();
 const cs=pop(t,T.komm,0.4);if(cs>0){ctx.save();ctx.translate(540,760);ctx.scale(cs,cs);
  rr(-440,-120,880,240,40);ctx.fillStyle='#1c1f26';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle='#fff';ctx.stroke();
  ctx.beginPath();ctx.arc(-350,-20,46,0,7);ctx.fillStyle='#8E6CF0';ctx.fill();ctx.font=`48px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🙋',-350,-16);
  ctx.textAlign='left';ctx.font=`800 30px ${F}`;ctx.fillStyle='#fff';ctx.fillText('du',-280,-62);ctx.font=`600 26px ${F}`;ctx.fillStyle='#9aa0ae';ctx.fillText('gerade eben',-238,-62);
  const full='Ich zieh ein + Name 🏠';const n=Math.floor(clamp((t-T.ich)/1.4,0,1)*[...full].length);const txt=[...full].slice(0,n).join('');
  ctx.font=`900 50px ${F}, ${EMO}`;ctx.fillStyle='#fff';ctx.fillText(txt+((t*2|0)%2&&n<[...full].length?'|':''),-280,10);
  ctx.font=`700 26px ${F}`;ctx.fillStyle='#9aa0ae';ctx.fillText('Antworten',-280,78);
  ctx.restore();}
 if(t>T.name+0.2)yelPill('➜ Name + eigene Wohnung',540,1010,pop(t,T.name+0.2,0.35),40,'#fff');
 ctx.restore();
}
function noteCard(t){
 const inn=easeOut((t-T.notiert+0.05)/0.3),out=1-ease((t-T.tim-0.15)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.translate(540,560);ctx.rotate(-0.04);ctx.scale(0.85+0.15*inn,0.85+0.15*inn);
 rr(-400,-170,800,340,22);ctx.fillStyle='#FFF8DC';ctx.fill();ctx.lineWidth=9;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.strokeStyle='rgba(74,139,240,.35)';ctx.lineWidth=2;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(-370,-60+i*62);ctx.lineTo(370,-60+i*62);ctx.stroke();}
 ctx.textAlign='left';ctx.textBaseline='middle';ctx.font=`900 36px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.fillText('📋 WUNSCHLISTE',-360,-112);
 ctx.font=`900 48px ${F}, ${EMO}`;ctx.fillText('🐄 Bauernhof',-360,-10);
 ctx.font=`italic 800 34px ${F}`;ctx.fillText('Landwirt: Sebastian',-360,62);
 ctx.restore();
 if(t>T.notiert)stamp('NOTIERT! ✍️',700,740,t,T.notiert+0.15,-0.12,52,'#2F5FD0');
}

const HL=new Set(['Gleichstand!','2','Schlüsselladen.','Atomkraftwerk.','Bürgermeister…','SCHLÜSSELLADEN!','21','Einwohner!','10.500','€!','24.500.','144.','5.000.','Gebaut!','Ekram,','offen.','Justus','jetzt?','keiner','Tür','gebaut','Zeichen…','Atomkraftwerk!','Xavi','BBI','fest:','19.500.','500','€.','einziger','Follower!','Leon','Lukas,','Feuerwehr!','Sebastian','Bauernhof','Milchkühen.','Landwirt.','Notiert!','Tim…','Casino','einziehen','Ich','zieh','ein,','Name.','9:','Tür,','passt.']);
const DISP={'Zwei':'2','einundzwanzig':'21','zehntausendfünfhundert':'10.500','Euro!':'€!','Euro.':'€.','vierundzwanzigtausendfünfhundert.':'24.500.','hundertvierundvierzig.':'144.','fünftausend.':'5.000.','neunzehntausendfünfhundert.':'19.500.','fünfhundert':'500','neun:':'9:'};
function capY(t){
 if(t>=T.EC)return -1;
 for(const [a,b] of T.cardSpans)if(t>=a-0.1&&t<b)return 1450;
 if(t<T.aber)return 1300;
 return 1330;
}

function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;for(const st of[T.sLand]){const u=t-st;if(u>0&&u<0.4){shx+=Math.sin(u*90)*10*(1-u/0.4);shy+=Math.cos(u*70)*6*(1-u/0.4);}}
 ctx.save();ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 ctx.drawImage(IMG.plateD,0,0);
 feuerwehr(472,900);ctx.drawImage(IMG.occ,280,700);doener(170,1068);
 {const pulse=t>T.fest&&t<T.leon?1+0.06*Math.sin((t-T.fest)*7):1;ctx.save();ctx.translate(890,800);ctx.scale(pulse,pulse);ctx.translate(-890,-800);radSign(890,800,t,-10);ctx.restore();}
 const D=[];
 D.push([1060,()=>kevin(522,1060,1.25,0)]);
 D.push([POL[1],()=>{polizei(POL[0],POL[1],t);ctx.drawImage(IMG.occBBI,0,0);}]);
 HOUSES.forEach(([hx,hy],i)=>D.push([hy,()=>mfh(hx,hy,i)]));
 D.push([HOSP[1],()=>krankenhaus(HOSP[0],HOSP[1])]);
 if(t>=T.sLand-0.55){const yoff=t<T.sLand?-560*(1-ease((t-T.sLand+0.55)/0.55)):0;D.push([SHOP[1],()=>{schluessel(SHOP[0],SHOP[1]+yoff);dust(SHOP[0],SHOP[1]-20,t,T.sLand,12,80);}]);}
 for(const r of RES){if(!r.spot2)continue;
  if(r.name==='Kyle'){D.push([KYLE_DOOR[1],()=>person(KYLE_DOOR[0],KYLE_DOOR[1],r.shirt,1)]);continue;}
  const q=r.spot2;if(r.name==='Goldfisch')D.push([q[1],()=>fishbowl(q[0],q[1],1,t)]);else D.push([q[1],()=>person(q[0],q[1],r.shirt,1)]);}
 NEW5.forEach(([n,sp0,sh],i)=>{const sp=S5S[i];D.push([sp[1],()=>person(sp[0],sp[1],sh,1)]);});
 const ekP=t<T.ekram?EKRAM0:moveP(EKRAM0,EKRAM_DOOR,t,T.ekram,1.4);
 const leonP=t<T.leon?LEON0:moveP(LEON0,FW_SPOTS[0],t,T.leon,1.3);
 S6S.forEach((sp,i)=>{if(i===1)return;if(i===2){D.push([ekP[1],()=>person(ekP[0],ekP[1],SHIRTS[2],1)]);return;}
  if(i===0){D.push([leonP[1],()=>{person(leonP[0],leonP[1],SHIRTS[0],1);if(t>T.fw-0.1)helmet(leonP[0],leonP[1],pop(t,T.fw,0.3));}]);return;}
  D.push([sp[1],()=>person(sp[0],sp[1],SHIRTS[i],1)]);});
 NEW7.forEach(b=>D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,1)]));
 D.push([PLAY[0][1]-20,()=>playground(t)]);
 {const lp=[HOSP[0]+30,HOSP[1]+28];D.push([lp[1],()=>person(lp[0],lp[1],'#ffffff',1)]);}
 for(const b of NEW){if(t>=b.land+0.15){const s=backOut((t-b.land-0.15)/0.3);let p=b.spot;
  if(b===LUKAS&&t>=T.leon)p=moveP(b.spot,FW_SPOTS[1],t,T.leon+0.15,1.3);
  D.push([p[1],()=>{person(p[0],p[1],b.shirt,s);if(b===LUKAS&&t>T.fw-0.1)helmet(p[0],p[1],pop(t,T.fw+0.15,0.3));}]);}}
 const jP=t<T.justus?JUSTUS0:moveP(JUSTUS0,JUSTUS_SHOP,t,T.justus-0.3,1.6);
 D.push([jP[1],()=>person(jP[0],jP[1],'#2f3a5c',1.05)]);
 D.sort((a,b)=>a[0]-b[0]);D.forEach(d=>d[1]());
 // balloons
 for(const b of NEW){if(t>=b.t0&&t<b.land+2.6){const[sx,sy]=b.spot;let bx,by,al=1;
   if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*700;}
   else{const u=ease((t-b.land-1.2)/1.4);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.8)/0.8,0,1);}
   ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.66,t*2+sx);ctx.restore();}
  if(t>=b.land)floatText('+500 €',b.spot[0]+26,b.spot[1]-92,t,b.land,'#2FA84F',30);}
 // labels
 if(t>T.ekram-0.2&&t<T.k0){tag('Ekram',ekP[0],ekP[1]-62,1,1);if(t>T.offen-0.1&&t<T.justus)yelPill('🔑 Chef vom Laden',ekP[0]+60,ekP[1]-118,pop(t,T.offen,0.35)*0.5,40);}
 if(t>T.justus-0.2&&t<T.k0){tag('Justus',jP[0],jP[1]-66,0.95,1);bubble(jP[0]+40,jP[1]-170,pop(t,T.passt,0.35)*0.85,'Passt er jetzt? 🔑',22);}
 const xavi=NEW7[1];
 if(t>T.xavi-0.2&&t<T.fest){tag('Xavi',xavi.spot[0],xavi.spot[1]-62,1,1);yelPill('🕵️ BBI hat es entdeckt',xavi.spot[0],xavi.spot[1]-118,pop(t,T.bbi,0.35)*0.55,40);}
 if(t>T.leon-0.2&&t<T.seb-0.2){tag('Leon',leonP[0]-40,leonP[1]-66,0.9,1);const lk=t>=T.leon?moveP(LUKAS.spot,FW_SPOTS[1],t,T.leon+0.15,1.3):LUKAS.spot;tag('Lukas',lk[0]+40,lk[1]-66,0.9,1);
  if(t>T.fw-0.1)yelPill('🚒 Feuerwehr',(leonP[0]+lk[0])/2,leonP[1]-140,pop(t,T.fw,0.35)*0.55,40);}
 if(t>T.seb-0.2&&t<T.notiert){tag('Sebastian',SEB.spot[0],SEB.spot[1]-62,1,1);bubble(SEB.spot[0]+60,SEB.spot[1]-150,pop(t,T.bauer,0.35)*0.85,'🐄 Bauernhof',28);
  if(t>T.landwirt-0.1)yelPill('👨‍🌾 Landwirt',SEB.spot[0],SEB.spot[1]+40,pop(t,T.landwirt,0.35)*0.5,40,'#fff');}
 const tim=S5S[0];
 if(t>T.tim-0.2&&t<T.r0){tag('Tim',tim[0],tim[1]-62,1,1);bubble(tim[0]+60,tim[1]-150,pop(t,T.casino,0.35)*0.85,'🎰 Casino? 😢',28);}
 floatText('−5.000 €',SHOP[0]+20,SHOP[1]-190,t,T.minusS,'#E5483F',44);
 ctx.restore();
 // overlays
 hook8(t);keyReveal(t);noteCard(t);ruleCard(t);
 if(t>T.fest-0.1&&t<T.leon-0.2){const s=pop(t,T.fest,0.35);if(s>0){ctx.save();ctx.translate(540,470);ctx.scale(s,s);const w=780;rr(-w/2,-60,w,120,60);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
   const f=clamp(kasse(t)/20000,0,1);rr(-w/2+12,-48,(w-24)*f,96,48);ctx.fillStyle='#BDEBB0';ctx.fill();ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(`☢️ ${fmt(Math.round(kasse(t)/100)*100)} / 20.000 €`,0,3);ctx.restore();}
  if(t>T.f500)yelPill('Nur noch 500 € 😱',540,610,pop(t,T.f500,0.35),44);
  if(t>T.einziger){const s2=pop(t,T.einziger,0.35)*(1+0.05*Math.sin((t-T.einziger)*8));yelPill('+1 Follower = ☢️',540,750,s2,52,'#fff');}}
 if(t>T.weiss-0.1&&t<T.r0){const inn=backOut((t-T.weiss+0.1)/0.3),out=ease((t-T.r0+0.3)/0.4);bigBruno(830,1920+(1-inn)*600+out*700,0.72,false);}
 if(t>T.f9-0.1&&t<T.EC){const s=pop(t,T.f9,0.4);if(s>0){ctx.save();ctx.translate(540,520);ctx.rotate(-0.06);ctx.scale(s,s);strokeText('FOLGE 9 ☢️',0,0,120,YEL,NAVY,22);ctx.restore();}}
 const hideB=(t<T.aber)||T.cardSpans.some(([a,b])=>t>a-0.1&&t<b);
 if(!hideB&&t<T.EC)bottomPill(t,1);
 hud(t);captions(t);
 const ec=T.EC;
 if(t>=ec){const u=ease((t-ec)/0.35);
  ctx.fillStyle=`rgba(16,32,20,${0.5*u})`;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=u;const s=backOut((t-ec)/0.4);
  ctx.save();ctx.translate(540,690);ctx.scale(s,s);
  strokeText('KOMMENTIEREN',0,-128,118,'#fff',NAVY,24);strokeText('HEISST',0,0,128,'#fff',NAVY,24);
  strokeText('EINZIEHEN',-50,128,128,YEL,NAVY,24);ctx.font=`104px ${EMO}`;ctx.textAlign='center';ctx.fillText('🏠',375,134);ctx.restore();
  const ps=pop(t,ec+0.25,0.35);
  if(ps>0){ctx.save();ctx.translate(540,975);ctx.scale(ps,ps);ctx.font=`900 40px ${F}, ${EMO}`;const txt='💬 „Ich zieh ein + Name“';const tw=ctx.measureText(txt).width+70;
   rr(-tw/2,-46,tw,92,46);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,3);ctx.restore();}
  bigBruno(540,1920+(1-backOut((t-ec-0.1)/0.45))*700,1.0,false);
  ctx.restore();}
}

window.init=async function(words,res4){
 IMG.plateC=await load('plateC.jpg');IMG.plateD=await load('plateD.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.6;RES=res4;buildPhrases();
 const w=wt;
 // --- Folge-7-Endstand nachbauen (gleiche Reihenfolge wie Folge 7) ---
 const sp=SPOTS7.slice();
 NEW7=[{name:'Dome',shirt:'#3a3f55'},{name:'Xavi',shirt:'#2F5FD0'}];
 for(let i=0;i<sp.length-2;i++)NEW7.push({name:'',shirt:SHIRTS[(i*7)%SHIRTS.length]});
 const inH=(p)=>HOUSES.some(([hx,hy])=>Math.abs(p[0]-hx)<52&&p[1]<hy+6&&p[1]>hy-60);const lv=(p)=>LEAVERS.some(l=>Math.abs(l[0]-p[0])<1&&Math.abs(l[1]-p[1])<1);
 const pool=PLAZA.slice();const take=()=>pool.shift();
 NEW7.forEach(b=>{b.spot=take();});
 RES.forEach(r=>{r.spot2=(inH(r.spot)||lv(r.spot)||r.name==='Kyle')?null:take();if(r.name==='Kyle')r.spot2=take();});
 S5S=NEW5.map(()=>take());S6S=SPOTS6.map(()=>take());
 SEB=NEW7[12];EKRAM0=S6S[2];LEON0=S6S[0];
 // --- Folge 8: 21 neue ---
 const a0=w('einundzwanzig')+0.1,a1=w('Stadtkasse:')+0.4;
 NEW=[];for(let i=0;i<21;i++){const l=lerp(a0,a1,i/20);NEW.push({name:i===0?'Davit':i===1?'Lukas W.':'',spot:take(),land:l,t0:l-1.2,shirt:SHIRTS[(i*5+3)%SHIRTS.length]});}
 LUKAS=NEW[1];
 T.z1=w('Zwei'); T.z2=w('Zwei',2); T.bm=w('Bürgermeister…'); T.win=w('SCHLÜSSELLADEN!'); T.aber=w('Aber');
 T.sLand=w('Gebaut!')-0.1; T.minusS=w('fünftausend.'); T.ekram=w('Ekram,'); T.offen=w('offen.')-0.3; T.justus=w('Justus'); T.passt=w('Passt');
 T.k0=w('Ekram'); T.der0=w('Der'); T.keiner=w('keiner'); T.weil=w('Weil'); T.gebaut=w('gebaut'); T.zeichen=w('Zeichen…'); T.akwW=w('Atomkraftwerk!'); T.k1=w('Xavi')-0.15;
 T.xavi=w('Xavi'); T.bbi=w('BBI'); T.fest=w('fest:'); T.f500=w('fünfhundert'); T.einziger=w('einziger');
 T.leon=w('Leon'); T.fw=w('Feuerwehr!'); T.seb=w('Sebastian'); T.bauer=w('Bauernhof'); T.landwirt=w('Landwirt.'); T.notiert=w('Notiert!');
 T.tim=w('Tim…'); T.casino=w('Casino'); T.weiss=w('weiß.');
 T.r0=w('Und',4)-0.05; T.komm=w('kommentiert:')-0.1; T.ich=w('Ich',3); T.name=w('Name.'); T.r1=w('Folge')-0.1;
 T.f9=w('Folge'); T.EC=w('passt.')+0.9;
 T.kPulse=[w('Stadtkasse:'),T.minusS,w('Stadtkasse'),...NEW.map(b=>b.land)]; T.ePulse=[w('Einwohner:'),...NEW.map(b=>b.land)];
 T.cardSpans=[[0,T.aber],[T.k0,T.k1],[T.r0,T.r1]];
 const ek=EKRAM0,sb=SEB.spot,tm=S5S[0];
 CAM=[[0,520,1250,1.15,0.9],[T.aber-0.2,520,1250,1.15],[T.aber+0.5,520,1330,1.15],[w('Einwohner:'),520,1330,1.2],
  [w('Schlüsselladen:')-0.1,190,1180,1.85],[T.ekram-0.2,190,1180,1.9],[T.justus,260,1200,1.6],[T.k0,260,1200,1.6],
  [T.k1-0.4,xavi0()[0],xavi0()[1]-60,1.8],[T.xavi+0.5,xavi0()[0],xavi0()[1]-60,1.85],[T.fest-0.2,860,860,1.7],[T.leon-0.4,860,860,1.75],
  [T.leon,360,1000,1.6],[T.seb-0.3,360,1000,1.65],[T.seb,sb[0],sb[1]-60,1.85],[T.notiert,sb[0],sb[1]-60,1.9],[T.tim-0.2,tm[0],tm[1]-60,1.85],[T.r0,tm[0],tm[1]-60,1.9],
  [T.r0+0.6,520,1120,1.2],[END,520,1120,1.2]];
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
function xavi0(){return NEW7[1].spot;}
window.frame=frame;
