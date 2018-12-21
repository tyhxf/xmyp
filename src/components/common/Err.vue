<template>
	<div id='header'>
		当前页面不存在，
		<span @click='goHome'>点击跳转回首页</span>
	</div>
</template>

<script>
export default{
	name:'Header',
	data(){
		return {
			msg : 'header 页面'
		}
	},
	methods:{
		goHome(){
            setTimeout(()=>{
            	this.$router.push('/home')
            }, 3000);
			
		}
	},
	mounted(){
		console.log(this);
	}
}
</script>

<style lang="less" scoped>
span{
	color:skyblue;
}	
</style>