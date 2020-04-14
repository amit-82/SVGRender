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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _input_validations = __webpack_require__(/*! ./helpers/input_validations */ \"./lib/helpers/input_validations.js\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Path = /*#__PURE__*/function () {\n  function Path(element) {\n    var _this = this;\n\n    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    _classCallCheck(this, Path);\n\n    _defineProperty(this, \"element\", void 0);\n\n    _defineProperty(this, \"_instructions\", void 0);\n\n    _defineProperty(this, \"closePath\", function () {\n      _this._instructions.push(\"z\");\n\n      return _this;\n    });\n\n    _defineProperty(this, \"moveTo\", function (x, y) {\n      _this._instructions.push(\"M\".concat(x, \",\").concat(y));\n\n      return _this;\n    });\n\n    _defineProperty(this, \"lineTo\", function (x, y) {\n      _this._instructions.push(\"L\".concat(x, \",\").concat(y));\n\n      return _this;\n    });\n\n    _defineProperty(this, \"curve\", function (ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY) {\n      _this._instructions.push(\"C\".concat(ctrl1X, \",\").concat(ctrl1Y, \",\").concat(ctrl2X, \",\").concat(ctrl2Y, \",\").concat(endX, \",\").concat(endY));\n\n      return _this;\n    });\n\n    _defineProperty(this, \"bezier\", function (ctrlX, ctrlY, endX, endY) {\n      _this._instructions.push(\"S\".concat(ctrlX, \",\").concat(ctrlY, \",\").concat(endX, \",\").concat(endY));\n\n      return _this;\n    });\n\n    _defineProperty(this, \"quadratic\", function (ctrlX, ctrlY, endX, endY, mirrorEndX, mirrorEndY) {\n      _this._instructions.push(\"Q\".concat(ctrlX, \",\").concat(ctrlY, \",\").concat(endX, \",\").concat(endY));\n\n      if ((0, _input_validations.allValuesAssigned)(mirrorEndX, mirrorEndY)) {\n        _this._instructions.push(\"T\".concat(mirrorEndX, \",\").concat(mirrorEndY));\n      }\n\n      return _this;\n    });\n\n    this._instructions = instructions;\n    this.element = element;\n  }\n\n  _createClass(Path, [{\n    key: \"getInstructions\",\n    value: function getInstructions() {\n      return _toConsumableArray(this._instructions);\n    }\n  }, {\n    key: \"updateElement\",\n    value: function updateElement() {\n      this.element && this.element.setAttribute(\"d\", this._instructions.join(\" \"));\n    }\n  }]);\n\n  return Path;\n}();\n\nexports[\"default\"] = Path;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGgiLCJlbGVtZW50IiwiaW5zdHJ1Y3Rpb25zIiwiX2luc3RydWN0aW9ucyIsInB1c2giLCJ4IiwieSIsImN0cmwxWCIsImN0cmwxWSIsImN0cmwyWCIsImN0cmwyWSIsImVuZFgiLCJlbmRZIiwiY3RybFgiLCJjdHJsWSIsIm1pcnJvckVuZFgiLCJtaXJyb3JFbmRZIiwic2V0QXR0cmlidXRlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJO0FBSW5CLGdCQUFZQyxPQUFaLEVBQTJFO0FBQUE7O0FBQUEsUUFBckNDLFlBQXFDLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsdUNBY3hELFlBQVk7QUFDN0IsTUFBQSxLQUFJLENBQUNDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLEdBQXhCOztBQUNBLGFBQU8sS0FBUDtBQUNELEtBakIwRTs7QUFBQSxvQ0FtQjNELFVBQUNDLENBQUQsRUFBWUMsQ0FBWixFQUEwQjtBQUN4QyxNQUFBLEtBQUksQ0FBQ0gsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJDLENBQTVCLGNBQWlDQyxDQUFqQzs7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQXRCMEU7O0FBQUEsb0NBd0IzRCxVQUFDRCxDQUFELEVBQVlDLENBQVosRUFBMEI7QUFDeEMsTUFBQSxLQUFJLENBQUNILGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCQyxDQUE1QixjQUFpQ0MsQ0FBakM7O0FBQ0EsYUFBTyxLQUFQO0FBQ0QsS0EzQjBFOztBQUFBLG1DQTZCNUQsVUFDYkMsTUFEYSxFQUViQyxNQUZhLEVBR2JDLE1BSGEsRUFJYkMsTUFKYSxFQUtiQyxJQUxhLEVBTWJDLElBTmEsRUFPVjtBQUNILE1BQUEsS0FBSSxDQUFDVCxhQUFMLENBQW1CQyxJQUFuQixZQUNNRyxNQUROLGNBQ2dCQyxNQURoQixjQUMwQkMsTUFEMUIsY0FDb0NDLE1BRHBDLGNBQzhDQyxJQUQ5QyxjQUNzREMsSUFEdEQ7O0FBR0EsYUFBTyxLQUFQO0FBQ0QsS0F6QzBFOztBQUFBLG9DQTJDM0QsVUFDZEMsS0FEYyxFQUVkQyxLQUZjLEVBR2RILElBSGMsRUFJZEMsSUFKYyxFQUtYO0FBQ0gsTUFBQSxLQUFJLENBQUNULGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCUyxLQUE1QixjQUFxQ0MsS0FBckMsY0FBOENILElBQTlDLGNBQXNEQyxJQUF0RDs7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQW5EMEU7O0FBQUEsdUNBcUR4RCxVQUNqQkMsS0FEaUIsRUFFakJDLEtBRmlCLEVBR2pCSCxJQUhpQixFQUlqQkMsSUFKaUIsRUFLakJHLFVBTGlCLEVBTWpCQyxVQU5pQixFQU9kO0FBQ0gsTUFBQSxLQUFJLENBQUNiLGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCUyxLQUE1QixjQUFxQ0MsS0FBckMsY0FBOENILElBQTlDLGNBQXNEQyxJQUF0RDs7QUFDQSxVQUFJLDBDQUFrQkcsVUFBbEIsRUFBOEJDLFVBQTlCLENBQUosRUFBK0M7QUFDN0MsUUFBQSxLQUFJLENBQUNiLGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCVyxVQUE1QixjQUEwQ0MsVUFBMUM7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRCxLQWxFMEU7O0FBQ3pFLFNBQUtiLGFBQUwsR0FBcUJELFlBQXJCO0FBQ0EsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7c0NBRTBDO0FBQ3pDLGdDQUFXLEtBQUtFLGFBQWhCO0FBQ0Q7OztvQ0FFc0I7QUFDckIsV0FBS0YsT0FBTCxJQUNFLEtBQUtBLE9BQUwsQ0FBYWdCLFlBQWIsQ0FBMEIsR0FBMUIsRUFBK0IsS0FBS2QsYUFBTCxDQUFtQmUsSUFBbkIsQ0FBd0IsR0FBeEIsQ0FBL0IsQ0FERjtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsVmFsdWVzQXNzaWduZWQgfSBmcm9tIFwiLi9oZWxwZXJzL2lucHV0X3ZhbGlkYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICBwcml2YXRlIGVsZW1lbnQ6IFNWR1BhdGhFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2luc3RydWN0aW9uczogc3RyaW5nT3JOdW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudD86IFNWR1BhdGhFbGVtZW50LCBpbnN0cnVjdGlvbnM6IHN0cmluZ09yTnVtYmVyW10gPSBbXSkge1xyXG4gICAgdGhpcy5faW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25zO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJbnN0cnVjdGlvbnMoKTogc3RyaW5nT3JOdW1iZXJbXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX2luc3RydWN0aW9uc107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudCAmJlxyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZFwiLCB0aGlzLl9pbnN0cnVjdGlvbnMuam9pbihcIiBcIikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlUGF0aCA9ICgpOiBQYXRoID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFwielwiKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8gPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBNJHt4fSwke3l9YCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBwdWJsaWMgbGluZVRvID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgTCR7eH0sJHt5fWApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGN1cnZlID0gKFxyXG4gICAgY3RybDFYOiBudW1iZXIsXHJcbiAgICBjdHJsMVk6IG51bWJlcixcclxuICAgIGN0cmwyWDogbnVtYmVyLFxyXG4gICAgY3RybDJZOiBudW1iZXIsXHJcbiAgICBlbmRYOiBudW1iZXIsXHJcbiAgICBlbmRZOiBudW1iZXJcclxuICApID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFxyXG4gICAgICBgQyR7Y3RybDFYfSwke2N0cmwxWX0sJHtjdHJsMlh9LCR7Y3RybDJZfSwke2VuZFh9LCR7ZW5kWX1gXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGJlemllciA9IChcclxuICAgIGN0cmxYOiBudW1iZXIsXHJcbiAgICBjdHJsWTogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyXHJcbiAgKSA9PiB7XHJcbiAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgUyR7Y3RybFh9LCR7Y3RybFl9LCR7ZW5kWH0sJHtlbmRZfWApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHF1YWRyYXRpYyA9IChcclxuICAgIGN0cmxYOiBudW1iZXIsXHJcbiAgICBjdHJsWTogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyLFxyXG4gICAgbWlycm9yRW5kWD86IG51bWJlcixcclxuICAgIG1pcnJvckVuZFk/OiBudW1iZXJcclxuICApID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBRJHtjdHJsWH0sJHtjdHJsWX0sJHtlbmRYfSwke2VuZFl9YCk7XHJcbiAgICBpZiAoYWxsVmFsdWVzQXNzaWduZWQobWlycm9yRW5kWCwgbWlycm9yRW5kWSkpIHtcclxuICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYFQke21pcnJvckVuZFh9LCR7bWlycm9yRW5kWX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbn1cclxuIl19\n\n//# sourceURL=webpack:///./lib/Path.js?");

