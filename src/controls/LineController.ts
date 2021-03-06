import SVGGeometryController from './SVGGeometryController';
import { Coord, CoordType, lineToAble, hasSegmentsDescriptor, Point } from './comps/interfaces';
import SegmentsDescriptor from './comps/descriptors/SegmentsDescriptor';
import { RenderMiddleware } from './comps/middelwares/render-middlewares/interfaces';

export default class LineContoller
	extends SVGGeometryController
	implements lineToAble, hasSegmentsDescriptor {
	private _segmentsDescriptor: SegmentsDescriptor;
	private _renderMiddlewares: RenderMiddleware[] = [];

	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = 'line') {
		super(element, type);
		this._segmentsDescriptor = new SegmentsDescriptor(type);
	}
	public get segmentsDescriptor(): SegmentsDescriptor {
		return this._segmentsDescriptor;
	}

	/**
	 * Draws a stright line from latest point to target x, y
	 * @param x
	 * @param y
	 */
	public lineTo(x: number, y: number) {
		const coord: Coord = { type: CoordType.Linear, x, y };
		this.appendCoord(coord);
		return this;
	}

	public get segmentLengths() {
		return this._segmentsDescriptor.segmentLengths;
	}

	public get totalLength() {
		return this._segmentsDescriptor.totalLength;
	}

	/**
	 * Calculate geometry data like total outline length, segments length, center point, reduce shape to simple stright lines (important to paths)
	 */
	public calculate() {
		this._segmentsDescriptor.calculate(this.getCoordsRef());
		return super.calculate();
	}

	public getAttributesForElement() {
		const reduceRenderMiddlewareCoordsUpdate = (
			acc: Coord[],
			middleware: RenderMiddleware
		): Coord[] => {
			return middleware.active ? middleware.updateCoords(acc) : acc;
		};

		const coords: Coord[] = this._renderMiddlewares.reduce(reduceRenderMiddlewareCoordsUpdate, [
			...this.getCoordsRef(),
		]);
		return this.coordinatesParser.createElementAttrs(coords);
	}

	public getBorderIntersection(p1: Point, shapeAnchor?: Point) {
		return this._segmentsDescriptor.getBorderIntersection(this.getCoordsRef(), p1, shapeAnchor);
	}

	public addRenderMiddleware(middleware: RenderMiddleware) {
		this._renderMiddlewares.push(middleware);
		middleware.setController(this);
	}

	public removeRenderMiddleware(middleware: RenderMiddleware) {
		middleware.unsetController();
		const i = this._renderMiddlewares.indexOf(middleware);
		if (i > -1) {
			this._renderMiddlewares.splice(i, 1);
		}
	}

	public get hasRednerMiddlewares() {
		return this._renderMiddlewares.length > 0;
	}
}
