import { findIntersection } from 'src/controls/comps/utils/line_utils';
import { CircleController, PathController } from 'src/controls/index';
import createSVGElement from '../../src/createSVGElement';
import {
	getBorderIntersection,
	GetBorderIntersectionResult,
	getPointOnBorder,
	getSegmentBySimpleCoordIndex,
} from 'src/controls/comps/descriptors/SegmentsDescUtils';

const svg: SVGElement = (document.getElementById('svg') as unknown) as SVGElement;

const createCircle = (color: string, x = 0, y = 0, radius = 2) => {
	const circle = new CircleController(createSVGElement('circle', svg))
		.moveTo(x, y)
		.setRadius(radius)
		.updateElement();
	circle.getElement()!.style.setProperty('fill', color);
	return circle;
};

const mouseTracker = createCircle('#f00');

const e2 = createSVGElement('path', svg);
const path = new PathController(e2);
path.moveTo(200, 50)
	.lineTo(300, 50)
	.cubicTo(400, 50, 450, 100, 500, 150)
	.cubicTo(450, 350, 250, -75, 300, 150); //.lineTo(300, 150);
path.updateElement();
path.calculate();

console.log(path.segmentsDescriptor);

//createCircle('#ff0', center!.x, center!.y);
createCircle('#fff', path.segmentsDescriptor.center!.x, path.segmentsDescriptor.center!.y);

const intersectionCirc = createCircle('#f99', 0, 0, 5);

const message = (msg: string) => (document.getElementById('msg')!.innerText = msg);

svg.addEventListener('mousemove', e => {
	mouseTracker.moveTo(e.offsetX, e.offsetY);
	mouseTracker.updateElement();

	path.segmentsDescriptor.simpilfied.coords;
	if (path.segmentsDescriptor.center && path.segmentsDescriptor.simpilfied.coords) {
		const res = getBorderIntersection(path.segmentsDescriptor, e.offsetX, e.offsetY);

		if (res) {
			intersectionCirc.moveTo(res.intersection.x, res.intersection.y);
			const segmentIndexData = getSegmentBySimpleCoordIndex(
				path.segmentsDescriptor,
				res.segmentIndex
			);
			console.log(segmentIndexData);

			message(
				`hit at segment ${res.segmentIndex}: {${res.intersection.x}, ${res.intersection.y}} segmentDistance: ${res.distanceFromSegmentStart}`
			);
		} else {
			message('no hit');
			intersectionCirc.moveTo(0, 0);
		}

		intersectionCirc.updateElement();
	}
});
