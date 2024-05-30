import type { ManifestJSDoc } from "../types/ManifestJsDoc";

export const ChromeSettingsOverridesManifestJsDoc: ManifestJSDoc = {
	chrome_settings_overrides: {
		acceptableType: "object",
		version: "2 >=",
		link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides",
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
				start: "55",
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
		homepage: {
			acceptableType: "string",
			description:
				"Defines the page to be used as the browser's homepage.\nTo override new tabs, use [chrome_url_overrides](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) instead.",
		},
		search_provider: {
			acceptableType: "object",
			description: `Defines a search provider to add to the browser.\nThe search provider has a name and a primary search URL. Alternative URLs may be provided, including URLs for more specialized searches like image search. In the URL you supply, use "{searchTerms}" to interpolate the search term into the URL, like: https://www.discogs.com/search/?q={searchTerms}. You can also provide POST parameters to be sent along with the search.\nThe search provider will be presented to the user alongside the built-in providers. If you include the is_default property and set it to true, the new search provider will be the default option. By supplying the keyword property, you enable the user to select your search provider by typing the keyword into the search/address bar before the search term.\nThis is an object with the properties listed below. All string properties are [localizable](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).`,
			name: {
				acceptableType: "string",
				isRequired: true,
				description: "The search engine's name, displayed to the user.",
			},
			search_url: {
				acceptableType: "string",
				isRequired: true,
				description:
					"URL used by the search engine. This must be an HTTPS URL.",
			},
			is_default: {
				acceptableType: "boolean",
				description:
					"True if the search engine should be the default choice. On Firefox, this is opt-in and the user will only be asked the first time the extension is installed. They will not be asked again if a search engine is added later.",
			},
			alternate_urls: {
				acceptableType: ["array", { acceptableType: "string" }],
				description:
					"An array of alternative URLs that can be used instead of search_url.",
			},
			encoding: {
				acceptableType: "string",
			},
			favicon_url: {
				acceptableType: "string",
			},
			image_url: {
				acceptableType: "string",
			},
			image_url_post_params: {
				acceptableType: "string",
			},
			instant_url: {
				acceptableType: "string",
			},
			instant_url_post_params: {
				acceptableType: "string",
			},
			keyword: {
				acceptableType: "string",
			},
			prepopulated_id: {
				acceptableType: "string",
			},
			search_url_post_params: {
				acceptableType: "string",
			},
			suggest_url: {
				acceptableType: "string",
			},
			suggest_url_post_params: {
				acceptableType: "string",
			},
		},
	},
};
