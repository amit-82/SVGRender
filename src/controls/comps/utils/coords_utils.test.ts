import { coordLengthCalculators, CoordLengthCalculator } from "./coords_utils";
import { CoordType } from "../interfaces";

describe("Test coordLengthCalculator", () => {
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
