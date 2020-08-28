import { createProxy } from 'src/helpers/object_utils';
import { getDistance } from 'src/helpers/shape_utils';
import { Coord, CubicBezierCoord, Point, CoordType, QuadraticBezierCoord } from '../interfaces';

/**
 * @description return the X or Y value of an interpolated point on a bezier curve
 * @param t 0 to 1 value representing the position between the start and the end
 * @param start the X or Y value of the start point
 * @param startCtrl the X or Y value of the start point
 * @param endCtrl the X or Y value of the end point
 * @param end the X or Y value of the end point
 */
function getPointXorYOnBezier(
	t: number,
	start: number,
	startCtrl: number,
	endCtrl: number,
	end: number
): number {
	const t2 = t * t;
	const t3 = t2 * t;
	return (
		start +
		(-start * 3 + t * (3 * start - start * t)) * t +
		(3 * startCtrl + t * (-6 * startCtrl + startCtrl * 3 * t)) * t +
		(endCtrl * 3 - endCtrl * 3 * t) * t2 +
		end * t3
	);
}

export function getBezierCubicSegments(c1: Coord, c2: Coord, segmentsCount = 50): Point[] {
	const sectionDelta = 1 / (segmentsCount - 1);
	const coordsAlongCurve: Point[] = [];
	for (let i = 0; i < segmentsCount; i++) {
		coordsAlongCurve.push({
			x: getPointXorYOnBezier(
				sectionDelta * i,
				c1.x,
				(c2 as CubicBezierCoord).ctrlX,
				(c2 as CubicBezierCoord).ctrlX2,
				c2.x
			),
			y: getPointXorYOnBezier(
				sectionDelta * i,
				c1.y as number,
				(c2 as CubicBezierCoord).ctrlY,
				(c2 as CubicBezierCoord).ctrlY2,
				c2.y as number
			),
		});
	}
	return coordsAlongCurve;
}

export function getBezierQuadraticSegments(
	c1: Coord,
	c2: QuadraticBezierCoord,
	segmentsCount = 50,
	pxTolerance = 2
): Point[] {
	const { x: Ax, y: Ay } = c1;
	const { ctrlX: Bx, ctrlY: By, x: Cx, y: Cy } = c2;
	let deltaBAx: number = Bx - Ax;
	let deltaCBx: number = Cx - Bx;
	let deltaBAy: number = By - Ay!;
	let deltaCBy: number = Cy - By;
	let ax, ay;
	let lastX = -10000;
	let lastY = -10000;
	let pts: Point[] = [{ x: Ax, y: Ay! }];
	for (let i = 1; i < segmentsCount - 1; i++) {
		let t = i / segmentsCount;
		ax = Ax + deltaBAx * t;
		ay = Ay! + deltaBAy * t;
		let x = ax + (Bx + deltaCBx * t - ax) * t;
		let y = ay + (By + deltaCBy * t - ay) * t;
		let dx = x - lastX;
		let dy = y - lastY;
		if (dx * dx + dy * dy > pxTolerance) {
			pts.push({ x: x, y: y });
			lastX = x;
			lastY = y;
		}
	}
	pts.push({ x: Cx, y: Cy });
	return pts;
}

export function getQuadraticBezierLength(coord1: Coord, coord2: QuadraticBezierCoord) {
	const { x: x1, y: y1 } = coord1;
	const { ctrlX: x2, ctrlY: y2, x: x3, y: y3 } = coord2;
	let a: number;
	let b: number;
	let c: number;
	let u: number;
	const v1x = x2 * 2;
	const v1y = y2 * 2;
	const d = x1 - v1x + x3;
	const d1 = y1! - v1y + y3;
	const e = v1x - 2 * x1;
	const e1 = v1y - 2 * y1!;
	let c1 = (a = 4 * (d * d + d1 * d1));
	c1 += b = 4 * (d * e + d1 * e1);
	c1 += c = e * e + e1 * e1;
	c1 = 2 * Math.sqrt(c1);
	const a1 = 2 * a * (u = Math.sqrt(a));
	const u1 = b / u;
	a = 4 * c * a - b * b;
	c = 2 * Math.sqrt(c);
	return (a1 * c1 + u * b * (c1 - c) + a * Math.log((2 * u + u1 + c1) / (u1 + c))) / (4 * a1);
}

