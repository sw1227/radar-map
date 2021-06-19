<template class="full-height">
  <v-app class="full-height">
    <v-main class="full-height">
      <Map class="full-height"/>
    </v-main>
  </v-app>
</template>

<script>
import Map from './components/Map.vue'

export default {
  name: 'app',
  components: {
    Map
  }
}
</script>

<style>
body {
  margin: 0;
}

html, body {
  height: 100%;
}

.full-height {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
