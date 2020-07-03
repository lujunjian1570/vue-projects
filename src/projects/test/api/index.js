import request from '@/utils/request'

const BASE_API = {
  login(data) {
    return request({
      url: '/vue-admin-template/user/login',
      method: 'post',
      data
    })
  },

  getInfo(token) {
    return request({
      url: '/vue-admin-template/user/info',
      method: 'get',
      params: { token }
    })
  },

  logout() {
    return request({
      url: '/vue-admin-template/user/logout',
      method: 'post'
    })
  },
  // 获取左侧导航数据
  getNavList(params) {
    return request({
      url: '/vue-admin-template/table/getNavList',
      method: 'get',
      params
    })
  },
  getArticleList(params) {
    return request({
      url: '/vue-admin-template/article/list',
      method: 'get',
      params
    })
  },
  selectThemeList(params) {
    return request({
      url: '/template/selectThemeList.do',
      method: 'get',
      params
    })
  }
}
export default BASE_API
