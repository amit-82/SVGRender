import { Coord, CoordType } from '../comps/interfaces';

export interface PinchCoordsFactoryResult {
	coords: Coord[];
	removePrevious: boolean;
	removeNext: boolean;
}

export type PinchCoordsFactory = (
	target: Coord,
	previousCoord: Coord,
	nextCoord: Coord
) => PinchCoordsFactoryResult;

export const linearPinchCoordsFactory: PinchCoordsFactory = (
	target: Coord,
	previousCoord: Coord,
	nextCoord: Coord
) => {
	const nextCoordIsLinear = nextCoord.type === CoordType.Linear;
	let coords;
	if (nextCoordIsLinear) {
		coords = [target];
	} else {
		coords = [target, { type: CoordType.Linear, x: nextCoord.x, y: nextCoord.y }];
	}
	return {
		coords,
		removePrevious: false,
		removeNext: coords.length > 1,
	};
};
