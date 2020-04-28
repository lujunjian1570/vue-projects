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
    }
  }
</script>
<style lang="scss" scoped>
  @import '~$cms/styles/variables.scss';
  .h1-msg{
    color: $color333;
  }
</style>
