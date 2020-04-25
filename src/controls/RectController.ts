import { valueAssigned } from '../helpers/input_validations';
import SVGGeometryController from './SVGGeometryController';
import { CoordType } from './comps/interfaces';

export default class RectController extends SVGGeometryController {
	/* istanbul ignore next */
	constructor(element?: SVGGeometryElement, type: SVGElementTypes = 'rect') {
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
