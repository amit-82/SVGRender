import SVGGeometryController from './SVGGeometryController';
import { Coord, CoordType, lineToAble, hasSegmentsDescriptor } from './comps/interfaces';
import SegmentsDescriptor from './comps/descriptors/SegmentsDescriptor';

export default class LineContoller extends SVGGeometryController
	implements lineToAble, hasSegmentsDescriptor {
	private _segmentsDescriptor: SegmentsDescriptor;

	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = 'line') {
		super(element, type);
		this._segmentsDescriptor = new SegmentsDescriptor(type);
	}
	public get segmentsDescriptor(): SegmentsDescriptor {
		return this._segmentsDescriptor;
	}

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

	public calculate() {
		this._segmentsDescriptor.calculate(this.getCoordsRef());
		return super.calculate();
	}
}
