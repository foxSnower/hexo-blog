---
title: 快速把自己的项目上传到github
keywords: github
tags: github
categories: skill
date: 2017-11-28
---

###

首先根据下图的操作创建一个仓库，这是干什么的?可以简单粗暴的理解为一个项目一个仓库就行了。

![这是第一张图片](../../../../images/github/git1.jpg)

创建成功后看到到下图，这图的那个地址先记住了，一会可是要用的呢，这是这个仓库的地址，我们项目要传到这里来。

![这是第一张图片](../../../../images/github/git2.jpg)

然后就去下载一个git,进入项目的目录下：

![这是第一张图片](../../../../images/github/git3.jpg)

* 输入`git init`，当前项目的目录中生成本地的git管理（会发现在当前目录下多了一个.git文件夹）

* 输入`git add .`，这个是将项目上所有的文件添加到仓库中的意思，如果想添加某个特定的文件，只需把.换
成这个特定的文件名即可。

* 输入`git commit -m "first commit"`，表示你对这次提交的注释，双引号里面的内容可以根据个人的需要
改。

* 输入`git remote add origin https://自己的仓库url地址`（上面有说到） 将本地的仓库关联到github上，这里我输入的是`git remote add origin git@github.com:foxSnower/FoxSnower.git`

* 输入`git push -u origin master`，这是把代码上传到github仓库的意思

上传成功后，就是这个样子了。

![这是第一张图片](../../../../images/github/git4.jpg)

PS

如果是新建的文件
则git add <file>

如果是修改的文件
则git add <file>

如果是删除的文件
则 git rm <file>

4. 提交已暂存的文件
git commit

注意注释填写规范。

git commit --amend

修改最近一次提交。有时候如果提交注释书写有误或者漏提文件，可以使用此命令。

### 同步到服务器

同步到服务器前先需要将服务器代码同步到本地

命令： git pull

如果执行失败，就按照提示还原有冲突的文 件，然后再次尝试同步。

命令：git checkout -- <有冲突的文件路径>

同步到服务器

命令： git push origin <本地分支名>

如果执行失败，一般是没有将服务器代码同步到本地导致的，先执行上面的git pull命令。


## 理解一番

一、 上传 （从无到有）

1.在自己的github上建一个仓库
2.在本地项目文件夹内打开git 
3.`git init`初始化
4.`git add .`新增所有
5.`git commit -m "first commit"` 提交此次上传的描述
6.`git remote add origin git@github.com:foxSnower/FoxSnower.git` 本地项目关联至github仓库
7.`git push -u origin master` 提交代码

二、 同步github后上传
1.`git pull` github的代码同步至本地
2.`git push origin master`本地代码同步至github中


