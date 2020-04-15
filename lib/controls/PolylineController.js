"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interfaces = require("./comps/interfaces");

var _SVGElementController2 = _interopRequireDefault(require("./comps/SVGElementController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var PolylineController = /*#__PURE__*/function (_SVGElementController) {
  _inherits(PolylineController, _SVGElementController);

  var _super = _createSuper(PolylineController);

  function PolylineController() {
    _classCallCheck(this, PolylineController);

    return _super.apply(this, arguments);
  }

  _createClass(PolylineController, [{
    key: "moveTo",
    value: function moveTo(x, y) {
      var coord = {
        type: _interfaces.CoordType.Linear,
        x: x,
        y: y
      };
      this.appendCoord(coord, true);
      return this;
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      var coord = {
        type: _interfaces.CoordType.Linear,
        x: x,
        y: y
      };
      this.appendCoord(coord);
      return this;
    }
  }, {
    key: "updateElement",
    value: function updateElement() {
      this.element && this.element.setAttribute("points", this.getCoordsRef().join(","));
    }
  }]);

  return PolylineController;
}(_SVGElementController2["default"]);

exports["default"] = PolylineController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Qb2x5bGluZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiUG9seWxpbmVDb250cm9sbGVyIiwieCIsInkiLCJjb29yZCIsInR5cGUiLCJDb29yZFR5cGUiLCJMaW5lYXIiLCJhcHBlbmRDb29yZCIsImVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRDb29yZHNSZWYiLCJqb2luIiwiU1ZHRWxlbWVudENvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7OzJCQUNOQyxDLEVBQVdDLEMsRUFBVztBQUNuQyxVQUFNQyxLQUFZLEdBQUc7QUFBRUMsUUFBQUEsSUFBSSxFQUFFQyxzQkFBVUMsTUFBbEI7QUFBMEJMLFFBQUFBLENBQUMsRUFBREEsQ0FBMUI7QUFBNkJDLFFBQUFBLENBQUMsRUFBREE7QUFBN0IsT0FBckI7QUFDQSxXQUFLSyxXQUFMLENBQWlCSixLQUFqQixFQUF3QixJQUF4QjtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7MkJBRWFGLEMsRUFBV0MsQyxFQUFXO0FBQ25DLFVBQU1DLEtBQVksR0FBRztBQUFFQyxRQUFBQSxJQUFJLEVBQUVDLHNCQUFVQyxNQUFsQjtBQUEwQkwsUUFBQUEsQ0FBQyxFQUFEQSxDQUExQjtBQUE2QkMsUUFBQUEsQ0FBQyxFQUFEQTtBQUE3QixPQUFyQjtBQUNBLFdBQUtLLFdBQUwsQ0FBaUJKLEtBQWpCO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7OztvQ0FFc0I7QUFDdEIsV0FBS0ssT0FBTCxJQUNDLEtBQUtBLE9BQUwsQ0FBYUMsWUFBYixDQUEwQixRQUExQixFQUFvQyxLQUFLQyxZQUFMLEdBQW9CQyxJQUFwQixDQUF5QixHQUF6QixDQUFwQyxDQUREO0FBRUE7Ozs7RUFoQjhDQyxpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb3JkLCBDb29yZFR5cGUgfSBmcm9tIFwiLi9jb21wcy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBTVkdFbGVtZW50Q29udHJvbGxlciBmcm9tIFwiLi9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmVDb250cm9sbGVyIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXIge1xyXG5cdHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvb3JkOiBDb29yZCA9IHsgdHlwZTogQ29vcmRUeXBlLkxpbmVhciwgeCwgeSB9O1xyXG5cdFx0dGhpcy5hcHBlbmRDb29yZChjb29yZCwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsaW5lVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvb3JkOiBDb29yZCA9IHsgdHlwZTogQ29vcmRUeXBlLkxpbmVhciwgeCwgeSB9O1xyXG5cdFx0dGhpcy5hcHBlbmRDb29yZChjb29yZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVFbGVtZW50KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50ICYmXHJcblx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdGhpcy5nZXRDb29yZHNSZWYoKS5qb2luKFwiLFwiKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==