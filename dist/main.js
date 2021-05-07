/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/config.js":
/*!**************************!*\
  !*** ./src/JS/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL": () => (/* binding */ URL)
/* harmony export */ });
var URL = "http://192.168.4.10:8300/recipes";

/***/ }),

/***/ "./src/JS/helper.js":
/*!**************************!*\
  !*** ./src/JS/helper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRecipe": () => (/* binding */ addRecipe),
/* harmony export */   "loadRecipe": () => (/* binding */ loadRecipe),
/* harmony export */   "searchRecipe": () => (/* binding */ searchRecipe),
/* harmony export */   "editFavourites": () => (/* binding */ editFavourites)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/JS/helper.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var addRecipe = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, uploadData) {
    var fetchPro, resp, data;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(url);
            console.log(uploadData);
            fetchPro = fetch(url, {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(uploadData)
            });
            _context.next = 6;
            return Promise.race([fetchPro, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(10)]);

          case 6:
            resp = _context.sent;
            console.log(resp);
            _context.next = 10;
            return resp.json();

          case 10:
            data = _context.sent;
            console.log(data);

            if (resp.ok) {
              _context.next = 14;
              break;
            }

            throw new Error("".concat(data.message, " (").concat(resp.status, ")"));

          case 14:
            return _context.abrupt("return", data);

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            throw new Error("Something went wrong, please try again later! ".concat(_context.t0));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function addRecipe(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var loadRecipe = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(url) {
    var fetchPro, resp, data, recipeObject, recipe;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            //load recipe object
            fetchPro = fetch(url, {
              method: "GET"
            });
            _context2.next = 4;
            return Promise.race([fetchPro, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context2.sent;
            _context2.next = 7;
            return resp.json();

          case 7:
            data = _context2.sent;
            //console.log(data);
            //refactoring the recipe object
            recipeObject = data[0];
            console.log(recipeObject);
            recipe = {
              id: recipeObject.id,
              title: recipeObject.name,
              publisher: recipeObject.addedBy,
              category: recipeObject.category,
              prepartionTime: recipeObject.prepTime,
              cookingTime: recipeObject.cookingTime,
              servings: recipeObject.servings,
              url: recipeObject.url,
              ingredients: recipeObject.ingredients,
              directions: recipeObject.directions,
              favourites: recipeObject.favourites,
              featured: recipeObject.featured
            };
            return _context2.abrupt("return", recipe);

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));

  return function loadRecipe(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var searchRecipe = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(url) {
    var fetchPro, resp, data, recipes;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            //load recipe object
            fetchPro = fetch(url, {
              method: "GET"
            });
            _context3.next = 4;
            return Promise.race([fetchPro, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context3.sent;
            _context3.next = 7;
            return resp.json();

          case 7:
            data = _context3.sent;
            console.log(data); // if (!data) throw new Error(`No recipe is found`);
            //refactoring the recipe object

            recipes = data.map(function (res) {
              return {
                id: res.id,
                title: res.name,
                publisher: res.addedBy,
                category: res.category,
                prepartionTime: res.prepTime,
                cookingTime: res.cookingTime,
                servings: res.servings,
                url: res.url,
                ingredients: res.ingredients,
                directions: res.directions,
                favourites: res.favourites,
                featured: res.featured
              };
            });
            return _context3.abrupt("return", recipes);

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function searchRecipe(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var editFavourites = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(url) {
    var fetchPro, resp, data;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            console.log(url);
            fetchPro = fetch(url, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json"
              }
            });
            _context4.next = 5;
            return Promise.race([fetchPro, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(10)]);

          case 5:
            resp = _context4.sent;
            console.log(resp);
            _context4.next = 9;
            return resp.json();

          case 9:
            data = _context4.sent;
            console.log(data);

            if (resp.ok) {
              _context4.next = 13;
              break;
            }

            throw new Error("".concat(data.message, " (").concat(resp.status, ")"));

          case 13:
            return _context4.abrupt("return", data);

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            throw new Error("Something went wrong, please try again later! ".concat(_context4.t0));

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 16]]);
  }));

  return function editFavourites(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/JS/view/addRecipeView.js":
/*!**************************************!*\
  !*** ./src/JS/view/addRecipeView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ "./src/JS/view/view.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var AddRecipeView = /*#__PURE__*/function (_View) {
  _inherits(AddRecipeView, _View);

  var _super = _createSuper(AddRecipeView);

  function AddRecipeView() {
    var _this;

    _classCallCheck(this, AddRecipeView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_addRecipeBtn", document.querySelector(".nav__add-recipe--btn"));

    _defineProperty(_assertThisInitialized(_this), "_modal", document.querySelector(".modal-view"));

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".add-recipe-view"));

    _defineProperty(_assertThisInitialized(_this), "_form", document.querySelector(".add-recipe-view__form"));

    _defineProperty(_assertThisInitialized(_this), "_closeForm", document.querySelector(".icon__close-form"));

    _defineProperty(_assertThisInitialized(_this), "_menuBtn", document.querySelector(".hamburger-menu"));

    _defineProperty(_assertThisInitialized(_this), "_viewMenu", document.querySelector(".menu-section"));

    _defineProperty(_assertThisInitialized(_this), "_addRecipeMenuBtn", document.querySelector(".addrecipe"));

    _defineProperty(_assertThisInitialized(_this), "_closeMenu", document.querySelector(".menu-view__icon"));

    _this._openAddRecipeView();

    _this._closeAddRecipeView();

    _this._openAddRecipeMenu();

    _this._closeAddRecipeMenu();

    return _this;
  }

  _createClass(AddRecipeView, [{
    key: "showForm",
    value: function showForm(e) {
      if (e.target !== this._addRecipeBtn && e.target !== this._addRecipeMenuBtn) {
        return;
      }

      this._viewMenu.style.display = "none";
      this.showModalView();
    }
  }, {
    key: "_openAddRecipeView",
    value: function _openAddRecipeView() {
      this._body.addEventListener("click", this.showForm.bind(this));
    }
  }, {
    key: "_closeAddRecipeView",
    value: function _closeAddRecipeView() {
      this._closeForm.addEventListener("click", this.hideModalView.bind(this));
    }
  }, {
    key: "showMenuView",
    value: function showMenuView() {
      this._viewMenu.style.display = "block";

      this._body.classList.remove("my-body-noscroll-class");
    }
  }, {
    key: "_openAddRecipeMenu",
    value: function _openAddRecipeMenu() {
      this._menuBtn.addEventListener("click", this.showMenuView.bind(this));
    }
  }, {
    key: "hideMenuView",
    value: function hideMenuView() {
      this._viewMenu.style.display = "none";

      this._body.classList.remove("my-body-noscroll-class");
    }
  }, {
    key: "_closeAddRecipeMenu",
    value: function _closeAddRecipeMenu() {
      this._closeMenu.addEventListener("click", this.hideMenuView.bind(this));
    }
  }, {
    key: "addFormEventHandler",
    value: function addFormEventHandler(handler) {
      this._form.addEventListener("submit", function (e) {
        e.preventDefault();

        var dataArr = _toConsumableArray(new FormData(this));

        var data = Object.fromEntries(dataArr);
        console.log(data);
        this.reset();
        handler("http://192.168.4.10:8300/recipes", data);
      });
    }
  }, {
    key: "renderView",
    value: function renderView() {
      this._parentEl.innerHTML = "";

      this._generateMarkup();

      this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
    }
  }, {
    key: "_generateMarkup",
    value: function _generateMarkup() {
      return "<div class=\"sub-message\">\n    <svg class=\"icon icon__close-outline icon__close-form\">\n      <use xlink:href=\"./src/img/icons.svg#icon-close-outline\"></use>\n    </svg>\n\n    <p class=\"sub-message__msg\">\n      <svg class=\"icon sub-message__icon\">\n        <use\n          xlink:href=\"./src/img/icons.svg#icon-checkmark-outline\"\n        ></use>\n      </svg>\n      Your recipe has been posted successfully!\n    </p>\n    <div class=\"sub-message__img\">\n    <!-- https://images.app.goo.gl/csVNcPY99rLkdkKZ8 -->\n      <img src=\"./src/img/balloon.gif\" alt=\"hot-air-balloon\" />\n    </div>\n  </div>";
    }
  }]);

  return AddRecipeView;
}(_view_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddRecipeView());

/***/ }),

