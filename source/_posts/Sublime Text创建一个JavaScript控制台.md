---
title: 在Sublime Text创建一个JavaScript控制台
keywords: Sublime Text JavaScript 控制台 调试脚本 Node.js
categories: tool
tags: Sublime
---



JavaScript控制台可以方便的调试你的脚本，并获得结果。虽然Sublime Text为许多其他脚本内置了Build Systems，但并没有为JavaScript内置Build Systems。一般人都会创建一个.html文件，把.js文件引入进去，然后用浏览器的控制台来检查你脚本的运行结果。你需要不断的切换窗口、刷新浏览器。幸运的是，你可以简单快速的为Sublime Text创建一个JavaScript Build Systems。


今天只分享一种通过Node.js来实现的方法，如果你是用的Mac OS X系统，还有一种通过JSC来实现的方法，这里就不做分享了。

Node.js是一个在服务器上可以用来运行JavaScript的平台。然而，你也可以把它安装到本地计算机上，提供一种比使用浏览器相对来说简单一点方法来运行JavaScript并获得结果。

### 一、创建Build Systems

* 下载并运行Node。安装过程全部使用默认项。
* 打开“Tools”–“Build System”–“New Build System”。
* 清空Sublime Text打开的窗口，并把下面的代码粘贴进去。
* 按 `Ctrl+S 保存文件，把文件保存在默认的User文件夹下，命名为“node.sublime-build”。现在你已经完成创建Build System来了。

### 二、使用

1. 在Sublime Text中打开你想运行的JavaScript文件。
2. 打开“Tools”–“Build System”–“Node”，即你刚刚创建的Build System。
3. 使用 Ctrl+B 或者工具栏中“Tools”下的“Build”运行你的JavaScript脚本。现在窗口的底部就会出现一个控制台，显示你脚本的运行结果。