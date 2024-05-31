import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const convertType = (
	targetInterfaceName: string,
	acceptableType: ManifestJSDoc[string]["acceptableType"],
): string => {
	switch (acceptableType) {
		case "boolean": {
			return "boolean";
		}
		case "string": {
			return "string";
		}
		case "number": {
			return "number";
		}
		case "object": {
			return "object";
		}
		case "anyKeyObject": {
			return `{ [key: string]: ${targetInterfaceName} }`;
		}
		default: {
			if (Array.isArray(acceptableType)) {
				if (acceptableType[0] === "array") {
					if (
						typeof acceptableType[1] === "object" &&
						acceptableType[1] !== null &&
						"acceptableType" in acceptableType[1]
					) {
						return `${convertType(
							targetInterfaceName,
							acceptableType[1].acceptableType,
						)}[]`;
					}
				}

				if (acceptableType[0] === "true" || acceptableType[0] === "false") {
					return acceptableType[0];
				}

				return acceptableType
					.map((acceptableType) => `"${acceptableType}"`)
					.join(" | ");
			}

			return acceptableType?.toString() ?? "unknown";
		}
	}
};
