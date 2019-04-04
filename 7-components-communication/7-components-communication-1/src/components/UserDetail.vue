<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name 1: {{ name }}</p>
    <p>User Name 2: {{ switchName() }}</p>
    <p>User Age: {{ userAge }} (eventBus linked)</p>
    <!-- First option: castint event -->
    <button @click="resetName">Reset name</button>
    <!-- Second option -->
    <button @click="resetFn">Reset name</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      name: {
        type: String,
        required: true, // Either this
        default: 'Tod' // Or that
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      },
      resetName() {
        this.name = 'Che';
        this.$emit('nameWasReset', this.name); // Emits casting event to inform parent component
      }
    },
    created() {
      // Third option: eventBut to listen to events instead of passing from parent to child or the opposite way
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
  .component {
    background-color: lightcoral;
  }
</style>
