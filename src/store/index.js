import Vue from 'vue'
import Vuex from 'vuex'

// во Vue, в метод use(), передаётся плагин vuex
Vue.use(Vuex)

// modules
import test from './test'

// обращаемся к Vuex.Store
export default new Vuex.Store({
  modules: { test }
})