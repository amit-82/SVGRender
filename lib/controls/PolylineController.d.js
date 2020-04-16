"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SVGElementController2 = _interopRequireDefault(require("./comps/SVGElementController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

  return PolylineController;
}(_SVGElementController2["default"]);

exports["default"] = PolylineController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Qb2x5bGluZUNvbnRyb2xsZXIuZC50cyJdLCJuYW1lcyI6WyJQb2x5bGluZUNvbnRyb2xsZXIiLCJTVkdFbGVtZW50Q29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxrQjs7Ozs7Ozs7Ozs7O0VBQTJCQyxpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTVkdFbGVtZW50Q29udHJvbGxlciBmcm9tIFwiLi9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZUNvbnRyb2xsZXIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlciB7XHJcbiAgICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzO1xyXG4gICAgbGluZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcztcclxuICAgIHVwZGF0ZUVsZW1lbnQoKTogdm9pZDtcclxufVxyXG4iXX0=