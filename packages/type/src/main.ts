import { existsSync } from "node:fs";
import { pascalCase } from "scule";
import { type InterfaceDeclaration, Project, type SourceFile } from "ts-morph";
import { manifestJSDoc } from "../src/manifest.docs";

const iterateObject = <T extends object>(
	obj: T,
	callback: (key: keyof T, value: T[keyof T], depth: number) => void,
	depth = 0,
): void => {
	for (const key in obj) {
		if (Object.hasOwn(obj, key)) {
			const value = obj[key as keyof T];

			if (typeof value === "object" && key !== "support" && value !== null) {
				callback(key, value, depth);
				iterateObject(value as unknown as T, callback, depth + 1);
			}
		}
	}
};

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

	const getInterface = (name: string) => {
		const targetInterface = sourceFile.getInterface(name);
		if (targetInterface === undefined) {
			throw new Error(`Interface ${name} not found`);
		}
		return targetInterface;
	};

	const addPropertyToInterface = (
		targetInterface: InterfaceDeclaration,
		name: string,
		type: string,
	) => {
		targetInterface.addProperty({
			name: name,
			type: type,
		});
	};

	let targetInterfaceName = "Manifest";

	iterateObject(manifestJSDoc, (key, value, depth) => {
		if (value.type === "object") {
			const targetInterface = getInterface(targetInterfaceName);

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
			const targetInterface = getInterface(targetInterfaceName);

			addPropertyToInterface(
				targetInterface,
				key.toString(),
				value.type as string,
			);
		} else {
			targetInterfaceName = "Manifest";
			const targetInterface = getInterface(targetInterfaceName);

			addPropertyToInterface(
				targetInterface,
				key.toString(),
				value.type as string,
			);
		}
	});

	await sourceFile.save();
};

generateManifestJsonType();
