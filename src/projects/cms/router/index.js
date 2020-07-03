/**
<<<<<<< HEAD
 * Created by LuJunJian on 2020/6/10
 * 路由页面
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '$cms/layout'

const routes = [
  /*{
    path: '/',
    name: 'home',
    component: () => import('$cms/views/home'),
  },*/
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('$cms/views/home'),
        meta: { title: 'Home', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/my-center',
    component: Layout,
    children: [
      {
        path: '/my-center',
        name: 'MyCenter',
        component: () => import('$cms/views/myCenter'),
        meta: { title: 'MyCenter', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/404',
    component: Layout,
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('$cms/views/404'),
        meta: { title: '404', icon: 'dashboard' }
      }
    ]
  },
  /*{
=======
 * Created by LuJunJian on 2020/4/28
 * 路由页面
 */
import Vue from 'vue'
// import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('$cms/views/home'),
  },
  {
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
    path: '/my-center',
    name: 'myCenter',
    component: () => import('$cms/views/myCenter'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('$cms/views/404'),
<<<<<<< HEAD
  },*/

=======
  },
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7

  //必须放到最后面
  { path: '*', redirect: '/404', hidden: true }
]

<<<<<<< HEAD
const router = new Router({
  mode: 'history',
=======
const router = new VueRouter({
  // mode: 'history',
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
  routes,
  scrollBehavior(to, from, savedPosition) {
    // keep-alive 返回缓存页面后记录浏览位置
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    // 异步滚动操作
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  }
})

export default router

