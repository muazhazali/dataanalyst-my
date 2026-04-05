import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-MY",
  title: "dataanalyst.my",
  description: "Your go-to resource for data analytics in Malaysia",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Start Here", link: "/start-here" },
      { text: "Tools", link: "/tools/" },
      { text: "Tutorial", link: "/tutorial/" },
      { text: "Data Sources", link: "/data-sources/" },
      { text: "Career", link: "/career/" },
      { text: "Glossary", link: "/glossary/" },
      { text: "Cheatsheet", link: "/cheatsheets/" },
      { text: "Learning Paths", link: "/learning-paths/" },
      { text: "Community", link: "/community/" },
    ],
    sidebar: {
      "/tools/": [
        {
          text: "Tools",
          items: [
            { text: "Overview", link: "/tools/" },
            { text: "Python & pandas", link: "/tools/python-pandas" },
            { text: "SQL", link: "/tools/sql" },
            { text: "Power BI", link: "/tools/power-bi" },
          ],
        },
      ],
      "/tutorial/": [
        {
          text: "Tutorial",
          items: [
            { text: "Overview", link: "/tutorial/" },
            {
              text: "Goods Price Analysis (data.gov.my)",
              link: "/tutorial/analisis-harga-barang-kpdn",
            },
            {
              text: "Malaysia Population Visualization (OpenDOSM API)",
              link: "/tutorial/visualisasi-penduduk-opendosm",
            },
          ],
        },
      ],
      "/data-sources/": [
        {
          text: "Data Sources",
          items: [
            { text: "Overview", link: "/data-sources/" },
            { text: "OpenDOSM API Quickstart", link: "/data-sources/opendosm-api-quickstart" },
          ],
        },
      ],
      "/career/": [
        {
          text: "Career",
          items: [{ text: "Career Path in Malaysia", link: "/career/" }],
        },
      ],
      "/glossary/": [
        {
          text: "Glossary",
          items: [
            { text: "Overview", link: "/glossary/" },
            { text: "BM-English Terms", link: "/glossary/bm-en-terms" },
          ],
        },
      ],
      "/cheatsheets/": [
        {
          text: "Cheatsheet",
          items: [
            { text: "Overview", link: "/cheatsheets/" },
            { text: "SQL Quick Reference", link: "/cheatsheets/sql-quick-reference" },
          ],
        },
      ],
      "/learning-paths/": [
        {
          text: "Learning Paths",
          items: [{ text: "Data Analyst Roadmap 2026", link: "/learning-paths/data-analyst-roadmap-2026" }],
        },
      ],
      "/community/": [
        {
          text: "Community",
          items: [{ text: "Overview", link: "/community/" }],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/muazhazali/dataanalyst-my" }],
    editLink: {
      pattern: "https://github.com/muazhazali/dataanalyst-my/edit/v1/docs/:path",
      text: "Suggest an edit on GitHub",
    },
    footer: {
      message: "From raw data to meaningful insights.",
      copyright: `Copyright © ${new Date().getFullYear()} dataanalyst.my`,
    },
  },
  sitemap: {
    hostname: "https://dataanalyst.my",
  },
});
