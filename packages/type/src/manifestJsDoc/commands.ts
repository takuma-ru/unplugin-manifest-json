import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const commandsManifestJsDoc: ManifestJSDoc = {
	commands: {
		acceptableType: "anyKeyObject",
		version: "2 >=",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands",
		descriptionDoc:
			"Use the commands key to define one or more keyboard shortcuts for your extension.",
		suggested_key: {
			acceptableType: "object",
			default: {
				acceptableType: "string",
			},
			mac: {
				acceptableType: "string",
			},
			linux: {
				acceptableType: "string",
			},
			windows: {
				acceptableType: "string",
			},
			chromeos: {
				acceptableType: "string",
			},
			android: {
				acceptableType: "string",
			},
			ios: {
				acceptableType: "string",
			},
		},
		description: {
			acceptableType: "string",
		},
	},
};
