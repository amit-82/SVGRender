import { Coord, CoordType, CubicBezierCoord } from '../comps/interfaces';

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
	const coords: Coord[] = [];

	throw 'not implemented yet';
};
