import { Coord, CoordType, CubicBezierCoord } from '../comps/interfaces';
import { create2CubicBeziers } from '../comps/utils/bezier_utils';

export interface PinchCoordsFactoryResult {
	coords: Coord[];
	removePrevious: boolean;
	removeNext: boolean;
}

export type PinchCoordsFactory = (
	target: Coord,
	previousCoord: Coord,
	replacedCoords: Coord[],
	nextCoord: Coord
) => PinchCoordsFactoryResult;

export const linearPinchCoordsFactory: PinchCoordsFactory = (
	target: Coord,
	_: Coord,
	replacedCoords: Coord[],
	__: Coord
) => {
	const lastReplaced = replacedCoords[replacedCoords.length - 1];
	return {
		coords: [target, { type: CoordType.Linear, x: lastReplaced.x, y: lastReplaced.y }],
		removePrevious: false,
		removeNext: true,
	};
};

export const curvePinchCoordFactory: PinchCoordsFactory = (
	target: Coord,
	previousCoord: Coord,
	replacedCoords: Coord[],
	nextCoord: Coord
) => {
	console.log(replacedCoords);
	const lastReplaced = replacedCoords[replacedCoords.length - 1];
	//const coords = create2CubicBeziers({ x: target.x, y: target.y! }, previousCoord, lastReplaced);
	const coords = create2CubicBeziers(
		{ x: target.x, y: target.y! },
		replacedCoords,
		previousCoord,
		lastReplaced
	);
	return {
		coords,
		removePrevious: false,
		removeNext: true,
	};
};
