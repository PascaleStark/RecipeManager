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
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "TIMEOUT": () => (/* binding */ TIMEOUT)
/* harmony export */ });
var URL = "http://192.168.4.10:8300/recipes";
var TIMEOUT = 1500;

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
/* harmony export */   "state": () => (/* binding */ state),
/* harmony export */   "addRecipe": () => (/* binding */ addRecipe),
/* harmony export */   "loadRecipe": () => (/* binding */ loadRecipe),
/* harmony export */   "searchRecipes": () => (/* binding */ searchRecipes),
/* harmony export */   "editFavourites": () => (/* binding */ editFavourites),
/* harmony export */   "searchRecipesByPage": () => (/* binding */ searchRecipesByPage),
/* harmony export */   "getHeaders": () => (/* binding */ getHeaders),
/* harmony export */   "setDeleteID": () => (/* binding */ setDeleteID),
/* harmony export */   "deleteRecipe": () => (/* binding */ deleteRecipe),
/* harmony export */   "updateImageFile": () => (/* binding */ updateImageFile),
/* harmony export */   "saveImageFile": () => (/* binding */ saveImageFile)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/JS/helper.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/JS/config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var state = {
  recipe: {},
  search: {
    query: ""
  },
  url: "",
  pageNum: 1,
  deleteID: "",
  imageFile: []
};

var renderRecipeObj = function renderRecipeObj(data) {
  //console.log(data);
  var results = data.map(function (res) {
    return {
      id: res.id,
      title: res.name,
      publisher: res.addedBy,
      category: res.category,
      cookingTime: res.cookingTime,
      prepTime: res.prepTime,
      servings: res.servings,
      url: res.url,
      ingredients: res.ingredients,
      directions: res.directions,
      favourites: res.favourites,
      featured: res.featured,
      imageUrl: res.imageUrl
    };
  });
  return results;
};

var addRecipe = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, uploadData) {
    var fetchOptions, resp, data;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fetchOptions = fetch(url, {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(uploadData)
            });
            _context.next = 4;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(10)]);

          case 4:
            resp = _context.sent;

            if (resp.ok) {
              _context.next = 7;
              break;
            }

            throw new Error("Server responded with a status (".concat(resp.status, ")"));

          case 7:
            _context.next = 9;
            return resp.json();

          case 9:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function addRecipe(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var loadRecipe = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(url) {
    var fetchOptions, resp, data, recipe;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            //load recipe object
            fetchOptions = fetch(url, {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            });
            _context2.next = 4;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context2.sent;

            if (resp.ok) {
              _context2.next = 7;
              break;
            }

            throw new Error("Server responded with a status (".concat(resp.status, ")"));

          case 7:
            _context2.next = 9;
            return resp.json();

          case 9:
            data = _context2.sent;
            console.log(data); //refactoring the recipe object

            recipe = renderRecipeObj(data);
            console.log(recipe);
            return _context2.abrupt("return", recipe[0]);

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function loadRecipe(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var searchRecipes = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(url, query) {
    var fetchOptions, resp, data;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            //load recipe object
            fetchOptions = fetch(url, {
              method: "GET"
            });
            _context3.next = 4;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context3.sent;

            if (resp.ok) {
              _context3.next = 7;
              break;
            }

            throw new Error("Something went wrong. Server responded with a status (".concat(resp.status, ")"));

          case 7:
            _context3.next = 9;
            return resp.json();

          case 9:
            data = _context3.sent;
            //catch url
            this.state.url = url; //update query

            this.state.search.query = query; //refactoring the recipe object

            this.state.recipe = renderRecipeObj(data);
            console.log(this.state.recipe);
            return _context3.abrupt("return", {
              recipes: this.state.recipe,
              query: this.state.search.query,
              url: this.state.url
            });

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 17]]);
  }));

  return function searchRecipes(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var editFavourites = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(url) {
    var fetchOptions, resp, data;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            console.log(url);
            fetchOptions = fetch(url, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json"
              }
            });
            _context4.next = 5;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(10)]);

          case 5:
            resp = _context4.sent;
            console.log(resp);

            if (resp.ok) {
              _context4.next = 9;
              break;
            }

            throw new Error("Recipe could not be added to your favourites list, please try again later! Server responded with status (".concat(resp.status, ")"));

          case 9:
            _context4.next = 11;
            return resp.json();

          case 11:
            data = _context4.sent;
            console.log(data);
            return _context4.abrupt("return", data);

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 16]]);
  }));

  return function editFavourites(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
var searchRecipesByPage = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(pageNum) {
    var fetchOptions, resp, data;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            //load recipe object
            fetchOptions = fetch("".concat(this.state.url, "&page=").concat(pageNum), {
              method: "GET"
            });
            _context5.next = 4;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context5.sent;
            _context5.next = 7;
            return resp.json();

          case 7:
            data = _context5.sent;
            // if (!data) throw new Error(`No recipe is found`);
            // //refactoring the recipe object
            this.state.recipe = renderRecipeObj(data);
            console.log(this.state.recipe);
            return _context5.abrupt("return", {
              recipes: this.state.recipe
            });

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 13]]);
  }));

  return function searchRecipesByPage(_x7) {
    return _ref5.apply(this, arguments);
  };
}(); /////FETCH HEADERS FOR PAGINATION//////

