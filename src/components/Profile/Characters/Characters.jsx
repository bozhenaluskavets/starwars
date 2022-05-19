import React, { useState, useEffect } from "react";
import styles from './Characters.module.css';
import { getCharacters } from './../../../services/Characters.service';
import { getFilmById } from "../../../services/FilmInfo.service";

export const Characters = ({ links = [] }) => {
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        getFilmById()
            .then(async (data) => {
                const response = await Promise.all(data.characters.map(character => {
                return getCharacters(character);
            }));

            setCharacters(response);
        })

    }, []);

    return (
        <div>
            {characters.map(c => {
                return (
                    <div className={styles.container}>
                        <div className={styles.charactersList}>
                            {c.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Characters;