<template>
  <div id="app">
    <AxiosJokes/>
  </div>
</template>

<script>
import AxiosJokes from '@/components/AxiosJokes.vue'

export default {
  name: 'App',
  components: {
    AxiosJokes
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
