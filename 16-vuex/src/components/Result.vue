<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
  export default {
    // props: ['counter'] -> for traditional emit
    computed: {
      counter() {
        // return this.$store.state.counter * 2;
        return this.$store.getters.doubleCounter;
      }
    }
  }
</script>
