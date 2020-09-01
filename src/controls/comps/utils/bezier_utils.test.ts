import {
	coordLengthCalculators,
	CoordLengthCalculator,
	getBezierCubicSegments,
	getBezierQuadraticSegments,
	getPointsOfCoord,
	getQuadraticBezierLength,
} from './bezier_utils';
import { Coord, CoordType, CubicBezierCoord, QuadraticBezierCoord } from '../interfaces';
import { bezierControlPointOffsetForQuarterCircle } from '../../../helpers/shape_utils';

describe('Test getBezierQuadraticSegments function', () => {
	const segmentsCount = 10;
	const segments = getBezierQuadraticSegments(
		{ type: CoordType.Linear, x: 0, y: 0 },
		{
			type: CoordType.BezierQuadratic,
			ctrlX: 0,
			ctrlY: 50,
			x: 0,
			y: 100,
		} as QuadraticBezierCoord,
		segmentsCount
	);
	test("should return segments of 'stright line' quadratic bezier with correct count", () => {
		expect(segments).toHaveLength(segmentsCount);
	});
	test("first, last and center points should be correct for 'stright line' stright line", () => {
		expect(segments[0]).toEqual({ x: 0, y: 0 });
		expect(segments[segmentsCount - 1]).toEqual({ x: 0, y: 100 });
		expect(segments[Math.floor(segmentsCount / 2)]).toEqual({ x: 0, y: 50 });
	});

	const segmentsCount2 = 20;
	const segments2 = getBezierQuadraticSegments(
		{ type: CoordType.Linear, x: 20, y: 50 },
		{
			type: CoordType.BezierQuadratic,
			ctrlX: 100,
			ctrlY: 80,
			x: 75,
			y: 110,
		} as QuadraticBezierCoord,
		segmentsCount2
	);
	test('should return segments of quadratic bezier with correct count', () => {
		expect(segments2).toHaveLength(segmentsCount2);
	});
	test('first, last and center points should be correct', () => {
		expect(segments2[0]).toEqual({ x: 20, y: 50 });
		expect(segments2[segmentsCount2 - 1]).toEqual({ x: 75, y: 110 });
		expect(segments2[Math.floor(segmentsCount2 / 2)]).toEqual({ x: 73.75, y: 80 });
	});
});

// TODO: create and test getBezierQuadraticLength
describe('Test getQuadraticBezierLength function', () => {
	const tests = [
		[
			5,
			{ x: 5, y: 20 } as Coord,
			{ ctrlX: 7, ctrlY: 20, x: 10, y: 20 } as QuadraticBezierCoord,
		],
		[
			112.28,
			{ x: 0, y: 0 } as Coord,
			{ ctrlX: 15, ctrlY: 50, x: 50, y: 100 } as QuadraticBezierCoord,
		],
	];
	test.each(tests)(
		'should have length %j when start at %j and quadratic curve to %j',
		(length, c1, c2) => {
			expect(getQuadraticBezierLength(c1 as Coord, c2 as QuadraticBezierCoord)).toBeCloseTo(
				length as number,
				1
			);
		}
	);
});

describe('Test getBezierCubicSegments function', () => {
	const segmentsCount = 11;
	const segments = getBezierCubicSegments(
		{ type: CoordType.Linear, x: 0, y: 0 },
		{
			type: CoordType.BezierCubic,
			ctrlX: 0,
			ctrlY: 20,
			ctrlX2: 100,
			ctrlY2: 20,
			x: 100,
			y: 0,
		} as CubicBezierCoord,
		segmentsCount
	);
	test('should return segments of cubic bezier with correct count', () => {
		expect(segments).toHaveLength(segmentsCount);
	});
	test('first, last and center points should be correct', () => {
		expect(segments[0]).toEqual({ x: 0, y: 0 });
		expect(segments[segmentsCount - 1]).toEqual({ x: 100, y: 0 });
		expect(segments[Math.floor(segmentsCount / 2)]).toEqual({ x: 50, y: 15 });
	});
});

