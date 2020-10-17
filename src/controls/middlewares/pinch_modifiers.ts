import { Coord, CoordType } from '../comps/interfaces';

export interface CoordsInfo {
	startCoordIndex: number;
	endCoordIndex: number;
	startCoord: Coord;
	prevStartCoord: Coord;
	endCoord: Coord;
	prevEndCoord: Coord;
}

export type PinchOutlineModifier = (
	coords: Coord[],
	coordsInfo: CoordsInfo,
	target: Coord,
	segmentsRange: number[],
	startParts: Coord[],
	endParts?: Coord[]
) => void;

export const LinearPinch: PinchOutlineModifier = (
	coords: Coord[],
	coordsInfo: CoordsInfo,
	target: Coord,
	segmentsRange: number[],
	startParts: Coord[],
	endParts?: Coord[]
) => {
	const {
		startCoordIndex,
		endCoordIndex,
		startCoord,
		prevStartCoord,
		endCoord,
		prevEndCoord,
	} = coordsInfo;

	const nextCoordIsLinear = endCoord.type === CoordType.Linear;
	console.log('nextCoordIsLinear', nextCoordIsLinear);

	if (segmentsRange.length === 1) {
		// break start and ends in same segment
		const coordParts = startParts;

		// insert
		coordParts.splice(1, 0, target);
		/*
		if (nextCoordIsLinear) {
		} else {
			coordParts.splice(1, 0, target);
		}
		*/
		coords.splice(segmentsRange[0], 1, ...coordParts);
	} else {
		// break start in one segment and ends in another - might have more segments in between
		if (!endParts) {
			throw 'missing endParts';
		}

		// replace start
		coords[startCoordIndex] = startParts[0];
		if (startCoordIndex > endCoordIndex) {
			// jumps over shape's end and back to the start and more

			// remove all cords after startCoord
			coords.length = startCoordIndex;
			// push first startCoord
			coords.push(startParts[0]);
			// push mouse
			coords.push(target);
			// remove all cord bebore and including endCoord
			coords.splice(0, endCoordIndex);
			// unshift first endCoord
			coords.unshift(endParts[0]);
			// unshift mouse
			coords.unshift(target);
		} else {
			// break start index at lower index than break end index (not going over shape's end)
			coords.splice(endCoordIndex, 1, ...endParts);
			if (endCoordIndex - startCoordIndex > 1) {
				// remove coords between break start and end
				coords.splice(startCoordIndex + 1, endCoordIndex - startCoordIndex - 1);
			}

			coords.splice(startCoordIndex + 1, 0, target);
		}
	}
};