/***/ }),

/***/ "./lib/createSVGElement.js":
/*!*********************************!*\
  !*** ./lib/createSVGElement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = createSVGElement;\n\nvar _object_utils = __webpack_require__(/*! ./helpers/object_utils */ \"./lib/helpers/object_utils.js\");\n\nvar _function_utils = __webpack_require__(/*! ./helpers/function_utils */ \"./lib/helpers/function_utils.js\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* istanbul ignore next */\nvar getParentFunctionByType = (0, _object_utils.createProxy)({\n  string: function string(selector) {\n    return document.querySelector(selector);\n  }\n}, _function_utils.identityFn);\n\nfunction createSVGElement(type, svgParent, id, classNames) {\n  var elem = document.createElementNS(\"http://www.w3.org/2000/svg\", type);\n  id && (elem.id = id);\n  classNames && elem.setAttribute(\"class\", classNames);\n  svgParent && getParentFunctionByType[_typeof(svgParent)](svgParent).appendChild(elem);\n  return elem;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVTVkdFbGVtZW50LnRzIl0sIm5hbWVzIjpbImdldFBhcmVudEZ1bmN0aW9uQnlUeXBlIiwic3RyaW5nIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZGVudGl0eUZuIiwiY3JlYXRlU1ZHRWxlbWVudCIsInR5cGUiLCJzdmdQYXJlbnQiLCJpZCIsImNsYXNzTmFtZXMiLCJlbGVtIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBTUEsdUJBQXVCLEdBQUcsK0JBQy9CO0FBQ0NDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsUUFBRDtBQUFBLFdBQXNCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJGLFFBQXZCLENBQXRCO0FBQUE7QUFEVCxDQUQrQixFQUkvQkcsMEJBSitCLENBQWhDOztBQStEZSxTQUFTQyxnQkFBVCxDQUNkQyxJQURjLEVBRWRDLFNBRmMsRUFHZEMsRUFIYyxFQUlkQyxVQUpjLEVBS0Q7QUFDYixNQUFNQyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ1MsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdURMLElBQXZELENBQWI7QUFFQUUsRUFBQUEsRUFBRSxLQUFLRSxJQUFJLENBQUNGLEVBQUwsR0FBVUEsRUFBZixDQUFGO0FBQ0FDLEVBQUFBLFVBQVUsSUFBSUMsSUFBSSxDQUFDRSxZQUFMLENBQWtCLE9BQWxCLEVBQTJCSCxVQUEzQixDQUFkO0FBQ0FGLEVBQUFBLFNBQVMsSUFDUlIsdUJBQXVCLFNBQVFRLFNBQVIsRUFBdkIsQ0FBMENBLFNBQTFDLEVBQXFETSxXQUFyRCxDQUFpRUgsSUFBakUsQ0FERDtBQUdBLFNBQU9BLElBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVByb3h5IH0gZnJvbSBcIi4vaGVscGVycy9vYmplY3RfdXRpbHNcIjtcclxuaW1wb3J0IHsgaWRlbnRpdHlGbiB9IGZyb20gXCIuL2hlbHBlcnMvZnVuY3Rpb25fdXRpbHNcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmNvbnN0IGdldFBhcmVudEZ1bmN0aW9uQnlUeXBlID0gY3JlYXRlUHJveHk8RnVuY3Rpb24+KFxyXG5cdHtcclxuXHRcdHN0cmluZzogKHNlbGVjdG9yOiBzdHJpbmcpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxyXG5cdH0sXHJcblx0aWRlbnRpdHlGblxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU1ZHRWxlbWVudChcclxuXHR0eXBlOiBcInN2Z1wiLFxyXG5cdHN2Z1BhcmVudD86IG9wdG9uYWxTVkdPclN0cmluZyxcclxuXHRpZD86IG9wdG9uYWxTdHJpbmcsXHJcblx0Y2xhc3NOYW1lcz86IG9wdG9uYWxTdHJpbmdcclxuKTogU1ZHRWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNWR0VsZW1lbnQoXHJcblx0dHlwZTogXCJjaXJjbGVcIixcclxuXHRzdmdQYXJlbnQ/OiBvcHRvbmFsU1ZHT3JTdHJpbmcsXHJcblx0aWQ/OiBvcHRvbmFsU3RyaW5nLFxyXG5cdGNsYXNzTmFtZXM/OiBvcHRvbmFsU3RyaW5nXHJcbik6IFNWR0NpcmNsZUVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTVkdFbGVtZW50KFxyXG5cdHR5cGU6IFwiZWxsaXBzZVwiLFxyXG5cdHN2Z1BhcmVudD86IG9wdG9uYWxTVkdPclN0cmluZyxcclxuXHRpZD86IG9wdG9uYWxTdHJpbmcsXHJcblx0Y2xhc3NOYW1lcz86IG9wdG9uYWxTdHJpbmdcclxuKTogU1ZHRWxsaXBzZUVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTVkdFbGVtZW50KFxyXG5cdHR5cGU6IFwibGluZVwiLFxyXG5cdHN2Z1BhcmVudD86IG9wdG9uYWxTVkdPclN0cmluZyxcclxuXHRpZD86IG9wdG9uYWxTdHJpbmcsXHJcblx0Y2xhc3NOYW1lcz86IG9wdG9uYWxTdHJpbmdcclxuKTogU1ZHTGluZUVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTVkdFbGVtZW50KFxyXG5cdHR5cGU6IFwicGF0aFwiLFxyXG5cdHN2Z1BhcmVudD86IG9wdG9uYWxTVkdPclN0cmluZyxcclxuXHRpZD86IG9wdG9uYWxTdHJpbmcsXHJcblx0Y2xhc3NOYW1lcz86IG9wdG9uYWxTdHJpbmdcclxuKTogU1ZHUGF0aEVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTVkdFbGVtZW50KFxyXG5cdHR5cGU6IFwicG9seWdvblwiLFxyXG5cdHN2Z1BhcmVudD86IG9wdG9uYWxTVkdPclN0cmluZyxcclxuXHRpZD86IG9wdG9uYWxTdHJpbmcsXHJcblx0Y2xhc3NOYW1lcz86IG9wdG9uYWxTdHJpbmdcclxuKTogU1ZHUG9seWdvbkVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTVkdFbGVtZW50KFxyXG5cdHR5cGU6IFwicG9seWxpbmVcIixcclxuXHRzdmdQYXJlbnQ/OiBvcHRvbmFsU1ZHT3JTdHJpbmcsXHJcblx0aWQ/OiBvcHRvbmFsU3RyaW5nLFxyXG5cdGNsYXNzTmFtZXM/OiBvcHRvbmFsU3RyaW5nXHJcbik6IFNWR1BvbHlsaW5lRWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNWR0VsZW1lbnQoXHJcblx0dHlwZTogXCJyZWN0XCIsXHJcblx0c3ZnUGFyZW50Pzogb3B0b25hbFNWR09yU3RyaW5nLFxyXG5cdGlkPzogb3B0b25hbFN0cmluZyxcclxuXHRjbGFzc05hbWVzPzogb3B0b25hbFN0cmluZ1xyXG4pOiBTVkdSZWN0RWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNWR0VsZW1lbnQoXHJcblx0dHlwZTogU1ZHRWxlbWVudFR5cGVzLFxyXG5cdHN2Z1BhcmVudD86IG9wdG9uYWxTVkdPclN0cmluZyxcclxuXHRpZD86IG9wdG9uYWxTdHJpbmcsXHJcblx0Y2xhc3NOYW1lcz86IG9wdG9uYWxTdHJpbmdcclxuKTogU1ZHRWxlbWVudCB7XHJcblx0Y29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHR5cGUpO1xyXG5cclxuXHRpZCAmJiAoZWxlbS5pZCA9IGlkKTtcclxuXHRjbGFzc05hbWVzICYmIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lcyk7XHJcblx0c3ZnUGFyZW50ICYmXHJcblx0XHRnZXRQYXJlbnRGdW5jdGlvbkJ5VHlwZVt0eXBlb2Ygc3ZnUGFyZW50XShzdmdQYXJlbnQpLmFwcGVuZENoaWxkKGVsZW0pO1xyXG5cclxuXHRyZXR1cm4gZWxlbTtcclxufVxyXG4iXX0=\n\n//# sourceURL=webpack:///./lib/createSVGElement.js?");

