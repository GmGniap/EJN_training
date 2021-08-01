export default {
  "title": "Data Journalism Training Curriculum",
  "tagline": "by EJN-Thibi Team",
  "url": "https://gmgniap.github.io",
  "baseUrl": "/EJN_training/",
  "favicon": "images/data.svg",
  "organizationName": "gmgniap",
  "projectName": "EJN Training",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "EJN Training",
      "logo": {
        "alt": "Site Logo",
        "src": "images/data.svg"
      },
      "items": [
        {
          "to": "docs/01-Introduction",
          "label": "Curriculum",
          "position": "left"
        },
        {
          "href": "https://earthjournalism.net/projects/data-journalism-initiative",
          "label": "Earth Journalism Network",
          "position": "right"
        },
        {
          "href": "https://thibi.co/",
          "label": "Thibi Website",
          "position": "right"
        },
        {
          "href": "https://github.com/GmGniap/EJN_training",
          "label": "Source Code",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "links": [],
      "copyright": "Copyright © 2021 EJN. Built by Thet Paing with Docusaurus."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "D:\\Thibi\\EJN_training\\sidebars.js"
        },
        "theme": {
          "customCss": "D:\\Thibi\\EJN_training\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};