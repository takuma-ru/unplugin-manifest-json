import type { ManifestJSDoc } from "./types";

export const manifestJSDoc: ManifestJSDoc = {
  action: {
    type: "object",
    version: "3 or higher",
    link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action",
    support: {
      chrome: "88",
      edge: "79",
      firefox: {
        start: "63",
        end: "117",
      },
      opera: "75",
      safari: "14",
      firefoxForAndroid: "79",
      safariOnIOS: "14",
    },
    browser_style: {
      type: "boolean",
      default: "false",
      deprecated:
        "Do not set browser_style to true: its support in Manifest V3 was removed in Firefox 118. See [Manifest V3 migration for browser_style](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).",
      support: {
        chrome: "no",
        edge: "no",
        firefox: {
          start: "109",
          end: "117",
        },
        opera: "no",
        safari: "no",
        firefoxForAndroid: "no",
        safariOnIOS: "no",
      },
    },
  },
  author: {
    type: "string",
    version: "2 or higher",
    description:
      "The extension's author, intended for display in the browser's user interface",
    link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author",
    support: {
      chrome: "Yes",
      edge: "14",
      firefox: "52",
      opera: "Yes",
      safari: "14",
      firefoxForAndroid: "52",
      safariOnIOS: "15",
    },
  },
};
