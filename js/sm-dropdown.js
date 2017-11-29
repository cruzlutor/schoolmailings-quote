(function ($) {

  function close(dropdown) {
    $('.sm-dropdown__options', dropdown).first().removeClass('is-open')
    updateSelected(dropdown)
  }

  function updateSelected(dropdown){
    var value = ''
    var found = false
    $('input:checked', dropdown).each((index, option) => {
      value += $(option).val() + ', '
      found = true
    })

    if (found) {
      value = value.substring(0, value.length - 2);
      $(dropdown).addClass('is-active')
      $('.sm-dropdown__handler', dropdown).html(value)
    } else {
      $(dropdown).removeClass('is-active')
      $('.sm-dropdown__handler', dropdown).html('Click here to select')
    }
  }

  var methods = {
    init: function (options) {
      var self = this;
      $(document).mouseup((e) => {
        $(self).each((index, item) => {
          if (!$(item).is(e.target) && $(item).has(e.target).length === 0) {
            close(item)
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