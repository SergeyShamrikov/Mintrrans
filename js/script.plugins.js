;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				Simple image gallery. Uses default settings
		------------------------------------------------ */
		
			if($('.fancybox').length){
				$('.fancybox').fancybox();
			}

		
        /* ------------------------------------------------
				End Simple image gallery. Uses default settings
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				phone masked input
		------------------------------------------------ */
			
			if($('#phone').length){
				$("#phone").mask("+7(999) 999-9999");
			}

        /* ------------------------------------------------
				End phone masked input
		------------------------------------------------ */

	});

})(jQuery);