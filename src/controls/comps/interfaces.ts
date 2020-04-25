export enum CoordType {
	Scalar = 'SCALAR',
	Linear = 'LINEAR',
	BezierMirror = 'BEZIER_MIRROR',
	BezierCubic = 'BEZIER_CUBIC',
	BezierQuadratic = 'BEZIER_QUADRATIC',
}

export interface deformableSVGController {
	readonly segmentLengths: number[];
	readonly totalLength: number;
}

export interface lineToAble {
	lineTo(x: number, y: number): lineToAble;
}

export interface Point {
	x: number;
	y: number;
}

export interface Coord {
	type: CoordType;
	x: number;
	y?: number;
}

export interface QuadraticBezierCoord extends Coord {
	ctrlX: number;
	ctrlY: number;
	mirrorX?: number;
	mirrorY?: number;
}

export interface CubicBezierCoord extends QuadraticBezierCoord {
	ctrlX2: number;
	ctrlY2: number;
}
