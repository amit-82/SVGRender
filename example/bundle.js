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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/src/index.js":
/*!******************************!*\
  !*** ./example/src/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {Path, createSVGElement} = __webpack_require__(/*! ../../lib/index */ \"./lib/index.js\");\n\nconst svgPath = createSVGElement(document.getElementById(\"svg\"), \"myPath\", \"path my-path\");\nconst path = new Path(svgPath);\npath.moveTo(100, 50).lineTo(300, 50).lineTo(300, 150).lineTo(100, 150).closePath().updateElement();\n\n//# sourceURL=webpack:///./example/src/index.js?");

/***/ }),

/***/ "./lib/Path.js":
/*!*********************!*\
  !*** ./lib/Path.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _input_validations = __webpack_require__(/*! ./helpers/input_validations */ \"./lib/helpers/input_validations.js\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Path = /*#__PURE__*/function () {\n  function Path(element) {\n    var _this = this;\n\n    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    _classCallCheck(this, Path);\n\n    _defineProperty(this, \"element\", void 0);\n\n    _defineProperty(this, \"_instructions\", void 0);\n\n    _defineProperty(this, \"closePath\", function () {\n      _this._instructions.push(\"z\");\n\n      return _this;\n    });\n\n    _defineProperty(this, \"moveTo\", function (x, y) {\n      _this._instructions.push(\"M\".concat(x, \",\").concat(y));\n\n      return _this;\n    });\n\n    _defineProperty(this, \"lineTo\", function (x, y) {\n      _this._instructions.push(\"L\".concat(x, \",\").concat(y));\n\n      return _this;\n    });\n\n    _defineProperty(this, \"curve\", function (ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY) {\n      _this._instructions.push(\"C\".concat(ctrl1X, \",\").concat(ctrl1Y, \",\").concat(ctrl2X, \",\").concat(ctrl2Y, \",\").concat(endX, \",\").concat(endY));\n    });\n\n    _defineProperty(this, \"bezier\", function (ctrlX, ctrlY, endX, endY) {\n      _this._instructions.push(\"S\".concat(ctrlX, \",\").concat(ctrlY, \",\").concat(endX, \",\").concat(endY));\n    });\n\n    _defineProperty(this, \"quadratic\", function (ctrlX, ctrlY, endX, endY, mirrorEndX, mirrorEndY) {\n      _this._instructions.push(\"Q\".concat(ctrlX, \",\").concat(ctrlY, \",\").concat(endX, \",\").concat(endY));\n\n      if ((0, _input_validations.allValuesAssigned)(mirrorEndX, mirrorEndY)) {\n        _this._instructions.push(\"T\".concat(mirrorEndX, \",\").concat(mirrorEndY));\n      }\n    });\n\n    this._instructions = instructions;\n    this.element = element;\n  }\n\n  _createClass(Path, [{\n    key: \"getInstructions\",\n    value: function getInstructions() {\n      return _toConsumableArray(this._instructions);\n    }\n  }, {\n    key: \"updateElement\",\n    value: function updateElement() {\n      this.element && this.element.setAttribute(\"d\", this._instructions.join(' '));\n    }\n  }]);\n\n  return Path;\n}();\n\nexports[\"default\"] = Path;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGgiLCJlbGVtZW50IiwiaW5zdHJ1Y3Rpb25zIiwiX2luc3RydWN0aW9ucyIsInB1c2giLCJ4IiwieSIsImN0cmwxWCIsImN0cmwxWSIsImN0cmwyWCIsImN0cmwyWSIsImVuZFgiLCJlbmRZIiwiY3RybFgiLCJjdHJsWSIsIm1pcnJvckVuZFgiLCJtaXJyb3JFbmRZIiwic2V0QXR0cmlidXRlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJO0FBS2pCLGdCQUFZQyxPQUFaLEVBQTBFO0FBQUE7O0FBQUEsUUFBckNDLFlBQXFDLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsdUNBYXZELFlBQVc7QUFDMUIsTUFBQSxLQUFJLENBQUNDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLEdBQXhCOztBQUNBLGFBQU8sS0FBUDtBQUNILEtBaEJ5RTs7QUFBQSxvQ0FrQjFELFVBQUNDLENBQUQsRUFBV0MsQ0FBWCxFQUF3QjtBQUNwQyxNQUFBLEtBQUksQ0FBQ0gsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJDLENBQTVCLGNBQWlDQyxDQUFqQzs7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQXJCeUU7O0FBQUEsb0NBdUIxRCxVQUFDRCxDQUFELEVBQVdDLENBQVgsRUFBd0I7QUFDcEMsTUFBQSxLQUFJLENBQUNILGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCQyxDQUE1QixjQUFpQ0MsQ0FBakM7O0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0ExQnlFOztBQUFBLG1DQTRCM0QsVUFBQ0MsTUFBRCxFQUFnQkMsTUFBaEIsRUFBK0JDLE1BQS9CLEVBQThDQyxNQUE5QyxFQUE2REMsSUFBN0QsRUFBMEVDLElBQTFFLEVBQTBGO0FBQ3JHLE1BQUEsS0FBSSxDQUFDVCxhQUFMLENBQW1CQyxJQUFuQixZQUE0QkcsTUFBNUIsY0FBc0NDLE1BQXRDLGNBQWdEQyxNQUFoRCxjQUEwREMsTUFBMUQsY0FBb0VDLElBQXBFLGNBQTRFQyxJQUE1RTtBQUNILEtBOUJ5RTs7QUFBQSxvQ0FnQzFELFVBQUNDLEtBQUQsRUFBZUMsS0FBZixFQUE2QkgsSUFBN0IsRUFBMENDLElBQTFDLEVBQTBEO0FBQ3RFLE1BQUEsS0FBSSxDQUFDVCxhQUFMLENBQW1CQyxJQUFuQixZQUE0QlMsS0FBNUIsY0FBcUNDLEtBQXJDLGNBQThDSCxJQUE5QyxjQUFzREMsSUFBdEQ7QUFDSCxLQWxDeUU7O0FBQUEsdUNBb0N2RCxVQUFDQyxLQUFELEVBQWVDLEtBQWYsRUFBNkJILElBQTdCLEVBQTBDQyxJQUExQyxFQUF1REcsVUFBdkQsRUFBMkVDLFVBQTNFLEVBQWtHO0FBQ2pILE1BQUEsS0FBSSxDQUFDYixhQUFMLENBQW1CQyxJQUFuQixZQUE0QlMsS0FBNUIsY0FBcUNDLEtBQXJDLGNBQThDSCxJQUE5QyxjQUFzREMsSUFBdEQ7O0FBQ0EsVUFBSSwwQ0FBa0JHLFVBQWxCLEVBQThCQyxVQUE5QixDQUFKLEVBQStDO0FBQzNDLFFBQUEsS0FBSSxDQUFDYixhQUFMLENBQW1CQyxJQUFuQixZQUE0QlcsVUFBNUIsY0FBMENDLFVBQTFDO0FBQ0g7QUFDSixLQXpDeUU7O0FBQ3RFLFNBQUtiLGFBQUwsR0FBcUJELFlBQXJCO0FBQ0EsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0g7Ozs7c0NBRTBDO0FBQ3ZDLGdDQUFXLEtBQUtFLGFBQWhCO0FBQ0g7OztvQ0FFc0I7QUFDbkIsV0FBS0YsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFnQixZQUFiLENBQTBCLEdBQTFCLEVBQStCLEtBQUtkLGFBQUwsQ0FBbUJlLElBQW5CLENBQXdCLEdBQXhCLENBQS9CLENBQWhCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxWYWx1ZXNBc3NpZ25lZCB9IGZyb20gXCIuL2hlbHBlcnMvaW5wdXRfdmFsaWRhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6U1ZHUGF0aEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9pbnN0cnVjdGlvbnM6c3RyaW5nT3JOdW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50PzpTVkdQYXRoRWxlbWVudCwgaW5zdHJ1Y3Rpb25zOiBzdHJpbmdPck51bWJlcltdID0gW10pIHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvbnMgPSBpbnN0cnVjdGlvbnM7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5zdHJ1Y3Rpb25zKCk6IHN0cmluZ09yTnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5faW5zdHJ1Y3Rpb25zXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRcIiwgdGhpcy5faW5zdHJ1Y3Rpb25zLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlUGF0aCA9ICgpOlBhdGggPT4ge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFwielwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvID0gKHg6bnVtYmVyLCB5Om51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBNJHt4fSwke3l9YCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpbmVUbyA9ICh4Om51bWJlciwgeTpudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgTCR7eH0sJHt5fWApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjdXJ2ZSA9IChjdHJsMVg6bnVtYmVyLCBjdHJsMVk6bnVtYmVyLCBjdHJsMlg6bnVtYmVyLCBjdHJsMlk6bnVtYmVyLCBlbmRYOm51bWJlciwgZW5kWTpudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgQyR7Y3RybDFYfSwke2N0cmwxWX0sJHtjdHJsMlh9LCR7Y3RybDJZfSwke2VuZFh9LCR7ZW5kWX1gKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGJlemllciA9IChjdHJsWDpudW1iZXIsIGN0cmxZOm51bWJlciwgZW5kWDpudW1iZXIsIGVuZFk6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYFMke2N0cmxYfSwke2N0cmxZfSwke2VuZFh9LCR7ZW5kWX1gKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHF1YWRyYXRpYyA9IChjdHJsWDpudW1iZXIsIGN0cmxZOm51bWJlciwgZW5kWDpudW1iZXIsIGVuZFk6bnVtYmVyLCBtaXJyb3JFbmRYPzpudW1iZXIsIG1pcnJvckVuZFk/Om51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBRJHtjdHJsWH0sJHtjdHJsWX0sJHtlbmRYfSwke2VuZFl9YCk7XHJcbiAgICAgICAgaWYgKGFsbFZhbHVlc0Fzc2lnbmVkKG1pcnJvckVuZFgsIG1pcnJvckVuZFkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBUJHttaXJyb3JFbmRYfSwke21pcnJvckVuZFl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=\n\n//# sourceURL=webpack:///./lib/Path.js?");

