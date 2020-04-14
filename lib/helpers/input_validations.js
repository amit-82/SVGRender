"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = exports.allArrayMembersAssigned = exports.allValuesAssigned = exports.valueAssigned = void 0;

var _object_utils = require("./object_utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var assignedTests = (0, _object_utils.createProxy)({
  object: function object(val) {
    return val !== null;
  },
  number: function number(val) {
    return !isNaN(val);
  },
  undefined: function undefined() {
    return false;
  }
}, function () {
  return true;
});
var isEmptyTests = (0, _object_utils.createProxy)({
  string: function string(val) {
    return val.length === 0;
  },
  number: function number(val) {
    return isNaN(val);
  },
  undefined: function undefined() {
    return true;
  },
  symbol: function symbol() {
    return false;
  },
  object: function object(val) {
    if (val === null) {
      return true;
    } else if (Array.isArray(val)) {
      return val.length === 0;
    }

    return Object.keys(val).length === 0;
  }
},
/* istanbul ignore next */
function (val) {
  throw "can't check if ".concat(val, " is empty. validation test for type ").concat(_typeof(val), " is not defined (?!)");
});
/**
 * @description test to see the value *IS NOT* null / undefined / NaN
 * @param val
 * @returns boolean
 */

var valueAssigned = function valueAssigned(val) {
  return assignedTests[_typeof(val)](val);
};
/**
 * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned. for validating members of array, use allArrayMembersAssigned
 * @see {@link valueAssigned}
 * @see {@link allArrayMembersAssigned}
 * @param args
 * @returns boolean
 */


exports.valueAssigned = valueAssigned;

var allValuesAssigned = function allValuesAssigned() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.every(valueAssigned);
};
/**
 * @description check all members of the provided array are assigned. uses valueAssigned.
 * @param array
 * @see {@link valueAssigned}
 * @returns boolean
 */


exports.allValuesAssigned = allValuesAssigned;

var allArrayMembersAssigned = function allArrayMembersAssigned(array) {
  return array.every(valueAssigned);
};
/**
 * @description checks in the value is empty ({}, [], NaN, null, undefined)
 * @param val
 * @returns boolean
 */


exports.allArrayMembersAssigned = allArrayMembersAssigned;

var isEmpty = function isEmpty(val) {
  return isEmptyTests[_typeof(val)](val);
};

