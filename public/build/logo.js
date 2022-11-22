(self["webpackChunk"] = self["webpackChunk"] || []).push([["logo"],{

/***/ "./assets/js/logo.js":
/*!***************************!*\
  !*** ./assets/js/logo.js ***!
  \***************************/
/***/ (() => {

var F3 = document.querySelector('.FIG3');
var Info = document.querySelector('.Info');
var modal = document.querySelector(".modal");
var span = document.getElementsByClassName("close")[0];
var body = document.body;
var hDesc = document.querySelector('.hDesc');
F3.style.display = "none";
Info.style.display = "flex";
var read = document.getElementById('r');
console.log(str);
if (length > 20) {
  read.style.display = "block";
  hDesc.style.setProperty('text-overflow', "ellipsis");
  hDesc.style.overflow = "hidden";
} else {
  read.style.display = "";
}
read.onclick = function () {
  modal.style.display = 'block';
  body.classList.add('modal-open');
  if (body.classList.contains('modal-open')) {
    body.style.overflow = 'hidden';
  }
};
span.onclick = function () {
  modal.style.display = "none";
  body.classList.remove('modal-open');
  if (!body.classList.contains('modal-open')) {
    body.style.overflow = 'auto';
  }
};
body.style.overflow = "auto";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/logo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzFDLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDLElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQzlDLElBQU1HLElBQUksR0FBR0osUUFBUSxDQUFDSyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUNNLElBQUk7QUFDMUIsSUFBTUMsS0FBSyxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFFOUNGLEVBQUUsQ0FBQ1MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtBQUN6QlAsSUFBSSxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0FBRzNCLElBQU1DLElBQUksR0FBR1YsUUFBUSxDQUFDVyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO0FBQ2hCLElBQUdDLE1BQU0sR0FBRyxFQUFFLEVBQUU7RUFDWkwsSUFBSSxDQUFDRixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0VBQzVCRixLQUFLLENBQUNDLEtBQUssQ0FBQ1EsV0FBVyxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUM7RUFDcERULEtBQUssQ0FBQ0MsS0FBSyxDQUFDUyxRQUFRLEdBQUcsUUFBUTtBQUNuQyxDQUFDLE1BQUs7RUFDRlAsSUFBSSxDQUFDRixLQUFLLENBQUNDLE9BQU8sR0FBRyxFQUFFO0FBQzNCO0FBRUFDLElBQUksQ0FBQ1EsT0FBTyxHQUFHLFlBQVc7RUFDdEJmLEtBQUssQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztFQUM3QkgsSUFBSSxDQUFDYSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDaEMsSUFBSWQsSUFBSSxDQUFDYSxTQUFTLENBQUNFLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtJQUN2Q2YsSUFBSSxDQUFDRSxLQUFLLENBQUNTLFFBQVEsR0FBRSxRQUFRO0VBQ2pDO0FBQ0osQ0FBQztBQUdDYixJQUFJLENBQUNjLE9BQU8sR0FBRyxZQUFXO0VBQ3hCZixLQUFLLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDNUJILElBQUksQ0FBQ2EsU0FBUyxDQUFDRyxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQy9CLElBQUksQ0FBQ2hCLElBQUksQ0FBQ2EsU0FBUyxDQUFDRSxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7SUFDNUNmLElBQUksQ0FBQ0UsS0FBSyxDQUFDUyxRQUFRLEdBQUUsTUFBTTtFQUMvQjtBQUNGLENBQUM7QUFDRFgsSUFBSSxDQUFDRSxLQUFLLENBQUNTLFFBQVEsR0FBRyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRklHMycpXG5jb25zdCBJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkluZm8nKVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpXG5jb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbmNvbnN0IGhEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhEZXNjJylcblxuRjMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5JbmZvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuXG5cbmNvbnN0IHJlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncicpXG5jb25zb2xlLmxvZyhzdHIpO1xuaWYobGVuZ3RoID4gMjApIHtcbiAgICByZWFkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICBoRGVzYy5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1vdmVyZmxvdycsIFwiZWxsaXBzaXNcIilcbiAgICBoRGVzYy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbn1lbHNlIHtcbiAgICByZWFkLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG59XG5cbnJlYWQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJylcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLW9wZW4nKSkge1xuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93PSAnaGlkZGVuJ1xuICAgIH1cbn1cblxuXG4gIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKVxuICAgICAgICBpZiAoIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1vcGVuJykpIHtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdz0gJ2F1dG8nXG4gICAgfVxuICB9XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuXG5cbiJdLCJuYW1lcyI6WyJGMyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkluZm8iLCJtb2RhbCIsInNwYW4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYm9keSIsImhEZXNjIiwic3R5bGUiLCJkaXNwbGF5IiwicmVhZCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsInN0ciIsImxlbmd0aCIsInNldFByb3BlcnR5Iiwib3ZlcmZsb3ciLCJvbmNsaWNrIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9