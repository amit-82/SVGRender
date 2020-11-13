import {
	CircleController,
	createSVGElement,
	PathController,
	PolylineController,
	config,
} from 'src/index';
import PinchMiddleware from 'src/controls/middlewares/PinchMiddleware';

config.strictMode = false;

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

//const path = new PolylineController(createSVGElement('polyline', svg));
const path = new PathController(createSVGElement('path', svg));
//path.moveTo(200, 50).lineTo(300, 50).lineTo(300, 100).lineTo(200, 100).lineTo(200, 50);
/*
path.moveTo(300, 200)
	.lineTo(350, 250)
	.lineTo(400, 250)
	.lineTo(375, 300)
	.lineTo(385, 400)
	.lineTo(200, 300)
	.lineTo(300, 250)
	.lineTo(200, 225)
	.lineTo(300, 200);
*/
// open bezier
/*
path.moveTo(200, 50)
	.lineTo(300, 50)
	.cubicTo(400, 50, 450, 100, 500, 150)
	.cubicTo(450, 350, 250, -75, 300, 150);
*/
//path.moveTo(200, 100).cubicTo(200, 200, 400, 200, 400, 100);
/*
path.moveTo(200, 300)
	.cubicTo(200, 400, 400, 400, 400, 300)
	.lineTo(400, 100)
	.cubicTo(400, 50, 200, 50, 200, 300);
*/
// closed bezier
/*
path.moveTo(150, 80)
	.cubicTo(350, 50, 400, 200, 550, 250)
	.cubicTo(500, 450, 75, 275, 150, 225)
	.cubicTo(150, 225, 200, 155, 150, 80);
*/

path.moveTo(150, 80).lineTo(450, 80).cubicTo(400, 200, 200, 200, 150, 80);
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

//const startPoint = createCircle('#f00', path.getCoords()[0].x, path.getCoords()[0].y, 5);

const mw = new PinchMiddleware();
mw.options.stopOnFirstIntersection = false;
mw.pinchBaseWidthCalculator = pf(5, 750, 300);
path.addRenderMiddleware(mw);
mw.attachListeners();
svg.addEventListener('mousemove', () => {
	path.updateElement();
});
