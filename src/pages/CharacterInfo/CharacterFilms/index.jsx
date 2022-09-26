import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader, LoaderContainer } from "../../../globalStyles";
import { Title, CharacterFilm } from "./style";

const CharacterFilms = ({filmLinks}) => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchData = async () => {

            const charFilms = [];
            await Promise.all(filmLinks.map(async (link) => {
                const response = await axios.get(link);
                charFilms.push(response.data);
            }))

            setFilms(charFilms);
            setLoading(false);
        }
        
        fetchData()
    }, [])

    if (loading) {
        return (
            <LoaderContainer>
                <Loader></Loader>
            </LoaderContainer>
        )
    }

    return (
        <div>
            <Title>Films:</Title>
                {films.map(film => {
                    const id = film.url.split('/')[5];
                    return (
                        <Link to={'/film/' + id}>
                            <CharacterFilm>
                                {film.title}
                            </CharacterFilm>
                        </Link>
                    )
                })}
        </div>
    )
}

export default CharacterFilms;
