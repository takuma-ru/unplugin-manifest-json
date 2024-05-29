import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const convertObjToTable = (obj: ManifestJSDoc[string]["support"]) => {
	if (!obj) return "";

	const headers = Object.keys(obj)
		.map((key) => key.charAt(0).toUpperCase() + key.slice(1))
		.join(" | ");

	const values = Object.values(obj)
		.map((value) => {
			let status = "";
			switch (value.status) {
				case "full": {
					status = "✅";
					break;
				}
				case "partial": {
					status = "⚠️";
					break;
				}
				case "no": {
					status = "❌";
					break;
				}
			}

			let period = "";
			if (value.start && value.end) {
				period = ` ${value.start} - ${value.end}`;
			} else if (value.start) {
				if (value.start === "yes") {
					period = " Yes";
				}

				period = ` ${value.start}`;
			}

			return `${status}${period}${value.isImplementation ? "※" : ""}`;
		})
		.join(" | ");

	const markdownTable = `
| ${headers} |
| ${new Array(Object.keys(obj).length).fill("--").join(" | ")} |
| ${values} |
`;

	return markdownTable;
};
