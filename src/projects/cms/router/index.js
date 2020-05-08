/**
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
    path: '/my-center',
    name: 'myCenter',
    component: () => import('$cms/views/myCenter'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('$cms/views/404'),
  },

  //必须放到最后面
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  // mode: 'history',
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

