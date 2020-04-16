"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoordinatesParsers = exports.CoordinatesParser = void 0;

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

exports.CoordinatesParser = CoordinatesParser;

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
    key: "createElementAttrs",
    value: function createElementAttrs(coords) {
      var attrs = {};

      for (var i = 0; i < coords.length; i++) {
        var propIndex = i * 2;
        attrs[this.orderedProps[propIndex]] = coords[i].x;

        if (propIndex + 1 < this.orderedProps.length) {
          attrs[this.orderedProps[propIndex + 1]] = coords[i].y;
        }
      }

      return attrs;
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
    key: "createElementAttrs",
    value: function createElementAttrs(coords) {
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
    key: "createElementAttrs",
    value: function createElementAttrs(coords) {
      var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return {
        d: instructions.join(" ")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9jb29yZGluYXRlcy9Db29yZGluYXRlc1BhcnNlci50cyJdLCJuYW1lcyI6WyJDb29yZGluYXRlc1BhcnNlciIsIm1heENvb3JkaW5hdGVzIiwiY29vcmRzTGVuZ3RoIiwiaW5zdHJ1Y3Rpb25zIiwiU3RyaWN0T3JkZXJQcm9wcyIsIm9yZGVyZWRQcm9wcyIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImNvb3JkcyIsImF0dHJzIiwiaSIsInByb3BJbmRleCIsIngiLCJ5IiwiVW5saW1pdGVkUG9pbnRzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwicmVkdWNlIiwiYWNjIiwiY29vcmQiLCJwb2ludHMiLCJwdXNoIiwiUGF0aENvb3JkaWFudGVzUGFyc2VyIiwiZCIsImpvaW4iLCJ1bmxpbWl0ZWRQb2ludHMiLCJDb29yZGluYXRlc1BhcnNlcnMiLCJjaXJjbGUiLCJlbGxpcHNlIiwibGluZSIsInBhdGgiLCJwb2x5Z29uIiwicG9seWxpbmUiLCJyZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXNCQSxpQjtBQUVyQiw2QkFBWUMsY0FBWixFQUFvQztBQUFBOztBQUFBOztBQUNuQyxTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBOzs7OzJDQVFBQyxZLEVBQ0FDLFksRUFDVTtBQUNWLGFBQU9ELFlBQVksSUFBSSxLQUFLRCxjQUE1QjtBQUNBOzs7Ozs7OztJQUdJRyxnQjs7Ozs7QUFHTCw0QkFBWUMsWUFBWixFQUFvQztBQUFBOztBQUFBOztBQUNuQyw4QkFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFlBQVksQ0FBQ0csTUFBYixHQUFzQixDQUFqQyxDQUFOOztBQURtQzs7QUFFbkMsVUFBS0gsWUFBTCxHQUFvQkEsWUFBcEI7QUFGbUM7QUFHbkM7Ozs7d0NBRTBCSSxNLEVBQTBCO0FBQ3BELGFBQU9BLE1BQU0sQ0FBQ0QsTUFBUCxLQUFrQixL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bmltcG9ydCB7IGNyZWF0ZVByb3h5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvb2JqZWN0X3V0aWxzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29vcmRpbmF0ZXNQYXJzZXIge1xyXG5cdHByb3RlY3RlZCBtYXhDb29yZGluYXRlczogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKG1heENvb3JkaW5hdGVzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMubWF4Q29vcmRpbmF0ZXMgPSBtYXhDb29yZGluYXRlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhYnN0cmFjdCB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkczogQ29vcmRbXSk6IGJvb2xlYW47XHJcblx0cHVibGljIGFic3RyYWN0IGNyZWF0ZUVsZW1lbnRBdHRycyhcclxuXHRcdGNvb3JkczogQ29vcmRbXSxcclxuXHRcdGluc3RydWN0aW9ucz86IHN0cmluZ09yTnVtYmVyW11cclxuXHQpOiBhbnk7XHJcblx0cHVibGljIHZhbGlkYXRlTWF4Q29vcmRpbmF0ZXMoXHJcblx0XHRjb29yZHNMZW5ndGg6IG51bWJlcixcclxuXHRcdGluc3RydWN0aW9ucz86IHN0cmluZ09yTnVtYmVyW11cclxuXHQpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBjb29yZHNMZW5ndGggPD0gdGhpcy5tYXhDb29yZGluYXRlcztcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFN0cmljdE9yZGVyUHJvcHMgZXh0ZW5kcyBDb29yZGluYXRlc1BhcnNlciB7XHJcblx0cHJpdmF0ZSBvcmRlcmVkUHJvcHM6IHN0cmluZ1tdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcmRlcmVkUHJvcHM6IHN0cmluZ1tdKSB7XHJcblx0XHRzdXBlcihNYXRoLmZsb29yKG9yZGVyZWRQcm9wcy5sZW5ndGggLyAyKSk7XHJcblx0XHR0aGlzLm9yZGVyZWRQcm9wcyA9IG9yZGVyZWRQcm9wcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkczogQ29vcmRbXSk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGNvb3Jkcy5sZW5ndGggPT09IHRoaXMub3JkZXJlZFByb3BzLmxlbmd0aCAvIDI7XHJcblx0fVxyXG5cdHB1YmxpYyBjcmVhdGVFbGVtZW50QXR0cnMoY29vcmRzOiBDb29yZFtdKTogYW55IHtcclxuXHRcdGNvbnN0IGF0dHJzOiBhbnkgPSB7fTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHByb3BJbmRleCA9IGkgKiAyO1xyXG5cdFx0XHRhdHRyc1t0aGlzLm9yZGVyZWRQcm9wc1twcm9wSW5kZXhdXSA9IGNvb3Jkc1tpXS54O1xyXG5cdFx0XHRpZiAocHJvcEluZGV4ICsgMSA8IHRoaXMub3JkZXJlZFByb3BzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGF0dHJzW3RoaXMub3JkZXJlZFByb3BzW3Byb3BJbmRleCArIDFdXSA9IGNvb3Jkc1tpXS55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXR0cnM7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBVbmxpbWl0ZWRQb2ludHMgZXh0ZW5kcyBDb29yZGluYXRlc1BhcnNlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihOdW1iZXIuTUFYX1ZBTFVFKTtcclxuXHR9XHJcblx0cHVibGljIHZhbGlkYXRlQ29vcmRpbmF0ZXMoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGNyZWF0ZUVsZW1lbnRBdHRycyhjb29yZHM6IENvb3JkW10pOiBhbnkge1xyXG5cdFx0cmV0dXJuIGNvb3Jkcy5yZWR1Y2UoXHJcblx0XHRcdChhY2M6IGFueSwgY29vcmQpID0+IHtcclxuXHRcdFx0XHRhY2MucG9pbnRzLnB1c2goY29vcmQueCk7XHJcblx0XHRcdFx0YWNjLnBvaW50cy5wdXNoKGNvb3JkLnkpO1xyXG5cdFx0XHRcdHJldHVybiBhY2M7XHJcblx0XHRcdH0sXHJcblx0XHRcdHsgcG9pbnRzOiBbXSB9XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgUGF0aENvb3JkaWFudGVzUGFyc2VyIGV4dGVuZHMgQ29vcmRpbmF0ZXNQYXJzZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoTnVtYmVyLk1BWF9WQUxVRSk7XHJcblx0fVxyXG5cdHB1YmxpYyB2YWxpZGF0ZUNvb3JkaW5hdGVzKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBjcmVhdGVFbGVtZW50QXR0cnMoXHJcblx0XHRjb29yZHM6IENvb3JkW10sXHJcblx0XHRpbnN0cnVjdGlvbnM6IHN0cmluZ09yTnVtYmVyW10gPSBbXVxyXG5cdCk6IGFueSB7XHJcblx0XHRyZXR1cm4geyBkOiBpbnN0cnVjdGlvbnMuam9pbihcIiBcIikgfTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHVubGltaXRlZFBvaW50cyA9IG5ldyBVbmxpbWl0ZWRQb2ludHMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb29yZGluYXRlc1BhcnNlcnMgPSBjcmVhdGVQcm94eTxDb29yZGluYXRlc1BhcnNlcj4oe1xyXG5cdGNpcmNsZTogbmV3IFN0cmljdE9yZGVyUHJvcHMoW1wiY3hcIiwgXCJjeVwiLCBcInJcIl0pLFxyXG5cdGVsbGlwc2U6IG5ldyBTdHJpY3RPcmRlclByb3BzKFtcImN4XCIsIFwiY3lcIiwgXCJyeFwiLCBcInJ5XCJdKSxcclxuXHRsaW5lOiBuZXcgU3RyaWN0T3JkZXJQcm9wcyhbXCJ4MVwiLCBcInkxXCIsIFwieDJcIiwgXCJ5MlwiXSksXHJcblx0cGF0aDogbmV3IFBhdGhDb29yZGlhbnRlc1BhcnNlcigpLFxyXG5cdHBvbHlnb246IHVubGltaXRlZFBvaW50cyxcclxuXHRwb2x5bGluZTogdW5saW1pdGVkUG9pbnRzLFxyXG5cdHJlY3Q6IG5ldyBTdHJpY3RPcmRlclByb3BzKFtcInhcIiwgXCJ5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJyeFwiLCBcInJ5XCJdKSxcclxufSk7XHJcbiJdfQ==