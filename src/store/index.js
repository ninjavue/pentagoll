import { createStore } from 'vuex'
import info from './modules/info'
import news from './modules/new'
import clear from './modules/clear'
import admin from './modules/admin'
export default createStore({
  state: {
    url:'http://18.181.217.30:8080/api/v1'
  },
  getters: {
    url(state){
      return state.url
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    info,news, clear,admin
  }
})
