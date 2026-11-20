// ===================== FOLGE 11 =====================
// Stand vorher (Folge 10): 704 Follower, 163 Einwohner, 14.000 €
// Folge 11: 707 Follower (+3 = +1.500) → 15.500 €, 3 neue → 166, Club Leo (Leonards eigenes Geld)
const F10_NEW=['Einar','Silant','Tilo','Basti','Johannes','Marius'];
const F11_NEW=[['Leonard','@leonard.krasniqi03','#1E1E2E'],['Saphira','Saphira','#E86AA8'],['Leonita','@lalonita','#9C6B3A']];
const CASP=[840,878], FARMP=[300,640], CLUBP=[175,1395];
let NEW10=[],NEW11=[],COINS11=[];
function kasse(t){let k=14000;for(const c of COINS11)if(t>=c.t1)k+=500*clamp((t-c.t1)/0.15,0,1);return k;}
function einw(t){let n=163;for(const b of NEW11)if(t>=b.land)n++;return n;}
function followers(t){let n=704;for(const c of COINS11)if(t>=c.t1)n++;return n;}
function bottomPill(t,a=1){if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const x=70,y=1600,w=940,h=96;rr(x,y,w,h,h/2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`900 40px ${F}, ${EMO}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';
 const txt=t<T.clubLand?`${followers(t)} FOLLOWER · ⛓️ GEFÄNGNIS AB 750`:`${followers(t)} FOLLOWER · 🎉 CLUB LEO STEHT ✅`;
 ctx.fillText(txt,x+w/2,y+h/2+2);ctx.restore();}
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
// ---------- Traktor ----------
function tractor(x,y,s,t,drive){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const bob=drive?Math.sin(t*14)*1.5:0;ctx.translate(0,bob);
 ctx.fillStyle='rgba(0,0,0,.2)';ctx.beginPath();ctx.ellipse(0,6,46,10,0,0,7);ctx.fill();
 rr(-34,-46,44,30,6);ctx.fillStyle='#E5302A';ctx.fill();ctx.lineWidth=3;ctx.strokeStyle=NAVY;ctx.stroke();
 rr(2,-34,34,18,4);ctx.fillStyle='#E5302A';ctx.fill();ctx.stroke();
 rr(-28,-74,30,30,4);ctx.fillStyle='#BFE6FF';ctx.fill();ctx.stroke();ctx.fillStyle='#E5302A';ctx.fillRect(-31,-78,36,6);ctx.strokeRect(-31,-78,36,6);
 ctx.fillStyle=NAVY;ctx.fillRect(26,-50,5,18);
 if(drive){for(let i=0;i<3;i++){const k=((t*1.5+i/3)%1);ctx.globalAlpha=0.5*(1-k);ctx.beginPath();ctx.arc(28+k*10,-54-k*40,5+k*8,0,7);ctx.fillStyle='#ccc';ctx.fill();}ctx.globalAlpha=1;}
 const wheel=(wx,wy,r)=>{ctx.beginPath();ctx.arc(wx,wy,r,0,7);ctx.fillStyle='#2b2b33';ctx.fill();ctx.lineWidth=3;ctx.strokeStyle=NAVY;ctx.stroke();ctx.beginPath();ctx.arc(wx,wy,r*0.45,0,7);ctx.fillStyle='#F2C230';ctx.fill();
  if(drive){ctx.save();ctx.translate(wx,wy);ctx.rotate(t*8);ctx.strokeStyle='#2b2b33';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-r*0.45,0);ctx.lineTo(r*0.45,0);ctx.stroke();ctx.restore();}};
 wheel(-20,-8,18);wheel(26,-6,11);ctx.restore();}
// ---------- Club Leo ----------
function club(x,y,t,party){
 ctx.fillStyle='rgba(20,40,20,.28)';ctx.beginPath();ctx.ellipse(x-6,y-36,120,48,-0.45,0,7);ctx.fill();
 const a=90,b=100,h=92;const P=box(x,y,a,b,h,'#1B1F3B','#11142A','#262B52',3);
 // Neonstreifen
 const hue=(k)=>`hsl(${(t*120+k*60)%360},95%,62%)`;
 poly([onL(P,h,0,0.82),onL(P,h,1,0.82),onL(P,h,1,0.9),onL(P,h,0,0.9)],party?hue(0):'#7B3FE4',null);
 poly([onR(P,h,0,0.82),onR(P,h,1,0.82),onR(P,h,1,0.9),onR(P,h,0,0.9)],party?hue(2):'#5B2FC4',null);
 // Tür
 poly([onL(P,h,0.38,0),onL(P,h,0.62,0),onL(P,h,0.62,0.5),onL(P,h,0.38,0.5)],'#0A0C1A',NAVY,2);
 if(party){const p=onL(P,h,0.5,0.25);const g=ctx.createRadialGradient(p[0],p[1],2,p[0],p[1],40);g.addColorStop(0,hue(1));g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(p[0]-40,p[1]-40,80,80);}
 // Fenster rechts mit Lichtern
 for(let i=0;i<3;i++)quadR(P,h,0.15+i*0.25,0.33+i*0.25,0.25,0.6,party?hue(i+3):'#2A2F5C',1.6);
 // Schild
 {const p=onL(P,h,0.5,0.68);ctx.save();ctx.translate(p[0],p[1]);ctx.transform(1,0.5,0,1,0,0);const gl=party?0.6+0.4*Math.abs(Math.sin(t*6)):0.7;
  ctx.shadowColor=`rgba(80,220,255,${gl})`;ctx.shadowBlur=16;ctx.font=`900 22px ${F}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#7FF3FF';ctx.fillText('CLUB LEO',0,0);ctx.restore();}
 // Dach: Discokugel
 const top=[x+(a-b)/2,y-(a+b)/4-h];ctx.save();ctx.translate(top[0],top[1]-30);
 ctx.strokeStyle=NAVY;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,-30);ctx.lineTo(0,-18);ctx.stroke();
 ctx.beginPath();ctx.arc(0,0,20,0,7);ctx.fillStyle='#C9D3E6';ctx.fill();ctx.lineWidth=3;ctx.stroke();
 for(let i=0;i<10;i++){const a2=i/10*6.283+t*2,px=Math.cos(a2)*12,py=Math.sin(a2)*12;ctx.fillStyle=(i+Math.floor(t*6))%3?'#fff':'#8FA3C7';ctx.fillRect(px-3,py-3,6,6);}
 if(party){for(let i=0;i<6;i++){const a3=t*1.6+i*1.047;ctx.save();ctx.globalAlpha=0.28;ctx.rotate(a3);const gr=ctx.createLinearGradient(0,0,240,0);gr.addColorStop(0,hue(i));gr.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=gr;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(240,-26);ctx.lineTo(240,26);ctx.closePath();ctx.fill();ctx.restore();}}
 ctx.restore();
 // Musiknoten
 if(party){for(let i=0;i<4;i++){const k=((t*0.7+i/4)%1);ctx.save();ctx.globalAlpha=1-k;ctx.font=`900 ${30+k*14}px ${F}, ${EMO}`;ctx.fillStyle=hue(i);ctx.textAlign='center';ctx.fillText(['♪','♫','🎵','♪'][i],top[0]-60+i*40+Math.sin(t*3+i)*12,top[1]-60-k*110);ctx.restore();}}
}
function bench(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='#6b4423';ctx.fillRect(-26,-4,4,10);ctx.fillRect(22,-4,4,10);rr(-30,-14,60,10,3);ctx.fillStyle='#A0703F';ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=NAVY;ctx.stroke();rr(-30,-28,60,8,3);ctx.fill();ctx.stroke();ctx.restore();}
function EXTRA10(t,D){
 D.push([CASP[1],()=>casino(CASP[0],CASP[1],t)]);
 D.push([FARMP[1]+60,()=>farm(FARMP[0],FARMP[1],t,1)]);
 // mehr Kühe + Traktor ab "Sebastian"
 if(t>T.trak-0.1){const herd=[[FARMP[0]+40,FARMP[1]+20],[FARMP[0]+100,FARMP[1]+40],[FARMP[0]+160,FARMP[1]+20],[FARMP[0]+10,FARMP[1]+40],[FARMP[0]+150,FARMP[1]-5],[FARMP[0]+60,FARMP[1]-15],[FARMP[0]+120,FARMP[1]-30]];
  herd.forEach((p,i)=>{const s=backOut((t-T.kuehe-i*0.08)/0.3);if(t>T.kuehe+i*0.08)D.push([p[1],()=>cow(p[0],p[1],0.8*s,t,i)]);});
  const u=clamp((t-T.trak)/2.2,0,1);const tx=lerp(FARMP[0]-90,FARMP[0]+70,u),ty=lerp(FARMP[1]+75,FARMP[1]+92,u);
  D.push([ty,()=>tractor(tx,ty,0.95,t,u<1)]);}
 if(t>=T.clubLand){D.push([CLUBP[1],()=>club(CLUBP[0],CLUBP[1],t,t>T.party&&t<T.party+5.5)]);}
 else if(t>=T.clubDrop){const u=clamp((t-T.clubDrop)/(T.clubLand-T.clubDrop),0,1);D.push([CLUBP[1],()=>club(CLUBP[0],CLUBP[1]-600*(1-u*u),t,false)]);}
 for(const b of NEW10)D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,1)]);
 D.push([LEOB[1]-2,()=>bench(LEOB[0],LEOB[1])]);
 for(const b of NEW11){if(t>=b.land+0.1){const s=backOut((t-b.land-0.1)/0.25);const dance=t>T.party&&t<T.party+5.5&&b.name==='Leonard';D.push([b.spot[1],()=>person(b.spot[0],b.spot[1]-(dance?Math.abs(Math.sin(t*9))*10:0),b.shirt,s)]);}}
 // Party: Leute vor dem Club tanzen
 if(t>T.party&&t<T.party+5.5){DANCERS.forEach((p,i)=>D.push([p[1],()=>person(p[0],p[1]-Math.abs(Math.sin(t*9+i))*12,SHIRTS[(i*3)%SHIRTS.length],1)]));}
}
let LEOB=[0,0],DANCERS=[];
// ---------- Szenen-Overlays ----------
function nightBg(a){ctx.fillStyle=`rgba(10,16,40,${a})`;ctx.fillRect(0,0,W,H);}
function stars(t,a){ctx.save();ctx.globalAlpha=a;for(let i=0;i<40;i++){const x=(i*271)%1080,y=(i*173)%900,tw=0.5+0.5*Math.sin(t*3+i);ctx.fillStyle=`rgba(255,250,210,${tw})`;ctx.beginPath();ctx.arc(x,y,2+tw*2,0,7);ctx.fill();}ctx.restore();}
function pawprints(x,y,t,t0,n=6){for(let i=0;i<n;i++){const tt=t0+i*0.18;if(t<tt)continue;const a=Math.min(1,(t-tt)/0.2);ctx.save();ctx.globalAlpha=a;ctx.translate(x+i*48,y-(i%2)*30-i*14);ctx.rotate(-0.4);
 ctx.fillStyle='#3a2a20';ctx.beginPath();ctx.ellipse(0,0,13,11,0,0,7);ctx.fill();for(const [dx,dy] of[[-12,-16],[-4,-22],[5,-22],[13,-16]]){ctx.beginPath();ctx.arc(dx,dy,5,0,7);ctx.fill();}ctx.restore();}}
