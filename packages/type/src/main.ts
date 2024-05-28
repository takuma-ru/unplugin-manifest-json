import { existsSync } from "node:fs";
import { pascalCase } from "scule";
import { type InterfaceDeclaration, Project, type SourceFile } from "ts-morph";
import { manifestJSDoc } from "../src/manifest.docs";
import type { ManifestJSDoc } from "./types";
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
		type: ManifestJSDoc[string]["type"],
	) => {
		targetInterface.addProperty({
			name: name,
			type: convertType(type),
		});
	};

	let targetInterfaceName = "Manifest";

	iterateObject(manifestJSDoc, (key, value, depth) => {
		if (value.type === "object") {
			const targetInterface = getInterface({
				sourceFile,
				name: targetInterfaceName,
			});

			addPropertyToInterface(
				targetInterface,
				key.toString(),
				targetInterfaceName,
			);

			targetInterfaceName = pascalCase(key.toString());
			sourceFile.addInterface({
				name: targetInterfaceName,
			});
		} else if (depth > 0) {
			const targetInterface = getInterface({
				sourceFile,
				name: targetInterfaceName,
			});

			addPropertyToInterface(targetInterface, key.toString(), value.type);
		} else {
			targetInterfaceName = "Manifest";
			const targetInterface = getInterface({
				sourceFile,
				name: targetInterfaceName,
			});

			addPropertyToInterface(targetInterface, key.toString(), value.type);
		}
	});

	await sourceFile.save();
};

generateManifestJsonType();
