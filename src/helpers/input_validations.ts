import { createProxy } from "./object_utils";

const assignedTests = createProxy<Function>(
  {
    object: (val: any) => val !== null,
    number: (val: number) => !isNaN(val),
    undefined: () => false,
  },
  () => true
);

/**
 * @description test to see the value *IS NOT* null / undefined / NaN
 * @param val
 */
const valueAssigned = (val: any) => assignedTests[typeof val](val);

/**
 * @descipriotn check none of the provided arguments is null / undefined / NaN. uses valueAssigned.
 * @see {@link valueAssigned}
 * @param args
 */
const allValuesAssigned = (...args: any[]) => args.every(valueAssigned);

export { valueAssigned, allValuesAssigned };
