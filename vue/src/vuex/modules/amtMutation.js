
// mutations 修改state

import * as types from '../mutationTypes';

// initial state
const state = {
  list: [],
  submitData: {}
};

const mutations = {

  [types.ADD_TO_CART] (state, data) {
    state.list.push(data);
  },

  [types.FORM_SUBMIT] (state, data) {
    state.submitData = data;
  }
};

export default {
  state,
  mutations
};
