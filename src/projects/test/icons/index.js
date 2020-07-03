import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// 全局注册组件
Vue.component('svg-icon', SvgIcon)

const req = require.context(
  // 其组件目录的相对路径
  './svg',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.svg$/
)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
