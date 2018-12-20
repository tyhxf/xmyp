import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
    }, 
    {
      path: '/categray',
      component: Categray,
    },
    {
      path: '/state',
      component: State,
    },
    {
      path: '/shopcar',
      component: Shopcar,
    },
    {
      path: '/my',
      component: My,
    }
  ]
})
