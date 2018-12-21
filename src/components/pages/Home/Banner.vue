<template>
  <div id="banner">
	<!-- {{banners}} -->
	<mt-swipe :auto="4000">
  <mt-swipe-item v-for='(item,index) in banners' :key='index'>
		<a :href="item.url">
			<img :src="root+item.imgPath" alt="">
		</a>
		
	</mt-swipe-item>
  
</mt-swipe>

  </div>
</template>

<script>
import {Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	


export default {
  name: 'banner',
  components:{
    
  },
  data(){
    return{
		banners:[],
		root:'http://10.9.48.220:3001'
    }
  },
	methods:{
		initData(){
		
			let url='tyzhk/home/getBanner';
		this.$axios.get(url)
		.then((res)=>{
			// console.log(res)
			this.banners=res.data
		
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

<style scoped lang="less">
@import url('../../../style/main.less');
	#banner{
		.w(375);
		.h(156);
		img{
			.w(375);
			.h(156);
		}
	}
</style>
