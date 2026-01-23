---
title: How to Read Source Code
date: 2023-10-25
categories: 
  - Programming
tags: 
  - Coding
  - Learning
photos: 
---

阅读源代码是程序员的一项重要技能。它能让我们向他人学习，了解不同的编程语言、算法和框架。通过阅读代码，我们可以站在巨人的肩膀上，解决棘手的问题，并拓展我们的局限性。阅读代码时，拥有合适的工具非常重要，例如一个好的编辑器和版本控制知识。此外，结合上下文阅读代码、与代码互动、理解数据结构之间的关系、考虑模块依赖关系和边界、使用测试用例以及回顾所学知识也很有帮助。

本文的主要目的: 解释为什么我们需要阅读源代码，如何阅读代码并从源代码中学习更多知识。

## Foreword

上周，我在与一位比我年轻的程序员交谈时，他问我：

**"如何读取代码？"**

我们讨论了一段时间，我介绍了几种更高效地阅读源代码的方法。

"你应该就此写一篇文章，"他建议道。

"这对初学者很有帮助。这不是从书本或教程中能学到的东西"。

So here we go. 这就是我从源代码中学习的技巧。

## Why we need to read code

作为程序员，我们每天都要与源代码打交道。经过多年的学习，大多数程序员都能 "编写 "代码，或者至少能复制和修改代码。

不过，我们教授编程的方式强调的是编写代码的艺术，而不是如何阅读代码。When I say “read code” I refer to the practice of **reading source code on purpose**.

众所周知，编程和写作有很多共同之处。Donald Knuth even introduced the programming paradigm of [Literate programming](https://en.wikipedia.org/wiki/Literate_programming). Coding and writing both have the same common ideal, to [learn all programming languages](https://www.coderscat.com/how-to-learn-all-pl).

还记得你在学校是如何学习写作的吗？我们的写作能力来自于从小学开始的大量阅读。多年来，我们阅读了不同难度的伟大作家的作品，并练习了各种写作技巧。

> 📌 “If you don’t have time to read, you don’t have the time (or the tools) to write. Simple as that”
> 
> "如果你没有时间阅读，你就没有时间（或工具）写作。就这么简单"。
> 
> – Stephen King in his memoir, On Writing.

正如斯蒂芬-金所言，作家必须广泛而频繁地阅读，才能形成自己的声音，并学会如何遣词造句和结构故事，以吸引读者拿起自己的作品阅读。

**与阅读书籍一样，有意识地阅读代码能帮助程序员更快地成长，`尤其是中级程序员`。**

### To stand on the shoulders of giants

我们可以向他人学习。优秀的源代码就像文学名著。它提供的不仅仅是信息和知识，还有启迪。

通过浏览 Linux 内核、Redis、Nginx、Rails 或其他著名项目的源代码，你可以汲取全世界成千上万顶级程序员的智慧。

在这些项目中，可以找到无数优秀的编程、范式选择、设计和架构实例。向他人学习的另一个好处是能够避免常见的陷阱。大多数错误都是别人已经犯过的。

### To solve hard problems

在你的编程生涯中，你最终会遇到一些无法通过谷歌搜索解决的问题。如果你没有遇到过这种问题，那只能说明你编程的时间还不够长 :)。阅读源代码是研究这类问题的好方法，也是学习新知识的好机会。

### To expand your limitations

大多数程序员只在几个特定领域编码。一般来说，如果你不不断鞭策自己，你的编程能力将与同事的平均水平相当。不要满足于修复一些错误或为现有系统添加一些微不足道的功能。相反，要尝试拓展新的领域，总是试图找到一个你在日常工作中没有接触过、但你感兴趣的新领域。这将拓宽你对编码的整体理解。

## What kind of source code to read

好吧，阅读源代码是有好处的。接下来的问题是，有这么多优秀的作品可供选择，我们应该阅读什么样的源代码呢？
首先要选择一个目标。如果没有这个重点，你试图理解源代码的努力就会事倍功半。

