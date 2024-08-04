
var productSlider = new Swiper('.big-card', {
    spaceBetween: 0,
    centeredSlides: false,
    loop:false,
    loopedSlides: 3,
    resizeObserver:true,
});
var productThumbs = new Swiper('.small-card', {
    spaceBetween: 13,
    centeredSlides: false,
    loop: false,
    slideToClickedSlide: true,
    slidesPerView: 3,
    loopedSlides: 3,    
    navigation: {
        nextEl: '.block15-next',
        prevEl: '.block15-prev',
      },
});
productSlider.controller.control = productThumbs;
productThumbs.controller.control = productSlider;