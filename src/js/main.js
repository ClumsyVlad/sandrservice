$(document).ready(function() {
    var ServicesSwiper = new Swiper('#services-slider', {
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,    
        },
        loop: true,
        grabCursor: true 
    });

    // var ClientsSwiper = new Swiper('#clients-slider', {
    //     speed: 400,
    //     spaceBetween: 50,
    //     slidesPerView: 3,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     loop: true,
    //     grabCursor: true 
    // });
})