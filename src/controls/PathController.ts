import { allValuesAssigned } from '../helpers/input_validations';
import PolylineController from './PolylineController';
import { CoordType, CubicBezierCoord, QuadraticBezierCoord } from './comps/interfaces';

export default class PathController extends PolylineController {
	constructor(element?: SVGElement, type: SVGElementTypes = 'path') {
		super(element, type);
		this.element = element;
	}

	public getAttributesForElement() {
		if (this.hasRednerMiddlewares) {
			return super.getAttributesForElement();
		}
		return this.coordinatesParser.createElementAttrs(this.getCoordsRef());
	}

	public clear(updateElement = false) {
		return super.clear(updateElement);
	}

	public closePath() {
		const firstCoord = this.getCoordsRef()[0];
		this.lineTo(firstCoord.x, firstCoord.y!);
		// TODO: should be part of the segments and total length in the segment desc... make sure it is working
		return this;
	}

	public unclose() {
		// TODO: unit test unclose
		if (this.isClosed) {
			this.getCoordsRef().pop();
		}
	}

	public get isClosed() {
		const coords = this.getCoordsRef();
		const lastCoord = coords[coords.length - 1];
		return coords[0].x == lastCoord.x && coords[0].y == lastCoord.y;
	}

	public moveTo(x: number, y: number) {
		super.moveTo(x, y);
		return this;
	}

	public lineTo(x: number, y: number) {
		this.validateOrInsertFirstCoordZeroZero();
		super.lineTo(x, y);
		return this;
	}

	public cubicTo = (
		ctrlX: number,
		ctrlY: number,
		ctrlX2: number,
		ctrlY2: number,
		endX: number,
		endY: number,
		mirrorEndX?: number,
		mirrorEndY?: number
	) => {
		// add mirror S
		if (allValuesAssigned(mirrorEndX, mirrorEndY)) {
			throw 'bezierCubic with mirror not implemented';
		}

		const coord: CubicBezierCoord = {
			type: CoordType.BezierCubic,
			x: endX,
			y: endY,
			ctrlX,
			ctrlY,
			ctrlX2,
			ctrlY2,
		};
		this.appendCoord(coord);
		return this;
	};

	public quadTo = (
		ctrlX: number,
		ctrlY: number,
		endX: number,
		endY: number,
		mirrorEndX?: number,
		mirrorEndY?: number
	) => {
		const isMirror = allValuesAssigned(mirrorEndX, mirrorEndY);
		if (isMirror) {
			throw 'bezierCubic with mirror not implemented';
		}
		const coord: QuadraticBezierCoord = {
			type: isMirror ? CoordType.BezierMirror : CoordType.BezierQuadratic,
			x: endX,
			y: endY,
			ctrlX,
			ctrlY,
			mirrorX: mirrorEndX,
			mirrorY: mirrorEndY,
		};
		this.appendCoord(coord);

		return this;
	};
}
