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
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGElement;

export default function createSVGElement(
	type: "circle",
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGCircleElement;

export default function createSVGElement(
	type: "ellipse",
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGEllipseElement;

export default function createSVGElement(
	type: "line",
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGLineElement;

export default function createSVGElement(
	type: "path",
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGPathElement;

export default function createSVGElement(
	type: "polygon",
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGPolygonElement;

export default function createSVGElement(
	type: "polyline",
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGPolylineElement;

export default function createSVGElement(
	type: "rect",
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGRectElement;

export default function createSVGElement(
	type: SVGElementTypes,
	svgParent?: optionalSVGOrString,
	id?: optionalString,
	classNames?: optionalString
): SVGElement {
	const elem = document.createElementNS("http://www.w3.org/2000/svg", type);

	id && (elem.id = id);
	classNames && elem.setAttribute("class", classNames);
	svgParent &&
		getParentFunctionByType[typeof svgParent](svgParent).appendChild(elem);

	return elem;
}