/***/ "./src/JS/view/favouritesView.js":
/*!***************************************!*\
  !*** ./src/JS/view/favouritesView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/JS/view/view.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ "./src/JS/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var FavouritesView = /*#__PURE__*/function (_View) {
  _inherits(FavouritesView, _View);

  var _super = _createSuper(FavouritesView);

  function FavouritesView() {
    var _this;

    _classCallCheck(this, FavouritesView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".recipe__container"));

    _defineProperty(_assertThisInitialized(_this), "_favouriteRecipeBtn", document.querySelector(".icon-heart"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_titleView", "Favourites");

    _defineProperty(_assertThisInitialized(_this), "_allFavouritesBtn", document.querySelector(".nav__favorites--btn"));

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _this.setFavouriteIcon();

    return _this;
  }

  _createClass(FavouritesView, [{
    key: "_setRecipeID",
    value: function _setRecipeID(handler, e) {
      var targetEl = e.target.closest(".icon-heart");
      console.log(targetEl);

      if (targetEl) {
        var id = targetEl.dataset.id;
        handler("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__.URL, "/favourites/").concat(id));
      }
    }
  }, {
    key: "toggleFavourites",
    value: function toggleFavourites(handler) {
      this._body.addEventListener("click", this._setRecipeID.bind(this, handler));
    }
  }, {
    key: "_toggleHeartIcon",
    value: function _toggleHeartIcon(e) {
      var targetEl = e.target.closest(".icon-heart");
      console.log(targetEl);

      if (targetEl) {
        targetEl.classList.toggle("empty-icon");
        targetEl.classList.toggle("filled-icon");
      }
    }
  }, {
    key: "setFavouriteIcon",
    value: function setFavouriteIcon() {
      this._body.addEventListener("click", this._toggleHeartIcon.bind(this));
    }
  }, {
    key: "openFavouritesView",
    value: function openFavouritesView(handler) {
      this._allFavouritesBtn.addEventListener("click", function () {
        document.querySelector(".results__heading").scrollIntoView({
          behavior: "smooth"
        });
        handler();
      });
    }
  }]);

  return FavouritesView;
}(_view__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FavouritesView());

/***/ }),

