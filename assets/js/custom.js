//All Plug in

//Stick
//initiating jQuery
jQuery(function($) {
    $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp();
    });
});
  
//wow
//initiating jQuery
jQuery(function($) {
    new WOW().init();
});
  
//owl corosoul
//initiating jQuery
jQuery(function($) {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplay:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
});
  
//barfiller
//initiating jQuery
jQuery(function($) {
    $(document).ready(function(){
		$('#html').barfiller({ barColor: '#900', duration: 3000 });
		$('#css').barfiller({ barColor: '#900', duration: 3000 });
		$('#js').barfiller({ barColor: '#900', duration: 3000 });
		$('#ui').barfiller({ barColor: '#900', duration: 3000 });
		$('#ux').barfiller({ barColor: '#900', duration: 3000 });
		
	});
});
  
//animation
//initiating jQuery
jQuery(function($) {
    
$('#counter-block').ready(function(){
	$('.fb').animationCounter({
	  start: 0,
	  end: 1500,
	  step: 1,
	  delay:10
	});
	$('.code').animationCounter({
	  start: 0,
	  end: 250,
	  step: 1,
	  delay:10
	});
	$('.bike').animationCounter({
	  start: 0,
	  end: 170,
	  step: 1,
	  delay:10
	});
	$('.coffee').animationCounter({
	  start: 0,
	  end: 370,
	  step: 1,
	  delay:10
	});
});
});
  