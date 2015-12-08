;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.menu();
		},

		windowLoad: function(){

			var self = this;


		},

		/**
		**	Purpose code
		**/

		menu : function(){

		    $('#nav_btn').on("click",function(){

		    	$("body").toggleClass("small_menu");
		    	$(this).toggleClass("active");

		    });

		}

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

	$(window).scroll(function(){

		Core.windowScroll();
		
	});


})(jQuery);