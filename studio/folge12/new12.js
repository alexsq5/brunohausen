// ===================== FOLGE 12 – STAFFEL-1-FINALE =====================
// Stand Folge 11: 707 Follower, 166 Einwohner, 15.500 € → +6 Follower (+3.000 €) = 713 / 18.500 €, Jamie zieht ein → 167
let JAMIE=null,COINS12=[],RIVER=null;
function kasse(t){let k=15500;for(const c of COINS12)if(t>=c.t1)k+=500*clamp((t-c.t1)/0.15,0,1);return k;}
function einw(t){return 166+(JAMIE&&t>=JAMIE.land?1:0);}
function followers(t){let n=707;for(const c of COINS12)if(t>=c.t1)n++;return n;}
function bottomPill(t,a=1){if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 const txt=t<T.a0?`${followers(t)} FOLLOWER · ⛓️ GEFÄNGNIS AB 750`:`☢️ AKW-ALARM!`;
 ctx.fillText(txt,x+w/2,y+h/2+2);ctx.restore();}
function bgGrad(c0,c1){const g=ctx.createRadialGradient(540,900,100,540,900,1200);g.addColorStop(0,c0);g.addColorStop(1,c1);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);}
function intro(t){const a=1-ease((t-T.v0+0.1)/0.3);if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 bgGrad('#3a2a70','#0c1130');stars(t,1);
 // Scheinwerfer
 for(let i=0;i<2;i++){ctx.save();ctx.translate(i?980:100,1920);ctx.rotate((i?-1:1)*(0.45+Math.sin(t*2+i)*0.18));const g=ctx.createLinearGradient(0,0,0,-1700);g.addColorStop(0,'rgba(255,240,170,.45)');g.addColorStop(1,'rgba(255,240,170,0)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(-40,0);ctx.lineTo(40,0);ctx.lineTo(260,-1700);ctx.lineTo(-260,-1700);ctx.closePath();ctx.fill();ctx.restore();}
 const s0=pop(t,0.05,0.4);ctx.save();ctx.translate(540,330);ctx.scale(s0,s0);ctx.rotate(-0.04);strokeText('HEUTE WIRD’S ERNST…',0,0,74,'#fff',NAVY,18);ctx.restore();
 if(t>T.finale-0.1){const s=pop(t,T.finale,0.45);ctx.save();ctx.translate(540,560);ctx.scale(s,s);ctx.rotate(-0.05);strokeText('DAS GROSSE',0,-70,96,YEL,NAVY,24);strokeText('FINALE! 🎬',0,60,130,YEL,NAVY,28);ctx.restore();}
 const wz=1+0.15*ease(t/3);ctx.save();ctx.translate(540,1920);ctx.scale(wz,wz);ctx.translate(-540,-1920);bigBruno(540,1920+(1-backOut((t-0.15)/0.45))*700,0.85,false,0,false);ctx.restore();
 ctx.restore();}
function reveal(t){const a=Math.min(easeOut((t-T.v0)/0.3),1-ease((t-T.r1)/0.3));if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;bgGrad('#3b2a5a','#140c26');
 const hs=pop(t,T.v0+0.05,0.4);ctx.save();ctx.translate(540,230);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('🔍 WER WAR DER DIEB?',0,0,72,YEL,NAVY,20);ctx.restore();
 const ph2=t>T.sie-0.1; // ab "Sie hat…": nur noch Elster groß
 if(!ph2){
  [['1','🦊','FUCHS',T.s1,T.x1],['2','🦝','WASCHBÄR',T.s2,T.x2],['3','🐦‍⬛','ELSTER',T.s3,1e9]].forEach(([nr,e,n,tt,tx],i)=>{const s=pop(t,tt,0.35);if(s<=0)return;const y=520+i*260;
   const win=i===2&&t>T.elster;const sc=win?1+0.08*Math.sin(t*8):1;
   ctx.save();ctx.translate(540,y);ctx.scale(s*sc,s*sc);ctx.rotate((i-1)*0.02);rr(-440,-110,880,220,36);ctx.fillStyle=win?'#FFF4D6':'#fff';ctx.fill();ctx.lineWidth=win?12:8;ctx.strokeStyle=win?'#2FA84F':NAVY;ctx.stroke();
   ctx.beginPath();ctx.arc(-370,-74,40,0,7);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=NAVY;ctx.stroke();ctx.font=`900 50px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nr,-370,-70);
   ctx.font=`120px ${EMO}`;ctx.fillText(e,-250,10);ctx.font=`900 72px ${F}`;ctx.textAlign='left';ctx.fillText(n,-140,10);
   if(t>tx){const u=pop(t,tx,0.3);ctx.globalAlpha=a*0.55;ctx.fillStyle='#000';rr(-440,-110,880,220,36);ctx.fill();ctx.globalAlpha=a;ctx.save();ctx.translate(330,0);ctx.scale(u,u);ctx.font=`150px ${EMO}`;ctx.textAlign='center';ctx.fillText('❌',0,10);ctx.restore();}
   if(win){ctx.save();ctx.translate(330,0);ctx.scale(pop(t,T.elster,0.35),pop(t,T.elster,0.35));ctx.font=`150px ${EMO}`;ctx.textAlign='center';ctx.fillText('✅',0,10);ctx.restore();}
   ctx.restore();});
  if(t>T.elster-0.05)stamp('DIE ELSTER WAR’S!',540,1360,t,T.elster,-0.06,92,'#E5483F');
 } else {
  // Elster mit glänzendem Schlüssel fliegt zur AKW-Tür
  const u=clamp((t-T.sie)/2.6,0,1);
  ctx.save();ctx.translate(780,700);const ds=pop(t,T.sie,0.4);ctx.scale(ds*0.75,ds*0.75);
  rr(-170,-260,340,500,16);ctx.fillStyle='#4a5266';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  rr(-140,-230,280,440,10);ctx.fillStyle='#8B93A7';ctx.fill();ctx.lineWidth=6;ctx.stroke();ctx.font=`90px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('☢️',0,-90);
  ctx.beginPath();ctx.arc(100,10,14,0,7);ctx.fillStyle='#F2C230';ctx.fill();ctx.stroke();ctx.restore();
  const bx=lerp(260,690,ease(u)),by=lerp(900,720,ease(u))-Math.sin(u*Math.PI)*220;
  ctx.save();ctx.translate(bx,by);ctx.rotate(Math.sin(t*10)*0.08);ctx.font=`190px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🐦‍⬛',0,0);
  ctx.font=`80px ${EMO}`;ctx.fillText('🔑',90,40);for(let i=0;i<5;i++){const k=(t*2+i/5)%1;ctx.globalAlpha=a*(1-k);ctx.font=`${30+k*20}px ${EMO}`;ctx.fillText('✨',90+Math.cos(i*1.3)*60*k,40+Math.sin(i*1.3)*60*k);}ctx.restore();
  if(t>T.glanz-0.1)yelPill('🔑 glänzender Schlüssel geklaut!',540,1150,pop(t,T.glanz,0.35),48,'#fff');
  if(t>T.tuer-0.1)yelPill('➡️ an die AKW-Tür gebracht!',540,1270,pop(t,T.tuer,0.35),48);
  if(t>T.rich-0.1){ctx.globalAlpha=a*easeOut((t-T.rich)/0.3);bgGrad('#2a3470','#0c1130');stars(t,1);
   const s=pop(t,T.rich,0.4);ctx.save();ctx.translate(540,330);ctx.scale(s,s);ctx.rotate(-0.04);strokeText('🏆 RICHTIG GETIPPT',0,0,80,YEL,NAVY,22);ctx.restore();
   if(t>T.nik-0.1){const s2=pop(t,T.nik,0.45);ctx.save();ctx.translate(540,560);ctx.scale(s2,s2);rr(-400,-90,800,180,90);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=10;ctx.strokeStyle=NAVY;ctx.stroke();strokeText('@nikg3d',0,6,96,NAVY,'#fff',0);ctx.restore();
    for(let i=0;i<14;i++){const k=((t-T.nik)*0.8+i/14)%1;ctx.save();ctx.globalAlpha=a*(1-k);ctx.font=`44px ${EMO}`;ctx.textAlign='center';ctx.fillText(['🎉','⭐','✨'][i%3],540+Math.cos(i*0.9)*(200+420*k),560+Math.sin(i*0.9)*(120+300*k));ctx.restore();}}
   if(t>T.resp-0.1)stamp('RESPEKT, DETEKTIV! 🕵️',540,800,t,T.resp,-0.06,70,'#2FA84F');
   if(t>T.ab-0.1){const s3=pop(t,T.ab,0.4);ctx.save();ctx.translate(540,1080);ctx.scale(s3,s3);rr(-260,-150,520,300,26);ctx.fillStyle='#8A93A8';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
    ctx.font=`150px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🐦‍⬛',0,10);for(let i=0;i<5;i++){ctx.fillStyle='#2b2f3d';ctx.fillRect(-215+i*100,-130,20,260);}ctx.restore();
    yelPill('⛓️ AB INS GEFÄNGNIS!',540,1290,pop(t,T.ab+0.2,0.35),52,'#fff');}
   if(t>T.sobald-0.1)stamp('…sobald wir eins haben 😅',540,1420,t,T.sobald,-0.05,56,'#E5483F');}
 }
 ctx.restore();}
function moneyCard(t){const inn=easeOut((t-T.m0)/0.35),out=1-ease((t-T.m1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;yelPill(`+${COINS12.filter(c=>t>=c.t1).length} FOLLOWER`,540,420,pop(t,T.m0,0.35),56,'#fff');
 if(t>T.plus-0.1)yelPill('+3.000 € 💰',540,540,pop(t,T.plus,0.35),56);ctx.restore();}
function coins(t){for(const c of COINS12){if(t<c.t0||t>c.t1+0.05)continue;const u=easeOut((t-c.t0)/(c.t1-c.t0));
 const x=lerp(c.x,170,u),y=lerp(c.y,200,u)-Math.sin(u*Math.PI)*160;ctx.save();ctx.translate(x,y);ctx.scale(1-0.4*u,1-0.4*u);ctx.font=`54px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🪙',0,0);ctx.restore();}}
function alarm(t){if(t<T.piep||t>=T.EC)return;const f=(0.5+0.5*Math.sin((t-T.piep)*12))*(t>T.fluss?0.4:1);ctx.save();ctx.globalAlpha=0.22*f;ctx.fillStyle='#ff2020';ctx.fillRect(0,0,W,H);ctx.restore();
 ctx.save();ctx.globalAlpha=0.9;const g=ctx.createRadialGradient(540,960,500,540,960,1150);g.addColorStop(0,'rgba(255,0,0,0)');g.addColorStop(1,`rgba(255,30,30,${0.55*f})`);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);ctx.restore();}
function runners(t){if(t<T.raus-0.1||t>=T.EC)return;const em=['🏃','🏃‍♀️','🐕','🏃‍♂️','🧑‍🦽','🏃','🐈','🏃‍♀️'];
 for(let i=0;i<16;i++){const k=((t-T.raus)*0.55+i/16)%1;const x=-100+k*1300,y=1300+(i%4)*70;ctx.save();ctx.translate(x,y-Math.abs(Math.sin(t*12+i))*14);ctx.scale(-1,1);ctx.font=`80px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(em[i%em.length],0,0);ctx.restore();}}
function ending(t){if(t<T.EC)return;const u=ease((t-T.EC)/0.4);
 ctx.save();ctx.globalAlpha=u;ctx.drawImage(IMG.plateD,0,0);ctx.fillStyle='rgba(10,30,15,.62)';ctx.fillRect(0,0,W,H);
 ctx.save();ctx.globalAlpha=u*(0.5+0.25*Math.sin(t*4));ctx.drawImage(RIVER,0,0);ctx.restore();
 const hs=pop(t,T.EC+0.1,0.4);ctx.save();ctx.translate(540,230);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('NUR DAS NÖTIGSTE! 🧳',0,0,74,YEL,NAVY,20);ctx.restore();
 // Koffer + Sachen fliegen rein
 const kx=760,ky=1500;const ks=pop(t,T.koffer,0.4);
 const items=[['🎩',T.hut,'HUT'],['🏅',T.kette,'KETTE'],['💰',T.kasse2,'STADTKASSE']];
 const wz=1+0.12*ease((t-T.EC)/3);ctx.save();ctx.translate(540,1920);ctx.scale(wz,wz);ctx.translate(-540,-1920);bigBruno(380,1920+(1-backOut((t-T.EC-0.1)/0.45))*700,0.8,false,0,false);ctx.restore();
 if(ks>0){ctx.save();ctx.translate(kx,ky);ctx.scale(ks,ks);ctx.rotate(0.05*Math.sin(t*3));ctx.font=`300px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🧳',0,0);ctx.restore();}
 items.forEach(([e,tt,n],i)=>{if(t<tt)return;const v=clamp((t-tt)/0.6,0,1);const x=lerp(220+i*300,kx,ease(v)),y=lerp(520,ky-40,ease(v))-Math.sin(v*Math.PI)*200;
  ctx.save();ctx.globalAlpha=u*(v<1?1:Math.max(0,1-(t-tt-0.6)/0.2));ctx.translate(x,y);ctx.scale(1-0.5*v,1-0.5*v);ctx.font=`150px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,0,0);ctx.restore();
  if(v<1)yelPill(n,540,420,pop(t,tt,0.3),56,'#fff');});
 if(t>T.nat-0.1&&t<T.tsch-0.2)bubble(760,1100,pop(t,T.nat,0.35),'😏 …natürlich.',36);
 if(t>T.tsch-0.1){const s=pop(t,T.tsch,0.4);ctx.save();ctx.translate(540,560);ctx.scale(s,s);ctx.rotate(-0.04);strokeText('TSCHÜSS,',0,-60,100,'#fff',NAVY,24);strokeText('BRUNOHAUSEN… 👋',0,60,88,'#fff',NAVY,22);ctx.restore();}
 if(t>T.wo-0.1){ctx.fillStyle=`rgba(0,0,0,${0.5*ease((t-T.wo)/0.4)})`;ctx.fillRect(0,0,W,H);const s=pop(t,T.wo,0.45);ctx.save();ctx.translate(540,860);ctx.scale(s,s);ctx.rotate(-0.04);strokeText('WO GEHEN WIR',0,-70,104,YEL,NAVY,26);strokeText('JETZT HIN? 🤔',0,70,104,YEL,NAVY,26);ctx.restore();}
 ctx.restore();
 const bl=ease((t-(END-0.9))/0.8);if(bl>0){ctx.fillStyle=`rgba(0,0,0,${bl})`;ctx.fillRect(0,0,W,H);}}

const HL=new Set(['ernst.','Finale!','Dieb?','Fuchs?','Waschbär?','Elster!','glänzenden','Schlüssel','AKW-Tür','nikg3d!','Detektiv!','Gefängnis','Elster…','äh…','6','Follower!','3.000','€!','18.500.','Jamie','167','Einwohner!','dann…','das?','piept!','offen…','undicht!','Fluss…','grün!','raus!','Schnell!','Nötigste','Koffer…','Hut…','Kette…','Stadtkasse…','natürlich.','Tschüss,','Brunohausen…','hin?']);
const DISP={'Sechs':'6','dreitausend':'3.000','Euro!':'€!','achtzehntausendfünfhundert.':'18.500.','Hundertsiebenundsechzig':'167','nikg3d!':'@nikg3d!'};
function capY(t){if(t>=T.EC)return 1700;if(t<T.v0)return 1500;if(t<T.r1)return 1700;return 1330;}
function RIVERHOOK(t){
 if(t>T.fluss-0.1){const g=clamp((t-T.fluss)/0.9,0,1);ctx.save();ctx.globalAlpha=g*(0.65+0.3*Math.sin(t*5));ctx.drawImage(RIVER,0,0);ctx.restore();
  ctx.save();ctx.globalAlpha=g;for(let i=0;i<18;i++){const k=((t*0.4+i/18)%1);const x=k*1080,y=130+k*640+Math.sin(i)*20;ctx.beginPath();ctx.arc(x,y,4+3*Math.sin(t*6+i),0,7);ctx.fillStyle='rgba(230,255,200,.9)';ctx.fill();}ctx.restore();}
}
function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;for(const st of[T.undicht,T.raus]){const u=t-st;if(u>0&&u<0.5){shx+=Math.sin(u*90)*14*(1-u/0.5);shy+=Math.cos(u*70)*9*(1-u/0.5);}}
 if(t>T.piep&&t<T.EC){shx+=Math.sin(t*40)*2;}
 ctx.save();ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 drawTown(t);
 // grünes Leuchten
 if(t>T.undicht-0.1){const g=clamp((t-T.undicht)/0.8,0,1);const p=0.7+0.3*Math.sin(t*5);ctx.save();ctx.globalAlpha=g*0.55*p;const gr=ctx.createRadialGradient(AKWP[0]+20,AKWP[1]-60,20,AKWP[0]+20,AKWP[1]-60,260);gr.addColorStop(0,'rgba(140,255,90,.9)');gr.addColorStop(1,'rgba(140,255,90,0)');ctx.fillStyle=gr;ctx.fillRect(AKWP[0]-300,AKWP[1]-360,640,600);ctx.restore();
  for(let i=0;i<10;i++){const k=((t-T.undicht)*0.5+i/10)%1;ctx.save();ctx.globalAlpha=g*(1-k)*0.8;ctx.beginPath();ctx.arc(AKWP[0]+Math.sin(i*2.1)*60,AKWP[1]-120-k*220,14+k*30,0,7);ctx.fillStyle='#8CFF5A';ctx.fill();ctx.restore();}}
 if(JAMIE){const b=JAMIE,[sx,sy]=b.spot;
  if(t>=b.t0&&t<b.land+1.8){let bx,by,al=1;if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*600;}else{const u=ease((t-b.land-0.8)/1.0);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.1)/0.7,0,1);}
   ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.6,t*2+sx);ctx.restore();}
  if(t>=b.land+0.1){const s=backOut((t-b.land-0.1)/0.25);person(sx,sy,b.shirt,s);}
  if(t>b.land&&t<T.a0)tag('@jamiecondlin',sx,sy-62,0.85,pop(t,b.land,0.25));}
 if(t>T.piep-0.1&&t<T.undicht-0.2)bubble(AKWP[0]-40,AKWP[1]-300,pop(t,T.piep,0.35)*0.85,'🚨 PIEP! PIEP!',28);
 ctx.restore();
 alarm(t);
 moneyCard(t);coins(t);
 if(t>T.kasse1-0.1&&t<T.jam-0.3)stamp('18.500 € ✅',540,680,t,T.kasse1,-0.08,90,'#2FA84F');
 if(t>T.jam-0.1&&t<T.a0-0.2)yelPill('🎈 JAMIE ZIEHT EIN!',540,420,pop(t,T.jam,0.35),58,'#fff');
 if(t>T.a0-0.1&&t<T.piep-0.1)stamp('ABER DANN… 😳',540,450,t,T.a0,-0.06,84,'#E5483F');
 if(t>T.piep-0.1&&t<T.offen-0.2)yelPill('🚨 DAS AKW PIEPT!',540,420,pop(t,T.piep,0.35),58,'#fff');
 if(t>T.offen-0.1&&t<T.undicht-0.2)yelPill('🚪 Tür die ganze Nacht offen…',540,420,pop(t,T.offen,0.35),48);
 if(t>T.undicht-0.1&&t<T.fluss-0.2)stamp('☢️ AKW UNDICHT!',540,460,t,T.undicht,-0.07,90,'#E5483F');
 if(t>T.gruen-0.1&&t<T.raus-0.2)stamp('DER FLUSS LEUCHTET GRÜN! 💚',540,460,t,T.gruen,-0.06,62,'#2FA84F');
 runners(t);
 if(t>T.raus-0.1&&t<T.EC)stamp('🚨 ALLE RAUS!',540,470,t,T.raus,-0.07,110,'#E5483F');
 if(t>T.schnell-0.1&&t<T.EC)yelPill('SCHNELL! 🏃',540,640,pop(t,T.schnell,0.35),60,'#fff');
 const cover=t<T.r1||t>=T.EC;
 if(!cover)bottomPill(t,1);
 if(t>=T.r1-0.3&&t<T.EC)hud(t);
 intro(t);reveal(t);
 ending(t);
 captions(t);
}
window.init=async function(words,res4){
 IMG.plateC=await load('plateC.jpg');IMG.plateD=await load('plateD11.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');RIVER=await load('river_glow.png');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.4;RES=res4;buildPhrases();
 const w=wt;
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
 NEW9=F9_NEW.map((n,i)=>({name:n,spot:take(),land:-1,shirt:SHIRTS[(i*3+5)%SHIRTS.length]}));
 NEW10=F10_NEW.map((n,i)=>({name:n,spot:take(),land:-1,shirt:SHIRTS[(i*4+1)%SHIRTS.length]}));
 LEOB=[420,1218];const sp1=[CLUBP[0]+110,CLUBP[1]+20],sp2=take();
 NEW11=F11_NEW.map(([n,tg,sh],i)=>({name:n,tag:tg,spot:[sp1,sp2,[LEOB[0]+4,LEOB[1]+4]][i],land:-1,t0:-2,shirt:sh}));
 T.clubDrop=-3;T.clubLand=-2;T.party=-99;T.trak=-5;T.kuehe=-5;T.seb=-5;T.muh=-5;
 // --- Folge 12 ---
 T.finale=w('Finale!')-0.2;T.v0=w('Erst')-0.15;
 T.s1=w('Fuchs?')-0.2;T.x1=w('Waschbär?')-0.3;T.s2=w('Waschbär?')-0.2;T.x2=w('Oder…');T.s3=w('Elster!')-0.25;T.elster=w('Elster!');
 T.sie=w('Sie')-0.1;T.glanz=w('glänzenden');T.tuer=w('AKW-Tür');T.rich=w('Richtig')-0.1;T.nik=w('nikg3d!')-0.05;T.resp=w('Respekt,');T.ab=w('Ab')-0.05;T.sobald=w('sobald');
 T.r1=w('Sechs')-0.15;T.m0=w('Sechs');T.plus=w('Plus');T.kasse1=w('achtzehntausendfünfhundert.');T.m1=w('Und')-0.1;
 const c0=w('Sechs')+0.1,c1=w('Euro!')+0.2;COINS12=[];for(let i=0;i<6;i++){const t1=lerp(c0+0.3,c1,i/5);COINS12.push({t0:t1-0.5,t1,x:180+i*144,y:1500});}
 T.jam=w('Jamie');const js=take();JAMIE={spot:js,land:w('Jamie')+0.05,t0:w('Jamie')-0.65,shirt:'#F28C28'};
 T.a0=w('Aber',1)-0.1;T.piep=w('piept!')-0.15;T.offen=w('Tür')-0.1;T.undicht=w('undicht!')-0.05;T.fluss=w('Fluss…')-0.1;T.gruen=w('grün!')-0.1;T.raus=w('raus!')-0.1;T.schnell=w('Schnell!')-0.05;
 T.EC=w('Nehmt')-0.15;T.koffer=w('Koffer…')-0.1;T.hut=w('Hut…')-0.05;T.kette=w('Kette…')-0.05;T.kasse2=w('Stadtkasse…')-0.05;T.nat=w('natürlich.');T.tsch=w('Tschüss,')-0.1;T.wo=w('Aber',2)-0.1;
 T.kPulse=[T.kasse1,...COINS12.map(c=>c.t1)];T.ePulse=[JAMIE.land];T.cardSpans=[];
 CAM=[[0,540,1000,1.0],[T.r1-0.1,540,1000,1.0],[T.r1+0.2,560,1000,1.1],[T.m1-0.2,560,1000,1.1],[T.jam-0.3,js[0],js[1]-40,1.6],[T.a0-0.3,js[0],js[1]-40,1.6],
  [T.a0+0.4,AKWP[0],AKWP[1]-40,1.25],[T.piep,AKWP[0],AKWP[1]-60,1.7],[T.undicht+0.3,AKWP[0],AKWP[1]-60,1.8],[T.fluss,560,430,1.35],[T.raus-0.2,600,480,1.3],[T.raus+0.5,540,960,1.0],[END,540,960,1.0]];
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
window.frame=frame;