/***/ }),

/***/ "./lib/createSVGElement.js":
/*!*********************************!*\
  !*** ./lib/createSVGElement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = createSVGElement;\n\nvar _object_utils = __webpack_require__(/*! ./helpers/object_utils */ \"./lib/helpers/object_utils.js\");\n\nvar _function_utils = __webpack_require__(/*! ./helpers/function_utils */ \"./lib/helpers/function_utils.js\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar getParentFunctionByType = (0, _object_utils.createProxy)({\n  \"string\": function string(selector) {\n    return document.querySelector(selector);\n  }\n}, _function_utils.identityFn);\n\nfunction createSVGElement(svgParent, id, classNames) {\n  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"path\";\n  var elem = document.createElementNS(\"http://www.w3.org/2000/svg\", type);\n  id && (elem.id = id);\n  classNames && elem.setAttribute('class', classNames);\n  svgParent && getParentFunctionByType[_typeof(svgParent)](svgParent).appendChild(elem);\n  return elem;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVTVkdFbGVtZW50LnRzIl0sIm5hbWVzIjpbImdldFBhcmVudEZ1bmN0aW9uQnlUeXBlIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZGVudGl0eUZuIiwiY3JlYXRlU1ZHRWxlbWVudCIsInN2Z1BhcmVudCIsImlkIiwiY2xhc3NOYW1lcyIsInR5cGUiLCJlbGVtIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHLCtCQUFzQjtBQUNsRCxZQUFVLGdCQUFDQyxRQUFEO0FBQUEsV0FBcUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkYsUUFBdkIsQ0FBckI7QUFBQTtBQUR3QyxDQUF0QixFQUU3QkcsMEJBRjZCLENBQWhDOztBQUllLFNBQVNDLGdCQUFULENBQTBCQyxTQUExQixFQUEyREMsRUFBM0QsRUFBdUVDLFVBQXZFLEVBQWtIO0FBQUEsTUFBdkJDLElBQXVCLHVFQUFSLE1BQVE7QUFDN0gsTUFBTUMsSUFBSSxHQUFHUixRQUFRLENBQUNTLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVERixJQUF2RCxDQUFiO0FBRUFGLEVBQUFBLEVBQUUsS0FBS0csSUFBSSxDQUFDSCxFQUFMLEdBQVVBLEVBQWYsQ0FBRjtBQUNBQyxFQUFBQSxVQUFVLElBQUtFLElBQUksQ0FBQ0UsWUFBTCxDQUFrQixPQUFsQixFQUEyQkosVUFBM0IsQ0FBZjtBQUNBRixFQUFBQSxTQUFTLElBQUtOLHVCQUF1QixTQUFRTSxTQUFSLEVBQXZCLENBQTBDQSxTQUExQyxFQUFxRE8sV0FBckQsQ0FBaUVILElBQWpFLENBQWQ7QUFFQSxTQUFPQSxJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm94eSB9IGZyb20gXCIuL2hlbHBlcnMvb2JqZWN0X3V0aWxzXCI7XHJcbmltcG9ydCB7IGlkZW50aXR5Rm4gfSBmcm9tIFwiLi9oZWxwZXJzL2Z1bmN0aW9uX3V0aWxzXCI7XHJcblxyXG5jb25zdCBnZXRQYXJlbnRGdW5jdGlvbkJ5VHlwZSA9IGNyZWF0ZVByb3h5PEZ1bmN0aW9uPih7XHJcbiAgICBcInN0cmluZ1wiOiAoc2VsZWN0b3I6c3RyaW5nKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG59LCBpZGVudGl0eUZuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNWR0VsZW1lbnQoc3ZnUGFyZW50PzogU1ZHRWxlbWVudCB8IHN0cmluZywgaWQ/OnN0cmluZywgY2xhc3NOYW1lcz86c3RyaW5nLCB0eXBlOiBcInBhdGhcIiA9IFwicGF0aFwiKSB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdHlwZSk7XHJcblxyXG4gICAgaWQgJiYgKGVsZW0uaWQgPSBpZCk7XHJcbiAgICBjbGFzc05hbWVzICYmIChlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWVzKSk7XHJcbiAgICBzdmdQYXJlbnQgJiYgKGdldFBhcmVudEZ1bmN0aW9uQnlUeXBlW3R5cGVvZiBzdmdQYXJlbnRdKHN2Z1BhcmVudCkuYXBwZW5kQ2hpbGQoZWxlbSkpO1xyXG5cclxuICAgIHJldHVybiBlbGVtO1xyXG59XHJcbiJdfQ==\n\n//# sourceURL=webpack:///./lib/createSVGElement.js?");

