<template>
  <div class="home">
    <h1>
      {{msg}}
    </h1>
    <img alt="Vue logo" src="../../assets/images/logo.png">
    <about></about>
  </div>
</template>

<script>
  import About from '../../components/about'
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
