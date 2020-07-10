import { Coord, Point } from '../interfaces';
import { coordLengthCalculators } from '../utils/coords_utils';
import { valueAssigned } from 'src/helpers/input_validations';

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
		// reset data
		this._totalLength = 0;

		// TODO: check if there are better options to empty array and leave reference
		this._segmentLengths.length = 0;

		let xSum = 0;
		let ySum = 0;

		// calculate totalLength of shape and fill segment length
		coords.forEach((coord, index) => {
			// skip first coord. it's just a moveTo.

			if (index > 0 /* || !shouldIgnoreFirstMoveToCoord(this._svgElemType, coords)*/) {
				const lengthCalculator = coordLengthCalculators[coord.type.toString()];

				// split sum and totalLength to two seperated functions inside this function scope (?)

				xSum += coord.x;
				if (valueAssigned(coord.y)) {
					ySum += coord.y!;
				}

				const segmentLength: number = lengthCalculator(coord, coords[index - 1]);

				this._segmentLengths.push(segmentLength);
				this._totalLength += segmentLength;
			}
		});

		// calculate center point

		console.log(xSum, ySum, this._segmentLengths.length);

		this._center = {
			x: xSum / this._segmentLengths.length,
			y: ySum / this._segmentLengths.length,
		};
	}
}
