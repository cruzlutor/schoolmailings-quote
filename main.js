import './main.css';
import './js/sm-slider';
import './js/sm-steps';
import './js/sm-dropdown';


function init() {
  // init step bar
  $('#form-steps').sm_steps();

  // back to start
  $('.sm-back-start').on('click', (event) => {
    $('#slider-1').sm_slider('goTo', { step: 0 })
    $('#slider-2').sm_slider('goTo', { step: 0 })
    $('#slider-3').sm_slider('goTo', { step: 0 })
    $('#form-steps').sm_steps('move', { step: 0 })
  })

  // can we have chat link
  $('.sm-quote__chat-link').on('click', (event) => {
    $('#slider-1').sm_slider('goTo', { step: 1 })
    $('#slider-3').sm_slider('goTo', { step: 0 })
  })

  // return first forum
  $('#back-first-forum').on('click', (event) => {
    $('#slider-1').sm_slider('goTo', { step: 0 })
  })

  // slider next button
  $('#slider-2 [data-slider]').on('click', (event) => {
    $('#slider-2').sm_slider('move', { direction: $(event.target).data('slider') })
    $('#form-steps').sm_steps('move', { step: $('#slider-2').data('step') })
  })

  // slider next button
  $('#slider-3 [data-slider]').on('click', (event) => {
    $('#slider-3').sm_slider('move', { direction: $(event.target).data('slider') })
  })

  // interested section text hover
  $('.sm-quote__page--interested .sm-quote__options__item').on('mouseenter', (event) => {
    $('#first-help span').html($(event.currentTarget).data('help'))
  })

  // interested section text leave
  $('.sm-quote__page--interested .sm-quote__options__item').on('mouseleave', (event) => {
    $('#first-help span').html('')
  })

  $('.sm-dropdown').sm_dropdown();


  // $('#slider-2').sm_slider('goTo', {step: 1});

}

$(document).on('ready', () => {
  init()
})

// var step = 0
// var totalSteps = 0
// var stepsEl
// var sliderEl
// var stepsItems

// function init() {
//   stepsEl = $('#form-steps')
//   sliderEl = $('#form-slider')
//   stepsItems = $('.gaqf-steps-point', stepsEl)

//   $('[data-slider]', sliderEl).on('click', (event) => {
//     var direction = $(event.target).data('slider')
//     step += (direction == 'next') ? 1 : -1
//     moveSlider(direction)
//   })

//   $('.gaqf-content-option', sliderEl).on('mouseenter', (event) => {
//     $('#first-help span').html($(event.currentTarget).data('help'))
//   })

//   $('.gaqf-content-option', sliderEl).on('mouseleave', (event) => {
//     $('#first-help span').html('')
//   })

//   $('.dropdown-expand', sliderEl).on('click', (event) => {
//     $(event.currentTarget).toggleClass('is-expanded')
//     toggleDropdown($(event.currentTarget).siblings('ul'))
//   })

//   $('.dropdown-handler').on('click', (event) => {
//     toggleDropdown($(event.currentTarget).siblings('ul'))
//   })
// }

// function toggleDropdown(element){
//   element.toggleClass('is-open')
// }

// function moveSlider(direction) {
//   $('.gaqf-slider-container', sliderEl).css({ transform: "translateX(-"+(100 * step) + "%)" });
//   stepsItems.each((index, item) => {
//     if (index === step) {
//       let width = $(item).width() + $(item).position().left + 'px'
//       if (index === stepsItems.length - 1) width = '100%'
//       $('.gaqf-steps-bar-fill', stepsEl).css({ width: width })
//     }
//     if (index <= step) {
//       $(item).addClass('is-active')
//     } else {
//       $(item).removeClass('is-active')
//     }
//   })
// }

// $(document).on('ready', () => {
//   init();
// })