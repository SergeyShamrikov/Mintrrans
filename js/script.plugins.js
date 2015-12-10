;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */

			$(".box .block_ins").show();
            $(".closed .block_ins").hide();

            $(".drop_menu").click(function(){
                $(this).toggleClass("show_icon").parent("td").parent("tr").toggleClass("open_bg").nextUntil(".open_box").stop().slideToggle("medium");
            });

        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				Table open
		------------------------------------------------ 
			$(".box .block_ins").show();
            $(".closed .block_ins").hide();

            $(".drop_menu").click(function(){
                $(this).toggleClass("show_icon").parent("td").parent("tr").toggleClass("open_bg").parent("tbody").parent("table").parent(".open_box").next().stop().slideToggle("medium");
            });*/

        /* ------------------------------------------------
				End Table open
		------------------------------------------------ */

	});

})(jQuery);