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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize_resize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize/resize.js */ "./src/js/resize/resize.js");
/* harmony import */ var _hover_hover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hover/hover */ "./src/js/hover/hover.js");
// bundle.js
//import Drag from "./drag/drag.js";


new _resize_resize_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _hover_hover__WEBPACK_IMPORTED_MODULE_1__["default"]();

/***/ }),

/***/ "./src/js/hover/hover.js":
/*!*******************************!*\
  !*** ./src/js/hover/hover.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hover = /*#__PURE__*/function () {
  function Hover() {
    _classCallCheck(this, Hover);

    this.element = document.querySelectorAll(".js-hover .boxes__content");
    this.text = "js-inactive";
    this.opacity = 0;
    this.events();
  }

  _createClass(Hover, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.element.forEach(function (el) {
        el.addEventListener("mouseenter", function (e) {
          _this.element.forEach(function (li) {
            li.classList.remove(_this.text);

            if (li !== e.target) {
              li.classList.toggle(_this.text);
            }
          });
        });
        el.addEventListener("mouseleave", function (e) {
          _this.element.forEach(function (li) {
            li.classList.remove(_this.text);
          });
        });
      });
    }
  }]);

  return Hover;
}();

/* harmony default export */ __webpack_exports__["default"] = (Hover);

/***/ }),

/***/ "./src/js/resize/resize.js":
/*!*********************************!*\
  !*** ./src/js/resize/resize.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Resize = /*#__PURE__*/function () {
  function Resize() {
    _classCallCheck(this, Resize);

    this.resize = document.querySelector(".pattern__resizeable");
    this.preview = document.querySelector(".pattern__resizeable div:first-child");
    this.initObserver();
  }

  _createClass(Resize, [{
    key: "initObserver",
    value: function initObserver() {
      var _this = this;

      var ro = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;
            var width = entry.contentRect.width;

            if (width >= 500) {
              _this.add();
            } else {
              _this.remove();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });

      if (this.resize) {
        ro.observe(this.resize);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      this.preview.classList.remove("large");
    }
  }, {
    key: "add",
    value: function add() {
      this.preview.classList.add("large");
    }
  }]);

  return Resize;
}();

