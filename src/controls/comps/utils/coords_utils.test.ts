import { coordLengthCalculators, CoordLengthCalculator, getBezierSegments } from "./coords_utils";
import { CoordType, BezierCoord } from "../interfaces";
import {bezierControlPointOffsetForQuarterCircle} from "../../../helpers/shape_utils";

describe("Test getBezierSegments function", () => {
	const segmentsCount = 11;
	const segments = getBezierSegments({type:CoordType.Linear, x: 0, y: 0}, {type:CoordType.Bezier, ctrlX: 0, ctrlY: 20, ctrlX2:100, ctrlY2: 20, x: 100, y: 0} as BezierCoord, segmentsCount);
	test("should return segments of bezier with correct count", () => {
		expect(segments).toHaveLength(segmentsCount)
	})
	test("first, last and center points should be correct", () => {
		expect(segments[0]).toEqual({x: 0, y: 0})
		expect(segments[segmentsCount - 1]).toEqual({x: 100, y: 0})
		expect(segments[Math.floor(segmentsCount / 2)]).toEqual({x: 50, y: 15})
	})
})

describe("Test coordLengthCalculator linear function", () => {
	test("Throwing error for invalid type", () => {
		expect(coordLengthCalculators["blabla"]).toThrow();
	});

	test("Getting correct distance of a linear segment", () => {
		const calcFunc: CoordLengthCalculator =
			coordLengthCalculators[CoordType.Linear.toString()];
		const distance = calcFunc(
			{ type: CoordType.Linear, x: 100, y: 25 },
			{ type: CoordType.Linear, x: 100, y: 100 }
		);
		expect(distance).toBe(75);
	});

	test("Getting correct distance of a linear segment with missing y members", () => {
		const calcFunc: CoordLengthCalculator =
			coordLengthCalculators[CoordType.Linear.toString()];
		const distance = calcFunc(
			{ type: CoordType.Linear, x: 25 },
			{ type: CoordType.Linear, x: 100 }
		);
		expect(distance).toBe(75);
	});
});

describe("Test coordLengthCalculator bezier function", () => {

	const calcFunc: CoordLengthCalculator =
		coordLengthCalculators[CoordType.Bezier.toString()];
	test("Getting correct length of bezier curve equal to a quarter of a circle with radius of 100", () => {
		//const length
		const radius = 100;
		const bezierControlOffset = bezierControlPointOffsetForQuarterCircle;

		const length = calcFunc(
			{ type: CoordType.Linear, x: radius, y: 0 },
			{ type: CoordType.Bezier, x: 0, y: radius, ctrlX: radius, ctrlY: radius * bezierControlOffset, ctrlX2: 0, ctrlY2: radius * bezierControlOffset} as BezierCoord
		);
		
		expect(length / radius).toBeCloseTo(628 / 4 / radius, .1); // should not exceed 10% off from real
	})

	test("Getting correct length of a bezier curve", () => {
		const length = calcFunc(
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Bezier, x: 100, y: 0, ctrlX: 25, ctrlY: 50, ctrlX2: 90, ctrlY2: 80 } as BezierCoord
		);
		expect(length).toBeCloseTo(151.43, .01);
	});
});
