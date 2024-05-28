import type { SourceFile } from "ts-morph";

export const getInterface = ({
	sourceFile,
	name,
}: {
	sourceFile: SourceFile;
	name: string;
}) => {
	const targetInterface = sourceFile.getInterface(name);
	if (targetInterface === undefined) {
		throw new Error(`Interface ${name} not found`);
	}
	return targetInterface;
};
