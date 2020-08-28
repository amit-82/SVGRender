import { Point } from '../interfaces';

export const getIntersection = (
	p0x: number,
	p0y: number,
	p1x: number,
	p1y: number,
	p2x: number,
	p2y: number,
	p3x: number,
	p3y: number
): false | Point => {
	let cross: number;
	const v1 = {
		x: p1x - p0x,
		y: p1y - p0y,
	};
	const v2 = {
		x: p3x - p2x,
		y: p3y - p2y,
	};
	if ((cross = v1.x * v2.y - v1.y * v2.x) === 0) {
		// cross prod 0 if lines parallel
		return false; // no intercept
	}
	const v3 = { x: p0x - p2x, y: p0y - p2y }; // the line from p0 to p2 as vector
	const u2 = (v1.x * v3.y - v1.y * v3.x) / cross; // get unit distance along line p2 p3
	// code point B
	if (u2 >= 0 && u2 <= 1) {
		// is intercept on line p2, p3
		const u1 = (v2.x * v3.y - v2.y * v3.x) / cross; // get unit distance on line p0, p1;
		if (u1 >= 0 && u1 <= 1) {
			return {
				x: p0x + v1.x * u1,
				y: p0y + v1.y * u1,
			};
		}
	}
	return false;
};