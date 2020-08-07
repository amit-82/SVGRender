import { Coord, CoordType, Point } from '../interfaces';
import { coordLengthCalculators, getPointsOfCoord } from '../utils/bezier_utils';
import { valueAssigned } from 'src/helpers/input_validations';
/*
const shouldIgnoreFirstMoveToCoord = (type: SVGElementTypes, coords: Coord[]): boolean => {
	if (type === 'line') return false;
	if (coords.length === 1) return false;

	if (['polyline', 'polygon', 'path'].includes(type)) {
		const { x: x1, y: y1 } = coords[0];
		const { x: x2, y: y2 } = coords[coords.length - 1];
		return x1 === x2 && y1 === y2;
	}

	return true;
};
*/
const coord0: Coord = { x: 0, y: 0, type: CoordType.Linear };

export default class SegmentsDescriptor {
	private _svgElemType: SVGElementTypes;
	private _segmentLengths: number[] = [];
	private _totalLength: number = 0;
	private _center: Point | undefined;

	constructor(elementType: SVGElementTypes) {
		this._svgElemType = elementType;
	}

	public get svgElemType() {
		return this._svgElemType;
	}

	public get segmentLengths() {
		return this._segmentLengths;
	}

	public get totalLength() {
		return this._totalLength;
	}

	public get center() {
		return this._center;
	}

	/**
	 * Should be called only be the coupled SVGElementController
	 * @param coords
	 */
	public calculate(coords: Coord[]): void {
		// TODO: check if there are better options to empty array and leave reference
		this._segmentLengths.length = 0;
		// reset data
		this._totalLength = 0;

		let xSum = 0;
		let ySum = 0;

		// is closed shape with last coord is actially the first
		const lastCoordEqualFirst =
			coords.length > 1 &&
			coords[0].x === coords[coords.length - 1].x &&
			coords[0].y === coords[coords.length - 1].y;

		let divideBy = 0;

		for (let coordIndex = 0; coordIndex < coords.length; coordIndex++) {
			const coord = coords[coordIndex];

			const lengthCalculator = coordLengthCalculators[coord.type.toString()];

			//TODO: maybe split sum and totalLength to two seperated functions inside this function scope (?)
			const isLastCoordInClosedShape: boolean =
				lastCoordEqualFirst && coordIndex === coords.length - 1;

			const points = getPointsOfCoord(coord);
			for (let i = 0; i < points.length; i += 2) {
				if (!isLastCoordInClosedShape || i < points.length - 2) {
					++divideBy;
					// not last coord's last 2 points (x, y)
					xSum += points[i];
					if (valueAssigned(points[i + 1])) {
						ySum += points[i + 1];
					}
				}
			}

			// if we are in first coord, it is because firstCoordIsMoveTo is true and prev coord is 0,0
			if (coordIndex > 0) {
				const prevCoord: Coord = coords[coordIndex - 1];
				const segmentLength: number = lengthCalculator(coord, prevCoord);
				this._segmentLengths.push(segmentLength);
				this._totalLength += segmentLength;
			}
		}

		// calculate totalLength of shape and fill segment length
		coords.forEach((coord, index) => {});

		// calculate center point

		//const divideBy = lastCoordEqualFirst ? coords.length - 1 : coords.length;

		this._center = {
			x: xSum / divideBy,
			y: ySum / divideBy,
		};
	}
}
