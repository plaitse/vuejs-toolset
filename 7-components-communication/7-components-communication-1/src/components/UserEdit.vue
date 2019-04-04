<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: ['userAge'],
    methods: {
      editAge() {
        this.userAge = 30;
        // this.$emit('ageWasEdited', this.userAge); --> Option 1: if no eventBus
        // eventBus.$emit('ageWasEdited', this.userAge); --> Option 2: with eventBus
        eventBus.changeAge(this.userAge); // Option 3: with eventBus which centralizes code
      }
    }
  }
</script>

<style scoped>
  .component {
    background-color: lightgreen;
  }
</style>
