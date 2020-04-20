import { Coord, CoordType } from './interfaces';
import { CoordinatesParser, CoordinatesParsers } from './coordinates/CoordinatesParser';
import SegmentsDescriptor from './descriptors/SegmentsDescriptor';

let idCounter = 0;

export default abstract class SVGElementController {
	private _id: number;
	private _type: SVGElementTypes;
	private _segmentsDescriptor: SegmentsDescriptor;

	protected element: SVGElement | undefined;
	private _coords: Coord[] = [];

	private _coordinatesParser: CoordinatesParser;

	constructor(element?: SVGElement, type: SVGElementTypes = 'svg') {
		this._id = ++idCounter;
		this._type = type;
		this.element = element;
		this._coordinatesParser = CoordinatesParsers[type];
		this._segmentsDescriptor = new SegmentsDescriptor();
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
		return this._segmentsDescriptor.segmentLengths;
	}

	protected get totalLength() {
		return this._segmentsDescriptor.totalLength;
	}

	public getCoords(): Coord[] {
		return this._coords.map(coord => ({ ...coord }));
	}

	protected getCoordsRef() {
		return this._coords;
	}

	/**
	 * @description must be called after manipulation (or a series of manipulation) of the shape that may effect size
	 */
	protected calculate(): void {
		this._segmentsDescriptor.calculate(this._coords);
	}

	protected appendCoord(coord: Coord, isMoveTo: boolean = false) {
		if (!isMoveTo) {
			this.validateOrInsertFirstCoordZeroZero();
		}

		this._coords.push(coord);
		this._coordinatesParser.validateCoordinates(this._coords);
	}

	protected validateOrInsertFirstCoordZeroZero() {
		this._coords.length === 0 && this._coords.push({ type: CoordType.Linear, x: 0, y: 0 });
	}

	public moveTo(x: number, y: number) {
		const coord: Coord = { type: CoordType.Linear, x, y };
		this.appendCoord(coord, true);
		return this;
	}
}
