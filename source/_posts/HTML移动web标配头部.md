---
title: 移动web标配html头部+全身模板

keywords: html 移动web 标配html头部

categories: note

tags: 
 - HTML
---

# 移动web标配html头部

`Meta`标签中的`format-detection`属性及含义
标签： `format-detection telephoneno meta html` 移动网页	分类： 移动端开发
`format-detection`翻译成中文的意思是“格式检测”，顾名思义，它是用来检测html里的一些格式的，那关于meta的

format-detection属性主要是有以下几个设置：
`meta name="format-detection" content="telephone=no"`
`meta name="format-detection" content="email=no"`
`meta name="format-detection" content="adress=no"`
也可以连写：`meta name="format-detection" content="telephone=no,email=no,adress=no"`
下面具体说下每个设置的作用：

## telephone

你明明写的一串数字没加链接样式，而`iPhone`会自动把你这个文字加链接样式、并且点击这个数字还会自动拨号！想去掉

这个拨号链接该如何操作呢？这时我们的`meta`又该大显神通了，代码如下：
`telephone=no`就禁止了把数字转化为拨号链接！
`telephone=yes`就开启了把数字转化为拨号链接，要开启转化功能，这个`meta`就不用写了,在默认是情况下就是开启！

## email

告诉设备不识别邮箱，点击之后不自动发送
`email=no`禁止作为邮箱地址！
`email=yes`就开启了把文字默认为邮箱地址，这个`meta`就不用写了,在默认是情况下就是开启！

## adress

`adress=no`禁止跳转至地图！
`adress=yes`就开启了点击地址直接跳转至地图的功能,在默认是情况下就是开启！

## 代码

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-
scale=1.0,user-scalable=no">
<!--删除默认的苹果工具栏和菜单栏-->
<meta name="apple-mobile-web-app-capable" content="yes" />    
<!--控制状态栏显示样式//black-translucent灰色 //black黑色--> 
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<!--电话、邮件、地址默认格式取消-->
<meta name="format-detection" content="telephone=yes,email=no,adress=yes"/>
<!--手机端点击时，禁止出现灰色区域-->
<meta name="msapplication-tap-highlight" content="no" />
<meta name="format-detection" content="telephone=yes"/>
```

# 移动web标配全身模板

```html
<!DOCTYPE html>
<html lang="zh_cmn">
<head>
    <meta name="description" content="CSS position:flex in mobile" />
    <meta charset=utf-8 />
    <!--
    Created using JS Bin
    http://jsbin.com
    Copyright (c) 2016 by maxzhang (http://jsbin.com/omaCOSir/53/edit)
    Released under the MIT license: http://jsbin.mit-license.org
    -->
    <meta name="robots" content="noindex">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    <title>CSS position:flex in mobile</title>
    <style id="jsbin-css">
        @font-face {
            font-family: 'Glyphicons Halflings';
            src: url('http://cdn.bootcss.com/bootstrap/3.2.0/fonts/glyphicons-halflings-regular.eot');
            src: url('http://cdn.bootcss.com/bootstrap/3.2.0/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('http://cdn.bootcss.com/bootstrap/3.2.0/fonts/glyphicons-halflings-regular.woff') format('woff'), url('http://cdn.bootcss.com/bootstrap/3.2.0/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('http://cdn.bootcss.com/bootstrap/3.2.0/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
        }
        .glyphicon {
            font-family: 'Glyphicons Halflings';
            font-size: 24px;
            font-style: normal;
            font-weight: normal;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .glyphicon-film:before {
            content: "\e009";
        }
        .glyphicon-qrcode:before {
            content: "\e039";
        }
        .glyphicon-list:before {
            content: "\e056";
        }
        .glyphicon-picture:before {
            content: "\e060";
        }
        .glyphicon-chevron-left:before {
            content: "\e079";
        }
        .glyphicon-calendar:before {
            content: "\e109";
        }
        * {
            margin: 0;
            padding: 0;
            font-size: 16px;
        }
        a {
            color: #fff;
        }
        header,
        footer {
            width: 100%;
            height: 50px;
        }
        header .fixed,
        footer .fixed {
            position: fixed;
            left: 0;
            width: 100%;
            height: 50px;
        }
        header .fixed .wrap,
        footer .fixed .wrap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        header .fixed .wrap.float h1,
        footer .fixed .wrap.float h1 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            font-size: 20px;
            line-height: 50px;
            color: #fff;
            text-align: center;
        }
        header .fixed .wrap.float .glyphicon,
        footer .fixed .wrap.float .glyphicon {
            display: inline-block;
            margin: 12px 10px;
            color: #fff;
        }
        header .fixed .wrap.float .left-icon,
        footer .fixed .wrap.float .left-icon {
            float: left;
        }
        header .fixed .wrap.float .right-icon,
        footer .fixed .wrap.float .right-icon {
            float: right;
        }
        header .fixed .wrap.float:before,
        footer .fixed .wrap.float:before,
        header .fixed .wrap.float:after,
        footer .fixed .wrap.float:after {
            content: " ";
            /* 1 */
            display: table;
            /* 2 */
        }
        header .fixed .wrap.float:after,
        footer .fixed .wrap.float:after {
            clear: both;
        }
        header .fixed .wrap.flex,
        footer .fixed .wrap.flex {
            display: -moz-box;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: -ms-flex;
            display: flex;
        }
        header .fixed .wrap.flex > a,
        footer .fixed .wrap.flex > a {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            display: block;
            -webkit-box-flex: 1;
            -moz-box-flex: 1;
            -webkit-flex: 1 1 0;
            -moz-flex: 1 1 0;
            -ms-flex: 1 1 0;
            flex: 1 1 0;
            text-align: center;
        }
        header .fixed .wrap.flex > a .glyphicon,
        footer .fixed .wrap.flex > a .glyphicon {
            vertical-align: -20px;
        }
        header .fixed {
            top: 0;
            background-color: #45b97c;
        }
        footer .fixed {
            bottom: 0;
            background-color: #464547;
        }
        .main {
            margin: 15px 10px;
        }
    </style>
</head>
<body>
<header>
    <div class="fixed">
        <div class="wrap float">
            <div class="left-icon">
                <span class="glyphicon glyphicon-chevron-left"></span>
            </div>
            <h1>HEADER</h1>
            <div class="right-icon">
                <span class="glyphicon glyphicon-calendar"></span><span class="glyphicon glyphicon-list"></span>
            </div>
        </div>
    </div>
</header>
<div class="main">
    -------------- start --------------<br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    content <br>
    --------------- end ---------------
</div>
<footer>
    <div class="fixed">
        <div class="wrap flex">
            <a href="#"><span class="glyphicon glyphicon-picture"></span></a>
            <a href="#"><span class="glyphicon glyphicon-film"></span></a>
            <a href="#"><span class="glyphicon glyphicon-qrcode"></span></a>
        </div>
    </div>
</footer>
<script src="http://static.jsbin.com/js/render/edit.js?3.38.11"></script>
<script>jsbinShowEdit && jsbinShowEdit({"static":"http://static.jsbin.com","root":"http://jsbin.com"});</script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-1656750-34', 'auto');
    ga('require', 'linkid', 'linkid.js');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');
</script>
</body>
</html>
```