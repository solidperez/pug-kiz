import Swiper from 'swiper/js/swiper.js';

export default function swiperCustom() {

    return {
        init: () => {
            var sliders = $('.swiper-custom .swiper-wrapper')
        //     if(sliders){
        //     $('.swiper-custom .swiper-wrapper').each(function(i,items){
        //         var items = $(items)
        //         var slideitems = items.data('slide');
        //         var itemSpacing = items.data('space');
        //             var swiperCustom = new Swiper(items.parent(), {
        //                 spaceBetween:itemSpacing,
        //                 loop: false,
        //                 speed: 1500,
        //                 centeredSlides: false,
        //                 slidesPerView: slideitems,
        //                 pagination: '.swiper-pagination',
        //                 paginationClickable: true,
        //                 nextButton: '.swiper-button-next',
        //                 prevButton: '.swiper-button-prev',
        //                 // pagination: {
        //                 //     el: '.swiper-pagination',
        //                 // },
        //                 // navigation: {
        //                 //     nextEl: '.swiper-custom .swiper-button-next',
        //                 //     prevEl: '.swiper-custom .swiper-button-prev',
        //                 // },
        //                 breakpoints: {
        //                     320: {
        //                         slidesPerView: 1,
        //                     },
        //                     991: {
        //                         slidesPerView: slideitems,
        //                         // loopedSlides: 1,
        //                     },
        //                 },

        //             });
        //             if(items.find('.swiper-slide').length < 2){
        //                 items.parent().addClass('disable-carousel');
        //             }
                
        //     })
        // }
            if(sliders){
                [].map.call(sliders, function (items) {
                    var slideitems = $(items).data('slide');
                    var itemSpacing = $(items).data('space');
                    setTimeout(function(){
                        var swiperCustom = new Swiper($(items).parent(), {
                            spaceBetween:itemSpacing,
                            loop: false,
                            speed: 1500,
                            centeredSlides: false,
                            slidesPerView: slideitems,
                            pagination: '.swiper-pagination',
                            paginationClickable: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                           
                            breakpoints: {
                                320: {
                                    slidesPerView: 1,
                                },
                                991: {
                                    slidesPerView: slideitems,
                                    // loopedSlides: 1,
                                },
                            },
    
                        });
                        if($(items).find('.swiper-slide').length < 2){
                            $(items).parent().addClass('disable-carousel');
                        }
                    },500)
                    
                });
            }
        },
    }
}
