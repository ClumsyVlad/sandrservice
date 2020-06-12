// slider function function
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
});
// Ready fucntion //
    // function documentReady (fn) {
    //     if (document.readyState != 'loading'){
    //     fn();
    //   } else {
    //     document.addEventListener('DOMContentLoaded', fn);
    //     mobileBurgeMenu ();
    //   }
    // }  
    
// toggle menu function
function mobileBurgeMenu () {
    const menuBurger = document.querySelector('.header-menu-burger');
    const menuList = document.querySelector('.header-menu-list');
    menuBurger.addEventListener('click', function () {
        menuBurger.classList.toggle('header-menu-burger-active');
        menuList.classList.toggle('header-menu-list-active');
        console.log('burger clicked');
    });

    let prevOffset = 0;
    console.log('prev offset: ' + prevOffset);

    window.addEventListener('scroll', function() {
        const currentOffset = document.body.getBoundingClientRect().top;
        if (currentOffset > prevOffset) {
            console.log('dont close menu');
        } else {
            menuList.classList.remove('header-menu-list-active');
            menuBurger.classList.remove('header-menu-burger-active');
            console.log('close menu');
        }
        console.log('prevOffset: '+ prevOffset + ' ' + 'currentOffset: ' + currentOffset);
        prevOffset = currentOffset;
    });
};
mobileBurgeMenu ();