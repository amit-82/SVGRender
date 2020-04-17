import PolylineController from "./PolylineController";

export default class PolygonController extends PolylineController {
	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = "polygon") {
		super(element, type);
	}
}
