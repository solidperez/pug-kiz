import Swiper from 'swiper/js/swiper.js';

export default function newsSlider() {

  return {
    init: () => {
      let conf = {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          1500: {
            allowTouchMove: false,
            spaceBetween: 24,
          },
          992: {
            allowTouchMove: true,
            spaceBetween: 24,
          },
          576:{
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1.11,
            spaceBetween: 16,
          }
        }
      };
      var swiper = new Swiper('.news-slider .swiper-container', conf);

    },

  }
}