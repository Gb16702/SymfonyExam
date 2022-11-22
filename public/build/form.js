(self["webpackChunk"] = self["webpackChunk"] || []).push([["form"],{

/***/ "./assets/js/form.js":
/*!***************************!*\
  !*** ./assets/js/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
console.log('ok');
var eye = document.querySelector(".eye");
var eyeoff = document.querySelector(".eyeoff");
var passwordField = document.querySelector("input[type='password']");
var caps = document.querySelector(".arrow");
var text = document.querySelector(".notRegistered");
var input = document.querySelectorAll("input");
var isFocused = document.activeElement === passwordField;
eye.style.color = "";
passwordField.addEventListener("focus", function (e) {
  eye.style.color = '#c20f3f';
  eyeoff.style.color = "#c20f3f";
  caps.style.color = "#c20f3f";
  eye.style.transition = "300ms";
  eyeoff.style.transition = '300ms';
});
passwordField.addEventListener("blur", function (e) {
  eye.style.color = '';
  eyeoff.style.color = '';
  caps.style.color = "";
  eye.style.transition = "300ms";
  eyeoff.style.transition = '300ms';
});
passwordField.addEventListener("keydown", function (func) {
  eye.style.display = "block";
  eye.addEventListener("click", function () {
    eye.style.display = "none";
    eyeoff.style.display = "block";
    passwordField.type = "text";
  });
  eyeoff.addEventListener("click", function () {
    eyeoff.style.display = "none";
    eye.style.display = 'block';
    passwordField.type = 'password';
  });
});

// Changer l'affichage des logos
var logo = document.querySelector(".FIG1");
var logo2 = document.querySelector(".FIG2");
var container = document.querySelector(".blocConnexionForm");
function enter() {
  logo.style.display = 'none';
  logo2.style.display = 'block';
}
function leave() {
  logo.style.display = 'block';
  logo2.style.display = 'none';
}
container.addEventListener("mouseenter", function (e) {
  enter();
  container.getElementsByTagName.display = "block";
});
container.addEventListener("mouseleave", function (f) {
  leave();
});

// Bouton caps lock
window.addEventListener("keydown", function (func) {
  if (func.getModifierState('CapsLock')) {
    caps.style.display = "block";
  } else {
    caps.style.display = "";
  }
});
input.forEach(function (inputs) {
  inputs.addEventListener("input", function (event) {
    text.style.color = "#ccc";
    if (event.target.value.length < 1) {
      text.style.color = "";
    }
  });
});

//             import MagnetMouse from 'magnet-mouse';

// const magnetMouse = require('magnet-mouse');

// let mm = new MagnetMouse({
//     magnet: {
//         element: '.submit', /* Element to magnet */
//         enabled: true, /* Enables the magnet effect */
//         distance: 0, /* Distance (in px) when the magnet effect around element activates */
//         position: 'center' /* Position of mouse relative to the element when magnet effect is active */
//       },
//       follow: {
//         element: '.follow-mouse', /* Element that follows the mouse */
//       },
//       throttle: 10, /* Time (in ms) between each eventListener calls */
//       inCallback: null, /* Callback when mouse enters in the magnet effect */
//       outCallback: null /* Callback when mouse leaves in the magnet effect */
//     });
//   console.log(mm);
//   mm.init();

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-f98d0d"], () => (__webpack_exec__("./assets/js/form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOztBQUdkOztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTtBQUNiLGVBQWUsd0hBQStDO0FBQzlELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7OztBQ1hXO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsdUZBQTZCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUE2RDtBQUNqRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDVEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnb2snKTtcblxuXHRcdGNvbnN0IGV5ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXllXCIpXG5cdFx0Y29uc3QgZXllb2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leWVvZmZcIilcblx0XHRjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3Bhc3N3b3JkJ11cIilcbiAgICAgICAgY29uc3QgY2FwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIilcbiAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdFJlZ2lzdGVyZWRcIilcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilcblx0XHR2YXIgaXNGb2N1c2VkID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHBhc3N3b3JkRmllbGQpXG5cdFx0ZXllLnN0eWxlLmNvbG9yID0gXCJcIlxuXG4gICAgICAgICAgICBwYXNzd29yZEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBlID0+IHtcbiAgICAgICAgICAgICAgICBleWUuc3R5bGUuY29sb3IgPSAnI2MyMGYzZidcbiAgICAgICAgICAgICAgICBleWVvZmYuc3R5bGUuY29sb3IgPSBcIiNjMjBmM2ZcIlxuICAgICAgICAgICAgICAgIGNhcHMuc3R5bGUuY29sb3IgPSBcIiNjMjBmM2ZcIlxuICAgICAgICAgICAgICAgIGV5ZS5zdHlsZS50cmFuc2l0aW9uID0gXCIzMDBtc1wiXG4gICAgICAgICAgICAgICAgZXllb2ZmLnN0eWxlLnRyYW5zaXRpb24gPSAnMzAwbXMnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBlID0+IHtcbiAgICAgICAgICAgICAgICBleWUuc3R5bGUuY29sb3IgPSAnJ1xuICAgICAgICAgICAgICAgIGV5ZW9mZi5zdHlsZS5jb2xvciA9ICcnXG4gICAgICAgICAgICAgICAgY2Fwcy5zdHlsZS5jb2xvciA9IFwiXCJcbiAgICAgICAgICAgICAgICBleWUuc3R5bGUudHJhbnNpdGlvbiA9IFwiMzAwbXNcIlxuICAgICAgICAgICAgICAgIGV5ZW9mZi5zdHlsZS50cmFuc2l0aW9uID0gJzMwMG1zJ1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZnVuYykgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXllLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgICAgICAgICBleWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBleWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGV5ZW9mZi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQudHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBleWVvZmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXllb2ZmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBleWUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC50eXBlID0gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4vLyBDaGFuZ2VyIGwnYWZmaWNoYWdlIGRlcyBsb2dvc1xuXHRcdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkZJRzFcIilcblx0XHRjb25zdCBsb2dvMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRklHMlwiKVxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY0Nvbm5leGlvbkZvcm1cIilcblxuXHRcdCBmdW5jdGlvbiBlbnRlcigpIHtcblx0XHRcdGxvZ28uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdFx0bG9nbzIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblx0XHR9XG5cdFx0ZnVuY3Rpb24gbGVhdmUoKSB7XG5cdFx0XHRsb2dvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cdFx0XHRsb2dvMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0fVxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBlID0+IHtcblx0XHRcdGVudGVyKClcbiAgICAgICAgICAgIGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZS5kaXNwbGF5ID0gXCJibG9ja1wiXG5cdFx0fSlcblx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZiA9PiB7XG5cdFx0XHRsZWF2ZSgpXG5cdFx0fSlcblxuXG4gICAgICAgIC8vIEJvdXRvbiBjYXBzIGxvY2tcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZnVuYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGZ1bmMuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXBzLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYXBzLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlucHV0LmZvckVhY2goaW5wdXRzID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9IFwiI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cblxuLy8gICAgICAgICAgICAgaW1wb3J0IE1hZ25ldE1vdXNlIGZyb20gJ21hZ25ldC1tb3VzZSc7XG5cblxuLy8gY29uc3QgbWFnbmV0TW91c2UgPSByZXF1aXJlKCdtYWduZXQtbW91c2UnKTtcblxuLy8gbGV0IG1tID0gbmV3IE1hZ25ldE1vdXNlKHtcbi8vICAgICBtYWduZXQ6IHtcbi8vICAgICAgICAgZWxlbWVudDogJy5zdWJtaXQnLCAvKiBFbGVtZW50IHRvIG1hZ25ldCAqL1xuLy8gICAgICAgICBlbmFibGVkOiB0cnVlLCAvKiBFbmFibGVzIHRoZSBtYWduZXQgZWZmZWN0ICovXG4vLyAgICAgICAgIGRpc3RhbmNlOiAwLCAvKiBEaXN0YW5jZSAoaW4gcHgpIHdoZW4gdGhlIG1hZ25ldCBlZmZlY3QgYXJvdW5kIGVsZW1lbnQgYWN0aXZhdGVzICovXG4vLyAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJyAvKiBQb3NpdGlvbiBvZiBtb3VzZSByZWxhdGl2ZSB0byB0aGUgZWxlbWVudCB3aGVuIG1hZ25ldCBlZmZlY3QgaXMgYWN0aXZlICovXG4vLyAgICAgICB9LFxuLy8gICAgICAgZm9sbG93OiB7XG4vLyAgICAgICAgIGVsZW1lbnQ6ICcuZm9sbG93LW1vdXNlJywgLyogRWxlbWVudCB0aGF0IGZvbGxvd3MgdGhlIG1vdXNlICovXG4vLyAgICAgICB9LFxuLy8gICAgICAgdGhyb3R0bGU6IDEwLCAvKiBUaW1lIChpbiBtcykgYmV0d2VlbiBlYWNoIGV2ZW50TGlzdGVuZXIgY2FsbHMgKi9cbi8vICAgICAgIGluQ2FsbGJhY2s6IG51bGwsIC8qIENhbGxiYWNrIHdoZW4gbW91c2UgZW50ZXJzIGluIHRoZSBtYWduZXQgZWZmZWN0ICovXG4vLyAgICAgICBvdXRDYWxsYmFjazogbnVsbCAvKiBDYWxsYmFjayB3aGVuIG1vdXNlIGxlYXZlcyBpbiB0aGUgbWFnbmV0IGVmZmVjdCAqL1xuLy8gICAgIH0pO1xuLy8gICBjb25zb2xlLmxvZyhtbSk7XG4vLyAgIG1tLmluaXQoKTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJleWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJleWVvZmYiLCJwYXNzd29yZEZpZWxkIiwiY2FwcyIsInRleHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpc0ZvY3VzZWQiLCJhY3RpdmVFbGVtZW50Iiwic3R5bGUiLCJjb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidHJhbnNpdGlvbiIsImZ1bmMiLCJkaXNwbGF5IiwidHlwZSIsImxvZ28iLCJsb2dvMiIsImNvbnRhaW5lciIsImVudGVyIiwibGVhdmUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImYiLCJ3aW5kb3ciLCJnZXRNb2RpZmllclN0YXRlIiwiZm9yRWFjaCIsImlucHV0cyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9