import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/components/home'
import user from '@/components/user'

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})

export default router
