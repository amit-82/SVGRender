import { Coord } from '../interfaces';
import { coordLengthCalculators } from '../utils/coords_utils';

export default class SegmentsDescriptor {

	private _segmentLengths: number[] = [];
	private _totalLength: number = 0;

	public get segmentLengths() {
		return this._segmentLengths;
	}

	public get totalLength() {
		return this._totalLength;
	}

	/**
	 * Should be called only be the coupled SVGElementController
	 * @param coords
	 */
	public calculate(coords: Coord[]): void {
		// reset data
		this._totalLength = 0;
		this._segmentLengths.length = 0;

		// calculate totalLength of shape and fill segment length
		coords.forEach((coord, index) => {
			if (index > 0) {
				const lengthCalculator = coordLengthCalculators[coord.type.toString()];

				const segmentLength: number = lengthCalculator(coord, coords[index - 1]);

				this._segmentLengths.push(segmentLength);
				this._totalLength += segmentLength;
			}
        });
	}
}
