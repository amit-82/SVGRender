"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _input_validations = require("../helpers/input_validations");

var _SVGElementController2 = _interopRequireDefault(require("./comps/SVGElementController"));

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PathController = /*#__PURE__*/function (_SVGElementController) {
  _inherits(PathController, _SVGElementController);

  var _super = _createSuper(PathController);

  function PathController(element) {
    var _this;

    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, PathController);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    _defineProperty(_assertThisInitialized(_this), "_instructions", void 0);

    _defineProperty(_assertThisInitialized(_this), "closePath", function () {
      _this._instructions.push("z");

      return _assertThisInitialized(_this);
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (x, y) {
      _this._instructions.push("M".concat(x, ",").concat(y));

      var coord = {
        type: _interfaces.CoordType.Linear,
        x: x,
        y: y
      };

      _this.appendCoord(coord, true);

      return _assertThisInitialized(_this);
    });

    _defineProperty(_assertThisInitialized(_this), "lineTo", function (x, y) {
      _this._instructions.push("L".concat(x, ",").concat(y));

      _this.validateOrInsertFirstCoordZeroZero();

      var coord = {
        type: _interfaces.CoordType.Linear,
        x: x,
        y: y
      };

      _this.appendCoord(coord);

      return _assertThisInitialized(_this);
    });

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
  }]);

  return PathController;
}(_SVGElementController2["default"]);

