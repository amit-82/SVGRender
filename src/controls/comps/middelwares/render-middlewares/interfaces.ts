import { SVGControllerMiddleware } from '../interfaces';
import SVGGeometryController from 'src/controls/SVGGeometryController';
import { Coord } from 'src/controls/comps/interfaces';

export interface RenderMiddleware extends SVGControllerMiddleware {
	setController(controller: SVGGeometryController): SVGControllerMiddleware;
	updateCoords(corrds: Coord[]): Coord[];
}
