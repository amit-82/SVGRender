import { allValuesAssigned } from "../helpers/input_validations";
import PolylineController from "./PolylineController";
import {
	CoordType,
	CubicBezierCoord,
	QuadraticBezierCoord,
	deformableSVGController,
} from "./comps/interfaces";
import SegmentsDescriptor from "./comps/descriptors/SegmentsDescriptor";

export default class PathController extends PolylineController implements deformableSVGController {
	
	private _instructions: stringOrNumber[];
	private _segmentsDescriptor: SegmentsDescriptor;

	constructor(
		element?: SVGElement,
		instructions: stringOrNumber[] = [],
		type: SVGElementTypes = "path"
	) {
		super(element, type);
		this._instructions = instructions;
		this.element = element;
		this._segmentsDescriptor = new SegmentsDescriptor(type);
	}

	public getInstructions(): stringOrNumber[] {
		return [...this._instructions];
	}

	public getAttributesForElement() {
		return this.coordinatesParser.createElementAttrs(
			this.getCoordsRef(),
			this._instructions
		);
	}

	public clear(updateElement = false) {
		this._instructions.length = 0;
		return super.clear(updateElement);
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

	public closePath() {
		this._instructions.push("z");
		// TODO: should be part of the segments and total length in the segment desc... make sure it is working
		return this;
	}

	public get isClosed() {
		return this._instructions[this._instructions.length - 1] === "z";
	}

	public moveTo(x: number, y: number) {
		this._instructions.push(`M${x},${y}`);
		super.moveTo(x, y);
		return this;
	}

	public lineTo(x: number, y: number) {
		this._instructions.push(`L${x},${y}`);
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

		this._instructions.push(
			`C${ctrlX},${ctrlY},${ctrlX2},${ctrlY2},${endX},${endY}`
		);

		if (allValuesAssigned(mirrorEndX, mirrorEndY)) {
			throw "bezierCubic with mirror not implemented";
			this._instructions.push(`S${mirrorEndX},${mirrorEndY}`);
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
		this._instructions.push(`Q${ctrlX},${ctrlY},${endX},${endY}`);
		if (allValuesAssigned(mirrorEndX, mirrorEndY)) {
			throw "bezierCubic with mirror not implemented";
			this._instructions.push(`T${mirrorEndX},${mirrorEndY}`);
		}
		const coord: QuadraticBezierCoord = {
			type: CoordType.BezierMirror,
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
