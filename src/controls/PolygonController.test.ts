import PolygonController from './PolygonController';
import { CoordType } from './comps/interfaces';

describe('Test PolygonController', () => {
	let polygon: PolygonController;
	beforeEach(() => {
		polygon = new PolygonController();
	});

	test('Append coords for multiple lines without initial moveTo', () => {
		const coords = polygon.lineTo(25, 30).lineTo(25, 50).lineTo(10, 75).getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Linear, x: 25, y: 30 },
			{ type: CoordType.Linear, x: 25, y: 50 },
			{ type: CoordType.Linear, x: 10, y: 75 },
		]);
	});

	test('Append coords for multiple lines with initial moveTo', () => {
		const coords = polygon
			.moveTo(10, 30)
			.lineTo(25, 30)
			.lineTo(25, 50)
			.lineTo(10, 75)
			.getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 10, y: 30, move: true },
			{ type: CoordType.Linear, x: 25, y: 30 },
			{ type: CoordType.Linear, x: 25, y: 50 },
			{ type: CoordType.Linear, x: 10, y: 75 },
		]);
	});
});
