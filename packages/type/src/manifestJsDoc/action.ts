import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const actionManifestJsDoc: ManifestJSDoc = {
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
			defaultType: "false",
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
			defaultType: "menupanel",
			descriptionDoc:
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
			acceptableType: "{ [key in number | string]: string }",
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
		},
		default_popup: {
			acceptableType: "string",
			descriptionDoc:
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
			descriptionDoc:
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
};