function intro(t){ // 0 .. T.v0
 const a=1-ease((t-T.v0+0.1)/0.3);if(a<=0)return;ctx.save();ctx.globalAlpha=a;
 const g=ctx.createRadialGradient(540,900,100,540,900,1200);g.addColorStop(0,'#2a3470');g.addColorStop(1,'#0c1130');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);stars(t,1);
 const s1=pop(t,0.05,0.4);ctx.save();ctx.translate(540,300);ctx.scale(s1,s1);ctx.rotate(-0.04);strokeText('HEUTE NACHT… 🌙',0,0,80,'#fff',NAVY,18);ctx.restore();
 // AKW-Tür, angelehnt
 const ds=pop(t,0.2,0.45);ctx.save();ctx.translate(540,760);ctx.scale(ds,ds);
 rr(-170,-260,340,500,16);ctx.fillStyle='#4a5266';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
 const op=t>T.offen?Math.min(1,(t-T.offen)/0.5):0;
 ctx.fillStyle='#0b0e1c';rr(-140,-230,280,440,10);ctx.fill();
 ctx.save();ctx.translate(-140,0);ctx.scale(1-0.55*op,1);rr(0,-230,280,440,10);ctx.fillStyle='#8B93A7';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.font=`90px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('☢️',140,-90);ctx.beginPath();ctx.arc(240,10,12,0,7);ctx.fillStyle='#F2C230';ctx.fill();ctx.restore();
 if(op>0){const gl=ctx.createRadialGradient(60,0,10,60,0,240);gl.addColorStop(0,`rgba(140,255,90,${0.5*op})`);gl.addColorStop(1,'rgba(140,255,90,0)');ctx.fillStyle=gl;ctx.fillRect(-200,-260,400,520);}
 ctx.restore();
 if(t>T.spuren-0.1)pawprints(300,1240,t,T.spuren,6);
 if(t>T.spuren-0.05)stamp('SELTSAME SPUREN! 🐾',540,1120,t,T.spuren,-0.06,70,'#E5483F');
 if(t>T.offen-0.05)yelPill('🚪 …und die Tür war OFFEN!',540,1410,pop(t,T.offen,0.35),48);
 ctx.restore();}
function suspects(t){ // T.v0 .. T.v1
 const a=Math.min(easeOut((t-T.v0)/0.3),1-ease((t-T.v1)/0.3));if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;const g=ctx.createRadialGradient(540,900,100,540,900,1200);g.addColorStop(0,'#3b2a5a');g.addColorStop(1,'#140c26');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 const hs=pop(t,T.v0+0.05,0.4);ctx.save();ctx.translate(540,250);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('🔍 DIE VERDÄCHTIGEN',0,0,76,YEL,NAVY,20);ctx.restore();
 [['1','🦊','FUCHS','schleicht nachts rum',T.s1],['2','🦝','WASCHBÄR','wühlt im Müll vom Markt',T.s2],['3','🐦‍⬛','ELSTER','liebt alles, was glänzt ✨',T.s3]].forEach(([nr,e,n,hint,tt],i)=>{const s=pop(t,tt,0.35);if(s<=0)return;const y=470+i*250;
  const hot=t>T.werwar&&Math.floor(t*3)%3===i;
  ctx.save();ctx.translate(540,y);ctx.scale(s,s);ctx.rotate((i-1)*0.02);rr(-440,-105,880,210,36);ctx.fillStyle=hot?'#FFF4D6':'#fff';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=hot?'#E5483F':NAVY;ctx.stroke();
  ctx.beginPath();ctx.arc(-370,-70,40,0,7);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=NAVY;ctx.stroke();ctx.font=`900 50px ${F}`;ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nr,-370,-66);
  ctx.font=`110px ${EMO}`;ctx.fillText(e,-260,10);
  ctx.font=`900 66px ${F}`;ctx.textAlign='left';ctx.fillText(n,-160,-28);ctx.font=`800 40px ${F}, ${EMO}`;ctx.fillStyle='#6b5a8a';ctx.fillText(hint,-160,40);ctx.restore();});
 if(t>T.werwar-0.05)stamp('WER WAR’S? 🤔',540,1250,t,T.werwar,-0.06,80,'#E5483F');
 if(t>T.schreibt-0.1)yelPill('💬 Schreibt 1, 2 oder 3!',540,1400,pop(t,T.schreibt,0.35),52,'#fff');
 if(t>T.zwoelf-0.1)yelPill('🏆 Richtige Tipps → Folge 12',540,1520,pop(t,T.zwoelf,0.35),44);
 ctx.restore();}
function moneyCard(t){const inn=easeOut((t-T.m0)/0.35),out=1-ease((t-T.m1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;yelPill(`+${Math.min(3,COINS11.filter(c=>t>=c.t1).length)} FOLLOWER`,540,420,pop(t,T.m0,0.35),56,'#fff');
 if(t>T.plus-0.1)yelPill('+1.500 € 💰',540,540,pop(t,T.plus,0.35),56);ctx.restore();}
function coins(t){for(const c of COINS11){if(t<c.t0||t>c.t1+0.05)continue;const u=easeOut((t-c.t0)/(c.t1-c.t0));
 const x=lerp(c.x,170,u),y=lerp(c.y,200,u)-Math.sin(u*Math.PI)*160;ctx.save();ctx.translate(x,y);ctx.scale(1-0.4*u,1-0.4*u);ctx.font=`54px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🪙',0,0);ctx.restore();}}
