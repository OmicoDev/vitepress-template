import { defineConfig } from "vitepress";

export const zh_Hans = defineConfig({
  lang: "zh-Hans",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "主页", link: "/zh-Hans" },
      { text: "示例", link: "/zh-Hans/markdown-examples" },
    ],
    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown 示例", link: "/zh-Hans/markdown-examples" },
          { text: "Runtime API 示例", link: "/zh-Hans/api-examples" },
        ],
      },
    ],
  },
});
