import { CircleController, PathController, createSVGElement, PolylineController } from 'src/index';
import {
	getBorderIntersection,
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

path.updateElement();
path.calculate();

createCircle('#fff', path.segmentsDescriptor.center!.x, path.segmentsDescriptor.center!.y);

// create circles to mark intersection on border, and 2 points on border offseted from intersection point
const intersectionCirc = createCircle('#f99', 0, 0, 5);
const circ1 = createCircle('#0f0');
const circ2 = createCircle('#00f');

const message = (msg: string) => (document.getElementById('msg')!.innerText = msg);

svg.addEventListener('mousemove', e => {
	const segDesc = path.segmentsDescriptor;

	if (segDesc.center && segDesc.simpilfied.coords) {
		const borderIntersection = getBorderIntersection(segDesc, e.offsetX, e.offsetY, {
			stopOnFirstIntersection: false,
		});

		if (borderIntersection) {
			intersectionCirc.moveTo(
				borderIntersection.intersection.x,
				borderIntersection.intersection.y
			);

			const segmentData = getSegmentBySimpleCoordIndex(
				segDesc,
				borderIntersection.simpleCoordIndex,
				borderIntersection.intersection
			);

			// distance from intersection point to shape's start
			let totalDistance = segmentData!.distanceFromShapeStart;

			const offset = 40;

			const offset1 = getPointOnBorder(segDesc, totalDistance - offset, {
				repeat: segDesc.lastCoordEndsAtFirst,
			});
			const offset2 = getPointOnBorder(segDesc, totalDistance + offset, {
				repeat: segDesc.lastCoordEndsAtFirst,
			});

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