function jailCard(t){const inn=easeOut((t-T.j0)/0.35),out=1-ease((t-T.j1)/0.3);const a=Math.min(inn,out);if(a<=0)return;
 ctx.save();ctx.globalAlpha=a;ctx.fillStyle='rgba(10,18,30,.74)';ctx.fillRect(0,0,W,H);
 const hs=pop(t,T.j0,0.4);ctx.save();ctx.translate(540,330);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('NOCH 43 FOLLOWER',0,0,84,YEL,NAVY,22);ctx.restore();
 const s=pop(t,T.j0+0.3,0.45);ctx.save();ctx.translate(540,720);ctx.scale(s,s);
 rr(-300,-200,600,380,30);ctx.fillStyle='#8A93A8';ctx.fill();ctx.lineWidth=10;ctx.strokeStyle=NAVY;ctx.stroke();
 for(let i=0;i<6;i++){ctx.fillStyle='#2b2f3d';ctx.fillRect(-250+i*96,-170,22,320);}
 ctx.font=`900 70px ${F}, ${EMO}`;ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('⛓️ GEFÄNGNIS',0,240);ctx.restore();
 const p=Math.min(1,(t-T.j0)/1.2)*0.94;rr(190,1010,700,40,20);ctx.fillStyle='rgba(255,255,255,.2)';ctx.fill();rr(190,1010,700*p,40,20);ctx.fillStyle=YEL;ctx.fill();
 ctx.font=`900 40px ${F}`;ctx.fillStyle='#fff';ctx.textAlign='center';ctx.fillText('707 / 750',540,1100);
 if(t>T.dieb-0.05)stamp('…und da kommt der DIEB rein! 🦹',540,1250,t,T.dieb,-0.05,58,'#E5483F');
 ctx.restore();}