/***/ "./src/JS/view/featuredView.js":
/*!*************************************!*\
  !*** ./src/JS/view/featuredView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/JS/view/view.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ "./src/JS/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var FeaturedView = /*#__PURE__*/function (_View) {
  _inherits(FeaturedView, _View);

  var _super = _createSuper(FeaturedView);

  function FeaturedView() {
    var _this;

    _classCallCheck(this, FeaturedView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".recipe__container"));

    _defineProperty(_assertThisInitialized(_this), "_featuredRecipeBtn", document.querySelector(".icon-star"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_titleView", "Featured");

    _defineProperty(_assertThisInitialized(_this), "_allFavouritesBtn", document.querySelector(".nav__favorites--btn"));

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _this.setFeaturedIcon();

    return _this;
  }

  _createClass(FeaturedView, [{
    key: "_setRecipeID",
    value: function _setRecipeID(handler, e) {
      var targetEl = e.target.closest(".icon-star");
      console.log(targetEl);

      if (targetEl) {
        var id = targetEl.dataset.id;
        handler("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__.URL, "/featured/").concat(id));
      }
    }
  }, {
    key: "toggleFeatured",
    value: function toggleFeatured(handler) {
      this._body.addEventListener("click", this._setRecipeID.bind(this, handler));
    }
  }, {
    key: "_toggleStarIcon",
    value: function _toggleStarIcon(e) {
      var targetEl = e.target.closest(".icon-star");
      console.log(targetEl);

      if (targetEl) {
        targetEl.classList.toggle("empty-icon");
        targetEl.classList.toggle("filled-icon");
      }
    }
  }, {
    key: "setFeaturedIcon",
    value: function setFeaturedIcon() {
      this._body.addEventListener("click", this._toggleStarIcon.bind(this));
    }
  }]);

  return FeaturedView;
}(_view__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FeaturedView());

/***/ }),

