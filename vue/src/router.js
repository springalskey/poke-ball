import Vue from 'vue';
import Router from 'vue-router';
import routes from './views';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: require('./views/layout/index.vue'),
      name: 'layout',
      children: routes
    }
  ]
});

// 进入路有前检查权限
// router.beforeEach((route, redirect, next) => {
//   let codes = genCodes(routes);
//   Permission.checkPermisson(codes)
//     .then(data => {
//       if (Permission.hasPermisson(route.name)) {
//         next();
//       } else {
//         // 跳转至403页面
//         console.log(`***无权访问 ${route.name} 页面***`);
//         redirect('403');
//       }
//     })
//     .catch(err => {
//       // 获取权限失败，跳转至502页面
//       if (err.status !== 401) {
//         redirect('502');
//       }
//     });
// });
//
// // 根据路由mame生成权限code列表
// function genCodes (routes) {
//   let codes = [];
//
//   routes.forEach((route) => {
//     recursion(route);
//   });
//
//   function recursion (route) {
//     codes.push(route.name);
//     if (route.children && route.children.length) {
//       route.children.forEach((el) => {
//         recursion(el);
//       });
//     }
//   }
//
//   return codes;
// }

export default router;
