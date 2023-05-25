<script >
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            store,
        }
    },
    mounted() {
        axios.get(this.store.apiUrl).then(r => {
            this.store.cardFilm = [];
            this.store.cardFilm = r.data.results;
        })
    }
}

</script>

<template>
    <div class="container p-5">
        <div v-for="movie in store.cardFilm">
            <h2>{{ movie.title }}</h2>
            <img :src="store.imgFilm + movie.backdrop_path" alt="">
            <p>Titolo Originale: {{ movie.original_title }}</p>
            <p>Lingua: {{ movie.original_language }}</p>
            <p>Voto: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped></style>