import SegmentsDescriptor from './SegmentsDescriptor';
import { findIntersection, FindIntersectionResult } from '../utils/line_utils';
import { emptyObj } from 'src/helpers/object_utils';
import { getDistance } from 'src/helpers/shape_utils';

export interface GetBorderIntersectionOptions {
	targetX?: number;
	targetY?: number;
	maxDistanceToCenter?: number;
	maxDistanceToIntersection?: number;
}

export type GetBorderIntersectionResult = FindIntersectionResult & {
	anchorToIntersectionDistance: number;
	anchorToCenterDistance: number;
};

export const getBorderIntersection = (
	descriptior: SegmentsDescriptor,
	anchorX: number,
	anchorY: number,
	opts: GetBorderIntersectionOptions = emptyObj
): GetBorderIntersectionResult | false => {
	if (!descriptior.calculated) {
		throw new Error('SegmentsDescriptor must run calculate');
	}

	const anchorToCenterDistance = getDistance(
		anchorX,
		anchorY,
		descriptior.center!.x,
		descriptior.center!.y
	);
	if (opts.maxDistanceToCenter && opts.maxDistanceToCenter < anchorToCenterDistance) {
		return false;
	}

	const inter = findIntersection(
		anchorX,
		anchorY,
		opts.targetX ?? descriptior.center!.x,
		opts.targetY ?? descriptior.center!.y,
		descriptior.simpilfied.coords!
	);

	if (!inter) return false;

	const anchorToIntersectionDistance = getDistance(
		anchorX,
		anchorY,
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
