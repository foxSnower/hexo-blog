(function($) {

	"use strict";

  var scrolltoElement = function(e) {
    e.preventDefault();
    var self = $(this),
        correction = e.data ? e.data.correction ? e.data.correction : 0 : 0;
    $('html, body').animate({'scrollTop': $(self.attr('href')).offset().top - correction }, 400);
  };

  var closeMenu = function(e) {
	  e.stopPropagation();
    $('body').removeClass('menu-open');
		$('#site-nav-switch').removeClass('active');
  };

  var toggleMenu = function(e) {
	  e.stopPropagation();
	  $('body').toggleClass('menu-open');
    $('#site-nav-switch').toggleClass('active');
  };

	$(function() {
		$('#footer, #main').addClass('loaded');
		$('#site-nav-switch').on('click', toggleMenu);
		$(document).on('click', closeMenu);
		$('#site-menu').on('click', function (e) {
			e.stopPropagation();
		});
		$('.window-nav, .go-comment').on('click', scrolltoElement);
    $(".content .video-container").fitVids();

		setTimeout(function() {
	    $('#loading-bar-wrapper').fadeOut(500);
	  }, 300);

	});


 // 增加目录
 var closeDirectory = function(e) {
      e.stopPropagation();
    $('body').removeClass('directory-open');
        $('#directory-switch').removeClass('active');
  };

  var toggleDirectory = function(e) {
      e.stopPropagation();
      $('body').toggleClass('directory-open');
     $('#directory-switch').toggleClass('active');

  };

/*  var directoryList=function(){
   // $(".directory-list").empty();
   $(".post").each(function(i,items){
     $(".directory-list").append(items.firstElementChild.innerHTML);
   });

  };*/
$(function() {
        $('#directory-switch').on('click', toggleDirectory);
        $(document).on('click', closeDirectory);
        $('#directory-menu').on('click', function (e) {
            e.stopPropagation();
        });
       setTimeout(function(){
        var htmlC=$("#directory-menu");
        $("#site-wrapper").append(htmlC);
       },300)
        
    });

})(jQuery);