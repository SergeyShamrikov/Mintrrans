;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.menu();
			self.table_open();
			self.help_box();
			self.add_form();
			self.tabs_box();
			self.add_tabs();
			
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

		},

		help_box : function(){

		    $(".hilp_button_ins").on('click', function () {
  			 $(this).parent().toggleClass("hilp_active");
            });

            $(".ico-close").on('click', function () {
  			 $(this).closest(".hilp_active").removeClass("hilp_active");
            });

            $(document).on('click', function (event) {
            	if (!$(event.target).closest('.hilp_button').length){
            		$(".hilp_active").removeClass("hilp_active"); 
            	}
            });

		},


		add_form : function(){

			$('.content_box').on('click','.delete',function() {
			$(this).parents('.clon_cont').empty();			
			});

			$('.content_box').on('click','.add',function() {
			var clon_cont = $(this).prev('.clon_cont').clone();	
			$(this).parents('.add_form').prepend(clon_cont);			
			});

		},

		add_tabs : function(){

		    $('.add_tabs').click(function() {
				
				var tabscol = $('.tabs__caption').find('li').length;
					tabscol = tabscol + 1;
			$(this).prev('.tabs__caption').append('<li class="tabs_buton">' + tabscol + '</li>');
			var clon_tabs = $('.clon_tabs>div').clone();	
			$(this).parents('.tabs').append(clon_tabs);
			
			});
			

		},

		tabs_box : function(){

		    $(function() {

			  $('ul.tabs__caption').on('click', 'li.tabs_buton:not(.active)', function() {
			    $(this)
			      .addClass('active').siblings().removeClass('active')
			      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
			  });
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