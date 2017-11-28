
---
title: 背景图片加载失败时替换图片
keywords: 背景图片 加载失败
tags: 
- Js
- 图片
categories: note
date: 2016-04-28
---

# 背景图片加载失败时替换图片

```html 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="js.com/jquery-2.1.4.js" type="text/javascript"></script>
    <style type="text/css">
    div {
        width: 500px;
        height: 500px;
        background-image: url(images/default_action.jpg);
        background-color: #000000;
        background-repeat: no-repeat;
    }
    </style>
</head>
<body>
    <div id="div"></div>
    <script type="text/javascript">
    //第一种方法（闭包）
    window.onload = function() {
        _imgError = (src) => {
            let img = new Image();
            img.src = src;
            console.log(img);
            if (img.width == 0) {
                return '../img/bg.jpg'
            } else {
                return src
            }
        }
        _imgError('images/default_action.jpg');
    }
    //第二种方法
    var img = new Image();
        img.src = 'images/active_new.png';
        console.log(img);
        if (img.width == 0) {
            alert('图片加载失败')
        } else {
            var getId = document.getElementById("div");
            getId.style.backgroundImage = "url(images/active_new.png)";
            alert('图片加载成功')
        }
    </script>
</body>
</html>
```

# 图片的自适应

除了布局和文本，"自适应网页设计"还必须实现图片的自动缩放。
这只要一行CSS代码：
　　`img { max-width: 100%;}`
这行代码对于大多数嵌入网页的视频也有效，所以可以写成：
　　`img, object { max-width: 100%;}`
老版本的IE不支持max-width，所以只好写成：
　　`img { width: 100%; }`
此外，windows平台缩放图片时，可能出现图像失真现象。这时，可以尝试使用IE的专有命令：
　　`img { -ms-interpolation-mode: bicubic; }`
或者，Ethan Marcotte的imgSizer.js。
　　`addLoadEvent(function() {`
　　　　`var imgs = document.getElementById("content").getElementsByTagName("img");`
　　　　`imgSizer.collate(imgs);`
　　`});`
不过，有条件的话，最好还是根据不同大小的屏幕，加载不同分辨率的图片。有很多方法可以做到这一条，服务器端和客户端都可以实现。