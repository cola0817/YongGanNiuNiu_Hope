---
title: 在 CentOS7  中安装 docker
order: 2
category:
  - Project
  - Skills
  - Docker
  - MD
---


## 1.1 前置环境的安装

> 使用 `cat /etc/redhat-release` 查看当前系统内核是否满足条件
>
> 目前，CentOS 仅发行版本中的内核支持 Docker。Docker 运行在CentOS 7 (64-bit)上，
>
> 要求系统为64位、Linux系统内核版本为 3.8以上，这里选用Centos7.x

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085202.png)

1. 安装 `sudo yum install -y yum-utils`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085210.png)

2. 安装 `yum -y install gcc`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085219.png)

3. 安装 `yum -y install gcc-c++`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085229.png)

## 1.2 设置stable镜像仓库

```shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085251.png)


1. 刷新 `yum makecache fast`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085311.png)

## 1.3 安装 docker CE

1. 安装 `yum -y install docker-ce docker-ce-cli containerd.io`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085319.png)

## 1.4 验证 docker

1. 启动 `systemctl start docker`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085335.png)

2. 此处我们可以将 docker 设置为开机自启 `systemctl enable docker`

3. 测试 `docker version`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085354.png)

4. HelloDocker `docker run hello-world`

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085406.png)

## 1.5 配置阿里云镜像加速

> 配置阿里云镜像加速 [容器镜像服务 (aliyun.com)](https://cr.console.aliyun.com/cn-shanghai/instances/mirrors)

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085419.png)

1. 回退 `cd ~`

2. 执行脚本 ==此处需要申请自己的加速地址==

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["xxx"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

![](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085440.png)
