/**
<<<<<<< HEAD
 * Created by LuJunJian on 2020/6/10
=======
 * Created by LuJunJian on 2020/4/28
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
 * main
 */
import Vue from 'vue'
import 'normalize.css/normalize.css'
<<<<<<< HEAD
// import ElementUI from 'element-ui'
=======
import ElementUI from 'element-ui'
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
// import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store'
=======
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7

//公共icons
import '$common/icons'
//本项目icons
import './icons'

<<<<<<< HEAD
import '$cms/utils/element-ui.js'

//所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

// Vue.use(ElementUI)
=======
Vue.use(ElementUI)
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7

// 图片懒加载
Vue.use(VueLazyLoad, {
  // error: require('@/assets/404_images/404_cloud.png'),
  // loading: require('@/assets/404_images/404_cloud.png')
})

Vue.config.productionTip = false

new Vue({
  router,
<<<<<<< HEAD
  store,
=======
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
  render: h => h(App)
}).$mount('#app')
