const carousels = document.querySelectorAll('.img-carousel');
const prevBtn = document.querySelectorAll('.prev');
const nextBtn = document.querySelectorAll('.next');
let carsouselImages = document.querySelectorAll('.img-carousel div');

//Next Carousel
carousels.forEach((carousel, index)=>{
  
const nextCarousel = () => {
    if(carsouselImages[carsouselImages.length - 1]) {
      carousel.scrollTo(0, 0); 
    } 
      carousel.scrollBy(300, 0);
};

nextBtn[index].addEventListener('click', e => {
  nextCarousel(); 
});

//Prev Carousel
const prevCarousel = () => {
   if(carsouselImages[0]) {
    carousel.scrollTo(4800,0);
   }
    carousel.scrollBy(-300, 0); 
};

prevBtn[index].addEventListener('click', e => {
   prevCarousel(); 
});


// Auto carousel
const auto = true; // Auto scroll
const intervalTime = 5000;
let sliderInterval;


if (auto) {
  sliderInterval = setInterval(nextCarousel, intervalTime);
};

carousel.addEventListener('mouseover', (stopInterval) => {
  clearInterval(sliderInterval);
});

carousel.addEventListener('mouseleave', (startInterval) => {
  if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  }
}); 

//for mobile events
carousel.addEventListener('touchstart', (stopIntervalT) => {
    clearInterval(sliderInterval);
});
carousel.addEventListener('touchend', (startIntervalT) => {
   if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  }
});

//Debounce
var previousCall;
window.addEventListener('resize', () => {
    if (previousCall >= 0) {
        clearTimeout(previousCall);
    } 
    
}); 
});

/**------------- */



