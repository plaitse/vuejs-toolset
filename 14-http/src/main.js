import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

// use = To add a plugin to the core VueJS functionnality
Vue.use(VueResource);

// Vue.http.options.root = 'https://vuejs-toolset.firebaseio.com/data.json';
Vue.http.options.root = 'https://vuejs-toolset.firebaseio.com/';
// Vue.http.options.header...
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == 'POST') {
//     request.method = 'PUT';
//   }
//   next(response => {
//     response.json = () => {
//       return { messages: response.body}
//     }
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
