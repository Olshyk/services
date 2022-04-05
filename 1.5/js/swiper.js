function initSlider() {
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.25,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
     375: {
        slidesPerView: 1.5,
      },
     450: {
        slidesPerView: 1.75,
      },
     540: {
        slidesPerView: 2.1,
      },
     620: {
        slidesPerView: 2.25,
      },
    }
  });
  }
 
  
if(window.innerWidth < 768) {
  initSlider()
}