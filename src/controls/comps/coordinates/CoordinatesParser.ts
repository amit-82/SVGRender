import { Coord } from "../interfaces";
import { createProxy } from "../../../helpers/object_utils";

export abstract class CoordinatesParser {
	protected maxCoordinates: number;
	constructor(maxCoordinates: number) {
		this.maxCoordinates = maxCoordinates;
	}

	public abstract validateCoordinates(coords: Coord[]): boolean;
	public abstract createElementProps(coords: Coord[]): any;
	public validateMaxCoordinates(
		coordsLength: number,
		instructions?: stringOrNumber[]
	): boolean {
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
	public createElementProps(coords: Coord[]): any {
		const props: any = {};
		for (let i = 0; i < coords.length; i++) {
			const propIndex = i * 2;
			props[this.orderedProps[propIndex]] = coords[i].x;
			if (this.orderedProps.length < propIndex + 1) {
				props[this.orderedProps[propIndex + 1]] = coords[i].y;
			}
		}
	}
}

class UnlimitedPoints extends CoordinatesParser {
	constructor() {
		super(Number.MAX_VALUE);
	}
	public validateCoordinates(): boolean {
		return true;
	}
	public createElementProps(coords: Coord[]): any {
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
	public createElementProps(
		coords: Coord[],
		instructions: stringOrNumber[] = []
	): any {
		return { d: instructions.map((a) => a) };
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
