
---
title: 引进外部字体or图标
keywords:  引进字体 图标 CSS
categories: note
tags: CSS
date: 2016-11-20
---

### 引进外部字体

	@font-face {
	    font-family: 'iconfont';
	    src: url('iconfont.eot'); /* IE9*/
	    src: url('iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	    url('iconfont.woff') format('woff'), /* chrome、firefox */
	    url('iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
	    url('iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
	}


	font-family:'Hiragino Sans GB','Microsoft Yahei',"WenQuanYi Micro Hei",SimSun,Tahoma,Arial,Helvetica,STHeiti;

### 引进外部图标

	/*图标字体*/

	@font-face {
	  font-family: 'fontello';
	  src: url('font/fontello.eot');
	  src: url('font/fontello.eot#iefix') format('embedded-opentype'),
	       url('font/fontello.woff') format('woff'),
	       url('font/fontello.ttf') format('truetype'),
	       url('font/fontello.svg#fontello') format('svg');
	  font-weight: normal;
	  font-style: normal;
	}
	.ficon,[class^="ficon-"],[class^="ficon-"]:before,[class*=" ficon-"]:before {
	  font-family: "fontello";
	  font-style: normal;
	  font-weight: normal;
	  speak: none;
	  display: inline-block;
	  text-decoration: inherit;
	  width: 1em;
	  margin-right: .2em;
	  text-align: center;
	  font-variant: normal;
	  text-transform: none;
	  line-height: 1em;
	  margin-left: .2em;
	}