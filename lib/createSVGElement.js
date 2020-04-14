"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createSVGElement;

var _object_utils = require("./helpers/object_utils");

var _function_utils = require("./helpers/function_utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getParentFunctionByType = (0, _object_utils.createProxy)({
  "string": function string(selector) {
    return document.querySelector(selector);
  }
}, _function_utils.identityFn);

function createSVGElement(svgParent, id, classNames) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "path";
  var elem = document.createElementNS("http://www.w3.org/2000/svg", type);
  id && (elem.id = id);
  classNames && elem.setAttribute('class', classNames);
  svgParent && getParentFunctionByType[_typeof(svgParent)](svgParent).appendChild(elem);
  return elem;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVTVkdFbGVtZW50LnRzIl0sIm5hbWVzIjpbImdldFBhcmVudEZ1bmN0aW9uQnlUeXBlIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZGVudGl0eUZuIiwiY3JlYXRlU1ZHRWxlbWVudCIsInN2Z1BhcmVudCIsImlkIiwiY2xhc3NOYW1lcyIsInR5cGUiLCJlbGVtIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHLCtCQUFzQjtBQUNsRCxZQUFVLGdCQUFDQyxRQUFEO0FBQUEsV0FBcUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkYsUUFBdkIsQ0FBckI7QUFBQTtBQUR3QyxDQUF0QixFQUU3QkcsMEJBRjZCLENBQWhDOztBQUllLFNBQVNDLGdCQUFULENBQTBCQyxTQUExQixFQUEyREMsRUFBM0QsRUFBdUVDLFVBQXZFLEVBQWtIO0FBQUEsTUFBdkJDLElBQXVCLHVFQUFSLE1BQVE7QUFDN0gsTUFBTUMsSUFBSSxHQUFHUixRQUFRLENBQUNTLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVERixJQUF2RCxDQUFiO0FBRUFGLEVBQUFBLEVBQUUsS0FBS0csSUFBSSxDQUFDSCxFQUFMLEdBQVVBLEVBQWYsQ0FBRjtBQUNBQyxFQUFBQSxVQUFVLElBQUtFLElBQUksQ0FBQ0UsWUFBTCxDQUFrQixPQUFsQixFQUEyQkosVUFBM0IsQ0FBZjtBQUNBRixFQUFBQSxTQUFTLElBQUtOLHVCQUF1QixTQUFRTSxTQUFSLEVBQXZCLENBQTBDQSxTQUExQyxFQUFxRE8sV0FBckQsQ0FBaUVILElBQWpFLENBQWQ7QUFFQSxTQUFPQSxJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm94eSB9IGZyb20gXCIuL2hlbHBlcnMvb2JqZWN0X3V0aWxzXCI7XHJcbmltcG9ydCB7IGlkZW50aXR5Rm4gfSBmcm9tIFwiLi9oZWxwZXJzL2Z1bmN0aW9uX3V0aWxzXCI7XHJcblxyXG5jb25zdCBnZXRQYXJlbnRGdW5jdGlvbkJ5VHlwZSA9IGNyZWF0ZVByb3h5PEZ1bmN0aW9uPih7XHJcbiAgICBcInN0cmluZ1wiOiAoc2VsZWN0b3I6c3RyaW5nKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG59LCBpZGVudGl0eUZuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNWR0VsZW1lbnQoc3ZnUGFyZW50PzogU1ZHRWxlbWVudCB8IHN0cmluZywgaWQ/OnN0cmluZywgY2xhc3NOYW1lcz86c3RyaW5nLCB0eXBlOiBcInBhdGhcIiA9IFwicGF0aFwiKSB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdHlwZSk7XHJcblxyXG4gICAgaWQgJiYgKGVsZW0uaWQgPSBpZCk7XHJcbiAgICBjbGFzc05hbWVzICYmIChlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWVzKSk7XHJcbiAgICBzdmdQYXJlbnQgJiYgKGdldFBhcmVudEZ1bmN0aW9uQnlUeXBlW3R5cGVvZiBzdmdQYXJlbnRdKHN2Z1BhcmVudCkuYXBwZW5kQ2hpbGQoZWxlbSkpO1xyXG5cclxuICAgIHJldHVybiBlbGVtO1xyXG59XHJcbiJdfQ==