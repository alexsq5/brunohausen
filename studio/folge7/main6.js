// ===================== FOLGE 6 =====================
const NEW5=[['Tim',[690,1290],'#E8435A'],['Julian',[600,1360],'#4BA3E8'],['Magigcram',[520,1385],'#8E6CF0']];
const SPOTS6=[[60,1240],[300,1250],[580,1250],[780,1200],[370,1360],[630,1310],[40,1330],[500,1290],[430,1380],[310,1320],[680,1380],[130,1370],[960,1380],[300,1390],[560,1400],[380,1430]];
const NAMES6=['Leon.','Lesander.','Ekram.','Levke.','Ole.','Emilio.','Duncan.','Finn.','Luvki.','Jonas.','Einer.','Rishi.','Mira.','Alex.','Miriam.','Philipp!'];
const SHIRTS=['#ff7a59','#4d9be6','#b06ad6','#3fbf8f','#f2b134','#e85d8a','#5ac8c8','#8a6cff','#ff9f1c','#2ec4b6','#e71d36','#7b2cbf','#F06292','#26A69A','#FFB300','#5C6BC0'];
const LEAVERS=[[95,1279],[148,1211],[203,1217]];
const JUSTUS0=[715,1150];

function kasse(t){let k=500;for(const b of NEW)if(t>=b.land)k+=500*clamp((t-b.land)/0.25,0,1);return k;}
function einw(t){let n=79;for(const b of NEW)if(t>=b.land)n++;if(t>=T.tschuess)n-=3;return n;}
function followers(t){let n=571;for(const b of NEW)if(t>=b.land)n++;if(t>=T.tschuess)n-=3;return n;}
function bottomPill(t,a=1){
 if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillText(`${followers(t)} FOLLOWER · BEI 600: ??? ☢️`,x+w/2,y+h/2+2);ctx.restore();
}
function timeline6(t,t0,t1){
 const u=Math.min(easeOut((t-t0)/0.5),1-ease((t-t1)/0.35));if(u<=0)return;
 ctx.save();ctx.globalAlpha=u;ctx.translate(0,(1-u)*80);
 const x=70,y=1520,w=940,h=230;rr(x,y,w,h,40);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle='#E2E7F1';rr(200,1606,680,16,8);ctx.fill();
 ctx.fillStyle=GREEN;rr(200,1606,680*0.5*ease((t-t0)/0.8),16,8);ctx.fill();
 const nodes=[[200,'571','Polizei','🚓',true],[540,'584','jetzt','📍',true],[880,'600','???','☢️',false]];
 for(const[nx,num,lab,emo,on]of nodes){
  const ps=nx===880?1+0.12*Math.sin(t*6):1;ctx.save();ctx.translate(nx,1614);ctx.scale(ps,ps);ctx.translate(-nx,-1614);
  ctx.font=`900 46px ${F}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=on?NAVY:'#2e8b2e';ctx.fillText(num,nx,1560);
  ctx.beginPath();ctx.arc(nx,1614,on?32:30,0,7);ctx.fillStyle=on?GREEN:'#E9F7E4';ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`26px ${EMO}`;ctx.fillText(emo,nx,1616);
  ctx.font=`800 32px ${F}`;ctx.fillStyle=on?NAVY:'#2e8b2e';ctx.fillText(lab,nx,1690);ctx.restore();}
 const s=pop(t,T.noch16,0.35);if(s>0){ctx.save();ctx.translate(710,1555);ctx.scale(s,s);ctx.font=`900 30px ${F}`;const tx='noch 16!';const tw=ctx.measureText(tx).width+30;rr(-tw/2,-24,tw,48,24);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=4;ctx.strokeStyle=NAVY;ctx.stroke();ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(tx,0,2);ctx.restore();}
 ctx.restore();
}
// ---- key ----
function keyShape(x,y,s,rot){
 ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);
 ctx.lineWidth=10;ctx.strokeStyle=NAVY;ctx.fillStyle='#F6C945';
 ctx.beginPath();ctx.arc(-120,0,62,0,7);ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.arc(-120,0,24,0,7);ctx.fillStyle='#1d2a20';ctx.fill();ctx.stroke();
 ctx.fillStyle='#F6C945';rr(-62,-20,230,40,10);ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.moveTo(110,18);ctx.lineTo(110,70);ctx.lineTo(140,70);ctx.lineTo(140,48);ctx.lineTo(160,48);ctx.lineTo(160,18);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.moveTo(60,18);ctx.lineTo(60,52);ctx.lineTo(85,52);ctx.lineTo(85,18);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.fillStyle='rgba(255,255,255,.55)';rr(-50,-14,180,8,4);ctx.fill();
 ctx.beginPath();ctx.arc(-138,-22,12,0,7);ctx.fill();
 ctx.restore();
}
function keyHook(t){
 const out=1-ease((t-T.hook1+0.3)/0.4);if(out<=0)return;
 ctx.save();ctx.globalAlpha=out;ctx.fillStyle='rgba(10,18,30,.72)';ctx.fillRect(0,0,W,H);
 const s=backOut(clamp(t/0.45,0,1))*1.15;const y=820+Math.sin(t*2)*10;
 const g=ctx.createRadialGradient(540,y,30,540,y,420);g.addColorStop(0,'rgba(255,220,120,.55)');g.addColorStop(1,'rgba(255,220,120,0)');ctx.fillStyle=g;ctx.fillRect(100,y-420,880,840);
 for(let i=0;i<10;i++){const a=i/10*6.283+t*0.8,r=260+30*Math.sin(t*3+i);const sx=540+Math.cos(a)*r,sy=y+Math.sin(a)*r*0.6;const tw=0.5+0.5*Math.sin(t*6+i*2);ctx.globalAlpha=out*tw;ctx.font=`34px ${EMO}`;ctx.textAlign='center';ctx.fillText('✨',sx,sy);}
 ctx.globalAlpha=out;keyShape(560,y,s,-0.25+Math.sin(t*1.5)*0.08);
 // doors with X
 const doors=[[300,T.d1],[540,T.d2],[780,T.d3]];
 for(const[dx,dt0]of doors){const ds=pop(t,dt0,0.3);if(ds<=0)continue;ctx.save();ctx.translate(dx,1170);ctx.scale(ds,ds);
  rr(-60,-90,120,180,14);ctx.fillStyle='#8a5a3c';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=NAVY;ctx.stroke();ctx.beginPath();ctx.arc(34,6,9,0,7);ctx.fillStyle=YEL;ctx.fill();ctx.stroke();
  const xs=pop(t,dt0+0.15,0.25);if(xs>0){ctx.scale(xs,xs);ctx.strokeStyle='#E5483F';ctx.lineWidth=18;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-55,-55);ctx.lineTo(55,55);ctx.moveTo(55,-55);ctx.lineTo(-55,55);ctx.stroke();}
  ctx.restore();}
 ctx.restore();
}
// ---- cards ----
function insurance6(t){
 card(t,T.ins0,T.ins1,(x,y,w,h)=>{
  ctx.font=`900 58px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=NAVY;ctx.fillText('🛡️ VERSICHERUNG',540,y+80);
  ctx.font=`800 28px ${F}`;ctx.fillStyle='#6b4a2a';ctx.fillText('Antrag: 500 € für den Diebstahl',540,y+128);
  row(x,y+170,w,T.ins0+0.3,t,'💬','Kommentare: unter 20','Bedingung nicht erfüllt','#D9443C');
  row(x,y+270,w,T.ins500,t,'💰','500 €','bleiben weg…');
  stamp('ABGELEHNT',540,y+h-40,t,T.abgelehnt,-0.1,70);
 },470,330);
}
function wishes(t){
 card(t,T.wish0,T.wish1,(x,y,w,h)=>{
  ctx.font=`900 60px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=NAVY;ctx.fillText('💼 JOB-WÜNSCHE',540,y+78);
  ctx.font=`800 28px ${F}`;ctx.fillStyle='#6b4a2a';ctx.fillText('aber dafür brauchen wir erst Gebäude!',540,y+124);
  const R=[['🧁','Mira','Konditorin',T.wMira],['🏥','Lesander','Pflegefachkraft',T.wLes],['🏦','Rishi','Chef der Bank',T.wRishi],['🏋️','Theo','Chef vom Gym',T.wTheo],['🍺','Einer','Chef der Klosterbrauerei',T.wEiner],['🏨','Magigcram','Chef vom Luxushotel',T.wMagic]];
  R.forEach(([e,n,j,rt],i)=>row(x,y+160+i*92,w,rt,t,e,n,j,NAVY));
 },740,250);
}
function cheque(t){
 const inn=easeOut((t-T.cheque0)/0.4),out=1-ease((t-T.cheque1)/0.35);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.translate(540,560);ctx.rotate(-0.05);ctx.scale(0.8+0.2*inn,0.8+0.2*inn);
 rr(-430,-170,860,340,22);ctx.fillStyle='#EAF6EC';ctx.fill();ctx.lineWidth=9;ctx.strokeStyle=NAVY;ctx.stroke();
 rr(-410,-150,820,300,14);ctx.lineWidth=3;ctx.strokeStyle='rgba(29,36,64,.35)';ctx.stroke();
 ctx.textAlign='left';ctx.textBaseline='middle';ctx.font=`900 36px ${F}`;ctx.fillStyle=NAVY;ctx.fillText('SCHECK',-380,-108);
 ctx.font=`800 28px ${F}`;ctx.fillText('Zahlen Sie an: Brunohausen',-380,-50);
 ctx.font=`900 96px ${F}`;ctx.fillStyle='#2FA84F';ctx.fillText('50.000 €',-380,40);
 ctx.font=`italic 800 34px ${F}`;ctx.fillStyle=NAVY;ctx.fillText('gez. Finn',150,115);
 ctx.restore();
 if(t>T.kommentar)stamp('NUR EIN KOMMENTAR 😅',540,600,t,T.kommentar,-0.12,52);
}
function vote(t){
 if(t<T.vote0-0.1||t>T.vote1)return;const out=1-ease((t-T.vote1+0.35)/0.35);
 ctx.save();ctx.globalAlpha=out;
 const tiles=[['🏥','KRANKENHAUS',290,420,T.v1],['🏋️','GYM',790,420,T.v2],['🏦','BANK',290,700,T.v3],['🏨','LUXUSHOTEL',790,700,T.v4]];
 for(const[e,n,x,y,tt]of tiles){const s=pop(t,tt,0.35);if(s<=0)continue;ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.rotate((x<540?-1:1)*0.03);
  rr(-230,-115,460,230,34);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`88px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,0,-30);
  ctx.font=`900 46px ${F}`;ctx.fillStyle=NAVY;ctx.fillText(n,0,62);ctx.restore();}
 if(t>T.likes-0.1)yelPill('🗳️ Meiste Likes gewinnen!',540,900,pop(t,T.likes,0.35),40);
 ctx.restore();
}
function suitcase(x,y){ctx.save();ctx.translate(x,y);rr(-7,-10,14,12,2);ctx.fillStyle='#8a5a3c';ctx.fill();ctx.lineWidth=1.6;ctx.strokeStyle=NAVY;ctx.stroke();ctx.beginPath();ctx.moveTo(-3,-10);ctx.lineTo(-3,-13);ctx.lineTo(3,-13);ctx.lineTo(3,-10);ctx.stroke();ctx.restore();}
function justusPos(t){
 if(t<T.kWalk)return JUSTUS0;
 const P=[JUSTUS0,[880,1278],[952,1241],[1012,1205]],ts=[T.kWalk,T.tuer2-0.3,T.anderen-0.1,T.passt-0.1];
 for(let i=0;i<3;i++)if(t<ts[i+1]){const u=ease((t-ts[i])/(ts[i+1]-ts[i]));return[lerp(P[i][0],P[i+1][0],u),lerp(P[i][1],P[i+1][1],u)];}
 return P[3];
}

