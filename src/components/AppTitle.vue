<script >
import { store } from '../data/store';
import axios from 'axios';
export default {
    name: "AppTitle",
    data() {
        return {
            store,
            chosenfilm: null,
        }
    },
    methods: {
        searchFIlm() {
            let addressFilm = this.store.apiUrl + this.chosenfilm;
            this.titleadd(addressFilm);
        },
        searchSeries() {
            let addressSeriesTv = this.store.apiUrlTv + this.chosenfilm;
            this.titleaddSeries(addressSeriesTv);
        },
        titleadd(addressFilm) {
            axios.get(addressFilm).then(r => {
                this.store.cardFilm = [];
                this.store.cardFilm = r.data.results;
            });
        },
        titleaddSeries(addressSeriesTv) {
            axios.get(addressSeriesTv).then(r => {
                this.store.cardSeriesTv = [];
                this.store.cardSeriesTv = r.data.results;
            });
        },
        searchFilmSeries() {
            this.searchFIlm();
            this.searchSeries();
        }
    }
}

</script>

<template>
    <div class="container-fluid bg-black heightHeader d-grid">
        <div class="d-flex justify-content-around align-items-center">
            <div>
                <h2 class="text-danger">BOOFLIX</h2>
            </div>
            <div>
                <input @keyup="searchFilmSeries" v-model="chosenfilm" type="text" placeholder="Inserisci un Film">
                <button><i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heightHeader {
    height: 80px;
}
</style>
