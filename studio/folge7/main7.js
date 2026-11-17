// ===================== FOLGE 7 =====================
const SPOTS7=__SPOTS7__;
const PLAZA=__PLAZA__;
const PLAY=__PLAY__;
let S5S=[],S6S=[];
const HOSP=[180,860];
const KYLE_DOOR=[1018,1206];
let RES6=[];
function kasse(t){let k=8500;for(const b of NEW)if(t>=b.land)k+=500*clamp((t-b.land)/0.25,0,1);k-=10000*ease((t-T.minusK)/0.6);return k;}
function einw(t){let n=92;for(const b of NEW)if(t>=b.land)n++;return n;}
function followers(t){let n=584;for(const b of NEW)if(t>=b.land)n++;return n;}
function bottomPill(t,a=1){
 if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillText(`${followers(t)} FOLLOWER · ☢️ AKW: 20.000 €`,x+w/2,y+h/2+2);ctx.restore();
}
function krankenhaus(x,y){
 const a=95,b=95,h=104;
 poly([[x,y+4],[x+a+8,y-a*.5+2],[x+a-b,y-a*.5-b*.5],[x-b-8,y-b*.5+2]],'rgba(20,50,20,.22)',null);
 const P=box(x,y,a,b,h,'#FFFFFF','#DDE3EE','#AEB8CC',3);
 for(let f=0;f<3;f++){const v0=0.12+f*0.27,v1=v0+0.15;
  for(const u of[[0.08,0.26],[0.36,0.54],[0.74,0.92]])quadL(P,h,u[0],u[1],v0,v1,'#9FD3F2',1.6);
  for(const u of[[0.1,0.3],[0.4,0.6],[0.7,0.9]])quadR(P,h,u[0],u[1],v0,v1,'#8CC4E6',1.6);}
 quadL(P,h,0.56,0.72,0,0.2,'#7BC4E8',2);
 skewTextL(P,h,0.5,0.93,'KRANKENHAUS',13,'#E5483F');
 // red cross on roof
 const c=[x+(a-b)/2,y-(a+b)/4-h];
 ctx.save();ctx.translate(c[0],c[1]);ctx.scale(1,0.55);ctx.rotate(Math.PI/4);
 ctx.fillStyle='#E5483F';ctx.strokeStyle=NAVY;ctx.lineWidth=2.5;ctx.beginPath();ctx.rect(-8,-26,16,52);ctx.rect(-26,-8,52,16);ctx.fill();
 ctx.restore();
}
function playground(t){
 const g=PLAY,cx=(g[0][0]+g[2][0])/2,cy=(g[0][1]+g[2][1])/2;
 // swing frame
 const sx=cx-30,sy=cy+4;ctx.strokeStyle=NAVY;ctx.lineWidth=2.4;
 ctx.fillStyle='#E5483F';
 for(const dx of[-22,22]){ctx.beginPath();ctx.moveTo(sx+dx-8,sy);ctx.lineTo(sx+dx,sy-46);ctx.lineTo(sx+dx+8,sy);ctx.stroke();}
 ctx.beginPath();ctx.moveTo(sx-22,sy-46);ctx.lineTo(sx+22,sy-46);ctx.lineWidth=4;ctx.strokeStyle='#E5483F';ctx.stroke();ctx.lineWidth=2;ctx.strokeStyle=NAVY;
 const sw=Math.sin(t*2.5)*6;for(const dx of[-10,10]){ctx.beginPath();ctx.moveTo(sx+dx,sy-46);ctx.lineTo(sx+dx+sw,sy-16);ctx.stroke();ctx.fillStyle='#FFD23D';ctx.fillRect(sx+dx+sw-5,sy-17,10,4);}
 // slide
 const lx=cx+28,ly=cy-4;ctx.fillStyle='#4A8BF0';ctx.strokeStyle=NAVY;ctx.lineWidth=2;
 ctx.beginPath();ctx.moveTo(lx,ly-40);ctx.lineTo(lx+10,ly-40);ctx.lineTo(lx+40,ly-2);ctx.lineTo(lx+30,ly);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.moveTo(lx-4,ly+2);ctx.lineTo(lx-4,ly-42);ctx.moveTo(lx+6,ly+4);ctx.lineTo(lx+6,ly-40);ctx.stroke();
 for(let k=0;k<4;k++){ctx.beginPath();ctx.moveTo(lx-4,ly-8-k*9);ctx.lineTo(lx+6,ly-6-k*9);ctx.stroke();}
 // sign
 ctx.save();ctx.translate(g[3][0]+10,g[3][1]-28);rr(-48,-13,96,24,8);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 13px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('SPIELPLATZ',0,0);ctx.restore();
 // kids
 person(sx+sw-0,sy-6,'#FF9F1C',0.65);person(lx+30,ly+8,'#8A6CFF',0.65);
}
function hook7(t){
 const out=1-ease((t-T.geheim+0.1)/0.4);if(out<=0)return;
 ctx.save();ctx.globalAlpha=out;ctx.fillStyle='rgba(10,18,30,.6)';ctx.fillRect(0,0,W,H);
 const n=Math.round(lerp(584,600,ease(clamp(t/1.2,0,1))));
 const s=1+(n===600?0.25*Math.max(0,1-(t-1.2)/0.3):0);
 ctx.save();ctx.translate(540,820);ctx.scale(s,s);strokeText(String(n),0,0,260,n===600?YEL:'#fff',NAVY,34);ctx.restore();
 strokeText('FOLLOWER',540,990,80,'#fff',NAVY,18);
 if(t>1.2)for(let i=0;i<24;i++){const a=i/24*6.283,u=clamp((t-1.2)/1.1,0,1),r=120+520*easeOut(u);ctx.globalAlpha=out*(1-u);ctx.fillStyle=['#FFD23D','#E5483F','#4A8BF0','#2FA84F'][i%4];ctx.fillRect(540+Math.cos(a)*r-8,820+Math.sin(a)*r*0.8-8,16,16);}
 ctx.restore();
}
function akwCard(t){
 card(t,T.akw0,T.akw1,(x,y,w,h)=>{
  ctx.font=`110px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('☢️',540,y+110);
  ctx.font=`900 64px ${F}`;ctx.fillStyle='#2e8b2e';ctx.fillText('ATOMKRAFTWERK',540,y+235);
  ctx.font=`900 36px ${F}`;ctx.fillStyle=NAVY;ctx.fillText('FREIGESCHALTET!',540,y+295);
  row(x,y+330,w,T.watch,t,'🐶','Wunsch von','Watchdogman',NAVY);
  stamp('20.000 €',540,y+h-40,t,T.zwanzig,-0.06,64,'#E5483F');
 },560,300);
}
function cheque7(t){
 const inn=easeOut((t-T.felix0)/0.4),out=1-ease((t-T.felix1)/0.35);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.translate(540,560);ctx.rotate(-0.05);ctx.scale(0.8+0.2*inn,0.8+0.2*inn);
 rr(-430,-170,860,340,22);ctx.fillStyle='#EAF6EC';ctx.fill();ctx.lineWidth=9;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.textAlign='left';ctx.textBaseline='middle';ctx.font=`900 36px ${F}`;ctx.fillStyle=NAVY;ctx.fillText('STEUER-VERSPRECHEN',-380,-108);
 ctx.font=`900 92px ${F}`;ctx.fillStyle='#2FA84F';ctx.fillText('5.000 €',-380,10);
 ctx.font=`900 44px ${F}`;ctx.fillStyle=NAVY;ctx.fillText('pro Tag',170,14);
 ctx.font=`italic 800 34px ${F}`;ctx.fillText('gez. Felix',150,115);
 ctx.restore();
 if(t>T.schriftlich)stamp('SCHRIFTLICH! ✍️',540,620,t,T.schriftlich,-0.12,56,'#2F5FD0');
}
function vote7(t){
 if(t<T.vote0-0.1||t>T.vote1)return;const out=1-ease((t-T.vote1+0.35)/0.35);
 ctx.save();ctx.globalAlpha=out;
 for(const[e,n,x,tt,col]of[['🔑','SCHLÜSSELLADEN',290,T.v1,'#fff'],['☢️','ATOMKRAFTWERK',790,T.v2,'#E9F7E4']]){const s=pop(t,tt,0.35);if(s<=0)continue;ctx.save();ctx.translate(x,560);ctx.scale(s,s);ctx.rotate((x<540?-1:1)*0.03);
  rr(-235,-150,470,300,34);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`110px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,0,-35);
  ctx.font=`900 40px ${F}`;ctx.fillStyle=NAVY;ctx.fillText(n,0,90);ctx.restore();}
 if(pop(t,T.v2,0.3)>0)strokeText('oder',540,560,54,'#fff',NAVY,14);
 if(t>T.komm-0.1)yelPill('💬 Ab in die Kommentare!',540,820,pop(t,T.komm,0.35),40);
 ctx.restore();
}
function kylePos(t){const k=RES.find(r=>r.name==='Kyle').spot2;if(t<T.kyle1)return k;const u=ease((t-T.kyle1)/1.6);return[lerp(k[0],KYLE_DOOR[0],u),lerp(k[1],KYLE_DOOR[1],u)];}

