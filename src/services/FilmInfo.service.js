import axios from "axios";

export const getFilmById = (id) => {
    return axios.get('https://swapi.dev/api/films/' + id)
    .then(response => {
        return response.data
    });
};