import SegmentsDescriptor from './SegmentsDescriptor';
import { findIntersection, FindIntersectionResult } from '../utils/line_utils';
import { emptyObj } from 'src/helpers/object_utils';
import { getDistance } from 'src/helpers/shape_utils';

// ------------ GET POINT ON BORDER -------------
export interface GetPointOnBorderOptions {
	repeat?: boolean; // whether can go to the start if passed the end or back from the end if over the start
}

export interface GetPointOnBorderResults {
	x: number;
	y: number;
}

export const getPointOnBorder = (
	descriptior: SegmentsDescriptor,
	distance: number,
	opts: GetPointOnBorderOptions = emptyObj
): GetPointOnBorderResults | null => {
	if (!descriptior.calculated) throw new Error('SegmentsDescriptor must run calculate');

	distance = !opts.repeat
		? distance
		: (descriptior.totalLength + distance) % descriptior.totalLength;

	let segmentIndex = -1;

	// TODO: use samarter Binary search
	for (let i = 0; i < descriptior.segmentLengths.length; i++) {
		if (descriptior.segmentAccumulatedLengths[i] >= distance) {
			segmentIndex = i;
			break;
		}
	}

	if (segmentIndex === -1) return null;

	// TODO: need to calculate fraction on segment
	return {
		x: descriptior.simpilfied.coords![segmentIndex],
		y: descriptior.simpilfied.coords![segmentIndex + 1],
	};
};

// ------------ GET SEGMENT BY SIMPLE COORD INDEX ---------------
export interface GetSegmentBySimpleCoordIndexResult {
	segmentIndex: number;
	deltaPercentage: number;
	distanceFromSegmentStart: number;
	distanceFromShapeStart: number;
}
export const getSegmentBySimpleCoordIndex = (
	desc: SegmentsDescriptor,
	simpleCoordIndex: number
): GetSegmentBySimpleCoordIndexResult | null => {
	if (!desc.calculated) throw new Error('SegmentsDescriptor must run calculate');

	let segmentIndex: number = -1;
	let acc: number = 0;
	let prevAcc: number = 0;
	for (let i = 0; i < desc.segmentToSimplifiedRange.length; i++) {
		acc += desc.segmentToSimplifiedRange[i];
		if (acc > simpleCoordIndex) {
			segmentIndex = i;
			prevAcc = i > 0 ? desc.segmentToSimplifiedRange[i - 1] : 0;
			break;
		}
	}

	if (segmentIndex === -1) {
		return null;
	}

	const deltaPercentage = (simpleCoordIndex - prevAcc) / (acc - prevAcc);
	const distanceFromSegmentStart = desc.segmentLengths[segmentIndex] * deltaPercentage;
	const distanceFromShapeStart =
		(segmentIndex > 0 ? desc.segmentAccumulatedLengths[segmentIndex - 1] : 0) +
		distanceFromSegmentStart;

	//debugger;

	return {
		segmentIndex,
		deltaPercentage,
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
}

export interface GetBorderIntersectionResult extends FindIntersectionResult {
	anchorToIntersectionDistance: number;
	anchorToCenterDistance: number;
}

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
): GetBorderIntersectionResult | false => {
	if (!descriptior.calculated) throw new Error('SegmentsDescriptor must run calculate');

	const anchorToCenterDistance = getDistance(
		coord1X,
		coord1Y,
		descriptior.center!.x,
		descriptior.center!.y
	);
	if (opts.maxDistanceToCenter && opts.maxDistanceToCenter < anchorToCenterDistance) {
		return false;
	}

	const inter = findIntersection(
		coord1X,
		coord1Y,
		opts.coord2X ?? descriptior.center!.x,
		opts.coord2Y ?? descriptior.center!.y,
		descriptior.simpilfied.coords!
	);

	if (!inter) return false;

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
		return false;
	}

	return {
		...inter,
		anchorToCenterDistance,
		anchorToIntersectionDistance,
	};
};
