import cv2,numpy as np,sys
ts=sys.argv[1].split(',');ims=[cv2.resize(cv2.imread(f'st/s_{t}.jpg'),(360,640)) for t in ts]
for im,t in zip(ims,ts):cv2.putText(im,t,(8,630),0,0.8,(0,0,255),2)
cv2.imwrite('/home/claude/bruno7/sheet.jpg',np.hstack(ims))
