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

/***/ "./dist/bundle.js":
/*!************************!*\
  !*** ./dist/bundle.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'D:\\\\workspace\\\\libraries\\\\svgpath\\\\dist\\\\bundle.js'\");\n\n//# sourceURL=webpack:///./dist/bundle.js?");

/***/ }),

/***/ "./example/src/index.js":
/*!******************************!*\
  !*** ./example/src/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\r\n\tPathController,\r\n\tcreateSVGElement,\r\n\tLineController,\r\n\tPolylineController,\r\n\tPolygonController,\r\n\tCircleController,\r\n\tEllipseController,\r\n\tRectController,\r\n} = __webpack_require__(/*! ../../dist/bundle */ \"./dist/bundle.js\");\r\n\r\nconst svgElem = document.getElementById('svg');\r\n\r\nconst pathElem = createSVGElement('path', svgElem);\r\nconst path = new PathController(pathElem)\r\n\t.moveTo(50, 50)\r\n\t.quadTo(75, 0, 100, 50)\r\n\t.lineTo(100, 100)\r\n\t.cubicTo(75, 10, 75, 10, 50, 150)\r\n\t.closePath()\r\n\t.updateElement();\r\n\r\nconst lineElem = createSVGElement('line', svgElem);\r\nnew LineController(lineElem).moveTo(10, 10).lineTo(20, 30).updateElement();\r\n\r\nconst lineElem2 = createSVGElement('line', svgElem);\r\nnew LineController(lineElem2).lineTo(10, 60).updateElement();\r\n\r\nconst polyline = createSVGElement('polyline', svgElem);\r\nnew PolylineController(polyline)\r\n\t.moveTo(30, 5)\r\n\t.lineTo(40, 35)\r\n\t.lineTo(35, 35)\r\n\t.lineTo(80, 80)\r\n\t.lineTo(35, 80)\r\n\t.updateElement();\r\n\r\nconst polygon = createSVGElement('polygon', svgElem);\r\nnew PolygonController(polygon)\r\n\t.moveTo(150, 10)\r\n\t.lineTo(200, 40)\r\n\t.lineTo(250, 10)\r\n\t.lineTo(200, 100)\r\n\t.updateElement();\r\n\r\nconst circle = createSVGElement('circle', svgElem);\r\nnew CircleController(circle).moveTo(20, 180).setRadius(15).updateElement();\r\n\r\nconst ellipse = createSVGElement('ellipse', svgElem);\r\nnew EllipseController(ellipse).moveTo(50, 180).setRadius(30, 15).updateElement();\r\n\r\nconst rect = createSVGElement('rect', svgElem);\r\nnew RectController(rect).moveTo(250, 160).setDimensions(50, 30).updateElement();\r\n\r\nconst rect2 = createSVGElement('rect', svgElem);\r\nnew RectController(rect2)\r\n\t.moveTo(325, 140)\r\n\t.setDimensions(50, 50)\r\n\t.setCornerRadius(10, 20)\r\n\t.updateElement();\r\n\n\n//# sourceURL=webpack:///./example/src/index.js?");

/***/ })

/******/ });