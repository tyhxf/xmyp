<template>
  <div id="Home">
		{{msg}}
		{{msg}}
     <Banner></Banner>
  </div>
</template>

<script>

import Banner from './Banner.vue'

export default {
  name: 'Home',
  components:{
		Banner
  },
  data(){
    return{
        msg:'home'
    }
  }
}

</script>

<style>

</style>
