$(document).ready(function() {
    var ServicesSwiper = new Swiper('.main-slider', {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,    
        },
        // loop: true,
        grabCursor: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
        }
    });

})