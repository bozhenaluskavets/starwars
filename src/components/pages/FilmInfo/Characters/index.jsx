import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { Link } from "react-router-dom";

const Characters = ({characterLinks}) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchData = async () => {

            const newCharacters = [];
            await Promise.all(characterLinks.map(async (link) => {
                const response = await axios.get(link);
                newCharacters.push(response.data);
            }))

            setCharacters(newCharacters);
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
            <div className={styles.container}>
                <div className={styles.charactersList}>
                    {characters.map(char => {
                        const id = char.url.split('/')[5];
                        return (
                            <Link to={'/character/' + id} className={styles.characters}>
                                {char.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Characters;