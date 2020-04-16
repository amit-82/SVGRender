import { Coord } from "../interfaces";
export declare abstract class CoordinatesParser {
    protected maxCoordinates: number;
    constructor(maxCoordinates: number);
    abstract validateCoordinates(coords: Coord[]): boolean;
    abstract createElementAttrs(coords: Coord[], instructions?: stringOrNumber[]): any;
    validateMaxCoordinates(coordsLength: number): boolean;
}
export declare const CoordinatesParsers: {
    [key: string]: CoordinatesParser;
};