/***/ }),

/***/ "./lib/helpers/function_utils.js":
/*!***************************************!*\
  !*** ./lib/helpers/function_utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emptyFn = exports.identityFn = void 0;\n\nvar identityFn = function identityFn(x) {\n  return x;\n};\n\nexports.identityFn = identityFn;\n\nvar emptyFn = function emptyFn() {};\n\nexports.emptyFn = emptyFn;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2Z1bmN0aW9uX3V0aWxzLnRzIl0sIm5hbWVzIjpbImlkZW50aXR5Rm4iLCJ4IiwiZW1wdHlGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQU1BLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLENBQUNDLENBQUQ7QUFBQSxTQUFZQSxDQUFaO0FBQUEsQ0FBN0I7Ozs7QUFDQSxJQUFNQyxPQUFpQixHQUFHLFNBQXBCQSxPQUFvQixHQUFNLENBQUUsQ0FBbEMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpZGVudGl0eUZuOiBGdW5jdGlvbiA9ICh4OiBhbnkpID0+IHg7XHJcbmNvbnN0IGVtcHR5Rm46IEZ1bmN0aW9uID0gKCkgPT4ge307XHJcblxyXG5leHBvcnQgeyBpZGVudGl0eUZuLCBlbXB0eUZuIH07XHJcbiJdfQ==\n\n//# sourceURL=webpack:///./lib/helpers/function_utils.js?");

/***/ }),

