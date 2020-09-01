import SVGGeometryController from './SVGGeometryController';
import { CoordType } from './comps/interfaces';

export default class EllipseController extends SVGGeometryController {
	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = 'ellipse') {
		super(element, type);
	}

	public setRadius(radiusX: number, radiusY: number) {
		this.validateOrInsertFirstCoordZeroZero();
		this.getCoordsRef()[1] = { type: CoordType.Linear, x: radiusX, y: radiusY };
		return this;
	}
}
