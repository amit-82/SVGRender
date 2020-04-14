"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allValuesAssigned = exports.valueAssigned = void 0;

var _object_utils = require("./object_utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var assignedTests = (0, _object_utils.createProxy)({
  "object": function object(val) {
    return val !== null;
  },
  "number": function number(val) {
    return !isNaN(val);
  },
  "undefined": function undefined() {
    return false;
  }
}, function () {
  return true;
});
/**
 * @description test to see the value *IS NOT* null / undefined / NaN
 * @param val 
 */

var valueAssigned = function valueAssigned(val) {
  return assignedTests[_typeof(val)](val);
};
/**
 * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned.
 * @see {@link valueAssigned}
 * @param args 
 */


exports.valueAssigned = valueAssigned;

var allValuesAssigned = function allValuesAssigned() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.every(valueAssigned);
};

exports.allValuesAssigned = allValuesAssigned;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2lucHV0X3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbImFzc2lnbmVkVGVzdHMiLCJ2YWwiLCJpc05hTiIsInZhbHVlQXNzaWduZWQiLCJhbGxWYWx1ZXNBc3NpZ25lZCIsImFyZ3MiLCJldmVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLCtCQUFzQjtBQUN4QyxZQUFVLGdCQUFDQyxHQUFEO0FBQUEsV0FBYUEsR0FBRyxLQUFLLElBQXJCO0FBQUEsR0FEOEI7QUFFeEMsWUFBVSxnQkFBQ0EsR0FBRDtBQUFBLFdBQWdCLENBQUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUF0QjtBQUFBLEdBRjhCO0FBR3hDLGVBQWE7QUFBQSxXQUFNLEtBQU47QUFBQTtBQUgyQixDQUF0QixFQUluQjtBQUFBLFNBQU0sSUFBTjtBQUFBLENBSm1CLENBQXRCO0FBTUE7Ozs7O0FBSUEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixHQUFEO0FBQUEsU0FBYUQsYUFBYSxTQUFRQyxHQUFSLEVBQWIsQ0FBMEJBLEdBQTFCLENBQWI7QUFBQSxDQUF0QjtBQUVBOzs7Ozs7Ozs7QUFLQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsb0NBQUlDLElBQUo7QUFBSUEsSUFBQUEsSUFBSjtBQUFBOztBQUFBLFNBQW1CQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsYUFBWCxDQUFuQjtBQUFBLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tIFwiLi9vYmplY3RfdXRpbHNcIjtcclxuXHJcbmNvbnN0IGFzc2lnbmVkVGVzdHMgPSBjcmVhdGVQcm94eTxGdW5jdGlvbj4oe1xyXG4gICAgXCJvYmplY3RcIjogKHZhbDphbnkpID0+IHZhbCAhPT0gbnVsbCxcclxuICAgIFwibnVtYmVyXCI6ICh2YWw6bnVtYmVyKSA9PiAhaXNOYU4odmFsKSxcclxuICAgIFwidW5kZWZpbmVkXCI6ICgpID0+IGZhbHNlXHJcbn0sICgpID0+IHRydWUpXHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIHRlc3QgdG8gc2VlIHRoZSB2YWx1ZSAqSVMgTk9UKiBudWxsIC8gdW5kZWZpbmVkIC8gTmFOXHJcbiAqIEBwYXJhbSB2YWwgXHJcbiAqL1xyXG5jb25zdCB2YWx1ZUFzc2lnbmVkID0gKHZhbDphbnkpID0+IGFzc2lnbmVkVGVzdHNbdHlwZW9mIHZhbF0odmFsKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY2lwcmlvdG4gY2hlY2sgbm9uZSBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIGlzIG51bGwgLyB1bmRlZmluZWQgLyBOYU4uIHVzZXMgdmFsdWVBc3NpZ25lZC5cclxuICogQHNlZSB7QGxpbmsgdmFsdWVBc3NpZ25lZH1cclxuICogQHBhcmFtIGFyZ3MgXHJcbiAqL1xyXG5jb25zdCBhbGxWYWx1ZXNBc3NpZ25lZCA9ICguLi5hcmdzOmFueVtdKSA9PiBhcmdzLmV2ZXJ5KHZhbHVlQXNzaWduZWQpO1xyXG5cclxuZXhwb3J0IHt2YWx1ZUFzc2lnbmVkLCBhbGxWYWx1ZXNBc3NpZ25lZH07Il19