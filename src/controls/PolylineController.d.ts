import SVGElementController from "./comps/SVGElementController";
export default class PolylineController extends SVGElementController {
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    updateElement(): void;
}
