const review = new Swiper('.swiper-block3', {
    loop: false,

    navigation: {
        nextEl: '.block3-next',
        prevEl: '.block3-prev',
      },
  
    pagination: {
      el: '.swiper-pagination-block3',
      clickable: true
    },
  
    breakpoints: {
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        767: {
          spaceBetween: 16,
          slidesPerView: 2,
        },
        1199: {
          spaceBetween: 24,  
          slidesPerView: 3,
        },
  }
  });