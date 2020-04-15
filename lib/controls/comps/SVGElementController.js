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

    _defineProperty(this, "coordinatesParser", void 0);

    this._id = ++idCounter;
    this._type = type;
    this.element = element;
    this.coordinatesParser = _CoordinatesParser.CoordinatesParsers[type];
  }

  _createClass(SVGElementController, [{
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

      this.coordinatesParser.validateCoordinates(this._coords);
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
      var _this = this;

      // reset data
      this._totalLength = 0;
      this._segmentLengths.length = 0; // calculate totalLength of shape and

      this._coords.forEach(function (coord, index) {
        if (index > 0) {
          var lengthCalculator = _coords_utils.coordLengthCalculators[coord.type.toString()];

          var segmentLength = lengthCalculator(coord, _this._coords[index - 1]);

          _this._segmentLengths.push(segmentLength);

          _this._totalLength += segmentLength;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJTVkdFbGVtZW50Q29udHJvbGxlciIsImVsZW1lbnQiLCJ0eXBlIiwiX2lkIiwiX3R5cGUiLCJjb29yZGluYXRlc1BhcnNlciIsIkNvb3JkaW5hdGVzUGFyc2VycyIsIl9jb29yZHMiLCJtYXAiLCJjb29yZCIsImlzTW92ZVRvIiwidmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybyIsInB1c2giLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwibGVuZ3RoIiwiQ29vcmRUeXBlIiwiTGluZWFyIiwieCIsInkiLCJfdG90YWxMZW5ndGgiLCJfc2VnbWVudExlbmd0aHMiLCJmb3JFYWNoIiwiaW5kZXgiLCJsZW5ndGhDYWxjdWxhdG9yIiwiY29vcmRMZW5ndGhDYWxjdWxhdG9ycyIsInRvU3RyaW5nIiwic2VnbWVudExlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUlBLElBQUlBLFNBQVMsR0FBRyxDQUFoQjs7SUFFOEJDLG9CO0FBVzdCLGdDQUFZQyxPQUFaLEVBQWlFO0FBQUEsUUFBL0JDLElBQStCLHVFQUFQLEtBQU87O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEscUNBTnRDLEVBTXNDOztBQUFBLDZDQUw3QixFQUs2Qjs7QUFBQSwwQ0FKbEMsQ0FJa0M7O0FBQUE7O0FBQ2hFLFNBQUtDLEdBQUwsR0FBVyxFQUFFSixTQUFiO0FBQ0EsU0FBS0ssS0FBTCxHQUFhRixJQUFiO0FBQ0EsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0ksaUJBQUwsR0FBeUJDLHNDQUFtQkosSUFBbkIsQ0FBekI7QUFDQTs7OztnQ0FrQjJCO0FBQzNCLGFBQU8sS0FBS0ssT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxpQ0FBaUJBLEtBQWpCO0FBQUEsT0FBakIsQ0FBUDtBQUNBOzs7bUNBRXdCO0FBQ3hCLGFBQU8sS0FBS0YsT0FBWjtBQUNBOzs7Z0NBRXFCRSxLLEVBQXlDO0FBQUEsVUFBM0JDLFFBQTJCLHVFQUFQLEtBQU87O0FBQzlELFVBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2QsYUFBS0Msa0NBQUw7QUFDQTs7QUFFRCxXQUFLSixPQUFMLENBQWFLLElBQWIsQ0FBa0JILEtBQWxCOztBQUNBLFdBQUtKLGlCQUFMLENBQXVCUSxtQkFBdkIsQ0FBMkMsS0FBS04sT0FBaEQ7QUFDQTs7O3lEQUU4QztBQUM5QyxXQUFLQSxPQUFMLENBQWFPLE1BQWIsS0FBd0IsQ0FBeEIsSUFDQyxLQUFLUCxPQUFMLENBQWFLLElBQWIsQ0FBa0I7QUFBRVYsUUFBQUEsSUFBSSxFQUFFYSxzQkFBVUMsTUFBbEI7QUFBMEJDLFFBQUFBLENBQUMsRUFBRSxDQUE3QjtBQUFnQ0MsUUFBQUEsQ0FBQyxFQUFFO0FBQW5DLE9BQWxCLENBREQ7QUFFQTtBQUVEOzs7Ozs7Z0NBRzRCO0FBQUE7O0FBQzNCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLGVBQUwsQ0FBcUJOLE1BQXJCLEdBQThCLENBQTlCLENBSDJCLENBSzNCOztBQUNBLFdBQUtQLE9BQUwsQ0FBYWMsT0FBYixDQUFxQixVQUFDWixLQUFELEVBQVFhLEtBQVIsRUFBa0I7QUFDdEMsWUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNkLGNBQU1DLGdCQUFnQixHQUFHQyxxQ0FBdUJmLEtBQUssQ0FBQ1AsSUFBTixDQUFXdUIsUUFBWCxFQUF2QixDQUF6Qjs7QUFFQSxjQUFNQyxhQUFxQixHQUFHSCxnQkFBZ0IsQ0FDN0NkLEtBRDZDLEVBRTdDLEtBQUksQ0FBQ0YsT0FBTCxDQUFhZSxLQUFLLEdBQUcsQ0FBckIsQ0FGNkMsQ0FBOUM7O0FBS0EsVUFBQSxLQUFJLENBQUNGLGVBQUwsQ0FBcUJSLElBQXJCLENBQTBCYyxhQUExQjs7QUFDQSxVQUFBLEtBQUksQ0FBQ1AsWUFBTCxJQUFxQk8sYUFBckI7QUFDQTtBQUNELE9BWkQ7QUFhQTs7O3dCQTVEUTtBQUNSLGFBQU8sS0FBS3ZCLEdBQVo7QUFDQTs7O3dCQUVVO0FBQ1YsYUFBTyxLQUFLQyxLQUFaO0FBQ0E7Ozt3QkFFOEI7QUFDOUIsYUFBTyxLQUFLZ0IsZUFBWjtBQUNBOzs7d0JBRTJCO0FBQzNCLGFBQU8sS0FBS0QsWUFBWjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29vcmQsIENvb3JkVHlwZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgY29vcmRMZW5ndGhDYWxjdWxhdG9ycyB9IGZyb20gXCIuL3V0aWxzL2Nvb3Jkc191dGlsc1wiO1xyXG5pbXBvcnQgQ29vcmRpbmF0ZXNQYXJzZXIsIHtcclxuXHRDb29yZGluYXRlc1BhcnNlcnMsXHJcbn0gZnJvbSBcIi4vY29vcmRpbmF0ZXMvQ29vcmRpbmF0ZXNQYXJzZXJcIjtcclxuXHJcbmxldCBpZENvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU1ZHRWxlbWVudENvbnRyb2xsZXIge1xyXG5cdHByaXZhdGUgX2lkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfdHlwZTogU1ZHRWxlbWVudFR5cGVzO1xyXG5cclxuXHRwcm90ZWN0ZWQgZWxlbWVudDogU1ZHRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuXHRwcml2YXRlIF9jb29yZHM6IENvb3JkW10gPSBbXTtcclxuXHRwcml2YXRlIF9zZWdtZW50TGVuZ3RoczogbnVtYmVyW10gPSBbXTtcclxuXHRwcml2YXRlIF90b3RhbExlbmd0aDogbnVtYmVyID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIGNvb3JkaW5hdGVzUGFyc2VyOiBDb29yZGluYXRlc1BhcnNlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoZWxlbWVudD86IFNWR0VsZW1lbnQsIHR5cGU6IFNWR0VsZW1lbnRUeXBlcyA9IFwic3ZnXCIpIHtcclxuXHRcdHRoaXMuX2lkID0gKytpZENvdW50ZXI7XHJcblx0XHR0aGlzLl90eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0XHR0aGlzLmNvb3JkaW5hdGVzUGFyc2VyID0gQ29vcmRpbmF0ZXNQYXJzZXJzW3R5cGVdO1xyXG5cdH1cclxuXHJcblx0Z2V0IGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdHlwZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBnZXQgc2VnbWVudExlbmd0aHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudExlbmd0aHM7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0IHRvdGFsTGVuZ3RoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RvdGFsTGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldENvb3JkcygpOiBDb29yZFtdIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb29yZHMubWFwKChjb29yZCkgPT4gKHsgLi4uY29vcmQgfSkpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldENvb3Jkc1JlZigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb29yZHM7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYXBwZW5kQ29vcmQoY29vcmQ6IENvb3JkLCBpc01vdmVUbzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIWlzTW92ZVRvKSB7XHJcblx0XHRcdHRoaXMudmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2Nvb3Jkcy5wdXNoKGNvb3JkKTtcclxuXHRcdHRoaXMuY29vcmRpbmF0ZXNQYXJzZXIudmFsaWRhdGVDb29yZGluYXRlcyh0aGlzLl9jb29yZHMpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHZhbGlkYXRlT3JJbnNlcnRGaXJzdENvb3JkWmVyb1plcm8oKSB7XHJcblx0XHR0aGlzLl9jb29yZHMubGVuZ3RoID09PSAwICYmXHJcblx0XHRcdHRoaXMuX2Nvb3Jkcy5wdXNoKHsgdHlwZTogQ29vcmRUeXBlLkxpbmVhciwgeDogMCwgeTogMCB9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiBtdXN0IGJlIGNhbGxlZCBhZnRlciBhbnkgbWFuaXB1bGF0aW9uIChvciBhIHNlcmllcyBvZiBtYW5pcHVsYXRpb24pIG9mIHRoZSBzaGFwZVxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjYWxjdWxhdGUoKTogdm9pZCB7XHJcblx0XHQvLyByZXNldCBkYXRhXHJcblx0XHR0aGlzLl90b3RhbExlbmd0aCA9IDA7XHJcblx0XHR0aGlzLl9zZWdtZW50TGVuZ3Rocy5sZW5ndGggPSAwO1xyXG5cclxuXHRcdC8vIGNhbGN1bGF0ZSB0b3RhbExlbmd0aCBvZiBzaGFwZSBhbmRcclxuXHRcdHRoaXMuX2Nvb3Jkcy5mb3JFYWNoKChjb29yZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKGluZGV4ID4gMCkge1xyXG5cdFx0XHRcdGNvbnN0IGxlbmd0aENhbGN1bGF0b3IgPSBjb29yZExlbmd0aENhbGN1bGF0b3JzW2Nvb3JkLnR5cGUudG9TdHJpbmcoKV07XHJcblxyXG5cdFx0XHRcdGNvbnN0IHNlZ21lbnRMZW5ndGg6IG51bWJlciA9IGxlbmd0aENhbGN1bGF0b3IoXHJcblx0XHRcdFx0XHRjb29yZCxcclxuXHRcdFx0XHRcdHRoaXMuX2Nvb3Jkc1tpbmRleCAtIDFdXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGhpcy5fc2VnbWVudExlbmd0aHMucHVzaChzZWdtZW50TGVuZ3RoKTtcclxuXHRcdFx0XHR0aGlzLl90b3RhbExlbmd0aCArPSBzZWdtZW50TGVuZ3RoO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19