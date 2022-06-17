import axios from "axios";

const API_URL = 'https://swapi.dev/api/people/';

export const getCharacter = (id) => {
    return axios.get(API_URL + id)
                .then(response => {
                    return response.data;
                });
};

