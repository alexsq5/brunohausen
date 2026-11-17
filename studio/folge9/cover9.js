const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const words=JSON.parse(fs.readFileSync('words.json','utf8'));const res4=JSON.parse(fs.readFileSync('res4.json','utf8'));
const b=await chromium.launch({args:['--allow-file-access-from-files']});const pg=await b.newPage({viewport:{width:1080,height:1920}});
pg.on('pageerror',e=>console.log('ERR',e.message));
await pg.goto('file://'+process.cwd()+'/render.html');await pg.evaluate(w=>window.init(w[0],w[1]),[words,res4]);
await pg.evaluate(()=>{
 const t=T.minus+1.5;
 captions=()=>{};hud=()=>{};bottomPill=()=>{};yelPill=()=>{};tag=()=>{};bubble=()=>{};floatText=()=>{};stamp=()=>{};cam=()=>[AKWP[0]-20,560,1.9];frame(t);
 let g=ctx.createRadialGradient(540,900,380,540,900,1250);g.addColorStop(0,'rgba(10,30,40,0)');g.addColorStop(1,'rgba(10,30,40,.55)');ctx.fillStyle=g;ctx.fillRect(0,0,1080,1920);
 g=ctx.createLinearGradient(0,900,0,1600);g.addColorStop(0,'rgba(15,30,45,0)');g.addColorStop(1,'rgba(15,30,45,.5)');ctx.fillStyle=g;ctx.fillRect(0,900,1080,1020);
 bigBruno(540,2050,0.85,true,0,false);
 ctx.save();ctx.font=`900 118px ${F}`;const lab='FOLGE 9';const lw=ctx.measureText(lab).width+130;
 rr(540-lw/2,960,lw,170,85);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=16;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(lab,540,1052);ctx.restore();
 strokeText('BRUNOHAUSEN',540,1225,132,'#fff',NAVY,30);
 strokeText('Das Atomkraftwerk steht! ☢️',540,1365,64,YEL,NAVY,18);
 strokeText('…und die Tür geht auf 🔑',540,1455,62,'#fff',NAVY,18);
});
await pg.screenshot({path:'cover_folge9.png'});await b.close();})();
