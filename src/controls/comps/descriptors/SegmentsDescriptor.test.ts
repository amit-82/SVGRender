import SegmentsDescriptor from './SegmentsDescriptor';
import { CoordType } from '../interfaces';

const simpleLine = [
	{ type: CoordType.Linear, x: 0, y: 0 },
	{ type: CoordType.Linear, x: 10, y: 0 },
];

const rect = [
	{ type: CoordType.Linear, x: 50, y: 10 },
	{ type: CoordType.Linear, x: 150, y: 10 },
	{ type: CoordType.Linear, x: 150, y: 110 },
	{ type: CoordType.Linear, x: 50, y: 110 },
	{ type: CoordType.Linear, x: 50, y: 10 },
];

describe('Test SegmentDescriptor', () => {
	const segDesc: SegmentsDescriptor = new SegmentsDescriptor('path');

	test('Shoud calculate the line length', () => {
		segDesc.calculate(simpleLine);
		expect(segDesc.totalLength).toBe(10);
	});

	test.each([
		[{ x: 5, y: 0 }, simpleLine],
		[{ x: 100, y: 60 }, rect],
	])('should have %j as center of %j', (expected, coords) => {
		segDesc.calculate(coords);
		expect(segDesc.center).toEqual(expected);
	});
});