export function getBezierCubicLength(c1: Coord, c2: Coord, segmentsCount = 50): number {
	const pointsAlongCurve: Point[] = getBezierCubicSegments(c1, c2, segmentsCount);
	let lengthSum = 0;

	for (let i = 1; i < pointsAlongCurve.length; i++) {
		lengthSum += getDistance(
			pointsAlongCurve[i - 1].x,
			pointsAlongCurve[i - 1].y,
			pointsAlongCurve[i].x,
			pointsAlongCurve[i].y
		);
	}

	return lengthSum;
}
/*
function bezierMirror(c1: Coord, c2: Coord, c3?:Coord, segmentsCount = 50):number {
	if (c3 && (c3.type === CoordType.BezierMirror || c3.type === CoordType.Bezier)) {
		// got previous segment
		const {type, x, y = 0} = c2;
		if (type === CoordType.Bezier) {
			// prev is bezier
		} else {
			// prev is bezier mirror

		}
		const prevCtrlX = x + (x - (c2 as BezierCoord).ctrlX2);
		const prevCtrlY = y || 0 + (y || 0 - (c2 as BezierCoord).ctrlY2);
	}

	// no pre-previous coord or pre-previous not of continues type
	return getBezierCubicLength(c1, c2, segmentsCount);
}
*/
export type CoordLengthCalculator = (
	coord: Coord,
	previousCoord: Coord,
	beforePreviousCoord?: Coord
) => number | never;

export const coordLengthCalculators = createProxy<CoordLengthCalculator>(
	{
		LINEAR: (c1: Coord, c2: Coord) => getDistance(c1.x, c1.y || 0, c2.x, c2.y || 0),
		//BEZIER_MIRROR: (c1: Coord, c2: Coord, c3: Coord) =>
		BEZIER_CUBIC: getBezierCubicLength,
		//QUADRATIC:
	},
	(prevCoord: Coord, coord: Coord) => {
		throw `CoordType ${coord.type} is not implmented`;
	}
);

const arr1: number[] = new Array(1);
const arr2: number[] = new Array(2);
const arr4: number[] = new Array(4);
const arr6: number[] = new Array(6);
type CoordTyped = { [key in CoordType]: (coord: Coord) => number[] };
const getPointsCoordHandlerMap: CoordTyped = {
	[CoordType.Scalar]: (coord: Coord) => {
		arr1[0] = coord.x;
		return arr1;
	},
	[CoordType.Linear]: (coord: Coord) => {
		arr2[0] = coord.x;
		arr2[1] = coord.y!;
		return arr2;
	},
	[CoordType.BezierQuadratic]: (coord: Coord) => {
		arr4[0] = (coord as QuadraticBezierCoord).x;
		arr4[1] = (coord as QuadraticBezierCoord).y;
		arr4[2] = (coord as QuadraticBezierCoord).ctrlX;
		arr4[3] = (coord as QuadraticBezierCoord).ctrlY;
		return arr4;
	},
	[CoordType.BezierCubic]: (coord: Coord) => {
		arr6[0] = (coord as CubicBezierCoord).x;
		arr6[1] = (coord as CubicBezierCoord).y;
		arr6[2] = (coord as CubicBezierCoord).ctrlX;
		arr6[3] = (coord as CubicBezierCoord).ctrlY;
		arr6[4] = (coord as CubicBezierCoord).ctrlX2;
		arr6[5] = (coord as CubicBezierCoord).ctrlY2;
		return arr6;
	},
	[CoordType.BezierMirror]: () => {
		throw 'break BezierMirror to coords not implemented';
	},
};
export const getPointsOfCoord = (coord: Coord): number[] =>
	getPointsCoordHandlerMap[coord.type](coord);
