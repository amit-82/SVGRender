import {
	getBorderIntersection,
	GetBorderIntersectionOptions,
	getPointOnBorder,
	getSegmentBySimpleCoordIndex,
} from '../comps/descriptors/SegmentsDescUtils';
import { Coord, CoordType } from '../comps/interfaces';
import DeformGeoMiddleware from '../comps/middelwares/render-middlewares/DeformGeoMiddleware';
import { coordBreakersMap, CoordBreaker } from '../comps/utils/line_utils';
import { PinchCoordsFactory, linearPinchCoordsFactory } from './pinch_modifiers';

export type PinchBaseWidthCalculator = (
	distanceFromBorder: number,
	distanceFromCenter: number
) => number;

const NO_PINCH = { borderP1: null, borderP2: null };

class PinchMiddleware extends DeformGeoMiddleware {
	// mouse details
	private svg: SVGElement | undefinedOrNull;

	private mx: number = 0;
	private my: number = 0;
	private mPinch: boolean = false;

	public options: GetBorderIntersectionOptions = {};
	public pinchBaseWidthCalculator: PinchBaseWidthCalculator | number = 50;

	private onMouseEvent: (e: MouseEvent) => void | undefined;

	public pinchCoordFactory: PinchCoordsFactory = linearPinchCoordsFactory;

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
		// TODO: should inform when there was no change in mPinch since previous updateCoords call - so SVGElementController.updateElement can be skipped

		if (this.mPinch) {
			const { borderP1: p1, borderP2: p2 } = this.getPinchArea();

			if (!p1 || !p2) return coords;

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

			const startCoordIndex = segmentsRange[0];
			const endCoordIndex = segmentsRange[segmentsRange.length - 1];
			const startCoord = coords[startCoordIndex];
			const prevStartCoord = coords[startCoordIndex - 1];
			const endCoord = coords[endCoordIndex];
			const prevEndCoord = coords[endCoordIndex - 1];
			const coordStartBreaker: CoordBreaker = coordBreakersMap[startCoord.type];
			const coordEndBreaker: CoordBreaker = coordBreakersMap[endCoord.type];

			const mouseCoord: Coord = { type: CoordType.Linear, x: this.mx, y: this.my };
			const nextCoordIsLinear = endCoord.type === CoordType.Linear;

			if (segmentsRange.length === 1) {
				// break start and ends in same segment
				const coordParts = coordStartBreaker(
					startCoord,
					[p1.percentageOfSegment, p2.percentageOfSegment],
					prevStartCoord
				);

				// insert
				const { coords: pinchCoords, removeNext } = this.pinchCoordFactory(
					mouseCoord,
					coordParts[0],
					coordParts[1]
				);

				coordParts.splice(1, removeNext ? 1 : 0, ...pinchCoords);

				coords.splice(segmentsRange[0], 1, ...coordParts);
			} else {
				// break start in one segment and ends in another - might have more segments in between
				const startCoords = coordStartBreaker(
					startCoord,
					[p1.percentageOfSegment],
					prevStartCoord
				);
				const endCoords = coordEndBreaker(endCoord, [p2.percentageOfSegment], prevEndCoord);

				if (!endCoords) {
					throw 'missing endParts';
				}

				// replace start
				coords[startCoordIndex] = startCoords[0];

				if (startCoordIndex > endCoordIndex) {
					// jumps over shape's end and back to the start and more
					const {
						coords: pinchCoords,
						removeNext,
						removePrevious,
					} = this.pinchCoordFactory(mouseCoord, startCoords[0], endCoords[0]);

					//debugger;

					// remove all cords after startCoord
					coords.length = startCoordIndex;
					// push first startCoord
					coords.push(startCoords[0]);
					// push newly henerated coords
					pinchCoords.forEach(c => coords.push(c));
					//coords.push(pinchCoords[0]);
					// remove all cord before and including endCoord
					coords.splice(0, endCoordIndex);
					// add to start first endCoord
					if (!removeNext) {
						coords.unshift(endCoords[0]);
					}
					// add to start new generated coords - it was already included somewhere else
					coords.unshift(...pinchCoords);
				} else {
					const {
						coords: pinchCoords,
						removeNext,
						removePrevious,
					} = this.pinchCoordFactory(mouseCoord, startCoords[0], endCoords[0]);
					// break start index at lower index than break end index (not going over shape's end)
					coords.splice(endCoordIndex, 1, ...endCoords);
					if (endCoordIndex - startCoordIndex > 1) {
						// remove coords between break start and end
						coords.splice(startCoordIndex + 1, endCoordIndex - startCoordIndex - 1);
					}

					coords.splice(startCoordIndex + 1, removeNext ? 1 : 0, ...pinchCoords);
				}
			}
		}
		return coords;
	}

	public setMouse(x: number, y: number, isPinching: boolean) {
		this.mx = x;
		this.my = y;
		this.mPinch = isPinching;
	}

	protected getPinchArea() {
		const borderIntersection = getBorderIntersection(
			this.controller!.segmentsDescriptor,
			this.mx,
			this.my,
			this.options
		);

		if (!borderIntersection) {
			return NO_PINCH;
		}

		const offset =
			typeof this.pinchBaseWidthCalculator === 'number'
				? this.pinchBaseWidthCalculator
				: this.pinchBaseWidthCalculator(
						borderIntersection.anchorToIntersectionDistance,
						borderIntersection.anchorToCenterDistance
				  );
		if (offset === 0) {
			return NO_PINCH;
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
