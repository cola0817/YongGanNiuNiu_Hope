import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "项目",
      icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/%E5%AD%A6%E4%B9%A0.svg",
      prefix: "Project/",
      link: "Project/",
      children: "structure",
    },
    {
      text: "学习",
      icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/%E6%A1%88%E4%BE%8B.svg",
      prefix: "Study/",
      link: "Study/",
      children: "structure"
    }
  ],
});
