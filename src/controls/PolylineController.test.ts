import PolylineController from "./PolylineController";
import { CoordType } from "./comps/interfaces";

describe("Test Polyline", () => {
	test("Test moveTo followed by lineTo", () => {
		const polyLine = new PolylineController();
		polyLine.moveTo(50, 10).lineTo(60, 90);
		expect(polyLine.getCoords()).toEqual([
			{ type: CoordType.Linear, x: 50, y: 10 },
			{ type: CoordType.Linear, x: 60, y: 90 },
		]);
	});

	test("Test lineTo without preceding moveTo", () => {
		const polyLine = new PolylineController();
		polyLine.lineTo(60, 90);
		expect(polyLine.getCoords()).toEqual([
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Linear, x: 60, y: 90 },
		]);
	});
});
