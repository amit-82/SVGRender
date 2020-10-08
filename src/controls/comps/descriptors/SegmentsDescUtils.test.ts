import {
	getBorderIntersection,
	GetBorderIntersectionResult,
	getSegmentBySimpleCoordIndex,
	GetSegmentBySimpleCoordIndexResult,
	getPointOnBorder,
} from './SegmentsDescUtils';
import pathController from '../../PathController';

const GATE_ERROR = 'segmentsDescriptor must run calculate';
const ODD_INDEX = 'simpleCoordIndex must be odd number';

describe('Test getBorderIntersection function', () => {
	const path1 = new pathController();
	path1.moveTo(100, 50).lineTo(200, 50).lineTo(200, 100).lineTo(100, 100);
	const desc1 = path1.segmentsDescriptor;

	it('should throw exception since calculate() was not called', () => {
		expect(() => getBorderIntersection(desc1, 0, 0)).toThrowError(GATE_ERROR);
	});

	it('should get intersection on first segment', () => {
		const expectedResults: GetBorderIntersectionResult = {
			simpleCoordIndex: 0,
			intersection: { x: 150, y: 50 },
			anchorToCenterDistance: 50,
			anchorToIntersectionDistance: 25,
			distanceFromSimpleCoordStart: 50,
			p0x: 150,
			p0y: 25,
			p1x: 150,
			p1y: 75,
			p2x: 100,
			p2y: 50,
			p3x: 200,
			p3y: 50,
		};
		path1.calculate();
		const results = getBorderIntersection(desc1, 150, 25);
		expect(results).not.toBeNull();
		expect(results).toEqual(expectedResults);
	});

	it('should not return intersection when there is not intersection (shape is open on this side)', () => {
		const results = getBorderIntersection(desc1, 75, 75);
		expect(results).toBeNull();
	});

	it('should NOT RETURN results because too far from center', () => {
		const results = getBorderIntersection(desc1, 150, 25, { maxDistanceToCenter: 49 });
		expect(results).toBeNull();
	});

	it('should return results because NOT too far from center', () => {
		const results = getBorderIntersection(desc1, 150, 25, { maxDistanceToCenter: 51 });
		expect(results).not.toBeNull();
	});

	it('should NOT RETURN results because too far from intersection', () => {
		const results = getBorderIntersection(desc1, 150, 25, { maxDistanceToIntersection: 24 });
		expect(results).toBeNull();
	});

	it('should not return results because NOT too far from intersection', () => {
		const results = getBorderIntersection(desc1, 150, 25, { maxDistanceToIntersection: 26 });
		expect(results).not.toBeNull();
	});
});

describe('Test getSegmentBySimpleCoordIndex function', () => {
	const path1 = new pathController();
	path1.moveTo(100, 50).lineTo(200, 50).lineTo(200, 100).lineTo(100, 100);
	const desc1 = path1.segmentsDescriptor;

	it('should throw exception since calculate() was not called', () => {
		expect(() => getSegmentBySimpleCoordIndex(desc1, 0)).toThrowError(GATE_ERROR);
	});

	it('should return FIRST segment data', () => {
		path1.calculate();
		const expectedResult: GetSegmentBySimpleCoordIndexResult = {
			segmentIndex: 0,
			distanceFromShapeStart: 0,
			distanceFromSegmentStart: 0,
		};
		const result = getSegmentBySimpleCoordIndex(desc1, 0 * 2);
		expect(result).toEqual(expectedResult);
	});

	it('should throw exception when simpleCoordIndex is odd', () => {
		expect(() => getSegmentBySimpleCoordIndex(desc1, 3)).toThrowError(ODD_INDEX);
	});

	it('should return SECOND segment data', () => {
		const expectedResult: GetSegmentBySimpleCoordIndexResult = {
			segmentIndex: 1,
			distanceFromShapeStart: 100,
			distanceFromSegmentStart: 0,
		};
		const result = getSegmentBySimpleCoordIndex(desc1, 1 * 2);
		expect(result).toEqual(expectedResult);
	});

	it('should return THIRD segment data', () => {
		const expectedResult: GetSegmentBySimpleCoordIndexResult = {
			segmentIndex: 2,
			distanceFromShapeStart: 150,
			distanceFromSegmentStart: 0,
		};
		const result = getSegmentBySimpleCoordIndex(desc1, 2 * 2);
		expect(result).toEqual(expectedResult);
	});

	it('should return THIRD segment data with optional point on path', () => {
		path1.calculate();
		const expectedResult: GetSegmentBySimpleCoordIndexResult = {
			segmentIndex: 2,
			distanceFromShapeStart: 175,
			distanceFromSegmentStart: 25,
		};
		const result = getSegmentBySimpleCoordIndex(desc1, 2 * 2, { x: 200, y: 75 });
		expect(result).toEqual(expectedResult);
	});

	it('should return correct segment data when using quadratic bezier curve', () => {
		const pathBez = new pathController()
			.moveTo(200, 50)
			.lineTo(300, 50)
			.cubicTo(400, 50, 450, 100, 500, 150)
			.cubicTo(450, 350, 250, -75, 300, 150)
			.calculate();

		const result = getSegmentBySimpleCoordIndex(pathBez.segmentsDescriptor, 2 * 100);
		expect(result!.segmentIndex).toEqual(2);
		expect(result!.distanceFromShapeStart).toBeCloseTo(334.67, 1);
		expect(result!.distanceFromSegmentStart).toBeCloseTo(3.57, 1);
	});
});

describe('Test getPointOnBorder function', () => {
	const path1 = new pathController();
	path1.moveTo(100, 50).lineTo(200, 50).lineTo(200, 100).lineTo(100, 100).lineTo(100, 50);
	const desc1 = path1.segmentsDescriptor;

	it('should throw exception since calculate() was not called', () => {
		expect(() => getPointOnBorder(desc1, 50)).toThrowError(GATE_ERROR);
	});

	it('should get correct point on first segment', () => {
		path1.calculate();
		expect(getPointOnBorder(desc1, 50)).toEqual({
			x: 150,
			y: 50,
			segmentIndex: 1,
			percentageOfSegment: 0.5,
		});
	});

	it("should get correct point when option's 'repeat' is TRUE and going over the path's full length", () => {
		expect(getPointOnBorder(desc1, 301, { repeat: true })).toEqual({
			x: 101,
			y: 50,
			segmentIndex: 1,
			percentageOfSegment: 0.01,
		});
	});

	it("should return null when option's 'repeat' is FALSE (default) and going over the path's full length", () => {
		expect(getPointOnBorder(desc1, 301)).toBeNull();
	});
});
