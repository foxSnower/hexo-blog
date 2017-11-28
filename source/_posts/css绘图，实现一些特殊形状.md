
---
title: CSS绘图，实现一些特殊形状
keywords: CSS绘图 特殊形状 神奇
tags: CSS
categories: skill
date: 2017-02-12
---

这是一件神奇的事，不信？

贴代码试试...

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="keywords" content="前端开发,CSS,HTML,XHTML,JS"/>
        <meta name="description" content="专注前端技术博客"/>
        <title>WEB前端开发 | 闪亮于WEB前端的彩虹</title>
        <title>测试</title>
        <style type="text/css">
            - {
                margin:0;
                padding:0;
                border:0;
            }
            .wrap {
                position:absolute;
            }
            .arrow {
                position:relative;
                width:0;
                height:0;
                border-top:9px solid transparent;
                border-right:9px solid #000;
                -webkit-transform:rotate(10deg);
                -moz-transform:rotate(10deg);
                -ms-transform:rotate(10deg);
                -o-transform:rotate(10deg);
            }
            .arrow:after {
                content:"";
                position:absolute;
                border:0 solid transparent;
                border-top:3px solid #000;
                border-radius:20px 0 0 0;
                top:-12px;
                left:-9px;
                width:12px;
                height:12px;
                -webkit-transform:rotate(45deg);
                -moz-transform:rotate(45deg);
                -ms-transform:rotate(45deg);
                -o-transform:rotate(45deg);
            }
            .star-six {
                width:0;
                height:0;
                border-left:50px solid transparent;
                border-right:50px solid transparent;
                border-bottom:100px solid #9C3;
                position:relative;
            }
            .star-six:after {
                width:0;
                height:0;
                border-left:50px solid transparent;
                border-right:50px solid transparent;
                border-top:100px solid #9C3;
                position:absolute;
                content:"";
                top:30px;
                left:-50px;
            }
            .star-five {
                margin:50px 0;
                position:relative;
                display:block;
                color:#06C;
                width:0px;
                height:0px;
                border-right:100px solid transparent;
                border-bottom:70px solid #06C;
                border-left:100px solid transparent;
                -moz-transform:rotate(35deg);
                -webkit-transform:rotate(35deg);
                -ms-transform:rotate(35deg);
                -o-transform:rotate(35deg);
            }
            .star-five:before {
                border-bottom:80px solid #06C;
                border-left:30px solid transparent;
                border-right:30px solid transparent;
                position:absolute;
                height:0;
                width:0;
                top:-45px;
                left:-65px;
                display:block;
                content:'';
                -webkit-transform:rotate(-35deg);
                -moz-transform:rotate(-35deg);
                -ms-transform:rotate(-35deg);
                -o-transform:rotate(-35deg);
            }
            .star-five:after {
                position:absolute;
                display:block;
                color:#06C;
                top:3px;
                left:-105px;
                width:0px;
                height:0px;
                border-right:100px solid transparent;
                border-bottom:70px solid #06C;
                border-left:100px solid transparent;
                -webkit-transform:rotate(-70deg);
                -moz-transform:rotate(-70deg);
                -ms-transform:rotate(-70deg);
                -o-transform:rotate(-70deg);
                content:'';
            }
            .heart {
                position:relative;
                width:100px;
                height:90px;
            }
            .heart:before,.heart:after {
                position:absolute;
                content:"";
                left:50px;
                top:0;
                width:50px;
                height:80px;
                background:red;
                -moz-border-radius:50px 50px 0 0;
                border-radius:50px 50px 0 0;
                -webkit-transform:rotate(-45deg);
                -moz-transform:rotate(-45deg);
                -ms-transform:rotate(-45deg);
                -o-transform:rotate(-45deg);
                transform:rotate(-45deg);
                -webkit-transform-origin:0 100%;
                -moz-transform-origin:0 100%;
                -ms-transform-origin:0 100%;
                -o-transform-origin:0 100%;
                transform-origin:0 100%;
            }
            .heart:after {
                left:0;
                -webkit-transform:rotate(45deg);
                -moz-transform:rotate(45deg);
                -ms-transform:rotate(45deg);
                -o-transform:rotate(45deg);
                transform:rotate(45deg);
                -webkit-transform-origin:100% 100%;
                -moz-transform-origin:100% 100%;
                -ms-transform-origin:100% 100%;
                -o-transform-origin:100% 100%;
                transform-origin:100% 100%;
            }
            .infinity {
                position:relative;
                width:212px;
                height:100px;
            }
            .infinity:before,.infinity:after {
                content:"";
                position:absolute;
                top:0;
                left:0;
                width:60px;
                height:60px;
                border:20px solid #F3C;
                -moz-border-radius:50px 50px 0 50px;
                border-radius:50px 50px 0 50px;
                -webkit-transform:rotate(-45deg);
                -moz-transform:rotate(-45deg);
                -ms-transform:rotate(-45deg);
                -o-transform:rotate(-45deg);
                transform:rotate(-45deg);
            }
            .infinity:after {
                left:auto;
                right:0;
                -moz-border-radius:50px 50px 50px 0;
                border-radius:50px 50px 50px 0;
                -webkit-transform:rotate(45deg);
                -moz-transform:rotate(45deg);
                -ms-transform:rotate(45deg);
                -o-transform:rotate(45deg);
                transform:rotate(45deg);
            }
            .pacman {
                width:0px;
                height:0px;
                border-right:60px solid transparent;
                border-top:60px solid #FC0;
                border-left:60px solid #FC0;
                border-bottom:60px solid #FC0;
                border-top-left-radius:60px;
                border-top-right-radius:60px;
                border-bottom-left-radius:60px;
                border-bottom-right-radius:60px;
            }
            .yin-yang {
                width:96px;
                height:48px;
                background:#fff;
                border-color:#000;
                border-style:solid;
                border-width:2px 2px 50px 2px;
                border-radius:100%;
                position:relative;
            }
            .yin-yang:before {
                content:"";
                position:absolute;
                top:50%;
                left:0;
                background:#fff;
                border:18px solid #000;
                border-radius:100%;
                width:12px;
                height:12px;
            }
            .yin-yang:after {
                content:"";
                position:absolute;
                top:50%;
                left:50%;
                background:#000;
                border:18px solid #fff;
                border-radius:100%;
                width:12px;
                height:12px;
            }

    </style>
    </head>
    <body>
        <div class="wrap" style="top:30px; left:40px;">
            <div class="arrow"></div>
        </div>
        <div class="wrap" style="top:20px; left:100px;">
            <div class="star-six"></div>
        </div>
        <div class="wrap" style="top:20px; left:200px;">
            <div class="star-five"></div>
        </div>
        <div class="wrap" style="top:20px; left:400px;">
            <div class="heart"></div>
        </div>
        <div class="wrap" style="top:220px; left:100px;">
            <div class="infinity"></div>
        </div>
        <div class="wrap" style="top:220px; left:400px;">
            <div class="pacman"></div>
        </div>
        <div class="wrap" style="top:340px; left:200px;">
            <div class="yin-yang"></div>
        </div>
    </body>
    </html>  




