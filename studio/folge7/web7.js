const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();
const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/brunohausen/index.html');await p.waitForTimeout(1000);
await p.evaluate(()=>{const f=[-1.2,2.2];goal={x:(f[0]-f[1])*0.866,y:(f[0]+f[1])*0.5,k:fitK()*1.6};});await p.waitForTimeout(2500);
await (await p.$('#stage')).screenshot({path:'/home/claude/bruno7/w_kh.jpg',type:'jpeg',quality:70});
await p.fill('#findIn','Dome');await p.press('#findIn','Enter');await p.waitForTimeout(2500);
await (await p.$('#stage')).screenshot({path:'/home/claude/bruno7/w_dome.jpg',type:'jpeg',quality:70});
console.log(e,await p.evaluate(()=>[document.getElementById('hFol').textContent,document.getElementById('hPop').textContent,WALK.filter(w=>w.name).length,flatText(WALK.find(w=>w.name==='Dome'))]));await b.close();})();
