import { CircleController, PolylineController } from 'src/controls/index';
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
	console.log('!', e);
	mouseTracker.moveTo(e.offsetX, e.offsetY);
	mouseTracker.updateElement();
});