function ending(t){if(t<T.EC)return;const u=ease((t-T.EC)/0.4);
 ctx.save();ctx.globalAlpha=u;const g=ctx.createRadialGradient(540,900,100,540,900,1200);g.addColorStop(0,'#2a3470');g.addColorStop(1,'#0c1130');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);stars(t,1);
 [['1','🦊',T.e1],['2','🦝',T.e2],['3','🐦‍⬛',T.e3]].forEach(([n,e,tt],i)=>{const s=pop(t,tt,0.35);if(s<=0)return;const x=220+i*320,y=620;
  ctx.save();ctx.translate(x,y+Math.sin(t*3+i)*8);ctx.scale(s,s);ctx.beginPath();ctx.arc(0,0,130,0,7);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=10;ctx.strokeStyle=NAVY;ctx.stroke();
  ctx.font=`130px ${EMO}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e,0,8);
  ctx.beginPath();ctx.arc(90,-90,48,0,7);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=6;ctx.stroke();ctx.font=`900 60px ${F}`;ctx.fillStyle=NAVY;ctx.fillText(n,90,-86);ctx.restore();});
 const hs=pop(t,T.EC+0.1,0.4);ctx.save();ctx.translate(540,300);ctx.scale(hs,hs);ctx.rotate(-0.04);strokeText('WER WAR’S?',0,0,100,YEL,NAVY,24);ctx.restore();
 if(t>T.EC+0.6)yelPill('💬 Schreib 1, 2 oder 3!',540,920,pop(t,T.EC+0.6,0.35),56,'#fff');
 const wz=1+0.25*ease((t-T.EC)/2.4);ctx.save();ctx.translate(540,1920);ctx.scale(wz,wz);ctx.translate(-540,-1920);bigBruno(540,1920+(1-backOut((t-T.EC-0.1)/0.45))*700,0.9,false,0,false);ctx.restore();
 ctx.restore();
 const bl=ease((t-(END-0.9))/0.8);if(bl>0){ctx.fillStyle=`rgba(0,0,0,${bl})`;ctx.fillRect(0,0,W,H);}}

const HL=new Set(['passiert!','AKW-Tür:','Spuren!','offen!','Verdächtige.','eins:','Fuchs.','zwei:','Waschbär.','drei:','Elster.','glänzt…','war\'s?','1,','2','3','Kommentare!','zwölf','So…','Schönes.','3','Follower!','1.500','€!','15.500.','Leonard,','Saphira','Leonita!','166','Einwohner!','Club','Leo!','an…','tanzen!','Gym.','auf!','Straßenpennerin.','1','Euro','manchmal.','Sebastian','roten','Traktor','60','Milchkühe!','Muuuh!','selbst','eigentlich.','43','Gefängnis.','Dieb','rein!','drei?']);
const DISP={'Drei':'3','fünfzehnhundert':'1.500','Euro!':'€!','fünfzehntausendfünfhundert.':'15.500.','Hundertsechsundsechzig':'166','dreiundvierzig':'43','sechzig':'60','eins,':'1,','zwei':'2','drei':'3','drei?':'3?','zwölf':'12'};
function capY(t){if(t>=T.EC)return -1;if(t<T.v0)return 1560;if(t<T.v1)return 1700;
 if(t>T.j0-0.1&&t<T.j1)return 1460;return 1330;}

function frame(t){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 let [cx,cy,z]=cam(t);cx=clamp(cx,540/z,1080-540/z);cy=clamp(cy,960/z,1920-960/z);
 let shx=0,shy=0;for(const st of[T.clubLand]){const u=t-st;if(u>0&&u<0.45){shx+=Math.sin(u*90)*12*(1-u/0.45);shy+=Math.cos(u*70)*8*(1-u/0.45);}}
 ctx.save();ctx.translate(540+shx,960+shy);ctx.scale(z,z);ctx.translate(-cx,-cy);
 drawTown(t);
 dust(CLUBP[0]-10,CLUBP[1]-30,t,T.clubLand,16,130);
 for(const b of NEW11){if(t>=b.t0&&t<b.land+1.8){const[sx,sy]=b.spot;let bx,by,al=1;
   if(t<b.land){const u=easeOut((t-b.t0)/(b.land-b.t0));bx=sx+(1-u)*60;by=sy-(1-u)*600;}
   else{const u=ease((t-b.land-0.8)/1.0);bx=sx-u*160;by=sy-u*620;al=1-clamp((t-b.land-1.1)/0.7,0,1);}
   ctx.save();ctx.globalAlpha=al;balloon(bx,by-14,0.6,t*2+sx);ctx.restore();}}
 if(t>T.n0-0.2&&t<T.j0){for(const b of NEW11)if(t>=b.land)tag(b.tag,b.spot[0],b.spot[1]-62,0.85,pop(t,b.land,0.25));}
 if(t>T.clubLand+0.2&&t<T.saph-0.2)bubble(CLUBP[0]+60,CLUBP[1]-260,pop(t,T.clubLand+0.2,0.35)*0.85,'🎉 Mein Club!',26);
 if(t>T.saph-0.1&&t<T.leon0-0.2){const b=NEW11[1];bubble(b.spot[0]+30,b.spot[1]-170,pop(t,T.saph,0.35)*0.85,'🏋️ Ein Gym bitte!',26);}
 if(t>T.leon0-0.1&&t<T.seb-0.2){const b=NEW11[2];bubble(b.spot[0]+30,b.spot[1]-170,pop(t,T.leon0,0.35)*0.85,'🥫 1 € am Tag!',26);}
 if(t>T.seb-0.1&&t<T.j0-0.2){const p=[FARMP[0]-120,FARMP[1]+70];person(p[0],p[1],'#57C26A',1);tag('@sebastian_kauschinger',p[0],p[1]-62,0.8,pop(t,T.seb,0.3));
  if(t>T.muh-0.1)stamp('60 🐄',FARMP[0]+150,FARMP[1]-120,t,T.muh,-0.08,56,'#E5483F');}
 ctx.restore();
 moneyCard(t);coins(t);
 if(t>T.kasse1-0.1&&t<T.n0-0.3)stamp('15.500 € ✅',540,470,t,T.kasse1,-0.08,90,'#2FA84F');
 if(t>T.clubLand-0.1&&t<T.saph-0.3)yelPill('🎉 CLUB LEO ERÖFFNET!',540,420,pop(t,T.clubLand-0.1,0.35),58,'#fff');
 if(t>T.gym-0.1&&t<T.leon0-0.3)stamp('NOTIERT! 📝',540,450,t,T.gym,-0.08,80,'#2FA84F');
 if(t>T.leon0-0.1&&t<T.seb-0.3)yelPill('🥫 STRASSENPENNERIN · +1 €/TAG',540,420,pop(t,T.leon0,0.35),46,'#fff');
 if(t>T.manch-0.1&&t<T.seb-0.3)bubble(300,620,pop(t,T.manch,0.35),'😅 Mehr als ich…',34);
 if(t>T.trak-0.1&&t<T.j0-0.3)yelPill('🚜 ROTER TRAKTOR',540,420,pop(t,T.trak,0.35),56,'#fff');
 if(t>T.muh-0.1&&t<T.j0-0.3)stamp('MUUUH! 🐄',540,560,t,T.muh,-0.08,96,'#E5483F');
 if(t>T.selbst-0.1&&t<T.j0-0.3)yelPill('💸 Selbst bezahlt… schade 😏',540,700,pop(t,T.selbst,0.35),44);
 jailCard(t);
 const cover=t<T.v1||(t>T.j0&&t<T.j1)||t>=T.EC;
 if(!cover)bottomPill(t,1);
 if(t>=T.v1-0.3)hud(t);
 intro(t);suspects(t);
 captions(t);
 ending(t);
}
window.init=async function(words,res4){
 IMG.plateC=await load('plateC.jpg');IMG.plateD=await load('plateD11.jpg');IMG.occ=await load('occ_fw.png');IMG.occBBI=await load('occ_bbi.png');
 IMG.bruno=await load('bruno_big.png');IMG.pj=await load('bruno_pj.png');
 WORDS=words.map(w=>({...w,d:DISP[w.w]||w.w,key:w.w}));
 END=WORDS[WORDS.length-1].e+2.6;RES=res4;buildPhrases();
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

 NEW9=F9_NEW.map((n,i)=>({name:n,spot:take(),land:-1,shirt:SHIRTS[(i*3+5)%SHIRTS.length]}));
 NEW10=F10_NEW.map((n,i)=>({name:n,spot:take(),land:-1,shirt:SHIRTS[(i*4+1)%SHIRTS.length]}));
 // --- Folge 11 ---
 T.spuren=w('Spuren!')-0.1;T.offen=w('offen!')-0.2;T.v0=w('Ich')-0.15;
 T.s1=w('Fuchs.')-0.2;T.s2=w('Waschbär.')-0.2;T.s3=w('Elster.')-0.2;T.werwar=w("war's?")-0.2;T.schreibt=w('Schreibt');T.zwoelf=w('zwölf');T.v1=w('So…')-0.1;
 T.m0=w('Drei');T.plus=w('Plus');T.kasse1=w('fünfzehntausendfünfhundert.');T.m1=w('Neu')-0.1;
 const c0=w('Drei')+0.1,c1=w('Euro!')+0.2;COINS11=[];for(let i=0;i<3;i++){const t1=lerp(c0+0.3,c1,i/2);COINS11.push({t0:t1-0.5,t1,x:300+i*240,y:1500});}
 LEOB=[420,1218];const sp1=[CLUBP[0]+110,CLUBP[1]+20],sp2=take();
 const nn=['Leonard,','Saphira','Leonita!'];
 NEW11=F11_NEW.map(([n,tg,sh],i)=>{const l=w(nn[i])+0.05;return{name:n,tag:tg,spot:[sp1,sp2,[LEOB[0]+4,LEOB[1]+4]][i],land:l,t0:l-0.7,shirt:sh};});
 T.n0=NEW11[0].land;
 T.clubDrop=w('eröffnet')-0.3;T.clubLand=w('Leo!')-0.05;T.party=w('Licht')-0.1;
 DANCERS=[[CLUBP[0]+60,CLUBP[1]+40],[CLUBP[0]+150,CLUBP[1]+55],[CLUBP[0]+95,CLUBP[1]+75],[CLUBP[0]+190,CLUBP[1]+30]];
 T.saph=w('Saphira',2);T.gym=w('Schreib');T.leon0=w('Leonita…');T.manch=w('Mehr');
 T.seb=w('Sebastian');T.trak=w('roten');T.kuehe=w('sechzig');T.muh=w('Muuuh!');T.selbst=w('selbst');
 T.j0=w('Noch')-0.15;T.dieb=w('Dieb');T.j1=w('Also…')-0.15;
 T.EC=w('Also…')-0.15;T.e1=w('eins,',2);T.e2=w('zwei',2);T.e3=w('drei?');
 T.kPulse=[T.kasse1,...COINS11.map(c=>c.t1)];T.ePulse=NEW11.map(b=>b.land);T.cardSpans=[];
 CAM=[[0,540,1000,1.0],[T.v1-0.1,540,1000,1.0],[T.v1+0.2,560,1000,1.1],[T.m1-0.2,560,1000,1.1],[T.n0-0.3,380,1250,1.45],[T.clubDrop-0.2,300,1250,1.6],
  [T.saph-0.2,330,1250,1.6],[T.leon0-0.2,420,1150,1.7],[T.seb-0.4,420,1150,1.7],[T.seb+0.2,FARMP[0]+30,FARMP[1]-10,1.8],[T.j0,FARMP[0]+30,FARMP[1]-10,1.8],[T.j1,560,1050,1.1],[END,540,1100,1.1]];
 await document.fonts.load(`900 40px Inter`);await document.fonts.load(`40px 'Noto Color Emoji'`,'🏠');
 return [PHRASES.length,END];
};
window.frame=frame;
