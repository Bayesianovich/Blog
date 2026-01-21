---
title: 博客文章写作指南与模板 (Template)
date: 2026-01-21 14:00:00
categories:
  - 博客指南         # 一级分类：大类别
  - 写作教程         # 二级分类：子类别
tags:
  - Hexo            # 标签1：关键词
  - Markdown        # 标签2
  - Guide           # 标签3
photos:             # (可选) 文章封面图或顶部图库，取决于主题支持
  - https://picsum.photos/800/400?random=1
toc: true           # (可选) 是否显示右侧目录，true 为显示，false 为隐藏
---

这里是文章的**摘要部分**。
通常写一段简短的介绍，这段文字会显示在首页的列表中。
吸引读者点击进来看全文。

<!-- more -->

# 正文开始 (一级标题通常不需要，因为页面顶端已有文章标题)

## 1. 标题的使用 (二级标题)
文章正文通常从二级标题 (`##`) 开始结构化内容。

### 1.1 三级标题
用于更细分的章节。

## 2. 文本样式
- **加粗文本**：用于强调重点。
- *斜体文本*：用于次要强调或专有名词。
- `行内代码`：用于标记简短的命令、变量名或快捷键，例如 `npm run server`。
- [链接文本](https://google.com)：插入外部链接。

## 3. 列表的使用

**无序列表 (用于并列项):**
*   第一点
*   第二点
    *   子项 A
    *   子项 B

**有序列表 (用于步骤):**
1.  第一步：打开终端
2.  第二步：输入命令
3.  第三步：回车执行

## 4. 引用块
> 这是一个引用块，通常用于引用他人的话，或者作为提示信息 (Note/Tip)。
>
> 可以多行书写。

## 5. 代码块 (非常重要)
写技术博客时，代码块必不可少。请指明语言以启用高亮：

```javascript
// 这是一个 JavaScript 代码示例
function helloWorld() {
  console.log("Hello, Hexo!");
}
```

```python
# 这是一个 Python 代码示例
def add(a, b):
    return a + b
```

## 6. 图片插入
你可以使用标准 Markdown 语法插入图片。
如果开启了资源文件夹功能，可以直接引用同名文件夹下的图片。

![图片描述](https://picsum.photos/600/300?random=2)

## 7. 任务列表 (可选)
- [x] 已完成的任务
- [ ] 待办事项 A
- [ ] 待办事项 B

## 8. 媒体嵌入与链接

### 8.1 嵌入 Bilibili 视频
由于没有安装额外插件，我们推荐使用 B 站提供的原生 `iframe` 代码。
**操作步骤**：
1. 在 B 站视频下方点击“分享”。
2. 复制“嵌入代码”。
3. 直接粘贴到 Markdown 文件中即可。

示例效果：
<iframe src="//player.bilibili.com/player.html?bvid=BV1GJ411x7h7&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="400"> </iframe>

### 8.2 图片链接 (点击图片跳转)
如果你希望图片可以点击并跳转到其他网页（或者是查看大图），可以使用“链接包裹图片”的语法：

```markdown
[![图片描述](图片地址)](跳转链接地址)
```

**示例 (点击下图跳转到 Google)：**
[![点击我跳转](https://picsum.photos/600/200?random=3)](https://google.com)

### 8.3 嵌入 YouTube 视频
同样使用 YouTube 提供的 `iframe` 代码：
1. 点击视频下方的 "Share" (分享)。
2. 选择 "Embed" (嵌入)。
3. 复制 HTML 代码并粘贴。

示例：
<iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 8.4 嵌入普通网页
你可以使用 `iframe` 标签嵌入任何允许被嵌入的网页（注意：部分网站如 GitHub、知乎等可能会通过 HTTP 头安全策略禁止被嵌入）。

语法：
```html
<iframe src="https://example.com" width="100%" height="500px" style="border:none;"></iframe>
```

---

## 结语
这里是文章的结尾。
可以引导读者评论或查看相关文章。
