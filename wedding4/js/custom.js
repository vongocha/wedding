var $ = jQuery.noConflict();
$(document).ready(function() {
   "use strict";

  $(".animsition").animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-up-sm',
	linkElement: '.fade-page'
  });

	if (jQuery.isFunction(jQuery.fn.swipebox)) {

	  $( '.swipebox' ).swipebox();
	}
	if (jQuery.isFunction(jQuery.fn.datepicker)) {
	  $( "#arrivaldate" ).datepicker()
	  .datepicker('widget').wrap('<div class="ll-skin-wedding"/>');
	}
  
  
	if (jQuery.isFunction(jQuery.fn.arctext)) {

	   var $titleup = $('.title_up').hide();
	   var $titledown = $('.title_down').hide();
	   var $countdowntitle = $('.countdown_container h2').hide();
	   var $pageheader = $('.pageheader h2').hide();
	  
	   $titleup.show().arctext({radius: 500});
	   $titledown.show().arctext({radius: 700, dir: -1});
	   $countdowntitle.show().arctext({radius: 350});
	   $pageheader.show().arctext({radius: 350});
   }
   if (jQuery.isFunction(jQuery.fn.countdown)) {

		$('#defaultCountdown').countdown({until: new Date(2019, 9 - 1, 15, 21), format: 'y-o-d-h'});
   }
   
   if (jQuery.isFunction(jQuery.fn.owlCarousel)) {

		$("#owl-demo").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay: true,
		theme : "owl-theme",
		transitionStyle : "fadeUp"
		});
		$("#weddingcarousel").owlCarousel({
		items : 4,
		itemsScaleUp : true,
		theme : "owl-themecarousel"
		});
   } 

  
  
});