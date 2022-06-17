import axios from 'axios';

const API_URL = 'https://swapi.dev/api/films';

export const getAllFilms = () => {
    return axios.get(API_URL)
                .then(response => {
                    return response.data.results;
                });
};