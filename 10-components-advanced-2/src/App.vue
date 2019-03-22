<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button
          class="btn btn-primary"
          @click="displayedCmp = 'appBlue'">Load Blue Template</button>
        <button
          class="btn btn-success"
          @click="displayedCmp = 'appGreen'">Load Green Template</button>
        <button
          class="btn btn-danger"
          @click="displayedCmp = 'appRed'">Load Red Template</button>
        <hr>
        <component :is="displayedCmp">
          <p>This is the content</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    data() {
      return {
        displayedCmp: 'appBlue'
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  }
</script>

<style>
</style>
