import { createProxy } from "src/helpers/object_utils";
import { valueAssigned } from "src/helpers/input_validations";
import { Coord, CoordType } from "../interfaces";

export abstract class CoordinatesParser {
	public abstract validateCoordinates(coords: Coord[]): boolean;
	public abstract createElementAttrs(
		coords: Coord[],
		instructions?: stringOrNumber[]
	): any;
}

class StrictOrderProps extends CoordinatesParser {
	private orderedProps: string[];

	constructor(orderedProps: string[]) {
		super();
		this.orderedProps = orderedProps;
	}

	public validateCoordinates(coords: Coord[]): boolean {
		const coordsCount = this.orderedProps.length / 2;
		if (coordsCount === Math.round(coordsCount)) {
			return coords.length === coordsCount;
		}

		// validate when last coord should not have seconds value ('y' member should be undefined)
		return (
			coords.length === Math.ceil(coordsCount) &&
			!valueAssigned(coords[coords.length - 1].y)
		);
	}

	public createElementAttrs(coords: Coord[]): any {
		const attrs: any = {};
		let propIndex: number = 0;
		for (let i = 0; i < coords.length; i++) {
			const coord = coords[i];
			attrs[this.orderedProps[propIndex]] = coord.x;
			if (
				coord.type !== CoordType.Scalar &&
				propIndex + 1 < this.orderedProps.length
			) {
				attrs[this.orderedProps[++propIndex]] = coord.y;
			}
			++propIndex;
		}
		return attrs;
	}
}

class UnlimitedPoints extends CoordinatesParser {
	constructor() {
		super();
	}
	public validateCoordinates(): boolean {
		return true;
	}
	public createElementAttrs(coords: Coord[]): any {
		return coords.reduce(
			(acc: any, coord) => {
				acc.points.push(coord.x);
				acc.points.push(coord.y);
				return acc;
			},
			{ points: [] }
		);
	}
}

class PathCoordiantesParser extends CoordinatesParser {
	constructor() {
		super();
	}
	public validateCoordinates(): boolean {
		return true;
	}
	public createElementAttrs(
		_: Coord[],
		instructions: stringOrNumber[] = []
	): any {
		return { d: instructions.join(" ") };
	}
}

const unlimitedPoints = new UnlimitedPoints();

export const CoordinatesParsers = createProxy<CoordinatesParser>({
	circle: new StrictOrderProps(["cx", "cy", "r"]),
	ellipse: new StrictOrderProps(["cx", "cy", "rx", "ry"]),
	line: new StrictOrderProps(["x1", "y1", "x2", "y2"]),
	path: new PathCoordiantesParser(),
	polygon: unlimitedPoints,
	polyline: unlimitedPoints,
	rect: new StrictOrderProps(["x", "y", "width", "height", "rx", "ry"]),
});
