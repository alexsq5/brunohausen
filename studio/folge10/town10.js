function drawTown(t){
 ctx.drawImage(IMG.plateD,0,0);
 feuerwehr(472,900);ctx.drawImage(IMG.occ,280,700);doener(170,1068);
 if(false){const sa=1-ease((t-T.land+0.25)/0.25);if(sa>0){ctx.save();ctx.globalAlpha=sa;radSign(890,800,10,-10);ctx.restore();}}
 {const yoff=0;
  if(false){const sh=0.3+0.7*ease(t/T.land);ctx.save();ctx.globalAlpha=0.35*sh;ctx.beginPath();ctx.ellipse(AKWP[0]+30,AKWP[1]-40,150*sh,60*sh,0,0,7);ctx.fillStyle='#000';ctx.fill();ctx.restore();}
  akw(AKWP[0],AKWP[1]+yoff,t);}
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
 for(const b of NEW9)D.push([b.spot[1],()=>person(b.spot[0],b.spot[1],b.shirt,1)]);
 EXTRA10(t,D);
 D.sort((a,b)=>a[0]-b[0]);D.forEach(d=>d[1]());

}
