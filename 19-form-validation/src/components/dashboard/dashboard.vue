<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p v-if="email">Your email address: {{ email }}</p>
    <p v-else>You're not authenticated</p>
  </div>
</template>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>

<script>
  export default {
    computed: {
      email() {
        return !this.$store.getters.user ? false : this.$store.getters.user.email;
      }
    },
    created() {
      this.$store.dispatch('fetchUser');
    }
  }
</script>
