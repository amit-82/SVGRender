/**
 * @description test to see the value *IS NOT* null / undefined / NaN
 * @param val
 * @returns boolean
 */
declare const valueAssigned: (val: any) => any;
/**
 * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned. for validating members of array, use allArrayMembersAssigned
 * @see {@link valueAssigned}
 * @see {@link allArrayMembersAssigned}
 * @param args
 * @returns boolean
 */
declare const allValuesAssigned: (...args: any[]) => boolean;
/**
 * @description check all members of the provided array are assigned. uses valueAssigned.
 * @param array
 * @see {@link valueAssigned}
 * @returns boolean
 */
declare const allArrayMembersAssigned: (array: any[]) => boolean;
/**
 * @description checks in the value is empty ({}, [], NaN, null, undefined)
 * @param val
 * @returns boolean
 */
declare const isEmpty: (val: any) => any;
export { valueAssigned, allValuesAssigned, allArrayMembersAssigned, isEmpty };
