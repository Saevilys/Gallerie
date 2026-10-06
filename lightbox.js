var lb=document.getElementById('lightbox'),lbImg=document.getElementById('lb-img'),lbCap=document.getElementById('lb-cap');
document.querySelectorAll('.card img').forEach(function(img){
  img.addEventListener('click',function(){
    lbImg.src=this.src;
    lbCap.textContent=this.getAttribute('data-cap')||'';
    lb.classList.add('open');
    document.body.style.overflow='hidden';
  });
});
function closeLightbox(){lb.classList.remove('open');document.body.style.overflow=''}
lb.addEventListener('click',function(e){if(e.target===lb)closeLightbox()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLightbox()});
