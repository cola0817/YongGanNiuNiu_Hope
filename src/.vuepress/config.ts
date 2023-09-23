import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "勇敢牛牛",
      description: "A docs  for Cola",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "勇敢牛牛",
      description: "Cola NN",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
