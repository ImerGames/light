// swiper init
let swiper_001 = new Swiper("#swiper_001", {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: "#swiper-001-right",
        prevEl: "#swiper-001-left",
    },

    breakpoints: {
        300: {
          slidesPerView: 1,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },
});

let swiper_002 = new Swiper("#swiper_002", {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: "#swiper_002_right",
        prevEl: "#swiper_002_left",
    },

    breakpoints: {
        300: {
          slidesPerView: 1,
        },
        1100:{
            slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },
});

$(document).ready(function(){
    // videojs('video_main', {
    //     controls: true,
    //     autoplay: false,
    //     preload: 'auto'
    // });

    // init mob swiper
    if($(window).width() < 600){
        $(".swiper-init_mob").each(function(){
            let container_s = $(this);
            let _class = $(this).data("init");
            let obj = [];
            container_s.find(".wrapper").each(function(){
                $(this).addClass("swiper-slide");
                obj.push($(this));
            });
            
            container_s.empty();
            container_s.addClass("swiper");
            container_s.addClass(_class);
            container_s.append("<div class='swiper-wrapper'></div>");
            obj.forEach(el => {
                container_s.children(".swiper-wrapper").append(el);
            });
    
            let swiper_mobile = new Swiper(("."+_class).toString(), {
                slidesPerView: 1,
                spaceBetween: 10,
            });
        });
    }
});