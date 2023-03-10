$(document).ready(function(){
	
	$( '.navbar' ).on( 'affix.bs.affix', function(){
	    if( !$( window ).scrollTop() ) return false;
	});

	
    setTimeout(function() {
        $('body').addClass('loaded');
        	new WOW().init();  
        	$('.navbar.navbar-default').affix({ 
        		offset: {top: 0}
        	});

    }, 3000);

    


	$(".navbar-collapse .navbar-nav>li>a").click(function(){
        $('.navbar-collapse').removeClass('in');
    });
	
	$('.gift-reg-slideset').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]
	});
	
	$('#wedding-nav a[href^="#"], .link-smooth-scroll').on('click', function(event) {	
		var target = $(this.getAttribute('href'));	
		if( target.length ) {
			event.preventDefault();
			var bmoffset = target.offset().top;
			if( bmoffset > '4000' ) {
				$('html, body').stop().animate({
				scrollTop: target.offset().top
				}, 2000);
			}
		else {
			$('html, body').stop().animate({
				scrollTop: target.offset().top
				}, 4000);
			}		
		}	
	});
	
	$('#countdown').countdown({
		
		date: '5 september 2017 23:5'
		
	});

        
    $('#photos a').simpleLightbox({
		closeText:    'X',
		navText:    ['&lsaquo;','&rsaquo;']

	});

	
	$(".form-control").focus(function(){
		$(this).closest(".input-group").addClass("input-group-focus");
		}).blur(function(){
		$(this).closest(".input-group").removeClass("input-group-focus");
	});	


	"use strict";
	$('#submit').click(function(){
		
		var action = $('#contactform').attr('action');
		
		$("#message").fadeOut(200,function() {
			$('#message').hide();

			$('#submit')
			.attr('disabled','disabled');
			
			$.post(action, {
				name: $('#name').val(),
				email: $('#email').val(),
				numberofguests: $('#numberofguests').val(),
				attendto: $('#attendto').val(),
				comments: $('#comments').val()
			},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').fadeIn(200);
				$('.hide').hide(0);
				$('#submit').removeAttr('disabled');
			}
			);
			
		});
		
		return false;
	});
	
}); 


function init_map() {
        var myOptions = {
            zoom: 12,
            center: new google.maps.LatLng(23.779287, 90.421429),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(23.738995, 90.387204)
        });
        infowindow = new google.maps.InfoWindow({
            content: '<strong>Dhaka</strong><br>Elephant Road, Dhaka<br> <br>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
}
