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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9jb21wcy9TVkdFbGVtZW50Q29udHJvbGxlci5kLnRzIl0sIm5hbWVzIjpbIlNWR0VsZW1lbnRDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUU4QkEsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZCB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IENvb3JkaW5hdGVzUGFyc2VyIGZyb20gXCIuL2Nvb3JkaW5hdGVzL0Nvb3JkaW5hdGVzUGFyc2VyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFNWR0VsZW1lbnRDb250cm9sbGVyIHtcclxuICAgIHByaXZhdGUgX2lkO1xyXG4gICAgcHJpdmF0ZSBfdHlwZTtcclxuICAgIHByb3RlY3RlZCBlbGVtZW50OiBTVkdFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBfY29vcmRzO1xyXG4gICAgcHJpdmF0ZSBfc2VnbWVudExlbmd0aHM7XHJcbiAgICBwcml2YXRlIF90b3RhbExlbmd0aDtcclxuICAgIHByb3RlY3RlZCBjb29yZGluYXRlc1BhcnNlcjogQ29vcmRpbmF0ZXNQYXJzZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50PzogU1ZHRWxlbWVudCwgdHlwZT86IFNWR0VsZW1lbnRUeXBlcyk7XHJcbiAgICBnZXQgaWQoKTogbnVtYmVyO1xyXG4gICAgZ2V0IHR5cGUoKTogU1ZHRWxlbWVudFR5cGVzO1xyXG4gICAgcHJvdGVjdGVkIGdldCBzZWdtZW50TGVuZ3RocygpOiBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBnZXQgdG90YWxMZW5ndGgoKTogbnVtYmVyO1xyXG4gICAgZ2V0Q29vcmRzKCk6IENvb3JkW107XHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q29vcmRzUmVmKCk6IENvb3JkW107XHJcbiAgICBwcm90ZWN0ZWQgYXBwZW5kQ29vcmQoY29vcmQ6IENvb3JkLCBpc01vdmVUbz86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcHJvdGVjdGVkIHZhbGlkYXRlT3JJbnNlcnRGaXJzdENvb3JkWmVyb1plcm8oKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIG11c3QgYmUgY2FsbGVkIGFmdGVyIGFueSBtYW5pcHVsYXRpb24gKG9yIGEgc2VyaWVzIG9mIG1hbmlwdWxhdGlvbikgb2YgdGhlIHNoYXBlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjYWxjdWxhdGUoKTogdm9pZDtcclxufVxyXG4iXX0=