---
title: Js获取日期：前天、昨天、今天、明天、后天
keywords: Js 获取日期
tags: 
- 日期
- Js
categories: skill
date: 2017-09-30
---
想不想用最简短的js代码就能获取日期：前天、昨天、今天、明天、后天

废话不多说，代码说话：
<!--more -->

    <html>
    <head >
        <meta charset="UTF-8">
        <title>js获取日期：前天、昨天、今天、明天、后天 - Liehuo.Net</title>
    </head>
    <body>
    <script language="JavaScript" type="text/javascript">
        function GetDateStr(AddDayCount) {
            var dd = new Date();
            dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = dd.getMonth()+1;//获取当前月份的日期
            var d = dd.getDate();
            if (m < 10) m = "0" + m;
            if (d < 10) d = "0" + d;
            return y+"-"+m+"-"+d;
        }
        document.write("前天："+GetDateStr(-2));
        document.write("<br />昨天："+GetDateStr(-1));
        document.write("<br />今天："+GetDateStr(0));
        document.write("<br />明天："+GetDateStr(1));
        document.write("<br />后天："+GetDateStr(2));
        document.write("<br />大后天："+GetDateStr(3));
    </script>
    </body>
    </html>
