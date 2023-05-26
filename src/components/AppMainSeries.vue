<script >
import LanguageFlag from './LanguageFlag.vue';
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppMainSeries",
    components: {
        LanguageFlag,
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        axios.get(this.store.apiUrlTv).then(r => {
            this.store.cardSeriesTv = [];
            this.store.cardSeriesTv = r.data.results;
        })
    }
}

</script>

<template >
    <h2 class="text-white mt-4">Lista Serie Tv</h2>
    <section class="cardELement">
        <div class="templateCard" v-for="Series in store.cardSeriesTv">
            <div class="cardContent">
                <div v-if="Series.backdrop_path != null">
                    <img :src="store.imgFilm + Series.backdrop_path" alt="">
                </div>
                <div v-else>
                    <p class="fs-5 pt-5 text-center">{{ Series.title }} {{ Series.name }}</p>
                </div>
                <h3>{{ Series.name }}</h3>
                <p>Titolo Originale: {{ Series.original_name }}</p>
                <LanguageFlag :movieLanguage="Series.original_language" />
                <p>Voto: {{ Series.vote_average }}</p>
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