var getHeaders = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
    var fetchOptions, resp, headersObj, _iterator, _step, pair, pagesCount, totalItems, paginationInfo;

    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            //get response
            fetchOptions = fetch("".concat(this.state.url, "&page=").concat(this.state.pageNum), {
              method: "GET"
            });
            _context6.next = 4;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context6.sent;
            headersObj = {};
            _iterator = _createForOfIteratorHelper(resp.headers.entries());

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                pair = _step.value;
                headersObj[pair[0]] = pair[1];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            pagesCount = headersObj["recipes-pagescount"];
            totalItems = headersObj["recipes-totalitems"];
            paginationInfo = [pagesCount, totalItems];
            return _context6.abrupt("return", paginationInfo);

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 14]]);
  }));

  return function getHeaders() {
    return _ref6.apply(this, arguments);
  };
}();
var setDeleteID = function setDeleteID(id) {
  this.state.deleteID = id;
};
var deleteRecipe = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7() {
    var fetchOptions, resp;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            //send delete request
            fetchOptions = fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_2__.URL, "/delete/").concat(this.state.deleteID), {
              method: "DELETE"
            });
            _context7.next = 4;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 4:
            resp = _context7.sent;

            if (resp.ok) {
              _context7.next = 7;
              break;
            }

            throw new Error("Could not delete this recipe, please try again later! Server responded with status ".concat(resp.status));

          case 7:
            console.log(resp);
            return _context7.abrupt("return", resp);

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this, [[0, 11]]);
  }));

  return function deleteRecipe() {
    return _ref7.apply(this, arguments);
  };
}();
var updateImageFile = function updateImageFile(imageFile) {
  state.imageFile = imageFile;
  console.log(state.imageFile);
};
var saveImageFile = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8(url) {
    var key, value, formData, fetchOptions, resp;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            console.log(url);
            key = state.imageFile[0];
            value = state.imageFile[1];
            console.log(key, value);
            formData = new FormData();
            formData.append(key, value);
            console.log(formData); //load recipe object

            fetchOptions = fetch(url, {
              method: "POST",
              body: formData
            });
            _context8.next = 11;
            return Promise.race([fetchOptions, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(30)]);

          case 11:
            resp = _context8.sent;
            console.log(resp);

            if (resp.ok) {
              _context8.next = 15;
              break;
            }

            throw new Error("Something went wrong. Server responded with a status (".concat(resp.status, ")"));

          case 15:
            return _context8.abrupt("return", resp);

          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](0);
            throw _context8.t0;

          case 21:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 18]]);
  }));

  return function saveImageFile(_x8) {
    return _ref8.apply(this, arguments);
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
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "./src/JS/config.js");
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

    _defineProperty(_assertThisInitialized(_this), "_imageFile", []);

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_viewMenu", document.querySelector(".menu-section"));

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".add-recipe-view"));

    _defineProperty(_assertThisInitialized(_this), "_addRecipeBtn", document.querySelector(".nav__add-recipe--btn"));

    _defineProperty(_assertThisInitialized(_this), "_addRecipeMenuBtn", document.querySelector(".addrecipe"));

    _defineProperty(_assertThisInitialized(_this), "_form", document.querySelector(".add-recipe-view__form"));

    _defineProperty(_assertThisInitialized(_this), "_closeForm", document.querySelector(".icon__close-form"));

    _defineProperty(_assertThisInitialized(_this), "_failAddRecipeBtn", document.querySelector(".sub-message__btn"));

    _defineProperty(_assertThisInitialized(_this), "_successMessage", "Your recipe has been posted successfully!");

    _defineProperty(_assertThisInitialized(_this), "_failMessage", "Something went wrong, please try again later!");

    _defineProperty(_assertThisInitialized(_this), "_editID", void 0);

    _this._openAddRecipeView();

    _this._closeAddRecipeView();

    _this._closeErrMsgModal();

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
      this._closeForm.addEventListener("click", function () {
        this.hideModalView();
      }.bind(this));
    }
  }, {
    key: "extractImageFile",
    value: function extractImageFile(formDataArr) {
      var imageFile = formDataArr.filter(function (item) {
        return item[0] === "file";
      });
      this._imageFile = imageFile;
    }
  }, {
    key: "addFormEventHandler",
    value: function addFormEventHandler(handler) {
      var self = this;

      this._form.addEventListener("submit", function (e) {
        e.preventDefault();

        var dataArr = _toConsumableArray(new FormData(this));

        self.extractImageFile(dataArr);
        var postData = dataArr.filter(function (pair) {
          return pair[0] !== "file";
        });
        var postData2 = postData.filter(function (pair) {
          return !(pair[0] === "id" && pair[1] === "");
        });
        var data = Object.fromEntries(postData2);
        this.reset();
        handler(_config_js__WEBPACK_IMPORTED_MODULE_1__.URL, data);
      });
    }
  }]);

  return AddRecipeView;
}(_view_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddRecipeView());

/***/ }),

/***/ "./src/JS/view/alertView.js":
/*!**********************************!*\
  !*** ./src/JS/view/alertView.js ***!
  \**********************************/
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





var AlertView = /*#__PURE__*/function (_View) {
  _inherits(AlertView, _View);

  var _super = _createSuper(AlertView);

  function AlertView() {
    var _this;

    _classCallCheck(this, AlertView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".modal-view__msg"));

    _defineProperty(_assertThisInitialized(_this), "_deleteRecipeBtn", document.querySelector(".recipe__card--btn-options-delete"));

    _defineProperty(_assertThisInitialized(_this), "_viewRecipeBtn", document.querySelector(".recipe__card--btn"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_recipeContainer", document.querySelector(".recipe__container"));

    _defineProperty(_assertThisInitialized(_this), "_cancelBtn", document.querySelector(".modal-view__container-btn--btn-cancel"));

    _defineProperty(_assertThisInitialized(_this), "_yesBtn", document.querySelector(".modal-view__container-btn--btn-yes"));

    _defineProperty(_assertThisInitialized(_this), "_recipeOptions", document.querySelector(".recipe__card--icon-delete"));

    _defineProperty(_assertThisInitialized(_this), "_recipeOptionsView", document.querySelector(".recipe__card--options"));

    _defineProperty(_assertThisInitialized(_this), "_successMessage", "Your recipe has been deleted successfully!");

    _defineProperty(_assertThisInitialized(_this), "_listOptions", document.getElementById("options-list"));

    _this.showRecipeOptions();

    _this.hideAlertMsg();

    return _this;
  }

  _createClass(AlertView, [{
    key: "showRecipeOptions",
    value: function showRecipeOptions() {
      this._body.addEventListener("click", this._showOptionsList.bind(this));
    }
  }, {
    key: "_showOptionsList",
    value: function _showOptionsList(e) {
      var targetEl = e.target.closest("#three-dots");

      var listOptions = this._body.querySelectorAll("#options-list");

      if (targetEl) {
        listOptions.forEach(function (element) {
          return element.classList.toggle("hidden");
        });
      }
    }
  }, {
    key: "showAlertMsg",
    value: function showAlertMsg(handler) {
      this._recipeContainer.addEventListener("click", this._openAlertMsg.bind(this, handler));
    }
  }, {
    key: "_openAlertMsg",
    value: function _openAlertMsg(handler, e) {
      var targetEl = e.target.closest("#btn-delete");

      if (targetEl && targetEl.id === "btn-delete") {
        this.showModalView();
        var deleteID = targetEl.dataset.id; //   console.log(deleteID);

        handler(deleteID);
      }
    }
  }, {
    key: "hideAlertMsg",
    value: function hideAlertMsg() {
      this._cancelBtn.addEventListener("click", this._closeAlertMsg.bind(this));
    }
  }, {
    key: "_closeAlertMsg",
    value: function _closeAlertMsg() {
      this.hideModalView();
    }
  }, {
    key: "deleteRecipeHandler",
    value: function deleteRecipeHandler(handler) {
      this._yesBtn.addEventListener("click", function () {
        handler();
      });
    }
  }]);

  return AlertView;
}(_view_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AlertView());

/***/ }),

