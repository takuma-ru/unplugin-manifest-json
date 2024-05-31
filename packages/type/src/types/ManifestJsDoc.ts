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
	 * ### array: `["array", { acceptableType: "string" }]` -> `string[]`
	 * union of strings: `["array", { acceptableType: ["string1", "string2"] }]` -> `("string1" | "string2")[]`
	 *
	 * ### object: `"object"`
	 * The contents of the object should be described as follows
	 * ```ts
	 * {
	 *   acceptableType: "object",
	 *   // ...
	 *   objectProperty01: {
	 *     acceptableType: "string",
	 *     // ...
	 *   }
	 * }
	 * ```
	 */
	acceptableType:
		| "boolean"
		| "string"
		| "number"
		| string[]
		| number[]
		| ["array", { acceptableType: ManifestJSDocContent["acceptableType"] }]
		| "object"
		| "anyKeyObject"
		// biome-ignore lint/complexity/noBannedTypes: <explanation>
		| String;
	isRequired?: boolean;
	version?: "3" | "2" | "3 >=" | "2 >=";
	link?: `https://${string}`;
	defaultType?: string;
	deprecated?: string;
	descriptionDoc?: string;
	support?: {
		[key in SupportBrowserKey]:
			| {
					status: "full" | "partial";
					// biome-ignore lint/complexity/noBannedTypes: <explanation>
					start: "yes" | String;
					end?: string;
					isImplementation?: boolean;
			  }
			| {
					status: "no";
					// biome-ignore lint/complexity/noBannedTypes: <explanation>
					start?: "yes" | String;
					end?: string;
					isImplementation?: boolean;
			  };
	};
};

type ManifestJSDocWithNestedObj = ManifestJSDocContent & {
	[key in Exclude<string, keyof ManifestJSDocContent>]?:
		| ManifestJSDocContent[keyof ManifestJSDocContent]
		| ManifestJSDocContent
		| ManifestJSDocWithNestedObj;
};

/**
 * The type of the manifest JSDoc object.
 *
 * ※ Descriptions of each type are given from https://developer.mozilla.org
 */
export type ManifestJSDoc = {
	[key in string]: ManifestJSDocWithNestedObj;
};
