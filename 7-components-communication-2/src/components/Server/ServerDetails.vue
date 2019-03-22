<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!serverDisplayed">Server Details are currently not updated</p>
    <div v-else>
      <p><b>Server #{{ id }}</b></p>
      <label>Status:</label>
      <input type="text" v-model="status" v-on="updateStatus()"/>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    props: {
      serverDisplayed: {
        type: Boolean
      },
      id: {
        type: Number
      },
      status: {
        type: String
      }
    },
    methods: {
      updateStatus() {
        eventBus.updateServerStatus(this.id, this.status);
      }
    }
  }
</script>

<style>
  label, input {
    display: block;
  }
</style>
