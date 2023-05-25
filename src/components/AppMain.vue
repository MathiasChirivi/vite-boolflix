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

<template >
    <div class="container bg-white heightContainer">
        <div v-for="movie in store.cardFilm">
            <div class=" d-flex m-2 justify-content-between flex-column w-25 row row-cols-4 ">
                <div class="card ">
                    <img class="card-img-top" :src="store.imgFilm + movie.backdrop_path" alt="">
                    <div class="card-body">
                        <h3 class="card-title">{{ movie.title }}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Titolo Originale: {{ movie.original_title }}</li>
                        <li class="list-group-item">Lingua: {{ movie.original_language }}</li>
                        <li class="list-group-item">Voto: {{ movie.vote_average }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heightContainer {
    height: calc(100% - 20px - 20px);
    overflow-y: auto;
}

.card {
    width: 100% !important;
}
</style>