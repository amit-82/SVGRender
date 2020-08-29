import createSVGElement from '../../src/createSVGElement';
import RectController from '../../src/controls/RectController';

console.log('!!!123');
const elem = createSVGElement('rect', 'svg');
const rect = new RectController(elem).moveTo(50, 50).setDimensions(100, 150);
rect.updateElement();

import { xxx } from './x';
console.log(xxx());
