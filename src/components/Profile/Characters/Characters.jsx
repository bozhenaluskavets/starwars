import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from './Characters.module.css';
import { getCharacters } from './../../../services/Characters.service';
import { getFilmById } from "../../../services/FilmInfo.service";
import { useParams } from "react-router-dom";


export const Characters = () => {

    let params = useParams();

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {

        axios.get('https://swapi.dev/api/people/' + params.id)
            .then(response => {
                setCharacters(response.data);
                setLoading(false);
            })
            
    }, [])

    // useEffect( () => {

            // axios.get(`https://swapi.dev/api/people/${id}` + params.id)

    // useEffect( () => {

    //     axios.get('https://swapi.dev/api/people/' + params.id)
    //         .then(async (data) => {
    //             const response = await Promise.all(data.characters.map(character => {
    //                 return getCharacters(character);
    //                 setLoading(false);
    //             }));
    //             setCharacters(response);
    //         })
            
    // }, [])

    // .then(response => {
    //     setCharacters(response.data);
    //     setLoading(false);
    // })

    if (loading) {
        return (
            <div className={styles.loaderBox}>
                <div className={styles.loader}></div>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.charactersList}>
                    {characters.name}
                </div>
            </div>
        </div>
    )
}


export default Characters;