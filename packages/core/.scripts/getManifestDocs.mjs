import { JSDOM } from "jsdom";

async function getArticleContent(url) {
  const response = await fetch(url);
  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const article = document.querySelector("#content article");

  const rows = Array.from(article.querySelectorAll("tr"));
  const data = {};

  rows.forEach((row) => {
    const th = row.querySelector("th");
    const td = row.querySelector("td");

    if (th && td) {
      const key = th.textContent.trim();
      const value = td.textContent.trim();

      switch (key) {
        case "Type":
          data.type = value;
          break;
        case "Mandatory":
          data.mandatory = value;
          break;
        case "Manifest version":
          data.manifestVersion = value;
          break;
        case "Example":
          data.example = value;
          break;
      }
    }
  });

  data.description = article.querySelector(".section-content p").textContent;

  return data;
}

const keys = [
  "action",
  "author",
  "background",
  "browser_action",
  "browser_specific_settings",
  "chrome_settings_overrides",
  "chrome_url_overrides",
  "commands",
  "content_scripts",
  "content_security_policy",
  "declarative_net_request",
  "default_locale",
  "description",
  "developer",
  "devtools_page",
  "dictionaries",
  "externally_connectable",
  "homepage_url",
  "host_permissions",
  "icons",
  "incognito",
  "manifest_version",
  "name",
  "offline_enabled",
  "omnibox",
  "optional_permissions",
  "options_page",
  "options_ui",
  "page_action",
  "permissions",
  "protocol_handlers",
  "short_name",
  "sidebar_action",
  "storage",
  "theme",
  "theme_experiment",
  "user_scripts",
  "version",
  "version_name",
  "web_accessible_resources",
];

const base_url =
  "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/";

keys.forEach((key) => {
  getArticleContent(base_url + key)
    .then((articleContent) => console.log(key, articleContent))
    .catch((error) => console.error(key, error));
});
