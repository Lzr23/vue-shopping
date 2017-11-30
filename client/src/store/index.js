import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickName: '',   // nickName用户名
    cartCount: 0    // 购物车数量
  },
  mutations: {
    // 更新用户名
    updateUserInfo (state, nickName) {
      state.nickName = nickName
    },
    // 更新购物车数量
    updateCartCount (state, cartCount) {
      state.cartCount += parseInt(cartCount)
    },
    //  清空购物车
    clearCartCount (state) {
      state.cartCount = 0
    }
  }
})
