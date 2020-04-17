import { Coord, CoordType } from "./interfaces";
import { coordLengthCalculators } from "./utils/coords_utils";
import {
	CoordinatesParser,
	CoordinatesParsers,
} from "./coordinates/CoordinatesParser";

let idCounter = 0;

export default abstract class SVGElementController {
	private _id: number;
	private _type: SVGElementTypes;

	protected element: SVGElement | undefined;
	private _coords: Coord[] = [];
	private _segmentLengths: number[] = [];
	private _totalLength: number = 0;

	private _coordinatesParser: CoordinatesParser;

	constructor(element?: SVGElement, type: SVGElementTypes = "svg") {
		this._id = ++idCounter;
		this._type = type;
		this.element = element;
		this._coordinatesParser = CoordinatesParsers[type];
	}

	get id() {
		return this._id;
	}

	get type() {
		return this._type;
	}

	get coordinatesParser() {
		return this._coordinatesParser;
	}

	public getAttributesForElement() {
		return this._coordinatesParser.createElementAttrs(this._coords);
	}

	public updateElement() {
		if (this.element) {
			const attrs = this.getAttributesForElement();
			Object.entries(attrs).forEach(([key, value]) => {
				this.element!.setAttribute(key, value as string);
			});
		}
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

	protected getCoordsRef() {
		return this._coords;
	}

	protected appendCoord(coord: Coord, isMoveTo: boolean = false) {
		if (!isMoveTo) {
			this.validateOrInsertFirstCoordZeroZero();
		}

		this._coords.push(coord);
		this._coordinatesParser.validateCoordinates(this._coords);
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

	public moveTo(x: number, y: number) {
		const coord: Coord = { type: CoordType.Linear, x, y };
		this.appendCoord(coord, true);
		return this;
	}
}
