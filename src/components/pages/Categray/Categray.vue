<template>
  <div id="Categray">
      {{msg}}
			<TabBar></TabBar>
  </div>
</template>

<script>

import TabBar from 'common/Tabbar.vue'

export default {
  name: 'Categray',
  components:{
		TabBar
  },
  data(){
    return{
        msg:'Categray'
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
