import { SVGControllerMiddleware } from '../interfaces';
import SVGGeometryController from 'src/controls/SVGGeometryController';
import { Coord } from 'src/controls/comps/interfaces';
import SegmentsDescriptor from '../../descriptors/SegmentsDescriptor';

export interface RenderMiddleware extends SVGControllerMiddleware {
	setController(controller: SVGGeometryController): SVGControllerMiddleware;
	updateCoords(cords: Coord[], segDesc: SegmentsDescriptor): Coord[];
}
