<script >
import AppTitle from './components/AppTitle.vue'
import AppMain from './components/AppMain.vue'
import AppMainSeries from './components/AppMainSeries.vue'
import axios from 'axios';
// import axios from 'axios';
import { store } from './data/store';

export default {
  components: {
    AppTitle,
    AppMain,
    AppMainSeries
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
    <AppMain />
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
  justify-content: center;
  align-items: center;
}
</style>
