import axios from 'axios';

export const getAllFilms = () => {
    return axios.get('https://swapi.dev/api/films')
            .then(response => {
                return response.data.results;
            });
};