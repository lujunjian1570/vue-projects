<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="欢迎进入项目B范畴"/>
    <apply-drawer :list="list"></apply-drawer>
  </div>
</template>

<script>
import Home from '$b/components/home.vue'
import ApplyDrawer from '$project/components/apply-drawer';

export default {
  name: 'home',
  components: {
    ApplyDrawer,
    Home
  },
  data(){
    return {
      list:[{name:'项目B',desc:'项目B描述抽屉组件'},{name:'共有组件',desc:'使用没问题'},{name:'提出问题',desc:'打包时,未使用的组件会不会打包进入项目中,却如何检验'}]
    }
  }
}
</script>
