"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _PolylineController2 = _interopRequireDefault(require("./PolylineController"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PathController = /*#__PURE__*/function (_PolylineController) {
  _inherits(PathController, _PolylineController);

  var _super = _createSuper(PathController);

  function PathController() {
    var _this;

    _classCallCheck(this, PathController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_instructions", void 0);

    _defineProperty(_assertThisInitialized(_this), "curve", void 0);

    _defineProperty(_assertThisInitialized(_this), "bezier", void 0);

    _defineProperty(_assertThisInitialized(_this), "quadratic", void 0);

    return _this;
  }

  return PathController;
}(_PolylineController2["default"]);

exports["default"] = PathController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9QYXRoQ29udHJvbGxlci5kLnRzIl0sIm5hbWVzIjpbIlBhdGhDb250cm9sbGVyIiwiUG9seWxpbmVDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNxQkEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUF1QkMsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9seWxpbmVDb250cm9sbGVyIGZyb20gXCIuL1BvbHlsaW5lQ29udHJvbGxlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoQ29udHJvbGxlciBleHRlbmRzIFBvbHlsaW5lQ29udHJvbGxlciB7XHJcbiAgICBwcml2YXRlIF9pbnN0cnVjdGlvbnM7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50PzogU1ZHRWxlbWVudCwgaW5zdHJ1Y3Rpb25zPzogc3RyaW5nT3JOdW1iZXJbXSk7XHJcbiAgICBnZXRJbnN0cnVjdGlvbnMoKTogc3RyaW5nT3JOdW1iZXJbXTtcclxuICAgIHVwZGF0ZUVsZW1lbnQoKTogdm9pZDtcclxuICAgIGNsb3NlUGF0aCgpOiB0aGlzO1xyXG4gICAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcztcclxuICAgIGxpbmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXM7XHJcbiAgICBjdXJ2ZTogKGN0cmxYOiBudW1iZXIsIGN0cmxZOiBudW1iZXIsIGN0cmxYMjogbnVtYmVyLCBjdHJsWTI6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIpID0+IHRoaXM7XHJcbiAgICBiZXppZXI6IChjdHJsWDogbnVtYmVyLCBjdHJsWTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcikgPT4gdGhpcztcclxuICAgIHF1YWRyYXRpYzogKGN0cmxYOiBudW1iZXIsIGN0cmxZOiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyLCBtaXJyb3JYPzogbnVtYmVyIHwgdW5kZWZpbmVkLCBtaXJyb3JZPzogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB0aGlzO1xyXG59XHJcbiJdfQ==