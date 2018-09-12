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
    
    $('.list.one').addClass('list_scale').show().siblings().hide();
    $('.selection-dot').on("click",function(){

        var self=$(this);
        self.addClass('active').siblings().removeClass('active');
        var model =self.attr('data-dot');

        $(".list[data-list="+model+"]").addClass('list_scale').show().siblings().hide();
    });
    $('.list1').addClass('active').children().addClass('child'); //active 1 no. client.
    
    $('.panel-heading').on("click", function(){
        if ( $(this).hasClass('panel-active') ) {
            $(this).removeClass('panel-active');
        } else {
            $('.panel-active').removeClass('panel-active');
            $(this).addClass('panel-active');    
        }
    });
    
    $('.choice-para.para1').show().siblings().hide();
    $('.choice').on("click",function(){
        var sel =$(this);
        sel.addClass('active-choice').siblings().removeClass('active-choice');
        var mod = sel.attr('data-choice');
        
        $(".choice-para[data-para="+mod+"]").show().siblings().hide();
    });
    $('.choice1').addClass('active-choice').children().addClass('active-child');
    
    $('.toggle-dropdown').hide();
    $('.toggle .toggle-float').click(function(){
       $('.toggle-dropdown').slideToggle(); 
    });
    $('.toggle .toggle-float').on("click", function(){
        if ( $(this).hasClass('toggle-active') ) {
            $(this).removeClass('toggle-active');
        } else {
            $('.toggle-active').removeClass('toggle-active');
            $(this).addClass('toggle-active');    
        }
    });
    
    if ($('#toTop').length) {
        var scrollTrigger = 10, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#toTop').addClass('show');
                } else {
                    $('#toTop').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#toTop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    
    $("a[rel^='prettyPhoto']").prettyPhoto();
    
    /*=====================
			PARALLAX JS
		======================*/
		$(window).stellar();

	
	
})(jQuery);