/**
 * @description test to see the value *IS NOT* null / undefined / NaN
 * @param val
 */
declare const valueAssigned: (val: any) => any;
/**
 * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned.
 * @see {@link valueAssigned}
 * @param args
 */
declare const allValuesAssigned: (...args: any[]) => boolean;
export { valueAssigned, allValuesAssigned };
