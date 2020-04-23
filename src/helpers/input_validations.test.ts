import {
	allValuesAssigned,
	valueAssigned,
	allArrayMembersAssigned,
	isEmpty,
} from './input_validations';

describe('Test valueAssigned', () => {
	test('should return true for string, number, boolean, object', () => {
		expect(valueAssigned(1)).toBeTruthy();
		expect(valueAssigned('xxx')).toBeTruthy();
		expect(valueAssigned('')).toBeTruthy();
		expect(valueAssigned(true)).toBeTruthy();
		expect(valueAssigned(false)).toBeTruthy();
		expect(valueAssigned({ x: 6 })).toBeTruthy();
		expect(valueAssigned({})).toBeTruthy();
	});

	test('should return false for undefined', () => {
		expect(valueAssigned(null)).toBeFalsy();
		expect(valueAssigned(undefined)).toBeFalsy();
	});
});

describe('Test allValuesAssigned', () => {
	test('should return true', () => {
		expect(allValuesAssigned(1, 'x', {})).toBeTruthy();
	});

	test('should return false', () => {
		expect(allValuesAssigned(1, null, {})).toBeFalsy();
		expect(allValuesAssigned(1, 'x', undefined)).toBeFalsy();
		expect(allValuesAssigned(undefined, 'x', {})).toBeFalsy();
	});

	test('should return true for no args', () => {
		expect(allValuesAssigned()).toBeTruthy();
	});

	test('should return true for single empty array', () => {
		expect(allValuesAssigned([])).toBeTruthy();
	});
});

describe('Test allArrayMembersAssigned', () => {
	test('should return true for empty array', () => {
		expect(allArrayMembersAssigned([])).toBeTruthy();
	});

	test('should return true for array with assigned members', () => {
		expect(allArrayMembersAssigned([1, 'x', true, false, {}, []])).toBeTruthy();
	});

	test('should return false for array with undefined or null', () => {
		expect(allArrayMembersAssigned([1, 'x', true, false, undefined, []])).toBeFalsy();
		expect(allArrayMembersAssigned([1, 'x', true, false, null, []])).toBeFalsy();
	});
});

describe('Test isEmpty', () => {
	test('should return false for not empty values', () => {
		expect(isEmpty(1)).toBeFalsy();
		expect(isEmpty('brown fox')).toBeFalsy();
		expect(isEmpty(' ')).toBeFalsy();
		expect(isEmpty([1, 2, 'x'])).toBeFalsy();
		expect(isEmpty({ x: 'x' })).toBeFalsy();
	});

	test('should return false for a symbol', () => {
		expect(isEmpty(Symbol())).toBeFalsy();
	});

	test('should return true for object with only a symbol member(s)', () => {
		expect(isEmpty({ [Symbol()]: 'some symbol' })).toBeTruthy();
	});

	test('should return true for empty Array, Object string, NaN, null and undefined', () => {
		expect(isEmpty([])).toBeTruthy();
		expect(isEmpty({})).toBeTruthy();
		expect(isEmpty('')).toBeTruthy();
		expect(isEmpty(NaN)).toBeTruthy();
		expect(isEmpty(null)).toBeTruthy();
		expect(isEmpty(undefined)).toBeTruthy();
	});
});
