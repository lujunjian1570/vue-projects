/**
 * Created by LuJunJian on 2020/4/28
 * 路由页面
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('$cms/views/home'),
  },
  {
    path: '/my-center',
    name: 'myCenter',
    component: () => import('$cms/views/myCenter'),
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router

