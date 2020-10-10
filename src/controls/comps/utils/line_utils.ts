import { createProxy } from 'src/helpers/object_utils';
import { getDistance, getDistanceByPower2 } from 'src/helpers/shape_utils';
import { Coord, CoordType, Point } from '../interfaces';

export type FindIntersectionResult = {
	intersection: Point;
	simpleCoordIndex: number;
	distanceFromSimpleCoordStart: number; // distance from intersection Point to the hitten shape's segment
	p0x: number;
	p0y: number;
	p1x: number;
	p1y: number;
	p2x: number;
	p2y: number;
	p3x: number;
	p3y: number;
};

export const findIntersection = (
	p0x: number,
	p0y: number,
	p1x: number,
	p1y: number,
	xys: number[],
	stopOnFirstIntersection: boolean = true
): FindIntersectionResult | false => {
	let res: false | Point = false;
	let resP2Distance = Infinity;
	let index = -1;

	const total = xys.length - 2;
	for (let i = 0; i < total; i += 2) {
		const tempRes = getIntersection(
			p0x,
			p0y,
			p1x,
			p1y,
			xys[i],
			xys[i + 1],
			xys[i + 2],
			xys[i + 3]
		);
		if (tempRes) {
			const disPower2 = getDistanceByPower2(p0x, p0y, tempRes.x, tempRes.y);

			if (disPower2 < resP2Distance) {
				index = i;
				res = tempRes;
				resP2Distance = disPower2;
				if (stopOnFirstIntersection) {
					break;
				}
			}
		}
	}

	if (res) {
		return {
			intersection: res as Point,
			simpleCoordIndex: index,
			distanceFromSimpleCoordStart: getDistance(xys[index], xys[index + 1], res.x, res.y),
			p0x,
			p0y,
			p1x,
			p1y,
			p2x: xys[index],
			p2y: xys[index + 1],
			p3x: xys[index + 2],
			p3y: xys[index + 3],
		};
	}
	return res;
};

export const getIntersection = (
	p0x: number,
	p0y: number,
	p1x: number,
	p1y: number,
	p2x: number,
	p2y: number,
	p3x: number,
	p3y: number
): false | Point => {
	let cross: number;
	const v1 = {
		x: p1x - p0x,
		y: p1y - p0y,
	};
	const v2 = {
		x: p3x - p2x,
		y: p3y - p2y,
	};
	if ((cross = v1.x * v2.y - v1.y * v2.x) === 0) {
		// cross prod 0 if lines parallel
		return false; // no intercept
	}
	const v3 = { x: p0x - p2x, y: p0y - p2y }; // the line from p0 to p2 as vector
	const u2 = (v1.x * v3.y - v1.y * v3.x) / cross; // get unit distance along line p2 p3
	// code point B
	if (u2 >= 0 && u2 <= 1) {
		// is intercept on line p2, p3
		const u1 = (v2.x * v3.y - v2.y * v3.x) / cross; // get unit distance on line p0, p1;
		if (u1 >= 0 && u1 <= 1) {
			return {
				x: p0x + v1.x * u1,
				y: p0y + v1.y * u1,
			};
		}
	}
	return false;
};

/************** BREAKING COORDS *******************/
export type CoordBreaker = (
	coord: Coord,
	breakPointPercentage: number[],
	prevCoord?: Coord
) => Coord[];

const defaultPrevCoord: Coord = { type: CoordType.Linear, x: 0, y: 0 };
export const breakLinear: CoordBreaker = (
	coord: Coord,
	breakPointPercentage: number[],
	prevCoord: Coord = defaultPrevCoord
): Coord[] => {
	const res = breakPointPercentage.sort().map(
		perc =>
			({
				type: CoordType.Linear,
				x: Math.round((coord.x - prevCoord.x) * perc + prevCoord.x),
				y: Math.round((coord.y! - prevCoord.y!) * perc + prevCoord.y!),
			} as Coord)
	);
	res.push(coord);
	return res;
};

export const coordBreakersMap = createProxy(
	{
		LINEAR: breakLinear,
		//BEZIER_CUBIC: () => {},
		//BEZIER_MIRROR: () => {},
		//QUADRATIC: () => {},
	},
	(coord: Coord) => {
		throw `no handle for coord of type ${coord.type}`;
	}
);
