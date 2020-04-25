import PolylineController from './PolylineController';

export default class PolygonController extends PolylineController {
	/* istanbul ignore next */
	constructor(element?: SVGGeometryElement, type: SVGElementTypes = 'polygon') {
		super(element, type);
	}
}
