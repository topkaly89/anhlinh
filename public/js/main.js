$(function(){
    "use strict";
    $(document).on('click', '#menu', function() {
        $('#menulist').toggleClass("hide--mobile");
    });



    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
      });


});