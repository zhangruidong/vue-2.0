import Vue from 'vue'
import Router from 'vue-router'
import undone from '@/components/undone'
import done from '@/components/done'
import all from '@/components/all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'undone',
      component: undone
    },
    {
      path: '/done',
      name: 'done',
      component: done
    },
    {
      path: '/all',
      name: 'all',
      component: all
    }
  ]
})
