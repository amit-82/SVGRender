const { createSVGElement, PathController, CircleController } = require('../../dist/bundle');

const svgRoot = document.getElementById('svg');

const pathElem = createSVGElement('path', svgRoot);
const path = new PathController(pathElem)
	.moveTo(50, 150)
	.lineTo(100, 150)
	.cubicTo(250, 0, 250, 350, 100, 200)
	.lineTo(50, 200)
	.lineTo(50, 150)
	.updateElement();

const center = path.calculate().segmentsDescriptor.center;

console.log(center);
const circleElem = createSVGElement('circle', svgRoot);
const circleController = new CircleController(circleElem);
circleController.moveTo(133, 175).setRadius(5).updateElement();
/*
const circleElem2 = createSVGElement('circle', svgRoot);
const circleController2 = new CircleController(circleElem2);
circleController2.moveTo(75, 175).setRadius(5).updateElement();
*/
// TODO: add a function that return all points of coords and coords' control points for visual
