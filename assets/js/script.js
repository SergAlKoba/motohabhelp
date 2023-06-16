var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $(".scroll_link").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)