/***/ "./lib/helpers/input_validations.js":
/*!******************************************!*\
  !*** ./lib/helpers/input_validations.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isEmpty = exports.allArrayMembersAssigned = exports.allValuesAssigned = exports.valueAssigned = void 0;\n\nvar _object_utils = __webpack_require__(/*! ./object_utils */ \"./lib/helpers/object_utils.js\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar assignedTests = (0, _object_utils.createProxy)({\n  object: function object(val) {\n    return val !== null;\n  },\n  number: function number(val) {\n    return !isNaN(val);\n  },\n  undefined: function undefined() {\n    return false;\n  }\n}, function () {\n  return true;\n});\nvar isEmptyTests = (0, _object_utils.createProxy)({\n  string: function string(val) {\n    return val.length === 0;\n  },\n  number: function number(val) {\n    return isNaN(val);\n  },\n  undefined: function undefined() {\n    return true;\n  },\n  symbol: function symbol() {\n    return false;\n  },\n  object: function object(val) {\n    if (val === null) {\n      return true;\n    } else if (Array.isArray(val)) {\n      return val.length === 0;\n    }\n\n    return Object.keys(val).length === 0;\n  }\n},\n/* istanbul ignore next */\nfunction (val) {\n  throw \"can't check if \".concat(val, \" is empty. validation test for type \").concat(_typeof(val), \" is not defined (?!)\");\n});\n/**\r\n * @description test to see the value *IS NOT* null / undefined / NaN\r\n * @param val\r\n * @returns boolean\r\n */\n\nvar valueAssigned = function valueAssigned(val) {\n  return assignedTests[_typeof(val)](val);\n};\n/**\r\n * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned. for validating members of array, use allArrayMembersAssigned\r\n * @see {@link valueAssigned}\r\n * @see {@link allArrayMembersAssigned}\r\n * @param args\r\n * @returns boolean\r\n */\n\n\nexports.valueAssigned = valueAssigned;\n\nvar allValuesAssigned = function allValuesAssigned() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.every(valueAssigned);\n};\n/**\r\n * @description check all members of the provided array are assigned. uses valueAssigned.\r\n * @param array\r\n * @see {@link valueAssigned}\r\n * @returns boolean\r\n */\n\n\nexports.allValuesAssigned = allValuesAssigned;\n\nvar allArrayMembersAssigned = function allArrayMembersAssigned(array) {\n  return array.every(valueAssigned);\n};\n/**\r\n * @description checks in the value is empty ({}, [], NaN, null, undefined)\r\n * @param val\r\n * @returns boolean\r\n */\n\n\nexports.allArrayMembersAssigned = allArrayMembersAssigned;\n\nvar isEmpty = function isEmpty(val) {\n  return isEmptyTests[_typeof(val)](val);\n};\n\nexports.isEmpty = isEmpty;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2lucHV0X3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbImFzc2lnbmVkVGVzdHMiLCJvYmplY3QiLCJ2YWwiLCJudW1iZXIiLCJpc05hTiIsInVuZGVmaW5lZCIsImlzRW1wdHlUZXN0cyIsInN0cmluZyIsImxlbmd0aCIsInN5bWJvbCIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZUFzc2lnbmVkIiwiYWxsVmFsdWVzQXNzaWduZWQiLCJhcmdzIiwiZXZlcnkiLCJhbGxBcnJheU1lbWJlcnNBc3NpZ25lZCIsImFycmF5IiwiaXNFbXB0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLCtCQUNyQjtBQUNDQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLEdBQUQ7QUFBQSxXQUFjQSxHQUFHLEtBQUssSUFBdEI7QUFBQSxHQURUO0FBRUNDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0QsR0FBRDtBQUFBLFdBQWlCLENBQUNFLEtBQUssQ0FBQ0YsR0FBRCxDQUF2QjtBQUFBLEdBRlQ7QUFHQ0csRUFBQUEsU0FBUyxFQUFFO0FBQUEsV0FBTSxLQUFOO0FBQUE7QUFIWixDQURxQixFQU1yQjtBQUFBLFNBQU0sSUFBTjtBQUFBLENBTnFCLENBQXRCO0FBU0EsSUFBTUMsWUFBWSxHQUFHLCtCQUNwQjtBQUNDQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQUNMLEdBQUQ7QUFBQSxXQUFpQkEsR0FBRyxDQUFDTSxNQUFKLEtBQWUsQ0FBaEM7QUFBQSxHQURUO0FBRUNMLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0QsR0FBRDtBQUFBLFdBQWlCRSxLQUFLLENBQUNGLEdBQUQsQ0FBdEI7QUFBQSxHQUZUO0FBR0NHLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBSFo7QUFJQ0ksRUFBQUEsTUFBTSxFQUFFO0FBQUEsV0FBTSxLQUFOO0FBQUEsR0FKVDtBQUtDUixFQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLEdBQUQsRUFBaUI7QUFDeEIsUUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDakIsYUFBTyxJQUFQO0FBQ0EsS0FGRCxNQUVPLElBQUlRLEtBQUssQ0FBQ0MsT0FBTixDQUFjVCxHQUFkLENBQUosRUFBd0I7QUFDOUIsYUFBT0EsR0FBRyxDQUFDTSxNQUFKLEtBQWUsQ0FBdEI7QUFDQTs7QUFDRCxXQUFPSSxNQUFNLENBQUNDLElBQVAsQ0FBWVgsR0FBWixFQUFpQk0sTUFBakIsS0FBNEIsQ0FBbkM7QUFDQTtBQVpGLENBRG9CO0FBZXBCO0FBQ0EsVUFBQ04sR0FBRCxFQUFjO0FBQ2IsaUNBQXdCQSxHQUF4Qix5REFBeUVBLEdBQXpFO0FBQ0EsQ0FsQm1CLENBQXJCO0FBcUJBOzs7Ozs7QUFLQSxJQUFNWSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNaLEdBQUQ7QUFBQSxTQUFjRixhQUFhLFNBQVFFLEdBQVIsRUFBYixDQUEwQkEsR0FBMUIsQ0FBZDtBQUFBLENBQXRCO0FBRUE7Ozs7Ozs7Ozs7O0FBT0EsSUFBTWEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLG9DQUFJQyxJQUFKO0FBQUlBLElBQUFBLElBQUo7QUFBQTs7QUFBQSxTQUFvQkEsSUFBSSxDQUFDQyxLQUFMLENBQVdILGFBQVgsQ0FBcEI7QUFBQSxDQUExQjtBQUVBOzs7Ozs7Ozs7O0FBTUEsSUFBTUksdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxLQUFEO0FBQUEsU0FBa0JBLEtBQUssQ0FBQ0YsS0FBTixDQUFZSCxhQUFaLENBQWxCO0FBQUEsQ0FBaEM7QUFFQTs7Ozs7Ozs7O0FBS0EsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2xCLEdBQUQ7QUFBQSxTQUFjSSxZQUFZLFNBQVFKLEdBQVIsRUFBWixDQUF5QkEsR0FBekIsQ0FBZDtBQUFBLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tIFwiLi9vYmplY3RfdXRpbHNcIjtcclxuXHJcbmNvbnN0IGFzc2lnbmVkVGVzdHMgPSBjcmVhdGVQcm94eTxGdW5jdGlvbj4oXHJcblx0e1xyXG5cdFx0b2JqZWN0OiAodmFsOiBhbnkpID0+IHZhbCAhPT0gbnVsbCxcclxuXHRcdG51bWJlcjogKHZhbDogbnVtYmVyKSA9PiAhaXNOYU4odmFsKSxcclxuXHRcdHVuZGVmaW5lZDogKCkgPT4gZmFsc2UsXHJcblx0fSxcclxuXHQoKSA9PiB0cnVlXHJcbik7XHJcblxyXG5jb25zdCBpc0VtcHR5VGVzdHMgPSBjcmVhdGVQcm94eTxGdW5jdGlvbj4oXHJcblx0e1xyXG5cdFx0c3RyaW5nOiAodmFsOiBzdHJpbmcpID0+IHZhbC5sZW5ndGggPT09IDAsXHJcblx0XHRudW1iZXI6ICh2YWw6IG51bWJlcikgPT4gaXNOYU4odmFsKSxcclxuXHRcdHVuZGVmaW5lZDogKCkgPT4gdHJ1ZSxcclxuXHRcdHN5bWJvbDogKCkgPT4gZmFsc2UsXHJcblx0XHRvYmplY3Q6ICh2YWw6IG9iamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAodmFsID09PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbC5sZW5ndGggPT09IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcblx0KHZhbDogYW55KSA9PiB7XHJcblx0XHR0aHJvdyBgY2FuJ3QgY2hlY2sgaWYgJHt2YWx9IGlzIGVtcHR5LiB2YWxpZGF0aW9uIHRlc3QgZm9yIHR5cGUgJHt0eXBlb2YgdmFsfSBpcyBub3QgZGVmaW5lZCAoPyEpYDtcclxuXHR9XHJcbik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIHRlc3QgdG8gc2VlIHRoZSB2YWx1ZSAqSVMgTk9UKiBudWxsIC8gdW5kZWZpbmVkIC8gTmFOXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuY29uc3QgdmFsdWVBc3NpZ25lZCA9ICh2YWw6IGFueSkgPT4gYXNzaWduZWRUZXN0c1t0eXBlb2YgdmFsXSh2YWwpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjaXByaW90biBjaGVjayBub25lIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudHMgaXMgbnVsbCAvIHVuZGVmaW5lZCAvIE5hTi4gdXNlcyB2YWx1ZUFzc2lnbmVkLiBmb3IgdmFsaWRhdGluZyBtZW1iZXJzIG9mIGFycmF5LCB1c2UgYWxsQXJyYXlNZW1iZXJzQXNzaWduZWRcclxuICogQHNlZSB7QGxpbmsgdmFsdWVBc3NpZ25lZH1cclxuICogQHNlZSB7QGxpbmsgYWxsQXJyYXlNZW1iZXJzQXNzaWduZWR9XHJcbiAqIEBwYXJhbSBhcmdzXHJcbiAqIEByZXR1cm5zIGJvb2xlYW5cclxuICovXHJcbmNvbnN0IGFsbFZhbHVlc0Fzc2lnbmVkID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhcmdzLmV2ZXJ5KHZhbHVlQXNzaWduZWQpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBjaGVjayBhbGwgbWVtYmVycyBvZiB0aGUgcHJvdmlkZWQgYXJyYXkgYXJlIGFzc2lnbmVkLiB1c2VzIHZhbHVlQXNzaWduZWQuXHJcbiAqIEBwYXJhbSBhcnJheVxyXG4gKiBAc2VlIHtAbGluayB2YWx1ZUFzc2lnbmVkfVxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5jb25zdCBhbGxBcnJheU1lbWJlcnNBc3NpZ25lZCA9IChhcnJheTogYW55W10pID0+IGFycmF5LmV2ZXJ5KHZhbHVlQXNzaWduZWQpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgaW4gdGhlIHZhbHVlIGlzIGVtcHR5ICh7fSwgW10sIE5hTiwgbnVsbCwgdW5kZWZpbmVkKVxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIGJvb2xlYW5cclxuICovXHJcbmNvbnN0IGlzRW1wdHkgPSAodmFsOiBhbnkpID0+IGlzRW1wdHlUZXN0c1t0eXBlb2YgdmFsXSh2YWwpO1xyXG5cclxuZXhwb3J0IHsgdmFsdWVBc3NpZ25lZCwgYWxsVmFsdWVzQXNzaWduZWQsIGFsbEFycmF5TWVtYmVyc0Fzc2lnbmVkLCBpc0VtcHR5IH07XHJcbiJdfQ==\n\n//# sourceURL=webpack:///./lib/helpers/input_validations.js?");

