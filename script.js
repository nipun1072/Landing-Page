// SWIPPER JS 
const carousel=document.querySelector(".carousel");
const arrowBtns=document.querySelectorAll(".item-wrapper i");
const firstSlideWidth=carousel.querySelector(".slide").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click",()=>{
        carousel.scrollLeft += btn.id === "left" ? -firstSlideWidth : firstSlideWidth;
    });
});

// SCROLL TO TOP JS 
const scrollTop=document.querySelector(".scroll-top");
window.addEventListener("scroll",function(){
  scrollTop.classList.toggle("active",this.window.scrollY>500);
});

scrollTop.addEventListener("click",()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});

 // SCROLL JS

ScrollReveal({ 
  reset: true,
  distance:'50px',
  duration: 2000,
  delay:200
});

 ScrollReveal().reveal('.slogan, .card-wrapper,.category-head,.section-head',{ origin: 'top'});
 ScrollReveal().reveal('.right',{ origin: 'right'});
 ScrollReveal().reveal('.left,.category-wrapper',{ origin: 'left'});
 ScrollReveal().reveal('.card-items,.feature-card-wrapper',{ origin: 'bottom'});