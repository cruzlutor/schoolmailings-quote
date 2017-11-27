/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_sm_slider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_sm_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_sm_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_sm_steps__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_sm_steps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_sm_steps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_sm_dropdown__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_sm_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_sm_dropdown__);






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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function ($) {

  function animateScroll(){
    window.scrollTo(0, 0);
    // var body = $("body, html");
    // body.scrollTo(0)
    // if (body.scrollTop() > 0) {
      // $(body).stop().delay(500).animate({ scrollTop: 0 }, 500, 'swing')
    // }
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);