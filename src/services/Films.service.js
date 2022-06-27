import axios from 'axios';
import { API_URL } from "./api";

export const getAllFilms = () => {
    return axios.get(`${API_URL}/films`).then(response => {
        return response.data.results;
    });
};

export const getFilmById = (id) => {
    return axios.get(`${API_URL}/films/${+ id}`).then(response => {
        return response.data;
    });
};