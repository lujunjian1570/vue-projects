const BASE_API = {
  // 登录
  login: {
    method: 'post',
    url: '/vue-admin-template/user/login'
  },
  // 退出
  logout: {
    method: 'post',
    url: '/vue-admin-template/user/logout'
  },
  // 获取用戶信息
  getInfo: {
    method: 'get',
    url: '/vue-admin-template/user/info'
  },
  // 获取table列表
  getTableList: {
    method: 'get',
    url: '/vue-admin-template/table/list'
  }
}
export default BASE_API
