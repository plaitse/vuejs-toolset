import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    displayServer(id, status) {
      this.$emit('severWasSelected', id, status);
    },
    updateServerStatus(id, status) {
      this.$emit('statusWasUpdated', id, status);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
