// ===================== FOLGE 10 =====================
// Stand vorher (Folge 9): 694 Follower, 157 Einwohner, 29.000 €
// Folge 10: 704 Follower (+10 = +5.000), Casino −15.000, Bauernhof −5.000 → 14.000 €, 6 neue → 163
const F10_NEW=['Einar','Silant','Tilo','Basti','Johannes','Marius'];
const CASP=[840,878], FARMP=[300,640];
let NEW10=[],COINS10=[],FELIX10=null,KILIAN10=null,MARCEL10=null,TIM10=null,GASTEL10=null,TIMO10=null,LIONELL10=null,SEB10=null;
function kasse(t){let k=29000;for(const c of COINS10)if(t>=c.t1)k+=500*clamp((t-c.t1)/0.15,0,1);
 k-=15000*ease((t-T.mCas)/0.6);k-=5000*ease((t-T.mFarm)/0.6);return k;}
function einw(t){let n=157;for(const b of NEW10)if(t>=b.land)n++;return n;}
function followers(t){let n=694;for(const c of COINS10)if(t>=c.t1)n++;return n;}
function bottomPill(t,a=1){if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 const txt=t<T.casBuilt?`${followers(t)} FOLLOWER · 🎰 CASINO: 15.000 €`:t<T.farmBuilt?`${followers(t)} FOLLOWER · 🎰 CASINO STEHT ✅`:`${followers(t)} FOLLOWER · 🐄 BAUERNHOF STEHT ✅`;
 ctx.fillText(txt,x+w/2,y+h/2+2);ctx.restore();}
