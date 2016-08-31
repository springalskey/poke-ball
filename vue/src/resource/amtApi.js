import Vue from 'vue';

export default {

  userResource () {
    return Vue.resource('user{/id}');
  },

  businessResource () {
    return Vue.resource('business');
  }
};
