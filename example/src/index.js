const {
	PathController,
	createSVGElement,
	LineController,
} = require("../../lib/index");

const svgElem = document.getElementById("svg");
const pathElem = createSVGElement("path", svgElem);
new PathController(pathElem)
	.moveTo(100, 50)
	.lineTo(300, 50)
	.lineTo(300, 150)
	.lineTo(100, 150)
	.closePath()
	.updateElement();

const lineElem = createSVGElement("line", svgElem);
new LineController(lineElem).moveTo(10, 10).lineTo(20, 30).updateElement();

const lineElem2 = createSVGElement("line", svgElem);
new LineController(lineElem2).lineTo(10, 60).updateElement();
