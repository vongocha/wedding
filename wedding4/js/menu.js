(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button"></div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).parent().toggleClass('mopened');
		  $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          mainmenu.toggleClass('open'); 
          if (mainmenu.hasClass('open')) { 
            mainmenu.show();
          }
          else {
            mainmenu.hide();
          }
        });

        multiTg = function() {
          cssmenu.find(".menu-item-has-children").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.addClass('sticky');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);