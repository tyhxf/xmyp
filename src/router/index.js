import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from 'pages/Home/Home'
import Categray from 'pages/Categray/Categray'
import My from 'pages/My/My'
import Shopcar from 'pages/Shopcar/Shopcar'
import Taste from 'pages/Taste/Taste'
import Err from '@/components/common/Err'
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
      path: '/taste',
      component: Taste,
    },
    {
      path: '/shopcar',
      component: Shopcar,
    },
    {
      path: '/my',
      component: My,
    },
		{
			path:'/notfind',
			component:Err,
			},
			
			{path:'**',redirect:'/notfind'}
  ]
})
