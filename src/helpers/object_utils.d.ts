declare function createProxy<T>(target: object, def: T): {
    [key: string]: T;
};
export { createProxy };
