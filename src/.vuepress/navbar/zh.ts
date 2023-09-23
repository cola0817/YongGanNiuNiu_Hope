import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    {
        text: "项目",
        icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/%E5%AD%A6%E4%B9%A0.svg",
        prefix: "/zh/Project/",
        children: [
            {
                text: "HelloWorld",
                icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/%E5%AD%A6%E6%A0%A1.svg",
                prefix: "HelloWorld/",
                children: ["SpringBoot2", "SpringBoot3", "Vue", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Skills",
                icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/%E5%85%B6%E5%AE%83%E6%B4%BB%E5%8A%A8.svg",
                prefix: "Skills/",
                children: ["Docker", "Java", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
    {
        text: "学习",
        icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/%E6%A1%88%E4%BE%8B.svg",
        prefix: "/zh/Study/",
        children: [
            {
                text: "Bilibili",
                icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/spring.svg",
                prefix: "Bilibili/",
                children: ["Itcast", "Itguigu", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "计算机科学与技术",
                icon: "https://jinzhong-0817-1311841992.cos.ap-nanjing.myqcloud.com/picgo/%E7%BD%91%E9%A1%B5.svg",
                prefix: "ScienceTechnology/",
                children: ["English", "Math", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
]);
