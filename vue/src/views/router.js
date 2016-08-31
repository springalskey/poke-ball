import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from './home/home.vue';
import Item from './order/item/item.vue';

const Child = { template: '<div>Child</div>' };

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      children: [
        { path: 'child', component: Child, name: 'child' }
      ]
    },
    { path: '/item/:id', component: Item, name: 'item' }
  ]
});
