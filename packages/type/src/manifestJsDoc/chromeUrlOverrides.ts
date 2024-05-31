import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const chromeUrlOverridesManifestJsDoc: ManifestJSDoc = {
	chrome_url_overrides: {
		acceptableType: "object",
		version: "2 >=",
		description:
			"Use the chrome_url_overrides key to provide a custom replacement for the documents loaded into various special pages usually provided by the browser itself.",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides",
		support: {
			chrome: {
				status: "full",
				start: "yes",
			},
			edge: {
				status: "full",
				start: "79",
			},
			firefox: {
				status: "full",
				start: "54",
			},
			opera: {
				status: "no",
			},
			safari: {
				status: "full",
				start: "41.1",
			},
			firefoxForAndroid: {
				status: "no",
			},
			safariOnIOS: {
				status: "full",
				start: "15",
			},
		},
		bookmarks: {
			acceptableType: "string",
			description:
				"Provide a replacement for the page that shows the bookmarks.",
			support: {
				chrome: {
					status: "full",
					start: "yes",
				},
				edge: {
					status: "full",
					start: "79",
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
					status: "no",
				},
				safariOnIOS: {
					status: "no",
				},
			},
		},
		history: {
			acceptableType: "string",
			description:
				"Provide a replacement for the page that shows the browsing history.",
			support: {
				chrome: {
					status: "full",
					start: "yes",
				},
				edge: {
					status: "full",
					start: "79",
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
					status: "no",
				},
				safariOnIOS: {
					status: "no",
				},
			},
		},
		newtab: {
			acceptableType: "string",
			description:
				"Provide a replacement for the document that's shown in the \"new tab\" page. This is the page that's shown when the user has opened a new tab but has not loaded any document into it: for example, by using the Ctrl/Command+T keyboard shortcut.",
			support: {
				chrome: {
					status: "full",
					start: "yes",
					isImplementation: true,
				},
				edge: {
					status: "full",
					start: "79",
					isImplementation: true,
				},
				firefox: {
					status: "full",
					start: "54",
					isImplementation: true,
				},
				opera: {
					status: "no",
				},
				safari: {
					status: "full",
					start: "41.1",
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
		},
	},
};
