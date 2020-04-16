import PolylineController from "./PolylineController";
import { allValuesAssigned } from "../helpers/input_validations";
import {
	CoordType,
	CurveCoord,
	BezierCoord,
	QuadraticCoord,
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
		console.log(">>>>>", "PATH!");
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

	public curve = (
		ctrlX: number,
		ctrlY: number,
		ctrlX2: number,
		ctrlY2: number,
		endX: number,
		endY: number
	) => {
		this._instructions.push(
			`C${ctrlX},${ctrlY},${ctrlX2},${ctrlY2},${endX},${endY}`
		);
		const coord: CurveCoord = {
			type: CoordType.Curve,
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

	public bezier = (
		ctrlX: number,
		ctrlY: number,
		endX: number,
		endY: number
	) => {
		this._instructions.push(`S${ctrlX},${ctrlY},${endX},${endY}`);
		const coord: BezierCoord = {
			type: CoordType.Bezier,
			x: endX,
			y: endY,
			ctrlX,
			ctrlY,
		};
		this.appendCoord(coord);
		return this;
	};

	public quadratic = (
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
		const coord: QuadraticCoord = {
			type: CoordType.Bezier,
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
