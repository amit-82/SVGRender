import { createProxy } from './object_utils';

const assignedTests = createProxy<Function>(
	{
		object: (val: any) => val !== null,
		number: (val: number) => !isNaN(val),
		undefined: () => false,
	},
	() => true
);

const isEmptyTests = createProxy<Function>(
	{
		string: (val: string) => val.length === 0,
		number: (val: number) => isNaN(val),
		undefined: () => true,
		symbol: () => false,
		object: (val: object) => {
			if (val === null) {
				return true;
			} else if (Array.isArray(val)) {
				return val.length === 0;
			}
			return Object.keys(val).length === 0;
		},
	},
	/* istanbul ignore next */
	(val: any) => {
		throw `can't check if ${val} is empty. validation test for type ${typeof val} is not defined (?!)`;
	}
);

/**
 * @description test to see the value *IS NOT* null / undefined / NaN
 * @param val
 * @returns boolean
 */
const valueAssigned = (val: any) => assignedTests[typeof val](val);

/**
 * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned. for validating members of array, use allArrayMembersAssigned
 * @see {@link valueAssigned}
 * @see {@link allArrayMembersAssigned}
 * @param args
 * @returns boolean
 */
const allValuesAssigned = (...args: any[]) => args.every(valueAssigned);

/**
 * @description check all members of the provided array are assigned. uses valueAssigned.
 * @param array
 * @see {@link valueAssigned}
 * @returns boolean
 */
const allArrayMembersAssigned = (array: any[]) => array.every(valueAssigned);

/**
 * @description checks in the value is empty ({}, [], NaN, null, undefined)
 * @param val
 * @returns boolean
 */
const isEmpty = (val: any) => isEmptyTests[typeof val](val);

export { valueAssigned, allValuesAssigned, allArrayMembersAssigned, isEmpty };
