<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters, Computed & Mixins</h1>
        <p>{{ text | reverse }}</p>
        <p>{{ text }} ({{ text | giveLength }})</p>
        <p>{{ reverseAndCount.reversed }} ({{ reverseAndCount.length }})</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mixin } from './mixin';

  export default {
    mixins: [mixin],
    data() {
      return {
        text: 'This text is reversed',
      }
    },
    filters: {
      reverse(str) {
        return str.split('').reverse().join('');
      }
    }
  }
</script>

<style>
</style>
