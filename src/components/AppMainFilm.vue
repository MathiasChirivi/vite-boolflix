<script >
import LanguageFlag from './LanguageFlag.vue';
import AppStar from './AppStar.vue'
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppMainFilm",
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
        axios.get(this.store.apiUrl + "a").then(r => {
            this.store.cardFilm = [];
            this.store.cardFilm = r.data.results;
        })
    }
}

</script>

<template >
    <h2 class="text-white text-start mt-4">Film</h2>
    <section class="cardELement">
        <div class="templateCard position-relative" v-for="movie in store.cardFilm">
            <div class="cardContent">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div v-if="movie.backdrop_path != null">
                                <img class="imgCard" :src="store.imgFilm + movie.backdrop_path" alt="">
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
                            <!-- Tramite le props lo chiamiamo  nei film -->
                            <AppStar :itemRate="movie.vote_average" />
                            <div class="overview pt-2">
                                <h5>Overview: </h5>
                                <p class="fs-5">{{ movie.overview }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.cardELement {
    padding: 20px;
    background-color: #222;
    color: white;
    width: 100%;
    height: 100%;
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
    width: 342px;
    height: 192px;
    overflow-y: auto;
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

.overview {
    p {
        line-height: 25px;
    }
}
</style>