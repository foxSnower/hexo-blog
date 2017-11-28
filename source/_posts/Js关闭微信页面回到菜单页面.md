---
title: 关闭微信页面回到菜单页面
keywords: 微信
tags: 
- 微信
- Js
date: 2017-08-20
---

# 关闭微信页面回到菜单页面

```javascript
//关闭微信页面
function weixinClosePage() {
	if (typeof WeixinJSBridge == "undefined") {
		if (document.addEventListener) {
			document.addEventListener('WeixinJSBridgeReady', weixin_ClosePage, false);
		} else if (document.attachEvent) {
			document.attachEvent('WeixinJSBridgeReady', weixin_ClosePage);
			document.attachEvent('onWeixinJSBridgeReady', weixin_ClosePage);
		}
	} else {
		weixin_ClosePage();
	}
}
function weixin_ClosePage() {
	WeixinJSBridge.call('closeWindow');
}
```