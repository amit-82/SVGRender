import SVGElementController from "./comps/SVGElementController";
import { CoordType } from "./comps/interfaces";

export default class CircleController extends SVGElementController {
	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = "circle") {
		super(element, type);
	}

	public setRadius(radius: number) {
		this.validateOrInsertFirstCoordZeroZero();
		this.getCoordsRef()[1] = { type: CoordType.Scalar, x: radius };
		return this;
	}
}
