import axios from "axios";
import { API_URL } from "./api";

export const getCharacter = (id) => {
    return axios.get(`${API_URL}/people/${+ id}`).then(response => {
        return response.data;
    });
};

export const getCharacters = async(characterLinks) => {
    const newCharacters = [];
    await Promise.all(characterLinks.map(async (link) => {
        const response = await axios.get(link);
        newCharacters.push(response.data);
    }))
    return newCharacters;
}

