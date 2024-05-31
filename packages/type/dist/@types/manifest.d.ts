/**
 * The type of the manifest JSDoc object.
 *
 * ※ Descriptions of each type are given from https://developer.mozilla.org
 */
export interface Manifest {
    /**
     * @version 3 >=
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ 88 | ✅ 88 | ✅ 109 | ✅ 74 | ✅ 15.4 | ✅ 109 | ✅ 15.4 |
     *
     */
    action?: Action;
    /**
     * @version 2 >=
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 14※ | ✅ 52 | ✅ yes | ✅ 14※ | ✅ 52 | ✅ 15※ |
     *
     */
    author?: string;
    /**
     * Use the background key to include one or more background scripts, a background page, or a Service worker in your extension.
     * Background scripts are the place to put code that needs to maintain a long-term state or perform long-term operations independently of the lifetime of any particular web pages or browser windows.
     * Background scripts are loaded as soon as the extension is loaded and stay loaded until the extension is disabled or uninstalled unless persistent is specified as false. You can use any WebExtension APIs in the script if you have requested the necessary [permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
     * @version 2 >=
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 14 | ✅ 48 | ✅ yes | ✅ 14 | ✅ 48 | ✅ 15 |
     *
     */
    background?: Background;
    /**
     * @version 2
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
     */
    browser_action?: Action;
    /**
     * The browser_specific_settings key contains keys that are specific to a particular host application.
     * Usually, no (but see also [When do you need an Add-on ID?](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id)). Mandatory if the extension ID cannot be determined, see [browser_specific_settings.gecko.id](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties).
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ❌ | ❌ 15 - 18 | ✅ 42※ | ❌ | ✅ 14 | ✅ 42※ | ✅ 15 |
     *
     */
    browser_specific_settings?: BrowserSpecificSettings;
    /**
     * @version 2 >=
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    chrome_settings_overrides?: ChromeSettingsOverrides;
    /**
     * @version 2 >=
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 54 | ❌ | ✅ 41.1 | ❌ | ✅ 15 |
     *
     */
    chrome_url_overrides?: ChromeUrlOverrides;
    /**
     * Use the commands key to define one or more keyboard shortcuts for your extension.
     * @version 2 >=
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands
     */
    commands?: { [key: string]: Commands };
}

interface Action {
    /**
     * @deprecated Do not set browser_style to true: its support in Manifest V3 was removed in Firefox 118. See [Manifest V3 migration for browser_style](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ❌ | ❌ | ❌ 109 - 117 | ❌ | ❌ | ❌ | ❌ |
     *
     * @default false
     */
    browser_style?: boolean;
    /**
     * Defines the part of the browser in which the button is initially placed.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ❌ | ❌ | ✅ 109 | ❌ | ❌ | ❌ | ❌ |
     *
     * @default menupanel
     */
    default_area?: "navbar" | "menupanel" | "tabstrip" | "personaltoolbar";
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ 88※ | ⚠️ 88 | ✅ 109 | ✅ 74※ | ✅ 15.4※ | ✅ 109 | ✅ 15.4※ |
     *
     */
    default_icon?: { [key in number | string]: string };
    /**
     * The path to an HTML file containing the specification of the popup.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ 88 | ✅ 88 | ✅ 109 | ✅ 74 | ✅ 15.4 | ✅ 109 | ✅ 15.4 |
     *
     */
    default_popup?: string;
    /**
     * Tooltip for the button, displayed when the user moves their mouse over it. If the button is added to the browser's menu panel, this is also shown under the app icon.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ 88 | ✅ 88 | ✅ 109 | ✅ 74 | ✅ 15.4 | ✅ 109※ | ✅ 15.4 |
     *
     */
    default_title?: string;
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ 88 | ✅ 88 | ✅ 109 | ✅ 74 | ❌ | ❌ | ❌ |
     *
     */
    theme_icons?: object[];
}

interface Background {
    /**
     * If you need specific content in the background page, you can define a page using the page property.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes※ | ✅ 14 | ✅ 48 | ✅ yes※ | ✅ 14※ | ✅ 48 | ✅ 15※ |
     *
     */
    page?: string;
    /**
     * An Array of Strings, each of which is a path to a JavaScript source. The path is relative to the manifest.json file itself. These are the scripts that are executed in the extension's background page.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes※ | ✅ 14 | ✅ 48※ | ✅ yes※ | ✅ 14※ | ✅ 48※ | ✅ 15※ |
     *
     */
    scripts?: string[];
    /**
     * Specify a JavaScript file as the extension service worker. A service worker is a background script that acts as the extension's main event handler.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ 88※ | ✅ 88※ | ❌ | ✅ 74※ | ✅ 15.4※ | ❌ | ✅ 15.4※ |
     *
     */
    service_worker?: string;
    /**
     * If omitted, this property defaults to true in Manifest V2 and false in Manifest V3. Setting to true in Manifest V3 results in an error.
     * - `true` indicates the background page is to be kept in memory from when the extension is loaded or the browser starts until the extension is unloaded or disabled, or the browser is closed (that is, the background page is persistent).
     * - `false` indicates the background page may be unloaded from memory when idle and recreated when needed. Such background pages are often called Event Pages, because they are loaded into memory to allow the background page to handle the events to which it has added listeners. Registration of listeners is persistent when the page is unloaded from memory, but other values are not persistent. If you want to store data persistently in an event page, then you should use the [storage API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage).
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 14※ | ✅ 48※ | ✅ yes※ | ✅ 14.1※ | ✅ 48※ | ⚠️ 15.4 |
     *
     */
    persistent?: boolean;
    /**
     * Determines whether the scripts specified in "scripts" are loaded as ES modules.
     * - `classic` indicates the background scripts or service workers are not included as an ES Module.
     * - `module` indicates the background scripts or service workers are included as an ES Module. This enables the background page or service worker to import code.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ yes | ✅ 112 | ✅ yes | ✅ 16.4 | ✅ 112 | ✅ 16.4 |
     *
     * @default classic
     */
    type?: "classic" | "module";
}

