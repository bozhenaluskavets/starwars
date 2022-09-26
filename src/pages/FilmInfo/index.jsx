import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Characters from "./Characters";
import { getFilmById } from "../../services/Films.service";
import { Container, Films, Film, ExtraText, Item } from "../FilmInfo/style";
import { Loader, LoaderContainer } from "../../globalStyles";

const FilmInfo = () => {

    let params = useParams();
    
    const [film, setFilm] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFilmById(params.id).then((data) => {
                setFilm(data);
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
            <Films>
                <Film>
                    <h1>{film.title}</h1>
                    <Item><ExtraText>director: </ExtraText>{film.director}</Item>
                    <Item><ExtraText>producer: </ExtraText>{film.producer}</Item>
                    <Item><ExtraText>date of realese: </ExtraText>{film.release_date}</Item>
                    <Item><ExtraText>opening: </ExtraText>"{film.opening_crawl}"</Item>
                    <Item><ExtraText>Characters:</ExtraText></Item>
                    <div>
                        <Characters characterLinks={film.characters}/>
                    </div>
                    
                </Film>
            </Films>
        </Container>
    );
};


export default FilmInfo;



