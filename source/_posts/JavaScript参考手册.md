---
title: JavaScript参考手册
---

本部分提供完整的 `JavaScript` 参考手册：

* `JavaScript` 本地对象和内置对象
* `Browser` 对象（`BOM`）
* `HTML` `DOM`对象

# JavaScript 对象参考手册

本参考手册描述每个对象的属性和方法，并提供实例。

## Array 对象

**Array 对象** 

`Array` 对象用于在单个的变量中存储多个值。

**Array 对象创建的语法**

```js
new Array();
new Array(size);
new Array(element0,element1,...,elementn);
```

**Array 参数**

参数`size` 是期望的数组个数。返回的数组，`length`字段将被设为`size`的值。

参数`element0,...,elementn`是参数列表。当使用这些参数来调用构造函数`Array()`时
，新创建的数组的元素就会被初始化为这些值。它的`length`字段也会被设置为参数的个数。

**Array 返回值**

返回新创建并被初始化了的数组

如果调用构造函数`Array()`时没有使用参数，那么返回的数组为空，`length`字段为 0 。

当调用构造函数时只传递给它一个数字参数，该构造函数将返回具有指定个数、元素为`undefined`的数组。

当其他参数调用`Array()`时，该构造函数将用参数指定的值初始化数组。

当把构造函数作为函数调用，不使用 `new` 运算符时，它的行为与使用`new`运算符调用它时的行为完全一样。

**Array 对象属性**

* constructor &nbsp;返回对创建此对象的数组函数的引用。
* length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设置或返回数组中元素的数目。
* prototye &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使您有能力对对象添加属性的方法。

**Array 对象方法**

* concat() 链接两个或更多的数组，并返回结果。
* join() 把数组的所有元素放入一个字符串。元素通过指定的分格符进行分隔。
* pop() 删除并返回数组的最后一个元素。
* push() 向数组的末尾添加一个或更多元素，并返回新的长度。
* reverse() 颠倒数组中元素的顺序。
* shift() 删除并返回数组的第一个元素。
* slice() 从某个已有的数组返回选定的元素
* sort() 对数组的元素进行排序

## Boolean

## Date

## Math

## Number

## String

## RegExp

## Global

# Browser 对象参考手册

本参考手册描述每个对象的属性和方法，并提供实例。

## Window

## Navigator

## Screen

## History

## Location

# HTML DOM 对象参考手册

本参考手册描述每个对象的属性和方法，并提供实例。

## Document

## Anchor

## Area

## Base 

## Body 

## Button 

## Canvas 

## Event

## Form

## Frame 

## Frameset 

## IFrame

## Image

## Input Button 

## Input Checkbox

## Input File 

## Input Hidden

## Input Password

## Input Radio

## Input Reset

## Input Submit

## Input Text 

## Link

## Meta

## Object 

## Option 

## Select 

## Style 

## Table 

## TableCell

## TableRow

## Textarea 

# 相关页面

如果更多有关 `JavaScript` 对象的知识，请阅读 `Javascript` 高级教程的相关内容：

## 面向对象技术

## 对象应用

## 对象类型

## 对象作用域

## 定义类或对象

## 修改对象

