    $(document).ready(function() {
  var scroll_start = 0;
  var stratchange = $(".maintext");
  var offset = startchange.offset();
  
  if (startchange.length) {
    $(document).scroll(function(){
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.Top) {
        $("nav").css('background-color', 'rgba(0, 0, 0, .75)');
      } else {
        $("nav").css('background-color', 'transparent')
      }
    });
  }
  
});