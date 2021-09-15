$(function(){
    "use strict";
    $(document).on('click', '#menu', function() {
        $('#menulist').toggleClass("hide--mobile");
    });



    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);


    new fullpage('#fullpage', {
        //anchors: ['page1', 'page2', 'page3', 'page4', 'page5']
      });
      
      //adding the action to the button
      $(document).on('click', '#moveTo5', function(){
        fullpage_api.moveTo('page5', 4);
      });

});