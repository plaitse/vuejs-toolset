import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    vnode; // To remove error
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    // if (binding.arg == 'background') {
    //   el.style.backgroundColor = binding.value;
    // } else {
    //   el.style.color = binding.value;
    // }
    let delay = 0;
    if (binding.modifiers['delayed']) delay = 1000;
    setTimeout(() => {
      binding.arg == 'background' ? el.style.backgroundColor = binding.value : el.style.color = binding.value;
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
