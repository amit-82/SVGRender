import { CircleController, PathController, PolylineController } from 'src/controls/index';
import createSVGElement from '../../src/createSVGElement';

const svg: SVGElement = (document.getElementById('svg') as unknown) as SVGElement;

const elem = createSVGElement('polyline', svg);
const polyline = new PolylineController(elem)
	.moveTo(50, 100)
	.lineTo(100, 100)
	.lineTo(100, 200)
	.lineTo(50, 200);
polyline.updateElement().calculate();

const center = polyline.segmentsDescriptor.center;
const centerMarker = new CircleController(createSVGElement('circle', svg))
	.moveTo(center!.x, center!.y)
	.setRadius(2)
	.updateElement();
centerMarker.getElement()?.style.setProperty('fill', '#ff0');

const mouseTracker = new CircleController(createSVGElement('circle', svg)).setRadius(2);
mouseTracker.getElement()?.style.setProperty('fill', '#f00');

svg.addEventListener('mousemove', e => {
	mouseTracker.moveTo(e.offsetX, e.offsetY);
	console.log('intersection: ', polyline.getBorderIntersection({ x: e.offsetX, y: e.offsetY }));
	mouseTracker.updateElement();
});
/*
const e2 = createSVGElement('path', svg);
const path = new PathController(e2);
path.moveTo(200, 50).lineTo(300, 50).cubicTo(400, 50, 450, 100, 500, 150).lineTo(300, 150);
path.updateElement();
const e2c = new CircleController(createSVGElement('circle', svg));

path.calculate();
e2c.setRadius(2)
	.moveTo(path.segmentsDescriptor.center!.x, path.segmentsDescriptor.center!.y)
	.updateElement();
*/
