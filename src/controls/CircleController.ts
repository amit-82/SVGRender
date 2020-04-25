import SVGGeometryController from './SVGGeometryController';
import { CoordType } from './comps/interfaces';

export default class CircleController extends SVGGeometryController {
	/* istanbul ignore next */
	constructor(element?: SVGGeometryElement, type: SVGElementTypes = 'circle') {
		super(element, type);
	}

	public setRadius(radius: number) {
		this.validateOrInsertFirstCoordZeroZero();
		this.getCoordsRef()[1] = { type: CoordType.Scalar, x: radius };
		return this;
	}
}
