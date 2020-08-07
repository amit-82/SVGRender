import DeformGeoMiddleware from './DeformGeoMiddleware';
import PolylineController from '../../../PolylineController';

describe('Test DeformGeoMiddleware', () => {
	const dgm: DeformGeoMiddleware = new DeformGeoMiddleware();
	const controller: PolylineController = new PolylineController();

	test('should setController', () => {
		dgm.setController(controller);
		expect(dgm.controller).toBe(controller);
	});

	test('should add a single index twice', () => {
		dgm.addDeformableSegmentIndices(5);
		expect(Array.from(dgm.deformableSegmentIndices)).toEqual([5]);
		dgm.addDeformableSegmentIndices(8);
		expect(Array.from(dgm.deformableSegmentIndices)).toEqual([5, 8]);
	});

	test('should clear all indices', () => {
		dgm.clearDeformableSegmentIndices();
		expect(Array.from(dgm.deformableSegmentIndices)).toEqual([]);
	});

	test('should add multiple indices once', () => {
		dgm.addDeformableSegmentIndices([6, 8, 10]);
		expect(Array.from(dgm.deformableSegmentIndices)).toEqual([6, 8, 10]);
	});

	test('should add a second multiple indices without removing the old ones', () => {
		dgm.addDeformableSegmentIndices([60, 80, 100]);
		expect(Array.from(dgm.deformableSegmentIndices)).toEqual([6, 8, 10, 60, 80, 100]);
	});
	test('should remove only given indices', () => {
		dgm.removeDeformableSegmentIndices([6, 80]);
		expect(Array.from(dgm.deformableSegmentIndices)).toEqual([8, 10, 60, 100]);
	});

	test('should set given indices and remove any previous ones', () => {
		dgm.addDeformableSegmentIndices([59, 79]);
		dgm.setDeformableSegmentIndices([10]);
		expect(Array.from(dgm.deformableSegmentIndices)).toEqual([10]);
	});
});
