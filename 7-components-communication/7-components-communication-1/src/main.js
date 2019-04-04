import Vue from 'vue'
import App from './App.vue'

// We have to create the eventBus before loading all the components
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
