type SupportBrowserKey =
  | "chrome"
  | "edge"
  | "firefox"
  | "opera"
  | "safari"
  | "firefoxForAndroid"
  | "safariOnIOS";

export type ManifestJSDoc =
  | {
      [key: string]: {
        type?: string | string[];
        version?: string;
        link?: string;
        default?: string;
        deprecated?: string;
        description?: string;
        support?: {
          [key in SupportBrowserKey]?:
            | "no"
            | string
            | { start: string; end: string };
        };
      };
    }
  | {
      [key: string]: ManifestJSDoc;
    };