/***/ "./src/JS/view/editRecipeView.js":
/*!***************************************!*\
  !*** ./src/JS/view/editRecipeView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ "./src/JS/view/view.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "./src/JS/config.js");
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




var AddRecipeView = /*#__PURE__*/function (_View) {
  _inherits(AddRecipeView, _View);

  var _super = _createSuper(AddRecipeView);

  function AddRecipeView() {
    var _this;

    _classCallCheck(this, AddRecipeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_imageFile", []);

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_editRecipeBtn", document.querySelector(".recipe__card--btn-edit"));

    _defineProperty(_assertThisInitialized(_this), "_modal", document.querySelector(".modal-view"));

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".add-recipe-view"));

    _defineProperty(_assertThisInitialized(_this), "_form", document.querySelector(".add-recipe-view__form"));

    _defineProperty(_assertThisInitialized(_this), "_closeForm", document.querySelector(".icon__close-form"));

    _defineProperty(_assertThisInitialized(_this), "_addRecipeMenuBtn", document.querySelector(".addrecipe"));

    _defineProperty(_assertThisInitialized(_this), "_failAddRecipeBtn", document.querySelector(".sub-message__btn"));

    _defineProperty(_assertThisInitialized(_this), "_viewMenu", document.querySelector(".menu-section"));

    _defineProperty(_assertThisInitialized(_this), "_successMessage", "Your recipe has been edited successfully!");

    _defineProperty(_assertThisInitialized(_this), "_failMessage", "Something went wrong, please try again later!");

    return _this;
  }

  _createClass(AddRecipeView, [{
    key: "fillEditRecipeForm",
    value: function fillEditRecipeForm(recipeData) {
      //Getting all input fields in htmlCollection
      var allFields = this._form.elements;
      var allFieldsArr = Array.from(allFields);
      var allFieldsArr2 = allFieldsArr.filter(function (item) {
        return item.id !== "file";
      });
      console.log(allFieldsArr2);
      allFieldsArr2.map(function (item) {
        var itemId = item.id;
        var seeItemValues = document.getElementById(itemId);

        if (seeItemValues) {
          itemId === "ingredients" || itemId === "directions" ? seeItemValues.value = recipeData[itemId].join("#") : seeItemValues.value = recipeData[itemId];
        }
      });
    }
  }, {
    key: "_openEditForm",
    value: function _openEditForm(handler, e) {
      var targetEl = e.target.closest(".recipe__card--btn-edit");

      if (targetEl) {
        var editID = targetEl.dataset.id;
        this._viewMenu.style.display = "none";
        this.showModalView();
        handler("".concat(_config_js__WEBPACK_IMPORTED_MODULE_1__.URL, "/where?id=").concat(editID));
      }
    }
  }, {
    key: "openEditRecipeView",
    value: function openEditRecipeView(handler) {
      this._body.addEventListener("click", this._openEditForm.bind(this, handler));
    }
  }]);

  return AddRecipeView;
}(_view_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddRecipeView());

/***/ }),

/***/ "./src/JS/view/errorView.js":
/*!**********************************!*\
  !*** ./src/JS/view/errorView.js ***!
  \**********************************/
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





var ErrorView = /*#__PURE__*/function (_View) {
  _inherits(ErrorView, _View);

  var _super = _createSuper(ErrorView);

  function ErrorView() {
    var _this;

    _classCallCheck(this, ErrorView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".error-modal"));

    _defineProperty(_assertThisInitialized(_this), "_errorModalBtn", document.querySelector(".error-modal__btn"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_recipeView", document.querySelector(".recipe-view"));

    _defineProperty(_assertThisInitialized(_this), "_blurEl", document.querySelectorAll("body > *:not(.error-modal)"));

    _this.closeErrorView();

    return _this;
  }

  _createClass(ErrorView, [{
    key: "showErrorView",
    value: function showErrorView(err) {
      this._recipeView.innerHTML = "";

      this._parentEl.insertAdjacentHTML("afterbegin", this._generateErrorMarkup(err));

      this._parentEl.classList.remove("hidden");

      console.log(this._blurEl);

      this._blurEl.forEach(function (el) {
        return el.classList.add("blur");
      });
    }
  }, {
    key: "_hideErrorView",
    value: function _hideErrorView(e) {
      var targetEl = e.target.closest(".error-modal__btn");
      console.log(targetEl);

      if (targetEl) {
        this._parentEl.classList.add("hidden");

        location.reload();
      }
    }
  }, {
    key: "closeErrorView",
    value: function closeErrorView() {
      this._body.addEventListener("click", this._hideErrorView.bind(this));
    }
  }, {
    key: "_generateErrorMarkup",
    value: function _generateErrorMarkup(err) {
      return "\n    <div class=\"error-modal__container\">\n      <h1>\n        <svg class=\"icon error-modal__icon\">\n          <use xlink:href=\"./src/img/icons.svg#icon-warning\"></use></svg\n        >ERROR\n      </h1>\n      <p class=\"error-modal__msg\">".concat(err, "</p>\n      <button class=\"error-modal__btn\">OK</button>\n    </div>");
    }
  }]);

  return ErrorView;
}(_view_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ErrorView());

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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./src/JS/helper.js");
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

    _defineProperty(_assertThisInitialized(_this), "_allFavouritesBtn", document.querySelector(".nav__favourites--btn"));

    _defineProperty(_assertThisInitialized(_this), "_allfavouritesMenuBtn", document.querySelector(".menu-view__list--favourites"));

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _defineProperty(_assertThisInitialized(_this), "_viewMenu", document.querySelector(".menu-section"));

    _defineProperty(_assertThisInitialized(_this), "_closeMenu", document.querySelector(".menu-view__icon"));

    _defineProperty(_assertThisInitialized(_this), "_dropdownFilterEl", document.querySelector(".dropdown"));

    _this.setFavouriteIcon();

    return _this;
  } // hideFiltersView() {
  //   if (
  //     this._resultsHeading.textContent === "Favourites" ||
  //     this._resultsHeading.textContent === "Featured"
  //   ) {
  //     this._dropdownFilterEl.style.display = "none";
  //     this._resultsHeading.style.marginBottom = "3rem";
  //   }
  // }


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

    _defineProperty(_assertThisInitialized(_this), "_allFavouritesBtn", document.querySelector(".nav__favourites--btn"));

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _defineProperty(_assertThisInitialized(_this), "_dropdownFilterEl", document.querySelector(".dropdown"));

    _defineProperty(_assertThisInitialized(_this), "_titleView", "Featured");

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

