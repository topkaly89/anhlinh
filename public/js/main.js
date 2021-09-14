$(function(){
    "use strict";
    $(document).on('click', '#menu', function() {
        $('#menulist').toggleClass("hide--mobile");
    });



    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        css3: true,
        fitToSection: true,
        easing: 'easeInOutCubic',
	easingcss3: 'ease'
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);



});