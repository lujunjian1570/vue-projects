/**
* Created by LuJunJian on 2020/6/10
* Home
*/
<template>
  <div class="home">
    <h1 class="h1-msg">
      {{msg}}
    </h1>
    <img alt="Vue logo" src="../../assets/images/logo.png"><br><br>
    <about></about><br>
    <router-link to="/my-center">a连接形式跳转到myCenter</router-link><br>
    <router-link :to="{path:'/my-center',query:{userId:'kjsadj'}}">a连接形式跳转到myCenter（带参数）</router-link><br>
    <el-button @click="goToMyCenter">方法点击跳转到myCenter</el-button><br><br>
    <el-button @click="changePrice(1)">改变price</el-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import About from '$cms/components/about'
  export default {
    components: {
      About
    },
    computed: {
      ...mapGetters([
        'price'
      ])
    },
    data() {
      return {
        msg: '欢迎进入cms系統'
      }
    },
    methods: {
      //跳转到myCenter
      goToMyCenter () {
        // 字符串
        // this.$router.push('/my-center')
        // 对象
        // this.$router.push({ path: '/my-center' })
        // 带参数
        this.$router.push({ path: '/my-center', query: { userId: 'abcdefg' }})
      },
      //更改价格
      changePrice (data) {
        let price = data + this.price
        this.$store.dispatch('cart/changePrice',price).then(() => {
          this.$message({
            message: '价格更改成功！',
            type: 'success',
            duration: 3 * 1000
          })
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .h1-msg{
    color: $color333;
  }
</style>