const HL=new Set(['600','Follower.','Geheimnis','ATOMKRAFTWERK!','Watchdogman,','gewünscht.','20.000','€.','Dome!','Dome…','recht.','600.','Kfz-Mechatroniker!','31','Einwohner!','15.500','€!','24.000.','123.','KRANKENHAUS!','10.000.','Gebaut!','Lesander,','Pflegefachkraft','14.000.','Atomkraftwerk','6.000.','Xavi','BBI.','Justus…','Mitarbeiter!','Felix','5.000','Tag.','Felix…','schriftlich.','Kyle','Kyle…','3,','39!','Wohnung.','Website!','Wichtigste.','Ekram','Schlüsselladen.','Moment…','Schlüsselladen?','Schlüssel','passt!','Schlüsselladen','Atomkraftwerk?','Kommentare!','8.','Dieb']);
const DISP={'Sechshundert':'600','sechshundert?':'600?','zwanzigtausend':'20.000','Euro.':'€.','Euro!':'€!','Euro':'€','Sechshundertste.':'600.','einunddreißig':'31','fünfzehntausendfünfhundert':'15.500','vierundzwanzigtausend.':'24.000.','hundertdreiundzwanzig.':'123.','zehntausend.':'10.000.','vierzehntausend.':'14.000.','sechstausend.':'6.000.','fünftausend':'5.000','drei,':'3,','neununddreißig!':'39!','acht.':'8.'};
function capY(t){
 for(const [a,b] of T.cardSpans)if(t>=a-0.1&&t<b)return 1450;
 if(t<T.geheim)return 1300;
 if(t>=T.EC)return -1;
 return 1330;
}

