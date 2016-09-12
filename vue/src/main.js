import Vue from 'vue';
import router from './router';
import Element from 'element-ui';
import App from './views/app.vue';
import store from './vuex/store';
import VueResource from 'vue-resource';

Vue.use(Element);
Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
