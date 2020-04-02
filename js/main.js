$(document).ready(function() {
    var ServicesSwiper = new Swiper('#services-slider', {
        speed: 400,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,    
        },
    });

    var ClientsSwiper = new Swiper('#clients-slider', {
        speed: 400,
        spaceBetween: 50,
        slidesPerView: 3,
        autoplay: {
            delay: 5000,
        }
    });
})