exports["default"] = PathController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9QYXRoQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJQYXRoQ29udHJvbGxlciIsImVsZW1lbnQiLCJpbnN0cnVjdGlvbnMiLCJfaW5zdHJ1Y3Rpb25zIiwicHVzaCIsIngiLCJ5IiwiY29vcmQiLCJ0eXBlIiwiQ29vcmRUeXBlIiwiTGluZWFyIiwiYXBwZW5kQ29vcmQiLCJ2YWxpZGF0ZU9ySW5zZXJ0Rmlyc3RDb29yZFplcm9aZXJvIiwiY3RybFgiLCJjdHJsWSIsImN0cmxYMiIsImN0cmxZMiIsImVuZFgiLCJlbmRZIiwiQ3VydmUiLCJCZXppZXIiLCJtaXJyb3JYIiwibWlycm9yWSIsInNldEF0dHJpYnV0ZSIsImpvaW4iLCJTVkdFbGVtZW50Q29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUXFCQSxjOzs7OztBQUlwQiwwQkFBWUMsT0FBWixFQUEyRTtBQUFBOztBQUFBLFFBQXJDQyxZQUFxQyx1RUFBSixFQUFJOztBQUFBOztBQUMxRTs7QUFEMEU7O0FBQUE7O0FBQUEsZ0VBZXhELFlBQU07QUFDeEIsWUFBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7O0FBQ0E7QUFDQSxLQWxCMEU7O0FBQUEsNkRBb0IzRCxVQUFDQyxDQUFELEVBQVlDLENBQVosRUFBMEI7QUFDekMsWUFBS0gsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJDLENBQTVCLGNBQWlDQyxDQUFqQzs7QUFDQSxVQUFNQyxLQUFZLEdBQUc7QUFBRUMsUUFBQUEsSUFBSSxFQUFFQyxzQkFBVUMsTUFBbEI7QUFBMEJMLFFBQUFBLENBQUMsRUFBREEsQ0FBMUI7QUFBNkJDLFFBQUFBLENBQUMsRUFBREE7QUFBN0IsT0FBckI7O0FBQ0EsWUFBS0ssV0FBTCxDQUFpQkosS0FBakIsRUFBd0IsSUFBeEI7O0FBQ0E7QUFDQSxLQXpCMEU7O0FB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c0NBRTBDO0FBQzFDLGdDQUFXLEtBQUtFLGFBQWhCO0FBQ0E7OztvQ0FFc0I7QUFDdEIsV0FBS0YsT0FBTCxJQUNDLEtBQUtBLE9BQUwsQ0FBYXNCLFlBQWIsQ0FBMEIsR0FBMUIsRUFBK0IsS0FBS3BCLGFBQUwsQ0FBbUJxQixJQUFuQixDQUF3QixHQUF4QixDQUEvQixDQUREO0FBRUE7Ozs7RUFqQjBDQyxpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFZhbHVlc0Fzc2lnbmVkIH0gZnJvbSBcIi4uL2hlbHBlcnMvaW5wdXRfdmFsaWRhdGlvbnNcIjtcclxuaW1wb3J0IFNWR0VsZW1lbnRDb250cm9sbGVyIGZyb20gXCIuL2NvbXBzL1NWR0VsZW1lbnRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7XHJcblx0Q29vcmQsXHJcblx0Q29vcmRUeXBlLFxyXG5cdEN1cnZlQ29vcmQsXHJcblx0QmV6aWVyQ29vcmQsXHJcblx0UXVhZHJhdGljQ29vcmQsXHJcbn0gZnJvbSBcIi4vY29tcHMvaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aENvbnRyb2xsZXIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlciB7XHJcblx0cHJpdmF0ZSBlbGVtZW50OiBTVkdQYXRoRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuXHRwcml2YXRlIF9pbnN0cnVjdGlvbnM6IHN0cmluZ09yTnVtYmVyW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQ/OiBTVkdQYXRoRWxlbWVudCwgaW5zdHJ1Y3Rpb25zOiBzdHJpbmdPck51bWJlcltdID0gW10pIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9pbnN0cnVjdGlvbnMgPSBpbnN0cnVjdGlvbnM7XHJcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEluc3RydWN0aW9ucygpOiBzdHJpbmdPck51bWJlcltdIHtcclxuXHRcdHJldHVybiBbLi4udGhpcy5faW5zdHJ1Y3Rpb25zXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVFbGVtZW50KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50ICYmXHJcblx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkXCIsIHRoaXMuX2luc3RydWN0aW9ucy5qb2luKFwiIFwiKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xvc2VQYXRoID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goXCJ6XCIpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0cHVibGljIG1vdmVUbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xyXG5cdFx0dGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYE0ke3h9LCR7eX1gKTtcclxuXHRcdGNvbnN0IGNvb3JkOiBDb29yZCA9IHsgdHlwZTogQ29vcmRUeXBlLkxpbmVhciwgeCwgeSB9O1xyXG5cdFx0dGhpcy5hcHBlbmRDb29yZChjb29yZCwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgbGluZVRvID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XHJcblx0XHR0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgTCR7eH0sJHt5fWApO1xyXG5cclxuXHRcdHRoaXMudmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybygpO1xyXG5cdFx0Y29uc3QgY29vcmQ6IENvb3JkID0geyB0eXBlOiBDb29yZFR5cGUuTGluZWFyLCB4LCB5IH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgY3VydmUgPSAoXHJcblx0XHRjdHJsWDogbnVtYmVyLFxyXG5cdFx0Y3RybFk6IG51bWJlcixcclxuXHRcdGN0cmxYMjogbnVtYmVyLFxyXG5cdFx0Y3RybFkyOiBudW1iZXIsXHJcblx0XHRlbmRYOiBudW1iZXIsXHJcblx0XHRlbmRZOiBudW1iZXJcclxuXHQpID0+IHtcclxuXHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFxyXG5cdFx0XHRgQyR7Y3RybFh9LCR7Y3RybFl9LCR7Y3RybFgyfSwke2N0cmxZMn0sJHtlbmRYfSwke2VuZFl9YFxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IGNvb3JkOiBDdXJ2ZUNvb3JkID0ge1xyXG5cdFx0XHR0eXBlOiBDb29yZFR5cGUuQ3VydmUsXHJcblx0XHRcdHg6IGVuZFgsXHJcblx0XHRcdHk6IGVuZFksXHJcblx0XHRcdGN0cmxYLFxyXG5cdFx0XHRjdHJsWSxcclxuXHRcdFx0Y3RybFgyLFxyXG5cdFx0XHRjdHJsWTIsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5hcHBlbmRDb29yZChjb29yZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgYmV6aWVyID0gKFxyXG5cdFx0Y3RybFg6IG51bWJlcixcclxuXHRcdGN0cmxZOiBudW1iZXIsXHJcblx0XHRlbmRYOiBudW1iZXIsXHJcblx0XHRlbmRZOiBudW1iZXJcclxuXHQpID0+IHtcclxuXHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBTJHtjdHJsWH0sJHtjdHJsWX0sJHtlbmRYfSwke2VuZFl9YCk7XHJcblx0XHRjb25zdCBjb29yZDogQmV6aWVyQ29vcmQgPSB7XHJcblx0XHRcdHR5cGU6IENvb3JkVHlwZS5CZXppZXIsXHJcblx0XHRcdHg6IGVuZFgsXHJcblx0XHRcdHk6IGVuZFksXHJcblx0XHRcdGN0cmxYLFxyXG5cdFx0XHRjdHJsWSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBxdWFkcmF0aWMgPSAoXHJcblx0XHRjdHJsWDogbnVtYmVyLFxyXG5cdFx0Y3RybFk6IG51bWJlcixcclxuXHRcdGVuZFg6IG51bWJlcixcclxuXHRcdGVuZFk6IG51bWJlcixcclxuXHRcdG1pcnJvclg/OiBudW1iZXIsXHJcblx0XHRtaXJyb3JZPzogbnVtYmVyXHJcblx0KSA9PiB7XHJcblx0XHR0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgUSR7Y3RybFh9LCR7Y3RybFl9LCR7ZW5kWH0sJHtlbmRZfWApO1xyXG5cdFx0aWYgKGFsbFZhbHVlc0Fzc2lnbmVkKG1pcnJvclgsIG1pcnJvclkpKSB7XHJcblx0XHRcdHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBUJHttaXJyb3JYfSwke21pcnJvcll9YCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb29yZDogUXVhZHJhdGljQ29vcmQgPSB7XHJcblx0XHRcdHR5cGU6IENvb3JkVHlwZS5CZXppZXIsXHJcblx0XHRcdHg6IGVuZFgsXHJcblx0XHRcdHk6IGVuZFksXHJcblx0XHRcdGN0cmxYLFxyXG5cdFx0XHRjdHJsWSxcclxuXHRcdFx0bWlycm9yWCxcclxuXHRcdFx0bWlycm9yWSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59XHJcbiJdfQ==