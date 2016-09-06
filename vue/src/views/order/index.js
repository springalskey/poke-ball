import List from './list/list.vue';
import Item from './item/item.vue';

let listRoute = { path: '', component: List, name: 'order.list' };
let itemRoute = { path: '/item/:id', component: Item, name: 'order.item' };

export default [
  listRoute,
  itemRoute
];
