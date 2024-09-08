import axios from "axios";
//url /movie/now_playing?api_key=75e9e21a48c5c4bc948f590545cd0ef5&language=pt-BR
//base url https://api.themoviedb.org/3

const api = axios.create({
    baseURL:' https://api.themoviedb.org/3'

})

export default api;