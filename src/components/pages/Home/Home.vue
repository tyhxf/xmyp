<template>
  <div id="Home">
		<div id="header">
			<div class='left'>
				<img src="../../../../static/logo-1.png" alt="">
			</div>
			<div class="center"><Search></Search></div>
			<div class="right">
				<img src="../../../../static/meil.png" alt="">
			</div>
		</div>
  <Banner></Banner>
	<div id="news">
		<div v-for="(item,index) in list" :key='index'>
			<img :src="root+item.path" alt="">
			<span>{{item.name}}</span>
		</div>
	</div>	 
	<div class="foot end">
		<Type title='居家'></Type>
	  <Type title='家电'></Type>
	  <Type title='手机'></Type>
	</div>
	
	<TabBar></TabBar>
  </div>
</template>

<script>

import Banner from './Banner.vue'
import Type from './Type.vue'
import TabBar from 'common/Tabbar.vue'
import Search from 'common/Search.vue'
export default {
  name: 'Home',
  components:{
		Banner,TabBar,Search,Type
  },
  data(){
    return{
        list:[
					{name:'每日新品',path:'img1.png'},
					{name:'小米众筹',path:'img2.png'},
					{name:'限时抢购',path:'img3.png'},
					{name:'热销榜单',path:'img4.png'},
					{name:'有品市集',path:'img5.png'},
				],
				root:'http://10.9.48.220:3001/img/',
    }
  }
}

</script>

<style lang="less" scoped>
	@import url('../../../style/main.less');

	#header{
		.w(375);
		.h(38);
		// .lh(38);
		align-items:center; 
		display:flex;
		
		.left{
			.h(28);
			.w(76);
			img{
				.h(28);
				.w(76);
				.m_l(6);
			}
		}
		.center{
				.h(28);
				.w(259);
				
			}
			.right{
				.w(40);
				.h(28);
				
				img{
					.w(28);
					.h(28);
					.m_l(6);
				
				}
			}			
	}
	#news{
		.w(375);
		.h(85);
		display:flex;
		div{
			width: 20%;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			
		}
		img{
			.w(45);
			.h(45);
		}
	}
	.end{
		.m_b(80);
		// background: @hui;
	}
	
</style>
