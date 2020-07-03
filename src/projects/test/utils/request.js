import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000 // 超时时间
})

const _this = Vue.prototype

// 内存中正在请求的数量
let loadingNum = 0

let loading

// 开始的loading
function startLoading() {
  if (loadingNum === 0) {
    loading = _this.$loading({
      lock: true, // 锁定屏幕的滚动
      text: '拼命加载中...',
      background: 'rgba(255,255,255,0.5)'// 遮罩背景色
    })
  }
  // 请求数量加1
  loadingNum++
}

// 结束的loading
function endLoading() {
  // 请求数量减1
  loadingNum--
  if (loadingNum <= 0) {
    loading.close()
  }
}

// 提示信息
function promptMessage(msg) {
  _this.$message({
    message: msg,
    type: 'error',
    duration: 3 * 1000
  })
}

// request拦截器
service.interceptors.request.use(
  config => {
    // 发起请求前做些什么
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      startLoading()
    }

    if (store.getters.token) {
      // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  err => {
    // 请求错误
    promptMessage(err)
    return Promise.reject(err)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    endLoading()
    const res = response.data

    if (res.code !== 20000) {
      promptMessage(res.message)

      // 401:未登录;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        _this.$msgbox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  err => {
    // 响应错误
    endLoading()
    promptMessage(err)
    return Promise.reject(err)
  }
)

export default service
