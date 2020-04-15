import { Coord } from "./interfaces";
import CoordinatesParser from "./coordinates/CoordinatesParser";
export default abstract class SVGElementController {
    private _id;
    private _type;
    protected element: SVGElement | undefined;
    private _coords;
    private _segmentLengths;
    private _totalLength;
    protected coordinatesParser: CoordinatesParser;
    constructor(element?: SVGElement, type?: SVGElementTypes);
    get id(): number;
    get type(): SVGElementTypes;
    protected get segmentLengths(): number[];
    protected get totalLength(): number;
    getCoords(): Coord[];
    protected getCoordsRef(): Coord[];
    protected appendCoord(coord: Coord, isMoveTo?: boolean): void;
    protected validateOrInsertFirstCoordZeroZero(): void;
    /**
     * @description must be called after any manipulation (or a series of manipulation) of the shape
     */
    protected calculate(): void;
}