/***/ "./src/JS/view/filterView.js":
/*!***********************************!*\
  !*** ./src/JS/view/filterView.js ***!
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




var FilterView = /*#__PURE__*/function (_View) {
  _inherits(FilterView, _View);

  var _super = _createSuper(FilterView);

  function FilterView() {
    var _this;

    _classCallCheck(this, FilterView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".recipe__container"));

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _defineProperty(_assertThisInitialized(_this), "_dropdownEl", document.querySelector(".dropdown"));

    _defineProperty(_assertThisInitialized(_this), "_dropdownFilter", document.querySelector(".dropdown__filters"));

    _defineProperty(_assertThisInitialized(_this), "_dropdownBtn", document.querySelector(".dropdown__btn"));

    _defineProperty(_assertThisInitialized(_this), "_titleView", "Search results");

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_dropdownFilterEl", document.querySelector(".dropdown"));

    _defineProperty(_assertThisInitialized(_this), "_noResultMsg", "Sorry, we could not find a recipe that matches your filter search. Try selecting a different category.");

    _this.showDropdownFilters();

    return _this;
  }

  _createClass(FilterView, [{
    key: "toggleDropdownFilters",
    value: function toggleDropdownFilters() {
      this._dropdownFilter.classList.toggle("scale-filters");
    }
  }, {
    key: "showDropdownFilters",
    value: function showDropdownFilters() {
      this._dropdownBtn.addEventListener("click", this.toggleDropdownFilters.bind(this));
    }
  }, {
    key: "openFilterSearchView",
    value: function openFilterSearchView(handler) {
      this._body.addEventListener("click", function (e) {
        var targetEl = e.target.closest(".dropdown__category");
        if (!targetEl) return;
        var searchEl = document.querySelector(".search__input");
        var searchQuery = document.querySelector(".search__input").value;
        var filterQuery = targetEl.textContent;
        handler(searchQuery, filterQuery); //searchEl.value = "";
      });
    }
  }]);

  return FilterView;
}(_view_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterView());

/***/ }),

/***/ "./src/JS/view/menuView.js":
/*!*********************************!*\
  !*** ./src/JS/view/menuView.js ***!
  \*********************************/
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





var MenuView = /*#__PURE__*/function (_View) {
  _inherits(MenuView, _View);

  var _super = _createSuper(MenuView);

  function MenuView() {
    var _this;

    _classCallCheck(this, MenuView);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".recipe__container"));

    _defineProperty(_assertThisInitialized(_this), "_favouriteRecipeBtn", document.querySelector(".icon-heart"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_titleView", "Favourites");

    _defineProperty(_assertThisInitialized(_this), "_allFavouritesBtn", document.querySelector(".nav__favourites--btn"));

    _defineProperty(_assertThisInitialized(_this), "_allfavouritesMenuBtn", document.querySelector(".menu-view__list--favourites"));

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _defineProperty(_assertThisInitialized(_this), "_viewMenu", document.querySelector(".menu-section"));

    _defineProperty(_assertThisInitialized(_this), "_closeMenu", document.querySelector(".menu-view__icon"));

    _defineProperty(_assertThisInitialized(_this), "_menuBtn", document.querySelector(".hamburger-menu"));

    _this._openAddRecipeMenu();

    _this._closeAddRecipeMenu();

    return _this;
  }

  _createClass(MenuView, [{
    key: "showMenuView",
    value: function showMenuView() {
      this._viewMenu.style.display = "block";

      this._body.classList.add("my-body-noscroll-class");
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
    key: "openFavouritesMenuView",
    value: function openFavouritesMenuView(handler) {
      this._allfavouritesMenuBtn.addEventListener("click", function () {
        this.hideMenuView();
        document.querySelector(".results__heading").scrollIntoView({
          behavior: "smooth"
        });
        handler();
      }.bind(this));
    }
  }]);

  return MenuView;
}(_view__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MenuView());

/***/ }),

/***/ "./src/JS/view/paginationView.js":
/*!***************************************!*\
  !*** ./src/JS/view/paginationView.js ***!
  \***************************************/
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





