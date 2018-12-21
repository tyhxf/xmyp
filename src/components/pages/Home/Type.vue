<template>
	<div id="type">
		<div class="head">
		<span>{{title}}</span>
		<span class="aa">>>更多</span>
		</div>
		<div class="center">

			<div class="box" v-for="(item,index) in list" :key='index'>
				<div class="tu">
					<img :src="root+item.imgPath" alt="">
				</div>	
				<span>{{item.name}}</span>
				<span>{{item.price}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				root:'http://10.9.48.220:3001'
			};
		},
		props:['title'],
		methods:{
			initData(){
				let url='/tyzhk/admin/proAdmin/typeFindProduct'
				console.log(this.title)
				this.$axios.post(url,{type:this.title})
				.then((res)=>{
					this.list=res.data
					
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
		this.initData()
	}
	}
</script>

<style lang="less" scoped>
	@import url('../../../style/main.less');
	#type{
		background:white;
		border-top:8px solid #e3e3e3 ;
	}
	#head{
		.m_t(8);
	}
	.head{
		.w(350);
		.h(43);
		.padding(0,10,0,15);
		display:flex;
		justify-content:space-between;
		align-items:center;
		.aa{
			color:rgb(153, 153, 153);
		}
	}
	.center{
		.w(355);
		
		display: flex;
		flex-wrap:wrap;
		justify-content:space-between;
		.padding(0 ,10,0,10);
		.box{
			display:flex;
			flex-direction: column;
			
			align-items: center;
			justify-content: center;
			
			.tu{
				.w(115);
				.h(122);
				background:@hui;
				img{
					.w(115);
					.h(122);
				}
			}
		}
	}
</style>
