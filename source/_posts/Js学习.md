
---
title: Js学习
keywords: js
tags: js
categories: skill
date: 2018-03-14
---

* 如何判断一个js 对象是否是Array,arr为要判断的对象：
	`Object.prototype.toString.call(arry)==='[object Array]'`

* 获得数组arr=[1,2,3,4]中最大数值的函数有：
	`Math.max.apply(Math,arr)`
	`Math.max(arr[0],arr[1],arr[2],arr[3])`
	`Math.max.call(Math,arr[0],arr[1],arr[2],arr[3])`


