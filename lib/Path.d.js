"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Path = function Path() {
  _classCallCheck(this, Path);

  _defineProperty(this, "element", void 0);

  _defineProperty(this, "_instructions", void 0);

  _defineProperty(this, "closePath", void 0);

  _defineProperty(this, "moveTo", void 0);

  _defineProperty(this, "lineTo", void 0);

  _defineProperty(this, "curve", void 0);

  _defineProperty(this, "bezier", void 0);

  _defineProperty(this, "quadratic", void 0);
};

exports["default"] = Path;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXRoLmQudHMiXSwibmFtZXMiOlsiUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBcUJBLEkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICAgIHByaXZhdGUgZWxlbWVudDtcclxuICAgIHByaXZhdGUgX2luc3RydWN0aW9ucztcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ/OiBTVkdQYXRoRWxlbWVudCwgaW5zdHJ1Y3Rpb25zPzogc3RyaW5nT3JOdW1iZXJbXSk7XHJcbiAgICBnZXRJbnN0cnVjdGlvbnMoKTogc3RyaW5nT3JOdW1iZXJbXTtcclxuICAgIHVwZGF0ZUVsZW1lbnQoKTogdm9pZDtcclxuICAgIGNsb3NlUGF0aDogKCkgPT4gUGF0aDtcclxuICAgIG1vdmVUbzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB0aGlzO1xyXG4gICAgbGluZVRvOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHRoaXM7XHJcbiAgICBjdXJ2ZTogKGN0cmwxWDogbnVtYmVyLCBjdHJsMVk6IG51bWJlciwgY3RybDJYOiBudW1iZXIsIGN0cmwyWTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcikgPT4gdGhpcztcclxuICAgIGJlemllcjogKGN0cmxYOiBudW1iZXIsIGN0cmxZOiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyKSA9PiB0aGlzO1xyXG4gICAgcXVhZHJhdGljOiAoY3RybFg6IG51bWJlciwgY3RybFk6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIsIG1pcnJvckVuZFg/OiBudW1iZXIgfCB1bmRlZmluZWQsIG1pcnJvckVuZFk/OiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHRoaXM7XHJcbn1cclxuIl19