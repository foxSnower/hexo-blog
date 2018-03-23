---
title: weex从入门到放弃
keywords: nodejs npm weex
tags: weex
categories: skill
date: 2017-11-15
---

# weex从入门到放弃

经历过nodeJs的卸载重装N次，体验过npm的升级与降级，曾把npm全局下载的东东全部删除过，失落与绝望擦出的无奈，曾一度想放弃，就在濒临绝境之际，git带来了希望。终于在git那慢腾腾的安装下，项目启动成功，宣告着环境搭建成功的同时预示着雨停了，终于可以再次踏上泥泞的道路了。。。。

# 开始

鉴于上次用Weex playground app 扫描后显示空白，忘记记下解决方案后事件，今日再次入坑，今日无论如何也得记下这忘记之耻，其实原因很简单，不在同一个网域里。。。坑爹~

# 打包ios

### 安装环境

安装IOS开发环境，即Xcode 与CocoaPods，Xcode 可以在App Store 下载获得，CocoaPods安装前需要确保你已经安装Ruby ，之后执行
`sudo gem install cocoapods`

安装报错·？
`YAML safe loading is not available. Please upgrade psycch to a version that supports safe loading (>=2.0).` 

网上各种查资料。最后锁定解决方案

`rvm list known`

提示未安装 `rvm`,又开始新一轮翻阅资料，查找安装rvm 的方法。

`curl --SSL https://get.rvm.io | bash -s stable`

安装过程有提示:To start using RVM you need to run `source /Users/hexuemei/.rvm/scripts/rvm `in all your open shell windows,in rare cases you need to reopen all shell windows.

意思是使用rvm必须执行 `source /Users/hexuemei/.rvm/scripts/rvm` 

执行完后就可以继续了

`rvm list known` 查看目前版本
`rvm install ruby 2.4.1`

为了安装快一点，又加了国内的淘宝镜像

`gem source -l`
`gem source --add http://ruby.taobao.org` 提示未找到就换了一个
`gem source --add http://gems.ruby-china.org`

终于可以下载CocoaPods进入主题了；

`sudo gem install cocoapods`

等待...

### 打包

按着官网的方法添加特定平台的项目 

`weex platform add ios` 报错，上网又搜索了一下，高手们是用weexpack，索性死马当活马医，

`cnpm install -g weexpack`
`weexpack platform add ios` 竟然成功啦

接下来 打包 `npm run dev && weex build ios` 毫无疑问，又报错了········待续吧，


