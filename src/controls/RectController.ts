import SVGElementController from "./comps/SVGElementController";
import { CoordType } from "./comps/interfaces";
import { isEmpty, valueAssigned } from "../helpers/input_validations";

export default class RectController extends SVGElementController {
	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = "rect") {
		super(element, type);
	}

	public setDimensions(width: number, height: number) {
		this.validateOrInsertFirstCoordZeroZero();
		this.getCoordsRef()[1] = { type: CoordType.Linear, x: width, y: height };
		return this;
	}

	public setCornerRadius(x: number, y?: number) {
		this.getCoordsRef()[2] = {
			type: CoordType.Linear,
			x,
			y: valueAssigned(y) ? y : x,
		};
		return this;
	}
}
