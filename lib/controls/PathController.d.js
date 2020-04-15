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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PathController = /*#__PURE__*/function (_SVGElementController) {
  _inherits(PathController, _SVGElementController);

  var _super = _createSuper(PathController);

  function PathController() {
    var _this;

    _classCallCheck(this, PathController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    _defineProperty(_assertThisInitialized(_this), "_instructions", void 0);

    _defineProperty(_assertThisInitialized(_this), "closePath", void 0);

    _defineProperty(_assertThisInitialized(_this), "moveTo", void 0);

    _defineProperty(_assertThisInitialized(_this), "lineTo", void 0);

    _defineProperty(_assertThisInitialized(_this), "curve", void 0);

    _defineProperty(_assertThisInitialized(_this), "bezier", void 0);

    _defineProperty(_assertThisInitialized(_this), "quadratic", void 0);

    return _this;
  }

  return PathController;
}(_SVGElementController2["default"]);

exports["default"] = PathController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9QYXRoQ29udHJvbGxlci5kLnRzIl0sIm5hbWVzIjpbIlBhdGhDb250cm9sbGVyIiwiU1ZHRWxlbWVudENvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBdUJDLGlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNWR0VsZW1lbnRDb250cm9sbGVyIGZyb20gXCIuL2NvbXBzL1NWR0VsZW1lbnRDb250cm9sbGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGhDb250cm9sbGVyIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfaW5zdHJ1Y3Rpb25zO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudD86IFNWR1BhdGhFbGVtZW50LCBpbnN0cnVjdGlvbnM/OiBzdHJpbmdPck51bWJlcltdKTtcclxuICAgIGdldEluc3RydWN0aW9ucygpOiBzdHJpbmdPck51bWJlcltdO1xyXG4gICAgdXBkYXRlRWxlbWVudCgpOiB2b2lkO1xyXG4gICAgY2xvc2VQYXRoOiAoKSA9PiB0aGlzO1xyXG4gICAgbW92ZVRvOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHRoaXM7XHJcbiAgICBsaW5lVG86ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdGhpcztcclxuICAgIGN1cnZlOiAoY3RybFg6IG51bWJlciwgY3RybFk6IG51bWJlciwgY3RybFgyOiBudW1iZXIsIGN0cmxZMjogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcikgPT4gdGhpcztcclxuICAgIGJlemllcjogKGN0cmxYOiBudW1iZXIsIGN0cmxZOiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyKSA9PiB0aGlzO1xyXG4gICAgcXVhZHJhdGljOiAoY3RybFg6IG51bWJlciwgY3RybFk6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIsIG1pcnJvclg/OiBudW1iZXIgfCB1bmRlZmluZWQsIG1pcnJvclk/OiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHRoaXM7XHJcbn1cclxuIl19