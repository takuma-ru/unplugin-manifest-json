import { pascalCase } from "scule";
import type { InterfaceDeclaration } from "ts-morph";
import type { ManifestJSDoc } from "../types/ManifestJsDoc";
import { convertObjToTable } from "./convertObjToTable";
import { convertType } from "./convertType";

export const addPropertyToInterface = (
	targetInterface: InterfaceDeclaration,
	name: string,
	value: ManifestJSDoc[string],
) => {
	const tags = [];

	if (value.deprecated) {
		tags.push({
			tagName: "deprecated",
			text: value.deprecated,
		});
	}

	if (value.version) {
		tags.push({
			tagName: "version",
			text: value.version.toString(),
		});
	}

	if (value.link) {
		tags.push({
			tagName: "link",
			text: value.link,
		});
	}

	if (value.support) {
		tags.push({
			tagName: "support",
			text: convertObjToTable(value.support),
		});
	}

	if (value.defaultType) {
		tags.push({
			tagName: "default",
			text: value.defaultType,
		});
	}

	targetInterface
		.addProperty({
			name: name + (value.isRequired ? "" : "?"),
			type: convertType(pascalCase(name), value.acceptableType),
		})
		.addJsDoc({
			description: value.descriptionDoc,
			tags,
		});
};
