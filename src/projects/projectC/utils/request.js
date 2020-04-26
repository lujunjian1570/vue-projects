import axios from 'axios'
import { Loading, MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 内存中正在请求的数量
let loadingNum = 0

let loading

// 开始的loading
function startLoading() {
  if (loadingNum === 0) {
    loading = Loading.service({
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
  Message({
    message: msg,
    type: 'error',
    duration: 3 * 1000
  })
}

// request interceptor
service.interceptors.request.use(
  config => {
    // 发起请求前做些什么
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      startLoading()
    }

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  err => {
    // 请求错误
    promptMessage(err)
    return Promise.reject(err)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    endLoading()
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code === 20000) {
      promptMessage(res.message)

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
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
