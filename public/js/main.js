$(function(){
    "use strict";
    $(document).on('click', '#menu', function() {
        $('#menulist').toggleClass("hide--mobile");
    });

    $(document).ready(function(){
        $('.info').mousemove(function(e){
          var x = -(e.pageX + this.offsetLeft) / 20;
          var y = -(e.pageY + this.offsetTop) / 20;
          $('.img', this).css('background-position', x + 'px ' + y + 'px');
        });    
    });


    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);


    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        lockAnchors: true
      });
   
      $('.moveTo').click(function(){
        var sectionIndex = $(this).attr('data-section');
        var slideIndex = $(this).attr('data-slide') || 0;
        fullpage_api.moveTo(sectionIndex, slideIndex);
    });

});