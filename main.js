import './main.css';

(function ($) {
  $.fn.sm_dropDown = function (options) {

    var settings = $.extend({
    }, options);

    return this;
  };
}(jQuery));


(function ($) {
  $.fn.sm_slider = function (options) {
    var settings = $.extend({
    }, options);
    return this;
  };
}(jQuery));


var step = 0
var totalSteps = 0
var stepsEl
var sliderEl
var stepsItems

function init() {
  stepsEl = $('#form-steps')
  sliderEl = $('#form-slider')
  stepsItems = $('.gaqf-steps-point', stepsEl)

  $('[data-slider]', sliderEl).on('click', (event) => {
    var direction = $(event.target).data('slider')
    step += (direction == 'next') ? 1 : -1
    moveSlider(direction)
  })

  $('.gaqf-content-option', sliderEl).on('mouseenter', (event) => {
    $('#first-help span').html($(event.currentTarget).data('help'))
  })

  $('.gaqf-content-option', sliderEl).on('mouseleave', (event) => {
    $('#first-help span').html('')
  })

  $('.dropdown-expand', sliderEl).on('click', (event) => {
    $(event.currentTarget).toggleClass('is-expanded')
    toggleDropdown($(event.currentTarget).siblings('ul'))
  })

  $('.dropdown-handler').on('click', (event) => {
    toggleDropdown($(event.currentTarget).siblings('ul'))
  })
}

function toggleDropdown(element){
  element.toggleClass('is-open')
}

function moveSlider(direction) {
  $('.gaqf-slider-container', sliderEl).css({ transform: "translateX(-"+(100 * step) + "%)" });
  stepsItems.each((index, item) => {
    if (index === step) {
      let width = $(item).width() + $(item).position().left + 'px'
      if (index === stepsItems.length - 1) width = '100%'
      $('.gaqf-steps-bar-fill', stepsEl).css({ width: width })
    }
    if (index <= step) {
      $(item).addClass('is-active')
    } else {
      $(item).removeClass('is-active')
    }
  })
}

$(document).on('ready', () => {
  init();
})