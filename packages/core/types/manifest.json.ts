/**
 *
 */
interface Manifest {
  /**
   * @link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
   *
   * @support
   * | Chrome | Edge | Firefox | Opera | Safari | Firefox for Android | Safari on iOS |
   * |--------|------|---------|-------|--------|---------------------|--------------|
   * | 88     | 79   | 63      | 75    | 14     | 79                  | 14           |
   */
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: any;
}