var PaginationView = /*#__PURE__*/function (_View) {
  _inherits(PaginationView, _View);

  var _super = _createSuper(PaginationView);

  function PaginationView() {
    var _this;

    _classCallCheck(this, PaginationView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".pagination"));

    _defineProperty(_assertThisInitialized(_this), "_paginationBox", document.querySelector(".pagination__number"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    return _this;
  }

  _createClass(PaginationView, [{
    key: "renderView",
    value: ///////////HIGHLIGHTS PAGE 1//////////////////////////////////////////////
    function renderView(data) {
      this._parentEl.innerHTML = "";
      this._data = data;
      console.log(data);

      this._generateMarkup();

      console.log(this._generateMarkup());

      this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup()); //highlight first page


      this.toggleActivePage("1");
    }
  }, {
    key: "_generateMarkup",
    value: function _generateMarkup() {
      return "\n    <div class=\"pagination__link\"\n      ><svg class=\"icon pagination__icon\">\n        <use\n          xlink:href=\"./src/img/icons.svg#icon-arrow-thin-left\"\n        ></use></svg\n    ></div>\n    ".concat(this._data.map(function (pagEl) {
        return pagEl;
      }).join(""), "\n    <div class=\"pagination__link\"\n      ><svg class=\"icon pagination__icon\">\n        <use\n          xlink:href=\"./src/img/icons.svg#icon-arrow-thin-right\"\n        ></use></svg\n    ></div>\n");
    }
  }]);

  return PaginationView;
}(_view_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PaginationView());

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

    _defineProperty(_assertThisInitialized(_this), "_recipeContainer", document.querySelector(".recipe__container"));

    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector(".recipe-view"));

    _defineProperty(_assertThisInitialized(_this), "_viewRecipeBtn", document.querySelector(".recipe__card--btn"));

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_deleteRecipeBtn", document.querySelector(".recipe__card--btn-options-delete"));

    _defineProperty(_assertThisInitialized(_this), "_failMessage", "Something went wrong, please try again later!");

    _this._closeRecipeView();

    _this._closeErrMsgModal();

    return _this;
  }

  _createClass(RecipeView, [{
    key: "openRecipeView",
    value: function openRecipeView(handler) {
      this._recipeContainer.addEventListener("click", this._setRecipeID.bind(this, handler));
    }
  }, {
    key: "_setRecipeID",
    value: function _setRecipeID(handler, e) {
      var targetEl = e.target.closest("#btn-view");

      if (targetEl && targetEl.id === "btn-view" && targetEl.id !== "btn-delete") {
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
      }).join(""), "\n    </ul>\n  </div>\n</div>\n\n<div class=\"recipe-view__info--details\">\n  <svg class=\"icon icon__file--text\">\n    <use\n      xlink:href=\"./src/img/icons.svg#icon-file-text\"\n    ></use></svg\n  >\n  <ul class=\"list-style\">\n    <li><span class=\"text-bolder\">Preparation time:</span> ").concat(this._data.prepTime, "</li>\n    <li><span class=\"text-bolder\">Cooking time:</span> ").concat(this._data.cookingTime, "</li>\n    <li><span class=\"text-bolder\">Servings:</span> ").concat(this._data.servings, "</li>\n    <li><span class=\"text-bolder\">Category:</span> ").concat(this._data.category, "</li>\n    <li><span class=\"text-bolder\">Publisher:</span> ").concat(this._data.publisher, "</li>\n  </ul>\n</div>\n</div>\n\n<div class=\"recipe-view__directions\">\n<h2 class=\"heading--tertiary\">Directions</h2>\n<div class=\"recipe-view__directions--details\">\n  <ul class=\"list-style\">\n    ").concat(this._data.directions.map(function (direc, i) {
        return "<li class=\"recipe-view__directions--element\"><svg class=\"icon icon__checkmark-outline\">\n      <use\n        xlink:href=\"./src/img/icons.svg#icon-checkmark-outline\"\n      ></use></svg\n    ><span class=\"text-bolder\">Step ".concat(i + 1, ":&nbsp;</span>").concat(direc, "</li>");
      }).join(""), "\n  </ul>\n</div>\n</div>\n<div class=\"recipe-view__url\">\n      Source: <a href=\"").concat(this._data.url, "\" target=\"_blank\">").concat(this._data.url, " </a>\n</div>");
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/JS/config.js");
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

    _defineProperty(_assertThisInitialized(_this), "_body", document.getElementsByTagName("body")[0]);

    _defineProperty(_assertThisInitialized(_this), "_resultsHeading", document.querySelector(".results__heading"));

    _defineProperty(_assertThisInitialized(_this), "_searchForm", document.querySelector(".search"));

    _defineProperty(_assertThisInitialized(_this), "_searchEl", document.querySelector(".search__input"));

    _defineProperty(_assertThisInitialized(_this), "_titleView", "Search Results");

    _defineProperty(_assertThisInitialized(_this), "_dropdownFilterEl", document.querySelector(".dropdown"));

    _defineProperty(_assertThisInitialized(_this), "_noResultMsg", "Sorry, we could not find a recipe that matches your search. Try searching for another recipe.");

    return _this;
  }

  _createClass(SearchRecipeView, [{
    key: "_showSearchRecipeView",
    value: function _showSearchRecipeView(handler, e) {
      e.preventDefault();
      document.querySelector(".results__heading").scrollIntoView({
        behavior: "smooth"
      });
      var query = this._searchEl.value;
      handler(query.trimStart()); // searchEl.value = "";
    }
  }, {
    key: "openSearchRecipeView",
    value: function openSearchRecipeView(handler) {
      this._searchForm.addEventListener("submit", this._showSearchRecipeView.bind(this, handler));
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
    key: "showModalView",
    value: function showModalView() {
      this._parentEl.style.display = "block"; //prevent body scroll

      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, {
    key: "hideModalView",
    value: function hideModalView() {
      this._parentEl.style.display = "none"; //reactivate body scroll

      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, {
    key: "renderResultsView",
    value: function renderResultsView(data, pageNum) {
      var _this = this;

      this._parentEl.innerHTML = "";
      this._data = data;

      this._data.forEach(function (result) {
        _this._parentEl.insertAdjacentHTML("afterbegin", _this._generateMarkup(result));
      });

      this._resultsHeading.textContent = "".concat(this._titleView);

      this._hideFiltersView();

      if (pageNum) {
        this.toggleActivePage(pageNum);
      }
    }
  }, {
    key: "_hideFiltersView",
    value: function _hideFiltersView() {
      if (this._resultsHeading.textContent === "Favourites" || this._resultsHeading.textContent === "Featured") {
        this._dropdownFilterEl.style.display = "none";
        this._resultsHeading.style.marginBottom = "3rem";
      } else {
        this._dropdownFilterEl.style.display = "block";
      }
    }
  }, {
    key: "toggleActivePage",
    value: function toggleActivePage(pageNum) {
      var allPageBoxes = document.querySelectorAll("#pagination-number");
      console.log(allPageBoxes);
      allPageBoxes.forEach(function (el) {
        el.classList.remove("active");
      });
      var pageNumBox = document.querySelector("[data-pg=\"".concat(pageNum, "\"]"));
      console.log(pageNumBox);
      pageNumBox.classList.add("active");
    }
  }, {
    key: "_setRecipePageID",
    value: function _setRecipePageID(handler, e) {
      var targetEl = e.target.closest(".pagination__link");
      console.log(targetEl);

      if (targetEl) {
        var pageNum = targetEl.dataset.pg;
        console.log(pageNum);
        handler(pageNum);
      }
    }
  }, {
    key: "togglePageView",
    value: function togglePageView(handler) {
      this._parentEl.addEventListener("click", this._setRecipePageID.bind(this, handler));
    }
  }, {
    key: "renderSuccessMessage",
    value: function renderSuccessMessage() {
      this._parentEl.innerHTML = "";
      this._parentEl.style.marginBottom = "70rem";

      this._parentEl.insertAdjacentHTML("beforeend", this._generateSuccessMarkup());

      this._parentEl.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, {
    key: "closeMessage",
    value: function closeMessage() {
      this._parentEl.style.display = "none";
    }
  }, {
    key: "renderFailMessage",
    value: function renderFailMessage(err) {
      this._parentEl.innerHTML = "";
      this._parentEl.style.marginBottom = "70rem";

      this._parentEl.insertAdjacentHTML("beforeend", this._generateFailMarkup(err));

      this._parentEl.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, {
    key: "renderNoResultsMsg",
    value: function renderNoResultsMsg() {
      this._resultsHeading.textContent = "Search Results";
      this._parentEl.innerHTML = "";

      this._parentEl.insertAdjacentHTML("afterbegin", this._generateNoResultMarkup());
    }
  }, {
    key: "_hideErrMsgModal",
    value: function _hideErrMsgModal(e) {
      var targetEl = e.target.closest(".sub-message__btn");

      if (targetEl) {
        this.hideModalView();
        location.reload();
      }
    }
  }, {
    key: "_closeErrMsgModal",
    value: function _closeErrMsgModal() {
      this._body.addEventListener("click", this._hideErrMsgModal.bind(this));
    }
  }, {
    key: "_generateNoResultMarkup",
    value: function _generateNoResultMarkup() {
      return "<div class=\"recipe__no-result\">\n    <p class=\"recipe__no-result--msg\">".concat(this._noResultMsg, "</p>\n    </div>");
    }
  }, {
    key: "_generateSuccessMarkup",
    value: function _generateSuccessMarkup() {
      return "\n    <div class=\"sub-message\">\n    <p class=\"sub-message__msg\">\n      <svg class=\"icon sub-message__icon\">\n        <use\n          xlink:href=\"./src/img/icons.svg#icon-checkmark-outline\"\n        ></use>\n      </svg>\n      ".concat(this._successMessage, "\n    </p>\n  </div>\n    </div>\n    ");
    }
  }, {
    key: "_generateFailMarkup",
    value: function _generateFailMarkup(err) {
      return "\n    <div class=\"sub-message\">\n    <p class=\"sub-message__msg\">\n      <svg class=\"icon sub-message__icon\">\n        <use\n          xlink:href=\"./src/img/icons.svg#icon-warning\"\n        ></use>\n      </svg>\n      ".concat(this._failMessage, " ").concat(err, "\n    </p>\n    <button class=\"sub-message__btn\">OK</button>\n  </div>\n    </div>\n    ");
    }
  }, {
    key: "_generateMarkup",
    value: function _generateMarkup(result) {
      return "<div class=\"recipe__card\">\n    <img\n      src=".concat(result.imageUrl, "\n      class=\"recipe__card--img\"\n      alt=\"recipe img\"\n    />\n    <div class=\"recipe__card--icons\">\n    <svg class=\"icon-heart recipe__card--icon recipe__card--icon-heart ").concat(result.favourites ? "filled-icon" : "empty-icon", "\" data-id=\"").concat(result.id, "\">\n      <use xlink:href=\"./src/img/icons.svg#icon-heart\"></use>\n    </svg>\n    <svg class=\"icon-star recipe__card--icon recipe__card--icon-star  ").concat(result.featured ? "filled-icon" : "empty-icon", "\" data-id=\"").concat(result.id, "\">\n      <use xlink:href=\"./src/img/icons.svg#icon-star-full\"></use>\n    </svg>\n    </div>\n    <svg id=\"three-dots\" class=\"icon icon-delete recipe__card--icon recipe__card--icon-delete\">\n      <use xlink:href=\"./src/img/icons.svg#icon-dots-three-vertical\"></use>\n    </svg>\n    \n    <h3 class=\"recipe__card--title heading--tertiary\">").concat(result.title, "</h3>\n    <div class=\"recipe__card--back\">\n    <div id=\"options-list\" class=\"hidden\">\n    <ul class=\"recipe__card--options\">\n    <li class=\"recipe__card--btn-options recipe__card--btn-options-delete\" id=\"btn-delete\" data-id=\"").concat(result.id, "\">Delete</li>\n    <li class=\"recipe__card--btn-options recipe__card--btn-edit\" data-id=\"").concat(result.id, "\">Edit</li>\n    </ul>\n    </div>\n    \n    <div id=\"btn-view\" data-id=\"").concat(result.id, "\">\n    <button class=\"btn recipe__card--btn hidden\"><span class=\"underline\">View Recipe &rarr;</span></button>\n    </div>\n      \n    </div>\n    </div>");
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
/* harmony import */ var _view_paginationView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/paginationView */ "./src/JS/view/paginationView.js");
/* harmony import */ var _view_alertView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/alertView */ "./src/JS/view/alertView.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config.js */ "./src/JS/config.js");
/* harmony import */ var _view_featuredView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/featuredView */ "./src/JS/view/featuredView.js");
/* harmony import */ var _view_filterView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/filterView */ "./src/JS/view/filterView.js");
/* harmony import */ var _view_menuView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/menuView */ "./src/JS/view/menuView.js");
/* harmony import */ var _view_errorView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/errorView */ "./src/JS/view/errorView.js");
/* harmony import */ var _view_editRecipeView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/editRecipeView */ "./src/JS/view/editRecipeView.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/view */ "./src/JS/view/view.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















 ////////////////////ADD RECIPE//////////////////////////////
//Add a recipe

var controlAddRecipe = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(url, uploadData) {
    var result;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
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
            //2. Render Success Message
            _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default.renderSuccessMessage(); //3. close Success Message

            setTimeout(function () {
              _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default.closeMessage(); //location.reload();
            }, _config_js__WEBPACK_IMPORTED_MODULE_8__.TIMEOUT); //4. send imageFile

            controlImageFile(); //5. post the image

            _model__WEBPACK_IMPORTED_MODULE_0__.saveImageFile("".concat(_config_js__WEBPACK_IMPORTED_MODULE_8__.URL, "/upload/").concat(result[0].id)); //6. reload page

            location.reload();
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            //Render fail message
            console.log(_context.t0);
            _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default.renderFailMessage(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function controlAddRecipe(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); ////////////////////RECIPE VIEW//////////////////////////////


var controlrecipeView = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee2(url) {
    var recipe;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee2$(_context2) {
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
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            _view_recipeView__WEBPACK_IMPORTED_MODULE_1__.default.renderFailMessage(_context2.t0);

          case 12:
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee3(query) {
    var searchResults;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(query.trim() === "")) {
              _context3.next = 5;
              break;
            }

            _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.renderNoResultsMsg();
            fetchHeaderInfo();
            return _context3.abrupt("return");

          case 5:
            _context3.next = 7;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipes("".concat(_config_js__WEBPACK_IMPORTED_MODULE_8__.URL, "/search?q=").concat(query), query);

          case 7:
            searchResults = _context3.sent;
            console.log(searchResults);

            if (searchResults) {
              _context3.next = 11;
              break;
            }

            throw error;

          case 11:
            if (searchResults.recipes.length === 0) {
              _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.renderNoResultsMsg();
            } else {
              //2. render spinner
              _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.renderSpinner(); //3. render the recipe cards with pagination

              _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.renderResultsView(searchResults.recipes); ///////////FETCHING HEADER INFORMATION//////////

              fetchHeaderInfo();
            }

            _context3.next = 18;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            _view_errorView__WEBPACK_IMPORTED_MODULE_12__.default.showErrorView(_context3.t0);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function controlSearchRecipe(_x4) {
    return _ref3.apply(this, arguments);
  };
}(); ////////////////////FAVOURITES//////////////////////////////


var controlFavouriteRecipes = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee4(url) {
    var favouriteRec;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _model__WEBPACK_IMPORTED_MODULE_0__.editFavourites(url);

          case 3:
            favouriteRec = _context4.sent;
            console.log(favouriteRec);
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            _view_errorView__WEBPACK_IMPORTED_MODULE_12__.default.showErrorView(_context4.t0);

          case 11:
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee5() {
    var favouritesResults;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            //1. render spinner
            _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.renderSpinner(); //2. look for all the recipes with the given keyword

            _context5.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipes("".concat(_config_js__WEBPACK_IMPORTED_MODULE_8__.URL, "/where?favourites=1"));

          case 4:
            favouritesResults = _context5.sent;
            //3. render the recipe cards with pagination
            _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.renderResultsView(favouritesResults.recipes); ///////////FETCHING HEADER INFORMATION//////////

            fetchHeaderInfo();
            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            _view_errorView__WEBPACK_IMPORTED_MODULE_12__.default.showErrorView(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function controlLoadFavourites() {
    return _ref5.apply(this, arguments);
  };
}(); ////////////////////FEATURED//////////////////////////////


var controlLoadFeatured = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee6() {
    var featuredResults;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            //1. render spinner
            _view_featuredView__WEBPACK_IMPORTED_MODULE_9__.default.renderSpinner(); //2. look for all the recipes with the given keyword

            _context6.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipes("".concat(_config_js__WEBPACK_IMPORTED_MODULE_8__.URL, "/where?featured=1"));

          case 4:
            featuredResults = _context6.sent;
            //3. render the recipe cards with pagination
            _view_featuredView__WEBPACK_IMPORTED_MODULE_9__.default.renderResultsView(featuredResults.recipes); ///////////FETCHING HEADER INFORMATION//////////

            fetchHeaderInfo();
            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);
            _view_errorView__WEBPACK_IMPORTED_MODULE_12__.default.showErrorView(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 9]]);
  }));

  return function controlLoadFeatured() {
    return _ref6.apply(this, arguments);
  };
}();

var controlFeaturedRecipes = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee7(url) {
    var featuredRec;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee7$(_context7) {
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

controlLoadFeatured(); ////////////////////FILTERED//////////////////////////////

var controlfilterSearch = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee8(searchQuery, filterQuery) {
    var filteredResults;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            //1. render spinner
            _view_filterView__WEBPACK_IMPORTED_MODULE_10__.default.renderSpinner(); //2. look for all the recipes with the given keyword

            _context8.next = 4;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipes("".concat(_config_js__WEBPACK_IMPORTED_MODULE_8__.URL, "/search?q=").concat(searchQuery, "&filter=category&value=").concat(filterQuery), searchQuery);

          case 4:
            filteredResults = _context8.sent;
            //3. render the recipe cards with pagination
            console.log(filteredResults.recipes);
            console.log(filteredResults.url);

            if (filteredResults) {
              _context8.next = 9;
              break;
            }

            throw error;

          case 9:
            if (filteredResults.recipes.length === 0) {
              _view_filterView__WEBPACK_IMPORTED_MODULE_10__.default.renderNoResultsMsg();
            } else {
              _view_filterView__WEBPACK_IMPORTED_MODULE_10__.default.renderResultsView(filteredResults.recipes);
            } ///////////FETCHING HEADER INFORMATION//////////


            fetchHeaderInfo();
            _view_filterView__WEBPACK_IMPORTED_MODULE_10__.default.toggleDropdownFilters();
            _context8.next = 18;
            break;

          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](0);
            console.error(_context8.t0);
            _view_errorView__WEBPACK_IMPORTED_MODULE_12__.default.showErrorView(_context8.t0);

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 14]]);
  }));

  return function controlfilterSearch(_x7, _x8) {
    return _ref8.apply(this, arguments);
  };
}(); // const controlfilterFavourites = async function (filterQuery) {
//   try {
//     //1. render spinner
//     filterView.renderSpinner();
//     //2. look for all the recipes with the given keyword
//     const filteredResults = await model.searchRecipes(
//       `${URL}/favourites=1&filter=category&category=${filterQuery}`
//     );
//     //3. render the recipe cards with pagination
//     // if (searchResults.length === 0)
//     //   throw new Error(`There are no results for your search!`);
//     console.log(filteredResults.recipes);
//     filterView.renderResultsView(filteredResults.recipes);
//     ///////////FETCHING HEADER INFORMATION//////////
//     fetchHeaderInfo();
//     filterView.toggleDropdownFilters();
//   } catch (err) {
//     console.error(err);
//   }
// };
////////////////////PAGINATION//////////////////////////////


var controlPagination = function controlPagination(pagInfo) {
  var paginationArr = []; //pagInfo[0] --> pageCount

  for (var i = 0; i < +pagInfo[0]; i++) {
    var markupPage = "<button data-pg=\"".concat(i + 1, "\" class=\"pagination__link\" id=\"pagination-number\">").concat(i + 1, "</button>");
    paginationArr.push(markupPage);
    console.log(paginationArr);
  }

  _view_paginationView__WEBPACK_IMPORTED_MODULE_5__.default.renderView(paginationArr);
};

var controlPaginationNumber = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee9(pageNum) {
    var pageResults, checkTitleView;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _model__WEBPACK_IMPORTED_MODULE_0__.searchRecipesByPage(pageNum);

          case 3:
            pageResults = _context9.sent;
            //2. Choose title View
            checkTitleView = pageResults.recipes.every(function (el) {
              return el.favourites === true;
            }); //3. render page results with title View

            checkTitleView ? "".concat(_view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.renderResultsView(pageResults.recipes, pageNum)) : "".concat(_view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.renderResultsView(pageResults.recipes, pageNum));
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 8]]);
  }));

  return function controlPaginationNumber(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

var fetchHeaderInfo = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee10() {
    var pagInfo;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _model__WEBPACK_IMPORTED_MODULE_0__.getHeaders();

          case 2:
            pagInfo = _context10.sent;
            console.log(pagInfo);
            controlPagination(pagInfo);

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function fetchHeaderInfo() {
    return _ref10.apply(this, arguments);
  };
}(); ////////////////////DELETE RECIPE//////////////////////////////


var controlDeleteRecipe = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee11() {
    var deleteRec;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _model__WEBPACK_IMPORTED_MODULE_0__.deleteRecipe();

          case 3:
            deleteRec = _context11.sent;
            console.log(deleteRec);

            if (deleteRec) {
              _context11.next = 7;
              break;
            }

            throw err;

          case 7:
            //render success message
            _view_alertView__WEBPACK_IMPORTED_MODULE_6__.default.renderSuccessMessage(); //close success message after 3s

            setTimeout(function () {
              _view_alertView__WEBPACK_IMPORTED_MODULE_6__.default.closeMessage();
              location.reload();
            }, _config_js__WEBPACK_IMPORTED_MODULE_8__.TIMEOUT);
            _context11.next = 15;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);
            _view_errorView__WEBPACK_IMPORTED_MODULE_12__.default.showErrorView(_context11.t0);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 11]]);
  }));

  return function controlDeleteRecipe() {
    return _ref11.apply(this, arguments);
  };
}();

