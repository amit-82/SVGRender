import { RenderMiddleware } from './interfaces';
import { SVGControllerMiddleware } from '../interfaces';
import {
	deformableSVGController,
	hasSegmentsDescriptor,
	Coord,
} from 'src/controls/comps/interfaces';
import SegmentsDescriptor from '../../descriptors/SegmentsDescriptor';

export default abstract class DeformGeoMiddleware
	implements RenderMiddleware, deformableSVGController {
	public active: boolean = true;

	private _controller: hasSegmentsDescriptor | undefined;

	/**
	 * The indices to deform
	 */
	private _deformableSegmentIndices: Set<number>;

	constructor() {
		this._deformableSegmentIndices = new Set();
	}

	setController(controller: hasSegmentsDescriptor): SVGControllerMiddleware {
		this._controller = controller;
		return this;
	}
	public abstract updateCoords(cords: Coord[], segDesc: SegmentsDescriptor): Coord[];

	/**
	 *
	 * @param indices Clear all existing segment index(s) to be deformed
	 */
	public setDeformableSegmentIndices(indices: number | number[]): deformableSVGController {
		this.clearDeformableSegmentIndices();
		return this.addDeformableSegmentIndices(indices);
	}

	/**
	 * Add segment index(s) to be deformed
	 * @param indices
	 */
	public addDeformableSegmentIndices(indices: number | number[]): deformableSVGController {
		Array.isArray(indices)
			? indices.forEach(index => this._deformableSegmentIndices.add(index))
			: this._deformableSegmentIndices.add(indices);

		return (this as unknown) as deformableSVGController;
	}

	/**
	 * Remove specific segment index(s) set to be deformed
	 * @param indices
	 */
	public removeDeformableSegmentIndices(indices: number | number[]): deformableSVGController {
		Array.isArray(indices)
			? indices.forEach(index => this._deformableSegmentIndices.delete(index))
			: this._deformableSegmentIndices.delete(indices);

		return (this as unknown) as deformableSVGController;
	}

	/**
	 * Clear all segment index(s) set to be deformed
	 */
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
