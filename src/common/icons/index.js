/**
 * Created by LuJunJian on 2020/4/28
 * 公共的SVG矢量图
 */
import Vue from 'vue'
import SvgIcon from '$common/components/SvgIcon'// svg component

// 全局注册组件
Vue.component('svg-icon', SvgIcon)

const req = require.context(
  // 其组件目录的路径
  '$common/icons/svg',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.svg$/
)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
