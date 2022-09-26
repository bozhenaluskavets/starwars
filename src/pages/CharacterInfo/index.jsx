import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterFilms from "./CharacterFilms";
import { getCharacter } from "../../services/Characters.service";
import { Loader, LoaderContainer } from "../../globalStyles";
import { Character, Container, Item, ExtraText } from "./style";

const CharacterInfo = () => {

    let params = useParams();

    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCharacter(params.id)
            .then(response => {
                setCharacter(response);
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
            <Character>
                <h1>{character.name}</h1>
                <Item><ExtraText>height: </ExtraText>{character.height}</Item>
                <Item><ExtraText>weigth: </ExtraText>{character.mass}</Item>
                <Item><ExtraText>color of skin: </ExtraText>{character.skin_color}</Item>
                <Item><ExtraText>color of eyes: </ExtraText>{character.eye_color}</Item>
                <Item><ExtraText>birthday: </ExtraText>{character.birth_year}</Item>
                <div>
                    <CharacterFilms filmLinks={character.films}/>
                </div>
            </Character>
        </Container>
    );
};

export default CharacterInfo;