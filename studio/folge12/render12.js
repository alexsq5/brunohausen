const {chromium}=require('playwright');const fs=require('fs');const {spawn}=require('child_process');
(async()=>{
 const mode=process.argv[2];const words=JSON.parse(fs.readFileSync(process.env.WORDS||'words.json','utf8'));const res4=JSON.parse(fs.readFileSync('res4.json','utf8'));
 const b=await chromium.launch({args:['--allow-file-access-from-files']});
 const pg=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
 pg.on('console',m=>console.log('PAGE',m.text()));pg.on('pageerror',e=>console.log('ERR',e.message));
 await pg.goto('file://'+process.cwd()+'/'+(process.env.HTML||'render11.html')+'');
 console.log('phrases',await pg.evaluate(w=>window.init(w[0],w[1]),[words,res4]));
 if(mode==='stills'){
  const ts=process.argv[3].split(',').map(Number);
  for(const t of ts){await pg.evaluate(t=>window.frame(t),t);await pg.screenshot({path:`${process.env.SD||"stills"}/s_${t}.jpg`,type:'jpeg',quality:85});}
 } else {
  const [t0,t1,out]=[+process.argv[3],+process.argv[4],process.argv[5]];
  const ff=spawn('ffmpeg',['-y','-v','error','-f','image2pipe','-framerate','30','-c:v','mjpeg','-i','-','-c:v','libx264','-preset','veryfast','-crf','18','-pix_fmt','yuv420p','-r','30',out]);
  ff.stderr.on('data',d=>process.stderr.write(d));
  const n=Math.round((t1-t0)*30);
  for(let i=0;i<n;i++){const t=t0+i/30;await pg.evaluate(t=>window.frame(t),t);
   const buf=await pg.screenshot({type:'jpeg',quality:92});
   if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));}
  ff.stdin.end();await new Promise(r=>ff.on('close',r));
 }
 await b.close();
})();
