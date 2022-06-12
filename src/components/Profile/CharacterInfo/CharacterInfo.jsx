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


    // let params = useParams();

    // const [character, setCharacters] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get('https://swapi.dev/api/people/' + params.id)
    //         .then(async (data) => {
    //             const response = await Promise.all(data.map(character => {
    //                 const id = character.url.split('/')[5];
    //                 console.log(character.url);
    //                 return getCharacters(character + id)
    //             }));

    //             setCharacters(response.data);
    //             setLoading(false);
    //         })
    // }, []);

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
                            <p>name: {character.name}</p>
                            <p>height: {character.height}</p>
                            <p>weigth: {character.mass}</p>
                            <p>color of skin: {character.skin_color}</p>
                            <p>color of eyes: {character.eye_color}</p>
                            <p>birthday: {character.birth_year}</p>
                            <p>gender: {character.male}</p>
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