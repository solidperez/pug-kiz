import Swiper from 'swiper/js/swiper.js';

export default function swiperCustom() {

    return {
        init: () => {
            var sliders = $('.swiper-custom')
            if (sliders) {
                [].map.call(sliders, function (items, index) {
                    var classlist = items.classList[0]
                    var itemclass = $(items).addClass(classlist + index)
                    var item = $(items).find('.swiper-pagination').addClass(classlist + index)
                    var nextitem = $(items).find('.swiper-button-next').addClass(classlist + index)
                    var previtem = $(items).find('.swiper-button-prev').addClass(classlist + index)
                    var slideitems = $(items).find('.swiper-wrapper').data('slide');
                    if(!$(items).find('.swiper-wrapper').data('space') == undefined || !$(items).find('.swiper-wrapper').data('space') == ''){
                        var itemSpacing = $(items).find('.swiper-wrapper').data('space');
                        
                    }
                    else{
                        var itemSpacing = 0;
                    
                    }
                    
                    var swiperCustom = new Swiper(itemclass, {
                        spaceBetween: itemSpacing,
                        loop: false,
                        speed: 1500,
                        centeredSlides: false,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        pagination: {
                            el: item,
                            clickable: true,
                          },
                        navigation: {
                            nextEl: nextitem,
                            prevEl: previtem,
                        },

                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: slideitems,
                            },
                        },

                    });
                    if ($(items).find('.swiper-slide').length < 2) {
                        $(items).parent().addClass('disable-carousel');
                    }
                });
            }
        },
    }
}