// ---------- captions ----------
const HL=new Set(['Dieb','verloren.','Schlüssel.','keiner','einzigen','Tür','Justus','BBI','wach.','gesehen?','geschlafen.','Schlafanzug.','Versicherung?','20','500','€.','nichts.','ABER','DANN.','16','Einwohner!','Leon.','Lesander.','Ekram.','Levke.','Ole.','Emilio.','Duncan.','Finn.','Luvki.','Jonas.','Einer.','Rishi.','Mira.','Alex.','Miriam.','Philipp!','8.000','€!','8.500 €.','3','ausgezogen.','Tschüss!','Steuern','92.','Job.','Mira','Konditorin','Lesander','Pflegefachkraft.','Rishi','Bank.','Theo','Gym.','Einer','Klosterbrauerei.','Magigcram…','Luxushotel.','Finn','50.000','Kommentar.','Geld.','Krankenhaus,','Gym,','Bank','Luxushotel?','Likes','600.','radioaktiv.','Schlüssel?','Tür.','passt?','7.','Nächstes?']);
const DISP={'zwanzig':'20','fünfhundert':'500','Euro.':'€.','Euro!':'€!','Euro':'€','Sechzehn':'16','sechzehn':'16','achttausend':'8.000','achttausendfünfhundert.':'8.500 €.','drei':'3','zweiundneunzig.':'92.','fünfzigtausend':'50.000','sechshundert.':'600.','sieben.':'7.'};
function capY(t){
 for(const [a,b] of T.cardSpans)if(t>=a-0.1&&t<b)return a===T.wish0?1170:1450;
 if(t<T.hook1)return 1450;
 if(t>T.bb0-0.1&&t<T.bbOut)return 1180;
 if(t>=T.EC)return -1;
 return 1330;
}

