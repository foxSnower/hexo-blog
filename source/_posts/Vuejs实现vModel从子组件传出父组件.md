
---
title: Vuejs实现vModel从子组件传出父组件 获取焦点触发事件

keywords: Vuejs v-model 子组件传出父组件 获取焦点触发事件

categories: note

tags: 
 - VUE

date: 2017-07-24 17:53
---


本章的笔记与Vuejs实现模糊查询来自同一个功能点，这是关于把Input封装成组件的过程。并带有获取焦点触发事件的功能

```html 
<template>
	<div class="form">
		<div class="lable">
			<label>{{label}}</label>
		</div>
		<div class="side-r">
			<div class="side-cont">
				<input v-if="type=='text'" ref="input"  :name="name" :value="value" type="text" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="$emit('input', $event.target.value)"  @focus="focusInput">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'input',
		props: {
			value: '',
			label: {
				type: String,
				default: 'Label'
			},
			type: {
				type: String,
				default: 'text'
			},
			readonly:{
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			name:{
				type: String,
				default: 'text'
			}
		},
		data() {
			return {
				placeholder: '请输入' + this.label
			}
		},
		methods:{
			focusInput(){
				this.$emit('focusInput');
			}
		}
	}
</script>
<style lang="stylus" scoped="scoped">
	@import '../style/var';
	.form {
		position: relative;
		overflow: hidden;
		padding: 13px 10px;
		font-size: $normalSize;
		input{
			 width: 100%;
		}
		+.form:before {
			content: " ";
		    position: absolute;
		    left: 0;
		    top: 0;
		    right: 0;
		    height: 1px;
		    border-top: 1px solid $bordercolor;
		    color: $bordercolor;
		    transform-origin: 0 0;
		    transform: scaleY(0.5);
			margin-left: 10px;
		}
		&:last-child {
			&:after {
				content: " ";
			    position: absolute;
			    left: 0;
			    bottom: 0;
			    right: 0;
			    height: 1px;
			    border-bottom: 1px solid $bordercolor;
			    color: $bordercolor;
			    transform-origin: 0 100%;
			    transform: scaleY(0.5);
			}
		}
	}
	.lable {
		position: relative;
		float: left;
		width: $labelLength;
		margin-right: -($labelLength);
	}
	.side-r {
		float: right;
		width: 100%;
	}
	.side-cont {
		margin-left: $labelLength;
	}
</style>
```