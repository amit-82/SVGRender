import SegmentsDescriptor from './SegmentsDescriptor';
import { pointOnCoordCalculators } from 'src/controls/comps/utils/bezier_utils';
import { findIntersection, FindIntersectionResult } from '../utils/line_utils';
import { emptyObj } from 'src/helpers/object_utils';
import { getDistance } from 'src/helpers/shape_utils';
import { Coord, Point } from '../interfaces';

// ------------ GET POINT ON BORDER -------------
export interface GetPointOnBorderOptions {
	repeat?: boolean; // whether can go to the start if passed the end or back from the end if over the start
	constrainToStart?: boolean; // distance min 0 (won't affect if repeat is true)
	constrainToEnd?: boolean; // distance max total border length (won't affect if repeat is true)
}

export interface GetPointOnBorderResults extends Point {
	distance: number;
	segmentIndex: number;
	percentageOfSegment: number;
}

const getPointOnBorderOptsDef: GetPointOnBorderOptions = {
	repeat: false,
	constrainToStart: true,
	constrainToEnd: true,
};

export const getPointOnBorder = (
	desc: SegmentsDescriptor,
	distance: number,
	opts: GetPointOnBorderOptions = emptyObj
): GetPointOnBorderResults | null => {
	if (!desc.calculated) throw new Error('segmentsDescriptor must run calculate');

	opts = { ...getPointOnBorderOptsDef, ...opts };
	distance = opts.repeat ? (desc.totalLength + distance) % desc.totalLength : distance;
	distance = !opts.constrainToStart ? distance : Math.max(0, distance);
	distance = !opts.constrainToEnd ? distance : Math.min(desc.totalLength, distance);

	let segmentIndex = -1;
	let accLength: number;

	// identify the segment that holds the end of the requested distance
	// TODO: performence options 1: use smarter Binary search (not sure needed, how many segments do we expect?)
	// TODO: performance options 2 (probably better): use cached simple coords accumulated lengths (doesn't exists yet)
	for (let i = 0; i < desc.segmentLengths.length; i++) {
		if (desc.segmentAccumulatedLengths[i] >= distance) {
			accLength = desc.segmentAccumulatedLengths[i];
			segmentIndex = i;
			break;
		}
	}

	// distance is not in the limits of the shape's border's length
	if (segmentIndex === -1 || distance < 0 || distance > desc.totalLength) return null;

	const prevAccLength = segmentIndex === 0 ? 0 : desc.segmentAccumulatedLengths[segmentIndex - 1];

	// calculate how much in the identified segment the distance goes in to (0 to 1 range)
	const percentageOfSegment = (distance - prevAccLength) / (accLength! - prevAccLength);

	// +1 because first coord is a moveTo and not really a part of the shape (shapes without moveTo get moveTo 0,0 as first coord)
	let segment: Coord = desc.coords[segmentIndex + 1];
	let prevSeg: Coord = desc.coords[segmentIndex];

	const p = pointOnCoordCalculators[segment.type](segment, percentageOfSegment, prevSeg);
	return {
		...p,
		distance,
		percentageOfSegment,
		segmentIndex: segmentIndex + 1,
	};
};

// ------------ GET SEGMENT BY SIMPLE COORD INDEX ---------------
export interface GetSegmentBySimpleCoordIndexResult {
	segmentIndex: number;
	distanceFromSegmentStart: number;
	distanceFromShapeStart: number;
}

/**
 * Getting the segment by a simple coord index
 * @param desc
 * @param simpleCoordIndex must be even since even numbers are for x and odd for y
 * @param pointOnCoordToNextCoord
 */
