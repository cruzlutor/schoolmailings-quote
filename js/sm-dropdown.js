(function ($) {
  var items;
  var methods = {
    init: function(options){
      var self = this;
      $(document).mouseup( (e) => {
        $(self).each( (index, item) => {
          if (!$(item).is(e.target) && $(item).has(e.target).length === 0) {
            $('.sm-dropdown__options', item).first().removeClass('is-open')
          }
        })
      })

      $('.sm-dropdown__handler').on('click', (event) => {
        $(event.currentTarget).siblings('ul').toggleClass('is-open')
      })

      $('.sm-dropdown__expand').on('click', (event) => {
        $(event.currentTarget).toggleClass('is-expanded')
        $(event.currentTarget).siblings('ul').toggleClass('is-open')
      })
    }
  };

  $.fn.sm_dropdown = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1))
    } else {
      return methods['init'].apply(this, Array.prototype.slice.call(arguments, 1))
    }
    return this
  };
}(jQuery));