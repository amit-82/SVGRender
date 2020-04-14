export default class Path {
    private element;
    private _instructions;
    constructor(element?: SVGPathElement, instructions?: stringOrNumber[]);
    getInstructions(): stringOrNumber[];
    updateElement(): void;
    closePath: () => Path;
    moveTo: (x: number, y: number) => this;
    lineTo: (x: number, y: number) => this;
    curve: (ctrl1X: number, ctrl1Y: number, ctrl2X: number, ctrl2Y: number, endX: number, endY: number) => this;
    bezier: (ctrlX: number, ctrlY: number, endX: number, endY: number) => this;
    quadratic: (ctrlX: number, ctrlY: number, endX: number, endY: number, mirrorEndX?: number | undefined, mirrorEndY?: number | undefined) => this;
}
