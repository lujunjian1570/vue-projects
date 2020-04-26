import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function selectThemeList(params) {
  return request({
    url: '/template/selectThemeList.do',
    method: 'get',
    params
  })
}

export function getUser(params) {
  return request({
    url: '/user/getUser/1',
    method: 'get',
    params
  })
}
