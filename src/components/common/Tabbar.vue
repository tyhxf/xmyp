<template>
<div id="tabbar">
	<ul>
		<router-link
		active-class='sel'
		v-for='(item,index) in navlist'
		:to='item.path'
		:key='index'
		tag='li'>
			{{item.title}}
		</router-link>
	</ul>
</div>
</template>

<script>

	export default {
		name:'tabbar',
		data() {
			return {
				navlist:[{title:'首页',path:'/home',icon:''},
					 {title:'分类',path:'/categray',icon:''},
					 {title:'品味',path:'/taste',icon:''},
					 {title:'购物车',path:'/shopcar',icon:''},
					 {title:'个人',path:'/my',icon:''}]
			};
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../style/main.less');
	#tabbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		ul{
		.w(375);
		background:@hui;
		display: flex;
		border-top:1px solid #e3e3e3;
		li{
		  
		  color:@tabDefaultColor;
           width: 20%;
           .h(60);
					 width:100%;
           .lh(60);
           text-align:center;
           .fs(16);
					 background:@hui;
		}
		.sel{
			color:black;
		}
	}
	}
</style>
