import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/test'
import about from '@/components/about'
import document from '@/components/document'
import user from '@/components/user'
import notFound from '@/components/404'

import hobby from '@/views/hobby'
import study from '@/views/study'
import work from '@/views/work'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    // console.log(savePosition)
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
      alias: '/home',
      meta: {
        index: 0
      }
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
          component: study,
          meta: {
            index: 2
          }
        },
        {
          path: 'hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/document',
      beforeEnter (to, from, next) {
        window.document.title = 'zzzzzrd'
        next()
      },
      component: document,
      meta: {
        index: 1
      }
    },
    {
      path: '/user/:tip?/:id?',
      component: user,
      meta: {
        index: 3
      }
    },
    {
      path: '*',
      component: notFound
      // redirect: '/home'
      // redirect: 'home'
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   console.log(to.meta.index)
//   if (to.meta.index === 1) {
//     next('/notFound')
//   } else {
//     next()
//   }
// })
// router.afterEach((to, form) => {
//   console.log('after')
// })

export default router
