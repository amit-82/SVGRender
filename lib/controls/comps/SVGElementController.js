"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interfaces = require("./interfaces");

var _coords_utils = require("./utils/coords_utils");

var _CoordinatesParser = require("./coordinates/CoordinatesParser");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var idCounter = 0;

var SVGElementController = /*#__PURE__*/function () {
  function SVGElementController(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "svg";

    _classCallCheck(this, SVGElementController);

    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "_type", void 0);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "_coords", []);

    _defineProperty(this, "_segmentLengths", []);

    _defineProperty(this, "_totalLength", 0);

    _defineProperty(this, "_coordinatesParser", void 0);

    this._id = ++idCounter;
    this._type = type;
    this.element = element;
    this._coordinatesParser = _CoordinatesParser.CoordinatesParsers[type];
  }

  _createClass(SVGElementController, [{
    key: "getAttributesForElement",
    value: function getAttributesForElement() {
      return this._coordinatesParser.createElementAttrs(this._coords);
    }
  }, {
    key: "updateElement",
    value: function updateElement() {
      var _this = this;

      if (this.element) {
        var attrs = this.getAttributesForElement();
        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          _this.element.setAttribute(key, value);
        });
      }
    }
  }, {
    key: "getCoords",
    value: function getCoords() {
      return this._coords.map(function (coord) {
        return _objectSpread({}, coord);
      });
    }
  }, {
    key: "getCoordsRef",
    value: function getCoordsRef() {
      return this._coords;
    }
  }, {
    key: "appendCoord",
    value: function appendCoord(coord) {
      var isMoveTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!isMoveTo) {
        this.validateOrInsertFirstCoordZeroZero();
      }

      this._coords.push(coord);

      this._coordinatesParser.validateCoordinates(this._coords);
    }
  }, {
    key: "validateOrInsertFirstCoordZeroZero",
    value: function validateOrInsertFirstCoordZeroZero() {
      this._coords.length === 0 && this._coords.push({
        type: _interfaces.CoordType.Linear,
        x: 0,
        y: 0
      });
    }
    /**
     * @description must be called after any manipulation (or a series of manipulation) of the shape
     */

  }, {
    key: "calculate",
    value: function calculate() {
      var _this2 = this;

      // reset data
      this._totalLength = 0;
      this._segmentLengths.length = 0; // calculate totalLength of shape and

      this._coords.forEach(function (coord, index) {
        if (index > 0) {
          var lengthCalculator = _coords_utils.coordLengthCalculators[coord.type.toString()];

          var segmentLength = lengthCalculator(coord, _this2._coords[index - 1]);

          _this2._segmentLengths.push(segmentLength);

          _this2._totalLength += segmentLength;
        }
      });
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "coordinatesParser",
    get: function get() {
      return this._coordinatesParser;
    }
  }, {
    key: "segmentLengths",
    get: function get() {
      return this._segmentLengths;
    }
  }, {
    key: "totalLength",
    get: function get() {
      return this._totalLength;
    }
  }]);

  return SVGElementController;
}();

