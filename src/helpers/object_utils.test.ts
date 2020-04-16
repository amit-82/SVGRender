import { createProxy } from "./object_utils";

describe("Test createProxy", () => {
	const proxy = createProxy<number>({ a: 1, b: 2, c: 3 }, 4);
	test("should return correct value for given key defined in target object", () => {
		expect(proxy.a).toBe(1);
		expect(proxy["c"]).toBe(3);
	});

	test("should return default value for key not defined in target object", () => {
		expect(proxy.x).toBe(4);
	});
});
