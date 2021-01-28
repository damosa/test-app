<template>
  <div id="app">
    <Divisas/>
  </div>
</template>

<script>
import Divisas from './components/Divisas.vue';

export default {
  name: 'App',
  components: {
    Divisas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
