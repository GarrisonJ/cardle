<template>
  <div id="app">
    <CardManager />
  </div>
</template>

<script>
import CardManager from './components/CardManager.vue'

export default {
  name: 'App',
  components: {
    CardManager
  }
}
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
