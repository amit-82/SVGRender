import SegmentsDescriptor from "./SegmentsDescriptor";
import { CoordType } from "../interfaces";

describe("Test SegmentDescriptor", () => {

    const segDesc:SegmentsDescriptor = new SegmentsDescriptor();

    test("Shoud calculate the line length", () => {
        segDesc.calculate([{type: CoordType.Linear, x: 0, y: 0}, {type: CoordType.Linear, x: 10, y: 0}]);
        expect(segDesc.totalLength).toBe(10);
    });

})
