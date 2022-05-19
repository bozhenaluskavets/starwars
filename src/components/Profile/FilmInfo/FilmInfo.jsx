import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Characters from "../Characters/Characters";
import styles from './FilmInfo.module.css';
import { Link } from "react-router-dom";

const FilmInfo = () => {

    // let params = useParams();
    // console.log('params => ', params)
    
    const [data, setData] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films')
            .then(response => {
                setData(response.data.results);
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
                { data.map( item => {
                    return (
                        <div className={styles.films}>
                            <div className={styles.film}>
                                <h1>{item.title}</h1>
                                <p><span>director: </span>{item.director}</p>
                                <p><span>producer: </span>{item.producer}</p>
                                <p><span>date of realese: </span>{item.release_date}</p>
                                <p><span>opening: </span>"{item.opening_crawl}"</p>
                                <p><span>Characters:</span></p>
                                <Link to={'/character/'} className={styles.characters}>
                                    <Characters/>
                                </Link>
                                
                            </div>
                        </div>
                        
                    );
                })}
        </div>
    );
};


export default FilmInfo;



