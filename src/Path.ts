import { allValuesAssigned } from "./helpers/input_validations";

export default class Path {
  private element: SVGPathElement | undefined;
  private _instructions: stringOrNumber[];

  constructor(element?: SVGPathElement, instructions: stringOrNumber[] = []) {
    this._instructions = instructions;
    this.element = element;
  }

  public getInstructions(): stringOrNumber[] {
    return [...this._instructions];
  }

  public updateElement() {
    this.element &&
      this.element.setAttribute("d", this._instructions.join(" "));
  }

  public closePath = (): Path => {
    this._instructions.push("z");
    return this;
  };

  public moveTo = (x: number, y: number) => {
    this._instructions.push(`M${x},${y}`);
    return this;
  };

  public lineTo = (x: number, y: number) => {
    this._instructions.push(`L${x},${y}`);
    return this;
  };

  public curve = (
    ctrl1X: number,
    ctrl1Y: number,
    ctrl2X: number,
    ctrl2Y: number,
    endX: number,
    endY: number
  ) => {
    this._instructions.push(
      `C${ctrl1X},${ctrl1Y},${ctrl2X},${ctrl2Y},${endX},${endY}`
    );
    return this;
  };

  public bezier = (
    ctrlX: number,
    ctrlY: number,
    endX: number,
    endY: number
  ) => {
    this._instructions.push(`S${ctrlX},${ctrlY},${endX},${endY}`);
    return this;
  };

  public quadratic = (
    ctrlX: number,
    ctrlY: number,
    endX: number,
    endY: number,
    mirrorEndX?: number,
    mirrorEndY?: number
  ) => {
    this._instructions.push(`Q${ctrlX},${ctrlY},${endX},${endY}`);
    if (allValuesAssigned(mirrorEndX, mirrorEndY)) {
      this._instructions.push(`T${mirrorEndX},${mirrorEndY}`);
    }
    return this;
  };
}
