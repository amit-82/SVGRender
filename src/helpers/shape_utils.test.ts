import {
	getDistance,
	getSquarePerimeter,
	getCircleCircumference,
	lineIntersection,
} from './shape_utils';

test('Test getDistance', () => {
	expect(getDistance(0, 0, 0, 5)).toBe(5);
	expect(getDistance(0, -5, 0, 5)).toBe(10);
	expect(getDistance(5, -5, -5, 5)).toBeCloseTo(14.142136, 0.0001);
});

test('Test getSquarePerimeter', () => {
	expect(getSquarePerimeter(100, 25)).toBe(250);
});

test('Test getCircleCircumference', () => {
	expect(getCircleCircumference(25)).toBeCloseTo(157.08, 0.00001);
});

describe('Test lineIntersect', () => {
	expect(lineIntersection(-1, 0, 1, 0, 0, 1, 0, -1)).toEqual({
		x: 0,
		y: 0,
		seg1: true,
		seg2: true,
	});
	expect(lineIntersection(-4, 0, -3, 0, 0, 1, 0, -1)).toEqual({
		x: 0,
		y: 0,
		seg1: false,
		seg2: true,
	});
	expect(lineIntersection(0, 0, 5, 15, 0, 7, 3, 13)).toEqual({
		x: 7,
		y: 21,
		seg1: false,
		seg2: false,
	});

	expect(lineIntersection(-3, -9, 10, 30, 0, 7, 12, 31)).toEqual({
		x: 7,
		y: 21,
		seg1: true,
		seg2: true,
	});

	// parallel lines
	expect(lineIntersection(2, 6, 5, 15, 2, 9, 5, 20)).toMatchObject({
		seg1: false,
		seg2: false,
	});
});
