import SegmentsDescriptor from './SegmentsDescriptor';
import { Coord, CoordType, CubicBezierCoord } from '../interfaces';

const simpleLine = [
	{ type: CoordType.Linear, x: 0, y: 0 },
	{ type: CoordType.Linear, x: 10, y: 0 },
];

const simpleLine2 = [
	{ type: CoordType.Linear, x: 50, y: 0 },
	{ type: CoordType.Linear, x: 50, y: 100 },
	{ type: CoordType.Linear, x: 150, y: 100 },
	{ type: CoordType.Linear, x: 150, y: 200 },
];

const rect = [
	{ type: CoordType.Linear, x: 50, y: 10 },
	{ type: CoordType.Linear, x: 150, y: 10 },
	{ type: CoordType.Linear, x: 150, y: 110 },
	{ type: CoordType.Linear, x: 50, y: 110 },
	{ type: CoordType.Linear, x: 50, y: 10 },
];

const rectNotClosed = [
	{ type: CoordType.Linear, x: 50, y: 10 },
	{ type: CoordType.Linear, x: 150, y: 10 },
	{ type: CoordType.Linear, x: 150, y: 110 },
	{ type: CoordType.Linear, x: 50, y: 110 },
];

// TODO: find center of shapes with beziers
/*
const rectNotClosed = [
	{ type: CoordType.BezierCubic, x: 50, y: 10, ctrlX: 150, ctrlY: 0, ctrlX2: 200, ctrlY2: 150, } as CubicBezierCoord,
	{ type: CoordType.Linear, x: 150, y: 10 },
	{ type: CoordType.Linear, x: 150, y: 110 },
	{ type: CoordType.Linear, x: 50, y: 110 },
];
*/

const pathWithCubicBezier: Coord[] = [
	{ type: CoordType.Linear, x: 50, y: 150 },
	{ type: CoordType.Linear, x: 100, y: 150 },
	{
		type: CoordType.BezierCubic,
		x: 250,
		y: 0,
		ctrlX: 250,
		ctrlY: 350,
		ctrlX2: 100,
		ctrlY2: 200,
	} as CubicBezierCoord,
	{ type: CoordType.Linear, x: 50, y: 200 },
	{ type: CoordType.Linear, x: 50, y: 150 },
];

describe('Test SegmentDescriptor', () => {
	const segDesc: SegmentsDescriptor = new SegmentsDescriptor('path');

	test.each([
		[
			pathWithCubicBezier,
			{ x: 133, y: 175 },
			764,
			[50, 381.5222524537826, 282.842712474619, 50],
		],
		[simpleLine, { x: 5, y: 0 }, 10, [10]],
		[simpleLine2, { x: 100, y: 100 }, 300, [100, 100, 100]],
		[rect, { x: 100, y: 60 }, 400, [100, 100, 100, 100]],
		[rectNotClosed, { x: 100, y: 60 }, 300, [100, 100, 100]],
	])('should have %j with center %j, length %j', (coords, center, length, lengths) => {
		segDesc.calculate(coords);
		expect(segDesc.center!.x).toBeCloseTo(center.x, 0.1);
		expect(segDesc.center!.y).toBeCloseTo(center.y, 0.1);
		expect(segDesc.totalLength).toBeCloseTo(length, 0.1);
		expect(segDesc.segmentLengths).toEqual(lengths);
	});
});
