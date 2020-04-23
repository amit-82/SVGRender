import LineContoller from './LineController';

export default class PolylineController extends LineContoller {
	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = 'polyline') {
		super(element, type);
	}
}
