<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details :serverDisplayed="serverDisplayed" :id="id" :status="status"></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { eventBus } from './main';
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from './components/Server/ServerDetails.vue';

  export default {
    data() {
      return {
        serverDisplayed: false,
        id: 0,
        status: ''
      }
    },
    components: {
      appHeader: Header,
      Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
    },
    created() {
      eventBus.$on('severWasSelected', (id, status) => {
        this.serverDisplayed = true;
        this.id = id;
        this.status = status;
      });
    }
  }
</script>

<style>
</style>
