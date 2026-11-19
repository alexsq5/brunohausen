const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const words=JSON.parse(fs.readFileSync('words10.json','utf8'));const res4=JSON.parse(fs.readFileSync('res4.json','utf8'));
const b=await chromium.launch({args:['--allow-file-access-from-files']});const pg=await b.newPage({viewport:{width:1080,height:1920}});
pg.on('pageerror',e=>console.log('ERR',e.message));
await pg.goto('file://'+process.cwd()+'/render10.html');await pg.evaluate(w=>window.init(w[0],w[1]),[words,res4]);
await pg.evaluate(()=>{
 const t=T.farmLand+2;
 captions=()=>{};hud=()=>{};bottomPill=()=>{};yelPill=()=>{};tag=()=>{};bubble=()=>{};stamp=()=>{};cam=()=>[CASP[0]-40,CASP[1]-250,1.4];frame(t);
 let g=ctx.createRadialGradient(540,1000,380,540,1000,1250);g.addColorStop(0,'rgba(10,30,40,0)');g.addColorStop(1,'rgba(10,30,40,.55)');ctx.fillStyle=g;ctx.fillRect(0,0,1080,1920);
 g=ctx.createLinearGradient(0,0,0,450);g.addColorStop(0,'rgba(15,30,45,.35)');g.addColorStop(1,'rgba(15,30,45,0)');ctx.fillStyle=g;ctx.fillRect(0,0,1080,450);
 const gl=ctx.createRadialGradient(540,960,20,540,960,380);gl.addColorStop(0,'rgba(255,225,110,.8)');gl.addColorStop(1,'rgba(255,225,110,0)');ctx.fillStyle=gl;ctx.fillRect(120,560,840,800);
 
 nightcap(250,880,1.0,-0.3);
 bigBruno(540,1950,0.85,true,0,false);
 ctx.save();ctx.font=`900 118px ${F}`;const lab='FOLGE 10';const lw=ctx.measureText(lab).width+130;
 rr(540-lw/2,240,lw,170,85);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=16;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(lab,540,332);ctx.restore();
 strokeText('BRUNOHAUSEN',540,495,132,'#fff',NAVY,30);
 strokeText('Die Mütze gehört MIR! 😳',540,640,64,YEL,NAVY,18);
 strokeText("…und das Casino kommt! 🎰",540,1330,62,'#fff',NAVY,18);
});
await pg.screenshot({path:'/home/claude/w10/cover_folge10_neu.png'});await b.close();})();
