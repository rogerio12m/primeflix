import axios from 'axios';

//Base da URL: 'https://api.themoviedb.org/3/'
//URL DA API: '/movie/now_playing?api_key=08393dadbb092ab5d5293678436757f8'


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;