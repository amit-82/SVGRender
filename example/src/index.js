const {Path, createSVGElement} = require("../../lib/index");

const svgPath = createSVGElement(document.getElementById("svg"), "myPath", "path my-path");
const path = new Path(svgPath);
path.moveTo(100, 50).lineTo(300, 50).lineTo(300, 150).lineTo(100, 150).closePath().updateElement();