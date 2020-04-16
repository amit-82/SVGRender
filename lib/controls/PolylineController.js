"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _LineController = _interopRequireDefault(require("./LineController"));

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

var PolylineController = /*#__PURE__*/function (_LineContoller) {
  _inherits(PolylineController, _LineContoller);

  var _super = _createSuper(PolylineController);

  function PolylineController(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "polyline";

    _classCallCheck(this, PolylineController);

    return _super.call(this, element, type);
  }

  return PolylineController;
}(_LineController["default"]);

exports["default"] = PolylineController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Qb2x5bGluZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiUG9seWxpbmVDb250cm9sbGVyIiwiZWxlbWVudCIsInR5cGUiLCJMaW5lQ29udG9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7OztBQUNwQiw4QkFBWUMsT0FBWixFQUFzRTtBQUFBLFFBQXBDQyxJQUFvQyx1RUFBWixVQUFZOztBQUFBOztBQUFBLDZCQUMvREQsT0FEK0QsRUFDdERDLElBRHNEO0FBRXJFOzs7RUFIOENDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29vcmQsIENvb3JkVHlwZSB9IGZyb20gXCIuL2NvbXBzL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IFNWR0VsZW1lbnRDb250cm9sbGVyIGZyb20gXCIuL2NvbXBzL1NWR0VsZW1lbnRDb250cm9sbGVyXCI7XHJcbmltcG9ydCBMaW5lQ29udG9sbGVyIGZyb20gXCIuL0xpbmVDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZUNvbnRyb2xsZXIgZXh0ZW5kcyBMaW5lQ29udG9sbGVyIHtcclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50PzogU1ZHRWxlbWVudCwgdHlwZTogU1ZHRWxlbWVudFR5cGVzID0gXCJwb2x5bGluZVwiKSB7XHJcblx0XHRzdXBlcihlbGVtZW50LCB0eXBlKTtcclxuXHR9XHJcbn1cclxuIl19