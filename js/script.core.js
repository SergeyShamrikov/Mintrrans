;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.menu();
			self.table_open();
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

		},



		table_open : function(){

		    $(".box .block_ins").show();
            $(".closed .block_ins").hide();

            $(".drop_menu").click(function(){
                $(this).toggleClass("show_icon").closest(".open_box").toggleClass("open_bg").next(".table_box_ins").find(".block_ins").stop().slideToggle("medium");
            });

		}

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});



})(jQuery);