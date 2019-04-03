<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <br>
    <p>You may save and load your data</p>
    <p>Click on 'End Day' to a new day.</p>
    <hr>
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>