// ---------- main frame ----------
function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);
 cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;for(const st of[T.aberDann,T.radio]){const u=t-st;if(u>0&&u<0.4){shx+=Math.sin(u*90)*10*(1-u/0.4);shy+=Math.cos(u*70)*6*(1-u/0.4);}}
 ctx.save();ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 ctx.drawImage(IMG.plateC,0,0);
 feuerwehr(472,900);ctx.drawImage(IMG.occ,280,700);doener(170,1068);
 // radSign pulse at 'radioaktiv'
 {const rs=t>T.radio-0.1&&t<T.radio+1.2?1+0.12*Math.sin((t-T.radio)*14):1;ctx.save();ctx.translate(890,800);ctx.scale(rs,rs);ctx.translate(-890,-800);radSign(890,800,t,-10);ctx.restore();}
 const D=[];
 const inHouse=(p)=>HOUSES.some(([hx,hy])=>Math.abs(p[0]-hx)<52&&p[1]<hy+6&&p[1]>hy-60);
 D.push([1060,()=>kevin(522,1060,1.25,0)]);
 D.push([POL[1],()=>{polizei(POL[0],POL[1],t);ctx.drawImage(IMG.occBBI,0,0);}]);
 HOUSES.forEach(([hx,hy],i)=>D.push([hy,()=>mfh(hx,hy,i)]));
 const leaving=(p)=>LEAVERS.some(l=>Math.abs(l[0]-p[0])<1&&Math.abs(l[1]-p[1])<1);
 for(const r of RES){if(inHouse(r.spot))continue;
  if(leaving(r.spot)){
   if(t<T.drei){D.push([r.spot[1],()=>person(r.spot[0],r.spot[1],r.shirt,1)]);}
   else if(t<T.drei+3.2){const u=clamp((t-T.drei)/3.0,0,1);const x=lerp(r.spot[0],-60,u*u),y=lerp(r.spot[1],1520,u*u);D.push([y,()=>{person(x,y,r.shirt,1);suitcase(x+11,y-12);}]);}
   continue;}
  if(r.name==='Goldfisch')D.push([r.spot[1],()=>fishbowl(r.spot[0],r.spot[1],1,t)]);
  else D.push([r.spot[1],()=>person(r.spot[0],r.spot[1],r.shirt,1)]);}
 for(const[n,sp,sh]of NEW5)D.push([sp[1],()=>person(sp[0],sp[1],sh,1)]);
 for(const b of NEW){if(t>=b.land+0.15){const s=backOut((t-b.land-0.15)/0.3);D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,s)]);}}
 const jp=justusPos(t);D.push([jp[1],()=>person(jp[0],jp[1],'#2f3a5c',1.05)]);
 D.sort((a,b)=>a[0]-b[0]);D.forEach(d=>d[1]());
 // Justus tag + bubble
 tag('Justus',jp[0],jp[1]-66,0.95,1);
 if(t>T.frage-0.1&&t<T.ich)bubble(jp[0]+40,jp[1]-150,pop(t,T.frage,0.35),'Was haben Sie gesehen? 🕵️',26);
 // leavers
 if(t>T.tschuess-0.1&&t<T.tschuess+2.2){const l=LEAVERS[1];ctx.save();ctx.globalAlpha=1-clamp((t-T.tschuess-1.6)/0.6,0,1);strokeText('Tschüss! 👋',l[0]+20,l[1]-90,34,'#fff',NAVY,8);ctx.restore();}
 // new resident balloons + tags
 for(const b of NEW){
  if(t>=b.t0&&t<b.land+2.6){const[sx,sy]=b.spot;let bx,by,al=1;
   if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*700;}
   else{const u=ease((t-b.land-1.2)/1.4);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.8)/0.8,0,1);}
   ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.7,t*2+sx);ctx.restore();}
  if(t>=b.land-0.2&&t<T.drei)tag(b.name,b.spot[0],b.spot[1]-62,0.85,clamp((t-b.land+0.2)/0.2,0,1));
  if(t>=b.land)floatText('+500 €',b.spot[0]+26,b.spot[1]-92,t,b.land,'#2FA84F',30);
 }
 // Finn tag
 const finn=NEW.find(b=>b.name==='Finn');
 if(t>T.finn-0.2&&t<T.vote0)tag('Finn',finn.spot[0],finn.spot[1]-62,1,clamp((t-T.finn+0.2)/0.2,0,1));
 // key over Justus at the end
 if(t>T.schl-0.1){const s=pop(t,T.schl,0.3);keyShape(jp[0]+30,jp[1]-120,0.17*s,-0.3+Math.sin(t*3)*0.15);
  for(const[hx,hy,tt]of[[HOUSES[0][0],HOUSES[0][1],T.tuer2],[HOUSES[1][0],HOUSES[1][1],T.anderen+0.3],[HOUSES[2][0],HOUSES[2][1],T.passt+0.3]]){const xs=pop(t,tt,0.25);if(xs>0){ctx.save();ctx.translate(hx+18,hy-40);ctx.scale(xs,xs);ctx.strokeStyle='#E5483F';ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-14,-14);ctx.lineTo(14,14);ctx.moveTo(14,-14);ctx.lineTo(-14,14);ctx.stroke();ctx.restore();}}
  if(t>T.passt)strokeText('?',jp[0]+10,jp[1]-170,46,YEL,NAVY,10);}
 ctx.restore();

 // radioactive flash
 if(t>T.radio-0.05&&t<T.radio+1.0){const u=(t-T.radio);ctx.fillStyle=`rgba(80,255,90,${0.3*Math.max(0,1-u)*(0.6+0.4*Math.sin(u*30))})`;ctx.fillRect(0,0,W,H);}

 // overlays
 keyHook(t);insurance6(t);wishes(t);cheque(t);vote(t);
 if(t>T.steuern-0.1&&t<T.einw92+1.2)yelPill('💰 Steuern bleiben hier 😏',540,470,pop(t,T.steuern,0.35)*(1-ease((t-T.einw92-0.8)/0.4)),38,'#fff');
 if(t>T.f7-0.1&&t<T.EC){const s=pop(t,T.f7,0.4);if(s>0){ctx.save();ctx.translate(540,520);ctx.rotate(-0.06);ctx.scale(s,s);strokeText('FOLGE 7 👀',0,0,120,YEL,NAVY,22);ctx.restore();}}
 const hideB=(t<T.hook1)||T.cardSpans.some(([a,b])=>t>a-0.1&&t<b)||(t>T.tl0-0.1&&t<T.tl1)||(t>T.bb0-0.1&&t<T.bbOut);
 if(!hideB&&t<T.EC)bottomPill(t,1);
 timeline6(t,T.tl0,T.tl1);
 // Bruno: Ich? ... Schlafanzug
 if(t>T.bb0-0.1&&t<T.bbOut+0.6){const inn=backOut((t-T.bb0+0.1)/0.4),out=ease((t-T.bbOut)/0.5);const bot=1920+(1-inn)*700+out*800;
  bigBruno(540,bot,1.0,t<T.geschl,0,t>=T.schlafanzug);
  if(t>T.geschl&&t<T.bbOut)for(let i=0;i<3;i++)zzz(700,1100,t,i*0.4);}
 if(t>T.danke-0.1&&t<T.danke+1.4){const inn=backOut((t-T.danke+0.1)/0.3),out=ease((t-T.danke-1.0)/0.4);bigBruno(830,1920+(1-inn)*600+out*700,0.72,true,Math.sin(t*60)*5*(1-out));}
 hud(t);captions(t);
 // end card
 const ec=T.EC;
 if(t>=ec){const u=ease((t-ec)/0.35);
  ctx.fillStyle=`rgba(16,32,20,${0.5*u})`;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=u;const s=backOut((t-ec)/0.4);
  ctx.save();ctx.translate(540,690);ctx.scale(s,s);
  strokeText('FOLGEN',0,-128,128,'#fff',NAVY,24);strokeText('HEISST',0,0,128,'#fff',NAVY,24);
  strokeText('EINZIEHEN',-50,128,128,YEL,NAVY,24);ctx.font=`104px ${EMO}`;ctx.textAlign='center';ctx.fillText('🏠',375,134);ctx.restore();
  const ps=pop(t,ec+0.25,0.35);
  if(ps>0){ctx.save();ctx.translate(540,975);ctx.scale(ps,ps);ctx.font=`900 40px ${F}, ${EMO}`;const txt='🗳️ Krankenhaus, Gym, Bank oder Hotel?';const tw=ctx.measureText(txt).width+70;
   rr(-tw/2,-46,tw,92,46);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,3);ctx.restore();}
  bigBruno(540,1920+(1-backOut((t-ec-0.1)/0.45))*700,1.0,false);
  ctx.restore();}
}

