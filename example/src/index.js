const {
	PathController,
	createSVGElement,
	LineController,
	PolylineController,
	PolygonController,
	CircleController,
	EllipseController,
	RectController,
} = require("../../dist/bundle");

const svgElem = document.getElementById("svg");

const pathElem = createSVGElement("path", svgElem);

new PathController(pathElem)
	.moveTo(100, 50)
	.lineTo(300, 50)
	.bezierTo(400, 0, 400, 200, 300, 150)
	.bezierMirrorTo(100, 200, 100, 150)
	.quadraticTo(0, 150, 100, 100, 100, 50)
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
	.moveTo(150, 10)
	.lineTo(200, 40)
	.lineTo(250, 10)
	.lineTo(200, 100)
	.updateElement();

const circle = createSVGElement("circle", svgElem);
new CircleController(circle).moveTo(20, 180).setRadius(15).updateElement();

const ellipse = createSVGElement("ellipse", svgElem);
new EllipseController(ellipse)
	.moveTo(50, 180)
	.setRadius(30, 15)
	.updateElement();

const rect = createSVGElement("rect", svgElem);
new RectController(rect).moveTo(250, 160).setDimensions(50, 30).updateElement();

const rect2 = createSVGElement("rect", svgElem);
new RectController(rect2)
	.moveTo(325, 140)
	.setDimensions(50, 50)
	.setCornerRadius(10, 20)
	.updateElement();
