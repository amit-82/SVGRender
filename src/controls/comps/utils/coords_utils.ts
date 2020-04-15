import { Coord } from "../interfaces";
import { createProxy } from "../../../helpers/object_utils";
import { getDistance } from "../../../helpers/shape_utils";

export type CoordLengthCalculator = (
	coord: Coord,
	previousCoord: Coord
) => number | never;

export const coordLengthCalculators = createProxy<CoordLengthCalculator>(
	{
		Linear: (c1: Coord, c2: Coord) => getDistance(c1.x, c1.y, c2.x, c2.y),
		//Bezier:
		//Curve:
		//Quadratic:
	},
	(prevCoord: Coord, coord: Coord) => {
		throw `CoordType ${coord.type} is not implmented`;
	}
);
