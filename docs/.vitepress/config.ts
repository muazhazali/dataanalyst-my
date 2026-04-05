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
      { text: "Alatan", link: "/tools/" },
      { text: "Tutorial", link: "/tutorial/" },
      { text: "Sumber Data", link: "/data-sources/" },
      { text: "Kerjaya", link: "/career/" },
      { text: "Glosari", link: "/glossary/" },
      { text: "Cheatsheet", link: "/cheatsheets/" },
      { text: "Laluan Pembelajaran", link: "/learning-paths/" },
      { text: "Komuniti", link: "/community/" },
    ],
    sidebar: {
      "/tools/": [
        {
          text: "Alatan",
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
              text: "Analisis Harga Barang (data.gov.my)",
              link: "/tutorial/analisis-harga-barang-kpdn",
            },
            {
              text: "Visualisasi Penduduk Malaysia (OpenDOSM API)",
              link: "/tutorial/visualisasi-penduduk-opendosm",
            },
          ],
        },
      ],
      "/data-sources/": [
        {
          text: "Sumber Data",
          items: [
            { text: "Overview", link: "/data-sources/" },
            { text: "OpenDOSM API Quickstart", link: "/data-sources/opendosm-api-quickstart" },
          ],
        },
      ],
      "/career/": [
        {
          text: "Kerjaya",
          items: [{ text: "Career Path in Malaysia", link: "/career/" }],
        },
      ],
      "/glossary/": [
        {
          text: "Glosari",
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
          text: "Laluan Pembelajaran",
          items: [{ text: "Data Analyst Roadmap 2026", link: "/learning-paths/data-analyst-roadmap-2026" }],
        },
      ],
      "/community/": [
        {
          text: "Komuniti",
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
      message: "Dari data mentah ke insight bermakna.",
      copyright: "Copyright © 2026 dataanalyst.my",
    },
  },
  sitemap: {
    hostname: "https://dataanalyst.my",
  },
});
