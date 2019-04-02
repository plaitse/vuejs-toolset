<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      // increment() {
      //   // this.$emit('updated', 1);
      //   // this.$store.state.counter++;
      //   this.$store.commit('increment');
      // },
      // decrement() {
      //   // this.$emit('updated', -1);
      //   // this.$store.state.counter--;
      //   this.$store.commit('decrement');
      // }
      // ...mapMutations([
      //   'increment',
      //   'decrement'
      // ])
      ...mapActions([
        'increment',
        'decrement'
      ]),
      increment(by) {
        console.log({by});
        this.$store.dispatch('increment', by);
      }
    }
  }
</script>
