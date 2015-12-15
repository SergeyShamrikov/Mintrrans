;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				Simple image gallery. Uses default settings
		------------------------------------------------ */
		
<<<<<<< HEAD
			if($('.fancybox').length){
				$('.fancybox').fancybox();
			}

=======
		if($('.fancybox').length){

			$('.fancybox').fancybox();
		
		}
>>>>>>> origin/master
		
        /* ------------------------------------------------
				End Simple image gallery. Uses default settings
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				phone masked input
		------------------------------------------------ */
<<<<<<< HEAD
			
			if($('#phone').length){
				$("#phone").mask("+7(999) 999-9999");
			}
=======
		
		if($("#phone").length){
			
			$("#phone").mask("+7(999) 999-9999");
			
		}
>>>>>>> origin/master

        /* ------------------------------------------------
				End phone masked input
		------------------------------------------------ */

	});

})(jQuery);