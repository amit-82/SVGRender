"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _input_validations = require("./helpers/input_validations");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Path = /*#__PURE__*/function () {
  function Path(element) {
    var _this = this;

    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Path);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "_instructions", void 0);

    _defineProperty(this, "closePath", function () {
      _this._instructions.push("z");

      return _this;
    });

    _defineProperty(this, "moveTo", function (x, y) {
      _this._instructions.push("M".concat(x, ",").concat(y));

      return _this;
    });

    _defineProperty(this, "lineTo", function (x, y) {
      _this._instructions.push("L".concat(x, ",").concat(y));

      return _this;
    });

    _defineProperty(this, "curve", function (ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY) {
      _this._instructions.push("C".concat(ctrl1X, ",").concat(ctrl1Y, ",").concat(ctrl2X, ",").concat(ctrl2Y, ",").concat(endX, ",").concat(endY));

      return _this;
    });

    _defineProperty(this, "bezier", function (ctrlX, ctrlY, endX, endY) {
      _this._instructions.push("S".concat(ctrlX, ",").concat(ctrlY, ",").concat(endX, ",").concat(endY));

      return _this;
    });

    _defineProperty(this, "quadratic", function (ctrlX, ctrlY, endX, endY, mirrorEndX, mirrorEndY) {
      _this._instructions.push("Q".concat(ctrlX, ",").concat(ctrlY, ",").concat(endX, ",").concat(endY));

      if ((0, _input_validations.allValuesAssigned)(mirrorEndX, mirrorEndY)) {
        _this._instructions.push("T".concat(mirrorEndX, ",").concat(mirrorEndY));
      }

      return _this;
    });

    this._instructions = instructions;
    this.element = element;
  }

  _createClass(Path, [{
    key: "getInstructions",
    value: function getInstructions() {
      return _toConsumableArray(this._instructions);
    }
  }, {
    key: "updateElement",
    value: function updateElement() {
      this.element && this.element.setAttribute("d", this._instructions.join(" "));
    }
  }]);

  return Path;
}();