exports.isEmpty = isEmpty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2lucHV0X3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbImFzc2lnbmVkVGVzdHMiLCJvYmplY3QiLCJ2YWwiLCJudW1iZXIiLCJpc05hTiIsInVuZGVmaW5lZCIsImlzRW1wdHlUZXN0cyIsInN0cmluZyIsImxlbmd0aCIsInN5bWJvbCIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZUFzc2lnbmVkIiwiYWxsVmFsdWVzQXNzaWduZWQiLCJhcmdzIiwiZXZlcnkiLCJhbGxBcnJheU1lbWJlcnNBc3NpZ25lZCIsImFycmF5IiwiaXNFbXB0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLCtCQUNyQjtBQUNDQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLEdBQUQ7QUFBQSxXQUFjQSxHQUFHLEtBQUssSUFBdEI7QUFBQSxHQURUO0FBRUNDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0QsR0FBRDtBQUFBLFdBQWlCLENBQUNFLEtBQUssQ0FBQ0YsR0FBRCxDQUF2QjtBQUFBLEdBRlQ7QUFHQ0csRUFBQUEsU0FBUyxFQUFFO0FBQUEsV0FBTSxLQUFOO0FBQUE7QUFIWixDQURxQixFQU1yQjtBQUFBLFNBQU0sSUFBTjtBQUFBLENBTnFCLENBQXRCO0FBU0EsSUFBTUMsWUFBWSxHQUFHLCtCQUNwQjtBQUNDQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQUNMLEdBQUQ7QUFBQSxXQUFpQkEsR0FBRyxDQUFDTSxNQUFKLEtBQWUsQ0FBaEM7QUFBQSxHQURUO0FBRUNMLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0QsR0FBRDtBQUFBLFdBQWlCRSxLQUFLLENBQUNGLEdBQUQsQ0FBdEI7QUFBQSxHQUZUO0FBR0NHLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBSFo7QUFJQ0ksRUFBQUEsTUFBTSxFQUFFO0FBQUEsV0FBTSxLQUFOO0FBQUEsR0FKVDtBQUtDUixFQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLEdBQUQsRUFBaUI7QUFDeEIsUUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDakIsYUFBTyxJQUFQO0FBQ0EsS0FGRCxNQUVPLElBQUlRLEtBQUssQ0FBQ0MsT0FBTixDQUFjVCxHQUFkLENBQUosRUFBd0I7QUFDOUIsYUFBT0EsR0FBRyxDQUFDTSxNQUFKLEtBQWUsQ0FBdEI7QUFDQTs7QUFDRCxXQUFPSSxNQUFNLENBQUNDLElBQVAsQ0FBWVgsR0FBWixFQUFpQk0sTUFBakIsS0FBNEIsQ0FBbkM7QUFDQTtBQVpGLENBRG9CO0FBZXBCO0FBQ0EsVUFBQ04sR0FBRCxFQUFjO0FBQ2IsaUNBQXdCQSxHQUF4Qix5REFBeUVBLEdBQXpFO0FBQ0EsQ0FsQm1CLENBQXJCO0FBcUJBOzs7Ozs7QUFLQSxJQUFNWSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNaLEdBQUQ7QUFBQSxTQUFjRixhQUFhLFNBQVFFLEdBQVIsRUFBYixDQUEwQkEsR0FBMUIsQ0FBZDtBQUFBLENBQXRCO0FBRUE7Ozs7Ozs7Ozs7O0FBT0EsSUFBTWEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLG9DQUFJQyxJQUFKO0FBQUlBLElBQUFBLElBQUo7QUFBQTs7QUFBQSxTQUFvQkEsSUFBSSxDQUFDQyxLQUFMLENBQVdILGFBQVgsQ0FBcEI7QUFBQSxDQUExQjtBQUVBOzs7Ozs7Ozs7O0FBTUEsSUFBTUksdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxLQUFEO0FBQUEsU0FBa0JBLEtBQUssQ0FBQ0YsS0FBTixDQUFZSCxhQUFaLENBQWxCO0FBQUEsQ0FBaEM7QUFFQTs7Ozs7Ozs7O0FBS0EsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2xCLEdBQUQ7QUFBQSxTQUFjSSxZQUFZLFNBQVFKLEdBQVIsRUFBWixDQUF5QkEsR0FBekIsQ0FBZDtBQUFBLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tIFwiLi9vYmplY3RfdXRpbHNcIjtcclxuXHJcbmNvbnN0IGFzc2lnbmVkVGVzdHMgPSBjcmVhdGVQcm94eTxGdW5jdGlvbj4oXHJcblx0e1xyXG5cdFx0b2JqZWN0OiAodmFsOiBhbnkpID0+IHZhbCAhPT0gbnVsbCxcclxuXHRcdG51bWJlcjogKHZhbDogbnVtYmVyKSA9PiAhaXNOYU4odmFsKSxcclxuXHRcdHVuZGVmaW5lZDogKCkgPT4gZmFsc2UsXHJcblx0fSxcclxuXHQoKSA9PiB0cnVlXHJcbik7XHJcblxyXG5jb25zdCBpc0VtcHR5VGVzdHMgPSBjcmVhdGVQcm94eTxGdW5jdGlvbj4oXHJcblx0e1xyXG5cdFx0c3RyaW5nOiAodmFsOiBzdHJpbmcpID0+IHZhbC5sZW5ndGggPT09IDAsXHJcblx0XHRudW1iZXI6ICh2YWw6IG51bWJlcikgPT4gaXNOYU4odmFsKSxcclxuXHRcdHVuZGVmaW5lZDogKCkgPT4gdHJ1ZSxcclxuXHRcdHN5bWJvbDogKCkgPT4gZmFsc2UsXHJcblx0XHRvYmplY3Q6ICh2YWw6IG9iamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAodmFsID09PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbC5sZW5ndGggPT09IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcblx0KHZhbDogYW55KSA9PiB7XHJcblx0XHR0aHJvdyBgY2FuJ3QgY2hlY2sgaWYgJHt2YWx9IGlzIGVtcHR5LiB2YWxpZGF0aW9uIHRlc3QgZm9yIHR5cGUgJHt0eXBlb2YgdmFsfSBpcyBub3QgZGVmaW5lZCAoPyEpYDtcclxuXHR9XHJcbik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIHRlc3QgdG8gc2VlIHRoZSB2YWx1ZSAqSVMgTk9UKiBudWxsIC8gdW5kZWZpbmVkIC8gTmFOXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuY29uc3QgdmFsdWVBc3NpZ25lZCA9ICh2YWw6IGFueSkgPT4gYXNzaWduZWRUZXN0c1t0eXBlb2YgdmFsXSh2YWwpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjaXByaW90biBjaGVjayBub25lIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudHMgaXMgbnVsbCAvIHVuZGVmaW5lZCAvIE5hTi4gdXNlcyB2YWx1ZUFzc2lnbmVkLiBmb3IgdmFsaWRhdGluZyBtZW1iZXJzIG9mIGFycmF5LCB1c2UgYWxsQXJyYXlNZW1iZXJzQXNzaWduZWRcclxuICogQHNlZSB7QGxpbmsgdmFsdWVBc3NpZ25lZH1cclxuICogQHNlZSB7QGxpbmsgYWxsQXJyYXlNZW1iZXJzQXNzaWduZWR9XHJcbiAqIEBwYXJhbSBhcmdzXHJcbiAqIEByZXR1cm5zIGJvb2xlYW5cclxuICovXHJcbmNvbnN0IGFsbFZhbHVlc0Fzc2lnbmVkID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhcmdzLmV2ZXJ5KHZhbHVlQXNzaWduZWQpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBjaGVjayBhbGwgbWVtYmVycyBvZiB0aGUgcHJvdmlkZWQgYXJyYXkgYXJlIGFzc2lnbmVkLiB1c2VzIHZhbHVlQXNzaWduZWQuXHJcbiAqIEBwYXJhbSBhcnJheVxyXG4gKiBAc2VlIHtAbGluayB2YWx1ZUFzc2lnbmVkfVxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5jb25zdCBhbGxBcnJheU1lbWJlcnNBc3NpZ25lZCA9IChhcnJheTogYW55W10pID0+IGFycmF5LmV2ZXJ5KHZhbHVlQXNzaWduZWQpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgaW4gdGhlIHZhbHVlIGlzIGVtcHR5ICh7fSwgW10sIE5hTiwgbnVsbCwgdW5kZWZpbmVkKVxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIGJvb2xlYW5cclxuICovXHJcbmNvbnN0IGlzRW1wdHkgPSAodmFsOiBhbnkpID0+IGlzRW1wdHlUZXN0c1t0eXBlb2YgdmFsXSh2YWwpO1xyXG5cclxuZXhwb3J0IHsgdmFsdWVBc3NpZ25lZCwgYWxsVmFsdWVzQXNzaWduZWQsIGFsbEFycmF5TWVtYmVyc0Fzc2lnbmVkLCBpc0VtcHR5IH07XHJcbiJdfQ==