import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from './CharacterInfo.module.css';
import { getAllFilms } from "../../../services/FilmsList.service";
import { getCharacters } from "../../../services/Characters.service";

const CharacterInfo = ({characterLinks}) => {

    // const [characters, setCharacters] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getAllFilms()
    //         .then(async (data) => {
    //             const response = await Promise.all(data.characters.map(character => {
    //                 return getCharacters(character)
    //             }));

    //             setCharacters(response.data);
    //             setLoading(false);
    //         })
    // }, []);


    // if (loading) {
    //     return (
    //         <div className={styles.loaderBox}>
    //             <div className={styles.loader}></div>
    //         </div>
    //     )
    // }

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.content}>
    //         {characters.map(c => {
    //             return (
    //                 <div className={styles.characters}>
    //                     <div className={styles.character}>
    //                         <p>name: {c.name}</p>
    //                         <p>height: {c.height}</p>
    //                         <p>weigth: {c.mass}</p>
    //                         <p>color of skin: {c.skin_color}</p>
    //                         <p>color of eyes: {c.eye_color}</p>
    //                         <p>birthday: {c.birth_year}</p>
    //                         <p>gender: {c.male}</p>
    //                     </div>
    //                 </div>
    //             )
    //         })}
    //     </div>
    //     </div>
    // );

        const [characters, setCharacters] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect( () => {
            const fetchData = async () => {
    
                const newCharacters = [];
                characterLinks.forEach(async (link) => {
                    const response = await axios.get(link);
                    newCharacters.push(response.data);
                    console.log(newCharacters)
    
                    setCharacters(newCharacters);
                    setLoading(false);
                })
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
                            return (
                                <div to={'/character/' + char.name} className={styles.characters}>
                                    {char.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
// };

export default CharacterInfo;