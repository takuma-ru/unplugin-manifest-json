export const iterateObject = <T extends object>(
	obj: T,
	callback: (key: keyof T, value: T[keyof T], depth: number) => void,
	depth = 0,
): void => {
	for (const key in obj) {
		if (Object.hasOwn(obj, key)) {
			const value = obj[key as keyof T];

			if (
				typeof value === "object" &&
				!Array.isArray(value) &&
				key !== "support" &&
				value !== null
			) {
				callback(key, value, depth);
				iterateObject(value as unknown as T, callback, depth + 1);
			}
		}
	}
};
