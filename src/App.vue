<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <!-- <Home></Home> -->
  </div>
</template>

<script>

import Home from './components/pages/Home/Home'

export default {
  name: 'App',
  components:{
    Home
  },
  data(){
    return{

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
