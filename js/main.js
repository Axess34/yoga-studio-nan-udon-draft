const b=document.getElementById('burger'),l=document.getElementById('links');
b&&b.addEventListener('click',()=>{l.classList.toggle('open');b.classList.toggle('x')});
l&&l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{l.classList.remove('open');b.classList.remove('x')}));
const y=document.getElementById('yr');y&&(y.textContent=new Date().getFullYear());
