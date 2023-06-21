var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $('.gallery_slider').slick({
            speed: 300,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<button class="slick-arrow next"><img src="https://motohabhelp.com.ua/wp-content/themes/kossa/img//slider-next.svg"></button>',
            prevArrow: '<button class="slick-arrow prev"><img src="https://motohabhelp.com.ua/wp-content/themes/kossa/img//slider-prev.svg"></button>',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                }
              ]
        });

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)
