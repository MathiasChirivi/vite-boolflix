<script >
import LanguageFlag from './LanguageFlag.vue';
import AppStar from './AppStar.vue'
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppMain",
    components: {
        LanguageFlag,
        AppStar
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
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div v-if="movie.backdrop_path != null">
                                <img :src="store.imgFilm + movie.backdrop_path" alt="">
                            </div>
                            <div v-else>
                                <img class="widthImage"
                                    src="https://www.lombardiabeniculturali.it/new_img_db/bcf/10080/1/l/SC_F_SUP-10080-0000092_IMG-0001057784.jpg"
                                    alt="">
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h5>{{ movie.title }}</h5>
                            <p>Titolo Originale: {{ movie.original_title }}</p>
                            <LanguageFlag :movieLanguage="movie.original_language" />
                            <AppStar :itemRating="movie.vote_average" />
                        </div>
                    </div>
                </div>
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

.flip-card {
    background-color: transparent;
    width: 342px;
    height: 192px;
    perspective: 2000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: #222;
    color: white;
    transform: rotateY(180deg);
}

.widthImage {
    width: 342px;
    height: 192px;
}

.cardContent {
    min-width: 350px;
}
</style>