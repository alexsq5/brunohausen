import re,json
def strip(m):
    m=re.sub(r"\nconst HL=new Set\(\[.*?\]\);",'\n',m,flags=re.S)
    m=re.sub(r"\nconst DISP=\{.*?\};",'\n',m,flags=re.S)
    return m.replace("window.frame=frame;","")
m6=strip(open('main6.js').read())
pl=json.load(open('plaza.json'))
m7=strip(open('main7.js').read()).replace('__SPOTS7__',json.dumps(json.load(open('spots7.json')))).replace('__PLAZA__',json.dumps(json.load(open('plaza_fps.json')))).replace('__PLAY__',json.dumps(pl['play']))
src=open('f4.html').read()
head=src[:src.index('const END=94.6;')]
util=src[src.index('const clamp='):src.index('function wt(')]+src[src.index('function rr('):src.index('// ---------- camera ----------')]
open('render.html','w').write(head+'let END=100;\n'+util+'\n'+open('chunks.js').read()+'\n'+open('helpers5.js').read()+'\n'+m6+'\n'+m7+'\n'+open('main8.js').read()+'\n</script></body></html>\n')
