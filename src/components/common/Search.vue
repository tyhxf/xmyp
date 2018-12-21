<template>
<div id="switch">
	<img src="../../../static/fdj.png" alt="">
	<input id="inpu" type="text" placeholder="搜一搜">
</div>
</template>

<script>

	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../style/main.less');
	#switch{
		display: flex;
		.h(28);
		width:100%;
		background-color:@hui;
		// align-items:center;
		align-items:center; 
		// justify-content:center ; 
		
		#inpu{
			background-color:transparent;
			border: none;
		}
		img{
			.w(13);
			.h(13);
			.m_l(6);
		}
	}

</style>
