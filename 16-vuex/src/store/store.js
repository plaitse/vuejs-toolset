import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // counter: 0, ---> Refacto modules
    value: 0
  },
  getters: {
    // doubleCounter: state => { ---> Refacto modules
    //   return state.counter * 2;
    // },
    // stringCounter: state => { ---> Refacto modules
    //   return state.counter + ' clicks';
    // },
    value: state => {
      return state.value;
    }
  },
  /* --- !!! Mutations have to be synchronous !!! --- */
  // mutations: {
    // increment: (state, payload) => { ---> Refacto modules
    //   state.counter += payload;
    // },
    // decrement: state => { ---> Refactor modules
    //   state.counter--;
    // },
    // updateValue: (state, payload) => { ---> Refacto mutations
    //   state.value = payload;
    // }
  // },
  mutations,
  // actions: {
    // increment: (context, payload) => { ---> Refactor modules
    //   context.commit('increment', payload);
    // },
    // decrement: context => { ---> Refactor modules
    //   context.commit('decrement');
    // },
    // asyncIncrement: (context, payload) => { ---> Refactor modules
    //   setTimeout(() => {
    //     context.commit('increment', payload.by);
    //   }, payload.duration);
    // },
    // asyncDecrement: context => { ---> Refactor modules
    //   setTimeout(() => {
    //     context.commit('decrement');
    //   }, 1000);
    // },
    // updateValue: (context, payload) => { ---> Refactor actions
    //   context.commit('updateValue', payload);
    // }
  // },
  actions,
  modules: {
    counter
  }
});
