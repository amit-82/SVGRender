import { Coord } from "./interfaces";
export default abstract class SVGElementController {
    private _id;
    private _coords;
    private _segmentLengths;
    private _totalLength;
    constructor();
    get id(): number;
    protected get segmentLengths(): number[];
    protected get totalLength(): number;
    getCoords(): Coord[];
    protected appendCoord(coord: Coord, isMoveTo?: boolean): void;
    protected validateOrInsertFirstCoordZeroZero(): void;
    /**
     * @description must be called after any manipulation (or a series of manipulation) of the shape
     */
    protected calculate(): void;
}
