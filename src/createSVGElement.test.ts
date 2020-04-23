import createSVGElement from './createSVGElement';

describe('Test createSVGElement', () => {
	test('should create a SVGEllipseElement', () => {
		const elem = createSVGElement('ellipse');
		expect(elem.nodeName).toBe('ellipse');
	});

	test('should create a SVGLineElement', () => {
		const elem = createSVGElement('line');
		expect(elem.nodeName).toBe('line');
	});

	test('should create a SVGPolygonElement', () => {
		const elem = createSVGElement('polygon');
		expect(elem.nodeName).toBe('polygon');
	});

	test('should create a SVGPolylineElement', () => {
		const elem = createSVGElement('polyline');
		expect(elem.nodeName).toBe('polyline');
	});

	test('should create a SVGRectElement', () => {
		const elem = createSVGElement('rect');
		expect(elem.nodeName).toBe('rect');
	});

	test("should create a SVGPath element with id 'pathId' and default nodeName 'path' without a parent", () => {
		const elem = createSVGElement('path', null, 'pathId');
		expect(elem.nodeName).toBe('path');
		expect(elem.id).toBe('pathId');
	});

	test("should create a SVGPath element with className 'my-svg your-svg' and nodeName 'circle'", () => {
		const elem = createSVGElement('circle', null, null, 'my-svg your-svg');
		expect(elem.nodeName).toBe('circle');
		expect(elem.getAttribute('class')).toBe('my-svg your-svg');
	});

	test('should create a SVGElement and append to it a SVGPath element', () => {
		const parent = createSVGElement('svg', null, null, 'svg');
		expect(parent.children.length).toBe(0);

		createSVGElement('path', parent, 'pathId');
		expect(parent.children.length).toBe(1);
	});
});