/***/ }),

/***/ "./lib/helpers/function_utils.js":
/*!***************************************!*\
  !*** ./lib/helpers/function_utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emptyFn = exports.identityFn = void 0;\n\nvar identityFn = function identityFn(x) {\n  return x;\n};\n\nexports.identityFn = identityFn;\n\nvar emptyFn = function emptyFn() {};\n\nexports.emptyFn = emptyFn;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2Z1bmN0aW9uX3V0aWxzLnRzIl0sIm5hbWVzIjpbImlkZW50aXR5Rm4iLCJ4IiwiZW1wdHlGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQU1BLFVBQW1CLEdBQUcsU0FBdEJBLFVBQXNCLENBQUNDLENBQUQ7QUFBQSxTQUFXQSxDQUFYO0FBQUEsQ0FBNUI7Ozs7QUFDQSxJQUFNQyxPQUFnQixHQUFHLFNBQW5CQSxPQUFtQixHQUFNLENBQUUsQ0FBakMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpZGVudGl0eUZuOkZ1bmN0aW9uID0gKHg6YW55KSA9PiB4O1xyXG5jb25zdCBlbXB0eUZuOkZ1bmN0aW9uID0gKCkgPT4ge31cclxuXHJcbmV4cG9ydCB7aWRlbnRpdHlGbiwgZW1wdHlGbn07Il19\n\n//# sourceURL=webpack:///./lib/helpers/function_utils.js?");

/***/ }),

