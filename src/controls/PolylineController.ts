import { Coord, CoordType } from "./comps/interfaces";
import SVGElementController from "./comps/SVGElementController";

export default class PolylineController extends SVGElementController {
	constructor(element?: SVGElement, type: SVGElementTypes = "polyline") {
		super(element, type);
	}

	public moveTo(x: number, y: number) {
		const coord: Coord = { type: CoordType.Linear, x, y };
		this.appendCoord(coord, true);
		return this;
	}

	public lineTo(x: number, y: number) {
		const coord: Coord = { type: CoordType.Linear, x, y };
		this.appendCoord(coord);
		return this;
	}

	public updateElement() {
		this.element &&
			this.element.setAttribute("points", this.getCoordsRef().join(","));
	}
}
