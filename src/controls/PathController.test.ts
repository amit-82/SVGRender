import createSVGElement from "src/createSVGElement";
import PathController from "./PathController";

describe("Test Path class", () => {
	test("Creating a path without a PathElement", () => {
		const path = new PathController();
		expect(path).toBeDefined();
	});

	test("Creating a path with a PathElement and update path's d attribute", () => {
		const element: SVGPathElement = createSVGElement("path") as SVGPathElement;
		const path = new PathController(element);
		path
			.moveTo(10, 10)
			.lineTo(20, 10)
			.lineTo(20, 20)
			.closePath()
			.updateElement();

		expect(element.getAttribute("d")).toBe("M10,10 L20,10 L20,20 z");
		expect(path.getInstructions()).toEqual(["M10,10", "L20,10", "L20,20", "z"]);
	});
});