function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;for(const st of[T.atom,T.kLand]){const u=t-st;if(u>0&&u<0.4){shx+=Math.sin(u*90)*10*(1-u/0.4);shy+=Math.cos(u*70)*6*(1-u/0.4);}}
 ctx.save();ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 ctx.drawImage(IMG.plateD,0,0);
 feuerwehr(472,900);ctx.drawImage(IMG.occ,280,700);doener(170,1068);
 {const rs=t>T.atom-0.1&&t<T.atom+1.2?1+0.15*Math.sin((t-T.atom)*14):1;ctx.save();ctx.translate(890,800);ctx.scale(rs,rs);ctx.translate(-890,-800);radSign(890,800,t,-10);ctx.restore();
  if(t>T.atom-0.05&&t<T.atom+1.5){const u=t-T.atom;const g=ctx.createRadialGradient(890,760,10,890,760,220);g.addColorStop(0,`rgba(120,255,120,${0.6*(1-u/1.5)})`);g.addColorStop(1,'rgba(120,255,120,0)');ctx.fillStyle=g;ctx.fillRect(670,540,440,440);}}
 const D=[];
 const inHouse=(p)=>HOUSES.some(([hx,hy])=>Math.abs(p[0]-hx)<52&&p[1]<hy+6&&p[1]>hy-60);
 D.push([1060,()=>kevin(522,1060,1.25,0)]);
 D.push([POL[1],()=>{polizei(POL[0],POL[1],t);ctx.drawImage(IMG.occBBI,0,0);}]);
 HOUSES.forEach(([hx,hy],i)=>D.push([hy,()=>mfh(hx,hy,i)]));
 if(t>=T.kLand-0.55){const yoff=t<T.kLand?-560*(1-ease((t-T.kLand+0.55)/0.55)):0;D.push([HOSP[1],()=>{krankenhaus(HOSP[0],HOSP[1]+yoff);dust(HOSP[0],HOSP[1]-20,t,T.kLand,14,100);}]);}
 const leaving=(p)=>LEAVERS.some(l=>Math.abs(l[0]-p[0])<1&&Math.abs(l[1]-p[1])<1);
 for(const r of RES){if(!r.spot2)continue;
  if(r.name==='Kyle'){const kp=kylePos(t);D.push([kp[1],()=>person(kp[0],kp[1],r.shirt,1)]);continue;}
  const q=r.spot2;if(r.name==='Goldfisch')D.push([q[1],()=>fishbowl(q[0],q[1],1,t)]);else D.push([q[1],()=>person(q[0],q[1],r.shirt,1)]);}
 NEW5.forEach(([n,sp0,sh],i)=>{const sp=S5S[i];D.push([sp[1],()=>person(sp[0],sp[1],sh,1)]);});
 S6S.forEach((sp,i)=>{if(i===1&&t>=T.lesander)return;D.push([sp[1],()=>person(sp[0],sp[1],SHIRTS[i],1)]);});
 D.push([PLAY[0][1]-20,()=>playground(t)]);
 if(t>=T.lesander){const lp=[HOSP[0]+30,HOSP[1]+28];D.push([lp[1],()=>person(lp[0],lp[1],'#ffffff',pop(t,T.lesander,0.3))]);}
 for(const b of NEW){if(t>=b.land+0.15){const s=backOut((t-b.land-0.15)/0.3);D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,s)]);}}
 D.push([JUSTUS0[1],()=>person(JUSTUS0[0],JUSTUS0[1],'#2f3a5c',1.05)]);
 D.sort((a,b)=>a[0]-b[0]);D.forEach(d=>d[1]());
 // balloons
 for(const b of NEW){if(t>=b.t0&&t<b.land+2.6){const[sx,sy]=b.spot;let bx,by,al=1;
   if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*700;}
   else{const u=ease((t-b.land-1.2)/1.4);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.8)/0.8,0,1);}
   ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.66,t*2+sx);ctx.restore();}
  if(t>=b.land)floatText('+500 €',b.spot[0]+26,b.spot[1]-92,t,b.land,'#2FA84F',30);}
 const dome=NEW[0],xavi=NEW[1];
 if(t>dome.land-0.2&&t<T.insg+0.3){tag('Dome',dome.spot[0],dome.spot[1]-62,1,1);if(t>T.kfz-0.1){ctx.save();ctx.translate(dome.spot[0]+34,dome.spot[1]-30);ctx.scale(pop(t,T.kfz,0.3),pop(t,T.kfz,0.3));ctx.font=`30px ${EMO}`;ctx.textAlign='center';ctx.fillText('🔧',0,0);ctx.restore();}
  yelPill('Follower Nr. 600 🏅',dome.spot[0],dome.spot[1]-118,pop(t,T.dome2,0.35)*0.55,40);}
 if(t>T.watch-0.1&&t<T.dome1)tag('Watchdogman',890,690,1,clamp((t-T.watch+0.1)/0.2,0,1));
 if(t>=T.lesander&&t<T.uebrig+0.5){tag('Lesander',HOSP[0]+30,HOSP[1]-40,1,1);yelPill('🏥 Pflegefachkraft',HOSP[0]+30,HOSP[1]-92,pop(t,T.pflege,0.35)*0.55,40);}
 if(t>T.xavi-0.2&&t<T.felix0){tag('Xavi',xavi.spot[0],xavi.spot[1]-62,1,1);tag('Justus',JUSTUS0[0],JUSTUS0[1]-66,0.95,1);if(t>T.mitarb-0.1)yelPill('🕵️ 1. BBI-Mitarbeiter',xavi.spot[0],xavi.spot[1]-118,pop(t,T.mitarb,0.35)*0.55,40);}
 if(t>T.kyle0-0.2&&t<T.wichtig){const kp=kylePos(t);tag('Kyle',kp[0],kp[1]-62,1,1);if(t>T.kyle1)yelPill('🏢 Haus 3 · Wohnung 39',kp[0]-130,kp[1]+34,pop(t,T.kyle1+0.3,0.35)*0.5,40,'#fff');}
 const ek=S6S[2];
 if(t>T.ekram-0.2&&t<T.vote0){tag('Ekram',ek[0],ek[1]-62,1,1);bubble(ek[0]+70,ek[1]-140,pop(t,T.schlLaden,0.35),'🔑 Schlüsselladen',28);}
 floatText('−10.000 €',HOSP[0],HOSP[1]-170,t,T.minusK,'#E5483F',48);
 ctx.restore();
 // overlays
 hook7(t);akwCard(t);cheque7(t);vote7(t);
 if(t>T.uebrig-0.1&&t<T.xavi-0.2){const s=pop(t,T.uebrig,0.35);if(s>0){ctx.save();ctx.translate(540,470);ctx.scale(s,s);const w=760;rr(-w/2,-60,w,120,60);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
   const f=clamp(kasse(t)/20000,0,1);rr(-w/2+12,-48,(w-24)*f,96,48);ctx.fillStyle='#BDEBB0';ctx.fill();ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(`☢️ ${fmt(Math.round(kasse(t)/100)*100)} / 20.000 €`,0,3);ctx.restore();}}
 if(t>T.ekram2-0.1&&t<T.vote0){const s=pop(t,T.ekram2,0.4);ctx.save();ctx.globalAlpha=Math.min(1,s);const g=ctx.createRadialGradient(540,560,20,540,560,300);g.addColorStop(0,'rgba(255,220,120,.5)');g.addColorStop(1,'rgba(255,220,120,0)');ctx.fillStyle=g;ctx.fillRect(240,260,600,600);keyShape(560,560,0.9*s,-0.25+Math.sin(t*2)*0.08);ctx.restore();}
 if(t>T.f8-0.1&&t<T.EC){const s=pop(t,T.f8,0.4);if(s>0){ctx.save();ctx.translate(540,520);ctx.rotate(-0.06);ctx.scale(s,s);strokeText('FOLGE 8 👀',0,0,120,YEL,NAVY,22);ctx.restore();}}
 const hideB=(t<T.geheim)||T.cardSpans.some(([a,b])=>t>a-0.1&&t<b);
 if(!hideB&&t<T.EC)bottomPill(t,1);
 if(t>T.schriftlich-0.1&&t<T.schriftlich+1.4){const inn=backOut((t-T.schriftlich+0.1)/0.3),out=ease((t-T.schriftlich-1.0)/0.4);bigBruno(830,1920+(1-inn)*600+out*700,0.72,false);}
 hud(t);captions(t);
 const ec=T.EC;
 if(t>=ec){const u=ease((t-ec)/0.35);
  ctx.fillStyle=`rgba(16,32,20,${0.5*u})`;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=u;const s=backOut((t-ec)/0.4);
  ctx.save();ctx.translate(540,690);ctx.scale(s,s);
  strokeText('FOLGEN',0,-128,128,'#fff',NAVY,24);strokeText('HEISST',0,0,128,'#fff',NAVY,24);
  strokeText('EINZIEHEN',-50,128,128,YEL,NAVY,24);ctx.font=`104px ${EMO}`;ctx.textAlign='center';ctx.fillText('🏠',375,134);ctx.restore();
  const ps=pop(t,ec+0.25,0.35);
  if(ps>0){ctx.save();ctx.translate(540,975);ctx.scale(ps,ps);ctx.font=`900 40px ${F}, ${EMO}`;const txt='🗳️ Schlüsselladen oder Atomkraftwerk?';const tw=ctx.measureText(txt).width+70;
   rr(-tw/2,-46,tw,92,46);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,0,3);ctx.restore();}
  bigBruno(540,1920+(1-backOut((t-ec-0.1)/0.45))*700,1.0,false);
  ctx.restore();}
}