describe('Test coordLengthCalculator linear function', () => {
	test('Throwing error for invalid type', () => {
		expect(coordLengthCalculators['blabla']).toThrow();
	});

	test('Getting correct distance of a linear segment', () => {
		const calcFunc: CoordLengthCalculator = coordLengthCalculators[CoordType.Linear.toString()];
		const distance = calcFunc(
			{ type: CoordType.Linear, x: 100, y: 25 },
			{ type: CoordType.Linear, x: 100, y: 100 }
		);
		expect(distance).toBe(75);
	});

	test('Getting correct distance of a linear segment with missing y members', () => {
		const calcFunc: CoordLengthCalculator = coordLengthCalculators[CoordType.Linear.toString()];
		const distance = calcFunc(
			{ type: CoordType.Linear, x: 25 },
			{ type: CoordType.Linear, x: 100 }
		);
		expect(distance).toBe(75);
	});
});

describe('Test coordLengthCalculator cubic bezier function', () => {
	// TODO: TEST WITH mirrorX & mirrorY

	const calcFunc: CoordLengthCalculator =
		coordLengthCalculators[CoordType.BezierCubic.toString()];
	test('Getting correct length of cubic bezier curve equal to a quarter of a circle with radius of 100', () => {
		//const length
		const radius = 100;
		const bezierControlOffset = bezierControlPointOffsetForQuarterCircle;

		const length = calcFunc({ type: CoordType.Linear, x: radius, y: 0 }, {
			type: CoordType.BezierCubic,
			x: 0,
			y: radius,
			ctrlX: radius,
			ctrlY: radius * bezierControlOffset,
			ctrlX2: 0,
			ctrlY2: radius * bezierControlOffset,
		} as CubicBezierCoord);

		expect(length / radius).toBeCloseTo(628 / 4 / radius, 0.1); // should not exceed 10% off from real
	});

	test('Getting correct length of a cubic bezier curve', () => {
		const length = calcFunc({ type: CoordType.Linear, x: 0, y: 0 }, {
			type: CoordType.BezierCubic,
			x: 100,
			y: 0,
			ctrlX: 25,
			ctrlY: 50,
			ctrlX2: 90,
			ctrlY2: 80,
		} as CubicBezierCoord);
		expect(length).toBeCloseTo(151.43, 0.01);
	});
});

// TODO: TEST QUAD BEZIER

describe('Test getPointsOfCoord function', () => {
	test('should get Scalar coord points', () => {
		const coord: Coord = {
			type: CoordType.Scalar,
			x: 5,
		};
		expect(getPointsOfCoord(coord)).toEqual([5]);
	});

	test('should get Linear coord points', () => {
		const coord: Coord = {
			type: CoordType.Linear,
			x: 10,
			y: 20,
		};
		expect(getPointsOfCoord(coord)).toEqual([10, 20]);
	});

	test('should get Quadratic Bezier coord points', () => {
		const coord: QuadraticBezierCoord = {
			type: CoordType.BezierQuadratic,
			x: 20,
			y: 10,
			ctrlX: 30,
			ctrlY: 40,
		};
		expect(getPointsOfCoord(coord)).toEqual([20, 10, 30, 40]);
	});

	test('should get Cubic Bezier coord points', () => {
		const coord: CubicBezierCoord = {
			type: CoordType.BezierCubic,
			x: 100,
			y: 50,
			ctrlX: 25,
			ctrlY: 12,
			ctrlX2: 6,
			ctrlY2: 3,
		};
		expect(getPointsOfCoord(coord)).toEqual([100, 50, 25, 12, 6, 3]);
	});

	test('should throw an error for Mirror Bezier', () => {
		const coord: Coord = {
			type: CoordType.BezierMirror,
			x: 0,
		};

		expect(() => getPointsOfCoord(coord)).toThrow(
			'break BezierMirror to coords not implemented'
		);
	});
});