/***/ "./src/JS/view/recipeView.js":
/*!***********************************!*\
  !*** ./src/JS/view/recipeView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/JS/view/view.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ "./src/JS/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var RecipeView = /*#__PURE__*/function (_View) {
  _inherits(RecipeView, _View);

  var _super = _createSuper(RecipeView);

  function RecipeView() {
    var _this;

    _classCallCheck(this, RecipeView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".recipe-view"));

    _defineProperty(_assertThisInitialized(_this), "_viewRecipeBtn", document.querySelector(".recipe__card--btn"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _this._closeRecipeView();

    return _this;
  }

  _createClass(RecipeView, [{
    key: "openRecipeView",
    value: function openRecipeView(handler) {
      this._body.addEventListener("click", this._setRecipeID.bind(this, handler));
    }
  }, {
    key: "_setRecipeID",
    value: function _setRecipeID(handler, e) {
      var targetEl = e.target.closest("#btn-view");
      console.log(targetEl);

      if (targetEl) {
        var id = targetEl.dataset.id;
        this.showModalView();
        handler("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__.URL, "/where?id=").concat(id));
      }
    }
  }, {
    key: "_closeRecipeView",
    value: function _closeRecipeView() {
      var self = this;

      this._parentEl.addEventListener("click", function (e) {
        if (e.target && e.target.id === "closeModal") self.hideModalView();
      });
    }
  }, {
    key: "renderView",
    value: function renderView(data) {
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
}(_view_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new RecipeView());

/***/ }),

/***/ "./src/JS/view/searchRecipesView.js":
/*!******************************************!*\
  !*** ./src/JS/view/searchRecipesView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/JS/view/view.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SearchRecipeView = /*#__PURE__*/function (_View) {
  _inherits(SearchRecipeView, _View);

  var _super = _createSuper(SearchRecipeView);

  function SearchRecipeView() {
    var _this;

    _classCallCheck(this, SearchRecipeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".recipe__container"));

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _defineProperty(_assertThisInitialized(_this), "_searchForm", document.querySelector(".search"));

    _defineProperty(_assertThisInitialized(_this), "_titleView", "Search results");

    return _this;
  }

  _createClass(SearchRecipeView, [{
    key: "openSearchRecipeView",
    value: function openSearchRecipeView(handler) {
      this._searchForm.addEventListener("submit", function (e) {
        var searchEl = document.querySelector(".search__input");
        e.preventDefault();
        document.querySelector(".results__heading").scrollIntoView({
          behavior: "smooth"
        });
        var query = searchEl.value;
        handler(query);
        searchEl.value = "";
      });
    }
  }]);

  return SearchRecipeView;
}(_view_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SearchRecipeView());

/***/ }),

/***/ "./src/JS/view/view.js":
/*!*****************************!*\
  !*** ./src/JS/view/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

    _defineProperty(this, "_data", void 0);
  }

  _createClass(View, [{
    key: "renderSpinner",
    value: function renderSpinner() {
      var spinnerMarkup = "<div class=\"spinner\">\n      <svg class=\"spinner__icon\">\n        <use xlink:href=\"./src/img/icons.svg#icon-spinner3\"></use>\n      </svg>\n    </div>";
      this._parentEl.innerHTML = "";

      this._parentEl.insertAdjacentHTML("beforeend", spinnerMarkup);
    }
  }, {
    key: "hideModalView",
    value: function hideModalView() {
      this._parentEl.style.display = "none"; //reactivate body scroll

      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, {
    key: "showModalView",
    value: function showModalView() {
      this._parentEl.style.display = "block"; //prevent body scroll

      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, {
    key: "renderResultsView",
    value: function renderResultsView(data) {
      var _this = this;

      this._parentEl.innerHTML = "";
      this._data = data;

      this._data.forEach(function (result) {
        _this._parentEl.insertAdjacentHTML("afterbegin", _this._generateMarkup(result));
      });

      this._resultsHeading.textContent = "".concat(this._titleView);
    }
  }, {
    key: "_generateMarkup",
    value: function _generateMarkup(result) {
      return "<div class=\"recipe__card\">\n    <img\n      src=\"./src/img/pizza.jpg\"\n      class=\"recipe__card--img\"\n      alt=\"recipe img\"\n    />\n    <svg class=\"icon-heart recipe__card--icon  ".concat(result.favourites === 1 ? "filled-icon" : "empty-icon", "\" data-id=\"").concat(result.id, "\">\n      <use xlink:href=\"./src/img/icons.svg#icon-heart\"></use>\n    </svg>\n    <svg class=\"icon-star recipe__card--icon-star  ").concat(result.featured === 1 ? "filled-icon" : "empty-icon", "\" data-id=\"").concat(result.id, "\">\n      <use xlink:href=\"./src/img/icons.svg#icon-star-full\"></use>\n    </svg>\n    <h3 class=\"recipe__card--title heading--tertiary\">").concat(result.title, "</h3>\n    <div class=\"recipe__card--back\" id=\"btn-view\" data-id=\"").concat(result.id, "\">\n      <button class=\"btn recipe__card--btn hidden\" ><span class=\"underline\">View Recipe &rarr;</span></button>\n    </div>\n    </div>");
    }
  }]);

  return View;
}();



/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/JS/model.js");
/* harmony import */ var _view_recipeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/recipeView */ "./src/JS/view/recipeView.js");
/* harmony import */ var _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/addRecipeView */ "./src/JS/view/addRecipeView.js");
/* harmony import */ var _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/searchRecipesView */ "./src/JS/view/searchRecipesView.js");
/* harmony import */ var _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/favouritesView */ "./src/JS/view/favouritesView.js");
/* harmony import */ var _view_featuredView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/featuredView */ "./src/JS/view/featuredView.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.js */ "./src/JS/config.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var btnFilter = document.querySelector(".dropdown__btn");
var dropdownFilter = document.querySelector(".dropdown__filters");
btnFilter.addEventListener("click", function () {
  dropdownFilter.classList.add("scale-back");
}); ////////////////////ADD RECIPE//////////////////////////////
//Add a recipe

