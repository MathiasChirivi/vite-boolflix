<script>
import { store } from '../data/store';

export default {
    name: "LanguageFlag",
    props: {
        movieLanguage: String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-if="store.langList.includes(movieLanguage)" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="myFlag" :src="`src/assets/${movieLanguage}.png`" alt="">
    </div>
    <div v-else class="pt-2">
        <h5>Lingua: </h5>
        <p class="fs-5">{{ movieLanguage.toUpperCase() }}</p>
    </div>
</template>

<style scoped>
.myFlag {
    height: 25px;
    padding-left: 4px;
}

p,
h5 {
    display: inline;
}
</style>
