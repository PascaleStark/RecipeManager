/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/helper.js":
/*!**************************!*\
  !*** ./src/JS/helper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testingWebpack": () => (/* binding */ testingWebpack),
/* harmony export */   "testingWebpack2": () => (/* binding */ testingWebpack2),
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
var testingWebpack = "I am bundling your js files";
var testingWebpack2 = "I am still bundling your js files";
var timeout = function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long! Timeout after ".concat(s, " second")));
    }, s * 1000);
  });
};

/***/ }),

/***/ "./src/JS/model.js":
/*!*************************!*\
  !*** ./src/JS/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadRecipe": () => (/* binding */ loadRecipe)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/JS/helper.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var loadRecipe = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var fetchPro, resp, data, recipeObject, recipe;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //load recipe object
            fetchPro = fetch(url, {
              method: "GET"
            });
            _context.next = 4;
            return Promise.race([fetchPro, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context.sent;
            _context.next = 7;
            return resp.json();

          case 7:
            data = _context.sent;
            console.log(data); //refactoring the recipe object

            recipeObject = data[0];
            console.log(recipeObject);
            recipe = {
              title: recipeObject.name,
              publisher: recipeObject.addedBy,
              category: recipeObject.category,
              prepartionTime: recipeObject.prepTime,
              cookingTime: recipeObject.cookingTime,
              servings: recipeObject.servings,
              url: recipeObject.url,
              ingredients: recipeObject.ingredients,
              directions: recipeObject.directions
            };
            return _context.abrupt("return", recipe);

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function loadRecipe(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/JS/view/RecipeView.js":
/*!***********************************!*\
  !*** ./src/JS/view/RecipeView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RecipeView = /*#__PURE__*/function () {
  function RecipeView() {
    _classCallCheck(this, RecipeView);

    _defineProperty(this, "_parentEl", document.querySelector(".recipe-view"));

    _defineProperty(this, "_data", void 0);
  }

  _createClass(RecipeView, [{
    key: "renderRecipeView",
    value: //   addOpenRecipeHandler(handler) {
    //     this._parentEl.addEventListener("click", function (e) {
    //       const btnOpen = e.target
    //         .closest(".modal-view")
    //         .previousSibling.querySelector(".recipe__card--btn");
    //       console.log(btnOpen);
    //       if (!btnOpen) return;
    //       if (e.target === btnOpen) {
    //         this._parentEl.style.display = "block";
    //         handler("http://192.168.4.10:8300/recipes/where?id=6");
    //       }
    //     });
    //   }
    //   addCloseRecipeHandler() {
    //     this._parentEl.addEventListener("click", function (e) {
    //       const modalView = e.target.closest(".modal-view");
    //       if (modalView && modalView.id === "closeModal")
    //         this._parentEl.style.display = "none";
    //     });
    //   }
    function renderRecipeView(data) {
      this._parentEl.innerHTML = "";
      this._data = data;

      this._generateMarkup();

      this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
    }
  }, {
    key: "_generateMarkup",
    value: function _generateMarkup() {
      return "<svg class=\"icon icon__close-view icon__close-outline\" id=\"closeModal\">\n    <use\n      xlink:href=\"./src/img/icons.svg#icon-close-outline\"\n    ></use></svg>\n<h1 class=\" heading--secondary\">".concat(this._data.title, "</h1>\n<div class=\"recipe-view__info\">\n<div class=\"recipe-view__ingredients\">\n  <h2 class=\"heading--tertiary\">Ingredients</h2>\n  \n  <div class=\"recipe-view__ingredients--details\">\n    <ul class=\"list-style\">\n    ").concat(this._data.ingredients.map(function (ing) {
        return "<li><svg class=\"icon icon__cheveron-right\">\n      <use\n        xlink:href=\"./src/img/icons.svg#icon-cheveron-right\"\n      ></use></svg\n    ><span class=\"recipe-view__element--text\">".concat(ing, "</span></li>");
      }).join(""), "\n    </ul>\n  </div>\n</div>\n\n<div class=\"recipe-view__info--details\">\n  <svg class=\"icon icon__file--text\">\n    <use\n      xlink:href=\"./src/img/icons.svg#icon-file-text\"\n    ></use></svg\n  >\n  <ul class=\"list-style\">\n    <li><span class=\"text-bolder\">Preparation time:</span> ").concat(this._data.prepartionTime, "</li>\n    <li><span class=\"text-bolder\">Cooking time:</span> ").concat(this._data.cookingTime, "</li>\n    <li><span class=\"text-bolder\">Servings:</span> ").concat(this._data.servings, "</li>\n    <li><span class=\"text-bolder\">Category:</span> ").concat(this._data.category, "</li>\n    <li><span class=\"text-bolder\">Publisher:</span> ").concat(this._data.publisher, "</li>\n  </ul>\n</div>\n</div>\n\n<div class=\"recipe-view__directions\">\n<h2 class=\"heading--tertiary\">Directions</h2>\n<div class=\"recipe-view__directions--details\">\n  <ul class=\"list-style\">\n    ").concat(this._data.directions.map(function (direc, i) {
        return "<li class=\"recipe-view__directions--element\"><svg class=\"icon icon__checkmark-outline\">\n      <use\n        xlink:href=\"./src/img/icons.svg#icon-checkmark-outline\"\n      ></use></svg\n    ><span class=\"text-bolder\">Step ".concat(i + 1, ":&nbsp;</span>").concat(direc, "</li>");
      }).join(""), "\n  </ul>\n</div>\n</div>");
    }
  }]);

  return RecipeView;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new recipeView());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/JS/helper.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/JS/model.js");
/* harmony import */ var _view_RecipeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/RecipeView */ "./src/JS/view/RecipeView.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var body = document.getElementsByTagName("body")[0];
var addRecipe = document.querySelector(".nav__add-recipe--btn");
var menuAddRecipe = document.querySelector(".addrecipe");
var closeForm = document.querySelector(".icon__close-form");
var viewRecipeBtn = document.querySelector(".recipe__card--btn");
var closeView = document.querySelector(".icon__close-view");
var modalView = document.querySelector(".modal-view");
var addrecipeView = document.querySelector(".add-recipe-view");
var recipeDisplay = document.querySelector(".recipe-view");
var btnMenu = document.querySelector(".hamburger-menu");
var viewMenu = document.querySelector(".menu-section");
var closeMenu = document.querySelector(".menu-view__icon");
var btnFilter = document.querySelector(".dropdown__btn");
var dropdownFilter = document.querySelector(".dropdown__filters");
body.addEventListener("click", function (event) {
  if (event.target !== addRecipe && event.target !== menuAddRecipe) {
    return;
  }

  viewMenu.style.display = "none";
  addrecipeView.style.display = "block";
});
closeForm.addEventListener("click", function () {
  addrecipeView.style.display = "none";
  body.classList.remove("my-body-noscroll-class");
});
btnMenu.addEventListener("click", function () {
  viewMenu.style.display = "block";
  body.classList.add("my-body-noscroll-class");
});
closeMenu.addEventListener("click", function () {
  viewMenu.style.display = "none";
  body.classList.remove("my-body-noscroll-class");
});
btnFilter.addEventListener("click", function () {
  dropdownFilter.classList.add("scale-back");
}); ///////////////////////////////////////////////
//Add a recipe

var addrecipe = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, uploadData) {
    var fetchPro, resp, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fetchPro = fetch(url, {
              method: "POST",
              mode: "no-cors",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(uploadData)
            });
            _context.next = 4;
            return Promise.race([fetchPro, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(10)]);

          case 4:
            resp = _context.sent;
            _context.next = 7;
            return resp.json();

          case 7:
            data = _context.sent;
            console.log(data);

            if (resp.ok) {
              _context.next = 11;
              break;
            }

            throw new Error("".concat(data.message, " (").concat(resp.status, ")"));

          case 11:
            return _context.abrupt("return", data);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function addrecipe(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var form = document.querySelector(".add-recipe-view__form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var dataArr = _toConsumableArray(new FormData(form));

  var data = Object.fromEntries(dataArr);
  console.log(data); //clear form

  form.reset();
  addrecipe("http://192.168.4.10:8300/recipes", data);
}); ///////////////////////////////////////////////////////////

var controlrecipeView = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
    var recipe;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _model__WEBPACK_IMPORTED_MODULE_1__.loadRecipe(url);

          case 3:
            recipe = _context2.sent;
            //2. render recipe view
            _view_RecipeView__WEBPACK_IMPORTED_MODULE_2__.default.renderRecipeView(recipe);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function controlrecipeView(_x3) {
    return _ref2.apply(this, arguments);
  };
}(); ///////////////////////////////////////////////////////////
//Event handlers using Publisher-Subscriber pattern
// const init = function () {
//   recipeView.addOpenRecipeHandler(controlrecipeView);
//   recipeView.addCloseRecipeHandler();
// };
// init();


viewRecipeBtn.addEventListener("click", function () {
  recipeDisplay.style.display = "block";
  controlrecipeView("http://192.168.4.10:8300/recipes/where?id=13");
});
modalView.addEventListener("click", function (e) {
  if (e.target && e.target.id === "closeModal") recipeDisplay.style.display = "none";
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map