var controlAddRecipe = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(url, uploadData) {
    var result;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //1. render spinner
            _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default.renderSpinner(); //1. Add Recipe

            _context.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.addRecipe(url, uploadData);

          case 4:
            result = _context.sent;
            console.log(result); //2. Render Success Message

            _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default.renderView();
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function controlAddRecipe(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); ////////////////////RECIPE VIEW//////////////////////////////


var controlrecipeView = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2(url) {
    var recipe;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            //1. render spinner
            _view_recipeView__WEBPACK_IMPORTED_MODULE_1__.default.renderSpinner(); //2. Load recipe

            _context2.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.loadRecipe(url);

          case 4:
            recipe = _context2.sent;
            //3. render recipe view
            _view_recipeView__WEBPACK_IMPORTED_MODULE_1__.default.renderView(recipe);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function controlrecipeView(_x3) {
    return _ref2.apply(this, arguments);
  };
}(); ////////////////////SEARCH//////////////////////////////


var controlSearchRecipe = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee3(query) {
    var searchResults;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            //1. render spinner
            _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.renderSpinner(); //2. look for all the recipes with the given keyword

            _context3.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipe("".concat(_config_js__WEBPACK_IMPORTED_MODULE_7__.URL, "/search?q=").concat(query));

          case 4:
            searchResults = _context3.sent;
            //3. render the recipe cards with pagination
            // if (searchResults.length === 0)
            //   throw new Error(`There are no results for your search!`);
            _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.renderResultsView(searchResults);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function controlSearchRecipe(_x4) {
    return _ref3.apply(this, arguments);
  };
}(); ////////////////////FAVOURITES//////////////////////////////


var controlFavouriteRecipes = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee4(url) {
    var favouriteRec;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model__WEBPACK_IMPORTED_MODULE_0__.editFavourites(url);

          case 3:
            favouriteRec = _context4.sent;
            console.log(favouriteRec); //2. toggle heart icon fill

            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function controlFavouriteRecipes(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

var controlLoadFavourites = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee5() {
    var favouritesResults;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            //1. render spinner
            _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.renderSpinner(); //2. look for all the recipes with the given keyword

            _context5.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipe("".concat(_config_js__WEBPACK_IMPORTED_MODULE_7__.URL, "/where?favourites=1"));

          case 4:
            favouritesResults = _context5.sent;
            //3. render the recipe cards with pagination
            // if (searchResults.length === 0)
            //   throw new Error(`There are no results for your search!`);
            _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.renderResultsView(favouritesResults);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function controlLoadFavourites() {
    return _ref5.apply(this, arguments);
  };
}(); ////////////////////FEATURED//////////////////////////////


var controlLoadFeatured = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee6() {
    var featuredResults;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            //1. render spinner
            _view_featuredView__WEBPACK_IMPORTED_MODULE_5__.default.renderSpinner(); //2. look for all the recipes with the given keyword

            _context6.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipe("".concat(_config_js__WEBPACK_IMPORTED_MODULE_7__.URL, "/where?featured=1"));

          case 4:
            featuredResults = _context6.sent;
            //3. render the recipe cards with pagination
            // if (searchResults.length === 0)
            //   throw new Error(`There are no results for your search!`);
            _view_featuredView__WEBPACK_IMPORTED_MODULE_5__.default.renderResultsView(featuredResults);
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function controlLoadFeatured() {
    return _ref6.apply(this, arguments);
  };
}();

var controlFeaturedRecipes = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee7(url) {
    var featuredRec;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _model__WEBPACK_IMPORTED_MODULE_0__.editFavourites(url);

          case 3:
            featuredRec = _context7.sent;
            console.log(featuredRec); //2. toggle star icon fill

            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function controlFeaturedRecipes(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

controlLoadFeatured(); //////////////////////////////////////////////////
//Event handlers using Publisher-Subscriber pattern

var init = function init() {
  _view_recipeView__WEBPACK_IMPORTED_MODULE_1__.default.openRecipeView(controlrecipeView);
  _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default.addFormEventHandler(controlAddRecipe);
  _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.openSearchRecipeView(controlSearchRecipe);
  _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.toggleFavourites(controlFavouriteRecipes);
  _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.openFavouritesView(controlLoadFavourites);
  _view_featuredView__WEBPACK_IMPORTED_MODULE_5__.default.toggleFeatured(controlFeaturedRecipes);
};

init();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map