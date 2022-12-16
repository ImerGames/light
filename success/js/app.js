// swiper init
let swiper_001 = new Swiper("#swiper_001", {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: "#swiper-001-right",
        prevEl: "#swiper-001-left",
    },
});

let swiper_002 = new Swiper("#swiper_002", {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: "#swiper_002_right",
        prevEl: "#swiper_002_left",
    },
});

$(document).ready(function(){
    // videojs('video_main', {
    //     controls: true,
    //     autoplay: false,
    //     preload: 'auto'
    // });
});