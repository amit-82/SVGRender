import { RenderMiddleware } from './interfaces';
import { SVGControllerMiddleware } from '../interfaces';
import {
	deformableSVGController,
	hasSegmentsDescriptor,
	Coord,
} from 'src/controls/comps/interfaces';

export default class DeformGeoMiddleware implements RenderMiddleware, deformableSVGController {
	public active: boolean = true;
	private _controller: hasSegmentsDescriptor | undefined;
	private deformableSegmentIndices: Set<number>;

	constructor() {
		this.deformableSegmentIndices = new Set<number>();
	}

	setController(controller: hasSegmentsDescriptor): SVGControllerMiddleware {
		this._controller = controller;
		return this;
	}
	updateCoords(corrds: Coord[]): Coord[] {
		throw new Error('Method not implemented.');
	}

	public addDeformableSegmentIndices(indices: number[]): deformableSVGController {
		throw 'Method not implemented';
		return this;
	}
	public removeDeformableSegmentIndices(indices: number[]): deformableSVGController {
		throw 'Method not implemented';
		return this;
	}
	public clearDeformableSegmentIndices(): deformableSVGController {
		throw 'Method not implemented';
		return this;
	}
	public getDeformableSegmentIndices(): Set<number> {
		return this.deformableSegmentIndices;
	}
}
