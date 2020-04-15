type stringOrNumber = string | number;
type undefinedOrNull = undefined | null;

type SVGElementTypes =
	| "svg"
	| "circle"
	| "ellipse"
	| "line"
	| "path"
	| "polygon"
	| "polyline"
	| "rect";
type optonalSVGOrString = SVGElement | string | undefinedOrNull;
type optonalString = string | undefinedOrNull;
