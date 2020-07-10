const {
	PathController,
	createSVGElement,
	LineController,
	PolylineController,
	PolygonController,
	CircleController,
	EllipseController,
	RectController,
} = require('../../dist/bundle');

const svgRoot = document.getElementById('svg');

const pathElem = createSVGElement('path', svgRoot);
const path = new PathController(pathElem)
	.moveTo(50, 50)
	.quadTo(75, 0, 100, 50)
	.lineTo(100, 100)
	.cubicTo(75, 10, 75, 10, 50, 150)
	.closePath()
	.updateElement();

const lineElem = createSVGElement('line', svgRoot);
new LineController(lineElem).moveTo(10, 10).lineTo(20, 30).updateElement();

const lineElem2 = createSVGElement('line', svgRoot);
new LineController(lineElem2).lineTo(10, 60).updateElement();

const polyline = createSVGElement('polyline', svgRoot);
new PolylineController(polyline)
	.moveTo(30, 5)
	.lineTo(40, 35)
	.lineTo(35, 35)
	.lineTo(80, 80)
	.lineTo(35, 80)
	.updateElement();

const polygon = createSVGElement('polygon', svgRoot);
new PolygonController(polygon)
	.moveTo(150, 10)
	.lineTo(200, 40)
	.lineTo(250, 10)
	.lineTo(200, 100)
	.updateElement();

const circle = createSVGElement('circle', svgRoot);
new CircleController(circle).moveTo(20, 180).setRadius(15).updateElement();

const ellipse = createSVGElement('ellipse', svgRoot);
new EllipseController(ellipse).moveTo(50, 180).setRadius(30, 15).updateElement();

const rect = createSVGElement('rect', svgRoot);
new RectController(rect).moveTo(250, 160).setDimensions(50, 30).updateElement();

const rect2 = createSVGElement('rect', svgRoot);
new RectController(rect2)
	.moveTo(325, 140)
	.setDimensions(50, 50)
	.setCornerRadius(10, 20)
	.updateElement();
