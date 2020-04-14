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
    });

    _defineProperty(this, "bezier", function (ctrlX, ctrlY, endX, endY) {
      _this._instructions.push("S".concat(ctrlX, ",").concat(ctrlY, ",").concat(endX, ",").concat(endY));
    });

    _defineProperty(this, "quadratic", function (ctrlX, ctrlY, endX, endY, mirrorEndX, mirrorEndY) {
      _this._instructions.push("Q".concat(ctrlX, ",").concat(ctrlY, ",").concat(endX, ",").concat(endY));

      if ((0, _input_validations.allValuesAssigned)(mirrorEndX, mirrorEndY)) {
        _this._instructions.push("T".concat(mirrorEndX, ",").concat(mirrorEndY));
      }
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
      this.element && this.element.setAttribute("d", this._instructions.join(' '));
    }
  }]);

  return Path;
}();

exports["default"] = Path;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGgiLCJlbGVtZW50IiwiaW5zdHJ1Y3Rpb25zIiwiX2luc3RydWN0aW9ucyIsInB1c2giLCJ4IiwieSIsImN0cmwxWCIsImN0cmwxWSIsImN0cmwyWCIsImN0cmwyWSIsImVuZFgiLCJlbmRZIiwiY3RybFgiLCJjdHJsWSIsIm1pcnJvckVuZFgiLCJtaXJyb3JFbmRZIiwic2V0QXR0cmlidXRlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJO0FBS2pCLGdCQUFZQyxPQUFaLEVBQTBFO0FBQUE7O0FBQUEsUUFBckNDLFlBQXFDLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsdUNBYXZELFlBQVc7QUFDMUIsTUFBQSxLQUFJLENBQUNDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLEdBQXhCOztBQUNBLGFBQU8sS0FBUDtBQUNILEtBaEJ5RTs7QUFBQSxvQ0FrQjFELFVBQUNDLENBQUQsRUFBV0MsQ0FBWCxFQUF3QjtBQUNwQyxNQUFBLEtBQUksQ0FBQ0gsYUFBTCxDQUFtQkMsSUFBbkIsWUFBNEJDLENBQTVCLGNBQWlDQyxDQUFqQzs7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQXJCeUU7O0FBQUEsb0NBdUIxRCxVQUFDRCxDQUFELEVBQVdDLENBQVgsRUFBd0I7QUFDcEMsTUFBQSxLQUFJLENBQUNILGFBQUwsQ0FBbUJDLElBQW5CLFlBQTRCQyxDQUE1QixjQUFpQ0MsQ0FBakM7O0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0ExQnlFOztBQUFBLG1DQTRCM0QsVUFBQ0MsTUFBRCxFQUFnQkMsTUFBaEIsRUFBK0JDLE1BQS9CLEVBQThDQyxNQUE5QyxFQUE2REMsSUFBN0QsRUFBMEVDLElBQTFFLEVBQTBGO0FBQ3JHLE1BQUEsS0FBSSxDQUFDVCxhQUFMLENBQW1CQyxJQUFuQixZQUE0QkcsTUFBNUIsY0FBc0NDLE1BQXRDLGNBQWdEQyxNQUFoRCxjQUEwREMsTUFBMUQsY0FBb0VDLElBQXBFLGNBQTRFQyxJQUE1RTtBQUNILEtBOUJ5RTs7QUFBQSxvQ0FnQzFELFVBQUNDLEtBQUQsRUFBZUMsS0FBZixFQUE2QkgsSUFBN0IsRUFBMENDLElBQTFDLEVBQTBEO0FBQ3RFLE1BQUEsS0FBSSxDQUFDVCxhQUFMLENBQW1CQyxJQUFuQixZQUE0QlMsS0FBNUIsY0FBcUNDLEtBQXJDLGNBQThDSCxJQUE5QyxjQUFzREMsSUFBdEQ7QUFDSCxLQWxDeUU7O0FBQUEsdUNBb0N2RCxVQUFDQyxLQUFELEVBQWVDLEtBQWYsRUFBNkJILElBQTdCLEVBQTBDQyxJQUExQyxFQUF1REcsVUFBdkQsRUFBMkVDLFVBQTNFLEVBQWtHO0FBQ2pILE1BQUEsS0FBSSxDQUFDYixhQUFMLENBQW1CQyxJQUFuQixZQUE0QlMsS0FBNUIsY0FBcUNDLEtBQXJDLGNBQThDSCxJQUE5QyxjQUFzREMsSUFBdEQ7O0FBQ0EsVUFBSSwwQ0FBa0JHLFVBQWxCLEVBQThCQyxVQUE5QixDQUFKLEVBQStDO0FBQzNDLFFBQUEsS0FBSSxDQUFDYixhQUFMLENBQW1CQyxJQUFuQixZQUE0QlcsVUFBNUIsY0FBMENDLFVBQTFDO0FBQ0g7QUFDSixLQXpDeUU7O0FBQ3RFLFNBQUtiLGFBQUwsR0FBcUJELFlBQXJCO0FBQ0EsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0g7Ozs7c0NBRTBDO0FBQ3ZDLGdDQUFXLEtBQUtFLGFBQWhCO0FBQ0g7OztvQ0FFc0I7QUFDbkIsV0FBS0YsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFnQixZQUFiLENBQTBCLEdBQTFCLEVBQStCLEtBQUtkLGFBQUwsQ0FBbUJlLElBQW5CLENBQXdCLEdBQXhCLENBQS9CLENBQWhCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxWYWx1ZXNBc3NpZ25lZCB9IGZyb20gXCIuL2hlbHBlcnMvaW5wdXRfdmFsaWRhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6U1ZHUGF0aEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9pbnN0cnVjdGlvbnM6c3RyaW5nT3JOdW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50PzpTVkdQYXRoRWxlbWVudCwgaW5zdHJ1Y3Rpb25zOiBzdHJpbmdPck51bWJlcltdID0gW10pIHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvbnMgPSBpbnN0cnVjdGlvbnM7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5zdHJ1Y3Rpb25zKCk6IHN0cmluZ09yTnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5faW5zdHJ1Y3Rpb25zXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRcIiwgdGhpcy5faW5zdHJ1Y3Rpb25zLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlUGF0aCA9ICgpOlBhdGggPT4ge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKFwielwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvID0gKHg6bnVtYmVyLCB5Om51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBNJHt4fSwke3l9YCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpbmVUbyA9ICh4Om51bWJlciwgeTpudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgTCR7eH0sJHt5fWApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjdXJ2ZSA9IChjdHJsMVg6bnVtYmVyLCBjdHJsMVk6bnVtYmVyLCBjdHJsMlg6bnVtYmVyLCBjdHJsMlk6bnVtYmVyLCBlbmRYOm51bWJlciwgZW5kWTpudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLl9pbnN0cnVjdGlvbnMucHVzaChgQyR7Y3RybDFYfSwke2N0cmwxWX0sJHtjdHJsMlh9LCR7Y3RybDJZfSwke2VuZFh9LCR7ZW5kWX1gKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGJlemllciA9IChjdHJsWDpudW1iZXIsIGN0cmxZOm51bWJlciwgZW5kWDpudW1iZXIsIGVuZFk6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faW5zdHJ1Y3Rpb25zLnB1c2goYFMke2N0cmxYfSwke2N0cmxZfSwke2VuZFh9LCR7ZW5kWX1gKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHF1YWRyYXRpYyA9IChjdHJsWDpudW1iZXIsIGN0cmxZOm51bWJlciwgZW5kWDpudW1iZXIsIGVuZFk6bnVtYmVyLCBtaXJyb3JFbmRYPzpudW1iZXIsIG1pcnJvckVuZFk/Om51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBRJHtjdHJsWH0sJHtjdHJsWX0sJHtlbmRYfSwke2VuZFl9YCk7XHJcbiAgICAgICAgaWYgKGFsbFZhbHVlc0Fzc2lnbmVkKG1pcnJvckVuZFgsIG1pcnJvckVuZFkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RydWN0aW9ucy5wdXNoKGBUJHttaXJyb3JFbmRYfSwke21pcnJvckVuZFl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=