/* harmony default export */ __webpack_exports__["default"] = (Resize);

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Entwicklung\php\snaple\wp-content\themes\snaple\src\js\bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaG92ZXIvaG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Jlc2l6ZS9yZXNpemUuanMiXSwibmFtZXMiOlsiUmVzaXplIiwiSG92ZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGV4dCIsIm9wYWNpdHkiLCJldmVudHMiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImxpIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFyZ2V0IiwidG9nZ2xlIiwicmVzaXplIiwicXVlcnlTZWxlY3RvciIsInByZXZpZXciLCJpbml0T2JzZXJ2ZXIiLCJybyIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5Iiwid2lkdGgiLCJjb250ZW50UmVjdCIsImFkZCIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSx5REFBSjtBQUNBLElBQUlDLG9EQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNSTUEsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLDJCQUExQixDQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLGFBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE1BQUw7QUFDRDs7OztXQUVELGtCQUFTO0FBQUE7O0FBQ1AsV0FBS0wsT0FBTCxDQUFhTSxPQUFiLENBQXFCLFVBQUNDLEVBQUQsRUFBUTtBQUMzQkEsVUFBRSxDQUFDQyxnQkFBSCxDQUFvQixZQUFwQixFQUFrQyxVQUFDQyxDQUFELEVBQU87QUFDdkMsZUFBSSxDQUFDVCxPQUFMLENBQWFNLE9BQWIsQ0FBcUIsVUFBQ0ksRUFBRCxFQUFRO0FBQzNCQSxjQUFFLENBQUNDLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixLQUFJLENBQUNULElBQXpCOztBQUVBLGdCQUFJTyxFQUFFLEtBQUtELENBQUMsQ0FBQ0ksTUFBYixFQUFxQjtBQUNuQkgsZ0JBQUUsQ0FBQ0MsU0FBSCxDQUFhRyxNQUFiLENBQW9CLEtBQUksQ0FBQ1gsSUFBekI7QUFDRDtBQUNGLFdBTkQ7QUFPRCxTQVJEO0FBVUFJLFVBQUUsQ0FBQ0MsZ0JBQUgsQ0FBb0IsWUFBcEIsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZDLGVBQUksQ0FBQ1QsT0FBTCxDQUFhTSxPQUFiLENBQXFCLFVBQUNJLEVBQUQsRUFBUTtBQUMzQkEsY0FBRSxDQUFDQyxTQUFILENBQWFDLE1BQWIsQ0FBb0IsS0FBSSxDQUFDVCxJQUF6QjtBQUNELFdBRkQ7QUFHRCxTQUpEO0FBS0QsT0FoQkQ7QUFpQkQ7Ozs7OztBQUdZSixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0JNRCxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLaUIsTUFBTCxHQUFjZCxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVoQixRQUFRLENBQUNlLGFBQVQsQ0FDYixzQ0FEYSxDQUFmO0FBSUEsU0FBS0UsWUFBTDtBQUNEOzs7O1dBRUQsd0JBQWU7QUFBQTs7QUFDYixVQUFJQyxFQUFFLEdBQUcsSUFBSUMsY0FBSixDQUFtQixVQUFDQyxPQUFELEVBQWE7QUFBQSxtREFDckJBLE9BRHFCO0FBQUE7O0FBQUE7QUFDdkMsOERBQTJCO0FBQUEsZ0JBQWxCQyxLQUFrQjtBQUN6QixnQkFBSUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JELEtBQTlCOztBQUVBLGdCQUFJQSxLQUFLLElBQUksR0FBYixFQUFrQjtBQUNoQixtQkFBSSxDQUFDRSxHQUFMO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsbUJBQUksQ0FBQ2IsTUFBTDtBQUNEO0FBQ0Y7QUFUc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVV4QyxPQVZRLENBQVQ7O0FBWUEsVUFBSSxLQUFLRyxNQUFULEVBQWlCO0FBQ2ZJLFVBQUUsQ0FBQ08sT0FBSCxDQUFXLEtBQUtYLE1BQWhCO0FBQ0Q7QUFDRjs7O1dBRUQsa0JBQVM7QUFDUCxXQUFLRSxPQUFMLENBQWFOLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLE9BQTlCO0FBQ0Q7OztXQUVELGVBQU07QUFDSixXQUFLSyxPQUFMLENBQWFOLFNBQWIsQ0FBdUJjLEdBQXZCLENBQTJCLE9BQTNCO0FBQ0Q7Ozs7OztBQUdZM0IscUVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBidW5kbGUuanNcclxuXHJcblxyXG4vL2ltcG9ydCBEcmFnIGZyb20gXCIuL2RyYWcvZHJhZy5qc1wiO1xyXG5pbXBvcnQgUmVzaXplIGZyb20gXCIuL3Jlc2l6ZS9yZXNpemUuanNcIjtcclxuaW1wb3J0IEhvdmVyIGZyb20gXCIuL2hvdmVyL2hvdmVyXCI7XHJcblxyXG5uZXcgUmVzaXplKCk7XHJcbm5ldyBIb3ZlcigpO1xyXG4iLCJjbGFzcyBIb3ZlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWhvdmVyIC5ib3hlc19fY29udGVudFwiKTtcclxuICAgIHRoaXMudGV4dCA9IFwianMtaW5hY3RpdmVcIjtcclxuICAgIHRoaXMub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgaWYgKGxpICE9PSBlLnRhcmdldCkge1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QudG9nZ2xlKHRoaXMudGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdmVyO1xyXG4iLCJjbGFzcyBSZXNpemUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yZXNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhdHRlcm5fX3Jlc2l6ZWFibGVcIik7XHJcbiAgICB0aGlzLnByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5wYXR0ZXJuX19yZXNpemVhYmxlIGRpdjpmaXJzdC1jaGlsZFwiXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0T2JzZXJ2ZXIoKSB7XHJcbiAgICBsZXQgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgZm9yIChsZXQgZW50cnkgb2YgZW50cmllcykge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoO1xyXG5cclxuICAgICAgICBpZiAod2lkdGggPj0gNTAwKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMucmVzaXplKSB7XHJcbiAgICAgIHJvLm9ic2VydmUodGhpcy5yZXNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5wcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJsYXJnZVwiKTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIHRoaXMucHJldmlldy5jbGFzc0xpc3QuYWRkKFwibGFyZ2VcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNpemU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=