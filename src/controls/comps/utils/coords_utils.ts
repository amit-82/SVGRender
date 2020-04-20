import { createProxy } from "src/helpers/object_utils";
import { getDistance } from "src/helpers/shape_utils";
import { Coord } from "../interfaces";

function cubicN(t:number, a:number, b:number, c:number,d: number):number {
    var t2 = t * t;
    var t3 = t2 * t;
    return a + (-a * 3 + t * (3 * a - a * t)) * t
    + (3 * b + t * (-6 * b + b * 3 * t)) * t
    + (c * 3 - c * 3 * t) * t2
    + d * t3;
}

//function bezier

export type CoordLengthCalculator = (
	coord: Coord,
	previousCoord: Coord
) => number | never;

export const coordLengthCalculators = createProxy<CoordLengthCalculator>(
	{
		LINEAR: (c1: Coord, c2: Coord) =>
			getDistance(c1.x, c1.y || 0, c2.x, c2.y || 0),
		//BEZIER:
		//CURVE:
		//QUADRATIC:
	},
	(prevCoord: Coord, coord: Coord) => {
		throw `CoordType ${coord.type} is not implmented`;
	}
);
