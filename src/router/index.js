import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import NotFound from '@/components/404'
import Login from '@/components/Login'
import Index from '@/components/Main'
import Home from '@/components/Home'
import UserInfo from '@/components/UserInfo'
import FoundList from '@/components/FoundList'


Vue.use(Router)


var router = new Router({
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
      component : Index,
      children : [
        {
          path : '',
          component : Home
        },
        {
          path : 'home',
          name : 'home',
          component: Home
        },
        {
          path : 'userinfo',
          name : 'userinfo',
          component : UserInfo
        },
        {
          path : 'foundList',
          name : 'foundList',
          component : FoundList
        }
      ]
    },
    {
      path : '*',
      name : '404',
      component : NotFound
    }
  ]
});

router.beforeEach((to,from,next)=>{
  var isLogin = false;
  if(localStorage.getItem('token') != undefined){
    isLogin = true;
  }
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    isLogin ? next() : next('/login');
  }

});

export default router;
