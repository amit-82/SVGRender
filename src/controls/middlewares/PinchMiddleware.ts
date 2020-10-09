import { emptyObj } from 'src/helpers/object_utils';
import {
	getBorderIntersection,
	GetBorderIntersectionOptions,
	getPointOnBorder,
	GetPointOnBorderResults,
	getSegmentBySimpleCoordIndex,
} from '../comps/descriptors/SegmentsDescUtils';
import { Coord, CoordType } from '../comps/interfaces';
import DeformGeoMiddleware from '../comps/middelwares/render-middlewares/DeformGeoMiddleware';
import { coordBreakersMap, CoordBreaker } from '../comps/utils/line_utils';

export type PinchBaseWidthCalculator = (
	distanceFromCenter: number,
	distanceFromBorder: number
) => number;

class PinchMiddleware extends DeformGeoMiddleware {
	// mouse details
	private svg: SVGElement | undefinedOrNull;

	private mx: number = 0;
	private my: number = 0;
	private mPinch: boolean = false;

	public options: GetBorderIntersectionOptions | undefined = undefined;
	public pinchBaseWidthCalculator: PinchBaseWidthCalculator | number = 50;

	private onMouseEvent: (e: MouseEvent) => void | undefined;

	constructor() {
		super();
		this.onMouseEvent = this.mouseHandler.bind(this);
	}

	public attachListeners() {
		this.svg = this.controller?.getElement()?.closest('svg');
		if (!this.svg) {
			throw 'controller must have an element and the element must be a child on and SVGElement';
		}
		this.svg.addEventListener('mousemove', this.onMouseEvent);
		this.svg.addEventListener('mouseup', this.onMouseEvent);
		this.svg.addEventListener('mousedown', this.onMouseEvent);
	}

	public detachListeners(unsetSVGRef: boolean) {
		if (this.svg) {
			this.svg.removeEventListener('mousemove', this.onMouseEvent);
			this.svg.removeEventListener('mousedown', this.onMouseEvent);
			this.svg.removeEventListener('mouseup', this.onMouseEvent);
			if (unsetSVGRef) {
				this.svg = undefined;
			}
		}
	}

	private mouseHandler(e: MouseEvent) {
		switch (e.type) {
			case 'mousemove':
				this.mx = e.offsetX;
				this.my = e.offsetY;
				break;
			case 'mousedown':
				const res = getBorderIntersection(
					this.controller!.segmentsDescriptor,
					this.mx,
					this.my,
					this.options
				);
				this.mPinch = !!res;
				break;
			case 'mouseup':
				this.mPinch = false;
				break;
		}
	}

	public updateCoords(coords: Coord[]): Coord[] {
		if (this.mPinch) {
			const { borderP1: p1, borderP2: p2 } =
				this.getPinchArea() ||
				(emptyObj as {
					borderP1: GetPointOnBorderResults;
					borderP2: GetPointOnBorderResults;
				});
			if (!p1 || !p2) {
				// no pinch
				console.log('no pinch');
				return coords;
			}

			// split segment(s)
			const segmentsRange: number[] = [p1.segmentIndex];
			if (p1.segmentIndex !== p2.segmentIndex) {
				// not breaking the same segment
				if (p1.segmentIndex < p2.segmentIndex) {
					// normal
					for (let i = p1.segmentIndex; i < p2.segmentIndex; i++) {
						segmentsRange.push(i + 1);
					}
				} else {
					// breaking occur over the shapes end and back to the start
					for (let i = p1.segmentIndex + 1; i < coords.length; i++) {
						segmentsRange.push(i);
					}
					for (let i = 1; i <= p2.segmentIndex; i++) {
						segmentsRange.push(i);
					}
				}
			}

			const coordStartIndex = segmentsRange[0];
			const coordEndIndex = segmentsRange[segmentsRange.length - 1];
			const coordStart = coords[coordStartIndex];
			const coordStartPrev = coords[coordStartIndex - 1];
			const coordEnd = coords[coordEndIndex];
			const coordEndPrev = coords[coordEndIndex - 1];
			const coordStartBreaker: CoordBreaker = coordBreakersMap[coordStart.type];
			if (segmentsRange.length === 1) {
				// break start and ends in same segment
				const coordParts = coordStartBreaker(
					coordStart,
					[p1.percentageOfSegment, p2.percentageOfSegment],
					coordStartPrev
				);

				// insert
				coordParts.splice(1, 0, { type: CoordType.Linear, x: this.mx, y: this.my });
				coords.splice(segmentsRange[0], 1, ...coordParts);
			} else {
				// break start in one segment and ends in another - might have more segments in between
				const coordEndBreaker: CoordBreaker = coordBreakersMap[coordEnd.type];
				const startCoord = coordStartBreaker(
					coordStart,
					[p1.percentageOfSegment],
					coordStartPrev
				)[0];
				const endCoords = coordEndBreaker(coordEnd, [p2.percentageOfSegment], coordEndPrev);
				coords[coordStartIndex] = startCoord;
				coords.splice(coordEndIndex, 1, ...endCoords);

				coords.splice(coordStartIndex + 1, 0, {
					type: CoordType.Linear,
					x: this.mx,
					y: this.my,
				});
			}

			// TODO: FIX OVER END OF SHAPE BUG
		}
		return coords;
	}

	public setMouse(x: number, y: number, isPinching: boolean) {
		this.mx = x;
		this.my = y;
		this.mPinch = isPinching;
	}

	public setPinchThreshhold() {}

	protected getPinchArea() {
		const borderIntersection = getBorderIntersection(
			this.controller!.segmentsDescriptor,
			this.mx,
			this.my,
			this.options
		);

		if (!borderIntersection) {
			return null;
		}

		const offset =
			typeof this.pinchBaseWidthCalculator === 'number'
				? this.pinchBaseWidthCalculator
				: this.pinchBaseWidthCalculator(
						borderIntersection.anchorToCenterDistance,
						borderIntersection.anchorToIntersectionDistance
				  );
		if (offset === 0) {
			return null;
		}

		const segDesc = this.controller!.segmentsDescriptor;
		const segmentData = getSegmentBySimpleCoordIndex(
			segDesc,
			borderIntersection.simpleCoordIndex,
			borderIntersection.intersection
		);

		// distance from intersection point to shape's start
		let totalDistance = segmentData!.distanceFromShapeStart;

		const borderP1 = getPointOnBorder(segDesc, totalDistance - offset / 2, {
			repeat: segDesc.lastCoordEndsAtFirst,
		});
		const borderP2 = getPointOnBorder(segDesc, totalDistance + offset / 2, {
			repeat: segDesc.lastCoordEndsAtFirst,
		});

		if (!borderP1 || !borderP2) {
			throw 'failed to get all points on shape. this is not suppose to happen.';
		}

		return {
			borderP1,
			borderP2,
		};
	}
}

export default PinchMiddleware;
