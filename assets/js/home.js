var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $('.partners_slider').slick({
            speed: 300,
            infinite: true,
            slidesToShow: 1,
            variableWidth: true,
            nextArrow: '<button class="slick-arrow next"><img src="https://motohubhelp.com.ua/wp-content/themes/kossa/img/slider-next.svg"></button>',
            prevArrow: '<button class="slick-arrow prev"><img src="https://motohubhelp.com.ua/wp-content/themes/kossa/img/slider-prev.svg"></button>',
        });

        $('.gallery_slider').slick({
            speed: 300,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<button class="slick-arrow next"><img src="https://motohubhelp.com.ua/wp-content/themes/kossa/img/slider-next.svg"></button>',
            prevArrow: '<button class="slick-arrow prev"><img src="https://motohubhelp.com.ua/wp-content/themes/kossa/img/slider-prev.svg"></button>',
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

        jcf.replaceAll();

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)
