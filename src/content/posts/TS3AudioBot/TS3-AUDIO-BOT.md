---
title: 给你的语音服务器加点乐趣ฅ՞•ﻌ•՞ฅ — 部署 TS3 音乐机器人
description: 这里也能网抑云😵‍💫
published: 2026-02-16
image: https://raw.githubusercontent.com/gucrin/RyuChan-Pic/main/img/1.5889197846586983E9.jpeg
draft: false
tags:
  - 语音
  - BOT
category: 技术
---
# 引言
部署好了 TeamSpeak 服务器，本着折腾精神，同时也可以为服务器增添点乐趣，我找到了这个项目
::github{repo="ZHANGTIANYAO1/TS3AudioBot-NetEaseCloudmusic-plugin"}
这是 [TS3AudioBot](https://github.com/Splamy/TS3AudioBot) 的网易云插件版本，提供了对网易云音乐的支持，也就是说服务器内的成员可以点歌♫(/^^)/♫  :spoiler[只要网易有版权的话]

还需要部署这个项目 [NeteaseCloudMusicApi](https://www.npmjs.com/package/NeteaseCloudMusicApi) ，这是为了给机器人提供 API 支持，当然你也可以使用公用 API，但我更加推荐自建 API 服务*(・ω・)👉*

# 部署 API

> [!NOTE] NOTE
> 本文基于 Windows 平台撰写，实际部署时请注意操作系统差异！
### 环境依赖

**在开始部署 API 之前，您需要确保系统满足以下要求：**

- **Node.js >= 20**
- **pnpm >= 9**

### [安装 Node.js](https://docs-firefly.cuteleaf.cn/guide/get-started/#%E5%AE%89%E8%A3%85-node-js)

访问 [Node.js 官网](https://nodejs.org/) 下载并安装最新版本的 Node.js。建议使用 LTS 版本。

安装完成后，打开终端或命令提示符，运行以下命令验证 Node.js 是否安装成功：

```bash
node -v
npm -v
```

如果显示版本号，则表示安装成功。

### [安装 pnpm](https://docs-firefly.cuteleaf.cn/guide/get-started/#%E5%AE%89%E8%A3%85-pnpm)

如果您尚未安装 pnpm，可以通过 npm 安装：

```bash
npm install -g pnpm
```

安装完成后，打开终端或命令提示符，运行以下命令验证 pnpm 是否安装成功：

```bash
pnpm -v
```

如果显示版本号，则表示安装成功。

### 防火墙放行

在防火墙开放以下端口以便服务顺利运行

```bash
9987 UDP
30033 TCP
10011 TCP
41144 TCP
3000 TCP+UDP
58913 TCP
8000 TCP+UDP
```

### 部署
新建一个项目文件夹，然后在文件夹里打开 CMD，输入下方命令，开始安装

```Terminal window
npm i NeteaseCloudMusicApi
```

等待安装完成后，在文件夹里编写一个 .bat 脚本，方便后续启动 API 服务

```bat
npx NeteaseCloudMusicApi
```

运行一下 bat 文件，正常情况下应该可以看到如下输出：

```Terminal window
Services starts at localhost:3000
```

这样我们的网易云 API 就搭建好啦🎉

# 部署 Bot

> [!NOTE] NOTE
> 本文基于 Windows 平台撰写，实际部署时请注意操作系统差异！

::github{repo="ZHANGTIANYAO1/TS3AudioBot-NetEaseCloudmusic-plugin"}

点击项目卡片跳转到仓库页面，然后在 releases 页面按照说明下载对应文件，本文使用3.0.2测试版 - TS3AudioBot_WIN_64.zip 作为演示。

### 添加环境变量

要让 Bot 能够正常解析音频，还需为它添加 FFmpeg 的环境变量。

前往 [FFmpeg官网](https://www.ffmpeg.org/download.html) 下载
打开 Windows 设置 ＞ 系统 ＞ 关于此电脑 ＞ 高级系统设置 ＞ 环境变量
