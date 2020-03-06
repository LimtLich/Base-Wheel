import Vue from 'vue'
import {
  HOST_ROOT,
} from '../api/config'
let vm = new Vue({})    //获取vue实例
export const state = () => ({
  token: '',
  user: {},
  route: '',
  search: {}
})

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_SEARCH(state, payload) {
    state.search = payload
  },
  SET_ROUTE(state, payload) {
    state.route = payload
  }
}

export const actions = {
  async nuxtServerInit({ dispatch, commit, getters, state }, { app, req, res }) {
    if (req.headers.cookie) {
      // let cookie = utils.net.cookie.parse(req.headers.cookie)
      // console.log(cookie)
    }
  },
  //loading
  async SHOW_LOADING({ commit, state, getters }, payload) {
    vm.$loading()
  },
  async CLOSE_LOADING({ commit, state, getters }, payload) {
    let loading = vm.$loading()
    loading.close()
  },
  //留言反馈
  async SEND_SMS({ commit, state, getters }, payload) {
    return await this.$axios.$post(`${HOST_ROOT}justice/feedback`, payload)
  }
}

