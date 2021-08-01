const path = require("path");

module.exports = {
  title: "Data Journalism Training Curriculum",
  tagline: "by EJN-Thibi Team",
  url: "https://gmgniap.github.io",
  baseUrl: "/EJN_training/", // path where website is available
  favicon: "images/data.svg",
  organizationName: "gmgniap", // GitHub org/user name.
  projectName: "EJN Training", // project name i.e repo name of project
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "EJN Training",
      logo: {
        alt: "Site Logo",
        src: "images/data.svg", // path with respect to static dir
      },
      items: [
        {
          to: "docs/01-Introduction",
          label: "Curriculum",
          position: "left",
        },
        {
          href: "https://earthjournalism.net/projects/data-journalism-initiative",
          label: "Earth Journalism Network",
          position: "right",
        },
        {
          href: "https://thibi.co/",
          label: "Thibi Website",
          position: "right",
        },
        {
          href: "https://github.com/GmGniap/EJN_training",
          label: "Source Code",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} EJN. Built by Thet Paing with Docusaurus.`,
    },
    // prism: {
    //   additionalLanguages: ["powerquery", "dax"],
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  // plugins: [require.resolve("docusaurus-lunr-search")], //goes in packlage.json//"docusaurus-lunr-search": "^2.1.10",
};
