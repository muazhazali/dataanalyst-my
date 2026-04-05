import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ms-MY",
  title: "dataanalyst.my",
  description: "Rujukan data analytics untuk Malaysia",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: "Bahasa Melayu",
      lang: "ms-MY",
      title: "dataanalyst.my",
      description: "Rujukan data analytics untuk Malaysia",
      themeConfig: {
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
        editLink: {
          pattern: "https://github.com/muazhazali/dataanalyst-my/edit/v1/docs/:path",
          text: "Cadangkan suntingan di GitHub",
        },
        docFooter: {
          prev: "Sebelumnya",
          next: "Seterusnya",
        },
        outline: {
          label: "Dalam halaman ini",
        },
        lastUpdated: {
          text: "Dikemas kini",
        },
        darkModeSwitchLabel: "Penampilan",
        lightModeSwitchTitle: "Tukar ke mod cerah",
        darkModeSwitchTitle: "Tukar ke mod gelap",
        returnToTopLabel: "Kembali ke atas",
        sidebarMenuLabel: "Menu",
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "dataanalyst.my",
      description: "Your go-to resource for data analytics in Malaysia",
      themeConfig: {
        nav: [
          { text: "Start Here", link: "/en/start-here" },
          { text: "Tools", link: "/en/tools/" },
          { text: "Tutorials", link: "/en/tutorial/" },
          { text: "Data Sources", link: "/en/data-sources/" },
          { text: "Career", link: "/en/career/" },
          { text: "Glossary", link: "/en/glossary/" },
          { text: "Cheatsheets", link: "/en/cheatsheets/" },
          { text: "Learning Paths", link: "/en/learning-paths/" },
          { text: "Community", link: "/en/community/" },
        ],
        sidebar: {
          "/en/tools/": [
            {
              text: "Tools",
              items: [
                { text: "Overview", link: "/en/tools/" },
                { text: "Python & pandas (Malay)", link: "/tools/python-pandas" },
                { text: "SQL (Malay)", link: "/tools/sql" },
                { text: "Power BI (Malay)", link: "/tools/power-bi" },
              ],
            },
          ],
          "/en/tutorial/": [
            {
              text: "Tutorials",
              items: [
                { text: "Overview", link: "/en/tutorial/" },
                { text: "Price Analysis (Malay)", link: "/tutorial/analisis-harga-barang-kpdn" },
                { text: "Population Visualization (Malay)", link: "/tutorial/visualisasi-penduduk-opendosm" },
              ],
            },
          ],
          "/en/data-sources/": [
            {
              text: "Data Sources",
              items: [
                { text: "Overview", link: "/en/data-sources/" },
                { text: "OpenDOSM API Quickstart (Malay)", link: "/data-sources/opendosm-api-quickstart" },
              ],
            },
          ],
          "/en/career/": [
            {
              text: "Career",
              items: [{ text: "Career Path in Malaysia", link: "/en/career/" }],
            },
          ],
          "/en/glossary/": [
            {
              text: "Glossary",
              items: [
                { text: "Overview", link: "/en/glossary/" },
                { text: "BM-English Terms (Malay page)", link: "/glossary/bm-en-terms" },
              ],
            },
          ],
          "/en/cheatsheets/": [
            {
              text: "Cheatsheets",
              items: [
                { text: "Overview", link: "/en/cheatsheets/" },
                { text: "SQL Quick Reference (Malay)", link: "/cheatsheets/sql-quick-reference" },
              ],
            },
          ],
          "/en/learning-paths/": [
            {
              text: "Learning Paths",
              items: [{ text: "Data Analyst Roadmap 2026 (Malay)", link: "/learning-paths/data-analyst-roadmap-2026" }],
            },
          ],
          "/en/community/": [
            {
              text: "Community",
              items: [{ text: "Overview", link: "/en/community/" }],
            },
          ],
        },
        editLink: {
          pattern: "https://github.com/muazhazali/dataanalyst-my/edit/v1/docs/:path",
          text: "Suggest an edit on GitHub",
        },
      },
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/muazhazali/dataanalyst-my" }],
    footer: {
      message: "Dari data mentah ke insight bermakna.",
      copyright: "Copyright © 2026 dataanalyst.my",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Cari",
                buttonAriaLabel: "Cari",
              },
              modal: {
                displayDetails: "Paparkan senarai terperinci",
                resetButtonTitle: "Tetapkan semula carian",
                backButtonTitle: "Tutup carian",
                noResultsText: "Tiada hasil ditemui",
                footer: {
                  selectText: "Pilih",
                  selectKeyAriaLabel: "enter",
                  navigateText: "Navigasi",
                  navigateUpKeyAriaLabel: "anak panah atas",
                  navigateDownKeyAriaLabel: "anak panah bawah",
                  closeText: "Tutup",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search",
              },
              modal: {
                noResultsText: "No results found",
              },
            },
          },
        },
      },
    },
  },
  sitemap: {
    hostname: "https://dataanalyst.my",
  },
});
