
	$(window).scroll(function() {
  	if($(document).scrollTop() > 40) {
    	$('header').addClass('shrink');
    }
    else {
    $('header').removeClass('shrink');
    }
  });