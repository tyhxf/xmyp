// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import reset from './style/reset .css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
let root='http://10.9.48.220:3001'
Vue.use(MintUI)

Vue.config.productionTip = false

Axios.interceptors.response.use(function(response){
  return response.data;
},function(error){
  return Promise.reject(error);
})
Vue.prototype.$axios=Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,root,
  components: { App },
  template: '<App/>'
})
