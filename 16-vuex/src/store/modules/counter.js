const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' clicks';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: state => {
    state.counter--;
  }
}

const actions = {
  increment: (context, payload) => {
    context.commit('increment', payload);
  },
  decrement: context => {
    context.commit('decrement');
  },
  asyncIncrement: (context, payload) => {
    setTimeout(() => {
      context.commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: context => {
    setTimeout(() => {
      context.commit('decrement');
    }, 1000);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}