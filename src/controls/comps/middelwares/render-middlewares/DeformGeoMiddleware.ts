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
	private _deformableSegmentIndices: Set<number>;

	constructor() {
		this._deformableSegmentIndices = new Set();
	}

	setController(controller: hasSegmentsDescriptor): SVGControllerMiddleware {
		this._controller = controller;
		return this;
	}
	updateCoords(corrds: Coord[]): Coord[] {
		throw new Error('Method not implemented.');
	}

	public setDeformableSegmentIndices(indices: number | number[]): deformableSVGController {
		this.clearDeformableSegmentIndices();
		return this.addDeformableSegmentIndices(indices);
	}
	public addDeformableSegmentIndices(indices: number | number[]): deformableSVGController {
		Array.isArray(indices)
			? indices.forEach(index => this._deformableSegmentIndices.add(index))
			: this._deformableSegmentIndices.add(indices);

		return (this as unknown) as deformableSVGController;
	}
	public removeDeformableSegmentIndices(indices: number | number[]): deformableSVGController {
		Array.isArray(indices)
			? indices.forEach(index => this._deformableSegmentIndices.delete(index))
			: this._deformableSegmentIndices.delete(indices);

		return (this as unknown) as deformableSVGController;
	}
	public clearDeformableSegmentIndices(): deformableSVGController {
		this._deformableSegmentIndices.clear();
		return (this as unknown) as deformableSVGController;
	}

	public get deformableSegmentIndices(): Set<number> {
		return this._deformableSegmentIndices;
	}
	public get controller() {
		return this._controller;
	}
}
