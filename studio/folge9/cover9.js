const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const words=JSON.parse(fs.readFileSync('words.json','utf8'));const res4=JSON.parse(fs.readFileSync('res4.json','utf8'));
const b=await chromium.launch({args:['--allow-file-access-from-files']});const pg=await b.newPage({viewport:{width:1080,height:1920}});
pg.on('pageerror',e=>console.log('ERR',e.message));
await pg.goto('file://'+process.cwd()+'/render.html');await pg.evaluate(w=>window.init(w[0],w[1]),[words,res4]);
await pg.evaluate(()=>{
 const t=30;
 captions=()=>{};hud=()=>{};bottomPill=()=>{};yelPill=()=>{};tag=()=>{};bubble=()=>{};floatText=()=>{};stamp=()=>{};
 const oldDoor=door,oldLove=loveMoney,oldPoll=pollCard;door=()=>{};loveMoney=()=>{};pollCard=()=>{};coins=()=>{};moneyCard=()=>{};
 cam=()=>[AKWP[0]-20,560,1.9];frame(t);
 // Tür groß links hinten
 ctx.fillStyle='rgba(10,20,35,.35)';ctx.fillRect(0,0,1080,1920);
 ctx.save();ctx.translate(540,760);ctx.scale(0.95,0.95);ctx.translate(-540,-930);
 const cx=540,cy=930,dw=380,dh=600;
 rr(cx-300,cy-360,600,760,26);ctx.fillStyle='#BFC6D1';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=NAVY;ctx.stroke();
 for(let i=0;i<7;i++){ctx.fillStyle=i%2?NAVY:YEL;ctx.fillRect(cx-300+i*86,cy+360,86,40);}
 rr(cx-dw/2,cy-dh/2,dw,dh,14);ctx.fillStyle='#05080d';ctx.fill();
 ctx.save();rr(cx-dw/2,cy-dh/2,dw,dh,14);ctx.clip();const gl=ctx.createRadialGradient(cx,cy+60,20,cx,cy+60,330);gl.addColorStop(0,'rgba(255,230,120,.85)');gl.addColorStop(1,'rgba(255,230,120,0)');ctx.fillStyle=gl;ctx.fillRect(cx-dw/2,cy-dh/2,dw,dh);
 for(let i=0;i<9;i++)bill(cx-110+(i%3)*80,cy+210-Math.floor(i/3)*30,((i*13)%7-3)*0.06,1);ctx.restore();
 // offene Tür
 const ang=1.25,vis=Math.cos(ang),lw=dw*vis;ctx.save();ctx.translate(cx-dw/2,0);ctx.beginPath();ctx.moveTo(0,cy-dh/2);ctx.lineTo(lw,cy-dh/2-Math.sin(ang)*40);ctx.lineTo(lw,cy+dh/2+Math.sin(ang)*40);ctx.lineTo(0,cy+dh/2);ctx.closePath();ctx.fillStyle='#98A2B2';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=NAVY;ctx.stroke();ctx.restore();
 ctx.restore();
 // fliegende Scheine
 const P=[[120,300,.4,1.3],[930,260,-.5,1.2],[200,620,.9,1.1],[880,640,-.2,1.4],[80,980,-.7,1.2],[990,960,.6,1.3],[300,180,-.3,1.0],[760,150,.7,1.1],[60,1300,.3,1.2],[1010,1280,-.4,1.2]];
 P.forEach(([x,y,r,s])=>bill(x,y,r,s*1.4));
 // Schlafmütze rechts
 nightcap(830,1120,1.25,0.35);
 ctx.save();ctx.beginPath();ctx.arc(830,1095,150,0,7);ctx.lineWidth=10;ctx.strokeStyle='rgba(255,210,61,.9)';ctx.stroke();ctx.restore();
 strokeText('?',960,940,130,YEL,NAVY,20);
 // Bruno groß unten, staunend
 bigBruno(430,2080,1.05,true,0,false);
 // große Augen (Glanz) -- Text
 ctx.save();ctx.font=`900 118px ${F}`;const lab='FOLGE 9';const lw2=ctx.measureText(lab).width+130;
 rr(540-lw2/2,70,lw2,170,85);ctx.fillStyle=YEL;ctx.fill();ctx.lineWidth=16;ctx.strokeStyle=NAVY;ctx.stroke();
 ctx.fillStyle=NAVY;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(lab,540,162);ctx.restore();
 strokeText('BRUNOHAUSEN',540,320,120,'#fff',NAVY,28);
 strokeText('DAS GELD IST ZURÜCK! 💰',540,1300,66,YEL,NAVY,18);
 strokeText('…aber wem gehört die Mütze? 🧢',540,1390,54,'#fff',NAVY,16);
});
await pg.screenshot({path:'cover_folge9.png'});await b.close();})();
