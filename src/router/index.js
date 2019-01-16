import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Register from '@/components/Register'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path : '/register',
      name : 'Register',
      component: Register
    },
    {
      path : '*',
      name : '404',
      component : NotFound
    }
  ]
})
