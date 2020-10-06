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
// open bezier
/*
path.moveTo(200, 50)
	.lineTo(300, 50)
	.cubicTo(400, 50, 450, 100, 500, 150)
	.cubicTo(450, 350, 250, -75, 300, 150); //.lineTo(300, 150);
	*/
// not closed rect
//path.moveTo(200, 50).lineTo(300, 50).lineTo(300, 100).lineTo(200, 100);
// closed rect
path.moveTo(200, 50).lineTo(300, 50).lineTo(300, 100).lineTo(200, 100).lineTo(200, 50);
path.updateElement();
path.calculate();

createCircle('#fff', path.segmentsDescriptor.center!.x, path.segmentsDescriptor.center!.y);

const intersectionCirc = createCircle('#f99', 0, 0, 5);
const circ1 = createCircle('#0f0');
const circ2 = createCircle('#00f');

const message = (msg: string) => (document.getElementById('msg')!.innerText = msg);

svg.addEventListener('mousemove', e => {
	mouseTracker.moveTo(e.offsetX, e.offsetY);
	mouseTracker.updateElement();

	const segDesc = path.segmentsDescriptor;

	segDesc.simpilfied.coords;
	if (segDesc.center && segDesc.simpilfied.coords) {
		const borderIntersection = getBorderIntersection(segDesc, e.offsetX, e.offsetY);

		if (borderIntersection) {
			intersectionCirc.moveTo(
				borderIntersection.intersection.x,
				borderIntersection.intersection.y
			);

			//debugger;
			const segmentData = getSegmentBySimpleCoordIndex(
				segDesc,
				borderIntersection.simpleCoordIndex,
				borderIntersection.intersection
			)!;

			console.log(
				segmentData.segmentIndex,
				':',
				segmentData.distanceFromShapeStart.toFixed(2),
				'+',
				borderIntersection!.distanceFromSimpleCoordStart.toFixed(2)
			);

			/*
			window.xxx = segDesc;
			message(
				`${borderIntersection.segmentIndex} ${segmentData.distanceFromShapeStart} ${segmentData.distanceFromSegmentStart}`
			);
*/
			// distance from intersection point to shape's start
			let totalDistance = segmentData.distanceFromShapeStart;

			const offset = 40;

			// TODO: looks like get point on border doesn't work good...
			const offset1 = getPointOnBorder(segDesc, totalDistance - offset);
			const offset2 = getPointOnBorder(segDesc, totalDistance + offset);

			//console.log(offset1);
			offset1 ? circ1.moveTo(offset1.x, offset1.y) : circ1.moveTo(0, 0);
			offset2 ? circ2.moveTo(offset2.x, offset2.y) : circ2.moveTo(0, 0);
			circ1.updateElement();
			circ2.updateElement();

			message(
				`hit at simpleCoordIndex ${
					borderIntersection.simpleCoordIndex
				}: {${borderIntersection.intersection.x.toFixed(
					1
				)}, ${borderIntersection.intersection.y.toFixed(
					1
				)}} distance: ${totalDistance.toFixed(2)}`
			);
		} else {
			message('no hit');
			intersectionCirc.moveTo(0, 0);
		}

		intersectionCirc.updateElement();
	}
});
