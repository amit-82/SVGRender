import { coordLengthCalculators, CoordLengthCalculator } from "./coords_utils";
import { CoordType, BezierCoord } from "../interfaces";

describe("Test coordLengthCalculator linear length function", () => {
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
			coordLengthCalculators[CoordType.Bezier.toString()];
		const distance = calcFunc(
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Bezier, x: 100, y: 0, ctrlX: 25, ctrlY: 50, ctrlX2: 90, ctrlY2: 80 } as BezierCoord
		);
		expect(distance).toBeCloseTo(151.43, .01);
	});
});

describe("Test coordLengthCalculator bezier length function", () => {
	
})
