import React, { useState, useEffect } from "react";
import { getAllFilms } from "../../../services/FilmsList.service";
import styles from './FilmsList.module.css';
import { Link } from "react-router-dom";

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
            <div className={styles.loaderBox}>
                <div className={styles.loader}></div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                { films.map((film) => {
                    return (
                        <div className={styles.films}>
                            <Link to={'/film/' + film.episode_id} className={styles.film}>
                                <h3>{film.title}</h3>
                                <h5>{film.director}</h5>
                                <p>{film.release_date}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FilmsList;
