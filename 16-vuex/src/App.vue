<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <!-- <app-result :counter="counter"></app-result> -->
        <app-result></app-result>
        <!-- <app-counter @updated="counter += $event"></app-counter> -->
        <app-counter></app-counter>
        <hr>
        <app-another-result></app-another-result>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';
  import AnotherResult from './components/AnotherResult.vue';
  import AnotherCounter from './components/AnotherCounter.vue';

  export default {
    // data() {
    //   return {
    //     counter: 0
    //   }
    // },
    computed: {
      // To be able to use v-model instead of :value="value" @input="updateValue"
      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value) {
          this.$store.dispatch('updateValue', value);
        }
      }
    },
    // Method not needed because we can use get and set inside computed
    // methods: {
    //   updateValue(event) {
    //     this.$store.dispatch('updateValue', event.target.value);
    //   }
    // },
    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult,
      appAnotherCounter: AnotherCounter
    }
  }
</script>
