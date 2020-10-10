import { CoordType, Point } from '../interfaces';
import { getIntersection, breakLinear } from './line_utils';

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
	it('should break coord at 1/4 with default 0,0 prevCoord', () => {
		const c = { type: CoordType.Linear, x: 60, y: 40 };
		expect(breakLinear(c, [0.25])).toEqual([
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
