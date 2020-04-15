import PolylineController from "./PolylineController";

export default class PolygonController extends PolylineController {
	constructor(element?: SVGElement, type: SVGElementTypes = "polygon") {
		super(element, type);
	}
}
