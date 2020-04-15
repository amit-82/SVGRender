import { Coord, CoordType } from "./interfaces";
import { coordLengthCalculators } from "./utils/coords_utils";

let idCounter = 0;

export default abstract class SVGElementController {
	private _id: number;

	private _coords: Coord[] = [];
	private _segmentLengths: number[] = [];
	private _totalLength: number = 0;

	constructor() {
		this._id = ++idCounter;
	}

	get id() {
		return this._id;
	}

	protected get segmentLengths() {
		return this._segmentLengths;
	}

	protected get totalLength() {
		return this._totalLength;
	}

	public getCoords(): Coord[] {
		return this._coords.map((coord) => ({ ...coord }));
	}

	protected appendCoord(coord: Coord, isMoveTo: boolean = false) {
		if (!isMoveTo) {
			this.validateOrInsertFirstCoordZeroZero();
		}
		this._coords.push(coord);
	}

	protected validateOrInsertFirstCoordZeroZero() {
		this._coords.length === 0 &&
			this._coords.push({ type: CoordType.Linear, x: 0, y: 0 });
	}

	/**
	 * @description must be called after any manipulation (or a series of manipulation) of the shape
	 */
	protected calculate(): void {
		// reset data
		this._totalLength = 0;
		this._segmentLengths.length = 0;

		// calculate totalLength of shape and
		this._coords.forEach((coord, index) => {
			if (index > 0) {
				const lengthCalculator = coordLengthCalculators[coord.type.toString()];

				const segmentLength: number = lengthCalculator(
					coord,
					this._coords[index - 1]
				);

				this._segmentLengths.push(segmentLength);
				this._totalLength += segmentLength;
			}
		});
	}
}
