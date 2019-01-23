<template>
  <div id="Categray">
		<div class="top">
			<div class='search'>
				<Search ></Search>
			</div>
		</div>
		<div class="box">
			<div class="left">
				<ul>
					<li 
					v-for="(item,index) in selnav"
					@click='sel(item.class)'
					:class="selected==item.class?'navsel':''"

					>{{item.name}}</li>
				</ul>
			</div>
			<div class="right">
				<List></List>
			</div>
		</div>
			<TabBar></TabBar>
  </div>
</template>

<script>
import List from './List.vue'
import TabBar from 'common/Tabbar.vue'
import Search from 'common/Search.vue'
export default {
  name: 'Categray',
  components:{
		TabBar,Search,List
  },
  data(){
    return{
			selected:'categray1',
        	selnav:[
			{name:'家居家纺',class:'categray2',type:'居家',img:'aa1'},
			{name:'家用电器',class:'categray3',type:'手机',img:'aa2'},
			{name:'只能家庭',class:'categray4',type:'电器',img:'aa3'},
			{name:'餐厅厨房',class:'categray5',type:'居家',img:'aa1'},
			{name:'服装配饰',class:'categray6',type:'手机',img:'aa2'},
			{name:'鞋靴箱包',class:'categray7',type:'电器',img:'aa3'},
			{name:'手机电脑',class:'categray8',type:'手机',img:'aa1'},
			{name:'电视影音',class:'categray9',type:'手机',img:'aa2'},
			{name:'运动健康',class:'categray10',type:'居家',img:'aa3'},
			{name:'出行户外',class:'categray11',type:'电器',img:'aa1'},
			{name:'洗护美妆',class:'categray12',type:'手机',img:'aa2'},
			{name:'日杂文创',class:'categray13',type:'手机',img:'aa3'},
			{name:'母婴亲子',class:'categray14',type:'居家',img:'aa1'},
			{name:'饮食酒水',class:'categray15',type:'电器',img:'aa2'},
			]
    }
  },
	methods:{
		sel(item){
				this.selected=item
		}
	}
}

</script>

<style lang="less" scoped>
	@import url('../../../style/main.less');
	.top{
		display:flex;
		.w(375);
		.h(45);
		align-items:center;
		justify-content: center;

		.search{
			.w(355);
		}
		}
		.box{
			.top(45);
		  .bottom(60);
		  .w(375);
			.h(572);
		   border: 1px solid red;
			 display:flex;
			 .left{
				 	overflow-y: scroll;
				  .w(75);
          height: 100%;
          border-right:1px solid #D8d8D8;
          box-sizing: border; 
					 .fs(12);
					   ul{
          	li{
          		.w(75);
          		.h(40);
          		.lh(40);
          		text-align:center;
          		box-sizing:border;
          		border-left:2px solid #fff; 
          	}
          	.navsel{
          		border-left:2px solid rgb(132, 95, 63);
          		color:rgb(132, 95, 63); 
          	}
          }
			 }
			 .right{
				 flex: 1;
			 }
		}
</style>
