---
title: GitHub Search and Usage Guide
date: 2024-01-24
categories: 
  - Tools
tags: 
  - GitHub
  - Open Source
photos: 
---

**GitHub** 是全球最大的开源社区，也是全球最大的同性交友平台 (👻)。但是，大多数新手使用 GitHub 仅仅是通过他人分享的开源链接下载对应的项目，真正利用 GitHub 来搜索开源项目的人仍然比较少。

对于应聘者来说，面试时至少需要准备一些相关的项目经历，以展示自己的技术能力。如果应届生或转行者没有项目可言，仅仅依靠 Java、Python 等基础语言知识就很难脱颖而出。

通过 GitHub，可以非常方便地下载自己所需的项目，了解当前热门的开源项目。通过学习优秀开源项目的代码，可以更好地提升自己的编程技巧和知识储备。

因此，我建议面试者或开发者可以多利用 GitHub 这个宝贵的资源，通过参考他人的优秀代码，来丰富自己的项目经验，从而在面试中脱颖而出。GitHub 也是进阶成长的绝佳途径之一。下面我就来初步介绍下 GitHub，供大家掌握这宝库。

## Github 常用词含义

- **`watch`**：会持续收到项目的动态
- **`fork`**：复制某个项目到自己的仓库
- **`star`**：点赞数，表示对该项目表示认可，点赞数越多的项目一般越火
- **`clone`**：将项目下载到本地
- **`follow`**：关注你感兴趣的作者，会收到他们的动态

## GitHub 的高级搜索

**GitHub 有高级搜索功能，`search/advanced` 可以输入`关键字`、`代码库大小`、包含`作者`、`代码语`、`代码包含后缀文件名`等。**

### GitHub 搜索技巧 - 找开发者

| 搜索条件 | 备注 |
| --- | --- |
| `location:` | `location:china`，匹配用户填写的地址在 china |
| `language:` | `language:python`，匹配开发语言为 python 的开发者 |
| `followers:` | `followers:>=1000`，匹配拥有超过 1000 名关注者的开发者 |

### GitHub 搜索技巧 - 找项目

| 搜索条件 | 备注 |
| --- | --- |
| `Awesome` + 关键字 | 神奇的关键字 Awesome，帮助找到优秀的工具列表 |
| `stars:` | `stars:>=500`，匹配收藏数量超过 500 的项目 |
| `language:` | `language:python`，匹配以 python 作为开发语言的项目 |
| `forks:` | `forks:>=500`，匹配分支数量超过 500 的项目 |

### 精准搜索仓库标题、仓库描述、README

**`in` 关键词限制搜索范围**

1. `in:name xxx` 项目名包含 xxx
2. `in:description xx` 项目描述包含 xx
3. `in:readme xx` 搜索介绍文档包含 xx

比如我搜索**项目名里含有 julia 的**：`in:name julia`

### `stars` 或 `fork` 数量去查找

- **`stars:>xxx`**：**stars 数大于 xxx**
- **`stars:xx..xx`**：**stars 数在 xx…xx 之间**
- **`forks:>xxx`**：**forks 数大于 xxx**
- **`forks:xx..xx`**：**forks 数在 xx…xx 之间**

### 根据仓库是否在更新的搜索

- **`pushed:>YYYY-MM-DD`**：**最后上传日期大于 YYYY-MM-DD**
- **`created:>YYYY-MM-DD`**：**创建日期大于 YYYY-MM-DD**

### `awesome` 加强搜索

- awesome 系列一般是用来收集学习、工具、书籍类相关的项目

**比如搜索优秀的 `python` 相关的项目，包括框架、教程等**

- `awesome python`

### 根据仓库大小搜索

想找一些小型的项目进行个人学习和开发，不想找特别复杂的，这是可以使用 `size`

- `size:>= number` 【注意：100 代表 100Kb，单位为 Kb】

### 多个条件并列搜索 空格连接 🔗

例如：搜索爬虫，要求语言用 Python，收藏量大于 1000，更新时间在 2019 年 2 月之后的

- `in:description 爬虫 language:Python stars:>1000 pushed:>2021-02`

例如：搜索 Python 编程语言相关的仓库，这些仓库的 star 数量要大于 5000，fork 数量也要大于 5000

- `in:name python stars:>5000 forks:>5000`

### 热门搜索（GitHub Trend 和 GitHub Topic）

GitHub Trend 页面总结了每天/每周/每月周期的热门 Repositories 和 Developers，你可以看到在某个周期处于热门状态的开发项目和开发者。

### GitHub Explore 智能推荐

Explore 就是探索的意思，它会根据你的喜欢智能化地推荐一些项目。

## 如何让自己的项目在 GitHub 上加星

想要在 GitHub 上创建有价值的项目，或者通俗地讲 “**打造 GitHub 千星项目**” ，首先要创建一个你认为对别人有帮助的东西，找到自己的问题并解决它，也许别人也和你一样面临着同样的问题，专注于创造有价值的内容，流量只是附带的而已。

建议从以下几个方面入手：

- 选好项目
- 做好阅读和调研
- 建好项目仓库
- 写好 Readme
- 配上好图
- 注重反馈回路
- 社区交流是关键

最后提醒下，发现了别人的优质项目，不只是要去 star 它，最好 fork 到自己名下，去研究研究源码。
如果可以的话，可以尝试去解决几个 issue，提几个 pull Request，你也可以获得到一个贡献者的标志。

最后的最后，**给大家一份 github 指南**：[github-cheat-sheet](https://github.com/tiimgreen/github-cheat-sheet) 想深入了解的伙伴可以瞧瞧！
