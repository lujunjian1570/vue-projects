import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import defaultSettings from '@/settings'
import Vue from 'vue'

// NProgress配置
NProgress.configure({ showSpinner: true })

const _this = Vue.prototype

// 白名单
const whiteList = ['/login', '/test1', '/test2']

router.beforeEach(async(to, from, next) => {
  // 加载进度条
  NProgress.start()

  // 设置title
  const title = defaultSettings.title
  const pageTitle = to.meta.title
  document.title = pageTitle ? `${pageTitle} - ${title}` : title

  // 确定用户是否已登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果登录了跳转到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          await store.dispatch('user/getInfo').then(res => {
            store.dispatch('GenerateRoutes').then(accessRoutes => {
              // 生成可访问的路由表
              router.addRoutes(accessRoutes) // 动态添加可访问路由表
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
            })
          })

          // next()
        } catch (error) {
          // 移除token，跳转到登录页
          await store.dispatch('user/resetToken')
          _this.$message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单直接进入
      next()
    } else {
      // 没有访问权限的页面重定向到登录页
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
