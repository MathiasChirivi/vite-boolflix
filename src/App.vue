<script >
import AppTitle from './components/AppTitle.vue'
import AppMainFilm from './components/AppMainFilm.vue'
import AppMainSeries from './components/AppMainSeries.vue'
import axios from 'axios';
// import axios from 'axios';
import { store } from './data/store';

export default {
  components: {
    AppTitle,
    AppMainFilm,
    AppMainSeries,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <header>
    <AppTitle />
  </header>
  <main>
    <AppMainFilm />
    <AppMainSeries />
  </main>
  <footer></footer>
</template>

<style scoped>
main {
  background-color: #222;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
}
</style>
