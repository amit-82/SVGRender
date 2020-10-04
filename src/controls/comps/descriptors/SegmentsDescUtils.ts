import SegmentsDescriptor from './SegmentsDescriptor';
import { findIntersection, FindIntersectionResult } from '../utils/line_utils';
import { emptyObj } from 'src/helpers/object_utils';
import { getDistance } from 'src/helpers/shape_utils';
import { Point } from '../interfaces';

// ------------ GET POINT ON BORDER -------------
export interface GetPointOnBorderOptions {
	repeat?: boolean; // whether can go to the start if passed the end or back from the end if over the start
}

export interface GetPointOnBorderResults {
	x: number;
	y: number;
}

export const getPointOnBorder = (
	desc: SegmentsDescriptor,
	distance: number,
	opts: GetPointOnBorderOptions = emptyObj
): GetPointOnBorderResults | null => {
	if (!desc.calculated) throw new Error('segmentsDescriptor must run calculate');

	// TODO: uncomment
	//distance = !opts.repeat ? distance : (desc.totalLength + distance) % desc.totalLength;

	let segmentIndex = -1;
	let accLength: number;

	// find segment that covers requested length
	// TODO: use smarter Binary search (not sure needed)
	for (let i = 0; i < desc.segmentLengths.length; i++) {
		if (desc.segmentAccumulatedLengths[i] >= distance) {
			accLength = desc.segmentAccumulatedLengths[i];
			segmentIndex = i;
			break;
		}
	}

	if (segmentIndex === -1 || distance < 0 || distance > desc.totalLength) return null;

	const prevAccLength = segmentIndex === 0 ? 0 : desc.segmentAccumulatedLengths[segmentIndex - 1];

	// TODO: need to calculate fraction on segment
	const fractionOnSegment = (distance - prevAccLength) / (accLength! - prevAccLength);
	//console.log('fractionOnSegment', fractionOnSegment, distance, accLength!);

	return {
		x: desc.coords[segmentIndex].x,
		y: desc.coords[segmentIndex].y!,
	};
};

// ------------ GET SEGMENT BY SIMPLE COORD INDEX ---------------
export interface GetSegmentBySimpleCoordIndexResult {
	segmentIndex: number;
	deltaPercentage: number;
	distanceFromSegmentStart: number;
	distanceFromShapeStart: number;
}

/**
 * Getting the segment by a simple coord index
 * @param desc
 * @param simpleCoordIndex must be even since even numbers are for x and odd for y
 * @param point
 */
export const getSegmentBySimpleCoordIndex = (
	desc: SegmentsDescriptor,
	simpleCoordIndex: number,
	point?: Point // TODO: GET SPECIFIC POINT TO CALCULATE OFFSET FROM SEGMENT START
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
	const deltaPercentage =
		accPrevAccDistance > 0 ? (simpleCoordIndex - prevAcc) / (acc - prevAcc) : 0;

	let distanceFromSimpleSegmentStart = 0;

	// calculate distance inside the simplified segment (segment = from this coord to the next)
	if (point !== undefined && segmentIndex < desc.simpilfied.coords!.length - 2) {
		const x = desc.simpilfied.coords![segmentIndex];
		const y = desc.simpilfied.coords![segmentIndex + 1];
		const nextX = desc.simpilfied.coords![segmentIndex + 2];
		const nextY = desc.simpilfied.coords![segmentIndex + 3];

		/*
		distanceFromSimpleSegmentStart = Math.max(
			nextX === x ? -Infinity : (nextX - point.x) / (nextX - x),
			nextY === y ? -Infinity : (nextY - point.y) / (nextY - y)
		);

		const xPerc = Math.abs(nextX - point.x - (nextX - x));
		const yPerc = Math.abs(nextY - point.y - (nextY - y));

		console.log('>> X ', xPerc, nextX, point.x, x);
		console.log('>> Y ', yPerc, nextY, point.y, y);
		insideSimpleSegmPercentage =
			distanceFromSimpleSegmentStart === -Infinity ? 0 : distanceFromSimpleSegmentStart;

		console.log('GOT POINT!', insideSimpleSegmPercentage, nextX, point.x, x, nextY, point.y, y);
		*/
	}

	const distanceFromSegmentStart = desc.segmentLengths[segmentIndex] * deltaPercentage; // + distanceFromSimpleSegmentStart;
	const distanceFromShapeStart =
		(segmentIndex > 0 ? desc.segmentAccumulatedLengths[segmentIndex - 1] : 0) +
		distanceFromSegmentStart;

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
): GetBorderIntersectionResult | null => {
	if (!descriptior.calculated) throw new Error('segmentsDescriptor must run calculate');

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
		descriptior.simpilfied.coords!
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
