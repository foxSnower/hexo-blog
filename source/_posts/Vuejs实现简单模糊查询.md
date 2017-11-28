
---
title: Vuejs实现简单模糊查询

keywords: Vuejs 模糊查询 

categories: note

tags: 
 - VUE
date: 2017-07-24 17:43
---

最近所在的项目问卷调查里需要输入简单的文字，就能查询出相关的所有专营店，刚开始，还真不敢下手，不过写下来后发现也并没有辣么难！！！

Vuejs实现简单模糊查询


```html
<template>
	<div>
	<!--专营店模糊查询-->
	<x-input label="专营店" v-model="selectedDlrCode.shortName"></x-input>
	<div class="dlrcord-list form">
	<transition-group v-show="allDlrCodeListShow" name="fade" tag="ul">
		<li v-for="(item, index) in searchData" key="item.shortName" v-bind:data-index="index" @click="selectDlrCode(item.shortName,item.dlrCode)">{{ item.shortName }}</li>
	</transition-group>
	</div>
	<!--专营店模糊查询--> 
</div>
</template>
<script>
	import XInput from '@/components/Input';
	export default {
		data() {
			return {
				selectedDlrCode: {
					shortName: '',
					dlrCode: '',
					IsSelected: false
				}, //专营店
				dlrList: [],
			}
		},
		components: {
			XInput
		},
		watch: {
			selectedDlrCode: {
				handler: (val, oldVal) => {
					let _this = this;
					if(val.shortName == '') { //专营店表单清零后重新开启模糊查询
						val.dlrCode = '';
						val.IsSelected = false;
					}
				},
				deep: true
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.loadPage();
			})
		},
		methods:{
			loadPage(){
				//获取所有专营的
				api.getData([{
					type: types.FUZZY_SEARCH_DLRCODE,
					param: {
						dlrCode,
					}
				}]).then(res => {
					this.dlrList = res;
				})
			},
			//选择专营店
			selectDlrCode(shortName, dlrCode) {
				this.selectedDlrCode.shortName = shortName;
				this.selectedDlrCode.dlrCode = dlrCode;
				this.selectedDlrCode.IsSelected = true; //隐藏专营店列表
			},
		},
		computed{
			searchData() {
				let name = this.selectedDlrCode.shortName;
				let data = [];
				if(name) {
					this.dlrList.forEach((item, index) => {
						if(item.shortName.indexOf(name) !== -1) {
							data.push(item)
						}
					})
					return data;
				}
			},
			allDlrCodeListShow() {
				let IsSelected = this.selectedDlrCode.IsSelected;
				let shortName = this.selectedDlrCode.shortName;
				if(shortName && !IsSelected) {
					return true
				} else {
					return false
				}
			}
		}
	}
</script>
```
