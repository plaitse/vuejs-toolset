import Home from './components/Home.vue';

// Webpack lazyloading (only loads when needed - Separated in different bundles)
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  }, 'user');
};
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  });
};
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  });
};
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  });
}; 

export const routes = [
  { path: '', component: Home },
  { path: '/user', component: User, children: [
    { path: '', component: UserStart},
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      console.log('inside route setup');
      next();
    }},
    { path: ':id/edit', component: UserEdit, name: 'userEdit' }
  ]},
  { path: '/redirect-me', redirect: '/user' },
  { path: '*', redirect: '/' }
];