export const getSegmentBySimpleCoordIndex = (
	desc: SegmentsDescriptor,
	simpleCoordIndex: number,
	pointOnCoordToNextCoord?: Point
): GetSegmentBySimpleCoordIndexResult | null => {
	if (!desc.calculated) throw new Error('segmentsDescriptor must run calculate');
	if (simpleCoordIndex % 2) throw new Error('simpleCoordIndex must be odd number');

	let segmentIndex: number = -1;
	let acc: number = 0;
	let prevAcc: number = 0;
	for (let i = 0; i < desc.segmentToSimplifiedRange.length; i++) {
		acc += desc.segmentToSimplifiedRange[i];
		if (acc > simpleCoordIndex) {
			segmentIndex = i;
			//prevAcc = acc - (i > 0 ? desc.segmentToSimplifiedRange[i - 1] : 0);
			prevAcc = acc - desc.segmentToSimplifiedRange[i];
			break;
		}
	}

	if (segmentIndex === -1) {
		return null;
	}

	const accPrevAccDistance = acc - prevAcc;
	const simpleCoordDeltaPercentageFromSegmentStart =
		accPrevAccDistance > 0 ? (simpleCoordIndex - prevAcc) / (acc - prevAcc) : 0;

	let distanceFromSimpleSegmentStart = 0;

	// calculate distance inside the simplified coord (coord = from this coord to the next)
	if (pointOnCoordToNextCoord !== undefined) {
		//} && segmentIndex < desc.simpilfied.coords!.length - 2) {
		const x = desc.simpilfied.coords![simpleCoordIndex];
		const y = desc.simpilfied.coords![simpleCoordIndex + 1];
		distanceFromSimpleSegmentStart = getDistance(
			pointOnCoordToNextCoord.x,
			pointOnCoordToNextCoord.y,
			x,
			y
		);
	}

	const distanceFromSimpleCoordToParentSegmentStart =
		desc.segmentLengths[segmentIndex] * simpleCoordDeltaPercentageFromSegmentStart;

	const distanceFromSegmentStart =
		distanceFromSimpleSegmentStart + distanceFromSimpleCoordToParentSegmentStart;

	const distanceFromShapeStart =
		(segmentIndex > 0 ? desc.segmentAccumulatedLengths[segmentIndex - 1] : 0) +
		distanceFromSegmentStart;

	return {
		segmentIndex,
		distanceFromSegmentStart,
		distanceFromShapeStart,
	};
};

// --------- GET BORDER INTERSECTION -------------------
export interface GetBorderIntersectionOptions {
	coord2X?: number;
	coord2Y?: number;
	maxDistanceToCenter?: number;
	maxDistanceToIntersection?: number;
	stopOnFirstIntersection?: boolean;
}

export interface GetBorderIntersectionResult extends FindIntersectionResult {
	anchorToIntersectionDistance: number;
	anchorToCenterDistance: number;
}

const getBorderIntersectionDefOpts: GetBorderIntersectionOptions = {
	stopOnFirstIntersection: true,
};

/**
 * Returns data about intersection point of shapes border and a line. false if no intersection.
 * @param descriptior
 * @param coord1X
 * @param coord1Y
 * @param opts
 */
export const getBorderIntersection = (
	descriptior: SegmentsDescriptor,
	coord1X: number,
	coord1Y: number,
	opts: GetBorderIntersectionOptions = emptyObj
): GetBorderIntersectionResult | null => {
	if (!descriptior.calculated) throw new Error('segmentsDescriptor must run calculate');

	opts = { ...getBorderIntersectionDefOpts, ...opts };

	const anchorToCenterDistance = getDistance(
		coord1X,
		coord1Y,
		descriptior.center!.x,
		descriptior.center!.y
	);
	if (opts.maxDistanceToCenter && opts.maxDistanceToCenter < anchorToCenterDistance) {
		return null;
	}

	const inter = findIntersection(
		coord1X,
		coord1Y,
		opts.coord2X ?? descriptior.center!.x,
		opts.coord2Y ?? descriptior.center!.y,
		descriptior.simpilfied.coords!,
		opts.stopOnFirstIntersection
	);

	if (!inter) return null;

	const anchorToIntersectionDistance = getDistance(
		coord1X,
		coord1Y,
		inter.intersection.x,
		inter.intersection.y
	);
	if (
		opts.maxDistanceToIntersection &&
		opts.maxDistanceToIntersection < anchorToIntersectionDistance
	) {
		return null;
	}

	return {
		...inter,
		anchorToCenterDistance,
		anchorToIntersectionDistance,
	};
};
