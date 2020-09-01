import { identityFn, emptyFn } from './function_utils';

test('Test identityFn', () => {
	expect(identityFn(5)).toBe(5);
});

test('Test EmptyFn', () => {
	expect(emptyFn()).toBeUndefined();
});
