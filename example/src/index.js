const {
	PathController,
	createSVGElement,
	LineController,
	PolylineController,
	PolygonController,
} = require("../../dist/bundle");

/*
import {
	PathController,
	createSVGElement,
	LineController,
	PolylineController,
	PolygonController,
} from "../lib";
*/
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

const polyline = createSVGElement("polyline", svgElem);
new PolylineController(polyline)
	.moveTo(30, 5)
	.lineTo(40, 35)
	.lineTo(35, 35)
	.lineTo(80, 80)
	.lineTo(35, 80)
	.updateElement();

const polygon = createSVGElement("polygon", svgElem);
new PolygonController(polygon)
	.moveTo(250, 120)
	.lineTo(300, 150)
	.lineTo(350, 120)
	.lineTo(300, 200)
	.updateElement();
