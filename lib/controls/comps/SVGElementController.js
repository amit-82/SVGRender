"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interfaces = require("./interfaces");

var _coords_utils = require("./utils/coords_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var idCounter = 0;

var SVGElementController = /*#__PURE__*/function () {
  function SVGElementController() {
    _classCallCheck(this, SVGElementController);

    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "_coords", []);

    _defineProperty(this, "_segmentLengths", []);

    _defineProperty(this, "_totalLength", 0);

    this._id = ++idCounter;
  }

  _createClass(SVGElementController, [{
    key: "getCoords",
    value: function getCoords() {
      return this._coords.map(function (coord) {
        return _objectSpread({}, coord);
      });
    }
  }, {
    key: "appendCoord",
    value: function appendCoord(coord) {
      var isMoveTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!isMoveTo) {
        this.validateOrInsertFirstCoordZeroZero();
      }

      this._coords.push(coord);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJTVkdFbGVtZW50Q29udHJvbGxlciIsIl9pZCIsIl9jb29yZHMiLCJtYXAiLCJjb29yZCIsImlzTW92ZVRvIiwidmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybyIsInB1c2giLCJsZW5ndGgiLCJ0eXBlIiwiQ29vcmRUeXBlIiwiTGluZWFyIiwieCIsInkiLCJfdG90YWxMZW5ndGgiLCJfc2VnbWVudExlbmd0aHMiLCJmb3JFYWNoIiwiaW5kZXgiLCJsZW5ndGhDYWxjdWxhdG9yIiwiY29vcmRMZW5ndGhDYWxjdWxhdG9ycyIsInRvU3RyaW5nIiwic2VnbWVudExlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVMsR0FBRyxDQUFoQjs7SUFFOEJDLG9CO0FBTzdCLGtDQUFjO0FBQUE7O0FBQUE7O0FBQUEscUNBSmEsRUFJYjs7QUFBQSw2Q0FIc0IsRUFHdEI7O0FBQUEsMENBRmlCLENBRWpCOztBQUNiLFNBQUtDLEdBQUwsR0FBVyxFQUFFRixTQUFiO0FBQ0E7Ozs7Z0NBYzJCO0FBQzNCLGFBQU8sS0FBS0csT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxpQ0FBaUJBLEtBQWpCO0FBQUEsT0FBakIsQ0FBUDtBQUNBOzs7Z0NBRXFCQSxLLEVBQXlDO0FBQUEsVUFBM0JDLFFBQTJCLHVFQUFQLEtBQU87O0FBQzlELFVBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2QsYUFBS0Msa0NBQUw7QUFDQTs7QUFDRCxXQUFLSixPQUFMLENBQWFLLElBQWIsQ0FBa0JILEtBQWxCO0FBQ0E7Ozt5REFFOEM7QUFDOUMsV0FBS0YsT0FBTCxDQUFhTSxNQUFiLEtBQXdCLENBQXhCLElBQ0MsS0FBS04sT0FBTCxDQUFhSyxJQUFiLENBQWtCO0FBQUVFLFFBQUFBLElBQUksRUFBRUMsc0JBQVVDLE1BQWxCO0FBQTBCQyxRQUFBQSxDQUFDLEVBQUUsQ0FBN0I7QUFBZ0NDLFFBQUFBLENBQUMsRUFBRTtBQUFuQyxPQUFsQixDQUREO0FBRUE7QUFFRDs7Ozs7O2dDQUc0QjtBQUFBOztBQUMzQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxXQUFLQyxlQUFMLENBQXFCUCxNQUFyQixHQUE4QixDQUE5QixDQUgyQixDQUszQjs7QUFDQSxXQUFLTixPQUFMLENBQWFjLE9BQWIsQ0FBcUIsVUFBQ1osS0FBRCxFQUFRYSxLQUFSLEVBQWtCO0FBQ3RDLFlBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDZCxjQUFNQyxnQkFBZ0IsR0FBR0MscUNBQXVCZixLQUFLLENBQUNLLElBQU4sQ0FBV1csUUFBWCxFQUF2QixDQUF6Qjs7QUFFQSxjQUFNQyxhQUFxQixHQUFHSCxnQkFBZ0IsQ0FDN0NkLEtBRDZDLEVBRTdDLEtBQUksQ0FBQ0YsT0FBTCxDQUFhZSxLQUFLLEdBQUcsQ0FBckIsQ0FGNkMsQ0FBOUM7O0FBS0EsVUFBQSxLQUFJLENBQUNGLGVBQUwsQ0FBcUJSLElBQXJCLENBQTBCYyxhQUExQjs7QUFDQSxVQUFBLEtBQUksQ0FBQ1AsWUFBTCxJQUFxQk8sYUFBckI7QUFDQTtBQUNELE9BWkQ7QUFhQTs7O3dCQWxEUTtBQUNSLGFBQU8sS0FBS3BCLEdBQVo7QUFDQTs7O3dCQUU4QjtBQUM5QixhQUFPLEtBQUtjLGVBQVo7QUFDQTs7O3dCQUUyQjtBQUMzQixhQUFPLEtBQUtELFlBQVo7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb3JkLCBDb29yZFR5cGUgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IGNvb3JkTGVuZ3RoQ2FsY3VsYXRvcnMgfSBmcm9tIFwiLi91dGlscy9jb29yZHNfdXRpbHNcIjtcclxuXHJcbmxldCBpZENvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU1ZHRWxlbWVudENvbnRyb2xsZXIge1xyXG5cdHByaXZhdGUgX2lkOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgX2Nvb3JkczogQ29vcmRbXSA9IFtdO1xyXG5cdHByaXZhdGUgX3NlZ21lbnRMZW5ndGhzOiBudW1iZXJbXSA9IFtdO1xyXG5cdHByaXZhdGUgX3RvdGFsTGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2lkID0gKytpZENvdW50ZXI7XHJcblx0fVxyXG5cclxuXHRnZXQgaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faWQ7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0IHNlZ21lbnRMZW5ndGhzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlZ21lbnRMZW5ndGhzO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldCB0b3RhbExlbmd0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b3RhbExlbmd0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRDb29yZHMoKTogQ29vcmRbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29vcmRzLm1hcCgoY29vcmQpID0+ICh7IC4uLmNvb3JkIH0pKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhcHBlbmRDb29yZChjb29yZDogQ29vcmQsIGlzTW92ZVRvOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHRcdGlmICghaXNNb3ZlVG8pIHtcclxuXHRcdFx0dGhpcy52YWxpZGF0ZU9ySW5zZXJ0Rmlyc3RDb29yZFplcm9aZXJvKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9jb29yZHMucHVzaChjb29yZCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgdmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybygpIHtcclxuXHRcdHRoaXMuX2Nvb3Jkcy5sZW5ndGggPT09IDAgJiZcclxuXHRcdFx0dGhpcy5fY29vcmRzLnB1c2goeyB0eXBlOiBDb29yZFR5cGUuTGluZWFyLCB4OiAwLCB5OiAwIH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIG11c3QgYmUgY2FsbGVkIGFmdGVyIGFueSBtYW5pcHVsYXRpb24gKG9yIGEgc2VyaWVzIG9mIG1hbmlwdWxhdGlvbikgb2YgdGhlIHNoYXBlXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGN1bGF0ZSgpOiB2b2lkIHtcclxuXHRcdC8vIHJlc2V0IGRhdGFcclxuXHRcdHRoaXMuX3RvdGFsTGVuZ3RoID0gMDtcclxuXHRcdHRoaXMuX3NlZ21lbnRMZW5ndGhzLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIHRvdGFsTGVuZ3RoIG9mIHNoYXBlIGFuZFxyXG5cdFx0dGhpcy5fY29vcmRzLmZvckVhY2goKGNvb3JkLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAoaW5kZXggPiAwKSB7XHJcblx0XHRcdFx0Y29uc3QgbGVuZ3RoQ2FsY3VsYXRvciA9IGNvb3JkTGVuZ3RoQ2FsY3VsYXRvcnNbY29vcmQudHlwZS50b1N0cmluZygpXTtcclxuXHJcblx0XHRcdFx0Y29uc3Qgc2VnbWVudExlbmd0aDogbnVtYmVyID0gbGVuZ3RoQ2FsY3VsYXRvcihcclxuXHRcdFx0XHRcdGNvb3JkLFxyXG5cdFx0XHRcdFx0dGhpcy5fY29vcmRzW2luZGV4IC0gMV1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9zZWdtZW50TGVuZ3Rocy5wdXNoKHNlZ21lbnRMZW5ndGgpO1xyXG5cdFx0XHRcdHRoaXMuX3RvdGFsTGVuZ3RoICs9IHNlZ21lbnRMZW5ndGg7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=