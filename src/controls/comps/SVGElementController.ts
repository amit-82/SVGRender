import { Coord, CoordType } from './interfaces';
import { CoordsToElemAttrs, CoordsToElemAttrsMap } from './coordinates/CoordsToElemAttrs';

let idCounter = 0;

export default abstract class SVGElementController {
	private _id: number;
	private _type: SVGElementTypes;
	

	protected element: SVGElement | undefined;
	private _coords: Coord[] = [];

	private _coordinatesParser: CoordsToElemAttrs;

	constructor(element?: SVGElement, type: SVGElementTypes = 'svg') {
		this._id = ++idCounter;
		this._type = type;
		this.element = element;
		this._coordinatesParser = CoordsToElemAttrsMap[type];
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

		return this;
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
	public calculate() {
		return this;
	}

	protected appendCoord(coord: Coord, isMoveTo: boolean = false) {
		if (!isMoveTo) {
			this.validateOrInsertFirstCoordZeroZero();
		}

		this._coords.push(coord);
		this._coordinatesParser.validateCoordinates(this._coords);
	}

	public clear(updateElement = false) {
		this._coords.length = 0;
		if (updateElement) {
			this.updateElement();
		}
		return this;
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
