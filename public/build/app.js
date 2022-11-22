(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/_burger.js */ "./assets/js/_burger.js");
/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_burger_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/_load.js */ "./assets/js/_load.js");
/* harmony import */ var _js_load_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_load_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/_type.js */ "./assets/js/_type.js");
/* harmony import */ var _js_type_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_type_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_cursor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/_cursor.js */ "./assets/js/_cursor.js");
/* harmony import */ var _js_cursor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_cursor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_anime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/_anime.js */ "./assets/js/_anime.js");
/* harmony import */ var _js_anime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_anime_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/_url.js */ "./assets/js/_url.js");
/* harmony import */ var _js_url_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_url_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_flashy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/_flashy.js */ "./assets/js/_flashy.js");
/* harmony import */ var magnet_mouse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! magnet-mouse */ "./node_modules/magnet-mouse/src/index.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_9__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)








window.flashy = _js_flashy_js__WEBPACK_IMPORTED_MODULE_7__["default"];

// start the Stimulus application


/***/ }),

/***/ "./assets/js/_anime.js":
/*!*****************************!*\
  !*** ./assets/js/_anime.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./assets/js/_burger.js":
/*!******************************!*\
  !*** ./assets/js/_burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
window.addEventListener('load', function (e) {
  var containerNav = document.querySelector(".containerNav");
  var navBar = document.querySelector(".nav");
  var links = document.querySelectorAll(".link");
  var burger = document.querySelector("#burger");
  var bar1 = document.querySelector(".burgerBar:first-child");
  var bar2 = document.querySelector(".burgerBar:nth-child(2)");
  var bar3 = document.querySelector(".burgerBar:last-child");
  var burgerMenu = document.querySelector("#burgerMenu");
  var Logo3 = document.querySelector(".FIG3");
  var Logo4 = document.querySelector(".FIG4");
  console.log(Logo3);
  var Logo3Path = document.querySelector(".FIG3 path");
  console.log(Logo3Path);
  var Logo3G = document.querySelector(".FIG3 g");
  console.log(Logo3G);
  var footer = document.querySelector(".containerFooter");
  var fas = document.querySelector(".blocFas");
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(document.body.getBoundingClientRect().height, html.getBoundingClientRect().height);
  var calc = window.pageYOffset;
  console.log(body);
  console.log(links);
  function burgerBarWhite() {
    var _iterator = _createForOfIteratorHelper(burger.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var list = _step.value;
        console.log(list.tagName);
        list.style.backgroundColor = "white";
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  function burgerBarGrey() {
    var _iterator2 = _createForOfIteratorHelper(burger.children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var list = _step2.value;
        console.log(list.tagName);
        list.style.backgroundColor = "#3f4041";
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  console.log(window.pageYOffset);
  document.addEventListener("scroll", function (e) {
    if (height - window.pageYOffset < 1220) {
      console.log(footer);
      footer.classList.add("animate");
    } else {
      footer.classList.remove("animate");
    }
    if (window.location.href.indexOf("home") > -1) {
      if (window.pageYOffset > 600) {
        Logo3.style.display = "none";
        Logo4.style.display = "block";
        // for(const liste of Logo3.children) {
        //     console.log(liste.tagName);
        //     liste.style.fill = "red"
        //     console.log(liste.fill);
        // }
        Logo3Path.style.fill = "red";
        for (var i = 0; i < links.length; i++) {
          links[i].style.color = "#3f4041";
          links[links.length - 1].style.color = "rgb(215, 7, 7)";
        }
        fas.style.color = "#3f4041";
        burgerBarGrey();
        containerNav.style.backgroundColor = "white";
      } else {
        if (window.pageYOffset < 600 || window.pageYOffset) {
          Logo3.style.display = "";
          Logo4.style.display = "none";
          burgerBarWhite();
          fas.style.color = "";
          if (!containerNav.classList.contains("open-menu")) {
            containerNav.style.backgroundColor = "transparent";
          } else {
            containerNav.backgroundColor = "";
          }
          containerNav.style.transition = "200ms";
          for (var i = 0; i < links.length; i++) {
            links[i].style.transition = "300ms";
            links[i].style.color = "";
          }
        }
      }
    }
  });
  burgerMenu.style.transition = ".6s";
  burger.addEventListener('click', function () {
    bar1.style.transform = "rotate(45deg)" + "translate(5px, 6px)";
    bar1.style.transition = ".4s", bar3.style.transition = ".4s";
    bar3.style.transform = "rotate(-45deg)" + "translate(4px, -4px)";
    bar2.style.transform = 'translateX(40px)', bar2.style.transition = ".6s";
    this.classList.toggle('open');
    burgerMenu.classList.toggle("open-menu");
    if (burgerMenu.classList.contains("open-menu")) {
      burgerMenu.style.left = 0;
      burgerMenu.style.borderTop = "1px solid #cecece  ";
      containerNav.style.backgroundColor = "#fff";
      burgerBarGrey();
      document.body.style.overflowY = "hidden";
    } else {
      burgerMenu.style.left = "100%";
      containerNav.style.background = "";
      burgerBarWhite();
      document.body.style.overflowY = "";
    }
    if (!burger.classList.contains("open")) {
      burger.style = "";
      bar1.style.transform = "";
      bar2.style.transform = '';
      bar3.style.transform = "";
    }
  });
});
var body = document.body;
var lastScroll = 0;
if (window.location.href.indexOf("home") > -1) {
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down") && !burger.classList.contains("open")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
}

// let touchStart, touchEnd

// burgerMenu.addEventListener("touchstart", e=> {
//     touchStart = e.targetTouches[0].clientX
//     console.log(touchStart);
// })
// burgerMenu.addEventListener("touchmove", x => {
//     touchMove = x.targetTouches[0].clientX
//     console.log(touchMove);
// })

// burgerMenu.addEventListener("touchend", f => {
//     if(touchStart - touchEnd < -10) {
//         burger.classList.toggle('open')
//         burgerMenu.classList.toggle("open-menu")
//     }
// })

/***/ }),

