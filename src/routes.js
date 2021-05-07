// Default
import Vue from 'vue'
import Router from 'vue-router'

// во Vue, в метод use(), передаётся роутер
Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import About from '@/pages/About'
import Test from '@/pages/Test'

// Routering
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})