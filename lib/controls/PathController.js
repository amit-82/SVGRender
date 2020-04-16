"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _PolylineController2 = _interopRequireDefault(require("./PolylineController"));

var _input_validations = require("../helpers/input_validations");

var _interfaces = require("./comps/interfaces");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PathController = /*#__PURE__*/function (_PolylineController) {
  _inherits(PathController, _PolylineController);

  var _super = _createSuper(PathController);

  function PathController(element) {
    var _this;

    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "path";

    _classCallCheck(this, PathController);

    _this = _super.call(this, element, type);

    _defineProperty(_assertThisInitialized(_this), "_instructions", void 0);

    _defineProperty(_assertThisInitialized(_this), "curve", function (ctrlX, ctrlY, ctrlX2, ctrlY2, endX, endY) {
      _this._instructions.push("C".concat(ctrlX, ",").concat(ctrlY, ",").concat(ctrlX2, ",").concat(ctrlY2, ",").concat(endX, ",").concat(endY));

      var coord = {
        type: _interfaces.CoordType.Curve,
        x: endX,
        y: endY,
        ctrlX: ctrlX,
        ctrlY: ctrlY,
        ctrlX2: ctrlX2,
        ctrlY2: ctrlY2
      };

      _this.appendCoord(coord);

      return _assertThisInitialized(_this);
    });

    _defineProperty(_assertThisInitialized(_this), "bezier", function (ctrlX, ctrlY, endX, endY) {
      _this._instructions.push("S".concat(ctrlX, ",").concat(ctrlY, ",").concat(endX, ",").concat(endY));

      var coord = {
        type: _interfaces.CoordType.Bezier,
        x: endX,
        y: endY,
        ctrlX: ctrlX,
        ctrlY: ctrlY
      };

      _this.appendCoord(coord);

      return _assertThisInitialized(_this);
    });

    _defineProperty(_assertThisInitialized(_this), "quadratic", function (ctrlX, ctrlY, endX, endY, mirrorX, mirrorY) {
      _this._instructions.push("Q".concat(ctrlX, ",").concat(ctrlY, ",").concat(endX, ",").concat(endY));

      if ((0, _input_validations.allValuesAssigned)(mirrorX, mirrorY)) {
        _this._instructions.push("T".concat(mirrorX, ",").concat(mirrorY));
      }

      var coord = {
        type: _interfaces.CoordType.Bezier,
        x: endX,
        y: endY,
        ctrlX: ctrlX,
        ctrlY: ctrlY,
        mirrorX: mirrorX,
        mirrorY: mirrorY
      };

      _this.appendCoord(coord);

      return _assertThisInitialized(_this);
    });

    _this._instructions = instructions;
    _this.element = element;
    return _this;
  }

  _createClass(PathController, [{
    key: "getInstructions",
    value: function getInstructions() {
      return _toConsumableArray(this._instructions);
    }
  }, {
    key: "getAttributesForElement",
    value: function getAttributesForElement() {
      console.log(">>>>>", "PATH!");
      return this.coordinatesParser.createElementAttrs(this.getCoordsRef(), this._instructions);
    }
  }, {
    key: "closePath",
    value: function closePath() {
      this._instructions.push("z");

      return this;
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this._instructions.push("M".concat(x, ",").concat(y));

      _get(_getPrototypeOf(PathController.prototype), "moveTo", this).call(this, x, y);

      return this;
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      this._instructions.push("L".concat(x, ",").concat(y));

      this.validateOrInsertFirstCoordZeroZero();

      _get(_getPrototypeOf(PathController.prototype), "lineTo", this).call(this, x, y);

      return this;
    }
  }]);

  return PathController;
}(_PolylineController2["default"]);

