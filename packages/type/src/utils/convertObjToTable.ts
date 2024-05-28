import type { ManifestJSDoc } from "../types";

export const convertObjToTable = (obj: ManifestJSDoc[string]["support"]) => {
	if (!obj) return "";

	const headers = Object.keys(obj)
		.map((key) => key.charAt(0).toUpperCase() + key.slice(1))
		.join(" | ");

	const values = Object.values(obj)
		.map((value) =>
			typeof value === "object" && !(value instanceof String)
				? `${value.start}-${value.end}`
				: value,
		)
		.join(" | ");

	const markdownTable = `
| ${headers} |
| ${new Array(Object.keys(obj).length).fill("--").join(" | ")} |
| ${values} |
`;

	return markdownTable;
};
