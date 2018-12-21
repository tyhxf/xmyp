<template>
  <div id="Home">
		<div id="header">
			<div class='left'>
				<img src="../../../../static/logo-1.png" alt="">
			</div>
			<div class="center">1</div>
			<div class="right">
				<img src="" alt="">2
			</div>
		</div>
     <Banner></Banner>
		 <TabBar></TabBar>
  </div>
</template>

<script>

import Banner from './Banner.vue'
import TabBar from 'common/Tabbar.vue'
export default {
  name: 'Home',
  components:{
		Banner,TabBar
  },
  data(){
    return{
        msg:'home'
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
			}
		}
	}
</style>
