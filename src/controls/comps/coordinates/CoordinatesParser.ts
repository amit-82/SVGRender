import { Coord, CoordType } from "../interfaces";
import { createProxy } from "../../../helpers/object_utils";

export abstract class CoordinatesParser {
	protected maxCoordinates: number;
	constructor(maxCoordinates: number) {
		this.maxCoordinates = maxCoordinates;
	}

	public abstract validateCoordinates(coords: Coord[]): boolean;
	public abstract createElementAttrs(
		coords: Coord[],
		instructions?: stringOrNumber[]
	): any;
	public validateMaxCoordinates(coordsLength: number): boolean {
		return coordsLength <= this.maxCoordinates;
	}
}

class StrictOrderProps extends CoordinatesParser {
	private orderedProps: string[];

	constructor(orderedProps: string[]) {
		super(Math.floor(orderedProps.length / 2));
		this.orderedProps = orderedProps;
	}

	public validateCoordinates(coords: Coord[]): boolean {
		return coords.length === this.orderedProps.length / 2;
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
		super(Number.MAX_VALUE);
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
		super(Number.MAX_VALUE);
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
