<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link
          to="/portfolio"
          activeClass="active"
          tag="li"
          class="nav-item">
            <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link
          to="/stocks"
          activeClass="active"
          tag="li"
          class="nav-item">
            <a class="nav-link">Stocks</a>
        </router-link>
      </ul>

      <b class="navbar-text">Funds: {{ funds | currency }}</b>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="isDropdownOpened = !isDropdownOpened">
                Save and Load
            </a>
            <div class="dropdown-menu" :class="{show: isDropdownOpened}" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
              <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
            </div>
          </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpened: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizedStocks: 'randomizedStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizedStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style>
  .navbar {
    margin-bottom: 40px;
  }
</style>
 