type SupportBrowserKey =
	| "chrome"
	| "edge"
	| "firefox"
	| "opera"
	| "safari"
	| "firefoxForAndroid"
	| "safariOnIOS";

type ManifestJSDocContent = {
	/**
	 * ### boolean: `"boolean"`
	 * only `true` or `false`: `["true"]`, `["false"]` -> `true`, `false`
	 *
	 * ### string: `"string"`
	 * union of strings: `["string1", "string2"]` -> `"string1" | "string2"`
	 *
	 * ### number: `"number"`
	 * union of strings: `[100, 200, 300]` -> `100 | 200 | 300`
	 *
	 * ### array: `["array", { type: "string" }]` -> `string[]`
	 * union of strings: `["array", { type: ["string1", "string2"] }]` -> `("string1" | "string2")[]`
	 *
	 * ### object: `"object"`
	 * The contents of the object should be described as follows
	 * ```ts
	 * {
	 *   type: "object",
	 *   // ...
	 *   objectProperty01: {
	 *     type: "string",
	 *     // ...
	 *   }
	 * }
	 * ```
	 */
	type?:
		| "boolean"
		| "string"
		| "number"
		| string[]
		| number[]
		| ["array", { type: ManifestJSDocContent["type"] }]
		| "object"
		// biome-ignore lint/complexity/noBannedTypes: <explanation>
		| String;
	version?: string;
	link?: `https://${string}`;
	default?: string;
	deprecated?: string;
	description?: string;
	support?: {
		[key in SupportBrowserKey]:
			| "no"
			| "yes"
			// biome-ignore lint/complexity/noBannedTypes: <explanation>
			| String
			| { start: string; end: string };
	};
};

type ManifestJSDocWithNestedObj = ManifestJSDocContent & {
	[key in Exclude<string, keyof ManifestJSDocContent>]?:
		| ManifestJSDocContent[keyof ManifestJSDocContent]
		| ManifestJSDocContent;
};

export type ManifestJSDoc = {
	[key in string]: ManifestJSDocWithNestedObj;
};
