import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import layout from '@/components/layout'
import gutter from '@/components/gutter'
import mark from '@/components/mark'
import page from '@/components/page'
import tip from '@/components/tooltip'
import jsonp from '@/components/jsonp'

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
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/mark',
      name: 'mark',
      component: mark
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/tip',
      name: 'tip',
      component: tip
    },
    {
      path: '/jsonp',
      name: 'jsonp',
      component: jsonp
    }
  ]
})
