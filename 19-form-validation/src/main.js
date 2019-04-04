import Vue from 'vue'
import axios from 'axios';

import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-toolset.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'azeaze';
// axios.defaults.headers.get['Accepts'] = 'application/json';

// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('req interceptor : ', config);
//   return config;
// });
// const resInterceptor = axios.interceptors.response.use(response => {
//   console.log('res interceptor : ', response);
//   return response;
// });
// axios.interceptors.request.eject(reqInterceptor);
// axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
