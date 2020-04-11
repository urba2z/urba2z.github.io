const slides=document.querySelectorAll('.slider-item'),prev=document.getElementById('prevSlide'),next=document.getElementById('nextSlide');let slideIndex=1;showSlides(slideIndex);function showSlides(n){if(n<1){slideIndex=slides.length}
else if(n>slides.length){slideIndex=1}
for(let i=0;i<slides.length;i++){slides[i].style.display='none'}
slides[slideIndex-1].style.display='flex'}
function plusSlides(n){showSlides(slideIndex+=n)}
function currentSlide(n){showSlides(slideIndex=n)}
prev.onclick=function(){plusSlides(-1)}
next.onclick=function(){plusSlides(1)}