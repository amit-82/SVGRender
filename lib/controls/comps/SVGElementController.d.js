"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SVGElementController = function SVGElementController() {
  _classCallCheck(this, SVGElementController);

  _defineProperty(this, "_id", void 0);

  _defineProperty(this, "_type", void 0);

  _defineProperty(this, "element", void 0);

  _defineProperty(this, "_coords", void 0);

  _defineProperty(this, "_segmentLengths", void 0);

  _defineProperty(this, "_totalLength", void 0);

  _defineProperty(this, "coordinatesParser", void 0);
};

exports["default"] = SVGElementController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlci5kLnRzIl0sIm5hbWVzIjpbIlNWR0VsZW1lbnRDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUc4QkEsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZCB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNQYXJzZXIgfSBmcm9tIFwiLi9jb29yZGluYXRlcy9Db29yZGluYXRlc1BhcnNlclwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50VHlwZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU1ZHRWxlbWVudENvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBfaWQ7XHJcbiAgICBwcml2YXRlIF90eXBlO1xyXG4gICAgcHJvdGVjdGVkIGVsZW1lbnQ6IFNWR0VsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9jb29yZHM7XHJcbiAgICBwcml2YXRlIF9zZWdtZW50TGVuZ3RocztcclxuICAgIHByaXZhdGUgX3RvdGFsTGVuZ3RoO1xyXG4gICAgcHJvdGVjdGVkIGNvb3JkaW5hdGVzUGFyc2VyOiBDb29yZGluYXRlc1BhcnNlcjtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ/OiBTVkdFbGVtZW50LCB0eXBlPzogU1ZHRWxlbWVudFR5cGVzKTtcclxuICAgIGdldCBpZCgpOiBudW1iZXI7XHJcbiAgICBnZXQgdHlwZSgpOiBTVkdFbGVtZW50VHlwZXM7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHNlZ21lbnRMZW5ndGhzKCk6IG51bWJlcltdO1xyXG4gICAgcHJvdGVjdGVkIGdldCB0b3RhbExlbmd0aCgpOiBudW1iZXI7XHJcbiAgICBnZXRDb29yZHMoKTogQ29vcmRbXTtcclxuICAgIHByb3RlY3RlZCBnZXRDb29yZHNSZWYoKTogQ29vcmRbXTtcclxuICAgIHByb3RlY3RlZCBhcHBlbmRDb29yZChjb29yZDogQ29vcmQsIGlzTW92ZVRvPzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBwcm90ZWN0ZWQgdmFsaWRhdGVPckluc2VydEZpcnN0Q29vcmRaZXJvWmVybygpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYW55IG1hbmlwdWxhdGlvbiAob3IgYSBzZXJpZXMgb2YgbWFuaXB1bGF0aW9uKSBvZiB0aGUgc2hhcGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==