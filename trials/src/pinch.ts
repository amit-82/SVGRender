import { CircleController, createSVGElement, PolylineController } from 'src/index';
import PinchMiddleware from 'src/controls/middlewares/PinchMiddleware';

const message = (msg: string) => (document.getElementById('msg')!.innerText = msg);
const svg: SVGElement = (document.getElementById('svg') as unknown) as SVGElement;

const createCircle = (color: string, x = 0, y = 0, radius = 2) => {
	const circle = new CircleController(createSVGElement('circle', svg))
		.moveTo(x, y)
		.setRadius(radius)
		.updateElement();
	circle.getElement()!.style.setProperty('fill', color);
	return circle;
};

const path = new PolylineController(createSVGElement('polyline', svg));
//path.moveTo(200, 50).lineTo(300, 50).lineTo(300, 100).lineTo(200, 100).lineTo(200, 50);
//path.moveTo(200, 50).lineTo(300, 50).lineTo(300, 100).lineTo(200, 100).lineTo(200, 50);
path.moveTo(300, 100)
	.lineTo(350, 150)
	.lineTo(400, 150)
	.lineTo(375, 200)
	.lineTo(385, 300)
	.lineTo(200, 200)
	.lineTo(300, 150)
	.lineTo(200, 125)
	.lineTo(300, 100);

//const path = new PathController(createSVGElement('path', svg));
// open bezier
/*
path.moveTo(200, 50)
	.lineTo(300, 50)
	.cubicTo(400, 50, 450, 100, 500, 150)
	.cubicTo(450, 350, 250, -75, 300, 150);
	*/
// closed bezier
/*
path.moveTo(200, 50)
	.lineTo(300, 50)
	.cubicTo(400, 50, 450, 100, 500, 150)
	.cubicTo(450, 350, 125, 175, 300, 125)
	.lineTo(200, 50);
*/
// not closed rect
//path.moveTo(200, 50).lineTo(300, 50).lineTo(300, 100).lineTo(200, 100);
// closed rect
//path.moveTo(200, 50).lineTo(300, 50).lineTo(300, 100).lineTo(200, 100).lineTo(200, 50);
path.updateElement();
path.calculate();

createCircle('#fff', path.segmentsDescriptor.center!.x, path.segmentsDescriptor.center!.y);

const pf = (nearBaseWidth: number, farBaseWidth: number, maxDistance: number) => {
	const widthRange = farBaseWidth - nearBaseWidth;

	return (distanceFromBorder: number) => {
		const fraction = distanceFromBorder / maxDistance;
		return Math.min(
			Math.max(widthRange * fraction + nearBaseWidth, nearBaseWidth),
			farBaseWidth
		);
	};
};

const mw = new PinchMiddleware();
mw.options.stopOnFirstIntersection = false;
mw.pinchBaseWidthCalculator = pf(20, 300, 250);
path.addRenderMiddleware(mw);
mw.attachListeners();
svg.addEventListener('mousemove', () => {
	path.updateElement();
});
