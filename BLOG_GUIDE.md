# 个人博客维护指南 (Hexo + Vercel)

这份指南将帮助你管理博客内容，包括发布常规博客、周报和算法题解。

## 1. 文章类型与写作规范

你的博客主要包含三种类型的文章，每种类型对应不同的分类结构和显示位置。

### 类型一：常规博客 (Blog Post)
**显示位置**：首页文章流、归档页
**适用内容**：技术杂谈、生活随笔、读书笔记等

**操作步骤**：
1. 运行命令：`npx hexo new "文章标题"`
2. 编辑 Front-matter：
```yaml
---
title: 我的新文章
date: 2026-01-18 12:00:00
categories: 
  - Life  # 或者 Programming, Notes, Thoughts 等顶级分类
tags: 
  - Hexo
  - 教程
photos:
  - cover.jpg # 使用本地图片，见下方说明
---
```

---

### 类型二：周报 (Weekly Report)
**显示位置**：顶部导航 "周报" -> 年份 -> 月份
**适用内容**：每周总结、计划回顾
**注意**：周报**不会**显示在首页文章流中。

**操作步骤**：
1. 运行命令：`npx hexo new "2025年1月第X周周报"`
2. 编辑 Front-matter（**必须严格按照层级写 categories**）：
```yaml
---
title: 2025年1月第1周周报
date: 2025-01-05 12:00:00
categories:
  - Weekly  # 第一级：必须是 Weekly
  - 2025    # 第二级：年份
  - 01      # 第三级：月份 (可选)
tags:
  - Weekly
  - Life
photos:
  - https://images.unsplash.com/photo-xxx.jpg
---
```

---

### 类型三：算法刷题 (LeetCode Solution)
**显示位置**：顶部导航 "刷题" -> 算法类型
**适用内容**：LeetCode 题解、算法笔记
**注意**：刷题文章**不会**显示在首页文章流中。

**操作步骤**：
1. 运行命令：`npx hexo new "LeetCode-1-两数之和"`
2. 编辑 Front-matter（**必须严格按照层级写 categories**）：
```yaml
---
title: 两数之和 (Two Sum)
date: 2025-02-18 10:00:00
categories:
  - LeetCode            # 第一级：必须是 LeetCode
  - Dynamic Programming # 第二级：算法类型 (如 Greedy, DFS, BFS 等)
tags:
  - Easy    # 难度
  - Array   # 知识点
photos:
  - https://images.unsplash.com/photo-xxx.jpg
---
```

## 2. 常用操作

### 插入图片 (正文)
1. 将图片（如 `demo.png`）放入 `source/_posts/文章标题/` 文件夹中。
2. 在 Markdown 中引用：
   ```markdown
   {% asset_img demo.png 图片描述 %}
   ```

### 插入视频
**Bilibili:**
```html
<iframe src="//player.bilibili.com/player.html?bvid=BV1xxxxxx" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500"> </iframe>
```

**YouTube:**
```html
<iframe width="100%" height="500" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

## 3. 预览与发布

**本地预览：**
```bash
npx hexo server
```
访问：`http://localhost:4000`

**发布上线：**
```bash
git add .
git commit -m "更新文章"
git push
```
*Vercel 会自动检测更新并重新部署。*

## 4. 目录结构说明

*   `source/_posts/`: 存放所有 Markdown 文章
*   `themes/manjusaka/`: 主题文件夹 (修改样式和布局在这里)
*   `_config.yml`: 网站全局配置 (修改标题、作者、SEO等)
*   `themes/manjusaka/_config.yml`: 主题配置 (修改菜单、图标映射、社交链接等)

## 5. 图标与图片管理

### 添加新标签/分类图标
如果你使用了新的 Tag 或 Category，想给它配个图标：

1. 打开 `themes/manjusaka/_config.yml` 文件。
2. 找到 `tag_icons` 或 `category_icons` 区域。
3. 去 [FontAwesome](https://fontawesome.com/icons) 搜索你想要的图标代码（例如 `fas fa-book`）。
4. 按格式添加：
   ```yaml
   tag_icons:
     NewTag: fas fa-book  # 标签名: 图标代码
   
   category_icons:
     NewCategory: fas fa-folder
   ```

### 使用本地图片作为封面/Banner
如果你不想用网络图片，想用本地图片做封面：

1. 确保在 `_config.yml` 中已开启 `post_asset_folder: true` (已开启)。
2. 在新建文章时，Hexo 会自动创建一个同名文件夹（例如 `source/_posts/我的文章/`）。
3. 把你的图片（如 `cover.jpg`）放进这个文件夹。
4. 在文章的 Front-matter 中这样写：
   ```yaml
   photos:
     - cover.jpg  # 直接写文件名即可，不需要路径
   ```
   *注意：如果在首页看不到图片，尝试写成 `我的文章/cover.jpg` 或检查主题是否支持相对路径引用。*

## 6. 分类显示规则 (Categories)

网页侧边栏的 **Categories** 列表，以及首页文章流是否显示某些分类，都是由主题配置控制的：

### 6.1 侧边栏显示哪些分类
编辑 `themes/manjusaka/_config.yml` 中的 `category_display.sidebar`：
```yaml
category_display:
  sidebar:
    include:
      - Weekly
      - LeetCode
      - Life
    exclude:
      - 2025
      - 01
```
说明：
- `include`：只显示这里列出的分类（留空则显示全部）。
- `exclude`：强制隐藏这里列出的分类。

### 6.2 首页隐藏哪些分类
同样在 `themes/manjusaka/_config.yml` 中设置：
```yaml
category_display:
  homepage_hide:
    - Weekly
    - LeetCode
```
这些分类下的文章不会出现在首页文章流中，但依然会在分类页中出现。

## 7. Obsidian 同步工作流 (推荐)

如果你习惯使用 **Obsidian** 进行写作，我们提供了一个自动化脚本，可以将 Obsidian 仓库中的文章一键同步到博客。

### 配置说明
脚本文件位于：`scripts/sync.js`

1.  **设置源路径**：
    打开 `scripts/sync.js`，修改 `OBSIDIAN_VAULT_PATH` 变量：
    ```javascript
    // 示例：指向你的 Obsidian 仓库中的 posts 目录
    const OBSIDIAN_VAULT_PATH = path.resolve(process.cwd(), '../obsidian-vault/posts');
    ```

### 使用流程
1.  **在 Obsidian 中写作**：创建或修改 Markdown 文件。
2.  **执行同步**：
    在博客项目根目录下运行：
    ```bash
    npm run sync
    ```
    *脚本会将 Obsidian 指定目录下的所有 `.md` 文件覆盖复制到 `source/_posts`。*
3.  **预览或发布**：
    *   预览：`npm run server`
    *   发布：`git push`
