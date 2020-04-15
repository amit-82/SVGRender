function createProxy<T>(target: object, def?: T): { [key: string]: T } {
	const handler = {
		get: (target: any, prop: string | number | symbol): T => {
			return target[prop] || def;
		},
	};

	return new Proxy(target, handler);
}

export { createProxy };
