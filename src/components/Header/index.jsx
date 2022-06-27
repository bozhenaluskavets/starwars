import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import image from "../../assets/logo.png";
export const Header = () => {

    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <img className={styles.logo} src={image}/>
            </Link>
            <div className={styles.links}>
                <a className={styles.link} href="https://www.starwars.com/">Our site</a>
                <a className={styles.link} href="https://instagram.com/starwars?igshid=YmMyMTA2M2Y=">Our Inst</a>
            </div>
        </header>
    )
}

export default Header;