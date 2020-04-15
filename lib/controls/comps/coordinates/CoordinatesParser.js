"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoordinatesParsers = exports["default"] = void 0;

var _object_utils = require("../../../helpers/object_utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CoordinatesParser = /*#__PURE__*/function () {
  function CoordinatesParser(maxCoordinates) {
    _classCallCheck(this, CoordinatesParser);

    _defineProperty(this, "maxCoordinates", void 0);

    this.maxCoordinates = maxCoordinates;
  }

  _createClass(CoordinatesParser, [{
    key: "validateMaxCoordinates",
    value: function validateMaxCoordinates(coordsLength, instructions) {
      return coordsLength <= this.maxCoordinates;
    }
  }]);

  return CoordinatesParser;
}();

exports["default"] = CoordinatesParser;

var StrictOrderProps = /*#__PURE__*/function (_CoordinatesParser) {
  _inherits(StrictOrderProps, _CoordinatesParser);

  var _super = _createSuper(StrictOrderProps);

  function StrictOrderProps(orderedProps) {
    var _this;

    _classCallCheck(this, StrictOrderProps);

    _this = _super.call(this, Math.floor(orderedProps.length / 2));

    _defineProperty(_assertThisInitialized(_this), "orderedProps", void 0);

    _this.orderedProps = orderedProps;
    return _this;
  }

  _createClass(StrictOrderProps, [{
    key: "validateCoordinates",
    value: function validateCoordinates(coords) {
      return coords.length === this.orderedProps.length / 2;
    }
  }, {
    key: "createElementProps",
    value: function createElementProps(coords) {
      var props = {};

      for (var i = 0; i < coords.length; i++) {
        var propIndex = i * 2;
        props[this.orderedProps[propIndex]] = coords[i].x;

        if (this.orderedProps.length < propIndex + 1) {
          props[this.orderedProps[propIndex + 1]] = coords[i].y;
        }
      }
    }
  }]);

  return StrictOrderProps;
}(CoordinatesParser);

var UnlimitedPoints = /*#__PURE__*/function (_CoordinatesParser2) {
  _inherits(UnlimitedPoints, _CoordinatesParser2);

  var _super2 = _createSuper(UnlimitedPoints);

  function UnlimitedPoints() {
    _classCallCheck(this, UnlimitedPoints);

    return _super2.call(this, Number.MAX_VALUE);
  }

  _createClass(UnlimitedPoints, [{
    key: "validateCoordinates",
    value: function validateCoordinates() {
      return true;
    }
  }, {
    key: "createElementProps",
    value: function createElementProps(coords) {
      return coords.reduce(function (acc, coord) {
        acc.points.push(coord.x);
        acc.points.push(coord.y);
        return acc;
      }, {
        points: []
      });
    }
  }]);

  return UnlimitedPoints;
}(CoordinatesParser);

var PathCoordiantesParser = /*#__PURE__*/function (_CoordinatesParser3) {
  _inherits(PathCoordiantesParser, _CoordinatesParser3);

  var _super3 = _createSuper(PathCoordiantesParser);

  function PathCoordiantesParser() {
    _classCallCheck(this, PathCoordiantesParser);

    return _super3.call(this, Number.MAX_VALUE);
  }

  _createClass(PathCoordiantesParser, [{
    key: "validateCoordinates",
    value: function validateCoordinates() {
      return true;
    }
  }, {
    key: "createElementProps",
    value: function createElementProps(coords) {
      var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return {
        d: instructions.map(function (a) {
          return a;
        })
      };
    }
  }]);

  return PathCoordiantesParser;
}(CoordinatesParser);

