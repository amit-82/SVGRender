export declare enum CoordType {
    Linear = "LINEAR",
    Bezier = "BEZIER",
    Curve = "CURVE",
    Quadratic = "QUADRATIC"
}
export interface Coord {
    type: CoordType;
    x: number;
    y: number;
}
export interface BezierCoord extends Coord {
    ctrlX: number;
    ctrlY: number;
}
export interface CurveCoord extends BezierCoord {
    ctrlX2: number;
    ctrlY2: number;
}
export interface QuadraticCoord extends BezierCoord {
    mirrorX?: number;
    mirrorY?: number;
}
