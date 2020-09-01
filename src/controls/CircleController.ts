import SVGGeometryController from './SVGGeometryController';
import { CoordType } from './comps/interfaces';

export default class CircleController extends SVGGeometryController {
	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = 'circle') {
		super(element, type);
	}

	public setRadius(radius: number) {
		this.validateOrInsertFirstCoordZeroZero();
		this.getCoordsRef()[1] = { type: CoordType.Scalar, x: radius };
		return this;
	}

	public moveTo(x: number, y: number) {
		this.getCoordsRef()[0] = { x, y, type: CoordType.Linear };
		return this;
	}
}
