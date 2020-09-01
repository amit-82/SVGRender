// (4/3)*Math.tan(Math.PI / 8)
export const bezierControlPointOffsetForQuarterCircle = 0.5522847498307933;

export function getDistance(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

export function getSquarePerimeter(width: number, height: number) {
	return (width + height) * 2;
}

export function getCircleCircumference(radius: number) {
	return 2 * Math.PI * radius;
}

export function lineIntersection(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x3: number,
	y3: number,
	x4: number,
	y4: number
) {
	var ua,
		ub,
		denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
	if (denom == 0) {
		return null;
	}
	ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
	ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
	return {
		x: x1 + ua * (x2 - x1),
		y: y1 + ua * (y2 - y1),
		seg1: ua >= 0 && ua <= 1,
		seg2: ub >= 0 && ub <= 1,
	};
}
