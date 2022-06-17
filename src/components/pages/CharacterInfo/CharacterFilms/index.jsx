import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { Link } from "react-router-dom";

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
            <div className={styles.loaderBox}>
                <div className={styles.loader}> 
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className={styles.title}>Films:</h2>
            <div className={styles.container}>
                <div>
                    {films.map(film => {
                        const id = film.url.split('/')[5];
                        return (
                            <Link to={'/film/' + id} className={styles.characterFilm}>

                                {film.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CharacterFilms;
