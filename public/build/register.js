(self["webpackChunk"] = self["webpackChunk"] || []).push([["register"],{

/***/ "./assets/js/register.js":
/*!*******************************!*\
  !*** ./assets/js/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var eyeR = document.querySelector(".eyeRegister");
var eyeoffR = document.querySelector(".eyeoffRegister");
var passwordField = document.querySelector("input[type='password']");
var caps = document.querySelector(".arrowRegister");
var textR = document.querySelector(".registered");
var input = document.querySelectorAll("input");
var labelReg = document.querySelectorAll("label");
console.log(labelReg);
var isFocused = document.activeElement === passwordField;
var b = "rgb(111, 54, 227)";
eyeR.style.color = "";
passwordField.addEventListener("focus", function (e) {
  eyeR.style.color = b;
  eyeoffR.style.color = b;
  caps.style.color = b;
  eyeR.style.transition = "300ms";
  eyeoffR.style.transition = '300ms';
});
passwordField.addEventListener("blur", function (e) {
  eyeR.style.color = '';
  eyeoffR.style.color = '';
  caps.style.color = "";
  eyeR.style.transition = "300ms";
  eyeoffR.style.transition = '300ms';
});
passwordField.addEventListener("keydown", function (func) {
  eyeR.style.display = "block";
  eyeR.addEventListener("click", function () {
    eyeR.style.display = "none";
    eyeoffR.style.display = "block";
    passwordField.type = "text";
  });
  eyeoffR.addEventListener("click", function () {
    eyeoffR.style.display = "none";
    eyeR.style.display = 'block';
    passwordField.type = 'password';
  });
});

// Changer l'affichage des logos
var logo = document.querySelector(".FIGNH");
var logo2 = document.querySelector(".FIGH");
console.log(logo);
console.log(logo2);
var container = document.querySelector(".blocRegisterForm");
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
    textR.style.color = "#ccc";
    if (event.target.value.length < 1) {
      textR.style.color = "";
    }
  });
});
input[0].addEventListener('focus', function (ff) {
  labelReg[0].style.color = b;
  input[0].addEventListener('input', function (i) {
    if (ff.target.value.length > 0) {
      labelReg[0].style.top = "5%";
      labelReg[0].style.fontSize = "13px";
    } else {
      labelReg[0].style.top = "50%";
      labelReg[0].style.fontSize = "";
    }
  });
});
input[1].addEventListener('focus', function (ff) {
  labelReg[1].style.color = b;
  input[1].addEventListener('input', function (i) {
    if (ff.target.value.length > 0) {
      labelReg[1].style.top = "5%";
      labelReg[1].style.fontSize = "13px";
    } else {
      labelReg[1].style.top = "50%";
      labelReg[1].style.fontSize = "";
    }
  });
});
input[0].addEventListener("blur", function (b) {
  labelReg[0].style.color = "";
  if (b.target.value.length > 0) {
    labelReg[0].style.top = "5%";
    labelReg[1].style.fontSize = "13px";
  } else {
    labelReg[0].style.top = "50%";
  }
});
input[1].addEventListener("blur", function (b) {
  labelReg[1].style = "";
  if (b.target.value.length > 0) {
    labelReg[1].style.top = "5%";
    labelReg[1].style.fontSize = "13px";
  } else {
    labelReg[1].style.top = "50%";
  }
});

// la checkbox

// check.checked ? check.classList.add("active") : check.classList.remove("active")

// document.addEventListener("DOMContentLoaded", e => {
//     let check = document.getElementById("registration_form_agreeTerms")
//     if(check.checked) {
//         alert("checked")
//     }
//     console.log(check);

// })

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-f98d0d"], () => (__webpack_exec__("./assets/js/register.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXHRcdGNvbnN0IGV5ZVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV5ZVJlZ2lzdGVyXCIpXG5cdFx0Y29uc3QgZXllb2ZmUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXllb2ZmUmVnaXN0ZXJcIilcblx0XHRjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3Bhc3N3b3JkJ11cIilcbiAgICAgICAgY29uc3QgY2FwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dSZWdpc3RlclwiKVxuICAgICAgICB2YXIgdGV4dFIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ2lzdGVyZWRcIilcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilcbiAgICAgICAgY29uc3QgbGFiZWxSZWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIilcbiAgICAgICAgY29uc29sZS5sb2cobGFiZWxSZWcpO1xuXG5cdFx0dmFyIGlzRm9jdXNlZCA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBwYXNzd29yZEZpZWxkKVxuICAgICAgICBsZXQgYiA9IFwicmdiKDExMSwgNTQsIDIyNylcIlxuXHRcdGV5ZVIuc3R5bGUuY29sb3IgPSBcIlwiXG5cbiAgICAgICAgICAgIHBhc3N3b3JkRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGV5ZVIuc3R5bGUuY29sb3IgPSBiXG4gICAgICAgICAgICAgICAgZXllb2ZmUi5zdHlsZS5jb2xvciA9IGJcbiAgICAgICAgICAgICAgICBjYXBzLnN0eWxlLmNvbG9yID0gYlxuICAgICAgICAgICAgICAgIGV5ZVIuc3R5bGUudHJhbnNpdGlvbiA9IFwiMzAwbXNcIlxuICAgICAgICAgICAgICAgIGV5ZW9mZlIuc3R5bGUudHJhbnNpdGlvbiA9ICczMDBtcydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwYXNzd29yZEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGV5ZVIuc3R5bGUuY29sb3IgPSAnJ1xuICAgICAgICAgICAgICAgIGV5ZW9mZlIuc3R5bGUuY29sb3IgPSAnJ1xuICAgICAgICAgICAgICAgIGNhcHMuc3R5bGUuY29sb3IgPSBcIlwiXG4gICAgICAgICAgICAgICAgZXllUi5zdHlsZS50cmFuc2l0aW9uID0gXCIzMDBtc1wiXG4gICAgICAgICAgICAgICAgZXllb2ZmUi5zdHlsZS50cmFuc2l0aW9uID0gJzMwMG1zJ1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZnVuYykgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXllUi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgZXllUi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV5ZVIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGV5ZW9mZlIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZXllb2ZmUi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBleWVvZmZSLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBleWVSLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuLy8gQ2hhbmdlciBsJ2FmZmljaGFnZSBkZXMgbG9nb3Ncblx0XHRjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5GSUdOSFwiKVxuXHRcdGNvbnN0IGxvZ28yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5GSUdIXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ28pO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2dvMik7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9jUmVnaXN0ZXJGb3JtXCIpXG5cblx0XHQgZnVuY3Rpb24gZW50ZXIoKSB7XG5cdFx0XHRsb2dvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblx0XHRcdGxvZ28yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGxlYXZlKCkge1xuXHRcdFx0bG9nby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXHRcdFx0bG9nbzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdH1cblx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZSA9PiB7XG5cdFx0XHRlbnRlcigpXG5cdFx0fSlcblx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZiA9PiB7XG5cdFx0XHRsZWF2ZSgpXG5cdFx0fSlcblxuXG4gICAgICAgIC8vIEJvdXRvbiBjYXBzIGxvY2tcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZnVuYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGZ1bmMuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXBzLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYXBzLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpbnB1dC5mb3JFYWNoKGlucHV0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFIuc3R5bGUuY29sb3IgPSBcIiNjY2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Ui5zdHlsZS5jb2xvciA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpbnB1dFswXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZmID0+IHtcbiAgICAgICAgICAgICAgICBsYWJlbFJlZ1swXS5zdHlsZS5jb2xvciA9IGJcbiAgICAgICAgICAgICAgICBpbnB1dFswXS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihmZi50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxSZWdbMF0uc3R5bGUudG9wID0gXCI1JVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFJlZ1swXS5zdHlsZS5mb250U2l6ZSA9IFwiMTNweFwiXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUmVnWzBdLnN0eWxlLnRvcCA9IFwiNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUmVnWzBdLnN0eWxlLmZvbnRTaXplID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlucHV0WzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZmYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFJlZ1sxXS5zdHlsZS5jb2xvciA9IGJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbMV0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZmLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxSZWdbMV0uc3R5bGUudG9wID0gXCI1JVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxSZWdbMV0uc3R5bGUuZm9udFNpemUgPSBcIjEzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUmVnWzFdLnN0eWxlLnRvcCA9IFwiNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFJlZ1sxXS5zdHlsZS5mb250U2l6ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlucHV0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGIgPT4ge1xuICAgICAgICAgICAgICAgIGxhYmVsUmVnWzBdLnN0eWxlLmNvbG9yID0gXCJcIlxuICAgICAgICAgICAgICAgIGlmKGIudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSZWdbMF0uc3R5bGUudG9wID0gXCI1JVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUmVnWzFdLnN0eWxlLmZvbnRTaXplID0gXCIxM3B4XCJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUmVnWzBdLnN0eWxlLnRvcCA9IFwiNTAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaW5wdXRbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgYiA9PiB7XG4gICAgICAgICAgICAgICAgbGFiZWxSZWdbMV0uc3R5bGUgPSBcIlwiXG4gICAgICAgICAgICAgICAgaWYoYi50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFJlZ1sxXS5zdHlsZS50b3AgPSBcIjUlXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSZWdbMV0uc3R5bGUuZm9udFNpemUgPSBcIjEzcHhcIlxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSZWdbMV0uc3R5bGUudG9wID0gXCI1MCVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgLy8gbGEgY2hlY2tib3hcblxuXG4gICAgICAgICAgICAvLyBjaGVjay5jaGVja2VkID8gY2hlY2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSA6IGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcblxuXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBlID0+IHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdHJhdGlvbl9mb3JtX2FncmVlVGVybXNcIilcbiAgICAgICAgICAgIC8vICAgICBpZihjaGVjay5jaGVja2VkKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGFsZXJ0KFwiY2hlY2tlZFwiKVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjaGVjayk7XG5cbiAgICAgICAgICAgIC8vIH0pXG5cblxuXG5cblxuXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbImV5ZVIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJleWVvZmZSIiwicGFzc3dvcmRGaWVsZCIsImNhcHMiLCJ0ZXh0UiIsImlucHV0IiwicXVlcnlTZWxlY3RvckFsbCIsImxhYmVsUmVnIiwiY29uc29sZSIsImxvZyIsImlzRm9jdXNlZCIsImFjdGl2ZUVsZW1lbnQiLCJiIiwic3R5bGUiLCJjb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidHJhbnNpdGlvbiIsImZ1bmMiLCJkaXNwbGF5IiwidHlwZSIsImxvZ28iLCJsb2dvMiIsImNvbnRhaW5lciIsImVudGVyIiwibGVhdmUiLCJmIiwid2luZG93IiwiZ2V0TW9kaWZpZXJTdGF0ZSIsImZvckVhY2giLCJpbnB1dHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiZmYiLCJpIiwidG9wIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9