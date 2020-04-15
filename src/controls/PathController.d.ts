import SVGElementController from "./comps/SVGElementController";
export default class PathController extends SVGElementController {
    private element;
    private _instructions;
    constructor(element?: SVGPathElement, instructions?: stringOrNumber[]);
    getInstructions(): stringOrNumber[];
    updateElement(): void;
    closePath: () => this;
    moveTo: (x: number, y: number) => this;
    lineTo: (x: number, y: number) => this;
    curve: (ctrlX: number, ctrlY: number, ctrlX2: number, ctrlY2: number, endX: number, endY: number) => this;
    bezier: (ctrlX: number, ctrlY: number, endX: number, endY: number) => this;
    quadratic: (ctrlX: number, ctrlY: number, endX: number, endY: number, mirrorX?: number | undefined, mirrorY?: number | undefined) => this;
}
