import React, { useState, useEffect } from "react";
import { getAllFilms } from "../../services/Films.service";
import { Link } from "react-router-dom";
import { Container, Content, Films, Film, FilmTitle, FilmDirector } from "./style";
import { Loader, LoaderContainer } from "../../globalStyles";

const FilmsList = () => {

    const [films, setFilms] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllFilms().then((data) => {
            setFilms(data);
            setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <LoaderContainer>
                <Loader></Loader>
            </LoaderContainer>
        )
    }

    return (
        <Container>
            <Content>
                { films.map((film) => {
                    return (
                        <Films>
                            <Link to={'/film/' + film.episode_id}>
                                <Film>
                                    <FilmTitle>{film.title}</FilmTitle>
                                    <FilmDirector>{film.director}</FilmDirector>
                                    <p>{film.release_date}</p>
                                </Film>
                            </Link>
                        </Films>
                    );
                })}
            </Content>
        </Container>
    );
};

export default FilmsList;
