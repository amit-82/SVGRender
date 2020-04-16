import { getDistance } from "./shape_utils";

test("Test getDistance", () => {
	expect(getDistance(0, 0, 0, 5)).toBe(5);
	expect(getDistance(0, -5, 0, 5)).toBe(10);
	expect(getDistance(5, -5, -5, 5)).toBeCloseTo(14.142136, 0.0001);
});
