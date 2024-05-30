import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const BrowserSpecificSettingsManifestJsDoc: ManifestJSDoc = {
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
