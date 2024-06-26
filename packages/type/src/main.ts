import { existsSync } from "node:fs";
import { pascalCase } from "scule";
import { Project, type SourceFile } from "ts-morph";
import { manifestJSDoc } from "./manifestJsDoc";
import { addPropertyToInterface } from "./utils/addPropertyToInterface";
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

	sourceFile
		.addInterface({
			name: "Manifest",
			isExported: true,
		})
		.addJsDoc({
			description:
				"The type of the manifest JSDoc object.\n\n※ Descriptions of each type are given from https://developer.mozilla.org",
		});

	const targetInterfaceName = ["Manifest"];

	iterateObject(manifestJSDoc, (key, value, depth) => {
		let targetInterface = getInterface({
			sourceFile,
			name: targetInterfaceName[depth],
		});

		const stringKey = key.toString();

		if (value.acceptableType === "object") {
			const removeLength = targetInterfaceName.length - depth - 1;
			targetInterfaceName.splice(-removeLength, removeLength);

			targetInterfaceName.push(pascalCase(stringKey));

			sourceFile.addInterface({
				name: targetInterfaceName[depth + 1],
			});

			addPropertyToInterface(targetInterface, stringKey, {
				...value,
				acceptableType: targetInterfaceName[depth + 1],
			});

			targetInterface = getInterface({
				sourceFile,
				name: targetInterfaceName[depth + 1],
			});
		} else if (value.acceptableType === "anyKeyObject") {
			const removeLength = targetInterfaceName.length - depth - 1;
			targetInterfaceName.splice(-removeLength, removeLength);

			targetInterfaceName.push(pascalCase(stringKey));
			sourceFile.addInterface({
				name: targetInterfaceName[depth + 1],
			});

			addPropertyToInterface(targetInterface, stringKey, value);

			targetInterface = getInterface({
				sourceFile,
				name: targetInterfaceName[depth + 1],
			});
		} else {
			addPropertyToInterface(targetInterface, stringKey, value);
		}
	});

	await sourceFile.save();
};

generateManifestJsonType();