window.init=async function(words,res4){
 IMG.plateC=await load('plateC.jpg');IMG.plateD=await load('plateD.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.4;RES=res4;buildPhrases();
 const w=wt;
 T.geheim=w('Geheimnis')-0.2; T.atom=w('ATOMKRAFTWERK!'); T.akw0=w('ATOMKRAFTWERK!')+0.1; T.watch=w('Watchdogman,'); T.zwanzig=w('zwanzigtausend'); T.akw1=w('Und',1)-0.1;
 T.dome1=w('Dome!'); T.dome2=w('Sechshundertste.'); T.kfz=w('Kfz-Mechatroniker!'); T.insg=w('Insgesamt:');
 // Dome zuerst, dann 30 weitere zwischen 'einunddreißig' und 'Stadtkasse:'
 const sp=SPOTS7.slice();const ds=sp.splice(0,1)[0];const xs=sp.splice(0,1)[0];
 const a0=w('einunddreißig'),a1=w('Stadtkasse:')-0.2;
 NEW=[{name:'Dome',spot:ds,land:T.dome1,t0:T.dome1-1.3,shirt:'#3a3f55'},{name:'Xavi',spot:xs,land:a0,t0:a0-1.3,shirt:'#2F5FD0'}];
 sp.forEach((s,i)=>{const l=lerp(a0+0.1,a1,i/(sp.length-1));NEW.push({name:'',spot:s,land:l,t0:l-1.2,shirt:SHIRTS[(i*7)%SHIRTS.length]});});
 {const inH=(p)=>HOUSES.some(([hx,hy])=>Math.abs(p[0]-hx)<52&&p[1]<hy+6&&p[1]>hy-60);const lv=(p)=>LEAVERS.some(l=>Math.abs(l[0]-p[0])<1&&Math.abs(l[1]-p[1])<1);
  const pool=PLAZA.slice();const take=()=>pool.shift();
  NEW.forEach(b=>{b.spot=take();});
  RES.forEach(r=>{r.spot2=(inH(r.spot)||lv(r.spot)||r.name==='Kyle')?null:take();if(r.name==='Kyle')r.spot2=take();});
  S5S=NEW5.map(()=>take());S6S=SPOTS6.map(()=>take());}
 T.kLand=w('KRANKENHAUS!')+0.15; T.minusK=w('zehntausend.'); T.lesander=w('Lesander,')-0.1; T.pflege=w('Pflegefachkraft'); T.uebrig=w('Übrig:');
 T.xavi=w('Xavi'); T.mitarb=w('Mitarbeiter!')-0.3; T.felix0=w('Felix')-0.2; T.schriftlich=w('schriftlich.')-0.3; T.felix1=w('Und',5)>0?w('Kyle')-0.6:w('Kyle')-0.6;
 T.kyle0=w('Kyle'); T.kyle1=w('Kyle…'); T.wichtig=w('Wichtigste.')-0.5; T.ekram=w('Ekram'); T.schlLaden=w('Schlüsselladen.'); T.ekram2=w('Schlüsselladen?');
 T.vote0=w('Also:'); T.v1=WORDS.filter(x=>x.w==='Schlüsselladen')[0].s; T.v2=w('Atomkraftwerk?'); T.komm=w('Kommentare!'); T.vote1=w('Folge')-0.05;
 T.f8=w('Folge'); T.EC=w('näher.')+0.9;
 T.kPulse=[w('Stadtkasse:'),T.minusK,T.uebrig,...NEW.map(b=>b.land)]; T.ePulse=[w('Einwohner:'),...NEW.map(b=>b.land)];
 T.cardSpans=[[T.akw0,T.akw1]];
 const f=NEW[0].spot;
 CAM=[[0,700,1000,1.25,0.9],[T.geheim-0.3,700,1000,1.25],[T.geheim+0.5,860,860,1.9],[T.akw0,860,860,1.95],[T.dome1-0.6,f[0],f[1]-60,2.0],[T.insg,f[0],f[1]-60,2.05],
  [T.insg+0.6,520,1320,1.2],[w('Einwohner:'),520,1320,1.25],[w('KRANKENHAUS!')-0.2,300,900,1.6],[T.uebrig,300,900,1.7],[T.uebrig+0.5,520,1150,1.2],
  [T.xavi-0.2,520,1150,1.2],[T.xavi+0.4,(NEW[1].spot[0]+JUSTUS0[0])/2,(NEW[1].spot[1]+JUSTUS0[1])/2-60,1.45],[T.felix0,600,1250,1.4],
  [T.kyle0-0.2,600,1250,1.4],[T.kyle0+0.4,900,1180,1.7],[T.wichtig,920,1170,1.75],[T.ekram-0.1,ek()[0],ek()[1]-80,2.0],[T.vote0,ek()[0],ek()[1]-80,2.05],
  [T.vote0+0.6,520,1120,1.15],[END,520,1120,1.2]];
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
function ek(){return S6S[2];}
window.frame=frame;
