<template>
  <div>
    about组件<br>
    <svg-icon icon-class="user" class-name="svg-color"/>
    <svg-icon icon-class="link" class-name="svg-color"/>
    <div>
      vuex测试--》 price:{{ price }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'price'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .svg-color {
    color: red;
    width: 50px;
    height: 50px;
  }
</style>