const { PathController, createSVGElement } = require("../../lib/index");

const svgPath = createSVGElement("path", document.getElementById("svg"));

const path = new PathController(svgPath);
path
	.moveTo(100, 50)
	.lineTo(300, 50)
	.lineTo(300, 150)
	.lineTo(100, 150)
	.closePath()
	.updateElement();

window.pp = path;
console.log("!!!");
