import { Coord } from "../interfaces";
export default abstract class CoordinatesParser {
    protected maxCoordinates: number;
    constructor(maxCoordinates: number);
    abstract validateCoordinates(coords: Coord[]): boolean;
    abstract createElementProps(coords: Coord[]): any;
    validateMaxCoordinates(coordsLength: number, instructions?: stringOrNumber[]): boolean;
}
export declare const CoordinatesParsers: {
    [key: string]: CoordinatesParser;
};
