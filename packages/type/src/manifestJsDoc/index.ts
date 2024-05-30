import type { ManifestJSDoc } from "../types/ManifestJsDoc";
import { actionManifestJsDoc } from "./action";
import { backgroundManifestJsDoc } from "./background";
import { BrowserSpecificSettingsManifestJsDoc } from "./browserSpecificSettings";
import { ChromeSettingsOverridesManifestJsDoc } from "./chromeSettingsOverrides";

export const manifestJSDoc: ManifestJSDoc = {
	...actionManifestJsDoc,
	author: {
		acceptableType: "string",
		version: "2 >=",
		description:
			"The extension's author, intended for display in the browser's user interface",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author",
		support: {
			chrome: {
				status: "full",
				start: "yes",
			},
			edge: {
				status: "full",
				start: "14",
				isImplementation: true,
			},
			firefox: {
				status: "full",
				start: "52",
			},
			opera: {
				status: "full",
				start: "yes",
			},
			safari: {
				status: "full",
				start: "14",
				isImplementation: true,
			},
			firefoxForAndroid: {
				status: "full",
				start: "52",
			},
			safariOnIOS: {
				status: "full",
				start: "15",
				isImplementation: true,
			},
		},
	},
	...backgroundManifestJsDoc,
	browser_action: {
		acceptableType: "Action",
		version: "2",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action",
		description:
			"A browser action is a button that your extension adds to the browser's toolbar. The button has an icon, and may optionally have a popup whose content is specified using HTML, CSS, and JavaScript.\nThis key is replaced by `action` in Manifest V3 extensions.",
	},
	...BrowserSpecificSettingsManifestJsDoc,
	...ChromeSettingsOverridesManifestJsDoc,
};
