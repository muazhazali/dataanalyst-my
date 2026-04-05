import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-MY",
  title: "dataanalyst.my",
  description: "Your go-to resource for data analytics in Malaysia",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["script", { defer: "", src: "https://umami.muaz.app/script.js", "data-website-id": "3cbd390c-34e8-4ebf-af9a-02780008809c" }],
    ["meta", { name: "keywords", content: "data analytics Malaysia, data analyst Malaysia, BI, SQL, Power BI, Tableau, data science Malaysia" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "dataanalyst.my" }],
    ["meta", { property: "og:title", content: "dataanalyst.my" }],
    ["meta", { property: "og:description", content: "Your go-to resource for data analytics in Malaysia" }],
    ["meta", { property: "og:url", content: "https://dataanalyst.my" }],
    ["meta", { property: "og:image", content: "https://dataanalyst.my/favicon.svg" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: "dataanalyst.my" }],
    ["meta", { name: "twitter:description", content: "Your go-to resource for data analytics in Malaysia" }],
    ["meta", { name: "twitter:image", content: "https://dataanalyst.my/favicon.svg" }],
  ],
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Resources", link: "/resources" },
      { text: "Communities", link: "/communities" },
      { text: "About", link: "/about" },
    ],
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
