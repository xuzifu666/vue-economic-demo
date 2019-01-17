import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import NotFound from '@/components/404'
import Login from '@/components/Login'
import Index from '@/components/Main'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path : '/register',
      name : 'Register',
      component: Register
    },
    {
      path : '/login',
      name : 'Login',
      component : Login
    },
    {
      path : '/index',
      name : 'index',
      component : Index
    },
    {
      path : '*',
      name : '404',
      component : NotFound
    }
  ]
})
