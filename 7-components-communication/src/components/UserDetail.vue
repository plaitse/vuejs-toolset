<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <p>User Name: {{ switchName() }}</p>
    <!-- First option: castint event -->
    <button @click="resetName">Reset name</button>
    <!-- Second option -->
    <button @click="resetFn">Reset name</button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true, // Either this
        default: 'Tod' // Or that
      },
      resetFn: Function
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      },
      resetName() {
        this.name = 'Che';
        this.$emit('nameWasReset', this.name); // Emits casting event to inform parent component
      }
    }
  }
</script>

<style scoped>
  .component {
    background-color: lightcoral;
  }
</style>
