$(function(){
    "use strict";
    $(document).on('click', '#menu', function() {
        $('#menulist').toggleClass("hide--mobile");
    });



    let applyParallax = section => {
  
        section.addEventListener('mousemove', e => {
      
          let { width, height } = section.getBoundingClientRect();
          let offX = e.pageX - (width * 0.5);
          let offY = e.pageY - (height * 0.5);
      
          for (let layer of document.querySelectorAll('img')) {
            const speed = layer.getAttribute('data-speed')
            const x = (offX * speed) / 100;
            const y = (offY * speed) / 100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
          }
      
        });
        section.addEventListener('mouseleave', e => {
      
          for (let layer of document.querySelectorAll('img')) {
            layer.style.transform = `translateX(0px) translateY(0px)`
          }
      
        });
        
      };
      applyParallax(document.querySelector('.info'));




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