# 个人博客维护指南 (Hexo + Vercel)

这份指南将帮助你从零开始管理你的博客，包括新建文章、插入多媒体内容以及发布上线。

## 1. 日常写作流程

### 第一步：新建文章
在博客根目录下打开终端，运行以下命令：
```bash
npx hexo new "文章标题"
```
*这会在 `source/_posts/` 目录下生成一个 `文章标题.md` 文件和一个同名的资源文件夹（用于存放该文章的图片）。*

### 第二步：编写内容
使用你喜欢的 Markdown 编辑器（如 VS Code, Obsidian, Typora）打开生成的 `.md` 文件。

**文章头部配置 (Front-matter) 示例：**
```yaml
---
title: 我的新文章
date: 2026-01-18 12:00:00
tags: 
  - 生活
  - 编程
categories: 
  - 随笔
photos:
  - /images/cover.jpg  # 封面图 (可选, 放在 source/images/ 下)
---
```

### 第三步：插入图片和视频

**插入图片：**
1. 将图片（如 `demo.png`）放入文章同名的文件夹中（例如 `source/_posts/文章标题/`）。
2. 在 Markdown 中引用：
   ```markdown
   {% asset_img demo.png 图片描述 %}
   ```

**插入 Bilibili 视频：**
直接粘贴 iframe 代码：
```html
<iframe src="//player.bilibili.com/player.html?bvid=BV1xxxxxx" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500"> </iframe>
```

**插入 YouTube 视频：**
```html
<iframe width="100%" height="500" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

## 2. 本地预览

写完后，在发布前先在本地查看效果：

```bash
npx hexo server
```
然后在浏览器访问：`http://localhost:4000`

## 3. 发布上线 (GitHub + Vercel)

推荐使用 **Vercel** 托管，它能自动从 **GitHub** 拉取代码并构建发布。

### 首次配置 (只需做一次)

1.  **创建 GitHub 仓库**：
    *   登录 [GitHub](https://github.com)，创建一个新仓库（例如 `my-blog`）。
2.  **推送代码**：
    在博客根目录运行：
    ```bash
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/你的用户名/my-blog.git
    git push -u origin main
    ```
3.  **配置 Vercel**：
    *   登录 [Vercel](https://vercel.com)。
    *   点击 "Add New..." -> "Project"。
    *   选择 "Import" 你的 GitHub 仓库 (`my-blog`)。
    *   **Framework Preset** 选择 `Hexo`。
    *   点击 "Deploy"。

### 日常发布 (每次写完文章后)

只需将更改推送到 GitHub，Vercel 会自动检测并更新网站：

```bash
git add .
git commit -m "新增文章: 文章标题"
git push
```
*等待 1-2 分钟，你的博客就会自动更新了！*

## 4. 常用命令速查

| 命令 | 作用 |
| :--- | :--- |
| `npx hexo new "Title"` | 新建文章 |
| `npx hexo server` | 启动本地预览服务器 |
| `npx hexo clean` | 清理缓存（遇到显示异常时使用） |
| `npx hexo generate` | 生成静态文件（Vercel 会自动执行，本地通常不需要） |

## 5. 个性化设置

*   **修改网站标题/作者**：编辑根目录下的 `_config.yml`。
*   **修改菜单/导航**：编辑 `themes/manjusaka/_config.yml` (如果存在) 或查看主题代码。
*   **添加标签图标**：在 `_config.yml` 中的 `tag_icons` 部分添加配置。
