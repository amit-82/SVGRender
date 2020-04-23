import SVGElementController from './comps/SVGElementController';
import { Coord, CoordType } from './comps/interfaces';

export default class LineContoller extends SVGElementController {
	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = 'line') {
		super(element, type);
	}

	public lineTo(x: number, y: number) {
		const coord: Coord = { type: CoordType.Linear, x, y };
		this.appendCoord(coord);
		return this;
	}
}
