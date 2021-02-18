import Vue from 'vue'
import Vuex from 'vuex'

// Importing todos module
import todos from './modules/todos.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  todos
  }
})
