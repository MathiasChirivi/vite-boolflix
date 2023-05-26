<script >
import LanguageFlag from './LanguageFlag.vue';
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppMain",
    components: {
        LanguageFlag,
    },
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

<template >
    <h2 class="text-white mt-4">Lista film</h2>
    <section class="cardELement">
        <div class="templateCard" v-for="movie in store.cardFilm">
            <div class="cardContent">
                <div v-if="movie.backdrop_path != null">
                    <img :src="store.imgFilm + movie.backdrop_path" alt="">
                </div>
                <div v-else>
                    <p class="fs-5 pt-5 text-center">{{ movie.title }} {{ movie.name }}</p>
                </div>
                <h3>{{ movie.title }}</h3>
                <p>Titolo Originale: {{ movie.original_title }}</p>
                <LanguageFlag :movieLanguage="movie.original_language" />
                <p>Voto: {{ movie.vote_average }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.cardELement {
    padding: 30px;
    background-color: #222;
    color: white;
    width: 100%;
    min-height: 200px;
    display: flex;
    gap: 2rem;
    overflow-x: auto;
}

.cardContent {
    min-width: 350px;
}
</style>