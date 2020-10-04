import {
	getBorderIntersection,
	GetBorderIntersectionResult,
	getSegmentBySimpleCoordIndex,
	GetSegmentBySimpleCoordIndexResult,
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
			segmentIndex: 0,
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
			deltaPercentage: 0,
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
			deltaPercentage: 0,
		};
		const result = getSegmentBySimpleCoordIndex(desc1, 1 * 2);
		expect(result).toEqual(expectedResult);
	});

	it('should return THIRD segment data', () => {
		const expectedResult: GetSegmentBySimpleCoordIndexResult = {
			segmentIndex: 2,
			distanceFromShapeStart: 150,
			distanceFromSegmentStart: 0,
			deltaPercentage: 0,
		};
		const result = getSegmentBySimpleCoordIndex(desc1, 2 * 2);
		expect(result).toEqual(expectedResult);
	});
	/*
	it('should return THIRD segment data with distance from segment start', () => {
		path1.calculate();
		const expectedResult: GetSegmentBySimpleCoordIndexResult = {
			segmentIndex: 2,
			distanceFromShapeStart: 150,
			distanceFromSegmentStart: 50,
			deltaPercentage: 0.5,
		};
		const result = getSegmentBySimpleCoordIndex(desc1, 2 * 2, { x: 150, y: 100 });
		expect(result).toEqual(expectedResult);
    });
    */
});
