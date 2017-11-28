---
title:关于nodejs,npm遇到的那些事
keywords: nodejs npm 依赖
tags: nodejs
categories: skill
date: 2017-09-27
---

关于nodejs有一直在用，但都没有去关注他的一些问题，毕竟在今天之前都没遇到什么问题。
前段时间遇到了一些奇葩依赖，新版本的nodejs与相对应的npm无法安装，在不得已的情况下，
把nodejs还原到了v6.11.3版本，但是问题却是未解决的，因为npm版本对应不上，npm版本不知何时
变成了npm 5.4.0，这还得了，马上把度娘请出，好好的请教了一番，网上真是高手多，但说真，
还是看了官网后才发现真正的问题。废话不多说,直接说原因：原因就是nodejs的版本与npm的版本
要对应得上，否则就会出现各种各样的无法安装依赖的情况

我们需要卸载了再安装，卸载的话最最简单的方法就是在控制面板的程序管理里直接卸载就好了

	 npm -g install npm@3.10.10
	 npm -g install npm@latest

* node v6.11.3 ===> npm 3.10.10 (稳定版)
* node v8.6.0 ===> npm 5.4.0 (当前版)

安装完了还是报错~？

那估计就是没有安装淘宝镜像了，淘宝镜像是什么，请像我的精神一样，请教度娘吧~~~

	npm install -g cnpm --registry=https://registry.npm.taobao.org

这样我们每次需要淘宝镜像安装只需把 `npm` 换成 `cnpm`

	cnpm install