import './main.css';
import './js/sm-slider';
import './js/sm-steps';
import './js/sm-dropdown';

var form = {

}

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

  // // slider next button
  // $('#slider-2 [data-slider]').on('click', (event) => {
  //   $('#slider-2').sm_slider('move', { direction: $(event.target).data('slider') })
  //   $('#form-steps').sm_steps('move', { step: $('#slider-2').data('step') })
  // })

  // // slider next button
  // $('#slider-3 [data-slider]').on('click', (event) => {
  //   $('#slider-3').sm_slider('move', { direction: $(event.target).data('slider') })
  // })

  // interested section text hover
  $('.sm-quote__page--interested .sm-quote__options__item').on('mouseenter', (event) => {
    $('#first-help span').html($(event.currentTarget).data('help'))
  })

  // interested section text leave
  $('.sm-quote__page--interested .sm-quote__options__item').on('mouseleave', (event) => {
    $('#first-help span').html('')
  })

  $('#next-im-interested').on('click', validateImInterested)
  $('#next-like-target').on('click', validateLikeTarget)
  $('#next-contact-details').on('click', validateContactDetails)


  // activate dropdown
  $('.sm-dropdown').sm_dropdown()

  //activate autocomplete
  $(".chosen-select").chosen()
  // $('.chosen-select').selectize({
  //   maxItems: 3
  // });
  // $('#slider-2').sm_slider('goTo', {step: 1});

}

function validateImInterested() {
  var value = ''
  var checkboxes = $('#im-interested-page input:checked')
  if (checkboxes.length > 0) {

    $(checkboxes).each((index, option) => {
      value += $(option).val() + ', '
    })
    value = value.substring(0, value.length - 2)
    form["I'm interested in"] = value

    $('#slider-2').sm_slider('goTo', { step: 1 })
    $('#form-steps').sm_steps('move', { step: $('#slider-2').data('step') })

  } else {
    $('#first-help span').html('Please choose an option to continue.')
  }
}

function validateLikeTarget() {
  // phase of education
  var found = false
  form['Phaser of Education'] = []
  $('#phase-education input:checked').each((index, option) => {
    found = true;
    form['Phaser of Education'].push($(option).val())
  })

  form['Type of School'] = []
  $('#type-school input:checked').each((index, option) => {
    found = true
    form['Type of School'].push($(option).val())
  })

  form['Area of School'] = []
  $('#area-school input:checked').each((index, option) => {
    found = true
    form['Area of School'].push($(option).val())
  })

  form['Decision Maker'] = $('#decision-maker').val() || [];

  if (form['Decision Maker'].length > 0) found = true

  if (found) {
    $('#slider-2').sm_slider('goTo', { step: 2 })
    $('#form-steps').sm_steps('move', { step: $('#slider-2').data('step') })
  } else {
    $('#second-help span').html('Please choose an option to continue.')
  }
}

function validateContactDetails(){
  form['contact_details'] = []
  form['contact_details']['charity_agency'] = 'No'
  var data = $('#contact-details-form').serializeArray()
  for (var i = 0; i < data.length; i++) {
    form['contact_details'][data[i]['name']] = data[i]['value'];
  }
}

$(document).on('ready', () => {
  init()
})
