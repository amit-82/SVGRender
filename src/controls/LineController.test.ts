import LineController from './LineController';
import { CoordType } from './comps/interfaces';

describe('Test LineController', () => {
	let line: LineController;
	beforeEach(() => {
		line = new LineController();
	});

	test('Append coords for line without moveTo', () => {
		const coords = line.lineTo(50, 70).getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Linear, x: 50, y: 70 },
		]);
	});
	test('Append coords for line with moveTo', () => {
		const coords = line.moveTo(25, 30).lineTo(50, 70).getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 25, y: 30 },
			{ type: CoordType.Linear, x: 50, y: 70 },
		]);
	});
});
