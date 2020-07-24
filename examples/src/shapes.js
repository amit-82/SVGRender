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

// LINE from 0,0
const lineElem2 = createSVGElement('line', svgRoot);
new LineController(lineElem2).lineTo(40, 100).updateElement();

// LINE with moveTo
const lineElem = createSVGElement('line', svgRoot);
new LineController(lineElem).moveTo(50, 20).lineTo(70, 200).updateElement();

// CIRCLE
const circle = createSVGElement('circle', svgRoot);
new CircleController(circle).moveTo(150, 100).setRadius(50).updateElement();

// ELLIPSE
const ellipse = createSVGElement('ellipse', svgRoot);
new EllipseController(ellipse).moveTo(250, 100).setRadius(40, 80).updateElement();

// RECTANGLE
const rect = createSVGElement('rect', svgRoot);
new RectController(rect).moveTo(310, 25).setDimensions(100, 150).updateElement();

// RECTANGLE with rounded corners
const rect2 = createSVGElement('rect', svgRoot);
new RectController(rect2)
	.moveTo(430, 25)
	.setDimensions(100, 150)
	.setCornerRadius(30, 30)
	.updateElement();

// POLYLINE
let shapeX = 10;
let shapeY = 250;
const polyline = createSVGElement('polyline', svgRoot);
new PolylineController(polyline)
	.moveTo(shapeX, shapeY)
	.lineTo(shapeX + 50, shapeY)
	.lineTo(shapeX + 125, shapeY + 150)
	.lineTo(shapeX, shapeY + 175)
	.lineTo(shapeX + 125, shapeY + 225)
	.updateElement();

// POLYGON
shapeX = 150;
shapeY = 250;
const polygon = createSVGElement('polygon', svgRoot);
new PolygonController(polygon)
	.moveTo(shapeX, shapeY)
	.lineTo(shapeX + 150, shapeY + 50)
	.lineTo(shapeX + 100, shapeY + 150)
	.lineTo(shapeX + 125, shapeY + 175)
	.lineTo(shapeX + 50, shapeY + 175)
	.updateElement();

// PATH
shapeX = 350;
shapeY = 250;
const pathElem = createSVGElement('path', svgRoot);
new PathController(pathElem)
	.moveTo(shapeX, shapeY)
	.quadTo(shapeX + 175, shapeY + 0, shapeX + 200, shapeY + 50)
	.lineTo(shapeX + 200, shapeY + 250)
	.cubicTo(shapeX + 75, shapeY + 10, shapeX + 75, shapeY + 10, shapeX + 50, shapeY + 250)
	.closePath()
	.updateElement();
