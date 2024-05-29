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
	 * The extension's author, intended for display in the browser's user interface
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
	 * A browser action is a button that your extension adds to the browser's toolbar. The button has an icon, and may optionally have a popup whose content is specified using HTML, CSS, and JavaScript.
	 * This key is replaced by `action` in Manifest V3 extensions.
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
	default_icon?: DefaultIcon;
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

interface DefaultIcon {
	/** */
	16?: string;
	/** */
	32?: string;
	/** */
	48?: string;
	/** */
	64?: string;
	/** */
	96?: string;
	/** */
	128?: string;
	/** */
	256?: string;
	/** */
	512?: string;
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
	gecko?: { id: string };
	/** */
	gecko_android?: GeckoAndroid;
	/** */
	safari?: Safari;
}

type GeckoAndroid = {};

type Safari = {};
