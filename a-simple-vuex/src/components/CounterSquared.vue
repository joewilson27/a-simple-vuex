<template>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> =
    <!-- we call counterSquared from Vuex Store getters object -->
    {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>