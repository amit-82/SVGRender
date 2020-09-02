import { findIntersection, getIntersection } from 'src/controls/comps/utils/line_utils';
import { CircleController, PathController, PolylineController } from 'src/controls/index';
import createSVGElement from '../../src/createSVGElement';

const svg: SVGElement = (document.getElementById('svg') as unknown) as SVGElement;

const createCircle = (color: string, x = 0, y = 0, size = 2) => {
	const circle = new CircleController(createSVGElement('circle', svg))
		.moveTo(x, y)
		.setRadius(size)
		.updateElement();
	circle.getElement()!.style.setProperty('fill', color);
	return circle;
};

const elem = createSVGElement('polyline', svg);
const polyline = new PolylineController(elem)
	.moveTo(50, 100)
	.lineTo(100, 100)
	.lineTo(100, 200)
	.lineTo(50, 200);
polyline.updateElement().calculate();

const center = polyline.segmentsDescriptor.center;

const mouseTracker = new CircleController(createSVGElement('circle', svg)).setRadius(2);
mouseTracker.getElement()?.style.setProperty('fill', '#f00');

const e2 = createSVGElement('path', svg);
const path = new PathController(e2);
path.moveTo(200, 50)
	.lineTo(300, 50)
	.cubicTo(400, 50, 450, 100, 500, 150)
	.cubicTo(450, 350, 250, -75, 300, 150); //.lineTo(300, 150);
path.updateElement();
path.calculate();

createCircle('#ff0', center!.x, center!.y);
createCircle('#fff', path.segmentsDescriptor.center!.x, path.segmentsDescriptor.center!.y);

const intersectionCirc = createCircle('#f99', 0, 0, 5);

svg.addEventListener('mousemove', e => {
	mouseTracker.moveTo(e.offsetX, e.offsetY);
	//console.log('intersection: ', polyline.getBorderIntersection({ x: e.offsetX, y: e.offsetY }));
	mouseTracker.updateElement();

	path.segmentsDescriptor.simpilfied.coords;
	if (path.segmentsDescriptor.center && path.segmentsDescriptor.simpilfied.coords) {
		const intersectionResult = findIntersection(
			e.offsetX,
			e.offsetY,
			path.segmentsDescriptor.center.x,
			path.segmentsDescriptor.center.y,
			path.segmentsDescriptor.simpilfied.coords
		);

		console.log(intersectionResult);

		if (intersectionResult) {
			intersectionCirc.moveTo(
				intersectionResult.intersection.x,
				intersectionResult.intersection.y
			);
		} else {
			intersectionCirc.moveTo(0, 0);
		}

		intersectionCirc.updateElement();
	}
});