exports["default"] = PathController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9QYXRoQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJQYXRoQ29udHJvbGxlciIsImVsZW1lbnQiLCJpbnN0cnVjdGlvbnMiLCJ0eXBlIiwiY3RybFgiLCJjdHJsWSIsImN0cmxYMiIsImN0cmxZMiIsImVuZFgiLCJlbmRZIiwiX2luc3RydWN0aW9ucyIsInB1c2giLCJjb29yZCIsIkNvb3JkVHlwZSIsIkN1cnZlIiwieCIsInkiLCJhcHBlbmRDb29yZCIsIkJlemllciIsIm1pcnJvclgiLCJtaXJyb3JZIiwiY29uc29sZSIsImxvZyIsImNvb3JkaW5hdGVzUGFyc2VyIiwiY3JlYXRlRWxlbWVudEF0dHJzIiwiZ2V0Q29vcmRzUmVmIiwidmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybyIsIlBvbHlsaW5lQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9xQkEsYzs7Ozs7QUFHcEIsMEJBQ0NDLE9BREQsRUFJRTtBQUFBOztBQUFBLFFBRkRDLFlBRUMsdUVBRmdDLEVBRWhDO0FBQUEsUUFEREMsSUFDQyx1RUFEdUIsTUFDdkI7O0FBQUE7O0FBQ0QsOEJBQU1GLE9BQU4sRUFBZUUsSUFBZjs7QUFEQzs7QUFBQSw0REFvQ2EsVUFDZEMsS0FEYyxFQUVkQyxLQUZjLEVBR2RDLE1BSGMsRUFJZEMsTUFKYyxFQUtkQyxJQUxjLEVBTWRDLElBTmMsRUFPVjtBQUNKLFlBQUtDLGFBQUwsQ0FBbUJDLElBQW5CLFlBQ0tQLEtBREwsY0FDY0MsS0FEZCxjQUN1QkMsTUFEdkIsY0FDaUNDLE1BRGpDLGNBQzJDQyxJQUQzQyxjQUNtREMsSUFEbkQ7O0FBR0EsVUFBTUcsS0FBaUIsR0FBRztBQUN6QlQsUUFBQUEsSUFBSSxFQUFFVSxzQkFBVUMsS0FEUztBQUV6QkMsUUFBQUEsQ0FBQyxFQUFFUCxJQUZzQjtBQUd6QlEsUUFBQUEsQ0FBQyxFQUFFUCxJQUhzQjtBQUl6QkwsUUFBQUEsS0FBSyxFQUFMQSxLQUp5QjtBQUt6QkMsUUFBQUEsS0FBSyxFQUFMQSxLQUx5QjtBQU16QkMsUUFBQUEsTUFBTSxFQUFOQSxNQU55QjtBQU96QkMsUUFBQUEsTUFBTSxFQUFOQTtBQVB5QixPQUExQjs7QUFTQSxZQUFLVSxXQUFMLENBQWlCTCxLQUFqQjs7QUFDQTtBQUNBLEtBMURDOztBQUFBLDZEQTREYyxVQUNmUixLQURlLEVBRWZDLEtBRmUsRUFHZkcsSUFIZSxFQUlmQyxJQUplLEVBS1g7QUFDSixZQUFLQyxhQUFMLENBQW1CQyxJQUFuQixZQUE0QlAsS0FBNUIsY0FBcUNDLEtBQXJDLGNBQThDRyxJQUE5QyxjQUFzREMsSUFBdEQ7O0FBQ0EsVUFBTUcsS0FBa0IsR0FBRztBQUMxQlQsUUFBQUEsSUFBSSxFQUFFVSxzQkFBVUssTUFEVTtBQUUxQkgsUUFBQUEsQ0FBQyxFQUFFUCxJQUZ1QjtBQUcxQlEsUUFBQUEsQ0FBQyxFQUFFUCxJQUh1QjtBQUkxQkwsUUFBQUEsS0FBSyxFQUFMQSxLQUowQjtBQUsxQkMsUUFBQUEsS0FBSyxFQUFMQTtBQUwwQixPQUEzQjs7QUFPQSxZQUFLWSxXQUFMLENBQWlCTCxLQUFqQjs7QUFDQTtBQUNBLEtBNUVDOztBQUFBLGdFQThFaUIsVUFDbEJSLEtBRGtCLEVBRWxCQyxLQUZrQixFQUdsQkcsSUFIa0IsRUFJbEJDLElBSmtCLEVBS2xCVSxPQUxrQixFQU1sQkMsT0FOa0IsRUFPZDtBQUNKLFlBQUtWLGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCUCxLQUE1QixjQUFxQ0MsS0FBckMsY0FBOENHLElBQTlDLGNBQXNEQyxJQUF0RDs7QUFDQSxVQUFJLDBDQUFrQlUsT0FBbEIsRUFBMkJDLE9BQTNCLENBQUosRUFBeUM7QUFDeEMsY0FBS1YsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJRLE9BQTVCLGNBQXVDQyxPQUF2QztBQUNBOztBQUNELFVBQU1SLEtBQXFCLEdBQUc7QUFDN0JULFFBQUFBLElBQUksRUFBRVUsc0JBQVVLLE1BRGE7QUFFN0JILFFBQUFBLENBQUMsRUFBRVAsSUFGMEI7QUFHN0JRLFFBQUFBLENBQUMsRUFBRVAsSUFIMEI7QUFJN0JMLFFBQUFBLEtBQUssRUFBTEEsS0FKNkI7QUFLN0JDLFFBQUFBLEtBQUssRUFBTEEsS0FMNkI7QUFNN0JjLFFBQUFBLE9BQU8sRUFBUEEsT0FONkI7QUFPN0JDLFFBQUFBLE9BQU8sRUFBUEE7QUFQNkIsT0FBOUI7O0FBU0EsWUFBS0gsV0FBTCxDQUFpQkwsS0FBakI7O0FBRUE7QUFDQSxLQXRHQzs7QUFFRCxVQUFLRixhQUFMLEdBQXFCUixZQUFyQjtBQUNBLFVBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUhDO0FBSUQ7Ozs7c0NBRTBDO0FBQzFDLGdDQUFXLEtBQUtTLGFBQWhCO0FBQ0E7Ozs4Q0FFZ0M7QUFDaENXLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUIsT0FBckI7QUFDQSxhQUFPLEtBQUtDLGlCQUFMLENBQXVCQyxrQkFBdkIsQ0FDTixLQUFLQyxZQUFMLEVBRE0sRUFFTixLQUFLZixhQUZDLENBQVA7QUFJQTs7O2dDQUVrQjtBQUNsQixXQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixHQUF4Qjs7QUFDQSxhQUFPLElBQVA7QUFDQTs7OzJCQUVhSSxDLEVBQVdDLEMsRUFBVztBQUNuQyxXQUFLTixhQUFMLENBQW1CQyxJQUFuQixZQUE0QkksQ0FBNUIsY0FBaUNDLENBQWpDOztBQUNBLGlGQUFhRCxDQUFiLEVBQWdCQyxDQUFoQjs7QUFDQSxhQUFPLElBQVA7QUFDQTs7OzJCQUVhRCxDLEVBQVdDLEMsRUFBVztBQUNuQyxXQUFLTixhQUFMLENBQW1CQyxJQUFuQixZQUE0QkksQ0FBNUIsY0FBaUNDLENBQWpDOztBQUNBLFdBQUtVLGtDQUFMOztBQUNBLGlGQUFhWCxDQUFiLEVBQWdCQyxDQUFoQjs7QUFDQSxhQUFPLElBQVA7QUFDQTs7OztFQXpDMENXLCtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvbHlsaW5lQ29udHJvbGxlciBmcm9tIFwiLi9Qb2x5bGluZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgYWxsVmFsdWVzQXNzaWduZWQgfSBmcm9tIFwiLi4vaGVscGVycy9pbnB1dF92YWxpZGF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdENvb3JkVHlwZSxcclxuXHRDdXJ2ZUNvb3JkLFxyXG5cdEJlemllckNvb3JkLFxyXG5cdFF1YWRyYXRpY0Nvb3JkLFxyXG59IGZyb20gXCIuL2NvbXBzL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGhDb250cm9sbGVyIGV4dGVuZHMgUG9seWxpbmVDb250cm9sbGVyIHtcclxuXHRwcml2YXRlIF9pbnN0cnVjdGlvbnM6IHN0cmluZ09yTnVtYmVyW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0ZWxlbWVudD86IFNWR0VsZW1lbnQsXHJcblx0XHRpbnN0cnVjdGlvbnM6IHN0cmluZ09yTnVtYmVyW10gPSBbXSxcclxuXHRcdHR5cGU6IFNWR0VsZW1lbnRUeXBlcyA9IFwicGF0aFwiXHJcblx0KSB7XHJcblx0XHRzdXBlcihlbGVtZW50LCB0eXBlKTtcclxuXHRcdHRoaXMuX2luc3RydWN0aW9ucyA9IGluc3RydWN0aW9ucztcclxuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0SW5zdHJ1Y3Rpb25zKCk6IHN0cmluZ09yTnVtYmVyW10ge1xyXG5cdFx0cmV0dXJuIFsuLi50aGlzLl9pbnN0cnVjdGlvbnNdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEF0dHJpYnV0ZXNGb3JFbGVtZW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCI+Pj4+PlwiLCBcIlBBVEghXCIpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNQYXJzZXIuY3JlYXRlRWxlbWVudEF0dHJzKFxyXG5cdFx0XHR0aGlzLmdldENvb3Jkc1JlZigpLFxyXG5cdFx0XHR0aGlzLl9pbnN0cnVjdGlvbnNcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xvc2VQYXRoKCkge1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goXCJ6XCIpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgTSR7eH0sJHt5fWApO1xyXG5cdFx0c3VwZXIubW92ZVRvKHgsIHkpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGluZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgTCR7eH0sJHt5fWApO1xyXG5cdFx0dGhpcy52YWxpZGF0ZU9ySW5zZXJ0Rmlyc3RDb29yZFplcm9aZXJvKCk7XHJcblx0XHRzdXBlci5saW5lVG8oeCwgeSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjdXJ2ZSA9IChcclxuXHRcdGN0cmxYOiBudW1iZXIsXHJcblx0XHRjdHJsWTogbnVtYmVyLFxyXG5cdFx0Y3RybFgyOiBudW1iZXIsXHJcblx0XHRjdHJsWTI6IG51bWJlcixcclxuXHRcdGVuZFg6IG51bWJlcixcclxuXHRcdGVuZFk6IG51bWJlclxyXG5cdCkgPT4ge1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goXHJcblx0XHRcdGBDJHtjdHJsWH0sJHtjdHJsWX0sJHtjdHJsWDJ9LCR7Y3RybFkyfSwke2VuZFh9LCR7ZW5kWX1gXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgY29vcmQ6IEN1cnZlQ29vcmQgPSB7XHJcblx0XHRcdHR5cGU6IENvb3JkVHlwZS5DdXJ2ZSxcclxuXHRcdFx0eDogZW5kWCxcclxuXHRcdFx0eTogZW5kWSxcclxuXHRcdFx0Y3RybFgsXHJcblx0XHRcdGN0cmxZLFxyXG5cdFx0XHRjdHJsWDIsXHJcblx0XHRcdGN0cmxZMixcclxuXHRcdH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBiZXppZXIgPSAoXHJcblx0XHRjdHJsWDogbnVtYmVyLFxyXG5cdFx0Y3RybFk6IG51bWJlcixcclxuXHRcdGVuZFg6IG51bWJlcixcclxuXHRcdGVuZFk6IG51bWJlclxyXG5cdCkgPT4ge1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYFMke2N0cmxYfSwke2N0cmxZfSwke2VuZFh9LCR7ZW5kWX1gKTtcclxuXHRcdGNvbnN0IGNvb3JkOiBCZXppZXJDb29yZCA9IHtcclxuXHRcdFx0dHlwZTogQ29vcmRUeXBlLkJlemllcixcclxuXHRcdFx0eDogZW5kWCxcclxuXHRcdFx0eTogZW5kWSxcclxuXHRcdFx0Y3RybFgsXHJcblx0XHRcdGN0cmxZLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuYXBwZW5kQ29vcmQoY29vcmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHF1YWRyYXRpYyA9IChcclxuXHRcdGN0cmxYOiBudW1iZXIsXHJcblx0XHRjdHJsWTogbnVtYmVyLFxyXG5cdFx0ZW5kWDogbnVtYmVyLFxyXG5cdFx0ZW5kWTogbnVtYmVyLFxyXG5cdFx0bWlycm9yWD86IG51bWJlcixcclxuXHRcdG1pcnJvclk/OiBudW1iZXJcclxuXHQpID0+IHtcclxuXHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBRJHtjdHJsWH0sJHtjdHJsWX0sJHtlbmRYfSwke2VuZFl9YCk7XHJcblx0XHRpZiAoYWxsVmFsdWVzQXNzaWduZWQobWlycm9yWCwgbWlycm9yWSkpIHtcclxuXHRcdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYFQke21pcnJvclh9LCR7bWlycm9yWX1gKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvb3JkOiBRdWFkcmF0aWNDb29yZCA9IHtcclxuXHRcdFx0dHlwZTogQ29vcmRUeXBlLkJlemllcixcclxuXHRcdFx0eDogZW5kWCxcclxuXHRcdFx0eTogZW5kWSxcclxuXHRcdFx0Y3RybFgsXHJcblx0XHRcdGN0cmxZLFxyXG5cdFx0XHRtaXJyb3JYLFxyXG5cdFx0XHRtaXJyb3JZLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuYXBwZW5kQ29vcmQoY29vcmQpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn1cclxuIl19