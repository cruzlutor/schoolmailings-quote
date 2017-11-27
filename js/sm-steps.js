(function ($) {
  var items;
  var methods = {
    init: function () {
      items = $('.sm-steps__point', this)
      return this
    },

    move: function (options) {
      var step = options.step;
      var self = this;
      items.each((index, item) => {
        if (index === step) {
          var width = $(item).width() + $(item).position().left + 'px'
          if (index === items.length - 1) width = '100%'
          $('.sm-steps__bar__fill', self).css({ width: width })
        }
        if (index <= step) {
          $(item).addClass('is-active')
        } else {
          $(item).removeClass('is-active')
        }
      });
      return this
    },

  };

  $.fn.sm_steps = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1))
    } else {
      return methods['init'].apply(this, Array.prototype.slice.call(arguments, 1))
    }
    return this
  };
}(jQuery));