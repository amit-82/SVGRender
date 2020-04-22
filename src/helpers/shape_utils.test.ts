import { getDistance, getSquarePerimeter, getCircleCircumference } from "./shape_utils";

test("Test getDistance", () => {
	expect(getDistance(0, 0, 0, 5)).toBe(5);
	expect(getDistance(0, -5, 0, 5)).toBe(10);
	expect(getDistance(5, -5, -5, 5)).toBeCloseTo(14.142136, 0.0001);
});

test("Test getSquarePerimeter", () => {
	expect(getSquarePerimeter(100, 25)).toBe(250);
})

test("Test getCircleCircumference", () => {
	expect(getCircleCircumference(25)).toBeCloseTo(157.08, .00001);
})