window.init=async function(words,res4){
 IMG.plateC=await load('plateC.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.4;
 RES=res4;buildPhrases();
 const w=wt;
 T.hook1=w('Justus',1)-0.1; T.d1=w('keiner'); T.d2=w('einzigen'); T.d3=w('Tür');
 T.frage=w('Herr'); T.ich=w('Ich?'); T.bb0=w('Ich?'); T.geschl=w('geschlafen.'); T.schlafanzug=w('Schlafanzug.'); T.bbOut=w('Versicherung?')-0.1;
 T.ins0=w('Versicherung?')-0.1; T.ins500=w('fünfhundert',1); T.abgelehnt=w('nichts.')-0.5; T.ins1=w('ABER')-0.05;
 T.aberDann=w('DANN.');
 NEW=NAMES6.map((n,i)=>{const l=w(n);return{name:n.replace(/[.!]/,''),land:l,t0:l-1.3,spot:SPOTS6[i],shirt:SHIRTS[i]};});
 T.drei=w('drei'); T.tschuess=w('Tschüss!'); T.steuern=w('Steuern'); T.einw92=w('zweiundneunzig.');
 T.wish0=w('Job.')-0.6; T.wMira=w('Mira',1)>0?WORDS.filter(x=>x.w==='Mira')[0].s:0; T.wLes=WORDS.filter(x=>x.w==='Lesander')[0].s; T.wRishi=WORDS.filter(x=>x.w==='Rishi')[0].s;
 T.wTheo=w('Theo'); T.wEiner=WORDS.filter(x=>x.w==='Einer')[0].s; T.wMagic=w('Magigcram…'); T.wish1=w('Finn',1)-0.1;
 T.finn=w('Finn',1); T.cheque0=w('fünfzigtausend')-0.3; T.kommentar=w('Kommentar.'); T.cheque1=w('Also:')-0.1;
 T.vote0=w('Also:'); T.v1=w('Krankenhaus,'); T.v2=w('Gym,'); T.v3=w('Bank'); T.v4=w('Luxushotel?'); T.likes=w('Likes'); T.vote1=w('vergesst')-0.05;
 T.tl0=w('vergesst')-0.1; T.noch16=w('sechzehn',1)>0?WORDS.filter(x=>x.w==='sechzehn')[0].s:0; T.radio=w('radioaktiv.'); T.tl1=w('radioaktiv.')+0.9;
 T.schl=w('Schlüssel?'); T.kWalk=w('Justus',2); T.tuer2=w('Tür.'); T.anderen=w('anderen.'); T.passt=w('passt?'); T.f7=w('Folge'); T.EC=w('sieben.')+0.9;
 T.kPulse=[w('Stadtkasse:'),...NEW.map(b=>b.land)]; T.ePulse=[T.tschuess,w('Einwohner:'),...NEW.map(b=>b.land)];
 T.cardSpans=[[T.ins0,T.ins1],[T.wish0,T.wish1]];
 buildCam();
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
function buildCam(){
 const w=wt,f=NEW.find(b=>b.name==='Finn').spot;
 CAM=[[0,520,1100,1.35,0.9],[T.hook1-0.4,520,1100,1.4],[T.hook1+0.4,JUSTUS0[0],JUSTUS0[1]-60,2.2],[T.bbOut,JUSTUS0[0],JUSTUS0[1]-60,2.25],
  [T.aberDann,480,1290,1.25],[w('Stadtkasse:'),480,1290,1.3],[T.drei,300,1300,1.5],[T.einw92+0.5,320,1300,1.5],[T.wish0+0.4,520,1250,1.3],
  [T.finn-0.2,520,1250,1.3],[T.finn+0.4,f[0],f[1]-60,2.0],[T.vote0,f[0],f[1]-60,2.05],[T.vote0+0.6,520,1120,1.15],[T.tl0,520,1120,1.15],
  [T.tl0+0.6,800,900,1.5],[T.radio,860,860,1.85],[T.schl-0.1,860,860,1.85],[T.schl+0.5,850,1210,1.9],[T.passt,900,1200,2.05],[END,920,1200,2.1]];
}
window.frame=frame;
