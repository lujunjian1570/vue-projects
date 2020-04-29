/**
 * Created by LuJunJian on 2020/4/28
 * 路由页面
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '$cms/views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

