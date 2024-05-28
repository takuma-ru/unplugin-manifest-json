import { existsSync } from "node:fs";
import { pascalCase } from "scule";
import { type InterfaceDeclaration, Project, type SourceFile } from "ts-morph";
import { manifestJSDoc } from "../src/manifest.docs";
import type { ManifestJSDoc } from "./types";
import { convertObjToTable } from "./utils/convertObjToTable";
import { convertType } from "./utils/convertType";
import { getInterface } from "./utils/getInterface";
import { iterateObject } from "./utils/iterateObject";

export const generateManifestJsonType = async () => {
	const filePath = "./dist/@types/manifest.d.ts";
	const project = new Project();

	let sourceFile: SourceFile;
	if (existsSync(filePath)) {
		sourceFile = project.addSourceFileAtPath(filePath);
		sourceFile.getStatements().forEach((statement, _i) => statement.remove());
	} else {
		sourceFile = project.createSourceFile(filePath);
	}

	sourceFile.addInterface({
		name: "Manifest",
		isExported: true,
	});

	const addPropertyToInterface = (
		targetInterface: InterfaceDeclaration,
		name: string,
		value: ManifestJSDoc[string],
	) => {
		targetInterface
			.addProperty({
				name: name,
				type: convertType(value.type),
			})
			.addJsDoc({
				description: value.description,
				tags: [
					{
						tagName: "version",
						text: value.version,
					},
					{
						tagName: "link",
						text: value.link,
					},
					{
						tagName: "support",
						text: convertObjToTable(value.support),
					},
				],
			});
	};

	let targetInterfaceName = "Manifest";

	iterateObject(manifestJSDoc, (key, value, depth) => {
		let targetInterface = getInterface({
			sourceFile,
			name: targetInterfaceName,
		});

		if (value.type === "object") {
			addPropertyToInterface(targetInterface, key.toString(), {
				...value,
				type: targetInterfaceName,
			});
			targetInterfaceName = pascalCase(key.toString());
			sourceFile.addInterface({
				name: targetInterfaceName,
			});
		} else if (depth > 0) {
			addPropertyToInterface(targetInterface, key.toString(), value);
		} else {
			targetInterfaceName = "Manifest";
			targetInterface = getInterface({
				sourceFile,
				name: targetInterfaceName,
			});

			addPropertyToInterface(targetInterface, key.toString(), value);
		}
	});

	await sourceFile.save();
};

generateManifestJsonType();
