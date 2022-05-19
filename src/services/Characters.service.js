import axios from "axios";

export const getCharacters = (url) => {
    return axios.get(url)
    .then(response => {
        return response.data
    });
};

