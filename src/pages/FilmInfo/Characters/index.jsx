import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../../services/Characters.service";
import { Loader, LoaderContainer } from "../../../globalStyles";
import { CharactersList, AllCharacters } from "./style";

const Characters = ({characterLinks}) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchData = async () => {

            const allCharacters = await getCharacters(characterLinks);

            setCharacters(allCharacters);
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
        <CharactersList>
            {characters.map(char => {
                const id = char.url.split('/')[5];
                return (
                    <Link to={'/character/' + id}>
                        <AllCharacters>
                            {char.name}
                        </AllCharacters>
                    </Link>
                )
            })}
        </CharactersList>
    )
}

export default Characters;