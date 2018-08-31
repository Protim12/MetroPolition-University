var tpj=jQuery;               // MAKE JQUERY PLUGIN CONFLICTFREE
  tpj.noConflict();

  tpj(document).ready(function() {

       if (tpj.fn.cssOriginal!=undefined)   // CHECK IF fn.css already extended
       tpj.fn.css = tpj.fn.cssOriginal;

        tpj('.fullwidthbanner').revolution(
        {    
            delay:5000,                                                
            startheight:400,                            
            //startwidth:890,
            touchenabled:"on",                      
            onHoverStop:"on",

            shadow:1,
            fullWidth:"on"    

        });
});


(function($){
	'use strict';
    
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	
	$(document).ready(function() {
        //nav mobile
        
        $('.showhide').click(function () {
            if ($(".mobinav:first").is(":hidden")) {
                $(".mobinav").slideToggle();
            } else {
                $(".mobinav").slideToggle();
            }
        });
        
        $('.cont-form input.wpcf7-text, .cont-form .wpcf7-textarea').focusin(function () {
            $(this).parent().parent().find('label').css({'font-weight': 'bold', 'color': '#19b4ed'});
        });
        $('.cont-form input.wpcf7-text, .cont-form .wpcf7-textarea').focusout(function () {
            $(this).parent().parent().find('label').css({'font-weight': 'normal', 'color': '#828282'});
        });
        
        /*=====================
				WOW JS
		======================*/

		var wow = new WOW(
			{    // distance to the element when triggering the animation (default is 0)
				mobile:       false,       // trigger animations on mobile devices (default is true)
				live:         true,       // act on asynchronously loaded content (default is true)
				callback:     function(box) {
					// the callback is fired every time an animation is started
					// the argument that is passed in is the DOM node being animated
				},
				scrollContainer: null // optional scroll container selector, otherwise use window
			}
		);
		wow.init();
       
        /*=====================
			PARALLAX JS
		======================*/
		$(window).stellar();
        
        $("a[rel^='prettyPhoto']").prettyPhoto();


		/*====SPONSOR CAROUSEL====*/

		$('.sponsor-slider').owlCarousel({
			items: 6,
			loop: true,
			margin: 15,
            dots: false,
			nav:true,
			navText: [
			"<span class='fa fa-angle-left'></span>",
			"<span class='fa fa-angle-right'></span>"
			],
				
			responsive: {
				0: {
					items: 7,
					margin: 15,
				},
				768: {
					items: 7,
					margin: 15,
				},
				992: {
					items: 7,
					margin: 15,
				}
			}
		});
	});

	$(window).load(function(){

		// Preloader
		$('.preloader').fadeOut('3000');
	});
	
})(jQuery);