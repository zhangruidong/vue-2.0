import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/test'
import about from '@/components/about'
import document from '@/components/document'
import notFound from '@/components/404'

import hobby from '@/views/hobby'
import study from '@/views/study'
import work from '@/views/work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    console.log(savePosition)
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      alias: '/home'
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: 'work',
          component: work
        },
        {
          path: '/',
          component: study
        },
        {
          path: 'hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/document',
      component: document
    },
    {
      path: '*',
      component: notFound
      // redirect: '/home'
      // redirect: 'home'
    }
  ]
})
