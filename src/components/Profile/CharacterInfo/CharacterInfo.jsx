import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from './CharacterInfo.module.css';
import { getCharacters } from './../../../services/Characters.service';
import { getFilmById } from "../../../services/FilmInfo.service";

const CharacterInfo = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getFilmById()
            .then(async (data) => {
                const response = await Promise.all(data.characters.map(character => {
                    return getCharacters(character)
                }));

                setCharacters(response)
            })
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            {characters.map(c => {
                return (
                    <div className={styles.characters}>
                        <div className={styles.character}>
                            <p>name: {c.name}</p>
                            <p>height: {c.height}</p>
                            <p>weigth: {c.mass}</p>
                            <p>color of skin: {c.skin_color}</p>
                            <p>color of eyes: {c.eye_color}</p>
                            <p>birthday: {c.birth_year}</p>
                            <p>gender: {c.male}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    );
};

export default CharacterInfo;