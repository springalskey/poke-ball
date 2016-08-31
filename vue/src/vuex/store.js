import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import actions from './actions/index.js';
import moduels from './modules';
import * as getters from './getters';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: moduels,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
