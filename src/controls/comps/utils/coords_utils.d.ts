import { Coord } from "../interfaces";
export declare type CoordLengthCalculator = (coord: Coord, previousCoord: Coord) => number | never;
export declare const coordLengthCalculators: {
    [key: string]: CoordLengthCalculator;
};
