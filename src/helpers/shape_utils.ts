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
