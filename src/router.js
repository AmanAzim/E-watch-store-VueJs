import Vue from 'vue'
import Router from 'vue-router'

import WatchLists from './views/ProductLists.vue';
import Details from './views/Details.vue';
import Cart from './views/Cart/Cart.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: WatchLists,
    },
    {
      path:'/details',
      name:'details',
      component: Details,
    },
    {
      path:'/cart',
      name: 'cart',
      component: Cart
    },
    {
      path:'*',
      component: PageNotFound
    },
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
   // }
  ]
})
