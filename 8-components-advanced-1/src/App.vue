<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <!-- 1st option: pass entire content as one slot -->
          <!-- <h2>{{ quoteTitle }}</h2>
          <p>A wonderful quote</p> -->

          <!-- 2nd option: specify slot in parts -->
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">A wonderful quote</p>
        </app-quote>

        <hr>
        <!-- Dynamic component -->
        <button @click="selectedComponent = 'appAuthor'">
          <p>Author</p>
        </button>
        <button @click="selectedComponent = 'appNew'">
          <p>New</p>
        </button>
        <button @click="selectedComponent = 'appQuote'">
          <p>Quote</p>
        </button>
        <component :is="selectedComponent">
          <p>Default content</p>
        </component>

        <hr>
        <!-- Dynamic component not destroyed when not selected -->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import Author from './components/Author';
  import New from './components/New';
  import Quote from './components/Quote';

  export default {
    data() {
      return {
        quoteTitle: 'The quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appAuthor: Author,
      appNew: New,
      appQuote: Quote
    }
  }
</script>

<style>
</style>
