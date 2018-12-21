<template>
  <div id="ShopCar">
      {{msg}}
<TabBar></TabBar>
  </div>
</template>

<script>

import TabBar from 'common/Tabbar.vue'

export default {
  name: 'ShopCar',
  components:{
		TabBar
  },
  data(){
    return{
        msg:'ShopCar'
    }
  }
}

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
