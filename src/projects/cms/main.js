/**
 * Created by LuJunJian on 2020/6/10
 * main
 */
import Vue from 'vue'
import 'normalize.css/normalize.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'

//公共icons
import '$common/icons'
//本项目icons
import './icons'

import '$cms/utils/element-ui.js'

//所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

// Vue.use(ElementUI)

// 图片懒加载
Vue.use(VueLazyLoad, {
  // error: require('@/assets/404_images/404_cloud.png'),
  // loading: require('@/assets/404_images/404_cloud.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
