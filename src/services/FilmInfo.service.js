import axios from "axios";

const API_URL = 'https://swapi.dev/api/films/';

export const getFilmById = (id) => {
    return axios.get(API_URL + id)
                .then(response => {
                    return response.data;
                });
};