/***/ }),

/***/ "./lib/helpers/object_utils.js":
/*!*************************************!*\
  !*** ./lib/helpers/object_utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createProxy = createProxy;\n\nfunction createProxy(target, def) {\n  var handler = {\n    get: function get(target, prop) {\n      return target[prop] || def;\n    }\n  };\n  return new Proxy(target, handler);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL29iamVjdF91dGlscy50cyJdLCJuYW1lcyI6WyJjcmVhdGVQcm94eSIsInRhcmdldCIsImRlZiIsImhhbmRsZXIiLCJnZXQiLCJwcm9wIiwiUHJveHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxXQUFULENBQXdCQyxNQUF4QixFQUF3Q0MsR0FBeEMsRUFBc0U7QUFDckUsTUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLElBQUFBLEdBQUcsRUFBRSxhQUFDSCxNQUFELEVBQWNJLElBQWQsRUFBb0Q7QUFDeEQsYUFBT0osTUFBTSxDQUFDSSxJQUFELENBQU4sSUFBZ0JILEdBQXZCO0FBQ0E7QUFIYyxHQUFoQjtBQU1BLFNBQU8sSUFBSUksS0FBSixDQUFVTCxNQUFWLEVBQWtCRSxPQUFsQixDQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVQcm94eTxUPih0YXJnZXQ6IG9iamVjdCwgZGVmOiBUKTogeyBba2V5OiBzdHJpbmddOiBUIH0ge1xyXG5cdGNvbnN0IGhhbmRsZXIgPSB7XHJcblx0XHRnZXQ6ICh0YXJnZXQ6IGFueSwgcHJvcDogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKTogVCA9PiB7XHJcblx0XHRcdHJldHVybiB0YXJnZXRbcHJvcF0gfHwgZGVmO1xyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb3h5IH07XHJcbiJdfQ==\n\n//# sourceURL=webpack:///./lib/helpers/object_utils.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"createSVGElement\", {\n  enumerable: true,\n  get: function get() {\n    return _createSVGElement[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"Path\", {\n  enumerable: true,\n  get: function get() {\n    return _Path[\"default\"];\n  }\n});\n\nvar _createSVGElement = _interopRequireDefault(__webpack_require__(/*! ./createSVGElement */ \"./lib/createSVGElement.js\"));\n\nvar _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ \"./lib/Path.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVTVkdFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVNWR0VsZW1lbnRcIjtcclxuaW1wb3J0IFBhdGggZnJvbSBcIi4vUGF0aFwiO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlU1ZHRWxlbWVudCwgUGF0aCB9O1xyXG4iXX0=\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ })

/******/ });