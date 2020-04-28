/**
 * Created by LuJunJian on 2020/4/28
 * main
 */
import Vue from 'vue'
import 'normalize.css/normalize.css'
import './styles/base.scss'
import App from './App.vue'
import router from './router'

//设置title
document.title = 'cms'
//公共icons
import '$common/icons'
//本项目icons
import './icons'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
