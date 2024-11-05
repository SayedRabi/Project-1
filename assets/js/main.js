$(document).ready(function($){
	"use strict";
	
	

	// WOW Js Active
	new WOW().init();
	 $('.background').owlCarousel({
		items:1,
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		autoplay:false
	});

	$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
		time: 2000,
		
	});	
	
	$('.gallery-list li').on('click',function(){
		$('.gallery-list li').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		//console.log(selector);
		$('.gallery').isotope({
			filter:selector
		});
	});
	
	$('.feedback').owlCarousel({
		items:1,
		loop:true,
        nav:true,
		dot:false,
		navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		mouseDrag: false,
	});
	

	



}(jQuery));