exports["default"] = SVGElementController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJTVkdFbGVtZW50Q29udHJvbGxlciIsImVsZW1lbnQiLCJ0eXBlIiwiX2lkIiwiX3R5cGUiLCJfY29vcmRpbmF0ZXNQYXJzZXIiLCJDb29yZGluYXRlc1BhcnNlcnMiLCJjcmVhdGVFbGVtZW50QXR0cnMiLCJfY29vcmRzIiwiYXR0cnMiLCJnZXRBdHRyaWJ1dGVzRm9yRWxlbWVudCIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJtYXAiLCJjb29yZCIsImlzTW92ZVRvIiwidmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybyIsInB1c2giLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwibGVuZ3RoIiwiQ29vcmRUeXBlIiwiTGluZWFyIiwieCIsInkiLCJfdG90YWxMZW5ndGgiLCJfc2VnbWVudExlbmd0aHMiLCJpbmRleCIsImxlbmd0aENhbGN1bGF0b3IiLCJjb29yZExlbmd0aENhbGN1bGF0b3JzIiwidG9TdHJpbmciLCJzZWdtZW50TGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBSUEsU0FBUyxHQUFHLENBQWhCOztJQUU4QkMsb0I7QUFXN0IsZ0NBQVlDLE9BQVosRUFBaUU7QUFBQSxRQUEvQkMsSUFBK0IsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxxQ0FOdEMsRUFNc0M7O0FBQUEsNkNBTDdCLEVBSzZCOztBQUFBLDBDQUpsQyxDQUlrQzs7QUFBQTs7QUFDaEUsU0FBS0MsR0FBTCxHQUFXLEVBQUVKLFNBQWI7QUFDQSxTQUFLSyxLQUFMLEdBQWFGLElBQWI7QUFDQSxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLSSxrQkFBTCxHQUEwQkMsc0NBQW1CSixJQUFuQixDQUExQjtBQUNBOzs7OzhDQWNnQztBQUNoQyxhQUFPLEtBQUtHLGtCQUFMLENBQXdCRSxrQkFBeEIsQ0FBMkMsS0FBS0MsT0FBaEQsQ0FBUDtBQUNBOzs7b0NBRXNCO0FBQUE7O0FBQ3RCLFVBQUksS0FBS1AsT0FBVCxFQUFrQjtBQUNqQixZQUFNUSxLQUFLLEdBQUcsS0FBS0MsdUJBQUwsRUFBZDtBQUNBQyxRQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUgsS0FBZixFQUFzQkksT0FBdEIsQ0FBOEIsZ0JBQWtCO0FBQUE7QUFBQSxjQUFoQkMsR0FBZ0I7QUFBQSxjQUFYQyxLQUFXOztBQUMvQyxVQUFBLEtBQUksQ0FBQ2QsT0FBTCxDQUFjZSxZQUFkLENBQTJCRixHQUEzQixFQUFnQ0MsS0FBaEM7QUFDQSxTQUZEO0FBR0E7QUFDRDs7O2dDQVUyQjtBQUMzQixhQUFPLEtBQUtQLE9BQUwsQ0FBYVMsR0FBYixDQUFpQixVQUFDQyxLQUFEO0FBQUEsaUNBQWlCQSxLQUFqQjtBQUFBLE9BQWpCLENBQVA7QUFDQTs7O21DQUV3QjtBQUN4QixhQUFPLEtBQUtWLE9BQVo7QUFDQTs7O2dDQUVxQlUsSyxFQUF5QztBQUFBLFVBQTNCQyxRQUEyQix1RUFBUCxLQUFPOztBQUM5RCxVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNkLGFBQUtDLGtDQUFMO0FBQ0E7O0FBRUQsV0FBS1osT0FBTCxDQUFhYSxJQUFiLENBQWtCSCxLQUFsQjs7QUFDQSxXQUFLYixrQkFBTCxDQUF3QmlCLG1CQUF4QixDQUE0QyxLQUFLZCxPQUFqRDtBQUNBOzs7eURBRThDO0FBQzlDLFdBQUtBLE9BQUwsQ0FBYWUsTUFBYixLQUF3QixDQUF4QixJQUNDLEtBQUtmLE9BQUwsQ0FBYWEsSUFBYixDQUFrQjtBQUFFbkIsUUFBQUEsSUFBSSxFQUFFc0Isc0JBQVVDLE1BQWxCO0FBQTBCQyxRQUFBQSxDQUFDLEVBQUUsQ0FBN0I7QUFBZ0NDLFFBQUFBLENBQUMsRUFBRTtBQUFuQyxPQUFsQixDQUREO0FBRUE7QUFFRDs7Ozs7O2dDQUc0QjtBQUFBOztBQUMzQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxXQUFLQyxlQUFMLENBQXFCTixNQUFyQixHQUE4QixDQUE5QixDQUgyQixDQUszQjs7QUFDQSxXQUFLZixPQUFMLENBQWFLLE9BQWIsQ0FBcUIsVUFBQ0ssS0FBRCxFQUFRWSxLQUFSLEVBQWtCO0FBQ3RDLFlBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDZCxjQUFNQyxnQkFBZ0IsR0FBR0MscUNBQXVCZCxLQUFLLENBQUNoQixJQUFOLENBQVcrQixRQUFYLEVBQXZCLENBQXpCOztBQUVBLGNBQU1DLGFBQXFCLEdBQUdILGdCQUFnQixDQUM3Q2IsS0FENkMsRUFFN0MsTUFBSSxDQUFDVixPQUFMLENBQWFzQixLQUFLLEdBQUcsQ0FBckIsQ0FGNkMsQ0FBOUM7O0FBS0EsVUFBQSxNQUFJLENBQUNELGVBQUwsQ0FBcUJSLElBQXJCLENBQTBCYSxhQUExQjs7QUFDQSxVQUFBLE1BQUksQ0FBQ04sWUFBTCxJQUFxQk0sYUFBckI7QUFDQTtBQUNELE9BWkQ7QUFhQTs7O3dCQTdFUTtBQUNSLGFBQU8sS0FBSy9CLEdBQVo7QUFDQTs7O3dCQUVVO0FBQ1YsYUFBTyxLQUFLQyxLQUFaO0FBQ0E7Ozt3QkFFdUI7QUFDdkIsYUFBTyxLQUFLQyxrQkFBWjtBQUNBOzs7d0JBZThCO0FBQzlCLGFBQU8sS0FBS3dCLGVBQVo7QUFDQTs7O3dCQUUyQjtBQUMzQixhQUFPLEtBQUtELFlBQVo7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb3JkLCBDb29yZFR5cGUgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IGNvb3JkTGVuZ3RoQ2FsY3VsYXRvcnMgfSBmcm9tIFwiLi91dGlscy9jb29yZHNfdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuXHRDb29yZGluYXRlc1BhcnNlcixcclxuXHRDb29yZGluYXRlc1BhcnNlcnMsXHJcbn0gZnJvbSBcIi4vY29vcmRpbmF0ZXMvQ29vcmRpbmF0ZXNQYXJzZXJcIjtcclxuXHJcbmxldCBpZENvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU1ZHRWxlbWVudENvbnRyb2xsZXIge1xyXG5cdHByaXZhdGUgX2lkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfdHlwZTogU1ZHRWxlbWVudFR5cGVzO1xyXG5cclxuXHRwcm90ZWN0ZWQgZWxlbWVudDogU1ZHRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuXHRwcml2YXRlIF9jb29yZHM6IENvb3JkW10gPSBbXTtcclxuXHRwcml2YXRlIF9zZWdtZW50TGVuZ3RoczogbnVtYmVyW10gPSBbXTtcclxuXHRwcml2YXRlIF90b3RhbExlbmd0aDogbnVtYmVyID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfY29vcmRpbmF0ZXNQYXJzZXI6IENvb3JkaW5hdGVzUGFyc2VyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50PzogU1ZHRWxlbWVudCwgdHlwZTogU1ZHRWxlbWVudFR5cGVzID0gXCJzdmdcIikge1xyXG5cdFx0dGhpcy5faWQgPSArK2lkQ291bnRlcjtcclxuXHRcdHRoaXMuX3R5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHRcdHRoaXMuX2Nvb3JkaW5hdGVzUGFyc2VyID0gQ29vcmRpbmF0ZXNQYXJzZXJzW3R5cGVdO1xyXG5cdH1cclxuXHJcblx0Z2V0IGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdHlwZTtcclxuXHR9XHJcblxyXG5cdGdldCBjb29yZGluYXRlc1BhcnNlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb29yZGluYXRlc1BhcnNlcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRBdHRyaWJ1dGVzRm9yRWxlbWVudCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb29yZGluYXRlc1BhcnNlci5jcmVhdGVFbGVtZW50QXR0cnModGhpcy5fY29vcmRzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVFbGVtZW50KCkge1xyXG5cdFx0aWYgKHRoaXMuZWxlbWVudCkge1xyXG5cdFx0XHRjb25zdCBhdHRycyA9IHRoaXMuZ2V0QXR0cmlidXRlc0ZvckVsZW1lbnQoKTtcclxuXHRcdFx0T2JqZWN0LmVudHJpZXMoYXR0cnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudCEuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUgYXMgc3RyaW5nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0IHNlZ21lbnRMZW5ndGhzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlZ21lbnRMZW5ndGhzO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldCB0b3RhbExlbmd0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b3RhbExlbmd0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRDb29yZHMoKTogQ29vcmRbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29vcmRzLm1hcCgoY29vcmQpID0+ICh7IC4uLmNvb3JkIH0pKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBnZXRDb29yZHNSZWYoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29vcmRzO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFwcGVuZENvb3JkKGNvb3JkOiBDb29yZCwgaXNNb3ZlVG86IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cdFx0aWYgKCFpc01vdmVUbykge1xyXG5cdFx0XHR0aGlzLnZhbGlkYXRlT3JJbnNlcnRGaXJzdENvb3JkWmVyb1plcm8oKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9jb29yZHMucHVzaChjb29yZCk7XHJcblx0XHR0aGlzLl9jb29yZGluYXRlc1BhcnNlci52YWxpZGF0ZUNvb3JkaW5hdGVzKHRoaXMuX2Nvb3Jkcyk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgdmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybygpIHtcclxuXHRcdHRoaXMuX2Nvb3Jkcy5sZW5ndGggPT09IDAgJiZcclxuXHRcdFx0dGhpcy5fY29vcmRzLnB1c2goeyB0eXBlOiBDb29yZFR5cGUuTGluZWFyLCB4OiAwLCB5OiAwIH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIG11c3QgYmUgY2FsbGVkIGFmdGVyIGFueSBtYW5pcHVsYXRpb24gKG9yIGEgc2VyaWVzIG9mIG1hbmlwdWxhdGlvbikgb2YgdGhlIHNoYXBlXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGN1bGF0ZSgpOiB2b2lkIHtcclxuXHRcdC8vIHJlc2V0IGRhdGFcclxuXHRcdHRoaXMuX3RvdGFsTGVuZ3RoID0gMDtcclxuXHRcdHRoaXMuX3NlZ21lbnRMZW5ndGhzLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIHRvdGFsTGVuZ3RoIG9mIHNoYXBlIGFuZFxyXG5cdFx0dGhpcy5fY29vcmRzLmZvckVhY2goKGNvb3JkLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAoaW5kZXggPiAwKSB7XHJcblx0XHRcdFx0Y29uc3QgbGVuZ3RoQ2FsY3VsYXRvciA9IGNvb3JkTGVuZ3RoQ2FsY3VsYXRvcnNbY29vcmQudHlwZS50b1N0cmluZygpXTtcclxuXHJcblx0XHRcdFx0Y29uc3Qgc2VnbWVudExlbmd0aDogbnVtYmVyID0gbGVuZ3RoQ2FsY3VsYXRvcihcclxuXHRcdFx0XHRcdGNvb3JkLFxyXG5cdFx0XHRcdFx0dGhpcy5fY29vcmRzW2luZGV4IC0gMV1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9zZWdtZW50TGVuZ3Rocy5wdXNoKHNlZ21lbnRMZW5ndGgpO1xyXG5cdFx0XHRcdHRoaXMuX3RvdGFsTGVuZ3RoICs9IHNlZ21lbnRMZW5ndGg7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=