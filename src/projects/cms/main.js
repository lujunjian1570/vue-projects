/**
 * Created by LuJunJian on 2020/4/28
 * main
 */
import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import './styles/index.scss'
import App from './App.vue'
import router from './router'

//公共icons
import '$common/icons'
//本项目icons
import './icons'

Vue.use(ElementUI)

// 图片懒加载
Vue.use(VueLazyLoad, {
  // error: require('@/assets/404_images/404_cloud.png'),
  // loading: require('@/assets/404_images/404_cloud.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
