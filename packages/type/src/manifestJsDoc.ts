import type { ManifestJSDoc } from "./types/ManifestJsDoc";

export const manifestJSDoc: ManifestJSDoc = {
	action: {
		acceptableType: "object",
		version: "3 >=",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action",
		support: {
			chrome: {
				status: "full",
				start: "88",
			},
			edge: {
				status: "full",
				start: "88",
			},
			firefox: {
				status: "full",
				start: "109",
			},
			opera: {
				status: "full",
				start: "74",
			},
			safari: {
				status: "full",
				start: "15.4",
			},
			firefoxForAndroid: {
				status: "full",
				start: "109",
			},
			safariOnIOS: {
				status: "full",
				start: "15.4",
			},
		},
		browser_style: {
			acceptableType: "boolean",
			default: "false",
			deprecated:
				"Do not set browser_style to true: its support in Manifest V3 was removed in Firefox 118. See [Manifest V3 migration for browser_style](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).",
			support: {
				chrome: {
					status: "no",
				},
				edge: {
					status: "no",
				},
				firefox: {
					status: "no",
					start: "109",
					end: "117",
				},
				opera: {
					status: "no",
				},
				safari: {
					status: "no",
				},
				firefoxForAndroid: {
					status: "no",
				},
				safariOnIOS: {
					status: "no",
				},
			},
		},
		default_area: {
			acceptableType: ["navbar", "menupanel", "tabstrip", "personaltoolbar"],
			default: "menupanel",
			description:
				"Defines the part of the browser in which the button is initially placed.",
			support: {
				chrome: {
					status: "no",
				},
				edge: {
					status: "no",
				},
				firefox: {
					status: "full",
					start: "109",
				},
				opera: {
					status: "no",
				},
				safari: {
					status: "no",
				},
				firefoxForAndroid: {
					status: "no",
				},
				safariOnIOS: {
					status: "no",
				},
			},
		},
		default_icon: {
			acceptableType: "object",
			support: {
				chrome: {
					status: "full",
					start: "88",
					isImplementation: true,
				},
				edge: {
					status: "partial",
					start: "88",
				},
				firefox: {
					status: "full",
					start: "109",
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
					status: "full",
					start: "109",
				},
				safariOnIOS: {
					status: "full",
					start: "15.4",
					isImplementation: true,
				},
			},
			"16": {
				acceptableType: "string",
			},
			"32": {
				acceptableType: "string",
			},
			"48": {
				acceptableType: "string",
			},
			"64": {
				acceptableType: "string",
			},
			"96": {
				acceptableType: "string",
			},
			"128": {
				acceptableType: "string",
			},
			"256": {
				acceptableType: "string",
			},
			"512": {
				acceptableType: "string",
			},
		},
		default_popup: {
			acceptableType: "string",
			description:
				"The path to an HTML file containing the specification of the popup.",
			support: {
				chrome: {
					status: "full",
					start: "88",
				},
				edge: {
					status: "full",
					start: "88",
				},
				firefox: {
					status: "full",
					start: "109",
				},
				opera: {
					status: "full",
					start: "74",
				},
				safari: {
					status: "full",
					start: "15.4",
				},
				firefoxForAndroid: {
					status: "full",
					start: "109",
				},
				safariOnIOS: {
					status: "full",
					start: "15.4",
				},
			},
		},
		default_title: {
			acceptableType: "string",
			description:
				"Tooltip for the button, displayed when the user moves their mouse over it. If the button is added to the browser's menu panel, this is also shown under the app icon.",
			support: {
				chrome: {
					status: "full",
					start: "88",
				},
				edge: {
					status: "full",
					start: "88",
				},
				firefox: {
					status: "full",
					start: "109",
				},
				opera: {
					status: "full",
					start: "74",
				},
				safari: {
					status: "full",
					start: "15.4",
				},
				firefoxForAndroid: {
					status: "full",
					start: "109",
					isImplementation: true,
				},
				safariOnIOS: {
					status: "full",
					start: "15.4",
				},
			},
		},
		theme_icons: {
			acceptableType: ["array", { acceptableType: "object" }],
			support: {
				chrome: {
					status: "full",
					start: "88",
				},
				edge: {
					status: "full",
					start: "88",
				},
				firefox: {
					status: "full",
					start: "109",
				},
				opera: {
					status: "full",
					start: "74",
				},
				safari: {
					status: "no",
				},
				firefoxForAndroid: {
					status: "no",
				},
				safariOnIOS: {
					status: "no",
				},
			},
		},
	},
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
	browser_action: {
		acceptableType: "Action",
		version: "2",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action",
		description:
			"A browser action is a button that your extension adds to the browser's toolbar. The button has an icon, and may optionally have a popup whose content is specified using HTML, CSS, and JavaScript.\nThis key is replaced by `action` in Manifest V3 extensions.",
	},
	browser_specific_settings: {
		acceptableType: "object",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings",
		description:
			"The browser_specific_settings key contains keys that are specific to a particular host application.\nUsually, no (but see also [When do you need an Add-on ID?](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id)). Mandatory if the extension ID cannot be determined, see [browser_specific_settings.gecko.id](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties).",
		support: {
			chrome: {
				status: "no",
			},
			edge: {
				status: "no",
				start: "15",
				end: "18",
			},
			firefox: {
				status: "full",
				start: "42",
				isImplementation: true,
			},
			opera: {
				status: "no",
			},
			safari: {
				status: "full",
				start: "14",
			},
			firefoxForAndroid: {
				status: "full",
				start: "42",
				isImplementation: true,
			},
			safariOnIOS: {
				status: "full",
				start: "15",
			},
		},
		gecko: {
			acceptableType: "object",
			support: {
				chrome: {
					status: "no",
				},
				edge: {
					status: "no",
				},
				firefox: {
					status: "full",
					start: "42",
					isImplementation: true,
				},
				opera: {
					status: "no",
				},
				safari: {
					status: "no",
				},
				firefoxForAndroid: {
					status: "full",
					start: "42",
					isImplementation: true,
				},
				safariOnIOS: {
					status: "no",
				},
			},
			id: {
				acceptableType: "string",
				description:
					"The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID.",
			},
			strict_min_version: {
				acceptableType: "string",
				description:
					'Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "※" is not valid in this field.',
			},
			strict_max_version: {
				acceptableType: "string",
				description:
					'Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version.',
			},
			update_url: {
				acceptableType: "string",
				description:
					'A link to an extension update manifest. Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO).',
			},
		},
		gecko_android: {
			acceptableType: "object",
			support: {
				chrome: {
					status: "no",
				},
				edge: {
					status: "no",
				},
				firefox: {
					status: "no",
				},
				opera: {
					status: "no",
				},
				safari: {
					status: "no",
				},
				firefoxForAndroid: {
					status: "full",
					start: "113",
					isImplementation: true,
				},
				safariOnIOS: {
					status: "no",
				},
			},
			id: {
				acceptableType: "string",
				description:
					"The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID.",
			},
			strict_min_version: {
				acceptableType: "string",
				description:
					'Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "※" is not valid in this field.',
			},
			strict_max_version: {
				acceptableType: "string",
				description:
					'Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version.',
			},
			update_url: {
				acceptableType: "string",
				description:
					'A link to an extension update manifest. Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO).',
			},
		},
		safari: {
			acceptableType: "object",
			support: {
				chrome: {
					status: "no",
				},
				edge: {
					status: "no",
				},
				firefox: {
					status: "no",
				},
				opera: {
					status: "no",
				},
				safari: {
					status: "full",
					start: "14",
					isImplementation: true,
				},
				firefoxForAndroid: {
					status: "no",
				},
				safariOnIOS: {
					status: "full",
					start: "15",
					isImplementation: true,
				},
			},
			id: {
				acceptableType: "string",
				description:
					"The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID.",
			},
			strict_min_version: {
				acceptableType: "string",
				description:
					'Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "※" is not valid in this field.',
			},
			strict_max_version: {
				acceptableType: "string",
				description:
					'Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version.',
			},
			update_url: {
				acceptableType: "string",
				description:
					'A link to an extension update manifest. Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO).',
			},
		},
	},
};
