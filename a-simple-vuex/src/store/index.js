import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue',
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    },
  },
  mutations: { // Mutations are functions that are responsible for modifying the state. 
    // to use this function, use commit('decreaseCounter') on vue component
    decreaseCounter(state, randomNumber) { // state itu dari object state di atas
      state.counter -= randomNumber
    },
    increaseCounter(state, randomNumber) { // param kedua (randomNumber) adl param yang berasal dr kiriman dari yang meng-commit mutation ini.
      // pada contoh disini di commit dari actions increaseCounter
      state.counter += randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    },
  },
  actions: { // asynchronously
    /**
     * This property is used to define the actions for your Vuex store. Actions are FUNCTIONS that can be asynchronous
     * and are responsible for performing side effects or complex operations BEFORE committing mutations. 
     * 
     * They receive a context object with the store instance and other helpers like commit and dispatch.
     */
    decreaseCounter({ commit }) { // commit itu utk commit mutation
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        commit('decreaseCounter', response.data) // commit mutations decreaseCounter()
      })
    },
    increaseCounter({ commit }) { // commit itu utk commit mutation
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        commit('increaseCounter', response.data)
      })
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue) // newValue akan menjadi parameter pada actions setColorCode(state, newValue)
    },
  },
  modules: {
  }
})
