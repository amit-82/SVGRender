import SVGGeometryController from './SVGGeometryController';
import { Coord, CoordType, lineToAble, deformableSVGController } from './comps/interfaces';
import SegmentsDescriptor from './comps/descriptors/SegmentsDescriptor';

export default class LineContoller extends SVGGeometryController
	implements lineToAble, deformableSVGController {
	private deformableSegmentIndices: Set<number>;
	private _segmentsDescriptor: SegmentsDescriptor;

	/* istanbul ignore next */
	constructor(element?: SVGElement, type: SVGElementTypes = 'line') {
		super(element, type);
		this.deformableSegmentIndices = new Set<number>();
		this._segmentsDescriptor = new SegmentsDescriptor(type);
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

	public addDeformableSegmentIndices(indices: number[]): deformableSVGController {
		throw 'Method not implemented';
		return this;
	}
	public removeDeformableSegmentIndices(indices: number[]): deformableSVGController {
		throw 'Method not implemented';
		return this;
	}
	public clearDeformableSegmentIndices(): deformableSVGController {
		throw 'Method not implemented';
		return this;
	}
	public getDeformableSegmentIndices(): Set<number> {
		return this.deformableSegmentIndices;
	}
}
