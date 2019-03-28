<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Filters</h2>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <h2>Computed Properties</h2>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <hr>
        <h2>Mixins</h2>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue';
  import { fruitMixin } from './fruitMixin';

  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text: 'Hello There',
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    // computed: { ----> If mixin not necessary
    //   filteredFruits() {
    //     return this.fruits.filter((element) => {
    //       return element.match(this.filterText);
    //     });
    //   }
    // },
    components: {
      appList: List
    }
  }
</script>

<style>

</style>
