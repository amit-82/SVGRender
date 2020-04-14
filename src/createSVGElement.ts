import { createProxy } from "./helpers/object_utils";
import { identityFn } from "./helpers/function_utils";

/* istanbul ignore next */
const getParentFunctionByType = createProxy<Function>(
  {
    string: (selector: string) => document.querySelector(selector),
  },
  identityFn
);

export default function createSVGElement(
  type: "svg",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGElement;

export default function createSVGElement(
  type: "circle",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGCircleElement;

export default function createSVGElement(
  type: "ellipse",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGEllipseElement;

export default function createSVGElement(
  type: "line",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGLineElement;

export default function createSVGElement(
  type: "path",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGPathElement;

export default function createSVGElement(
  type: "polygon",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGPolygonElement;

export default function createSVGElement(
  type: "polyline",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGPolylineElement;

export default function createSVGElement(
  type: "rect",
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGRectElement;

export default function createSVGElement(
  type: SVGElementTypes,
  svgParent?: optonalSVGOrString,
  id?: optonalString,
  classNames?: optonalString
): SVGElement {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", type);

  id && (elem.id = id);
  classNames && elem.setAttribute("class", classNames);
  svgParent &&
    getParentFunctionByType[typeof svgParent](svgParent).appendChild(elem);

  return elem;
}
