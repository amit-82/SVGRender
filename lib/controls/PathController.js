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

    _classCallCheck(this, PathController);

    _this = _super.call(this, element);

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
    key: "updateElement",
    value: function updateElement() {
      this.element && this.element.setAttribute("d", this._instructions.join(" "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9QYXRoQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJQYXRoQ29udHJvbGxlciIsImVsZW1lbnQiLCJpbnN0cnVjdGlvbnMiLCJjdHJsWCIsImN0cmxZIiwiY3RybFgyIiwiY3RybFkyIiwiZW5kWCIsImVuZFkiLCJfaW5zdHJ1Y3Rpb25zIiwicHVzaCIsImNvb3JkIiwidHlwZSIsIkNvb3JkVHlwZSIsIkN1cnZlIiwieCIsInkiLCJhcHBlbmRDb29yZCIsIkJlemllciIsIm1pcnJvclgiLCJtaXJyb3JZIiwic2V0QXR0cmlidXRlIiwiam9pbiIsInZhbGlkYXRlT3JJbnNlcnRGaXJzdENvb3JkWmVyb1plcm8iLCJQb2x5bGluZUNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPcUJBLGM7Ozs7O0FBR3BCLDBCQUFZQyxPQUFaLEVBQXVFO0FBQUE7O0FBQUEsUUFBckNDLFlBQXFDLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3RFLDhCQUFNRCxPQUFOOztBQURzRTs7QUFBQSw0REFpQ3hELFVBQ2RFLEtBRGMsRUFFZEMsS0FGYyxFQUdkQyxNQUhjLEVBSWRDLE1BSmMsRUFLZEMsSUFMYyxFQU1kQyxJQU5jLEVBT1Y7QUFDSixZQUFLQyxhQUFMLENBQW1CQyxJQUFuQixZQUNLUCxLQURMLGNBQ2NDLEtBRGQsY0FDdUJDLE1BRHZCLGNBQ2lDQyxNQURqQyxjQUMyQ0MsSUFEM0MsY0FDbURDLElBRG5EOztBQUdBLFVBQU1HLEtBQWlCLEdBQUc7QUFDekJDLFFBQUFBLElBQUksRUFBRUMsc0JBQVVDLEtBRFM7QUFFekJDLFFBQUFBLENBQUMsRUFBRVIsSUFGc0I7QUFHekJTLFFBQUFBLENBQUMsRUFBRVIsSUFIc0I7QUFJekJMLFFBQUFBLEtBQUssRUFBTEEsS0FKeUI7QUFLekJDLFFBQUFBLEtBQUssRUFBTEEsS0FMeUI7QUFNekJDLFFBQUFBLE1BQU0sRUFBTkEsTUFOeUI7QUFPekJDLFFBQUFBLE1BQU0sRUFBTkE7QUFQeUIsT0FBMUI7O0FBU0EsWUFBS1csV0FBTCxDQUFpQk4sS0FBakI7O0FBQ0E7QUFDQSxLQXZEc0U7O0FBQUEsNkRBeUR2RCxVQUNmUixLQURlLEVBRWZDLEtBRmUsRUFHZkcsSUFIZSxFQUlmQyxJQUplLEVBS1g7QUFDSixZQUFLQyxhQUFMLENBQW1CQyxJQUFuQixZQUE0QlAsS0FBNUIsY0FBcUNDLEtBQXJDLGNBQThDRyxJQUE5QyxjQUFzREMsSUFBdEQ7O0FBQ0EsVUFBTUcsS0FBa0IsR0FBRztBQUMxQkMsUUFBQUEsSUFBSSxFQUFFQyxzQkFBVUssTUFEVTtBQUUxQkgsUUFBQUEsQ0FBQyxFQUFFUixJQUZ1QjtBQUcxQlMsUUFBQUEsQ0FBQyxFQUFFUixJQUh1QjtBQUkxQkwsUUFBQUEsS0FBSyxFQUFMQSxLQUowQjtBQUsxQkMsUUFBQUEsS0FBSyxFQUFMQTtBQUwwQixPQUEzQjs7QUFPQSxZQUFLYSxXQUFMLENBQWlCTixLQUFqQjs7QUFDQTtBQUNBLEtBekVzRTs7QUFBQSxnRUEyRXBELFVBQ2xCUixLQURrQixFQUVsQkMsS0FGa0IsRUFHbEJHLElBSGtCLEVBSWxCQyxJQUprQixFQUtsQlcsT0FMa0IsRUFNbEJDLE9BTmtCLEVBT2Q7QUFDSixZQUFLWCxhQUFMLENBQW1CQyxJQUFuQixZQUE0QlAsS0FBNUIsY0FBcUNDLEtBQXJDLGNBQThDRyxJQUE5QyxjQUFzREMsSUFBdEQ7O0FBQ0EsVUFBSSwwQ0FBa0JXLE9BQWxCLEVBQTJCQyxPQUEzQixDQUFKLEVBQXlDO0FBQ3hDLGNBQUtYLGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCUyxPQUE1QixjQUF1Q0MsT0FBdkM7QUFDQTs7QUFDRCxVQUFNVCxLQUFxQixHQUFHO0FBQzdCQyxRQUFBQSxJQUFJLEVBQUVDLHNCQUFVSyxNQURhO0FBRTdCSCxRQUFBQSxDQUFDLEVBQUVSLElBRjBCO0FBRzdCUyxRQUFBQSxDQUFDLEVBQUVSLElBSDBCO0FBSTdCTCxRQUFBQSxLQUFLLEVBQUxBLEtBSjZCO0FBSzdCQyxRQUFBQSxLQUFLLEVBQUxBLEtBTDZCO0FBTTdCZSxRQUFBQSxPQUFPLEVBQVBBLE9BTjZCO0FBTzdCQyxRQUFBQSxPQUFPLEVBQVBBO0FBUDZCLE9BQTlCOztBQVNBLFlBQUtILFdBQUwsQ0FBaUJOLEtBQWpCOztBQUVBO0FBQ0EsS0FuR3NFOztBQUV0RSxVQUFLRixhQUFMLEdBQXFCUCxZQUFyQjtBQUNBLFVBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUhzRTtBQUl0RTs7OztzQ0FFMEM7QUFDMUMsZ0NBQVcsS0FBS1EsYUFBaEI7QUFDQTs7O29DQUVzQjtBQUN0QixXQUFLUixPQUFMLElBQ0MsS0FBS0EsT0FBTCxDQUFhb0IsWUFBYixDQUEwQixHQUExQixFQUErQixLQUFLWixhQUFMLENBQW1CYSxJQUFuQixDQUF3QixHQUF4QixDQUEvQixDQUREO0FBRUE7OztnQ0FFa0I7QUFDbEIsV0FBS2IsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0E7OzsyQkFFYUssQyxFQUFXQyxDLEVBQVc7QUFDbkMsV0FBS1AsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJLLENBQTVCLGNBQWlDQyxDQUFqQzs7QUFDQSxpRkFBYUQsQ0FBYixFQUFnQkMsQ0FBaEI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0E7OzsyQkFFYUQsQyxFQUFXQyxDLEVBQVc7QUFDbkMsV0FBS1AsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJLLENBQTVCLGNBQWlDQyxDQUFqQzs7QUFDQSxXQUFLTyxrQ0FBTDs7QUFDQSxpRkFBYVIsQ0FBYixFQUFnQkMsQ0FBaEI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0E7Ozs7RUFsQzBDUSwrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2x5bGluZUNvbnRyb2xsZXIgZnJvbSBcIi4vUG9seWxpbmVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGFsbFZhbHVlc0Fzc2lnbmVkIH0gZnJvbSBcIi4uL2hlbHBlcnMvaW5wdXRfdmFsaWRhdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRDb29yZFR5cGUsXHJcblx0Q3VydmVDb29yZCxcclxuXHRCZXppZXJDb29yZCxcclxuXHRRdWFkcmF0aWNDb29yZCxcclxufSBmcm9tIFwiLi9jb21wcy9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoQ29udHJvbGxlciBleHRlbmRzIFBvbHlsaW5lQ29udHJvbGxlciB7XHJcblx0cHJpdmF0ZSBfaW5zdHJ1Y3Rpb25zOiBzdHJpbmdPck51bWJlcltdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50PzogU1ZHRWxlbWVudCwgaW5zdHJ1Y3Rpb25zOiBzdHJpbmdPck51bWJlcltdID0gW10pIHtcclxuXHRcdHN1cGVyKGVsZW1lbnQpO1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25zO1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRJbnN0cnVjdGlvbnMoKTogc3RyaW5nT3JOdW1iZXJbXSB7XHJcblx0XHRyZXR1cm4gWy4uLnRoaXMuX2luc3RydWN0aW9uc107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlRWxlbWVudCgpIHtcclxuXHRcdHRoaXMuZWxlbWVudCAmJlxyXG5cdFx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZFwiLCB0aGlzLl9pbnN0cnVjdGlvbnMuam9pbihcIiBcIikpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlUGF0aCgpIHtcclxuXHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFwielwiKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYE0ke3h9LCR7eX1gKTtcclxuXHRcdHN1cGVyLm1vdmVUbyh4LCB5KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxpbmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYEwke3h9LCR7eX1gKTtcclxuXHRcdHRoaXMudmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybygpO1xyXG5cdFx0c3VwZXIubGluZVRvKHgsIHkpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY3VydmUgPSAoXHJcblx0XHRjdHJsWDogbnVtYmVyLFxyXG5cdFx0Y3RybFk6IG51bWJlcixcclxuXHRcdGN0cmxYMjogbnVtYmVyLFxyXG5cdFx0Y3RybFkyOiBudW1iZXIsXHJcblx0XHRlbmRYOiBudW1iZXIsXHJcblx0XHRlbmRZOiBudW1iZXJcclxuXHQpID0+IHtcclxuXHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFxyXG5cdFx0XHRgQyR7Y3RybFh9LCR7Y3RybFl9LCR7Y3RybFgyfSwke2N0cmxZMn0sJHtlbmRYfSwke2VuZFl9YFxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IGNvb3JkOiBDdXJ2ZUNvb3JkID0ge1xyXG5cdFx0XHR0eXBlOiBDb29yZFR5cGUuQ3VydmUsXHJcblx0XHRcdHg6IGVuZFgsXHJcblx0XHRcdHk6IGVuZFksXHJcblx0XHRcdGN0cmxYLFxyXG5cdFx0XHRjdHJsWSxcclxuXHRcdFx0Y3RybFgyLFxyXG5cdFx0XHRjdHJsWTIsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5hcHBlbmRDb29yZChjb29yZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgYmV6aWVyID0gKFxyXG5cdFx0Y3RybFg6IG51bWJlcixcclxuXHRcdGN0cmxZOiBudW1iZXIsXHJcblx0XHRlbmRYOiBudW1iZXIsXHJcblx0XHRlbmRZOiBudW1iZXJcclxuXHQpID0+IHtcclxuXHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBTJHtjdHJsWH0sJHtjdHJsWX0sJHtlbmRYfSwke2VuZFl9YCk7XHJcblx0XHRjb25zdCBjb29yZDogQmV6aWVyQ29vcmQgPSB7XHJcblx0XHRcdHR5cGU6IENvb3JkVHlwZS5CZXppZXIsXHJcblx0XHRcdHg6IGVuZFgsXHJcblx0XHRcdHk6IGVuZFksXHJcblx0XHRcdGN0cmxYLFxyXG5cdFx0XHRjdHJsWSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBxdWFkcmF0aWMgPSAoXHJcblx0XHRjdHJsWDogbnVtYmVyLFxyXG5cdFx0Y3RybFk6IG51bWJlcixcclxuXHRcdGVuZFg6IG51bWJlcixcclxuXHRcdGVuZFk6IG51bWJlcixcclxuXHRcdG1pcnJvclg/OiBudW1iZXIsXHJcblx0XHRtaXJyb3JZPzogbnVtYmVyXHJcblx0KSA9PiB7XHJcblx0XHR0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgUSR7Y3RybFh9LCR7Y3RybFl9LCR7ZW5kWH0sJHtlbmRZfWApO1xyXG5cdFx0aWYgKGFsbFZhbHVlc0Fzc2lnbmVkKG1pcnJvclgsIG1pcnJvclkpKSB7XHJcblx0XHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBUJHttaXJyb3JYfSwke21pcnJvcll9YCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb29yZDogUXVhZHJhdGljQ29vcmQgPSB7XHJcblx0XHRcdHR5cGU6IENvb3JkVHlwZS5CZXppZXIsXHJcblx0XHRcdHg6IGVuZFgsXHJcblx0XHRcdHk6IGVuZFksXHJcblx0XHRcdGN0cmxYLFxyXG5cdFx0XHRjdHJsWSxcclxuXHRcdFx0bWlycm9yWCxcclxuXHRcdFx0bWlycm9yWSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59XHJcbiJdfQ==