/***/ "./lib/helpers/input_validations.js":
/*!******************************************!*\
  !*** ./lib/helpers/input_validations.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.allValuesAssigned = exports.valueAssigned = void 0;\n\nvar _object_utils = __webpack_require__(/*! ./object_utils */ \"./lib/helpers/object_utils.js\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar assignedTests = (0, _object_utils.createProxy)({\n  \"object\": function object(val) {\n    return val !== null;\n  },\n  \"number\": function number(val) {\n    return !isNaN(val);\n  },\n  \"undefined\": function undefined() {\n    return false;\n  }\n}, function () {\n  return true;\n});\n/**\r\n * @description test to see the value *IS NOT* null / undefined / NaN\r\n * @param val \r\n */\n\nvar valueAssigned = function valueAssigned(val) {\n  return assignedTests[_typeof(val)](val);\n};\n/**\r\n * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned.\r\n * @see {@link valueAssigned}\r\n * @param args \r\n */\n\n\nexports.valueAssigned = valueAssigned;\n\nvar allValuesAssigned = function allValuesAssigned() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.every(valueAssigned);\n};\n\nexports.allValuesAssigned = allValuesAssigned;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2lucHV0X3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbImFzc2lnbmVkVGVzdHMiLCJ2YWwiLCJpc05hTiIsInZhbHVlQXNzaWduZWQiLCJhbGxWYWx1ZXNBc3NpZ25lZCIsImFyZ3MiLCJldmVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLCtCQUFzQjtBQUN4QyxZQUFVLGdCQUFDQyxHQUFEO0FBQUEsV0FBYUEsR0FBRyxLQUFLLElBQXJCO0FBQUEsR0FEOEI7QUFFeEMsWUFBVSxnQkFBQ0EsR0FBRDtBQUFBLFdBQWdCLENBQUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUF0QjtBQUFBLEdBRjhCO0FBR3hDLGVBQWE7QUFBQSxXQUFNLEtBQU47QUFBQTtBQUgyQixDQUF0QixFQUluQjtBQUFBLFNBQU0sSUFBTjtBQUFBLENBSm1CLENBQXRCO0FBTUE7Ozs7O0FBSUEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixHQUFEO0FBQUEsU0FBYUQsYUFBYSxTQUFRQyxHQUFSLEVBQWIsQ0FBMEJBLEdBQTFCLENBQWI7QUFBQSxDQUF0QjtBQUVBOzs7Ozs7Ozs7QUFLQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsb0NBQUlDLElBQUo7QUFBSUEsSUFBQUEsSUFBSjtBQUFBOztBQUFBLFNBQW1CQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsYUFBWCxDQUFuQjtBQUFBLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tIFwiLi9vYmplY3RfdXRpbHNcIjtcclxuXHJcbmNvbnN0IGFzc2lnbmVkVGVzdHMgPSBjcmVhdGVQcm94eTxGdW5jdGlvbj4oe1xyXG4gICAgXCJvYmplY3RcIjogKHZhbDphbnkpID0+IHZhbCAhPT0gbnVsbCxcclxuICAgIFwibnVtYmVyXCI6ICh2YWw6bnVtYmVyKSA9PiAhaXNOYU4odmFsKSxcclxuICAgIFwidW5kZWZpbmVkXCI6ICgpID0+IGZhbHNlXHJcbn0sICgpID0+IHRydWUpXHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIHRlc3QgdG8gc2VlIHRoZSB2YWx1ZSAqSVMgTk9UKiBudWxsIC8gdW5kZWZpbmVkIC8gTmFOXHJcbiAqIEBwYXJhbSB2YWwgXHJcbiAqL1xyXG5jb25zdCB2YWx1ZUFzc2lnbmVkID0gKHZhbDphbnkpID0+IGFzc2lnbmVkVGVzdHNbdHlwZW9mIHZhbF0odmFsKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY2lwcmlvdG4gY2hlY2sgbm9uZSBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIGlzIG51bGwgLyB1bmRlZmluZWQgLyBOYU4uIHVzZXMgdmFsdWVBc3NpZ25lZC5cclxuICogQHNlZSB7QGxpbmsgdmFsdWVBc3NpZ25lZH1cclxuICogQHBhcmFtIGFyZ3MgXHJcbiAqL1xyXG5jb25zdCBhbGxWYWx1ZXNBc3NpZ25lZCA9ICguLi5hcmdzOmFueVtdKSA9PiBhcmdzLmV2ZXJ5KHZhbHVlQXNzaWduZWQpO1xyXG5cclxuZXhwb3J0IHt2YWx1ZUFzc2lnbmVkLCBhbGxWYWx1ZXNBc3NpZ25lZH07Il19\n\n//# sourceURL=webpack:///./lib/helpers/input_validations.js?");

