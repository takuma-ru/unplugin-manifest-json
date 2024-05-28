export interface Manifest {
    /**
     * @version 3 or higher
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | 88 | 79 | 63-117 | 75 | 14 | 79 | 14 |
     *
     */
    action: Manifest;
    /**
     * The extension's author, intended for display in the browser's user interface
     * @version 2 or higher
     * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | yes | 14 | 52 | yes | 14 | 52 | 15 |
     *
     */
    author: string;
}

interface Action {
    /**
     * @version
     * @link
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | no | no | 109-117 | no | no | no | no |
     *
     */
    browser_style: boolean;
    /**
     * Defines the part of the browser in which the button is initially placed.
     * @version
     * @link
     * @support
     * | Chrome | Edge | Firefox | Opera | Safari | FirefoxForAndroid | SafariOnIOS |
     * | -- | -- | -- | -- | -- | -- | -- |
     * | no | no | 109 | no | no | no | no |
     *
     */
    default_area: "navbar" | "menupanel" | "tabstrip" | "personaltoolbar";
}
