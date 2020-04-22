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

	public clear(updateElement = false) {
		this._instructions.length = 0;
		return super.clear(updateElement);
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
