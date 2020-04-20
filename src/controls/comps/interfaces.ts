export enum CoordType {
	Scalar = "SCALAR",
	Linear = "LINEAR",
	BezierMirror = "BEZIER_MIRROR",
	Bezier = "BEZIER",
	Quadratic = "QUADRATIC",
}

export interface Coord {
	type: CoordType;
	x: number;
	y?: number;
}

export interface BezierMirrorCoord extends Coord {
	ctrlX: number;
	ctrlY: number;
}

export interface BezierCoord extends BezierMirrorCoord {
	ctrlX2: number;
	ctrlY2: number;
}

export interface QuadraticCoord extends BezierMirrorCoord {
	mirrorX?: number;
	mirrorY?: number;
}
