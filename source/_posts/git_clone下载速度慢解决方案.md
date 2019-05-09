
---
title: git clone 下载速度慢解决方案
keywords: 
tags: git
categories: skill
date: 2019-05-09
---

1、查询域名 global-ssl.fastly.Net 和 github.com 公网地址. https://www.ipaddress.com/ 可以用这个查。

2、将ip地址添加到hosts文件
文件路径：C:\Windows\System32\drivers\etc

```
192.30.253.112 github.com
151.101.185.194 github.global.ssl.fastly.net
```

