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

	sourceFile.addInterface({
		name: "Manifest",
		isExported: true,
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

			addPropertyToInterface(targetInterface, stringKey, {
				...value,
				acceptableType: targetInterfaceName[depth + 1],
			});

			sourceFile.addInterface({
				name: targetInterfaceName[depth + 1],
			});

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
