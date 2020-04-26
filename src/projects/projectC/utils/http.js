import axios from 'axios'
import { Loading, MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import service from '@/utils/api.js'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 包裹请求方法的容器
const Http = {}

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

// 请求格式/参数的统一
for (const key in service) {
  const api = service[key] // url method
  // async 作用：避免进入回调地狱
  Http[key] = async function(
    params, // 请求参数
    isFormData = false, // 标识是否是form-data请求
    config = {} // 配置参数
  ) {
    let newParams = {}

    //  content-type是否是form-data的判断
    if (params && isFormData) {
      newParams = new FormData()
      for (const i in params) {
        newParams.append(i, params[i])
      }
    } else {
      newParams = params
    }
    // 不同请求的判断
    let response = {} // 请求的返回值
    if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
      try {
        response = await instance[api.method](api.url, newParams, config)
      } catch (err) {
        response = err
      }
    } else if (api.method === 'delete' || api.method === 'get') {
      config.params = newParams
      try {
        response = await instance[api.method](api.url, config)
      } catch (err) {
        response = err
      }
    }
    return response // 返回响应值
  }
}

// 拦截器的添加
// 请求拦截器
instance.interceptors.request.use(config => {
  // 发起请求前做些什么
  startLoading()
  if (store.getters.token) {
    config.headers['Authorization-Token'] = getToken()
  }
  return config
}, (err) => {
  // 请求错误
  promptMessage(err)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  endLoading()
  // 请求成功
  const res = response.data
  if (res.code !== 20000) {
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
    return res.data
  }
}, (err) => {
  // 响应错误
  endLoading()
  promptMessage(err)
})

export default Http
