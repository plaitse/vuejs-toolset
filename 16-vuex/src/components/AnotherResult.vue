<template>
  <div>
    <!-- <p>Counter is: {{ counter }}</p> -->
    <p>Counter is: {{ doubleCounter }}</p>
    <!-- <p>Number of clicks : {{ clicks }}</p> -->
    <p>Number of clicks : {{ stringCounter}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    // props: ['counter'] -> for traditional emit

    // computed: {
    //   counter() {
    //     return this.$store.getters.doubleCounter;
    //   },
    //   clicks() {
    //     return this.$store.getters.stringCounter;
    //   }
    // }
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter'
      ])
    }
  }
</script>
