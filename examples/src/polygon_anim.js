const { createSVGElement, PolygonController } = require('../../dist/bundle');

const svgRoot = document.getElementById('svg');

const polygon = createSVGElement('polygon', svgRoot);
new PolygonController(polygon)
	.moveTo(150, 10)
	.lineTo(200, 40)
	.lineTo(250, 10)
	.lineTo(200, 100)
	.updateElement();
