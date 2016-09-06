import Vue from 'vue';
import Router from 'vue-router';
import routes from './route';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: require('./layout/layout.vue'),
    name: 'layout',
    children: routes
  }]
});

router.beforeEach((route, redirect, next) => {
  console.log(route);
  next();
});

export default router;