exports["default"] = Path;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGgiLCJlbGVtZW50IiwiaW5zdHJ1Y3Rpb25zIiwiX2luc3RydWN0aW9ucyIsInB1c2giLCJ4IiwieSIsImN0cmwxWCIsImN0cmwxWSIsImN0cmwyWCIsImN0cmwyWSIsImVuZFgiLCJlbmRZIiwiY3RybFgiLCJjdHJsWSIsIm1pcnJvckVuZFgiLCJtaXJyb3JFbmRZIiwic2V0QXR0cmlidXRlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJO0FBSW5CLGdCQUFZQyxPQUFaLEVBQTJFO0FBQUE7O0FBQUEsUUFBckNDLFlBQXFDLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsdUNBY3hELFlBQVk7QUFDN0IsTUFBQSxLQUFJLENBQUNDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLEdBQXhCOztBQUNBLGFBQU8sS0FBUDtBQUNELEtBakIwRTs7QUFBQSxvQ0FtQjNELFVBQUNDLENBQUQsRUFBWUMsQ0FBWixFQUEwQjtBQUN4QyxNQUFBLEtBQUksQ0FBQ0gsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJDLENBQTVCLGNBQWlDQyxDQUFqQzs7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQXRCMEU7O0FBQUEsb0NBd0IzRCxVQUFDRCxDQUFELEVBQVlDLENBQVosRUFBMEI7QUFDeEMsTUFBQSxLQUFJLENBQUNILGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCQyxDQUE1QixjQUFpQ0MsQ0FBakM7O0FBQ0EsYUFBTyxLQUFQO0FBQ0QsS0EzQjBFOztBQUFBLG1DQTZCNUQsVUFDYkMsTUFEYSxFQUViQyxNQUZhLEVBR2JDLE1BSGEsRUFJYkMsTUFKYSxFQUtiQyxJQUxhLEVBTWJDLElBTmEsRUFPVjtBQUNILE1BQUEsS0FBSSxDQUFDVCxhQUFMLENBQW1CQyxJQUFuQixZQUNNRyxNQUROLGNBQ2dCQyxNQURoQixjQUMwQkMsTUFEMUIsY0FDb0NDLE1BRHBDLGNBQzhDQyxJQUQ5QyxjQUNzREMsSUFEdEQ7O0FBR0EsYUFBTyxLQUFQO0FBQ0QsS0F6QzBFOztBQUFBLG9DQTJDM0QsVUFDZEMsS0FEYyxFQUVkQyxLQUZjLEVBR2RILElBSGMsRUFJZEMsSUFKYyxFQUtYO0FBQ0gsTUFBQSxLQUFJLENBQUNULGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCUyxLQUE1QixjQUFxQ0MsS0FBckMsY0FBOENILElBQTlDLGNBQXNEQyxJQUF0RDs7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQW5EMEU7O0FBQUEsdUNBcUR4RCxVQUNqQkMsS0FEaUIsRUFFakJDLEtBRmlCLEVBR2pCSCxJQUhpQixFQUlqQkMsSUFKaUIsRUFLakJHLFVBTGlCLEVBTWpCQyxVQU5pQixFQU9kO0FBQ0gsTUFBQSxLQUFJLENBQUNiLGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCUyxLQUE1QixjQUFxQ0MsS0FBckMsY0FBOENILElBQTlDLGNBQXNEQyxJQUF0RDs7QUFDQSxVQUFJLDBDQUFrQkcsVUFBbEIsRUFBOEJDLFVBQTlCLENBQUosRUFBK0M7QUFDN0MsUUFBQSxLQUFJLENBQUNiLGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCVyxVQUE1QixjQUEwQ0MsVUFBMUM7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRCxLQWxFMEU7O0FBQ3pFLFNBQUtiLGFBQUwsR0FBcUJELFlBQXJCO0FBQ0EsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7c0NBRTBDO0FBQ3pDLGdDQUFXLEtBQUtFLGFBQWhCO0FBQ0Q7OztvQ0FFc0I7QUFDckIsV0FBS0YsT0FBTCxJQUNFLEtBQUtBLE9BQUwsQ0FBYWdCLFlBQWIsQ0FBMEIsR0FBMUIsRUFBK0IsS0FBS2QsYUFBTCxDQUFtQmUsSUFBbkIsQ0FBd0IsR0FBeEIsQ0FBL0IsQ0FERjtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsVmFsdWVzQXNzaWduZWQgfSBmcm9tIFwiLi9oZWxwZXJzL2lucHV0X3ZhbGlkYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICBwcml2YXRlIGVsZW1lbnQ6IFNWR1BhdGhFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2luc3RydWN0aW9uczogc3RyaW5nT3JOdW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudD86IFNWR1BhdGhFbGVtZW50LCBpbnN0cnVjdGlvbnM6IHN0cmluZ09yTnVtYmVyW10gPSBbXSkge1xyXG4gICAgdGhpcy5faW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25zO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJbnN0cnVjdGlvbnMoKTogc3RyaW5nT3JOdW1iZXJbXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX2luc3RydWN0aW9uc107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZWxlbWVudCAmJlxyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZFwiLCB0aGlzLl9pbnN0cnVjdGlvbnMuam9pbihcIiBcIikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlUGF0aCA9ICgpOiBQYXRoID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFwielwiKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8gPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBNJHt4fSwke3l9YCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBwdWJsaWMgbGluZVRvID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgTCR7eH0sJHt5fWApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGN1cnZlID0gKFxyXG4gICAgY3RybDFYOiBudW1iZXIsXHJcbiAgICBjdHJsMVk6IG51bWJlcixcclxuICAgIGN0cmwyWDogbnVtYmVyLFxyXG4gICAgY3RybDJZOiBudW1iZXIsXHJcbiAgICBlbmRYOiBudW1iZXIsXHJcbiAgICBlbmRZOiBudW1iZXJcclxuICApID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFxyXG4gICAgICBgQyR7Y3RybDFYfSwke2N0cmwxWX0sJHtjdHJsMlh9LCR7Y3RybDJZfSwke2VuZFh9LCR7ZW5kWX1gXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGJlemllciA9IChcclxuICAgIGN0cmxYOiBudW1iZXIsXHJcbiAgICBjdHJsWTogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyXHJcbiAgKSA9PiB7XHJcbiAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgUyR7Y3RybFh9LCR7Y3RybFl9LCR7ZW5kWH0sJHtlbmRZfWApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHF1YWRyYXRpYyA9IChcclxuICAgIGN0cmxYOiBudW1iZXIsXHJcbiAgICBjdHJsWTogbnVtYmVyLFxyXG4gICAgZW5kWDogbnVtYmVyLFxyXG4gICAgZW5kWTogbnVtYmVyLFxyXG4gICAgbWlycm9yRW5kWD86IG51bWJlcixcclxuICAgIG1pcnJvckVuZFk/OiBudW1iZXJcclxuICApID0+IHtcclxuICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBRJHtjdHJsWH0sJHtjdHJsWX0sJHtlbmRYfSwke2VuZFl9YCk7XHJcbiAgICBpZiAoYWxsVmFsdWVzQXNzaWduZWQobWlycm9yRW5kWCwgbWlycm9yRW5kWSkpIHtcclxuICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYFQke21pcnJvckVuZFh9LCR7bWlycm9yRW5kWX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbn1cclxuIl19