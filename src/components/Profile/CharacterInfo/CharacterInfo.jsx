import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from './CharacterInfo.module.css';
import { useParams } from "react-router-dom";
import CharacterFilms from "./CharacterFilms/CharacterFilms";

const CharacterInfo = () => {

    let params = useParams();

    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + params.id)
            .then(response => {
                setCharacter(response.data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <div className={styles.loaderBox}>
                <div className={styles.loader}></div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                    <div className={styles.characters}>
                        <div className={styles.character}>
                            <h1>{character.name}</h1>
                            <p><span>height: </span>{character.height}</p>
                            <p><span>weigth: </span>{character.mass}</p>
                            <p><span>color of skin: </span>{character.skin_color}</p>
                            <p><span>color of eyes: </span>{character.eye_color}</p>
                            <p><span>birthday: </span>{character.birth_year}</p>
                            <div>
                                <CharacterFilms filmLinks={character.films}/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CharacterInfo;