var controlSetDeleteID = function controlSetDeleteID(id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.setDeleteID(id);
}; ///////////////////UPLOAD RECIPE IMAGE/////////////////////////


var controlImageFile = function controlImageFile() {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateImageFile.apply(_model__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(_view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default._imageFile));
  console.log(_view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default._imageFile);
}; ///////////////////UPLOAD RECIPE IMAGE/////////////////////////


var controlEditRecipe = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee12(url, id) {
    var recipe;
    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _model__WEBPACK_IMPORTED_MODULE_0__.loadRecipe(url);

          case 3:
            recipe = _context12.sent;
            console.log(recipe);
            _view_editRecipeView__WEBPACK_IMPORTED_MODULE_13__.default.fillEditRecipeForm(recipe);
            _context12.next = 12;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);
            _view_recipeView__WEBPACK_IMPORTED_MODULE_1__.default.renderFailMessage(_context12.t0);

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 8]]);
  }));

  return function controlEditRecipe(_x10, _x11) {
    return _ref12.apply(this, arguments);
  };
}(); //Event handlers using Publisher-Subscriber pattern


var init = function init() {
  _view_recipeView__WEBPACK_IMPORTED_MODULE_1__.default.openRecipeView(controlrecipeView);
  _view_addRecipeView__WEBPACK_IMPORTED_MODULE_2__.default.addFormEventHandler(controlAddRecipe);
  _view_searchRecipesView__WEBPACK_IMPORTED_MODULE_3__.default.openSearchRecipeView(controlSearchRecipe);
  _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.toggleFavourites(controlFavouriteRecipes);
  _view_favouritesView__WEBPACK_IMPORTED_MODULE_4__.default.openFavouritesView(controlLoadFavourites);
  _view_menuView__WEBPACK_IMPORTED_MODULE_11__.default.openFavouritesMenuView(controlLoadFavourites);
  _view_featuredView__WEBPACK_IMPORTED_MODULE_9__.default.toggleFeatured(controlFeaturedRecipes);
  _view_filterView__WEBPACK_IMPORTED_MODULE_10__.default.openFilterSearchView(controlfilterSearch);
  _view_paginationView__WEBPACK_IMPORTED_MODULE_5__.default.togglePageView(controlPaginationNumber);
  _view_alertView__WEBPACK_IMPORTED_MODULE_6__.default.showAlertMsg(controlSetDeleteID);
  _view_alertView__WEBPACK_IMPORTED_MODULE_6__.default.deleteRecipeHandler(controlDeleteRecipe);
  _view_editRecipeView__WEBPACK_IMPORTED_MODULE_13__.default.openEditRecipeView(controlEditRecipe);
};

init();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map