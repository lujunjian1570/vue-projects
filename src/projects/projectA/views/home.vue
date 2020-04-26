<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="欢迎进入项目A范畴"/>
    <apply-drawer :list="list"></apply-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '$a/components/home.vue'
import ApplyDrawer from '$project/components/apply-drawer';

export default {
  name: 'home',
  components: {
    ApplyDrawer,
    Home
  },
  data(){
    return {
      list:[{name:'项目A',desc:'项目A描述抽屉组件'}]
    }
  }
}
</script>
