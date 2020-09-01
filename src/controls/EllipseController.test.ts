import CircleController from './CircleController';
import { CoordType } from './comps/interfaces';

describe('Test CircleController', () => {
	let circle: CircleController;
	beforeEach(() => {
		circle = new CircleController();
	});

	test('Append coords for render circle without moveTo at 0,0', () => {
		circle.setRadius(10);
		expect(circle.getCoords()).toEqual([
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Scalar, x: 10 },
		]);
	});

	test('Append coords for render circle moveTo at 20,30', () => {
		circle.moveTo(20, 30);
		circle.setRadius(15);
		expect(circle.getCoords()).toEqual([
			{ type: CoordType.Linear, x: 20, y: 30 },
			{ type: CoordType.Scalar, x: 15 },
		]);
	});
});
