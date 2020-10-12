import { createProxy } from 'src/helpers/object_utils';
import { getDistance, getDistanceByPower2 } from 'src/helpers/shape_utils';
import { Coord, CoordType, CubicBezierCoord, Point, QuadraticBezierCoord } from '../interfaces';

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
	prevCoord: Coord
) => Coord[];

export const breakLinear: CoordBreaker = (
	coord: Coord,
	breakPointPercentage: number[],
	prevCoord: Coord
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

export const breakQuadraticBezier: CoordBreaker = (
	coord: Coord,
	breakPointPercentage: number[],
	prevCoord: Coord,
	firstBreak: boolean = true
) => {
	breakPointPercentage = firstBreak ? [...breakPointPercentage] : breakPointPercentage;
	const t = breakPointPercentage.splice(0, 1)[0];
	const c = coord as QuadraticBezierCoord;
	const cs: number[] = splitCurveAt(t, prevCoord.x, prevCoord.y!, c.ctrlX, c.ctrlY, c.x, c.y);
	const returnedCoord: Coord[] = [
		{
			type: CoordType.BezierQuadratic,
			ctrlX: cs[2],
			ctrlY: cs[3],
			x: cs[4],
			y: cs[5],
		} as QuadraticBezierCoord,
	];
	const secondNewCoord: QuadraticBezierCoord = {
		type: CoordType.BezierQuadratic,
		ctrlX: cs[6],
		ctrlY: cs[7],
		x: cs[8],
		y: cs[9],
	};
	if (breakPointPercentage.length === 0) {
		// last break - also add the second part of the broken curve
		returnedCoord.push(secondNewCoord);
	} else {
		// call self with updated 't' and with coord secondPart
		const reminderT = 1 - t;
		breakPointPercentage = breakPointPercentage.map(newT => (newT - t) / reminderT);
		return returnedCoord.concat(
			...breakQuadraticBezier(secondNewCoord, breakPointPercentage, returnedCoord[0])
		);
	}
	return returnedCoord;
};

export const breakCubicBezier: CoordBreaker = (
	coord: Coord,
	breakPointPercentage: number[],
	prevCoord: Coord,
	firstBreak: boolean = true
) => {
	breakPointPercentage = firstBreak ? [...breakPointPercentage] : breakPointPercentage;
	const t = breakPointPercentage.splice(0, 1)[0];
	const c = coord as CubicBezierCoord;
	const cs: number[] = splitCurveAt(
		t,
		prevCoord.x,
		prevCoord.y!,
		c.ctrlX,
		c.ctrlY,
		c.ctrlX2,
		c.ctrlY2,
		c.x,
		c.y
	);
	const returnedCoord: Coord[] = [
		{
			type: CoordType.BezierCubic,
			ctrlX: cs[2],
			ctrlY: cs[3],
			ctrlX2: cs[4],
			ctrlY2: cs[5],
			x: cs[6],
			y: cs[7],
		} as CubicBezierCoord,
	];
	const secondNewCoord: CubicBezierCoord = {
		type: CoordType.BezierCubic,
		ctrlX: cs[8],
		ctrlY: cs[9],
		ctrlX2: cs[10],
		ctrlY2: cs[11],
		x: cs[12],
		y: cs[13],
	};
	if (breakPointPercentage.length === 0) {
		// last break - also add the second part of the broken curve
		returnedCoord.push(secondNewCoord);
	} else {
		// call self with updated 't' and with coord secondPart
		const reminderT = 1 - t;
		breakPointPercentage = breakPointPercentage.map(newT => (newT - t) / reminderT);
		return returnedCoord.concat(
			...breakCubicBezier(secondNewCoord, breakPointPercentage, returnedCoord[0])
		);
	}
	return returnedCoord;
};

export const coordBreakersMap = createProxy(
	{
		LINEAR: breakLinear,
		BEZIER_CUBIC: breakCubicBezier,
		//QUADRATIC: () => {},
		//BEZIER_MIRROR: () => {},
	},
	(coord: Coord) => {
		throw `no handle for coord of type ${coord.type}`;
	}
);

// With throw RangeError if not 0 < position < 1
// x1, y1, x2, y2, x3, y3 for quadratic curves
// x1, y1, x2, y2, x3, y3, x4, y4 for cubic curves
// Returns an array of points representing 2 curves. The curves are the same type as the split curve
export const splitCurveAt = (
	position: number,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x3: number,
	y3: number,
	x4?: number,
	y4?: number
) => {
	if (position <= 0 || position >= 1) {
		throw RangeError('spliteCurveAt requires position > 0 && position < 1');
	}

	let retPoints: number[] = []; // array of coordinates
	let i = 0;
	let quad = false; // presume cubic bezier
	let v1 = { x: x1, y: y1 };
	let v2 = { x: x2, y: y2 };
	let v4: Point;
	if (typeof x4 === 'number' && typeof y4 === 'number') {
		v4 = { x: x4, y: y4 };
	} else {
		quad = true; // this is a quadratic bezier
		v4 = { x: x3, y: y3 };
	}
	let c = position;
	retPoints[i++] = v1.x; // start point
	retPoints[i++] = v1.y;
	if (quad) {
		// split quadratic bezier
		retPoints[i++] = v1.x += (v2.x - v1.x) * c; // new control point for first curve
		retPoints[i++] = v1.y += (v2.y - v1.y) * c;
		v2.x += (v4.x - v2.x) * c;
		v2.y += (v4.y - v2.y) * c;
		retPoints[i++] = v1.x + (v2.x - v1.x) * c; // new end and start of first and second curves
		retPoints[i++] = v1.y + (v2.y - v1.y) * c;
		retPoints[i++] = v2.x; // new control point for second curve
		retPoints[i++] = v2.y;
		retPoints[i++] = v4.x; // new endpoint of second curve
		retPoints[i++] = v4.y;
		// return array with 2 curves
		return retPoints;
	}
	let v3 = { x: x3, y: y3 };
	retPoints[i++] = v1.x += (v2.x - v1.x) * c; // first curve first control point
	retPoints[i++] = v1.y += (v2.y - v1.y) * c;
	v2.x += (v3.x - v2.x) * c;
	v2.y += (v3.y - v2.y) * c;
	v3.x += (v4.x - v3.x) * c;
	v3.y += (v4.y - v3.y) * c;
	retPoints[i++] = v1.x += (v2.x - v1.x) * c; // first curve second control point
	retPoints[i++] = v1.y += (v2.y - v1.y) * c;
	v2.x += (v3.x - v2.x) * c;
	v2.y += (v3.y - v2.y) * c;
	retPoints[i++] = v1.x + (v2.x - v1.x) * c; // end and start point of first second curves
	retPoints[i++] = v1.y + (v2.y - v1.y) * c;
	retPoints[i++] = v2.x; // second curve first control point
	retPoints[i++] = v2.y;
	retPoints[i++] = v3.x; // second curve second control point
	retPoints[i++] = v3.y;
	retPoints[i++] = v4.x; // endpoint of second curve
	retPoints[i++] = v4.y;
	// return array with 2 curves
	return retPoints;
};
