<script >
import AppTitle from './components/AppTitle.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios';
// import axios from 'axios';
import { store } from './data/store';

export default {
  components: {
    AppTitle,
    AppMain
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
  </main>
  <footer></footer>
</template>

<style scoped></style>