以下是一些典型场景：

- **When you want to learn a new programming language.**
  
  Learning a new programming language [is not easy](https://coderscat.com/how-to-learn-all-pl). However, when taking on a new language, reading source code is a very efficient learning method. I learned a lot about Rust from the project [rust-rosetta](https://github.com/rust-rosetta/rust-rosetta). [Rosetta Code](http://rosettacode.org/wiki/Category:Programming_Languages) is a project which collects solutions to common tasks in various programming languages. It’s a useful resource for picking up a new programming language.
    
  当你想学习一门新的编程语言时。学习一门新的编程语言并不仅仅意味着学习语法。不过，在学习一门新语言时，阅读源代码是一种非常有效的学习方法。我从 rust-rosetta 项目中学到了很多关于 Rust 的知识。Rosetta Code 是一个收集各种编程语言中常见任务的解决方案的项目。它是学习一门新编程语言的有用资源。

- **当你想了解特定算法或实现时。**
  
  例如，我们都使用过标准库中的排序功能。你有没有想过它是如何实现的？或者说，你需要使用 Redis 中的 Set 数据结构，那么它的实现中使用了哪些数据结构？为此，您只需查看项目中与实现相关的部分，通常就是几个文件或函数。

- **当你使用特定框架编写代码时。**
  
  这意味着您已经对相关框架有了一定的经验，因此这也是阅读框架源代码的好时机。显然，了解其源代码将有助于加深理解框架。

- **当你想涉足一个新领域时，可以阅读该领域的经典和著名项目。**
  
  例如，既然你从事的是网络开发，那么分布式系统是否会让你感兴趣？如果是这样，如果你了解 Golang，也许 [etcd](https://github.com/etcd-io/etcd) 就是你的好选择。你想深入研究操作系统的内部结构吗？那么 [xv6](https://github.com/mit-pdos/xv6-public) 也许是个不错的开始。我们正处在一个伟大的时代，Github 上有许多伟大的开源项目。试着找几个吧。

记住，**choose projects according to your current programming skills and knowledge level**. 如果你选择的项目远远超出你目前的技能水平，你最终会感到沮丧。先阅读一些较小的项目，然后再转向较大的项目。

如果你在某个特定时间无法理解某些特定的代码，这意味着你存在知识差距。把代码放一边，试着阅读一些书籍、论文或其他相关文档，等你有了更多信心再回来。

我们总是能按部就班地取得进步：reading (code, books, papers), writing, reading more and writing more. 阅读（代码、书籍、论文）、写作、多读、多写。

## How to read source code

[Design Patterns](https://amzn.to/2Pq1LYS) 是一本智慧阅读指南。作为初学者，如何阅读代码也是一门需要投入时间和精力的课程。阅读代码并非易事。**仅仅阅读源代码是不够的。你要努力理解他人的设计和想法**。

### Preconditions

要想高效地阅读代码，您需要提前在手边准备好一些东西：

- 能有效使用的编辑器。您需要快速搜索关键字或变量的能力。有时您需要查找引用或函数的定义。熟练使用编辑器。为了提高效率，要学会只使用键盘。这样可以让你专注于代码而不受干扰。
- 掌握 Git 或类似版本控制工具的基本技能，以便比较不同版本之间的差异。
- 与源代码相关的文档。这些将作为您的阅读参考，**尤其是设计文档、代码约定**等。
- 对所使用的编程语言和设计模式有一定的了解和经验。这对于大型项目来说是必须的。如果你对编程语言非常熟悉，你就会知道源代码是如何组织的，以及有哪些范例和最佳实践。当然，这些都需要时间来积累。要有耐心。

### Process and tips

读取过程不是线性的。你不能一个一个地阅读源文件。相反，大多数时候我们都是自上而下地阅读代码。以下是一些提高代码阅读效率的技巧：

1. **Read code with context**
   
   When you start to read code, always try to throw out questions.
    
   例如，如果应用程序采用了 cache strategy，那么一个很好的问题就是，如果某个 key 失效了，cache 中的值如何更新？带着这样的问题，你在阅读代码时就有了上下文，或者说有了目标，从而使阅读过程充满乐趣。你甚至可以为自己做一些假设。然后，我们需要用手中的代码来确认我们的假设。
    
   这就有点像间谍活动：**you want to discover the truth about the code, the logic of the code, how it flows like a story**.

2. **Run and interact with the code**

   源代码就像一个乐高积木，只是已经组装好了。如果你想了解它是如何组装起来的，你就需要与它互动，甚至有时要把它拆开。对于代码，阅读同一源代码的旧版本很有帮助。阅读 Git 中的差异，并尝试找出特定功能是如何实现的（Changelogs 在这方面很有用）。例如，我发现 Lua 的第一个版本要简单得多，这有助于我理解作者最初的设计思路。

   Debugging 是玩转代码的另一种方式。尝试在代码中添加一些 breakpoints（或 print points），并了解打印到控制台的任何输出。
   如果对代码有了足够的了解，可以尝试做一些修改，然后重新 build 并运行它。最简单的方法是尝试调整配置，以查看不同配置的结果。之后，您可以尝试添加一些微不足道的功能。如果结果对其他人有用，你就应该向上游做出贡献。

3. **The relationship between data structures**

   > 📌 “Bad programmers worry about the code. Good programmers worry about data structures and their relationships.”。
   > 
   > 糟糕的程序员担心代码。优秀的程序员担心数据结构及其关系。
   > 
   > – Linus Torvalds 

   数据结构是程序中最重要的元素。用笔或任何您喜欢的工具绘制数据结构之间的关系。结果是源代码的映射。在阅读过程中你需要经常参考这张地图。一些工具（如 [SciTools](https://scitools.com/)）可用于生成 UML 类图。

4. **The module dependency and boundary**

   大型项目包含多个模块，典型的一个模块经常只拥有单一职责。这有助于我们减少代码的复杂性，在适当的层级上进行抽象。模块的接口就是抽象的边界，我们可以读取一个模块，然后进入另一个模块。如果您正在阅读使用 Make 构建的 C/C++ 项目，那么 Makefile 将是了解模块组织方式的一个很好的入口。
   边界本身也很有用。优秀的代码都是有条理的，其变量和函数的命名风格都是为了便于阅读。你不需要阅读所有源文件，**可以忽略不重要或熟悉的部分**。如果你已经确认某个模块只是为了解析而设计的（just designed for parsing），那么你大致已经知道了它的功能；这时你就可以跳过阅读该模块。当然，这将大大节省时间。

5. **Use the test case**

   测试用例对于理解代码也是一个非常好的补充。**测试用例就是文档**。如果你阅读一个类时，请尝试阅读相关的测试代码。这可以让您弄清楚类的接口以及它的典型用法。集成测试用例对于使用某些特定输入调试代码也很有用，它可以让您跟踪程序的整体流程。

6. **Review**

   花了很长时间阅读一个项目后，为什么不写一篇代码评论呢？这就像评论一本书一样。你可以写下源代码中好的或不好的部分，以及你从阅读中学到的东西。写这样的文章可以澄清你的理解，也可以帮助其他人阅读源代码。

## Some good books

I find code reading is a far more extensive topic than I thought. There is no real systematic way to train this skill. In one word, keep practicing to find your own way. These are some good books for improving your reading code ability:

- [Design Patterns: Elements of Reusable Object-Oriented Software](https://amzn.to/2Ppxol1)
- [Clean Architecture: A Craftsman’s Guide to Software Structure and Design](https://amzn.to/2BN8WSR)
- [How to Read a Book: The Classic Guide to Intelligent Reading](https://amzn.to/2MVbZ1G).

### 参考链接🔗

- [CodersCat: How to Read Source Code](https://coderscat.com/learn-from-source-code/)
