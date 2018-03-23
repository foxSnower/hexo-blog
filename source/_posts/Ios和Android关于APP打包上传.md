---
title: 程序应用打包的那些事ios和andriod
keywords: ios andriod 程序应用
tags: 程序应用
categories: skill
date: 2018-03-23
---

前提摘要：最近在项目中做了一个用vue.js写的混合APP，用的是RN搭的外壳，而本篇文章是记录最后的一步，如何让自己写好的Web页面放在RN项目中并且打包成APP，放在https://fir.im 上供下载测试·


# 准备工作

先把代码 ，打包环境等准备好，我们先用SVN下载代码，用到的是Cornerstone，连接方式：

	file->Add Repository

如下图配置，添加即可

![Cornerstone连接svn配置](../../../../images/svn/svn配置.png)

 * update 更新
 * reverse 回滚

把下载好的web代码，与RN代码安装好依赖

	npm install 或 yarn 

web代码命令打包压缩

	npm run build

复制打包压缩好的文件到原生根目录下，这里打包压缩好的文件是dist ，把dist文件放入RN项目的根目录下：

![dist文件夹放在根目录下](../../../../images/svn/dist.png)

# ios打包

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


### 下载证书，配置（略）

### 打包

在Xcode中

	product->archive

如果看到是灰色域，不能点击

那么先点项目名，选择Build Only Device的Generic iOS Device ,然后就可以点击了，等待，这个时间有点长。。。

Build完后，如下导出：

![dist文件夹放在根目录下](../../../../images/svn/ios.png)
![dist文件夹放在根目录下](../../../../images/svn/1.png)
![dist文件夹放在根目录下](../../../../images/svn/2.png)

把生成的应用放到你想放的目录下即可

![dist文件夹放在根目录下](../../../../images/svn/3.png)

# Android 打包

### 安装环境

下载 Android Studio,打开程序，打开项目andriod，程序就会自动下载需要的sdk文件，下载完后就可以命令行操作打包了。

首先在 andriod 目录下更改文件 local.properties ，改成自己的路径及

如：

	sdk.dir = /Users/hexuemei/Library/Android/sdk

Android 打包 用命令行就能解决,在根目录下执行

 	cd andriod && ./gradlew assembleRelease

就可以生成 `app-release.apk` ,生成的文件在`andriod/app/build/outputs/apk`目录下


# 上传 

在 https://fir.im 上注册登录后，根据提示就可以上传自己的app进行下载测试了。


# 完


 






