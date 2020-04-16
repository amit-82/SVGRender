import SVGElementController from "./comps/SVGElementController";
import { Coord, CoordType } from "./comps/interfaces";

export default class LineContoller extends SVGElementController {
	constructor(element?: SVGElement, type: SVGElementTypes = "line") {
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
}
