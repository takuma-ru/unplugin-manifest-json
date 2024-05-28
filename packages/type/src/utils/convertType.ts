import type { ManifestJSDoc } from "../types";

export const convertType = (type: ManifestJSDoc[string]["type"]): string => {
	switch (type) {
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
		default: {
			if (Array.isArray(type)) {
				if (type[0] === "array") {
					if (
						typeof type[1] === "object" &&
						type[1] !== null &&
						"type" in type[1]
					) {
						return `${convertType(type[1].type)}[]`;
					}
				}

				if (type[0] === "true" || type[0] === "false") {
					return type[0];
				}

				return type.map((type) => `"${type}"`).join(" | ");
			}

			return type?.toString() ?? "unknown";
		}
	}
};
