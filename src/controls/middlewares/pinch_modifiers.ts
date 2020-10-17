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
	console.log(previousCoord, nextCoord);

	const nextCoordIsLinear = nextCoord.type === CoordType.Linear;
	// TODO: once bezier is handeled - dont instantiate
	let coords: Coord[];
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
