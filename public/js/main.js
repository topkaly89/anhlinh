$(function(){
    "use strict";
    $(document).on('click', '#menu', function() {
        $('#menulist').toggleClass("hide--mobile");
    });



    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        css3: false
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);



});