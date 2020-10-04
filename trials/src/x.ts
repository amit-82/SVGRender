import {
	getPointOnBorder,
	getSegmentBySimpleCoordIndex,
} from 'src/controls/comps/descriptors/SegmentsDescUtils';
import { PathController } from 'src/index';

const path1 = new PathController();
path1.moveTo(100, 50).lineTo(200, 50).lineTo(200, 100).lineTo(100, 100).calculate();
const desc1 = path1.segmentsDescriptor;
//const res = getSegmentBySimpleCoordIndex(desc1, 2 * 1, { x: 200, y: 75 });
const res = getPointOnBorder(desc1, 120);
console.log(res);
