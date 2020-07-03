const state = {
  price: 0
}
const mutations = {
  CHANGE_PRICE: (state, price) => {
    state.price = price
  }
}
const actions = {
  changePrice({ commit }, price) {
    commit('CHANGE_PRICE', price)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
