"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SVGElementController2 = _interopRequireDefault(require("./comps/SVGElementController"));

var _interfaces = require("./comps/interfaces");

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

var LineContoller = /*#__PURE__*/function (_SVGElementController) {
  _inherits(LineContoller, _SVGElementController);

  var _super = _createSuper(LineContoller);

  function LineContoller(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "line";

    _classCallCheck(this, LineContoller);

    return _super.call(this, element, type);
  }

  _createClass(LineContoller, [{
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
  }]);

  return LineContoller;
}(_SVGElementController2["default"]);

exports["default"] = LineContoller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9MaW5lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJMaW5lQ29udG9sbGVyIiwiZWxlbWVudCIsInR5cGUiLCJ4IiwieSIsImNvb3JkIiwiQ29vcmRUeXBlIiwiTGluZWFyIiwiYXBwZW5kQ29vcmQiLCJTVkdFbGVtZW50Q29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7QUFDcEIseUJBQVlDLE9BQVosRUFBa0U7QUFBQSxRQUFoQ0MsSUFBZ0MsdUVBQVIsTUFBUTs7QUFBQTs7QUFBQSw2QkFDM0RELE9BRDJELEVBQ2xEQyxJQURrRDtBQUVqRTs7OzsyQkFFYUMsQyxFQUFXQyxDLEVBQVc7QUFDbkMsVUFBTUMsS0FBWSxHQUFHO0FBQUVILFFBQUFBLElBQUksRUFBRUksc0JBQVVDLE1BQWxCO0FBQTBCSixRQUFBQSxDQUFDLEVBQURBLENBQTFCO0FBQTZCQyxRQUFBQSxDQUFDLEVBQURBO0FBQTdCLE9BQXJCO0FBQ0EsV0FBS0ksV0FBTCxDQUFpQkgsS0FBakIsRUFBd0IsSUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDQTs7OzJCQUVhRixDLEVBQVdDLEMsRUFBVztBQUNuQyxVQUFNQyxLQUFZLEdBQUc7QUFBRUgsUUFBQUEsSUFBSSxFQUFFSSxzQkFBVUMsTUFBbEI7QUFBMEJKLFFBQUFBLENBQUMsRUFBREEsQ0FBMUI7QUFBNkJDLFFBQUFBLENBQUMsRUFBREE7QUFBN0IsT0FBckI7QUFDQSxXQUFLSSxXQUFMLENBQWlCSCxLQUFqQjtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7O0VBZnlDSSxpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTVkdFbGVtZW50Q29udHJvbGxlciBmcm9tIFwiLi9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBDb29yZCwgQ29vcmRUeXBlIH0gZnJvbSBcIi4vY29tcHMvaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNvbnRvbGxlciBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyIHtcclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50PzogU1ZHRWxlbWVudCwgdHlwZTogU1ZHRWxlbWVudFR5cGVzID0gXCJsaW5lXCIpIHtcclxuXHRcdHN1cGVyKGVsZW1lbnQsIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29vcmQ6IENvb3JkID0geyB0eXBlOiBDb29yZFR5cGUuTGluZWFyLCB4LCB5IH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkLCB0cnVlKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxpbmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29vcmQ6IENvb3JkID0geyB0eXBlOiBDb29yZFR5cGUuTGluZWFyLCB4LCB5IH07XHJcblx0XHR0aGlzLmFwcGVuZENvb3JkKGNvb3JkKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufVxyXG4iXX0=