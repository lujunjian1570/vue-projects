/**
* Created by LuJunJian on 2020/4/28
* Home
*/
<template>
  <div class="home">
    <h1 class="h1-msg">
      {{msg}}
    </h1>
    <img alt="Vue logo" src="../../assets/images/logo.png">
    <about></about>
    <router-link to="/my-center">a连接形式跳转到myCenter</router-link><br>
    <el-button @click="goToMyCenter">方法点击跳转到myCenter</el-button>
  </div>
</template>

<script>
  import About from '$cms/components/about'
  export default {
    components: {
      About
    },
    data() {
      return {
        msg: '欢迎进入cms'
      }
    },
    methods: {
      //跳转到myCenter
      goToMyCenter () {
        // 字符串
        // this.$router.push('/my-center')
        // 对象
        // this.$router.push({ path: '/my-center' })
        // 命名的路由
        this.$router.push({ path: '/my-center', query: { userId: 'abcdefg' }})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .h1-msg{
    color: $color333;
  }
</style>
