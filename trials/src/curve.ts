import { CircleController, createSVGElement, PathController, PolylineController } from 'src/index';
import PinchMiddleware from 'src/controls/middlewares/PinchMiddleware';
import { Coord, CoordType, CubicBezierCoord } from 'src/controls/comps/interfaces';
import { breakCubicBezier } from 'src/controls/comps/utils/line_utils';

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

const path2 = new PathController(createSVGElement('path', svg));
const path1 = new PathController(createSVGElement('path', svg));

const s1: Coord = { type: CoordType.Linear, x: 100, y: 300 };
const s2: Coord = { ...s1, y: s1.y! + 10 };
const e1: CubicBezierCoord = {
	type: CoordType.BezierCubic,
	ctrlX: 150,
	ctrlY: 310,
	ctrlX2: 250,
	ctrlY2: 400,
	x: 300,
	y: 300,
};
const e2: CubicBezierCoord = { ...e1, ctrlY: e1.ctrlY + 10, ctrlY2: e1.ctrlY2 + 10, y: e1.y + 10 };
const coordParts = breakCubicBezier(e2, [0.5], s2) as CubicBezierCoord[];
console.log(coordParts);

path1
	.moveTo(s1.x, e1.y)
	.cubicTo(e1.ctrlX, e1.ctrlY, e1.ctrlX2, e1.ctrlY2, e1.x, e1.y)
	.updateElement();
path2.moveTo(s2.x, e2.y);
//.cubicTo(e2.ctrlX, e2.ctrlY, e2.ctrlX2, e2.ctrlY2, e2.x, e2.y)

coordParts.forEach(coord => {
	path2.cubicTo(coord.ctrlX, coord.ctrlY, coord.ctrlX2, coord.ctrlY2, coord.x, coord.y);
});

path2.updateElement();
