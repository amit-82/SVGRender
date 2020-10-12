import { Coord, CoordType, CubicBezierCoord, Point, QuadraticBezierCoord } from '../interfaces';
import { getIntersection, breakLinear, breakCubicBezier, breakQuadraticBezier } from './line_utils';

describe('Test getIntersection function', () => {
	const tests = [
		[{ x: 7, y: 10 } as Point, 5, 10, 8, 10, 7, 6, 7, 20], // crossing
		[false, 5, 10, 8, 10, 7, 6, 7, 9], // not long enough
		[false, 5, 10, 8, 10, 3, 10, 20, 10], // parallel
		[{ x: 10, y: 10 }, 5, 5, 15, 15, 15, 5, 5, 15], // X
		[{ x: 7.368421052631579, y: 13.947368421052632 }, 5, 10, 8, 15, 10, 5, 5, 22],
	];

	test.each(tests)(
		`should result with '%j' with points %j, %j, %j, %j, %j, %j, %j, %j`,
		// @ts-ignore
		(
			result: false | Point,
			x0: number,
			y0: number,
			x1: number,
			y1: number,
			x2: number,
			y2: number,
			x3: number,
			y3: number
		) => {
			expect(getIntersection(x0, y0, x1, y1, x2, y2, x3, y3)).toEqual(result);
		}
	);
});

describe('Test breakLinear function', () => {
	it('should break coord at 1/4 with prevCoord 0,0', () => {
		const c = { type: CoordType.Linear, x: 60, y: 40 };
		expect(breakLinear(c, [0.25], { type: CoordType.Linear, x: 0, y: 0 })).toEqual([
			{ type: CoordType.Linear, x: 15, y: 10 },
			{ type: CoordType.Linear, x: 60, y: 40 },
		]);
	});

	it('should break coord at 1/4 with provided prevCoord', () => {
		const c = { type: CoordType.Linear, x: 80, y: 50 };
		expect(
			breakLinear(c, [0.25], {
				type: CoordType.Linear,
				x: 20,
				y: 10,
			})
		).toEqual([{ type: CoordType.Linear, x: 35, y: 20 }, c]);
	});

	it('should break coord more than once', () => {
		const prevCoord = {
			type: CoordType.Linear,
			x: 20,
			y: 10,
		};
		const c = { type: CoordType.Linear, x: prevCoord.x + 120, y: prevCoord.y + 60 };

		expect(breakLinear(c, [0.25, 0.5], prevCoord)).toEqual([
			{ type: CoordType.Linear, x: 30 + prevCoord.x, y: 15 + prevCoord.y },
			{ type: CoordType.Linear, x: 60 + prevCoord.x, y: 30 + prevCoord.y },
			c,
		]);
	});
});

describe('Test breakCubicBezier function', () => {
	const c1: Coord = { type: CoordType.Linear, x: 100, y: 300 };
	const c2: CubicBezierCoord = {
		type: CoordType.BezierCubic,
		ctrlX: 150,
		ctrlY: 310,
		ctrlX2: 250,
		ctrlY2: 400,
		x: 300,
		y: 300,
	};

	const coordParts1 = breakCubicBezier(c2, [0.75], c1) as CubicBezierCoord[];
	it('should break the bezier to 2 Cubic bezier Coords', () => {
		expect(coordParts1.length).toBe(2);
		expect(coordParts1[0].type).toBe(CoordType.BezierCubic);
		expect(coordParts1[1].type).toBe(CoordType.BezierCubic);
	});

	it('should have correct end point for last coord', () => {
		expect(coordParts1[coordParts1.length - 1].x).toBe(c2.x);
		expect(coordParts1[coordParts1.length - 1].y).toBe(c2.y);
	});

	it('should have correct start and end points', () => {
		expect(coordParts1[0].ctrlX).toBeCloseTo(137.5, 0);
		expect(coordParts1[0].ctrlY).toBeCloseTo(307.5, 0);
	});

	const coordParts2 = breakCubicBezier(c2, [0.5, 0.75], c1) as CubicBezierCoord[];
	it('should break the bezier to 3 Cubic bezier Coords', () => {
		expect(coordParts2.length).toBe(3);
		expect(coordParts2[0].type).toBe(CoordType.BezierCubic);
		expect(coordParts2[1].type).toBe(CoordType.BezierCubic);
		expect(coordParts2[2].type).toBe(CoordType.BezierCubic);
	});

	it('should have correct end point for last coord', () => {
		expect(coordParts2[coordParts2.length - 1].x).toBe(c2.x);
		expect(coordParts2[coordParts2.length - 1].y).toBe(c2.y);
	});

	it('should have correct start and end points', () => {
		expect(coordParts2[0].ctrlX).toBeCloseTo(125, 0);
		expect(coordParts2[0].ctrlY).toBeCloseTo(305, 0);
		expect(coordParts2[0].ctrlX2).toBeCloseTo(162.5, 0);
		expect(coordParts2[0].ctrlY2).toBeCloseTo(330, 0);
		expect(coordParts2[1].ctrlX).toBeCloseTo(218.75, 0);
		expect(coordParts2[1].ctrlY).toBeCloseTo(346.875, 0);
		expect(coordParts2[1].ctrlX2).toBeCloseTo(237.5, 0);
		expect(coordParts2[1].ctrlY2).toBeCloseTo(349, 0);
	});
});

//

describe('Test breakQuadraticBezier function', () => {
	const c1: Coord = { type: CoordType.Linear, x: 100, y: 300 };
	const c2: QuadraticBezierCoord = {
		type: CoordType.BezierQuadratic,
		ctrlX: 150,
		ctrlY: 310,
		x: 300,
		y: 300,
	};

	const coordParts1 = breakQuadraticBezier(c2, [0.75], c1) as QuadraticBezierCoord[];
	it('should break the bezier to 2 Cubic bezier Coords', () => {
		expect(coordParts1.length).toBe(2);
		expect(coordParts1[0].type).toBe(CoordType.BezierQuadratic);
		expect(coordParts1[1].type).toBe(CoordType.BezierQuadratic);
	});

	it('should have correct end point for last coord', () => {
		expect(coordParts1[coordParts1.length - 1].x).toBe(c2.x);
		expect(coordParts1[coordParts1.length - 1].y).toBe(c2.y);
	});

	it('should have correct start and end points', () => {
		expect(coordParts1[0].ctrlX).toBeCloseTo(137.5, 0);
		expect(coordParts1[0].ctrlY).toBeCloseTo(307.5, 0);
	});

	const coordParts2 = breakQuadraticBezier(c2, [0.5, 0.75], c1) as QuadraticBezierCoord[];
	it('should break the bezier to 3 Cubic bezier Coords', () => {
		expect(coordParts2.length).toBe(3);
		expect(coordParts2[0].type).toBe(CoordType.BezierQuadratic);
		expect(coordParts2[1].type).toBe(CoordType.BezierQuadratic);
		expect(coordParts2[2].type).toBe(CoordType.BezierQuadratic);
	});

	it('should have correct end point for last coord', () => {
		expect(coordParts2[coordParts2.length - 1].x).toBe(c2.x);
		expect(coordParts2[coordParts2.length - 1].y).toBe(c2.y);
	});

	it('should have correct start and end points', () => {
		expect(coordParts2[0].ctrlX).toBeCloseTo(125, 0);
		expect(coordParts2[0].ctrlY).toBeCloseTo(305, 0);
		expect(coordParts2[1].ctrlX).toBeCloseTo(200, 0);
		expect(coordParts2[1].ctrlY).toBeCloseTo(305, 0);
	});
});
