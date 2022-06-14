import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Characters from "./Characters/Characters";
import styles from './FilmInfo.module.css';

const FilmInfo = () => {

    let params = useParams();
    
    const [film, setFilm] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/' + params.id)
            .then(response => {
                setFilm(response.data);
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
            <div className={styles.films}>
                <div className={styles.film}>
                    <h1>{film.title}</h1>
                    <p><span>director: </span>{film.director}</p>
                    <p><span>producer: </span>{film.producer}</p>
                    <p><span>date of realese: </span>{film.release_date}</p>
                    <p><span>opening: </span>"{film.opening_crawl}"</p>
                    <p><span>Characters:</span></p>
                    <div>
                        <Characters characterLinks={film.characters}/>
                    </div>
                    
                </div>
            </div>
            
        );
        </div>
    );
};


export default FilmInfo;



