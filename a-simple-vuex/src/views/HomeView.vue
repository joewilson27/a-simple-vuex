<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter />
    <counter-squared />
    <buttons />
    <color-code />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import buttons from '../components/Buttons.vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
  // data() {
  //   return {
  //     counter: 0, // move to Vuex Store state
  //   }
  // },
  // methods: {
  //   decreaseCounter() { // move to Vuex Store mutations
  //     this.counter--;
  //   },
  //   increaseCounter() {
  //     this.counter++;
  //   },
  // },
  components: {
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default,
    // 'buttons': require('@/components/Buttons.vue').default,
    buttons,
    'colorCode': require('@/components/ColorCode.vue').default,
  },
}
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
