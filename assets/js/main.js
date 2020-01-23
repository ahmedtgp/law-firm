/*global $,location,window*/

$(function () {
	'use strict';
	var brandImg = $('.navbar-brand img');
// resize Navbar on Reload
	if ($('.navbar').css('height') === '50px') {
		brandImg.css({'max-height': '50px', 'max-width': '50px', 'top': '0'});
		$('.navbar-brand span').css({'padding-left': '50px'});
	}
// resize Navbar on Scroll
	$(window).scroll(function () {
		if ($('.navbar').css('height') === '50px') {
			brandImg.css({'max-height': '50px', 'max-width': '50px', 'top': '0'});
			$('.navbar-brand span').css({'padding-left': '50px'});
		} else {
			brandImg.css({'max-height': '70px', 'max-width': '70px', 'top': '-20%'});
			$('.navbar-brand span').css({'padding-left': '80px'});
		}
	});
  
//Centering the content of the Carousel 
    $('#mainCarousel .item').each(function () {
        $(this).css('padding-top', ($(this).height() - $('#mainCarousel .item h1').height()) / 2);
    });
	/*if ($(window).width() <= 768) {
		// Nice Scroll
		$('.navbar-collapse').niceScroll({
			cursorcolor: "#333",
			cursorwidth: "8px",
			cursorborder: "1px solid #555",
			horizrailenabled: false
		});
		$('.navbar-collapse .lang').niceScroll({ on: false });
    }*/
	
/*----Windows Resize Set Up*/
    //Centering the content of the Carousel
    $(window).resize(function () {
		$('#mainCarousel .item').each(function () {
			$(this).css('padding-top', ($(this).height() - $('#mainCarousel .item h1').height()) / 2);
		});
	// resize Navbar on Reload
		if ($('.navbar').css('height') === '50px') {
			brandImg.css({'max-height': '50px', 'max-width': '50px', 'top': '0'});
			$('.navbar-brand span').css({'padding-left': '50px'});
		}
	// resize Navbar on Scroll
		$(window).scroll(function () {
			if ($('.navbar').css('height') === '50px') {
				brandImg.css({'max-height': '50px', 'max-width': '50px', 'top': '0'});
				$('.navbar-brand span').css({'padding-left': '50px'});
			} else {
				brandImg.css({'max-height': '70px', 'max-width': '70px', 'top': '-20%'});
				$('.navbar-brand span').css({'padding-left': '80px'});
			}
		});
		/*if ($(window).width() <= 768) {
		// Nice Scroll
			$('.navbar-collapse ').niceScroll({
				cursorcolor: "#333",
				cursorwidth: "8px",
				cursorborder: "1px solid #555",
				horizrailenabled: false
			});
			$('.navbar-collapse .lang').niceScroll({ on: false });
		}*/
	});		
    
/*============== Plugins Trigger & Main Customs ==============*/
    
// Nice Scroll
    $('body').niceScroll({
        cursorcolor: "#104780",
        cursorwidth: "8px",
        cursorborder: "1px solid #555"
    });
	
//tootlTip 
	$('[data-toggle="tooltip"]').tooltip(); 
	
// Smooth Scroll Start  
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
    // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                    // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');         // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
// Smooth Scroll End 
    
// Main owl Carousel
    $('#mainCarousel .mainCarousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplayTimeout: 3000,
        autoWidth: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
		}
	});

// Sub owl Carousel   
    $('.subCarousel').owlCarousel({
		loop: true,
		autoplay: false,
		video: true,
		responsiveClass: true,
		nav: true,
		dots: false,
		autoWidth: false,
		responsive: {
			0: {
				items: 1
			},
			492: {
				items: 1
			},
			650: {
				items: 2
			},
			1000: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
});