/***/ "./assets/js/_cursor.js":
/*!******************************!*\
  !*** ./assets/js/_cursor.js ***!
  \******************************/
/***/ (() => {

var cursor = document.querySelector(".cardsCursor");
var container = document.querySelector(".containerHome");
container.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
});
container.addEventListener("mouseout", function (x) {
  cursor.style.display = "none";
});

/***/ }),

/***/ "./assets/js/_flashy.js":
/*!******************************!*\
  !*** ./assets/js/_flashy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ flashy)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function flashy(message) {
  var template = $($('#flashy-template').html());
  $('.flashy').remove();
  template.find('.flashy__body').html(message).attr('href', link || '#').end().appendTo('body').hide().fadeIn(3000).delay(2800).animate({
    marginRight: '-100%'
  }, 3000, 'swing', function () {
    $(this).remove();
  });
}

/***/ }),

/***/ "./assets/js/_load.js":
/*!****************************!*\
  !*** ./assets/js/_load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
var t = document.querySelector(".containerHomeTitle");
var b = document.querySelector(".containerHomeBody");
var h = document.querySelector(".containerHome");
var body = document.body;
var html = document.documentElement;
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// console.log(footer);

h.style.position = "relative";
window.onload = function () {
  var executed = false;
  if (!window.pageYOffset || window.pageYOffset) {
    if (!executed) {
      executed = true;
      t.style.opacity = 0;
      t.style.top = "105%";
      t.style.display = "flex";

      // console.log(window.pageYoffset);
      setTimeout(function () {
        t.style.transition = "opacity 700ms, top 800ms";
        t.style.position = "absolute";
        t.style.opacity = 1;
        if (window.pageYOffset > 2000) {
          t.style.top = "70%";
          t.style.backgroundColor = "red";
        } else {
          t.style.top = "90%";
        }
        t.style.height = "fit-content";
        t.style.background = "transparent";
        t.style.boxShadow = "none";
      }, 200);
      t.style.position = "";
      b.style.overflowX = "visible";
    }
  } else {
    executed = false;
  }
  var height = Math.max(document.body.getBoundingClientRect().height, html.getBoundingClientRect().height);
  var calc = height - 390;
  // console.log(calc)
};

AOS.init();

/***/ }),

