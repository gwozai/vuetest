// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    login (state) {
      state.isLoggedIn = true
    },
    logout (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    login ({ commit }, credentials) {
      // Call your API to authenticate
      // On success, commit the mutation
      commit('login')
    },
    logout ({ commit }) {
      // Call your API to logout
      // On success, commit the mutation
      commit('logout')
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})
