import { reactive } from 'vue'

export const store = reactive({
    apiUrl: `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&false&language=it-IT&query=`,
    apiUrlTv: `https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&false&language=it-IT&query=`,
    cardFilm: [],
    cardSeriesTv: [],
    imgFilm: "https://image.tmdb.org/t/p/w342",
    langList: ["it", "en", "fr", "de", "es"],
});