<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers" :key="server.id">
        <server :id="server.id" :status="server.status"></server>
      </li>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue';

  export default {
    data() {
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Critical'},
          { id: 3, status: 'Unknown'},
          { id: 4, status: 'Normal'},
          { id: 5, status: 'Resolved'},
        ]
      };
    },
    components: {
      server: Server,
    }
  }
</script>

<style>
</style>
