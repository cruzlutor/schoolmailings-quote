(function ($) {

  function animateScroll(){
    var body = $("body, html");
    if (body.scrollTop() > 0) {
      $(body).stop().delay(500).animate({ scrollTop: 0 }, 500, 'swing')
    }
  }

  var methods = {
    move: function (options) {
      var step = parseInt($(this).data('step') || 0)
      var container = $('.sm-slider__container', this).first()
      step += (options.direction == 'next') ? 1 : -1
      $(container).css({ transform: "translateX(-" + (100 * step) + "%)" });
      $(this).data('step', step)
      animateScroll();
      return this
      
    },

    goTo: function(options){
      var step = parseInt(options.step || 0)
      var container = $('.sm-slider__container', this).first()
      $(container).css({ transform: "translateX(-" + (100 * step) + "%)" });
      $(this).data('step', step)
      animateScroll();
      return this
    }
  };

  $.fn.sm_slider = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1))
    }
    return this
  };

}(jQuery));
