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
			descriptionDoc:
				"Defines the page to be used as the browser's homepage.\nTo override new tabs, use [chrome_url_overrides](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) instead.",
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
		},
		search_provider: {
			acceptableType: "object",
			descriptionDoc: `Defines a search provider to add to the browser.\nThe search provider has a name and a primary search URL. Alternative URLs may be provided, including URLs for more specialized searches like image search. In the URL you supply, use "{searchTerms}" to interpolate the search term into the URL, like: https://www.discogs.com/search/?q={searchTerms}. You can also provide POST parameters to be sent along with the search.\nThe search provider will be presented to the user alongside the built-in providers. If you include the is_default property and set it to true, the new search provider will be the default option. By supplying the keyword property, you enable the user to select your search provider by typing the keyword into the search/address bar before the search term.\nThis is an object with the properties listed below. All string properties are [localizable](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).`,
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
			name: {
				acceptableType: "string",
				isRequired: true,
				descriptionDoc: "The search engine's name, displayed to the user.",
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
			},
			search_url: {
				acceptableType: "string",
				isRequired: true,
				descriptionDoc:
					"URL used by the search engine. This must be an HTTPS URL.",
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
			},
			is_default: {
				acceptableType: "boolean",
				descriptionDoc:
					"True if the search engine should be the default choice. On Firefox, this is opt-in and the user will only be asked the first time the extension is installed. They will not be asked again if a search engine is added later.",
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
						start: "57",
						isImplementation: true,
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
			alternate_urls: {
				acceptableType: ["array", { acceptableType: "string" }],
				descriptionDoc:
					"An array of alternative URLs that can be used instead of search_url.",
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
			},
			encoding: {
				acceptableType: "string",
				descriptionDoc:
					'Encoding of the search term, specified as a [standard character encoding name](https://www.iana.org/assignments/character-sets/character-sets.xhtml), such as "UTF-8".',
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
						start: "65",
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
			favicon_url: {
				acceptableType: "string",
				descriptionDoc:
					"URL pointing to an icon for the search engine. In Manifest V2, this must be an absolute HTTP or HTTPS URL. In Manifest V3, this must reference an icon provided in the extension as a path relative to the extension's root.",
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
			},
			image_url: {
				acceptableType: "string",
				descriptionDoc: "URL used for image search.",
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
			image_url_post_params: {
				acceptableType: "string",
				descriptionDoc: "POST parameters to send to `image_url`.",
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
			instant_url: {
				acceptableType: "string",
				descriptionDoc: "URL used for instant search.",
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
			instant_url_post_params: {
				acceptableType: "string",
				descriptionDoc: "POST parameters to send to instant_url.",
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
			keyword: {
				acceptableType: "string",
				descriptionDoc: "Address bar keyword for the search engine.",
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
			},
			prepopulated_id: {
				acceptableType: "string",
				descriptionDoc: "The ID of a built-in search engine to use.",
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
			search_url_post_params: {
				acceptableType: "string",
				descriptionDoc: "POST parameters to send to search_url.",
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
						start: "64",
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
			suggest_url: {
				acceptableType: "string",
				descriptionDoc:
					"URL used for search suggestions. This must be an HTTPS URL.",
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
						start: "64",
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
			suggest_url_post_params: {
				acceptableType: "string",
				descriptionDoc: "POST parameters to send to suggest_url.",
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
						start: "64",
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
		},
		startup_pages: {
			acceptableType: ["array", { acceptableType: "string" }],
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
	},
};
