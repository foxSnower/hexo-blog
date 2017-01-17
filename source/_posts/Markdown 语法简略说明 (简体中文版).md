---
title: Markdown 语法简略说明 (简体中文版)
keywords: Markdown 语法 常用语法 Markdown写表格
---

Markdown 的语法全由一些符号所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。

Markdown 不是想要取代 HTML，甚至也没有要和它相近，它的语法种类很少，只对应 HTML 标记的一小部分。Markdown 的构想不是要使得 HTML 文档更容易书写。在我看来， HTML 已经很容易写了。Markdown 的理念是，能让文档更容易读、写和随意改。HTML 是一种发布的格式，Markdown 是一种书写的格式。就这样，Markdown 的格式语法只涵盖纯文本可以涵盖的范围。

# Markdown 语法
## Markdown 常用语法
### 先来一个标题
    # 这是 <h1></h1>
    ## 这是 <h2></h2>
    ### 这是 <h3></h3>
    #### 这是 <h4></h4>
    ##### 这是 <h5></h5>
    ###### 这是 <h6></h6>
<!-- more -->
### 引用
> >引用里的引用
> 
> 这段话就是一句引用的话

    ------------代码域------------
    >>引用里的引用   
    > 这段话就是一句引用的话
    ------------代码域------------

### 列表
*   Red
*   Green
*   Blue
        ------------代码域------------
            *   Red
            *   Green
            *   Blue
        ------------代码域------------

### 代码区块
4个空格符即可

    $(document).ready(function(){
        alert("Hello World!");
    })

### 分隔线
***

    ------------代码域------------
    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ------------代码域------------

### 区段元素——链接
Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。
以下只介绍行内式，更多详情请参考：[Markdown 语法简略说明 (简体中文版)](http://wowubuntu.com/markdown/#philosophy)

This is [an example](https://foxsnower.github.io/ 'this is title') inline link.
[This link](https://foxsnower.github.io/ "this is title") has no title attribute.

     This is [an example](https://foxsnower.github.io/ 'this is title') inline link.
    [This link](https://foxsnower.github.io/ "this is title") has no title attribute.

### 区段元素——强调
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__

    *single asterisks*
    _single underscores_
    **double asterisks**
    __double underscores__

### 区段元素——代码
如果要标记一小段行内代码，你可以用反引号把它包起来（`），例如：

Use the `printf()` function

    Use the `printf()` function.

``There is a literal backtick (`) here.``

### 区段元素——图片

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

### 其它——自动链接
<http://example.com/>

    <http://example.com/>

### 其它——反斜杠
\*literal asterisks\*

    \*literal asterisks\*
    \   反斜线
    `   反引号
    -   星号
    _   底线
    {}  花括号
    []  方括号
    ()  括弧
    #   井字号
    *   加号
    +   减号
    .   英文句点
    !   惊叹号

### 表格

|表格|阿萨德|
|:-:|:-:|
|asd |asd |
|asd |asd |
|asd |asd |
|asd |asd |
|asd |asd |

文章参考于：[Markdown 语法简略说明 (简体中文版)](http://wowubuntu.com/markdown/#philosophy)