/***/ }),

/***/ "./lib/helpers/object_utils.js":
/*!*************************************!*\
  !*** ./lib/helpers/object_utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createProxy = createProxy;\n\nfunction createProxy(target, def) {\n  var handler = {\n    get: function get(target, prop) {\n      return target[prop] || def;\n    }\n  };\n  return new Proxy(target, handler);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL29iamVjdF91dGlscy50cyJdLCJuYW1lcyI6WyJjcmVhdGVQcm94eSIsInRhcmdldCIsImRlZiIsImhhbmRsZXIiLCJnZXQiLCJwcm9wIiwiUHJveHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxXQUFULENBQXdCQyxNQUF4QixFQUF1Q0MsR0FBdkMsRUFBaUU7QUFFN0QsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLElBQUFBLEdBQUcsRUFBRSxhQUFDSCxNQUFELEVBQWFJLElBQWIsRUFBbUQ7QUFDcEQsYUFBT0osTUFBTSxDQUFDSSxJQUFELENBQU4sSUFBZ0JILEdBQXZCO0FBQ0g7QUFIVyxHQUFoQjtBQU1BLFNBQU8sSUFBSUksS0FBSixDQUFVTCxNQUFWLEVBQWtCRSxPQUFsQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVQcm94eTxUPih0YXJnZXQ6b2JqZWN0LCBkZWY6VCk6e1trZXk6IHN0cmluZ106IFR9IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVyID0ge1xyXG4gICAgICAgIGdldDogKHRhcmdldDphbnksIHByb3A6c3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKSA6IFQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdIHx8IGRlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVByb3h5fTsiXX0=\n\n//# sourceURL=webpack:///./lib/helpers/object_utils.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"createSVGElement\", {\n  enumerable: true,\n  get: function get() {\n    return _createSVGElement[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"Path\", {\n  enumerable: true,\n  get: function get() {\n    return _Path[\"default\"];\n  }\n});\n\nvar _createSVGElement = _interopRequireDefault(__webpack_require__(/*! ./createSVGElement */ \"./lib/createSVGElement.js\"));\n\nvar _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ \"./lib/Path.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVTVkdFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVNWR0VsZW1lbnRcIjtcclxuaW1wb3J0IFBhdGggZnJvbSBcIi4vUGF0aFwiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZVNWR0VsZW1lbnQsXHJcbiAgICBQYXRoXHJcbn1cclxuIl19\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ })

/******/ });