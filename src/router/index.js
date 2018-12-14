import Vue from 'vue'
import Router from 'vue-router'

import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      name: 'msite',
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      name: 'search',
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      name: 'order',
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      name: 'profile',
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
