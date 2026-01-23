---
title: Emacs 上手指南：从零开始配置 Python & C++ 开发环境
date: 2026-01-23 20:30:28
categories:
  - Programming
  - Tools
tags:
  - Emacs
  - Doom Emacs
  - Python
  - C++
  - Org-Mode
photos: [https://picsum.photos/800/600?random=3]
---

最近在上手 Emacs 作为 Python、C++ 的 IDE，同时也了解了下 Org-Mode，听说可以在文本中运行代码，故尝试下。下面是我近期用到的知识点总结。

<!-- more -->

## 1. 基础操作：文件的创建与删除

### 创建文件
在 Emacs 中，新建文件的过程其实就是打开一个不存在的文件，然后保存它。
1.  **打开文件**：
    *   原生 Emacs: `C-x C-f` (即 `find-file`)
    *   Doom Emacs: `SPC f f`
2.  **输入路径**：在 Minibuffer 中输入路径，例如 `/path/to/filename.txt`，按 Enter。
3.  **保存**：输入内容后，按 `C-x C-s` (即 `save-buffer`) 保存。此时状态栏的 `(New file)` 标记会消失。

### 删除文件
推荐使用 **Dired Mode** (Emacs 的文件管理器) 进行操作：
1.  **进入目录**：`M-x dired` (或 `SPC f d` in Doom)，选择目录。
2.  **标记删除**：移动光标到目标文件，按 `d` 标记。
3.  **执行删除**：按 `x` 确认删除。

---

## 2. 窗口管理与退出

### 分屏快捷键
| 快捷键 | 功能 |
| :--- | :--- |
| `C-x 3` | 左右分割窗口 |
| `C-x 2` | 上下分割窗口 |
| `C-x 1` | 只保留当前窗口 (最大化) |
| `C-x 0` | 关闭当前窗口 |

### 退出 Emacs
*   **快捷键**：`C-x C-c`
*   **命令**：`M-x save-buffers-kill-terminal`

---

## 3. 配置 C++ 开发环境 (Doom Emacs)

### 3.1 安装与模块启用
1.  确保已安装 **Doom Emacs**。
2.  编辑 `~/.doom.d/init.el`，取消以下注释启用模块：
    ```elisp
    :lang
    (cc +lsp) ; C/C++/Obj-C 支持
    ```

### 3.2 安装 Language Server (LSP)
推荐使用 **ccls** 或 **clangd**。
*   **Ubuntu/Debian**: `sudo apt-get install ccls`
*   **macOS**: `brew install ccls`

### 3.3 配置 LSP (可选)
在 `~/.doom.d/config.el` 中添加：
```elisp
(after! lsp-mode
  (setq lsp-enable-on-type-formatting nil)
  (setq lsp-clients-clangd-executable "ccls"))
```

### 3.4 运行 C++ 代码
*   **手动编译**：打开 `vterm` (终端)，输入 `g++ main.cpp -o main && ./main`。
*   **使用 Projectile**：如果项目有 Makefile，按 `SPC p c` (Compile project) 自动运行构建命令。

---

## 4. 配置 Python 开发环境 (Doom Emacs)

### 4.1 模块启用
在 `~/.doom.d/init.el` 中启用：
```elisp
:lang
(python +lsp)
```

### 4.2 安装 Language Server
推荐使用 **pyright** (Microsoft 出品，速度快)：
```bash
npm install -g pyright
```

### 4.3 自动格式化 (Black)
安装 Black 后，在 `~/.doom.d/config.el` 中配置：
```elisp
(after! python
  (set-formatter! 'python-mode #'black))
```

### 4.4 运行 Python 代码
*   **REPL 模式**：`M-x run-python` 打开交互式环境，选中代码按 `C-c C-c` 发送执行。
*   **终端模式**：`SPC o t` 打开终端，直接运行 `python main.py`。

---

## 5. Org-Mode：笔记与代码运行

Org-Mode 是 Emacs 的杀手级功能，支持笔记、GTD、文档导出及代码执行。

### 5.1 基础语法
*   **标题**：使用 `*` 表示层级。
    ```org
    * 一级标题
    ** 二级标题
    ```
*   **TODO 列表**：
    ```org
    * TODO 待办事项
    * DONE 已完成
    ```
    (快捷键 `C-c C-t` 切换状态)
*   **表格**：
    ```org
    | Name | Age |
    |------+-----|
    | Alice| 20  |
    ```

### 5.2 运行代码 (Literate Programming)
Org-Mode 支持在文档中直接运行代码块 (Org-Babel)。

1.  **配置**：在 `config.el` 中允许运行 Python：
    ```elisp
    (org-babel-do-load-languages
     'org-babel-load-languages
     '((python . t)))
    ```
2.  **插入代码块**：
    ```org
    #+BEGIN_SRC python
    print("Hello, Org-Mode!")
    #+END_SRC
    ```
3.  **执行**：光标置于代码块内，按 `C-c C-c`，结果会显示在下方：
    ```org
    #+RESULTS:
    : Hello, Org-Mode!
    ```

### 5.3 导出与预览
*   **导出**：`C-c C-e`，支持导出为 HTML、PDF、Markdown 等。
*   **LaTeX 预览**：`C-c C-x C-l` 可直接在文档中预览数学公式。
