<template>
  <div>
    about组件<br>
    <svg-icon icon-class="user" class-name="svg-color"/>
    <svg-icon icon-class="link" class-name="svg-color"/>
<<<<<<< HEAD
    <div>
      vuex测试--》 price:{{ price }}
    </div>
=======
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
  </div>
</template>

<script>
<<<<<<< HEAD
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'price'
      ])
    }
=======
  export default {

>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
  }
</script>

<style lang="scss" scoped>
  .svg-color {
    color: red;
    width: 50px;
    height: 50px;
  }
</style>