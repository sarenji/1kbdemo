d=document,c={},w=[],p=' ',r=d.getElementById('x').innerHTML.split(/\s+/),n=999
while(b=r.shift()){
  b+=p+r[0];
  (c[b]=c[b]||[]).push(b=r[1])
  w.push(b)
}
while(--n){
  a=c[r[0]+p+(r[0]=r[1])]||w
  d.write((r[1]=a[Math.random()*a.length|0])+p)
}
