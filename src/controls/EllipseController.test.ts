import EllipseController from "./EllipseController";
import { CoordType } from "./comps/interfaces";

describe("Test EllipseController", () => {
	let circle: EllipseController;
	beforeEach(() => {
		circle = new EllipseController();
	});

	test("should render circle without moveTo at 0,0", () => {
		circle.setRadius(10, 15);
		expect(circle.getCoords()).toEqual([
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Linear, x: 10, y: 15 },
		]);
	});

	test("should render circle moveTo at 20,30", () => {
		circle.moveTo(20, 30);
		circle.setRadius(15, 30);
		expect(circle.getCoords()).toEqual([
			{ type: CoordType.Linear, x: 20, y: 30 },
			{ type: CoordType.Linear, x: 15, y: 30 },
		]);
	});
});
