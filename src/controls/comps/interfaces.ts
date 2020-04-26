export enum CoordType {
	Scalar = 'SCALAR',
	Linear = 'LINEAR',
	BezierMirror = 'BEZIER_MIRROR',
	BezierCubic = 'BEZIER_CUBIC',
	BezierQuadratic = 'BEZIER_QUADRATIC',
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

// drawing capabilities
export interface lineToAble {
	lineTo(x: number, y: number): lineToAble;
}

// deform capabilities
export interface deformableSVGController {
	readonly segmentLengths: number[];
	readonly totalLength: number;
	addDeformableSegmentIndices(indices: number[]): deformableSVGController;
	removeDeformableSegmentIndices(indices: number[]): deformableSVGController;
	clearDeformableSegmentIndices(): deformableSVGController;
	getDeformableSegmentIndices(): Set<number>;
}

export interface canBeIntersectedByLine extends deformableSVGController {
	// p2 will be the deformable geometry center
	getIntersectionSegment(lineX: number, lineY: number): Point | null;
	// p1 and p2 represent
	getIntersectionSegment(
		lineX1: number,
		lineY1: number,
		lineX2: number,
		lineY2: number
	): Point | null;
}
