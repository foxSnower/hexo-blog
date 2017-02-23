---
title: 长按事件
keywords: 长按事件 拖拽事件
categories: note
tags: 
- 长按拖拽
- Js
---

# 长按事件

	<!doctype html>
	<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport"
	          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">

	    <title>无标题文档</title>
	    <style>
	        #test {
	            background: #F36;
	            width: 200px;
	            height: 200px;
	        }
	    </style>
	    <script language="javascript" type="text/javascript" src="http://javascript.01jcw.com/jquery-min.js"></script>

	    <script>
	        $(function () {

	            $("#test").on("touchstart", function (e) {
	                e.preventDefault();
	                timeout = setTimeout(function () {
	                    alert("123")
	                }, 1000)

	            });
	            $("#test").on("touchend", function (e) {
	                e.preventDefault();
	                clearTimeout(timeout);

	            });
	        })


	    </script>
	</head>

	<body style="overflow: hidden">
	<div id="test"></div>
	</body>
	</html>


# 拖拽事件

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
	<!-- 	
	<svg width="100%" height="100%" version="1.1"
	xmlns="http://www.w3.org/2000/svg">
	<path d="M50 48 L200 48 L200 52 L50 52 Z" style="fill:#333;stroke:#333;stroke-width:0"/>
	<path d="M200 45 L215 50 L200 55 Z" />
	</svg> -->



	<div id="test" style="height: 100px;width: 100px;background:pink;position:absolute;top:0;left:0;"></div>
	<script>
		test.onmousedown = function(e){
			console.log(event);
			e = e || event;
	    //获取元素距离定位父级的x轴及y轴距离
	    var x0 = this.offsetLeft;
	    var y0 = this.offsetTop;
	    //获取此时鼠标距离视口左上角的x轴及y轴距离
	    var x1 = e.clientX;
	    var y1 = e.clientY;

	    document.onmousemove = function(e){
	    	e = e || event;
	        //获取此时鼠标距离视口左上角的x轴及y轴距离
	        x2 = e.clientX;
	        y2 = e.clientY;    
	        //计算此时元素应该距离视口左上角的x轴及y轴距离
	        var X = x0 + (x2 - x1);
	        var Y = y0 + (y2 - y1);
	        //将X和Y的值赋给left和top，使元素移动到相应位置
	        test.style.left = X + 'px';
	        test.style.top = Y + 'px';
	    }

	    document.onmouseup = function(e){
	        //当鼠标抬起时，拖拽结束，则将onmousemove赋值为null即可
	        document.onmousemove = null;
	    }
	}
	</script>
	</body>
	</html>
