import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const backgroundManifestJsDoc: ManifestJSDoc = {
	background: {
		acceptableType: "object",
		version: "2 >=",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background",
		description:
			"Use the background key to include one or more background scripts, a background page, or a Service worker in your extension.\nBackground scripts are the place to put code that needs to maintain a long-term state or perform long-term operations independently of the lifetime of any particular web pages or browser windows.\nBackground scripts are loaded as soon as the extension is loaded and stay loaded until the extension is disabled or uninstalled unless persistent is specified as false. You can use any WebExtension APIs in the script if you have requested the necessary [permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).",
		support: {
			chrome: {
				status: "full",
				start: "yes",
			},
			edge: {
				status: "full",
				start: "14",
			},
			firefox: {
				status: "full",
				start: "48",
			},
			opera: {
				status: "full",
				start: "yes",
			},
			safari: {
				status: "full",
				start: "14",
			},
			firefoxForAndroid: {
				status: "full",
				start: "48",
			},
			safariOnIOS: {
				status: "full",
				start: "15",
			},
		},
		page: {
			acceptableType: "string",
			description:
				"If you need specific content in the background page, you can define a page using the page property.",
			support: {
				chrome: {
					status: "full",
					start: "yes",
					isImplementation: true,
				},
				edge: {
					status: "full",
					start: "14",
				},
				firefox: {
					status: "full",
					start: "48",
				},
				opera: {
					status: "full",
					start: "yes",
					isImplementation: true,
				},
				safari: {
					status: "full",
					start: "14",
					isImplementation: true,
				},
				firefoxForAndroid: {
					status: "full",
					start: "48",
				},
				safariOnIOS: {
					status: "full",
					start: "15",
					isImplementation: true,
				},
			},
		},
		scripts: {
			acceptableType: ["array", { acceptableType: "string" }],
			description:
				"An Array of Strings, each of which is a path to a JavaScript source. The path is relative to the manifest.json file itself. These are the scripts that are executed in the extension's background page.",
			support: {
				chrome: {
					status: "full",
					start: "yes",
					isImplementation: true,
				},
				edge: {
					status: "full",
					start: "14",
				},
				firefox: {
					status: "full",
					start: "48",
					isImplementation: true,
				},
				opera: {
					status: "full",
					start: "yes",
					isImplementation: true,
				},
				safari: {
					status: "full",
					start: "14",
					isImplementation: true,
				},
				firefoxForAndroid: {
					status: "full",
					start: "48",
					isImplementation: true,
				},
				safariOnIOS: {
					status: "full",
					start: "15",
					isImplementation: true,
				},
			},
		},
		service_worker: {
			acceptableType: "string",
			description:
				"Specify a JavaScript file as the extension service worker. A service worker is a background script that acts as the extension's main event handler.",
			support: {
				chrome: {
					status: "full",
					start: "88",
					isImplementation: true,
				},
				edge: {
					status: "full",
					start: "88",
					isImplementation: true,
				},
				firefox: {
					status: "no",
				},
				opera: {
					status: "full",
					start: "74",
					isImplementation: true,
				},
				safari: {
					status: "full",
					start: "15.4",
					isImplementation: true,
				},
				firefoxForAndroid: {
					status: "no",
				},
				safariOnIOS: {
					status: "full",
					start: "15.4",
					isImplementation: true,
				},
			},
		},
		persistent: {
			acceptableType: "boolean",
			description:
				"If omitted, this property defaults to true in Manifest V2 and false in Manifest V3. Setting to true in Manifest V3 results in an error.\n- `true` indicates the background page is to be kept in memory from when the extension is loaded or the browser starts until the extension is unloaded or disabled, or the browser is closed (that is, the background page is persistent).\n- `false` indicates the background page may be unloaded from memory when idle and recreated when needed. Such background pages are often called Event Pages, because they are loaded into memory to allow the background page to handle the events to which it has added listeners. Registration of listeners is persistent when the page is unloaded from memory, but other values are not persistent. If you want to store data persistently in an event page, then you should use the [storage API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage).",
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
					start: "48",
					isImplementation: true,
				},
				opera: {
					status: "full",
					start: "yes",
					isImplementation: true,
				},
				safari: {
					status: "full",
					start: "14.1",
					isImplementation: true,
				},
				firefoxForAndroid: {
					status: "full",
					start: "48",
					isImplementation: true,
				},
				safariOnIOS: {
					status: "partial",
					start: "15.4",
				},
			},
		},
		type: {
			acceptableType: ["classic", "module"],
			default: "classic",
			description:
				'Determines whether the scripts specified in "scripts" are loaded as ES modules.\n- `classic` indicates the background scripts or service workers are not included as an ES Module.\n- `module` indicates the background scripts or service workers are included as an ES Module. This enables the background page or service worker to import code.',
			support: {
				chrome: {
					status: "full",
					start: "yes",
				},
				edge: {
					status: "full",
					start: "yes",
				},
				firefox: {
					status: "full",
					start: "112",
				},
				opera: {
					status: "full",
					start: "yes",
				},
				safari: {
					status: "full",
					start: "16.4",
				},
				firefoxForAndroid: {
					status: "full",
					start: "112",
				},
				safariOnIOS: {
					status: "full",
					start: "16.4",
				},
			},
		},
	},
};
