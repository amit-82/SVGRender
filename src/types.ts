type stringOrNumber = string | number;
type undefinedOrNull = undefined | null;

type optionalSVGOrString = SVGElement | string | undefinedOrNull;
type optionalString = string | undefinedOrNull;
type SVGElementTypes =
	| "svg"
	| "circle"
	| "ellipse"
	| "line"
	| "path"
	| "polygon"
	| "polyline"
	| "rect";
