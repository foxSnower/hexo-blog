---
title: 自适应网页设计的核心
keywords: 自适应网页 HTML
tags: 
- 自适应
- HTML
categories: skill
---
"自适应网页设计"的核心，就是CSS3引入的Media Query模块。
它的意思就是，自动探测屏幕宽度，然后加载相应的CSS文件。

    <link rel="stylesheet" type="text/css" media="screen and max-device-width:400px)" href="tinyScreen.css" />
<!-- more-->
上面的代码意思是，如果屏幕宽度小于400像素（max-device-width: 400px），就加载tinyScreen.css文件。

    <link rel="stylesheet" type="text/css" media="screen and (min-width: 400px) and (max-device-width: 600px)" href="smallScreen.css" />
如果屏幕宽度在400像素到600像素之间，则加载smallScreen.css文件。
除了用html标签加载CSS文件，还可以在现有CSS文件中加载。

    @import url("tinyScreen.css") screen and (max-device-width: 400px);
最后给个自定义标准head作为参考：

```html
<head>
    <meta charset="UTF-8">
    <!--如果安装了GCF，则使用GCF来渲染页面，如果未安装GCF，则使用最高版本的IE内核进行渲染-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!--视图默认比例，用户不可缩放视图设置-->
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no">
    <!--删除默认的苹果工具栏和菜单栏-->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!--控制状态栏显示样式-->
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <!--电话、邮件、地址默认格式取消-->
    <meta name="format-detection" content="telephone=no,email=no,adress=no"/>
    <!--手机端点击时，禁止出现灰色区域-->
    <meta name="msapplication-tap-highlight" content="no"/>
    <title>web移动端标准head参考</title>
    <!--自动探测屏幕宽度，然后加载相应的CSS文件-->
    <link rel="stylesheet" type="text/css" media="screen and (max-device-width: 375px)" href="../css/screen-css/tinyScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 375px) and (max-device-width: 414px)" href="../css/screen-css/smallScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 414px) and (max-device-width: 500px)" href="../css/screen-css/middleScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 500px) and (max-device-width: 600px)" href="../css/screen-css/biggerScreen.css" />
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 600px)" href="../css/screen-css/hugeScreen.css" />
    <!--公共样式-->
    <link rel="stylesheet" href="../css/public-css/public.css">
    <!--字体图标样式-->
    <link rel="stylesheet" href="../css/font-icon-css/font-icon.css">
    <!--头部与底部样式-->
    <link rel="stylesheet" href="../css/fixed-header-footer-css/fixed-header-footer.css">
</head>
```


