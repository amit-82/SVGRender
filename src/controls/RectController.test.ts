import RectController from "./RectController";
import { CoordType } from "./comps/interfaces";

describe("Test RectController", () => {
	let rect: RectController;
	beforeEach(() => {
		rect = new RectController();
	});

	test("Append coords for simple rect widthout moveTo", () => {
		const coords = rect.setDimensions(200, 50).getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 0, y: 0 },
			{ type: CoordType.Linear, x: 200, y: 50 },
		]);
	});

	test("Append coords from simple rect", () => {
		const coords = rect.moveTo(50, 60).setDimensions(200, 50).getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 50, y: 60 },
			{ type: CoordType.Linear, x: 200, y: 50 },
		]);
	});

	test("Append coords for rect with rounded corner with both x and y provided", () => {
		const coords = rect
			.moveTo(50, 60)
			.setDimensions(200, 50)
			.setCornerRadius(50, 25)
			.getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 50, y: 60 },
			{ type: CoordType.Linear, x: 200, y: 50 },
			{ type: CoordType.Linear, x: 50, y: 25 },
		]);
	});

	test("Append coords for rect with rounded corner with only x provided and y is by default identical to x", () => {
		const coords = rect
			.moveTo(50, 60)
			.setDimensions(200, 50)
			.setCornerRadius(25)
			.getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 50, y: 60 },
			{ type: CoordType.Linear, x: 200, y: 50 },
			{ type: CoordType.Linear, x: 25, y: 25 },
		]);
	});

	test("Append coords for rect with rounded corner with x provided and y = 0", () => {
		const coords = rect
			.moveTo(50, 60)
			.setDimensions(200, 50)
			.setCornerRadius(25, 0)
			.getCoords();
		expect(coords).toEqual([
			{ type: CoordType.Linear, x: 50, y: 60 },
			{ type: CoordType.Linear, x: 200, y: 50 },
			{ type: CoordType.Linear, x: 25, y: 0 },
		]);
	});

	test("Test rect getLength", () => {
		expect(rect.setDimensions(100, 25).calculate().totalLength).toBe(250);
	})
});
