<template>
  <div class="container">
    <Header></Header>
    <hr>
    <p>{{ url }}</p>
    <hr>
    <List></List>
    <hr>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import List from './List.vue';

export default {
  data() {
    return {
      url: process.env.VUE_APP_URL
    }
  },
  components: {
    Footer,
    Header,
    List
  }
}
</script>

<!-- Scoped : makes style applied to this only one component -->
<style scoped>
  div {
    border: 1px solid red;
  }
</style>
