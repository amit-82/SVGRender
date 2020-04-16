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

var PolygonController = /*#__PURE__*/function (_PolylineController) {
  _inherits(PolygonController, _PolylineController);

  var _super = _createSuper(PolygonController);

  function PolygonController(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "polygon";

    _classCallCheck(this, PolygonController);

    return _super.call(this, element, type);
  }

  return PolygonController;
}(_PolylineController2["default"]);

exports["default"] = PolygonController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Qb2x5Z29uQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJQb2x5Z29uQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0eXBlIiwiUG9seWxpbmVDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7OztBQUNwQiw2QkFBWUMsT0FBWixFQUFxRTtBQUFBLFFBQW5DQyxJQUFtQyx1RUFBWCxTQUFXOztBQUFBOztBQUFBLDZCQUM5REQsT0FEOEQsRUFDckRDLElBRHFEO0FBRXBFOzs7RUFINkNDLCtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvbHlsaW5lQ29udHJvbGxlciBmcm9tIFwiLi9Qb2x5bGluZUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb25Db250cm9sbGVyIGV4dGVuZHMgUG9seWxpbmVDb250cm9sbGVyIHtcclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50PzogU1ZHRWxlbWVudCwgdHlwZTogU1ZHRWxlbWVudFR5cGVzID0gXCJwb2x5Z29uXCIpIHtcclxuXHRcdHN1cGVyKGVsZW1lbnQsIHR5cGUpO1xyXG5cdH1cclxufVxyXG4iXX0=