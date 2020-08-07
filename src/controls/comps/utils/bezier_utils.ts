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
