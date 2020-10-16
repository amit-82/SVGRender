import SVGGeometryController from './SVGGeometryController';
import createSVGElement from '../createSVGElement';
import { Coord, CoordType } from './comps/interfaces';

// minimal class to extend abstract SVGGeometryController
class SVGGeoConcrete extends SVGGeometryController {
	constructor(elem: SVGElement = createSVGElement('polygon')) {
		super(elem, elem.nodeName as SVGElementTypes);
	}

	public doAppendCoord(coord: Coord, isMoveTo: boolean = false) {
		this.appendCoord(coord, isMoveTo);
	}
}

describe('Test SVGGeometryController coords', () => {
	const ctrl = new SVGGeoConcrete();
	test('moveTo should append 1 Linear Coord', () => {
		ctrl.moveTo(50, 25);
		expect(ctrl.getCoords()).toEqual([{ type: CoordType.Linear, x: 50, y: 25, move: true }]);
	});

	test('appendCoord should add to linear coords', () => {
		ctrl.doAppendCoord({ type: CoordType.Linear, x: 100, y: 25 });
		ctrl.doAppendCoord({ type: CoordType.Linear, x: 75, y: 100 });
		expect(ctrl.getCoords()).toEqual([
			{ type: CoordType.Linear, x: 50, y: 25, move: true },
			{ type: CoordType.Linear, x: 100, y: 25 },
			{ type: CoordType.Linear, x: 75, y: 100 },
		]);
	});
});
