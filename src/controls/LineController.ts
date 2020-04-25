import SVGGeometryController from './SVGGeometryController';
import { Coord, CoordType, lineToAble } from './comps/interfaces';

export default class LineContoller extends SVGGeometryController implements lineToAble {
	/* istanbul ignore next */
	constructor(element?: SVGGeometryElement, type: SVGElementTypes = 'line') {
		super(element, type);
	}

	public lineTo(x: number, y: number) {
		const coord: Coord = { type: CoordType.Linear, x, y };
		this.appendCoord(coord);
		return this;
	}
}
