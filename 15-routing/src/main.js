import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' // by default : hash for hashtag
});

router.beforeEach( (to, from, next) => {
  console.log('global beforeEach');
  next(); // continues its journey
  // next(false); will avort
  // next('/'); to redirect
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
