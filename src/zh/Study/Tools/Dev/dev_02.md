---
title: IDEA 等工具中常用插件及破解
order: 2
category:
  - Study
  - Tools
  - Dev
  - MD
---

## 一、常用插件

### 1.1 Atom Material Icons

美化你的 IDEA 包括：

- 额外的 icon 图标
- 文件夹高亮
- 框架适配如（Spring 中的 Bean 导航图标等）Emm 个人感觉还是 IDEA 原装的好 😁

![image-20230923190628328](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923190628328.png)

### 1.2 Chinese Language Package

中文语言支持包（汉化 ~）

![image-20230923190713588](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923190713588.png)

### 1.3 CodeGlance Pro

提供代码缩略图，减少鼠标滚动 🤣

![image-20230923191013037](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191013037.png)

### 1.4 Gitee

让你的 IDEA 支持 Gitee

![image-20230923191035979](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191035979.png)

### 1.5 GitToolBox

提供更方便的 git 信息提示

![image-20230923191106022](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191106022.png)

![image-20230923191130284](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191130284.png)

### 1.6 Jrebel and XRebel

SpringBoot 项目热启动 (Emmm 好像 devtools 也可以实现 🤩)

![image-20230923191214277](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191214277.png)

![image-20230923191228238](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191228238.png)

![image-20230923192235989](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192235989.png)



### 1.7 Rainbow Brackets

彩虹括号

![image-20230923192258240](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192258240.png)

![image-20230923192327617](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192327617.png)

### 1.8 Rainbow CSV

让你的 csv 变色

![image-20230923192412855](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192412855.png)

### 1.9 Restful Fast Request

快速调试 api Very Nice (专出一篇文章介绍吧)

![image-20230923192435362](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192435362.png)



### 1.10 MyBatisX

提供 xxxMapper 至 xxxMapper.xml 的快速导航

![image-20230923192752496](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192752496.png)

### 1.11 Nvan Progress Bar

彩虹 🌈 加载框



![image-20230923192853896](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192853896.png)

### 1.12 JBLJavaToWeb

快速将普通 maven 转换为 web 项目

![image-20230923192950902](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192950902.png)

选中需要转换的模块文件夹后右键选择 JBLJavaToWeb

![image-20230923193034353](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923193034353.png)

## 二、破解

插件的 github 链接好像被封了 🤥 可以参照说明使用：

![image-20230923190352257](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923190352257.png)



### 2.1 一般插件破解
1. [点击下载相关插件](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/tools/LicenseServer-obfuscate-2.0.0.zip)

![image-20230923185945079](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923185945079.png)

2. 打开 IDEA 的 插件市场
3. 通过磁盘安装插件

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185134.png)

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185226.png)

4. 进行插件配置

挨个点击并定位至  *.vmproperties 中 -javaagent 所指向的位置

![image-20230923191929144](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191929144.png)

![image-20230923191942469](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191942469.png)

验证

![image-20230923192147785](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192147785.png)

配置元信息

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185322.png)

```xml
{
    "licenseId": "D02JT2S8T0",
    "licenseeName": "授权对象名称（自定义）",
    "assigneeName": "",
    "assigneeEmail": "",
    "licenseRestriction": "",
    "checkConcurrentUse": false,
    "products": [
        {
            "code": "II",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PFASTREQUEST",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PCWMP",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PRAINBOWBRACKET",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PGITTOOLBOX",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "AC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DPN",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RSC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RSF",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "GO",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DM",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "CL",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RS0",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RD",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RSV",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RSU",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RM",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "WS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DB",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PDB",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PWS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PGO",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PPS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PPC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PRB",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PSW",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PSI",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PCWMP",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "DP",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PELASTICSEARCH",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PBASHSUPPORTPRO",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PMYBATISHELPER",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PCMAKEPLUS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PEXTRAICONS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        }
    ],
    "metadata": "0120211231PSAN000005",
    "hash": "15021354/0:-1251114717",
    "gracePeriodDays": 7,
    "isAutoProlongated": false
}
```

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185438.png)

5. 激活

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185527.png)
### 2.2 Jrebel and XRebel

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185815.png)

根据提示步骤激活即可

![image-20230923185857667](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923185857667.png)
