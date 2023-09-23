---
title: ColaAlist 的使用
order: 5
category:
  - Study
  - Tools
  - Dev
  - MD

---


![image-20230923200932142](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923200932142.png)

我们对 [ColaAlist ](http://8.130.21.128:5244/) 主页介绍的相关功能进行详细介绍

## 一、限速

参考  [使用 IDM 搭配 ColaAList 实现 DDDD](./dev_04.md)



## 二、快速定位文件

各部分元信息不是很全 TODO

## 三、在线视频播放

Alist 挂载的 百度网盘如果不替换 User-Agent 的话会存在视频加载不出来等情况 [Alist 对 添加-user-agent-使用示例 的说明](https://alist.nn.ci/zh/guide/drivers/baidu.html#%E6%B7%BB%E5%8A%A0-user-agent-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B) 为此我们可以通过浏览器插件 `user-agent-switcher` 来解决



![image-20230923203847147](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203847147.png)

### 3.1 插件下载及配置

- [Chrome 拓展](https://chrome.google.com/webstore/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg/related)
- [Edege 拓展](https://microsoftedge.microsoft.com/addons/detail/useragent-switcher-and-m/cnjkedgepfdpdbnepgmajmmjdjkjnifa)

![image-20230923203516132](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203516132.png)

![image-20230923203548084](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203548084.png)

修改 userAgent 为： `pan.baidu.com`

![image-20230923203606064](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203606064.png)

### 3.2 验证

纵享丝滑 ~ 🍫🍫

![image-20230923203751054](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203751054.png)

## 四、webDav 挂载

TODO


## 五、主流平台适配

### 5.1 Android 

Emmm 打包的网页 所以使用基本相同

- [下载 ColaAlist](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/apks/ColaAlist_V1.0.0.apk) 后安装

![image-20230923210924683](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923210924683.png)

![image-20230923210943340](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923210943340.png)