// ---------- Casino ----------
function casino(x,y,t){
 ctx.fillStyle='rgba(20,40,20,.28)';ctx.beginPath();ctx.ellipse(x-10,y-50,165,66,-0.45,0,7);ctx.fill();
 const a=125,b=135,h=118;
 // roter Teppich
 const Lf=[x-b*0.5,y-b*0.25];poly([[Lf[0]-14,Lf[1]+7],[Lf[0]+14,Lf[1]-7],[Lf[0]-26,Lf[1]+40],[Lf[0]-54,Lf[1]+54]],'#C4122F',NAVY,2);
 const P=box(x,y,a,b,h,'#1E1433','#140C24','#2A1C46',3);
 // goldene Säulen
 for(const u of[0.08,0.92]){poly([onL(P,h,u-0.03,0),onL(P,h,u+0.03,0),onL(P,h,u+0.03,0.85),onL(P,h,u-0.03,0.85)],'#E8C547',NAVY,1.6);}
 for(const u of[0.08,0.92]){poly([onR(P,h,u-0.03,0),onR(P,h,u+0.03,0),onR(P,h,u+0.03,0.85),onR(P,h,u-0.03,0.85)],'#D4AF37',NAVY,1.6);}
 // goldenes Band oben
 poly([onL(P,h,0,0.85),onL(P,h,1,0.85),onL(P,h,1,1),onL(P,h,0,1)],'#E8C547',NAVY,2);
 poly([onR(P,h,0,0.85),onR(P,h,1,0.85),onR(P,h,1,1),onR(P,h,0,1)],'#C9A227',NAVY,2);
 // Eingang mit Goldrahmen
 poly([onL(P,h,0.36,0),onL(P,h,0.64,0),onL(P,h,0.64,0.55),onL(P,h,0.36,0.55)],'#E8C547',NAVY,2.5);
 poly([onL(P,h,0.40,0),onL(P,h,0.60,0),onL(P,h,0.60,0.48),onL(P,h,0.40,0.48)],'#FFE08A',NAVY,1.8);
 // Karten-Symbole links
 ctx.font=`900 26px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';
 [['♠',0.2,'#fff'],['♥',0.8,'#FF4D6D']].forEach(([c,u,col])=>{const p=onL(P,h,u,0.42);ctx.save();ctx.translate(p[0],p[1]);ctx.transform(1,0.5,0,1,0,0);ctx.fillStyle=col;ctx.fillText(c,0,0);ctx.restore();});
 // rechte Seite: große Leuchtschrift + Fenster
 for(let i=0;i<3;i++)quadR(P,h,0.15+i*0.25,0.33+i*0.25,0.18,0.42,'#7B3FE4',1.6);
 {const p=onR(P,h,0.5,0.64);ctx.save();ctx.translate(p[0],p[1]);ctx.transform(1,-0.5,0,1,0,0);const gl=0.6+0.4*Math.abs(Math.sin(t*5));
  ctx.shadowColor=`rgba(255,60,170,${gl})`;ctx.shadowBlur=18;ctx.font=`900 30px ${F}`;ctx.fillStyle='#FF5CC8';ctx.fillText('♦ CASINO ♦',0,0);ctx.restore();}
 // Lichterkette ringsum (Marquee)
 const bulb=(p,k)=>{const on=Math.floor(t*8+k)%3!==0;ctx.beginPath();ctx.arc(p[0],p[1],4.2,0,7);ctx.fillStyle=on?'#FFF59D':'#8a6d1a';ctx.fill();if(on){ctx.beginPath();ctx.arc(p[0],p[1],8,0,7);ctx.fillStyle='rgba(255,240,140,.25)';ctx.fill();}};
 for(let i=0;i<=12;i++){bulb(onL(P,h,i/12,0.92),i);bulb(onR(P,h,i/12,0.92),i+13);}
 for(let i=0;i<=6;i++){bulb(onL(P,h,0.36,i/6*0.55),i+30);bulb(onL(P,h,0.64,i/6*0.55),i+40);}
 // Dach: großer Spielautomat
 const top=[x+(a-b)/2,y-(a+b)/4-h];
 ctx.save();ctx.translate(top[0],top[1]+6);
 rr(-62,-112,124,112,14);ctx.fillStyle='#E5483F';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle=NAVY;ctx.stroke();
 rr(-50,-100,100,26,8);ctx.fillStyle='#FFD23D';ctx.fill();ctx.lineWidth=3;ctx.stroke();
 ctx.font=`900 18px ${F}`;ctx.fillStyle=NAVY;ctx.fillText('JACKPOT',0,-86);
 rr(-50,-66,100,44,8);ctx.fillStyle='#fff';ctx.fill();ctx.stroke();
 const sym=['🍒','7️⃣','💰','⭐','🍋'];for(let i=0;i<3;i++){const k=Math.floor(t*6+i*1.7)%sym.length;ctx.font=`26px ${EMO}`;ctx.fillText(sym[k],-32+i*32,-43);ctx.strokeStyle=NAVY;ctx.lineWidth=2;if(i<2){ctx.beginPath();ctx.moveTo(-16+i*32,-64);ctx.lineTo(-16+i*32,-24);ctx.stroke();}}
 // Hebel
 ctx.strokeStyle=NAVY;ctx.lineWidth=5;const lv=Math.sin(t*3)*0.3;ctx.beginPath();ctx.moveTo(62,-60);ctx.lineTo(80,-60);ctx.lineTo(80+Math.sin(lv)*6,-100);ctx.stroke();ctx.beginPath();ctx.arc(80+Math.sin(lv)*6,-104,9,0,7);ctx.fillStyle='#E5483F';ctx.fill();ctx.lineWidth=3;ctx.stroke();
 // Neon-Schild oben drauf
 const gl=0.6+0.4*Math.abs(Math.sin(t*4));ctx.shadowColor=`rgba(255,60,160,${gl})`;ctx.shadowBlur=26;
 rr(-120,-176,240,54,14);ctx.fillStyle='#120a24';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle=`rgba(255,90,190,${0.6+0.4*gl})`;ctx.stroke();ctx.shadowBlur=0;
 ctx.font=`900 32px ${F}, ${EMO}`;ctx.fillStyle='#FFE45C';ctx.fillText('🎰 CASINO 🎰',0,-148);
 ctx.restore();
 // Würfel + Chips vor dem Eingang
 ctx.save();ctx.translate(x+70,y-6);ctx.rotate(0.3+Math.sin(t*2)*0.05);rr(-14,-14,28,28,5);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=2.5;ctx.strokeStyle=NAVY;ctx.stroke();ctx.fillStyle='#E5483F';for(const [dx,dy] of[[-6,-6],[6,6],[0,0]]){ctx.beginPath();ctx.arc(dx,dy,2.6,0,7);ctx.fill();}ctx.restore();
 for(let i=0;i<3;i++){ctx.beginPath();ctx.ellipse(x+100,y-26-i*6,12,5,0,0,7);ctx.fillStyle=['#E5483F','#2F5FD0','#2FA84F'][i];ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=NAVY;ctx.stroke();}
}
// ---------- Bauernhof ----------
function cow(x,y,s,t,ph){ctx.save();ctx.translate(x,y+Math.sin(t*3+ph)*1.5);ctx.scale(s,s);
 ctx.fillStyle='rgba(0,0,0,.18)';ctx.beginPath();ctx.ellipse(0,4,26,7,0,0,7);ctx.fill();
 ctx.fillStyle=NAVY;for(const lx of[-16,-7,8,17])ctx.fillRect(lx-2,-8,5,12);
 ctx.beginPath();ctx.ellipse(0,-16,26,14,0,0,7);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=2.5;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle=NAVY;ctx.beginPath();ctx.ellipse(-8,-19,7,5,0.4,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(10,-12,6,4,-0.3,0,7);ctx.fill();
 const hx=26+Math.sin(t*2+ph)*2;ctx.beginPath();ctx.ellipse(hx,-22,10,9,0,0,7);ctx.fillStyle='#fff';ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.ellipse(hx+5,-18,6,4,0,0,7);ctx.fillStyle='#F5B1B9';ctx.fill();ctx.stroke();
 ctx.fillStyle=NAVY;ctx.beginPath();ctx.arc(hx-2,-25,1.8,0,7);ctx.fill();ctx.restore();}
function farm(x,y,t,cowA=1){
 // Wiese mit Zaun
 const g=[[x-170,y-20],[x+60,y+95],[x+230,y+10],[x,y-105]];
 poly(g,'#9BD66B',null);
 ctx.strokeStyle='#8B5A2B';ctx.lineWidth=4;ctx.beginPath();for(let i=0;i<4;i++){const a=g[i],b=g[(i+1)%4];ctx.moveTo(a[0],a[1]-8);ctx.lineTo(b[0],b[1]-8);ctx.moveTo(a[0],a[1]-16);ctx.lineTo(b[0],b[1]-16);}ctx.stroke();
 for(let i=0;i<4;i++){const a=g[i],b=g[(i+1)%4];for(let k=0;k<=6;k++){const px=lerp(a[0],b[0],k/6),py=lerp(a[1],b[1],k/6);ctx.fillStyle='#8B5A2B';ctx.fillRect(px-2,py-22,5,22);}}
 // Scheune
 const bx=x-40,by=y-10,a=80,b=70,h=62;
 const P=box(bx,by,a,b,h,'#D9443C','#B23128','#8B2A22',2.8);
 // Satteldach
 const L=[P.L[0],P.L[1]-h],Fr=[P.F[0],P.F[1]-h],R=[P.R[0],P.R[1]-h],K=[P.K?P.K[0]:P.L[0]+a,P.K?P.K[1]-h:P.L[1]-a*0.5-h];
 const rid1=[(L[0]+Fr[0])/2,(L[1]+Fr[1])/2-44],rid2=[(K[0]+R[0])/2,(K[1]+R[1])/2-44];
 poly([Fr,R,rid2,rid1],'#6E4B2A',NAVY,2.6);poly([L,Fr,rid1],'#8B2A22',NAVY,2.6);
 poly([onL(P,h,0.3,0),onL(P,h,0.7,0),onL(P,h,0.7,0.62),onL(P,h,0.3,0.62)],'#fff',NAVY,2.4);
 ctx.strokeStyle='#D9443C';ctx.lineWidth=3;const d0=onL(P,h,0.3,0),d1=onL(P,h,0.7,0.62),d2=onL(P,h,0.7,0),d3=onL(P,h,0.3,0.62);ctx.beginPath();ctx.moveTo(d0[0],d0[1]);ctx.lineTo(d1[0],d1[1]);ctx.moveTo(d2[0],d2[1]);ctx.lineTo(d3[0],d3[1]);ctx.stroke();
 // Silo
 ctx.save();ctx.translate(bx+92,by-28);rr(-18,-90,36,90,6);ctx.fillStyle='#CFD6DE';ctx.fill();ctx.lineWidth=2.6;ctx.strokeStyle=NAVY;ctx.stroke();ctx.beginPath();ctx.arc(0,-90,18,Math.PI,0);ctx.fillStyle='#9AA4B5';ctx.fill();ctx.stroke();ctx.restore();
 // Schild
 ctx.save();ctx.translate(x+120,y+30);ctx.fillStyle='#6b4423';ctx.fillRect(-3,0,6,30);rr(-70,-26,140,32,8);ctx.fillStyle='#F3E2B8';ctx.fill();ctx.lineWidth=2.5;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 17px ${F}, ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=NAVY;ctx.fillText('🐄 HOF SEBASTIAN',0,-9);ctx.restore();
 if(cowA>0){ctx.save();ctx.globalAlpha=cowA;cow(x+70,y+45,1,t,0);cow(x+130,y+10,0.9,t,1.3);cow(x+20,y+60,0.95,t,2.6);ctx.restore();}
}
function EXTRA10(t,D){
 if(t>=T.casLand){const s=backOut((t-T.casLand)/0.35);const yo=(1-clamp((t-T.casDrop)/(T.casLand-T.casDrop),0,1))*-600;D.push([CASP[1],()=>{ctx.save();ctx.translate(CASP[0],CASP[1]);ctx.scale(1,Math.min(1.08,0.92+0.16*s));ctx.translate(-CASP[0],-CASP[1]);casino(CASP[0],CASP[1],t);ctx.restore();}]);}
 else if(t>=T.casDrop){const u=clamp((t-T.casDrop)/(T.casLand-T.casDrop),0,1);D.push([CASP[1],()=>casino(CASP[0],CASP[1]-600*(1-u*u),t)]);}
 if(t>=T.farmDrop){const u=clamp((t-T.farmDrop)/(T.farmLand-T.farmDrop),0,1);const yo=t<T.farmLand?-600*(1-u*u):0;D.push([FARMP[1]+60,()=>farm(FARMP[0],FARMP[1]+yo,t,clamp((t-T.cows)/0.4,0,1))]);}
 for(const b of NEW10){if(t>=b.land+0.1){const s=backOut((t-b.land-0.1)/0.25);D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,s)]);}}
 // AKW-Team
 if(t>T.kw0-0.5)for(const [p,i] of [[[AKWP[0]-70,AKWP[1]+4],0],[[AKWP[0]-110,AKWP[1]-14],1],[[AKWP[0]-30,AKWP[1]+22],2]])D.push([p[1],()=>person(p[0],p[1],['#F2C230','#E86AA8','#4BA3E8'][i],1)]);
}
// ---------- Szenen-Overlays ----------
function nightBg(a){ctx.fillStyle=`rgba(10,16,40,${a})`;ctx.fillRect(0,0,W,H);}
function stars(t,a){ctx.save();ctx.globalAlpha=a;for(let i=0;i<40;i++){const x=(i*271)%1080,y=(i*173)%900,tw=0.5+0.5*Math.sin(t*3+i);ctx.fillStyle=`rgba(255,250,210,${tw})`;ctx.beginPath();ctx.arc(x,y,2+tw*2,0,7);ctx.fill();}ctx.restore();}
function confess(t){ // 0 .. T.flash0
 const a=1-ease((t-T.flash0+0.1)/0.3);if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const g=ctx.createRadialGradient(540,900,100,540,900,1200);g.addColorStop(0,'#2a3470');g.addColorStop(1,'#0c1130');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);stars(t,1);
 const s1=pop(t,0.05,0.4);ctx.save();ctx.translate(540,330);ctx.scale(s1,s1);ctx.rotate(-0.04);strokeText('ICH MUSS WAS GESTEHEN…',0,0,66,'#fff',NAVY,16);ctx.restore();
 const ns=pop(t,T.muetze,0.45);if(ns>0)nightcap(540,640+Math.sin(t*2)*8,1.9*ns,0.2);
 if(t>T.meine-0.05)stamp('SIE IST MEINE! 😳',540,880,t,T.meine,-0.07,82,'#E5483F');
 bigBruno(540,1920+(1-backOut(t/0.5))*700,0.95,t>T.meine,0,false);
 ctx.restore();}
function flashback(t){ // T.flash0 .. T.flash1
 const a=Math.min(easeOut((t-T.flash0)/0.3),1-ease((t-T.flash1)/0.3));if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;nightBg(0.62);stars(t,0.8);
 // Mond
 ctx.beginPath();ctx.arc(860,280,70,0,7);ctx.fillStyle='#FFF4C2';ctx.fill();ctx.beginPath();ctx.arc(890,260,62,0,7);ctx.fillStyle='rgba(20,26,60,1)';ctx.globalCompositeOperation='destination-out';ctx.globalCompositeOperation='source-over';
 yelPill('🌙 RÜCKBLENDE · FOLGE 6',540,250,pop(t,T.flash0+0.05,0.35),46,'#fff');
 // schlafwandelnder Bruno
 const u=clamp((t-T.flash0)/(T.flash1-T.flash0),0,1);const bx=lerp(1200,-120,u),by=1180+Math.sin(u*Math.PI*3)*40;
 ctx.save();ctx.translate(bx,by);ctx.rotate(Math.sin(t*4)*0.06);const im=IMG.pj;const s=0.6;ctx.scale(s,s);ctx.drawImage(im,-im.width/2,-im.height);ctx.restore();
 nightcap(bx+10,by-im_h()*0.6-20,0.55,0.25);
 for(let i=0;i<3;i++){const k=((t*0.8+i/3)%1);ctx.save();ctx.globalAlpha=a*(1-k);ctx.font=`900 ${40+k*30}px ${F}`;ctx.fillStyle='#fff';ctx.textAlign='center';ctx.fillText('Z',bx+60+k*80,by-im_h()*0.6-40-k*120);ctx.restore();}
 if(t>T.pj-0.05)stamp('IM SCHLAFANZUG! 🩳',540,520,t,T.pj,0.06,70,'#3D5AFE');
 if(t>T.stadt-0.05)yelPill('🚶 …durch die ganze Stadt',540,640,pop(t,T.stadt,0.35),44);
 ctx.restore();}
function im_h(){return IMG.pj.height*0.6;}
function doubt(t){ // T.flash1 .. T.egalOut
 const a=Math.min(easeOut((t-T.flash1)/0.3),1-ease((t-T.egalOut)/0.25));if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;const g=ctx.createRadialGradient(540,900,100,540,900,1200);g.addColorStop(0,'#FFE7A1');g.addColorStop(1,'#F2B33D');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 const s=pop(t,T.flash1+0.05,0.35);ctx.save();ctx.translate(540,320);ctx.scale(s,s);ctx.rotate(-0.04);strokeText('Das Geld hab ich nicht geklaut…',0,0,58,'#fff',NAVY,14);ctx.restore();
 if(t>T.glaube-0.05){const s2=pop(t,T.glaube,0.3);ctx.save();ctx.translate(540,430);ctx.scale(s2,s2);ctx.rotate(0.05);strokeText('…glaube ich 😅',0,0,74,'#E5483F',NAVY,16);ctx.restore();}
 if(t>T.key-0.1&&t<T.egal){const ks=pop(t,T.key,0.4);ctx.save();ctx.translate(540,700);ctx.scale(ks,ks);keyShape(-128,0,1.1,0);ctx.restore();
  ctx.save();ctx.translate(760,620);ctx.scale(ks,ks);strokeText('?',0,0,150,'#fff',NAVY,20);ctx.restore();
  if(t>T.hmm-0.05)yelPill('🤔 Hmm…',540,880,pop(t,T.hmm,0.3),52,'#fff');}
 if(t>T.egal-0.05)stamp('EGAL! WEITER! ➡️',540,720,t,T.egal,-0.06,84,'#2FA84F');
 bigBruno(540,1920+(1-backOut((t-T.flash1)/0.45))*700,0.95,t<T.glaube+0.5,Math.sin(t*30)*(t>T.glaube&&t<T.glaube+0.5?6:0),false);
 ctx.restore();}
function moneyCard10(t){const inn=easeOut((t-T.m0)/0.35),out=1-ease((t-T.m1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;yelPill(`+${Math.min(10,COINS10.filter(c=>t>=c.t1).length)} FOLLOWER`,540,420,pop(t,T.m0,0.35),56,'#fff');
 if(t>T.plus-0.1)yelPill('+5.000 € 💰',540,540,pop(t,T.plus,0.35),56);ctx.restore();}
function coins10(t){for(const c of COINS10){if(t<c.t0||t>c.t1+0.05)continue;const u=easeOut((t-c.t0)/(c.t1-c.t0));
 const x=lerp(c.x,170,u),y=lerp(c.y,200,u)-Math.sin(u*Math.PI)*160;ctx.save();ctx.translate(x,y);ctx.scale(1-0.4*u,1-0.4*u);ctx.font=`54px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🪙',0,0);ctx.restore();}}
function pollResult(t){const inn=easeOut((t-T.p0)/0.35),out=1-ease((t-T.p1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(10,18,30,.72)';ctx.fillRect(0,0,W,H);
 const hs=pop(t,T.p0,0.4);ctx.save();ctx.translate(540,330);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('ABSTIMMUNG VORBEI!',0,0,84,YEL,NAVY,22);ctx.restore();
 [['🏨','HOTEL',2,T.hotel,'#FFF4D6'],['🏋️','GYM',2,T.gym,'#E3F0FF'],['🎰','CASINO',7,T.casino,'#FCE4EC']].forEach(([e,n,v,tt,col],i)=>{const s=pop(t,tt-0.15,0.35);if(s<=0)return;const y=560+i*250;
  ctx.save();ctx.translate(540,y);ctx.scale(s,s);rr(-420,-100,840,200,34);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=i===2&&t>T.casino?'#E5483F':NAVY;ctx.stroke();
  ctx.font=`100px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,-310,6);
  ctx.font=`900 66px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='left';ctx.fillText(n,-220,8);
  const bw=(40+180*v/7)*ease((t-tt)/0.5);rr(60,-24,bw,48,24);ctx.fillStyle=i===2?'#E5483F':'#8FA3C7';ctx.fill();
  ctx.font=`900 70px ${F}`;ctx.textAlign='right';ctx.fillStyle=NAVY;ctx.fillText(t>tt?String(v):'',390,8);ctx.restore();});
 if(t>T.casino+0.15)stamp('GEWINNER! 🏆',700,1340,t,T.casino+0.15,-0.08,80,'#2FA84F');
 ctx.restore();}
function fwCard(t){const inn=easeOut((t-T.fw0)/0.35),out=1-ease((t-T.fw1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(60,10,10,.72)';ctx.fillRect(0,0,W,H);
 const hs=pop(t,T.fw0,0.4);ctx.save();ctx.translate(540,330);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('🚒 FEUERWEHR',0,0,96,'#fff',NAVY,22);ctx.restore();
 [['Johannes','Kommandant 👨‍🚒',T.joh],['Timo','Feuerwehrmann 🧯',T.timo],['Lionell','Fahrzeugwart 🔧',T.lio]].forEach(([n,r,tt],i)=>{const s=pop(t,tt,0.35);if(s<=0)return;const y=600+i*240;
  ctx.save();ctx.translate(540,y);ctx.scale(s,s);ctx.rotate((i-1)*0.02);rr(-420,-95,840,190,34);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.save();ctx.translate(-330,40);person(0,0,'#E5483F',2.2);helmet(0,0,2.2);ctx.restore();
  ctx.font=`900 62px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(n,-220,-26);
  ctx.font=`800 42px ${F}, ${EMO}`;ctx.fillStyle='#E5483F';ctx.fillText(r,-220,38);ctx.restore();});
 ctx.restore();}
function wishCard(t){const inn=easeOut((t-T.w0)/0.35),out=1-ease((t-T.w1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(10,18,30,.72)';ctx.fillRect(0,0,W,H);
 const hs=pop(t,T.w0,0.4);ctx.save();ctx.translate(540,330);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('EURE WÜNSCHE',0,0,92,YEL,NAVY,22);ctx.restore();
 [['🏫','SCHULE',T.schule],['🔒','GEFÄNGNIS',T.gef],['❓','DEIN WUNSCH?',T.was]].forEach(([e,n,tt],i)=>{const s=pop(t,tt,0.35);if(s<=0)return;const y=580+i*240;
  ctx.save();ctx.translate(540,y);ctx.scale(s,s);ctx.rotate((i-1)*0.02);rr(-400,-95,800,190,34);ctx.fillStyle=i===2?YEL:'#fff';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`100px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,-270,6);ctx.font=`900 70px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='left';ctx.fillText(n,-170,8);ctx.restore();});
 if(t>T.schreibt-0.1)yelPill('💬 Schreibt’s in die Kommentare!',540,1330,pop(t,T.schreibt,0.35),46,'#fff');
 ctx.restore();}
function ending(t){if(t<T.EC)return;const u=ease((t-T.EC)/0.4);
 ctx.save();ctx.globalAlpha=u;const g=ctx.createRadialGradient(540,900,100,540,900,1200);g.addColorStop(0,'#2a3470');g.addColorStop(1,'#0c1130');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);stars(t,1);
 // Tür mit Schloss
 const ds=pop(t,T.EC+0.1,0.45);ctx.save();ctx.translate(540,640);ctx.scale(ds,ds);rr(-150,-230,300,460,18);ctx.fillStyle='#8B5A2B';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
 rr(-120,-200,240,170,10);ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=5;ctx.stroke();rr(-120,10,240,190,10);ctx.stroke();
 const ls=pop(t,T.schliess,0.4);if(ls>0){ctx.save();ctx.translate(90,20);ctx.scale(ls,ls);ctx.font=`110px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🔒',0,0);ctx.restore();}
 ctx.restore();
 if(t>T.schliess+0.2)stamp('ABGESCHLOSSEN! 🔒',540,1000,t,T.schliess+0.2,-0.06,70,'#E5483F');
 const wz=1+0.3*ease((t-T.EC)/2.4);ctx.save();ctx.translate(540,1920);ctx.scale(wz,wz);ctx.translate(-540,-1920);bigBruno(540,1920+(1-backOut((t-T.EC-0.1)/0.45))*700,0.9,false,0,true);ctx.restore();
 ctx.save();ctx.globalAlpha=u*0.9;ctx.font=`italic 900 48px ${F}`;ctx.fillStyle='#fff';ctx.textAlign='center';ctx.fillText('psst… 🤫',800,1360);ctx.restore();
 ctx.restore();
 const bl=ease((t-(END-1.0))/0.9);if(bl>0){ctx.fillStyle=`rgba(0,0,0,${bl})`;ctx.fillRect(0,0,W,H);}}

const HL=new Set(['gestehen.','Schlafmütze…','meine.','schlafgewandelt!','Schlafanzug!','Stadt!','Geld','geklaut…','glaube','Schlüssel','Dieb','Egal!','Weiter!','10','Follower!','5.000','€!','34.000.','vorbei!','Hotel:','Gym:','Casino:','SIEBEN!','Casino','gebaut!','15.000!','Gastelgott,','Marius','Tim,','Casino-Chefs!','Hände…','natürlich.','Sebastian…','Bauernhof.','Milchkühen!','14.000.','Muuuh!','Einar,','Silant,','Tilo,','Basti,','Johannes','Marius!','163','Einwohner!','Feuerwehr-Kommandant.','Timo','Feuerwehr!','Lionell','Fahrzeugwart!','Kraftwerksmeister','Felix!','Kilian','Marcel,','Helfer.','Schule','Gefängnis.','Kommentare!','Nacht…','ein.']);
const DISP={'Zehn':'10','fünftausend':'5.000','Euro!':'€!','vierunddreißigtausend.':'34.000.','fünfzehntausend!':'15.000!','fünftausend!':'5.000!','vierzehntausend.':'14.000.','Hundertdreiundsechzig':'163'};
function capY(t){if(t>=T.EC)return -1;if(t<T.egalOut)return 1060;
 for(const [a,b] of [[T.p0,T.p1],[T.fw0,T.fw1],[T.w0,T.w1]])if(t>a-0.1&&t<b)return 1500;return 1330;}

function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;for(const st of[T.casLand,T.farmLand]){const u=t-st;if(u>0&&u<0.45){shx+=Math.sin(u*90)*12*(1-u/0.45);shy+=Math.cos(u*70)*8*(1-u/0.45);}}
 ctx.save();ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 drawTown(t);
 dust(CASP[0]-10,CASP[1]-30,t,T.casLand,16,150);dust(FARMP[0]+20,FARMP[1]+10,t,T.farmLand,16,150);
 for(const b of NEW10){if(t>=b.t0&&t<b.land+1.8){const[sx,sy]=b.spot;let bx,by,al=1;
   if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*600;}
   else{const u=ease((t-b.land-0.8)/1.0);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.1)/0.7,0,1);}
   ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.6,t*2+sx);ctx.restore();}}
 if(t>T.n0-0.2&&t<T.fw0){for(const b of NEW10)if(t>=b.land)tag(b.name,b.spot[0],b.spot[1]-62,1,pop(t,b.land,0.25));}
 // Casino-Chefs
 if(t>T.chefs0-0.2&&t<T.seb-0.3){const cs=[[CASP[0]-120,CASP[1]+40,'Gastelgott',T.gas],[CASP[0]-40,CASP[1]+70,'Marius',T.mar],[CASP[0]+50,CASP[1]+50,'Tim',T.tim]];
  cs.forEach(([x,y,n,tt],i)=>{if(t<tt-0.05)return;const s=backOut((t-tt)/0.3);person(x,y,['#E8435A','#8E6CF0','#F2C230'][i],s);tag(n,x,y-62,1,pop(t,tt,0.3));});
  if(t>T.chefs-0.05)yelPill('🎰 CASINO-CHEFS',CASP[0]-40,CASP[1]+150,pop(t,T.chefs,0.35)*0.6,40);
  if(t>T.haende-0.1){bubble(CASP[0]-250,CASP[1]-120,pop(t,T.haende,0.35)*0.85,'🤑 …für die Stadt natürlich',24);}}
 // Sebastian am Hof
 if(t>T.seb-0.2&&t<T.n0-0.3){const p=[FARMP[0]-120,FARMP[1]+70];person(p[0],p[1],'#57C26A',1);tag('Sebastian',p[0],p[1]-62,1,pop(t,T.seb,0.3));
  if(t>T.farmLand+0.3)bubble(p[0]+40,p[1]-160,pop(t,T.farmLand+0.3,0.35)*0.85,'🐄 Endlich!',26);}
 // AKW-Team
 if(t>T.kw0-0.2&&t<T.w0){const ps=[[AKWP[0]-70,AKWP[1]+4,'Felix',T.felix],[AKWP[0]-110,AKWP[1]-14,'Kilian',T.kil],[AKWP[0]-30,AKWP[1]+22,'Marcel',T.mrc]];
  ps.forEach(([x,y,n,tt],i)=>{if(t>=tt-0.05)tag(n,x,y-62-(i===0?0:0),1,pop(t,tt,0.3));});
  if(t>T.felix)bubble(AKWP[0]-10,AKWP[1]-170,pop(t,T.felix,0.35)*0.85,'☢️ Kraftwerksmeister!',24);
  if(t>T.helfer-0.05)yelPill('🦺 HELFER',AKWP[0]-70,AKWP[1]+90,pop(t,T.helfer,0.35)*0.6,40);}
 ctx.restore();
 moneyCard10(t);coins10(t);
 if(t>T.kasse1-0.1&&t<T.p0)stamp('34.000 € ✅',540,470,t,T.kasse1,-0.08,90,'#2FA84F');
 if(t>T.mCas-0.1&&t<T.chefs0)yelPill('−15.000 € 🎰',540,420,pop(t,T.mCas-0.1,0.35),60,'#fff');
 if(t>T.mFarm-0.1&&t<T.muh)yelPill('−5.000 € 🐄',540,420,pop(t,T.mFarm-0.1,0.35),60,'#fff');
 if(t>T.muh-0.1&&t<T.n0-0.3)stamp('MUUUH! 🐄',540,450,t,T.muh,-0.08,100,'#E5483F');
 pollResult(t);fwCard(t);wishCard(t);
 const cover=t<T.egalOut||(t>T.p0&&t<T.p1)||(t>T.fw0&&t<T.fw1)||(t>T.w0&&t<T.w1)||t>=T.EC;
 if(!cover)bottomPill(t,1);
 if(t>=T.egalOut-0.3)hud(t);
 confess(t);flashback(t);doubt(t);
 captions(t);
 ending(t);
}
window.init=async function(words,res4){
 IMG.plateC=await load('plateC.jpg');IMG.plateD=await load('plateD9.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.4;RES=res4;buildPhrases();
 const w=wt;
__LAY__
 NEW9=F9_NEW.map((n,i)=>({name:n,spot:take(),land:-1,shirt:SHIRTS[(i*3+5)%SHIRTS.length]}));
 // --- Folge 10 ---
 T.meine=w('meine.')-0.05;T.muetze=w('Schlafmütze…');T.flash0=w('Ich')-0.1;T.pj=w('Schlafanzug!');T.stadt=w('Durch');T.flash1=w('Aber')-0.1;
 T.glaube=w('glaube');T.key=w('Schlüssel')-0.1;T.hmm=w('Hmm…');T.egal=w('Egal!');T.egalOut=w('Zehn')-0.15;
 T.m0=w('Zehn');T.plus=w('Plus');T.kasse1=w('vierunddreißigtausend.');T.m1=w('Die',2)-0.1;
 const c0=w('Zehn')+0.2,c1=w('Euro!')+0.2;COINS10=[];for(let i=0;i<10;i++){const t1=lerp(c0+0.3,c1,i/9);COINS10.push({t0:t1-0.5,t1,x:140+((i*197)%800),y:1500+((i*83)%300)});}
 T.p0=w('Die',2)-0.15;T.hotel=w('Hotel:');T.gym=w('Gym:');T.casino=w('SIEBEN!');T.p1=w('Das')-0.1;
 T.casDrop=w('Das')-0.1;T.casLand=w('gebaut!')-0.05;T.casBuilt=T.casLand;T.mCas=w('Minus');
 T.chefs0=w('Gastelgott,')-0.1;T.gas=w('Gastelgott,');T.mar=w('Marius');T.tim=w('Tim,');T.chefs=w('Casino-Chefs!');T.haende=w('reib');
 T.seb=w('Sebastian…');T.farmDrop=w('Heute')-0.1;T.farmLand=w('kriegst')+0.15;T.farmBuilt=T.farmLand;T.cows=w('Milchkühen!');T.mFarm=w('Minus',2);T.muh=w('Muuuh!');
 const names=['Einar,','Silant,','Tilo,','Basti,','Johannes','Marius!'];
 NEW10=F10_NEW.map((n,i)=>{const l=w(names[i])+0.05;return{name:n,spot:take(),land:l,t0:l-0.7,shirt:SHIRTS[(i*4+1)%SHIRTS.length]};});
 T.n0=NEW10[0].land;
 T.fw0=w('Johannes',2)-0.15;T.joh=w('Johannes',2);T.timo=w('Timo');T.lio=w('Lionell');T.fw1=w('Kraftwerksmeister')-0.6;
 T.kw0=T.fw1;T.felix=w('Felix!');T.kil=w('Kilian');T.mrc=w('Marcel,');T.helfer=w('Helfer.');
 T.w0=w('wünscht')-0.25;T.schule=w('Schule');T.gef=w('Gefängnis.');T.was=w('Was');T.schreibt=w("Schreibt's");T.w1=w('Nacht…')-0.9;
 T.EC=w('Nacht…')-0.85;T.schliess=w('schließ');
 T.kPulse=[T.kasse1,T.mCas,T.mFarm,...COINS10.map(c=>c.t1)];T.ePulse=NEW10.map(b=>b.land);T.cardSpans=[];
 const mid=(ps)=>ps.reduce((s,p)=>[s[0]+p[0]/ps.length,s[1]+p[1]/ps.length],[0,0]);
 const nm=mid(NEW10.map(b=>b.spot));
 CAM=[[0,540,1000,1.0],[T.egalOut-0.3,540,1000,1.0],[T.egalOut,560,950,1.12],[T.p0,560,950,1.12],[T.p1-0.2,CASP[0]-60,CASP[1]-120,1.7],
  [T.chefs0+0.3,CASP[0]-60,CASP[1]-60,1.75],[T.seb-0.2,CASP[0]-60,CASP[1]-60,1.75],[T.seb+0.3,FARMP[0]+20,FARMP[1]-20,1.75],
  [T.n0-0.6,FARMP[0]+20,FARMP[1]-20,1.75],[T.n0-0.1,nm[0],nm[1]-40,1.3],[T.fw0,nm[0],nm[1]-40,1.3],[T.kw0,AKWP[0]-40,AKWP[1]-70,1.75],
  [T.w0,AKWP[0]-40,AKWP[1]-70,1.75],[END,540,1100,1.1]];
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
window.frame=frame;
