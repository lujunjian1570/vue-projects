import Vuex from 'vuex'

export default new Vuex.Store({
  state: {// 作用：全局变量存放的地方
    count: 0,
    price: 5.5,
    metaInfo: {
      title: '这是一个标题',
      keywords: 'vuex,vue.js,vue-router'
    }
  },
  getters: {// 作用：相当于计算属性
    getMoney: function(state) {
      return state.count * state.price
    },
    getMoney2: function(state) {
      return state.count * state.price
    }
  },
  mutations: {
    // 作用：用于定义改变state中变量的方法。
    // 每一个mutation方法带两个参数,state和入参，mutation必须同步执行
    updatePrice(state, price) {
      state.price = price
    },
    updateCount(state, count) {
      state.count = count
    }
  },
  actions: {
    // 作用：将mutation里面处理数据的方法变成可异步执行的方法，
    // 一个action中可调用多个mutation方法
    updateOrderInfo(context, info) {
      // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
      // 因此你可以调用 context.commit 提交一个 mutation
      context.commit('updatePrice', info.price)
    },
    updateOrderInfo1({ commit }, info) { // 参数解构 来简化代码
      commit('updateCount', info.count)
    }
  }
})

