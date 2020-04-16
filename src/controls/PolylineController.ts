import { Coord, CoordType } from "./comps/interfaces";
import SVGElementController from "./comps/SVGElementController";
import LineContoller from "./LineController";

export default class PolylineController extends LineContoller {
	constructor(element?: SVGElement, type: SVGElementTypes = "polyline") {
		super(element, type);
	}
}
