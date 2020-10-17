import { createProxy } from 'src/helpers/object_utils';
import { valueAssigned } from 'src/helpers/input_validations';
import { Coord, CoordType, CubicBezierCoord, QuadraticBezierCoord } from '../interfaces';

export abstract class CoordsToElemAttrs {
	public abstract validateCoordinates(coords: Coord[]): boolean;
	public abstract createElementAttrs(coords: Coord[]): any;
}

class StrictOrderProps extends CoordsToElemAttrs {
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
			coords.length === Math.ceil(coordsCount) && !valueAssigned(coords[coords.length - 1].y)
		);
	}

	public createElementAttrs(coords: Coord[]): any {
		const attrs: any = {};
		let propIndex: number = 0;
		for (let i = 0; i < coords.length; i++) {
			const coord = coords[i];
			attrs[this.orderedProps[propIndex]] = coord.x;
			if (coord.type !== CoordType.Scalar && propIndex + 1 < this.orderedProps.length) {
				attrs[this.orderedProps[++propIndex]] = coord.y;
			}
			++propIndex;
		}
		return attrs;
	}
}

class UnlimitedPoints extends CoordsToElemAttrs {
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

const unlimitedPoints = new UnlimitedPoints();

// *********************** Path instructions ***********************
const coordToPathInstructions = createProxy(
	{
		LINEAR: ({ x, y, move }: Coord, isFirst: boolean) =>
			`${move || isFirst ? 'M' : 'L'}${x},${y}`,
		BEZIER_QUADRATIC: ({ ctrlY, ctrlX, x, y }: QuadraticBezierCoord, _: boolean) =>
			`Q${ctrlX},${ctrlY},${x},${y}`,
		BEZIER_CUBIC: ({ ctrlY, ctrlX, ctrlX2, ctrlY2, x, y }: CubicBezierCoord, _: boolean) =>
			`C${ctrlX},${ctrlY},${ctrlX2},${ctrlY2},${x},${y}`,
	},
	(coord: Coord, _: boolean) => {
		throw `coordToPathInstructions can't handle coord of type ${coord.type}`;
	}
);

class PathCoordiantesParser extends CoordsToElemAttrs {
	constructor() {
		super();
	}
	public validateCoordinates(): boolean {
		return true;
	}
	public createElementAttrs(coords: Coord[]): any {
		const first: Coord = coords[0];

		const d = coords
			.map((c, index) => {
				if (
					index === coords.length - 1 &&
					c.type === CoordType.Linear &&
					first.type === CoordType.Linear &&
					c.x === first.x &&
					c.y === first.y
				) {
					// last coord is linear and equals to first coord (linear move to), it is closed is close
					return 'z';
				}

				return coordToPathInstructions[c.type](c, index === 0);
			})
			.join(' ');

		return {
			d,
		};
	}
}

// *********************** CoordsToElemAttrsMap ***********************
export const CoordsToElemAttrsMap = createProxy<CoordsToElemAttrs>({
	circle: new StrictOrderProps(['cx', 'cy', 'r']),
	ellipse: new StrictOrderProps(['cx', 'cy', 'rx', 'ry']),
	line: new StrictOrderProps(['x1', 'y1', 'x2', 'y2']),
	path: new PathCoordiantesParser(),
	polygon: unlimitedPoints,
	polyline: unlimitedPoints,
	rect: new StrictOrderProps(['x', 'y', 'width', 'height', 'rx', 'ry']),
});
