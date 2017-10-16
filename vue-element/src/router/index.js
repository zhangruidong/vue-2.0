import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import gutter from '@/components/gutter'
import mark from '@/components/mark'
import page from '@/components/page'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'gutter',
      component: gutter
    },
    {
      path: '/mark',
      name: 'mark',
      component: mark
    },
    {
      path: '/page',
      name: 'page',
      component: page
    }
  ]
})
