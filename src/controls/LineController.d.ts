import SVGElementController from "./comps/SVGElementController";
export default class LineContoller extends SVGElementController {
    constructor(element?: SVGElement, type?: SVGElementTypes);
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
}
