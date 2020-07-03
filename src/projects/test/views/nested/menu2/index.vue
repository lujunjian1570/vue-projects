<template>
  <div>
    Money: {{ getMoney }}
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'// 辅助函数
export default {
  computed: {
    // getters常规引用方式：
    getMoney() {
      return this.$store.getters.getMoney
    },
    // getters使用mapGetters方式,有2种方式:
    // 1.使用对象的方式引用,这里可以同时引用多个
    // ...mapGetters({ getMoneyFromState: 'getMoney', getMoneyFromState2: 'getMoney2' })
    // 使用时这样调用
    // this.getMoneyFromState

    // 2.使用名称的方式引用
    ...mapGetters(['getMoney', 'getMoney2'])
    // 使用时这样调用
    // this.getMoney
  },
  methods: {
    ...mapState([
      'count',
      'price'
    ]),
    ...mapMutations([
      'updatePrice',
      'updateCount'
    ]),
    ...mapActions([
      'updateOrderInfo'
    ]),
    getPrice() {
      // state常规获取方式
      // this.$store.state.price
      // state使用mapState时这样调用
      // this.count
    },
    inputPrice(price) {
      // mutations常规调用方式：
      this.$store.commit('updatePrice', price)
      // 使用mapMutations方式：
      this.updatePrice(price)
    },
    getMyMoney() {
      // actions常规方式,利用dispatch
      this.$store.dispatch('updateOrderInfo', { price: this.price, count: this.count })
    },
    getMyMoney2() {
      // mapAction方式
      this.updateOrderInfo({ price: this.price, count: this.count })
    }
  }
}
</script>
