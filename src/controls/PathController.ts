import { allValuesAssigned } from "../helpers/input_validations";
import PolylineController from "./PolylineController";
import {
	CoordType,
	CubicBezierCoord,
	QuadraticBezierCoord,
} from "./comps/interfaces";

export default class PathController extends PolylineController {
	private _instructions: stringOrNumber[];

	constructor(
		element?: SVGElement,
		instructions: stringOrNumber[] = [],
		type: SVGElementTypes = "path"
	) {
		super(element, type);
		this._instructions = instructions;
		this.element = element;
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

	public closePath() {
		this._instructions.push("z");
		return this;
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

	public bezierCubicTo = (
		ctrlX: number,
		ctrlY: number,
		ctrlX2: number,
		ctrlY2: number,
		endX: number,
		endY: number,
		mirrorX?: number,
		mirrorY?: number
	) => {

		// add mirror S

		this._instructions.push(
			`C${ctrlX},${ctrlY},${ctrlX2},${ctrlY2},${endX},${endY}`
		);

		if (allValuesAssigned(mirrorX, mirrorY)) {
			this._instructions.push(`S${mirrorX},${mirrorY}`);
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

	public bezierQuadraticTo = (
		ctrlX: number,
		ctrlY: number,
		endX: number,
		endY: number,
		mirrorX?: number,
		mirrorY?: number
	) => {
		this._instructions.push(`Q${ctrlX},${ctrlY},${endX},${endY}`);
		if (allValuesAssigned(mirrorX, mirrorY)) {
			this._instructions.push(`T${mirrorX},${mirrorY}`);
		}
		const coord: QuadraticBezierCoord = {
			type: CoordType.BezierMirror,
			x: endX,
			y: endY,
			ctrlX,
			ctrlY,
			mirrorX,
			mirrorY,
		};
		this.appendCoord(coord);

		return this;
	};
}
