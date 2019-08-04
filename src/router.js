import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login.vue'
import Registered from './views/registered/registered.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    }
  ]
})
