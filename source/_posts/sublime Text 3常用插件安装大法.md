
---
title: sublime Text 3常用插件安装大法
---
### 安装Package Control的方法如下：

点击菜单中的 “View”–“Show Console”（也可通过快捷键 Ctrl + ` 打开，不过可能因与系统其他软件快捷键冲突而打不开）调出 Console。然后把下面的代码粘贴进去后回车即可，需稍微等待一段时间。（以下代码可能会因更新而导致失效，请以[官网代码](https://packagecontrol.io/installation#st3)为准。）

    import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

重启Sublime Text即可。

<!--more-->

### 1. Emmet
Emmet的前身是大名鼎鼎的Zen coding，如果你从事Web前端开发的话，对该插件一定不会陌生。它使用仿CSS选择器的语法来生成代码，大大提高了HTML/CSS代码编写的速度。

    ul>li.item$*3

按 `ctrl+e` 或`tab` 键，自动生成以下代码，快捷方便，是你必备安装的插件之一。

    <ul>
	<li class="item1"></li>
	<li class="item2"></li>
	<li class="item3"></li>
	</ul>

附：[Emmet使用文档](http://docs.emmet.io/).

### 2. HTML-CSS-JS Prettify

从名字中就可以看出，这是一款美化 HTML 、CSS、JS及Json代码的插件。需要注意的是，必须先安装 Node.js（最好使用默认安装路径，否则安装完插件后还需修改配置文件）。

按 `Ctrl+Shift+P` 或`Ctrl+Shift+H`或者 `右键–“HTML/CSS/JS Prettify”–“Prettify Code” `键，快捷方便，是你美化代码的插件。

### 3. Sublime​Code​Intel

支持所有 Komode Editor 支持的代码语言，如：JavaScript, Mason, XBL, XUL, RHTML, SCSS, Python, HTML, Ruby, Python3, XML, Sass, XSLT, Django, HTML5, Perl, CSS, Twig, Less, Smarty, Node.js, Tcl, TemplateToolkit, PHP等。

提供以下功能：

* 打开并跳转到函数/类等的符号定义位置
* 实时显示模块/符号的自动补全功能
* 在状态栏显示当前函数的相关信息

跳转到定义位置（`Alt+Click` 或 `Control+Windows+Alt+Up`）、返回（`Control+Windows+Alt+Left`）

### 4. AutoFileName

一款在 Sublime Text 中可以自动补全文件路径及名称的插件。没有这个插件之前，如果我们要输入文件的路径，就需要凭自己的记忆来输，但是你能确保记得正确吗？能否记得图片是 jpg 还是 png 吗？想更快的输入文件名吗？那么，你肯定需要这款插件！

调用方法	
		`<img src="../" />`


### 5. jQuery
一款自动补全 jQuery 函数的插件，带有语法高亮，并且包含几乎所有的 jQuery 方法。

### 6. DocBlockr
DocBlockr 是一款 Sublime Text 2 & 3 都可以使用的代码快注释插件。支持的语言有：JavaScript (including ES6), PHP, ActionScript, Haxe,CoffeeScript, TypeScript, Java, Groovy, Objective C, C, C++ and Rust.

调用方法：输入 `/**` 后按 `Enter` 或者 `Tab`

### 7. BracketHighlighter

BracketHighlighter 是一款Sublime下匹配标签高亮的小插件，可以把匹配到的如 {}、()、”、””等对应的符号或者标签高亮显示。

调用方法：选中标签即可显示