interface BrowserSpecificSettings {
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ❌ | ❌ | ✅ 42※ | ❌ | ❌ | ✅ 42※ | ❌ |
     *
     */
    gecko?: Gecko;
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ 113※ | ❌ |
     *
     */
    gecko_android?: GeckoAndroid;
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ❌ | ❌ | ❌ | ❌ | ✅ 14※ | ❌ | ✅ 15※ |
     *
     */
    safari?: Safari;
}

interface Gecko {
    /** The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID. */
    id?: string;
    /** Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "※" is not valid in this field. */
    strict_min_version?: string;
    /** Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version. */
    strict_max_version?: string;
    /** A link to an extension update manifest. Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO). */
    update_url?: string;
}

interface GeckoAndroid {
    /** The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID. */
    id?: string;
    /** Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "※" is not valid in this field. */
    strict_min_version?: string;
    /** Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version. */
    strict_max_version?: string;
    /** A link to an extension update manifest. Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO). */
    update_url?: string;
}

interface Safari {
    /** The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID. */
    id?: string;
    /** Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "※" is not valid in this field. */
    strict_min_version?: string;
    /** Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version. */
    strict_max_version?: string;
    /** A link to an extension update manifest. Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO). */
    update_url?: string;
}

interface ChromeSettingsOverrides {
    /**
     * Defines the page to be used as the browser's homepage.
     * To override new tabs, use [chrome_url_overrides](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) instead.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    homepage?: string;
    /**
     * Defines a search provider to add to the browser.
     * The search provider has a name and a primary search URL. Alternative URLs may be provided, including URLs for more specialized searches like image search. In the URL you supply, use "{searchTerms}" to interpolate the search term into the URL, like: https://www.discogs.com/search/?q={searchTerms}. You can also provide POST parameters to be sent along with the search.
     * The search provider will be presented to the user alongside the built-in providers. If you include the is_default property and set it to true, the new search provider will be the default option. By supplying the keyword property, you enable the user to select your search provider by typing the keyword into the search/address bar before the search term.
     * This is an object with the properties listed below. All string properties are [localizable](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    search_provider?: SearchProvider;
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    startup_pages?: string[];
}

interface SearchProvider {
    /**
     * The search engine's name, displayed to the user.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    name: string;
    /**
     * URL used by the search engine. This must be an HTTPS URL.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    search_url: string;
    /**
     * True if the search engine should be the default choice. On Firefox, this is opt-in and the user will only be asked the first time the extension is installed. They will not be asked again if a search engine is added later.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 57※ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    is_default?: boolean;
    /**
     * An array of alternative URLs that can be used instead of search_url.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    alternate_urls?: string[];
    /**
     * Encoding of the search term, specified as a [standard character encoding name](https://www.iana.org/assignments/character-sets/character-sets.xhtml), such as "UTF-8".
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 65 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    encoding?: string;
    /**
     * URL pointing to an icon for the search engine. In Manifest V2, this must be an absolute HTTP or HTTPS URL. In Manifest V3, this must reference an icon provided in the extension as a path relative to the extension's root.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    favicon_url?: string;
    /**
     * URL used for image search.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    image_url?: string;
    /**
     * POST parameters to send to `image_url`.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    image_url_post_params?: string;
    /**
     * URL used for instant search.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    instant_url?: string;
    /**
     * POST parameters to send to instant_url.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    instant_url_post_params?: string;
    /**
     * Address bar keyword for the search engine.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 55 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    keyword?: string;
    /**
     * The ID of a built-in search engine to use.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    prepopulated_id?: string;
    /**
     * POST parameters to send to search_url.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 64 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    search_url_post_params?: string;
    /**
     * URL used for search suggestions. This must be an HTTPS URL.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 64 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    suggest_url?: string;
    /**
     * POST parameters to send to suggest_url.
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ✅ 64 | ❌ | ❌ | ❌ | ❌ |
     *
     */
    suggest_url_post_params?: string;
}

interface ChromeUrlOverrides {
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    bookmarks?: string;
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes | ✅ 79 | ❌ | ❌ | ❌ | ❌ | ❌ |
     *
     */
    history?: string;
    /**
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | ✅ yes※ | ✅ 79※ | ✅ 54※ | ❌ | ✅ 41.1※ | ❌ | ✅ 15※ |
     *
     */
    newtab?: string;
}

interface Commands {
    /** */
    suggested_key?: SuggestedKey;
    /** */
    description?: string;
}

interface SuggestedKey {
    /** */
    default?: string;
    /** */
    mac?: string;
    /** */
    linux?: string;
    /** */
    windows?: string;
    /** */
    chromeos?: string;
    /** */
    android?: string;
    /** */
    ios?: string;
}
