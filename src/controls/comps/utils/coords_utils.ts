import { createProxy } from 'src/helpers/object_utils';
import { getDistance } from 'src/helpers/shape_utils';
import { Coord, CubicBezierCoord, Point } from '../interfaces';

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

export function getBezierSegments(c1: Coord, c2: Coord, segmentsCount = 50): Point[] {
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

function getBezierLength(c1: Coord, c2: Coord, segmentsCount = 50): number {
	const pointsAlongCurve: Point[] = getBezierSegments(c1, c2, segmentsCount);
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
	return getBezierLength(c1, c2, segmentsCount);
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
		BEZIER_CUBIC: getBezierLength,
		//QUADRATIC:
	},
	(prevCoord: Coord, coord: Coord) => {
		throw `CoordType ${coord.type} is not implmented`;
	}
);
