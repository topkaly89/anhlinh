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
            layer.style.transform = `translate3d(${x}px, ${y}px, 0px)`
            layer.style.transformStyle = `preserve-3d`
            layer.style.backfaceVisibility = `hidden`
            layer.style.display = `block`
          }
      
        });
        section.addEventListener('mouseleave', e => {
      
          for (let layer of document.querySelectorAll('img')) {
            layer.style.transform = `translate3d(0px, 0px, 0px)`
            layer.style.transformStyle = `preserve-3d`
            layer.style.backfaceVisibility = `hidden`
            layer.style.display = `block`
          }
      
        });
        
      };
      applyParallax(document.querySelector('.info1'));

      let applyParallax2 = section => {
  
        section.addEventListener('mousemove', e => {
      
          let { width, height } = section.getBoundingClientRect();
          let offX = e.pageX - (width * 0.5);
          let offY = e.pageY - (height * 0.5);
      
          for (let layer of document.querySelectorAll('img')) {
            const speed = layer.getAttribute('data-speed')
            const x = (offX * speed) / 100;
            const y = (offY * speed) / 100;
            layer.style.transform = `translate3d(${x}px, ${y}px, 0px)`
            layer.style.transformStyle = `preserve-3d`
            layer.style.backfaceVisibility = `hidden`
            layer.style.display = `block`
          }
      
        });
        section.addEventListener('mouseleave', e => {
      
          for (let layer of document.querySelectorAll('img')) {
            layer.style.transform = `translate3d(0px, 0px, 0px)`
            layer.style.transformStyle = `preserve-3d`
            layer.style.backfaceVisibility = `hidden`
            layer.style.display = `block`
          }
      
        });
        
      };
      applyParallax2(document.querySelector('.info2'));


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