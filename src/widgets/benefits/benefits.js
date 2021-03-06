import Swiper from 'swiper/js/swiper.js';

export default function benefitSlider() {

    return {
        init: () => {
            var benefits = new Swiper('.benefit-swiper', {
                spaceBetween: 20,
                loop: true,
                speed: 1500,
                centeredSlides: true,
                
                // pagination: '.swiper-pagination',
                // paginationClickable: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  navigation: {
                    nextEl: '.benefit-swiper .swiper-button-next',
                    prevEl: '.benefit-swiper .swiper-button-prev',
                },
                  
                breakpoints: {
                    320:{
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2.3,
                        
                    },

                }
            }, 500);
            $('body').on('click','.swiper-button-disabled',(e)=>{
              e.preventDefault();
              return false;
            });
        },

    }
}