import SVGElementController from "./comps/SVGElementController";

export default class LineContoller extends SVGElementController {
	constructor(element?: SVGElement, type: SVGElementTypes = "line") {
		super(element, type);
	}
}
