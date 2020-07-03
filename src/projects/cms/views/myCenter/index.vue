/**
* Created by LuJunJian on 2020/4/29
* myCenter
*/
<template>
  <div class="home">
    <h1 class="h1-msg">
      {{msg}}
    </h1>
    <p>
      获取上个页面传递的参数：{{ this.$route.query.userId }}
    </p>
    <img v-lazy="picUrl" class="item-pic">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '我的中心',
        picUrl: 'https://img.ygzykj.com/pic/uniformpic/4f44cc8223aa491396e3eddf266f6f5e.jpg!m1300x380.jpg'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .h1-msg{
    color: $color333;
  }
  .item-pic{
    width: 20%;
  }
</style>