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
      { text: "Home", link: "/" },
      { text: "Resources", link: "/resources" },
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
