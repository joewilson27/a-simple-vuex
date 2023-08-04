<template>
  <div>
    <!-- instead of using direct state $store.state.colorCode, we are using a computed in the local app -->
    <input 
      v-model="colorCode"
      placeholder="Enter color code"
      type="text"
    >
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        // get the colorCode from the state
        return this.$store.state.colorCode
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue)
      }
    }
  },
}
</script>

<style>

</style>