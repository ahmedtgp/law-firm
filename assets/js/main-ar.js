/*global $,window*/

$(function () {
	'use strict';
	var brandImg = $('.navbar-brand img'), brandSpan = $('.navbar-brand span');
	brandSpan.css({'padding-left': '35px'});
// resize Navbar on Reload
	if ($('.navbar').css('height') === '50px') {
		brandImg.css({'max-height': '50px', 'max-width': '50px', 'top': '0'});
		brandSpan.css({'padding-right': '50px'});
	}
// resize Navbar on Scroll
	$(window).scroll(function () {
		if ($('.navbar').css('height') === '50px') {
			brandImg.css({'max-height': '50px', 'max-width': '50px', 'top': '0'});
			$('.navbar-brand span').css({'padding-right': '50px'});
		} else {
			brandImg.css({'max-height': '70px', 'max-width': '70px', 'top': '-20%'});
			brandSpan.css({'padding-right': '80px'});
		}
		
	});

});

