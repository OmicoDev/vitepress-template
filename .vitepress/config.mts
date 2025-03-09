import { defineConfig } from "vitepress";
import { en_US } from "./locales/en-US";
import { zh_Hans } from "./locales/zh-Hans";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-template/", // Remove if we use custom domain
  srcDir: "docs",
  title: "My Awesome Project",
  description: "A VitePress Site",
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: { label: "English", ...en_US },
    "zh-Hans": { label: "简体中文", ...zh_Hans },
  },
  rewrites: {
    "en-US/:rest*": ":rest*",
  },
  sitemap: {
    hostname: "https://omicodev.github.io/vitepress-template",
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/OmicoDev" }],
  },
});
