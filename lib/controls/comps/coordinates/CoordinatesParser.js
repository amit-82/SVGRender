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
    value: function validateMaxCoordinates(coordsLength) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9jb29yZGluYXRlcy9Db29yZGluYXRlc1BhcnNlci50cyJdLCJuYW1lcyI6WyJDb29yZGluYXRlc1BhcnNlciIsIm1heENvb3JkaW5hdGVzIiwiY29vcmRzTGVuZ3RoIiwiU3RyaWN0T3JkZXJQcm9wcyIsIm9yZGVyZWRQcm9wcyIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImNvb3JkcyIsImF0dHJzIiwiaSIsInByb3BJbmRleCIsIngiLCJ5IiwiVW5saW1pdGVkUG9pbnRzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwicmVkdWNlIiwiYWNjIiwiY29vcmQiLCJwb2ludHMiLCJwdXNoIiwiUGF0aENvb3JkaWFudGVzUGFyc2VyIiwiaW5zdHJ1Y3Rpb25zIiwiZCIsImpvaW4iLCJ1bmxpbWl0ZWRQb2ludHMiLCJDb29yZGluYXRlc1BhcnNlcnMiLCJjaXJjbGUiLCJlbGxpcHNlIiwibGluZSIsInBhdGgiLCJwb2x5Z29uIiwicG9seWxpbmUiLCJyZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXNCQSxpQjtBQUVyQiw2QkFBWUMsY0FBWixFQUFvQztBQUFBOztBQUFBOztBQUNuQyxTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBOzs7OzJDQU82QkMsWSxFQUErQjtBQUM1RCxhQUFPQSxZQUFZLElBQUksS0FBS0QsY0FBNUI7QUFDQTs7Ozs7Ozs7SUFHSUUsZ0I7Ozs7O0FBR0wsNEJBQVlDLFlBQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFDbkMsOEJBQU1DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixZQUFZLENBQUNHLE1BQWIsR0FBc0IsQ0FBakMsQ0FBTjs7QUFEbUM7O0FBRW5DLFVBQUtILFlBQUwsR0FBb0JBLFlBQXBCO0FBRm1DO0FBR25DOzs7O3dDQUUwQkksTSxFQUEwQjtBQUNwRCxhQUFPQSxNQUFNLENBQUNELE1BQVAsS0FBa0IsS0FBS0gsWUFBTCxDQUFrQkcsTUFBbEIsR0FBMkIsQ0FBcEQ7QUFDQTs7O3VDQUN5QkMsTSxFQUFzQjtBQUMvQyxVQUFNQyxLQUFVLEdBQUcsRUFBbkI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixNQUFNLENBQUNELE1BQTNCLEVBQW1DRyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3ZDLFlBQU1DLFNBQVMsR0FBR0QsQ0FBQyxHQUFHLENBQXRCO0FBQ0FELFFBQUFBLEtBQUssQ0FBQyxLQUFLTCxZQUFMLENBQWtCTyxTQUFsQixDQUFELENBQUwsR0FBc0NILE1BQU0sQ0FBQ0UsQ0FBRCxDQUFOLENBQVVFLENBQWhEOztBQUNBLFlBQUlELFNBQVMsR0FBRyxDQUFaLEdBQWdCLEtBQUtQLFlBQUwsQ0FBa0JHLE1BQXRDLEVBQThDO0FBQzdDRSxVQUFBQSxLQUFLLENBQUMsS0FBS0wsWUFBTCxDQUFrQk8sU0FBUyxHQUFHLENBQTlCLENBQUQsQ0FBTCxHQUEwQ0gsTUFBTSxDQUFDRSxDQUFELENBQU4sQ0FBVUcsQ0FBcEQ7QUFDQTtBQUNEOztBQUNELGFBQU9KLEtBQVA7QUFDQTs7OztFQXJCNkJULGlCOztJQXdCekJjLGU7Ozs7O0FBQ0wsNkJBQWM7QUFBQTs7QUFBQSw4QkFDUEMsTUFBTSxDQUFDQyxTQURBO0FBRWI7Ozs7MENBQ3FDO0FBQ3JDLGFBQU8sSUFBUDtBQUNBOzs7dUNBQ3lCUixNLEVBQXNCO0FBQy9DLGFBQU9BLE1BQU0sQ0FBQ1MsTUFBUCxDQUNOLFVBQUNDLEdBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUNwQkQsUUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVdDLElBQVgsQ0FBZ0JGLEtBQUssQ0FBQ1AsQ0FBdEI7QUFDQU0sUUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVdDLElBQVgsQ0FBZ0JGLEtBQUssQ0FBQ04sQ0FBdEI7QUFDQSxlQUFPSyxHQUFQO0FBQ0EsT0FMSyxFQU1OO0FBQUVFLFFBQUFBLE1BQU0sRUFBRTtBQUFWLE9BTk0sQ0FBUDtBQVFBOzs7O0VBaEI0QnBCLGlCOztJQW1CeEJzQixxQjs7Ozs7QUFDTCxtQ0FBYztBQUFBOztBQUFBLDhCQUNQUCxNQUFNLENBQUNDLFNBREE7QUFFYjs7OzswQ0FDcUM7QUFDckMsYUFBTyxJQUFQO0FBQ0E7Ozt1Q0FFQVIsTSxFQUVNO0FBQUEsVUFETmUsWUFDTSx1RUFEMkIsRUFDM0I7QUFDTixhQUFPO0FBQUVDLFFBQUFBLENBQUMsRUFBRUQsWUFBWSxDQUFDRSxJQUFiLENBQWtCLEdBQWxCO0FBQUwsT0FBUDtBQUNBOzs7O0VBWmtDekIsaUI7O0FBZXBDLElBQU0wQixlQUFlLEdBQUcsSUFBSVosZUFBSixFQUF4QjtBQUVPLElBQU1hLGtCQUFrQixHQUFHLCtCQUErQjtBQUNoRUMsRUFBQUEsTUFBTSxFQUFFLElBQUl6QixnQkFBSixDQUFxQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsR0FBYixDQUFyQixDQUR3RDtBQUVoRTBCLEVBQUFBLE9BQU8sRUFBRSxJQUFJMUIsZ0JBQUosQ0FBcUIsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBckIsQ0FGdUQ7QUFHaEUyQixFQUFBQSxJQUFJLEVBQUUsSUFBSTNCLGdCQUFKLENBQXFCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQXJCLENBSDBEO0FBSWhFNEIsRUFBQUEsSUFBSSxFQUFFLElBQUlULHFCQUFKLEVBSjBEO0FBS2hFVSxFQUFBQSxPQUFPLEVBQUVOLGVBTHVEO0FBTWhFTyxFQUFBQSxRQUFRLEVBQUVQLGVBTnNEO0FBT2hFUSxFQUFBQSxJQUFJLEVBQUUsSUFBSS9CLGdCQUFKLENBQXFCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxPQUFYLEVBQW9CLFFBQXBCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDLENBQXJCO0FBUDBELENBQS9CLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29vcmQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm94eSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL29iamVjdF91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvb3JkaW5hdGVzUGFyc2VyIHtcclxuXHRwcm90ZWN0ZWQgbWF4Q29vcmRpbmF0ZXM6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcihtYXhDb29yZGluYXRlczogbnVtYmVyKSB7XHJcblx0XHR0aGlzLm1heENvb3JkaW5hdGVzID0gbWF4Q29vcmRpbmF0ZXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWJzdHJhY3QgdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZHM6IENvb3JkW10pOiBib29sZWFuO1xyXG5cdHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVFbGVtZW50QXR0cnMoXHJcblx0XHRjb29yZHM6IENvb3JkW10sXHJcblx0XHRpbnN0cnVjdGlvbnM/OiBzdHJpbmdPck51bWJlcltdXHJcblx0KTogYW55O1xyXG5cdHB1YmxpYyB2YWxpZGF0ZU1heENvb3JkaW5hdGVzKGNvb3Jkc0xlbmd0aDogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gY29vcmRzTGVuZ3RoIDw9IHRoaXMubWF4Q29vcmRpbmF0ZXM7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTdHJpY3RPcmRlclByb3BzIGV4dGVuZHMgQ29vcmRpbmF0ZXNQYXJzZXIge1xyXG5cdHByaXZhdGUgb3JkZXJlZFByb3BzOiBzdHJpbmdbXTtcclxuXHJcblx0Y29uc3RydWN0b3Iob3JkZXJlZFByb3BzOiBzdHJpbmdbXSkge1xyXG5cdFx0c3VwZXIoTWF0aC5mbG9vcihvcmRlcmVkUHJvcHMubGVuZ3RoIC8gMikpO1xyXG5cdFx0dGhpcy5vcmRlcmVkUHJvcHMgPSBvcmRlcmVkUHJvcHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZHM6IENvb3JkW10pOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBjb29yZHMubGVuZ3RoID09PSB0aGlzLm9yZGVyZWRQcm9wcy5sZW5ndGggLyAyO1xyXG5cdH1cclxuXHRwdWJsaWMgY3JlYXRlRWxlbWVudEF0dHJzKGNvb3JkczogQ29vcmRbXSk6IGFueSB7XHJcblx0XHRjb25zdCBhdHRyczogYW55ID0ge307XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwcm9wSW5kZXggPSBpICogMjtcclxuXHRcdFx0YXR0cnNbdGhpcy5vcmRlcmVkUHJvcHNbcHJvcEluZGV4XV0gPSBjb29yZHNbaV0ueDtcclxuXHRcdFx0aWYgKHByb3BJbmRleCArIDEgPCB0aGlzLm9yZGVyZWRQcm9wcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRhdHRyc1t0aGlzLm9yZGVyZWRQcm9wc1twcm9wSW5kZXggKyAxXV0gPSBjb29yZHNbaV0ueTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGF0dHJzO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVW5saW1pdGVkUG9pbnRzIGV4dGVuZHMgQ29vcmRpbmF0ZXNQYXJzZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoTnVtYmVyLk1BWF9WQUxVRSk7XHJcblx0fVxyXG5cdHB1YmxpYyB2YWxpZGF0ZUNvb3JkaW5hdGVzKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBjcmVhdGVFbGVtZW50QXR0cnMoY29vcmRzOiBDb29yZFtdKTogYW55IHtcclxuXHRcdHJldHVybiBjb29yZHMucmVkdWNlKFxyXG5cdFx0XHQoYWNjOiBhbnksIGNvb3JkKSA9PiB7XHJcblx0XHRcdFx0YWNjLnBvaW50cy5wdXNoKGNvb3JkLngpO1xyXG5cdFx0XHRcdGFjYy5wb2ludHMucHVzaChjb29yZC55KTtcclxuXHRcdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7IHBvaW50czogW10gfVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFBhdGhDb29yZGlhbnRlc1BhcnNlciBleHRlbmRzIENvb3JkaW5hdGVzUGFyc2VyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKE51bWJlci5NQVhfVkFMVUUpO1xyXG5cdH1cclxuXHRwdWJsaWMgdmFsaWRhdGVDb29yZGluYXRlcygpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgY3JlYXRlRWxlbWVudEF0dHJzKFxyXG5cdFx0Y29vcmRzOiBDb29yZFtdLFxyXG5cdFx0aW5zdHJ1Y3Rpb25zOiBzdHJpbmdPck51bWJlcltdID0gW11cclxuXHQpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHsgZDogaW5zdHJ1Y3Rpb25zLmpvaW4oXCIgXCIpIH07XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCB1bmxpbWl0ZWRQb2ludHMgPSBuZXcgVW5saW1pdGVkUG9pbnRzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29vcmRpbmF0ZXNQYXJzZXJzID0gY3JlYXRlUHJveHk8Q29vcmRpbmF0ZXNQYXJzZXI+KHtcclxuXHRjaXJjbGU6IG5ldyBTdHJpY3RPcmRlclByb3BzKFtcImN4XCIsIFwiY3lcIiwgXCJyXCJdKSxcclxuXHRlbGxpcHNlOiBuZXcgU3RyaWN0T3JkZXJQcm9wcyhbXCJjeFwiLCBcImN5XCIsIFwicnhcIiwgXCJyeVwiXSksXHJcblx0bGluZTogbmV3IFN0cmljdE9yZGVyUHJvcHMoW1wieDFcIiwgXCJ5MVwiLCBcIngyXCIsIFwieTJcIl0pLFxyXG5cdHBhdGg6IG5ldyBQYXRoQ29vcmRpYW50ZXNQYXJzZXIoKSxcclxuXHRwb2x5Z29uOiB1bmxpbWl0ZWRQb2ludHMsXHJcblx0cG9seWxpbmU6IHVubGltaXRlZFBvaW50cyxcclxuXHRyZWN0OiBuZXcgU3RyaWN0T3JkZXJQcm9wcyhbXCJ4XCIsIFwieVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwicnhcIiwgXCJyeVwiXSksXHJcbn0pO1xyXG4iXX0=