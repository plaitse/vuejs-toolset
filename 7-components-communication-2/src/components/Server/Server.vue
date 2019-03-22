<template>
  <span @click="showDetail">Server #{{ id }} - Status: <b>{{ status }}</b></span>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        required: true
      }
    },
    methods: {
      showDetail() {
        eventBus.displayServer(this.id, this.status);
      }
    },
    created() {
      eventBus.$on('statusWasUpdated', (id, status) => {
        if (id == this.id) this.status = status;
      });
    }
  }
</script>

<style>
</style>
