import Vue from 'vue'
import axios from 'axios';
import Vuelidate from 'vuelidate';

import App from './App.vue'

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vuejs-toolset.firebaseio.com';

new Vue({
  el: '#app',
  render: h => h(App)
})