/***/ "./assets/js/_type.js":
/*!****************************!*\
  !*** ./assets/js/_type.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(document).ready(function () {
  var typed = new Typed(".containerHomeTitleH4", {
    strings: ["Nous proposons un large choix de voitures neuves"],
    typeSpeed: 20,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 0,
    startDelay: 450
  });
});

/***/ }),

/***/ "./assets/js/_url.js":
/*!***************************!*\
  !*** ./assets/js/_url.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-f98d0d","vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_js-node_modules_core-js_modules_es_ar-30acd0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUM3REMsU0FBUyxFQUFFLEVBQUU7SUFDYkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QkMsWUFBWSxFQUFFLENBQUM7SUFDZkMsVUFBVSxFQUFFO0VBQ2hCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2J1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2ZsYXNoeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL190eXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vanMvX2J1cmdlci5qcydcbmltcG9ydCAnLi9qcy9fbG9hZC5qcydcbmltcG9ydCAnLi9qcy9fdHlwZS5qcydcbmltcG9ydCAnLi9qcy9fY3Vyc29yLmpzJ1xuaW1wb3J0ICcuL2pzL19hbmltZS5qcydcbmltcG9ydCAnLi9qcy9fdXJsLmpzJ1xuaW1wb3J0IGZsYXNoeSBmcm9tICcuL2pzL19mbGFzaHkuanMnXG53aW5kb3cuZmxhc2h5ID0gZmxhc2h5XG5cbmltcG9ydCBNYWduZXRNb3VzZSBmcm9tICdtYWduZXQtbW91c2UnO1xuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlXCJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJOYXZcIilcbiAgICBjb25zdCBuYXZCYXIgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmtcIilcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1cmdlclwiKVxuICAgIGNvbnN0IGJhcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlckJhcjpmaXJzdC1jaGlsZFwiKVxuICAgIGNvbnN0IGJhcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlckJhcjpudGgtY2hpbGQoMilcIilcbiAgICBjb25zdCBiYXIzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJCYXI6bGFzdC1jaGlsZFwiKVxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1cmdlck1lbnVcIilcbiAgICBjb25zdCBMb2dvMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRklHM1wiKVxuICAgIGNvbnN0IExvZ280ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5GSUc0XCIpXG4gICAgY29uc29sZS5sb2coTG9nbzMpO1xuICAgIGNvbnN0IExvZ28zUGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRklHMyBwYXRoXCIpXG4gICAgY29uc29sZS5sb2coTG9nbzNQYXRoKTtcbiAgICBjb25zdCBMb2dvM0cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkZJRzMgZ1wiKVxuICAgIGNvbnNvbGUubG9nKExvZ28zRyk7XG5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyRm9vdGVyXCIpXG4gICAgY29uc3QgZmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9jRmFzXCIpXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsIGh0bWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICBjb25zdCBjYWxjID0gIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIGNvbnNvbGUubG9nKGxpbmtzKTtcblxuICAgIGZ1bmN0aW9uIGJ1cmdlckJhcldoaXRlKCkge1xuICAgICAgICBmb3IoY29uc3QgbGlzdCBvZiBidXJnZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QudGFnTmFtZSlcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYnVyZ2VyQmFyR3JleSgpIHtcbiAgICAgICAgZm9yKGNvbnN0IGxpc3Qgb2YgYnVyZ2VyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0LnRhZ05hbWUpXG4gICAgICAgICAgICBsaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzNmNDA0MVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXG4gICAgbGV0IGggPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZSA9PiB7XG4gICAgICAgIGlmKGhlaWdodCAtIHdpbmRvdy5wYWdlWU9mZnNldCA8IDEyMjApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvb3Rlcik7XG4gICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVcIilcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcImhvbWVcIikgPiAtMSkge1xuICAgICAgICBpZiggd2luZG93LnBhZ2VZT2Zmc2V0ID4gNjAwKSB7XG4gICAgICAgICAgICBMb2dvMy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIExvZ280LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgICAgIC8vIGZvcihjb25zdCBsaXN0ZSBvZiBMb2dvMy5jaGlsZHJlbikge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGxpc3RlLnRhZ05hbWUpO1xuICAgICAgICAgICAgLy8gICAgIGxpc3RlLnN0eWxlLmZpbGwgPSBcInJlZFwiXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobGlzdGUuZmlsbCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBMb2dvM1BhdGguc3R5bGUuZmlsbCA9IFwicmVkXCJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGlua3NbaV0uc3R5bGUuY29sb3IgPSBcIiMzZjQwNDFcIlxuICAgICAgICAgICAgICAgIGxpbmtzW2xpbmtzLmxlbmd0aCAtIDFdLnN0eWxlLmNvbG9yID0gXCJyZ2IoMjE1LCA3LCA3KVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmYXMuc3R5bGUuY29sb3IgPSBcIiMzZjQwNDFcIlxuICAgICAgICAgICAgYnVyZ2VyQmFyR3JleSgpXG4gICAgICAgICAgICBjb250YWluZXJOYXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA8IDYwMCB8fCB3aW5kb3cucGFnZVlPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBMb2dvMy5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgICAgICAgICAgICAgIExvZ280LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIGJ1cmdlckJhcldoaXRlKClcbiAgICAgICAgICAgICAgICBmYXMuc3R5bGUuY29sb3IgPSBcIlwiXG4gICAgICAgICAgICAgICAgaWYoIWNvbnRhaW5lck5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuLW1lbnVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTmF2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTmF2LmJhY2tncm91bmRDb2xvciA9IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyTmF2LnN0eWxlLnRyYW5zaXRpb24gPSBcIjIwMG1zXCJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDxsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5zdHlsZS50cmFuc2l0aW9uID0gXCIzMDBtc1wiXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLnN0eWxlLmNvbG9yID0gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB9KVxuXG4gICAgICAgICAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zaXRpb249IChcIi42c1wiKVxuICAgICAgICAgICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBiYXIxLnN0eWxlLnRyYW5zZm9ybT0gKFwicm90YXRlKDQ1ZGVnKVwiK1widHJhbnNsYXRlKDVweCwgNnB4KVwiKVxuICAgICAgICAgICAgYmFyMS5zdHlsZS50cmFuc2l0aW9uID0gKFwiLjRzXCIpLCBiYXIzLnN0eWxlLnRyYW5zaXRpb24gPSAoXCIuNHNcIilcbiAgICAgICAgICAgIGJhcjMuc3R5bGUudHJhbnNmb3JtPSAoXCJyb3RhdGUoLTQ1ZGVnKVwiK1widHJhbnNsYXRlKDRweCwgLTRweClcIilcbiAgICAgICAgICAgIGJhcjIuc3R5bGUudHJhbnNmb3JtID0gKCd0cmFuc2xhdGVYKDQwcHgpJyksIGJhcjIuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjZzXCJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpXG4gICAgICAgICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIilcblxuICAgICAgICAgICAgaWYoYnVyZ2VyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuLW1lbnVcIikpIHtcbiAgICAgICAgICAgICAgICBidXJnZXJNZW51LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICAgICAgICAgIGJ1cmdlck1lbnUuc3R5bGUuYm9yZGVyVG9wID0gXCIxcHggc29saWQgI2NlY2VjZSAgXCJcbiAgICAgICAgICAgICAgICBjb250YWluZXJOYXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCJcbiAgICAgICAgICAgICAgICBidXJnZXJCYXJHcmV5KClcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBidXJnZXJNZW51LnN0eWxlLmxlZnQgPSAoXCIxMDAlXCIpXG4gICAgICAgICAgICAgICAgY29udGFpbmVyTmF2LnN0eWxlLmJhY2tncm91bmQgPVwiXCJcbiAgICAgICAgICAgICAgICBidXJnZXJCYXJXaGl0ZSgpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpe1xuICAgICAgICAgICAgYnVyZ2VyLnN0eWxlID0gXCJcIlxuICAgICAgICAgICAgYmFyMS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiXG4gICAgICAgICAgICBiYXIyLnN0eWxlLnRyYW5zZm9ybSA9ICcnXG4gICAgICAgICAgICBiYXIzLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCJcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5cbmxldCBsYXN0U2Nyb2xsID0gMFxuXG5pZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiaG9tZVwiKSA+IC0xKSB7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKT0+IHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgaWYoY3VycmVudFNjcm9sbCA8PTApIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLXVwXCIpXG4gICAgfVxuICAgIGlmKGN1cnJlbnRTY3JvbGwgID4gbGFzdFNjcm9sbCAmJiAhYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzY3JvbGwtZG93blwiKSAmJiAhYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLXVwXCIpXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duXCIpXG4gICAgfVxuICAgIGlmKGN1cnJlbnRTY3JvbGwgPCBsYXN0U2Nyb2xsICYmIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Nyb2xsLWRvd25cIikpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLWRvd25cIilcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLXVwXCIpXG4gICAgfVxuICAgIGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsXG59KVxufVxuXG5cblxuXG4vLyBsZXQgdG91Y2hTdGFydCwgdG91Y2hFbmRcblxuLy8gYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlPT4ge1xuLy8gICAgIHRvdWNoU3RhcnQgPSBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WFxuLy8gICAgIGNvbnNvbGUubG9nKHRvdWNoU3RhcnQpO1xuLy8gfSlcbi8vIGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB4ID0+IHtcbi8vICAgICB0b3VjaE1vdmUgPSB4LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WFxuLy8gICAgIGNvbnNvbGUubG9nKHRvdWNoTW92ZSk7XG4vLyB9KVxuXG4vLyBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmID0+IHtcbi8vICAgICBpZih0b3VjaFN0YXJ0IC0gdG91Y2hFbmQgPCAtMTApIHtcbi8vICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKVxuLy8gICAgICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIilcbi8vICAgICB9XG4vLyB9KVxuIiwiY29uc3QgY3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc0N1cnNvclwiKVxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJIb21lXCIpXG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGU9PiB7XG4gICAgbGV0IHggPSBlLmNsaWVudFhcbiAgICBsZXQgeSA9IGUuY2xpZW50WVxuICAgIGN1cnNvci5zdHlsZS50b3AgPSB5ICsgXCJweFwiXG4gICAgY3Vyc29yLnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiXG4gICAgY3Vyc29yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbn0pXG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgeCA9PiB7XG5cbiAgICBjdXJzb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG59KSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsYXNoeShtZXNzYWdlKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gJCgkKCcjZmxhc2h5LXRlbXBsYXRlJykuaHRtbCgpKVxuICAgICQoJy5mbGFzaHknKS5yZW1vdmUoKVxuICAgIHRlbXBsYXRlXG4gICAgICAgIC5maW5kKCcuZmxhc2h5X19ib2R5JylcbiAgICAgICAgLmh0bWwobWVzc2FnZSlcbiAgICAgICAgLmF0dHIoJ2hyZWYnLCBsaW5rIHx8ICcjJylcbiAgICAgICAgLmVuZCgpXG4gICAgICAgIC5hcHBlbmRUbygnYm9keScpXG4gICAgICAgIC5oaWRlKClcbiAgICAgICAgLmZhZGVJbigzMDAwKVxuICAgICAgICAuZGVsYXkoMjgwMClcbiAgICAgICAgLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICctMTAwJSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzMDAwLFxuICAgICAgICAgICAgJ3N3aW5nJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxufVxuIiwiY29uc3QgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVySG9tZVRpdGxlXCIpXG5jb25zdCBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJIb21lQm9keVwiKVxuY29uc3QgaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVySG9tZVwiKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbmxldCB3ID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcbmxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcblxuXG4vLyBjb25zb2xlLmxvZyhmb290ZXIpO1xuXG5oLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIlxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGV4ZWN1dGVkID0gZmFsc2VcbiAgICBpZighd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICBpZighZXhlY3V0ZWQpIHtcbiAgICAgICAgICAgIGV4ZWN1dGVkID0gdHJ1ZVxuICAgICAgICAgICAgdC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICAgICAgdC5zdHlsZS50b3A9IFwiMTA1JVwiXG4gICAgICAgICAgICB0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cucGFnZVlvZmZzZXQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdC5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDcwMG1zLCB0b3AgODAwbXNcIlxuICAgICAgICAgICAgICAgIHQuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5vcGFjaXR5ID0gMVxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IDIwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdC5zdHlsZS50b3AgPSBcIjcwJVwiXG4gICAgICAgICAgICAgICAgICAgIHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdC5zdHlsZS50b3AgPSBcIjkwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiXCJcbiAgICAgICAgICAgIGIuc3R5bGUub3ZlcmZsb3dYPVwidmlzaWJsZVwiXG4gICAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICAgIGV4ZWN1dGVkID0gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsIGh0bWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICB2YXIgY2FsYyA9IGhlaWdodCAtIDM5MFxuICAgIC8vIGNvbnNvbGUubG9nKGNhbGMpXG5cblxufVxuXG5BT1MuaW5pdCgpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyIHR5cGVkID0gbmV3IFR5cGVkKFwiLmNvbnRhaW5lckhvbWVUaXRsZUg0XCIsIHtcbiAgICAgICAgc3RyaW5nczogW1wiTm91cyBwcm9wb3NvbnMgdW4gbGFyZ2UgY2hvaXggZGUgdm9pdHVyZXMgbmV1dmVzXCJdLFxuICAgICAgICB0eXBlU3BlZWQ6IDIwLFxuICAgICAgICBmYWRlT3V0OiB0cnVlLFxuICAgICAgICBmYWRlT3V0Q2xhc3M6ICd0eXBlZC1mYWRlLW91dCcsXG4gICAgICAgIGZhZGVPdXREZWxheTogMCxcbiAgICAgICAgc3RhcnREZWxheTogNDUwXG4gICAgfSk7XG59KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImZsYXNoeSIsIndpbmRvdyIsIk1hZ25ldE1vdXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb250YWluZXJOYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZCYXIiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXJnZXIiLCJiYXIxIiwiYmFyMiIsImJhcjMiLCJidXJnZXJNZW51IiwiTG9nbzMiLCJMb2dvNCIsImNvbnNvbGUiLCJsb2ciLCJMb2dvM1BhdGgiLCJMb2dvM0ciLCJmb290ZXIiLCJmYXMiLCJib2R5IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjYWxjIiwicGFnZVlPZmZzZXQiLCJidXJnZXJCYXJXaGl0ZSIsImNoaWxkcmVuIiwibGlzdCIsInRhZ05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJ1cmdlckJhckdyZXkiLCJ3IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiaCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiIsImRpc3BsYXkiLCJmaWxsIiwiaSIsImxlbmd0aCIsImNvbG9yIiwiY29udGFpbnMiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwidG9nZ2xlIiwibGVmdCIsImJvcmRlclRvcCIsIm92ZXJmbG93WSIsImJhY2tncm91bmQiLCJsYXN0U2Nyb2xsIiwiY3VycmVudFNjcm9sbCIsImN1cnNvciIsImNvbnRhaW5lciIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJ0b3AiLCJtZXNzYWdlIiwidGVtcGxhdGUiLCIkIiwiZmluZCIsImF0dHIiLCJsaW5rIiwiZW5kIiwiYXBwZW5kVG8iLCJoaWRlIiwiZmFkZUluIiwiZGVsYXkiLCJhbmltYXRlIiwibWFyZ2luUmlnaHQiLCJ0IiwiYiIsInBvc2l0aW9uIiwib25sb2FkIiwiZXhlY3V0ZWQiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsImJveFNoYWRvdyIsIm92ZXJmbG93WCIsIkFPUyIsImluaXQiLCJyZWFkeSIsInR5cGVkIiwiVHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwiZmFkZU91dCIsImZhZGVPdXRDbGFzcyIsImZhZGVPdXREZWxheSIsInN0YXJ0RGVsYXkiXSwic291cmNlUm9vdCI6IiJ9