var unlimitedPoints = new UnlimitedPoints();
var CoordinatesParsers = (0, _object_utils.createProxy)({
  circle: new StrictOrderProps(["cx", "cy", "r"]),
  ellipse: new StrictOrderProps(["cx", "cy", "rx", "ry"]),
  line: new StrictOrderProps(["x1", "y1", "x2", "y2"]),
  path: new PathCoordiantesParser(),
  polygon: unlimitedPoints,
  polyline: unlimitedPoints,
  rect: new StrictOrderProps(["x", "y", "width", "height", "rx", "ry"])
});
exports.CoordinatesParsers = CoordinatesParsers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9jb29yZGluYXRlcy9Db29yZGluYXRlc1BhcnNlci50cyJdLCJuYW1lcyI6WyJDb29yZGluYXRlc1BhcnNlciIsIm1heENvb3JkaW5hdGVzIiwiY29vcmRzTGVuZ3RoIiwiaW5zdHJ1Y3Rpb25zIiwiU3RyaWN0T3JkZXJQcm9wcyIsIm9yZGVyZWRQcm9wcyIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImNvb3JkcyIsInByb3BzIiwiaSIsInByb3BJbmRleCIsIngiLCJ5IiwiVW5saW1pdGVkUG9pbnRzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwicmVkdWNlIiwiYWNjIiwiY29vcmQiLCJwb2ludHMiLCJwdXNoIiwiUGF0aENvb3JkaWFudGVzUGFyc2VyIiwiZCIsIm1hcCIsImEiLCJ1bmxpbWl0ZWRQb2ludHMiLCJDb29yZGluYXRlc1BhcnNlcnMiLCJjaXJjbGUiLCJlbGxpcHNlIiwibGluZSIsInBhdGgiLCJwb2x5Z29uIiwicG9seWxpbmUiLCJyZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRzhCQSxpQjtBQUU3Qiw2QkFBWUMsY0FBWixFQUFvQztBQUFBOztBQUFBOztBQUNuQyxTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBOzs7OzJDQUtBQyxZLEVBQ0FDLFksRUFDVTtBQUNWLGFBQU9ELFlBQVksSUFBSSxLQUFLRCxjQUE1QjtBQUNBOzs7Ozs7OztJQUdJRyxnQjs7Ozs7QUFHTCw0QkFBWUMsWUFBWixFQUFvQztBQUFBOztBQUFBOztBQUNuQyw4QkFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFlBQVksQ0FBQ0csTUFBYixHQUFzQixDQUFqQyxDQUFOOztBQURtQzs7QUFFbkMsVUFBS0gsWUFBTCxHQUFvQkEsWUFBcEI7QUFGbUM7QUFHbkM7Ozs7d0NBRTBCSSxNLEVBQTBCO0FBQ3BELGFBQU9BLE1BQU0sQ0FBQ0QsTUFBUCxLQUFr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Ii4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9vYmplY3RfdXRpbHNcIjtcclxuaW1wb3J0IHsgaWRlbnRpdHlGbiB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2Z1bmN0aW9uX3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb29yZGluYXRlc1BhcnNlciB7XHJcblx0cHJvdGVjdGVkIG1heENvb3JkaW5hdGVzOiBudW1iZXI7XHJcblx0Y29uc3RydWN0b3IobWF4Q29vcmRpbmF0ZXM6IG51bWJlcikge1xyXG5cdFx0dGhpcy5tYXhDb29yZGluYXRlcyA9IG1heENvb3JkaW5hdGVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFic3RyYWN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZFtdKTogYm9vbGVhbjtcclxuXHRwdWJsaWMgYWJzdHJhY3QgY3JlYXRlRWxlbWVudFByb3BzKGNvb3JkczogQ29vcmRbXSk6IGFueTtcclxuXHRwdWJsaWMgdmFsaWRhdGVNYXhDb29yZGluYXRlcyhcclxuXHRcdGNvb3Jkc0xlbmd0aDogbnVtYmVyLFxyXG5cdFx0aW5zdHJ1Y3Rpb25zPzogc3RyaW5nT3JOdW1iZXJbXVxyXG5cdCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGNvb3Jkc0xlbmd0aCA8PSB0aGlzLm1heENvb3JkaW5hdGVzO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU3RyaWN0T3JkZXJQcm9wcyBleHRlbmRzIENvb3JkaW5hdGVzUGFyc2VyIHtcclxuXHRwcml2YXRlIG9yZGVyZWRQcm9wczogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9yZGVyZWRQcm9wczogc3RyaW5nW10pIHtcclxuXHRcdHN1cGVyKE1hdGguZmxvb3Iob3JkZXJlZFByb3BzLmxlbmd0aCAvIDIpKTtcclxuXHRcdHRoaXMub3JkZXJlZFByb3BzID0gb3JkZXJlZFByb3BzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZFtdKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gY29vcmRzLmxlbmd0aCA9PT0gdGhpcy5vcmRlcmVkUHJvcHMubGVuZ3RoIC8gMjtcclxuXHR9XHJcblx0cHVibGljIGNyZWF0ZUVsZW1lbnRQcm9wcyhjb29yZHM6IENvb3JkW10pOiBhbnkge1xyXG5cdFx0Y29uc3QgcHJvcHM6IGFueSA9IHt9O1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcHJvcEluZGV4ID0gaSAqIDI7XHJcblx0XHRcdHByb3BzW3RoaXMub3JkZXJlZFByb3BzW3Byb3BJbmRleF1dID0gY29vcmRzW2ldLng7XHJcblx0XHRcdGlmICh0aGlzLm9yZGVyZWRQcm9wcy5sZW5ndGggPCBwcm9wSW5kZXggKyAxKSB7XHJcblx0XHRcdFx0cHJvcHNbdGhpcy5vcmRlcmVkUHJvcHNbcHJvcEluZGV4ICsgMV1dID0gY29vcmRzW2ldLnk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFVubGltaXRlZFBvaW50cyBleHRlbmRzIENvb3JkaW5hdGVzUGFyc2VyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKE51bWJlci5NQVhfVkFMVUUpO1xyXG5cdH1cclxuXHRwdWJsaWMgdmFsaWRhdGVDb29yZGluYXRlcygpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgY3JlYXRlRWxlbWVudFByb3BzKGNvb3JkczogQ29vcmRbXSk6IGFueSB7XHJcblx0XHRyZXR1cm4gY29vcmRzLnJlZHVjZShcclxuXHRcdFx0KGFjYzogYW55LCBjb29yZCkgPT4ge1xyXG5cdFx0XHRcdGFjYy5wb2ludHMucHVzaChjb29yZC54KTtcclxuXHRcdFx0XHRhY2MucG9pbnRzLnB1c2goY29vcmQueSk7XHJcblx0XHRcdFx0cmV0dXJuIGFjYztcclxuXHRcdFx0fSxcclxuXHRcdFx0eyBwb2ludHM6IFtdIH1cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBQYXRoQ29vcmRpYW50ZXNQYXJzZXIgZXh0ZW5kcyBDb29yZGluYXRlc1BhcnNlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihOdW1iZXIuTUFYX1ZBTFVFKTtcclxuXHR9XHJcblx0cHVibGljIHZhbGlkYXRlQ29vcmRpbmF0ZXMoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGNyZWF0ZUVsZW1lbnRQcm9wcyhcclxuXHRcdGNvb3JkczogQ29vcmRbXSxcclxuXHRcdGluc3RydWN0aW9uczogc3RyaW5nT3JOdW1iZXJbXSA9IFtdXHJcblx0KTogYW55IHtcclxuXHRcdHJldHVybiB7IGQ6IGluc3RydWN0aW9ucy5tYXAoKGEpID0+IGEpIH07XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCB1bmxpbWl0ZWRQb2ludHMgPSBuZXcgVW5saW1pdGVkUG9pbnRzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29vcmRpbmF0ZXNQYXJzZXJzID0gY3JlYXRlUHJveHk8Q29vcmRpbmF0ZXNQYXJzZXI+KHtcclxuXHRjaXJjbGU6IG5ldyBTdHJpY3RPcmRlclByb3BzKFtcImN4XCIsIFwiY3lcIiwgXCJyXCJdKSxcclxuXHRlbGxpcHNlOiBuZXcgU3RyaWN0T3JkZXJQcm9wcyhbXCJjeFwiLCBcImN5XCIsIFwicnhcIiwgXCJyeVwiXSksXHJcblx0bGluZTogbmV3IFN0cmljdE9yZGVyUHJvcHMoW1wieDFcIiwgXCJ5MVwiLCBcIngyXCIsIFwieTJcIl0pLFxyXG5cdHBhdGg6IG5ldyBQYXRoQ29vcmRpYW50ZXNQYXJzZXIoKSxcclxuXHRwb2x5Z29uOiB1bmxpbWl0ZWRQb2ludHMsXHJcblx0cG9seWxpbmU6IHVubGltaXRlZFBvaW50cyxcclxuXHRyZWN0OiBuZXcgU3RyaWN0T3JkZXJQcm9wcyhbXCJ4XCIsIFwieVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwicnhcIiwgXCJyeVwiXSksXHJcbn0pO1xyXG4iXX0=