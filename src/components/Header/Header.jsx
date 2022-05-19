import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {

    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <img className={styles.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVD0RkSlQJ6BL7F-sHg_tKn0_BKCdsdxW-TKqsuj1xXYgeyjtbYuPOKYLCIBUIS4TDhqo&usqp=CAU' />
            </Link>
            <div className={styles.links}>
                <a className={styles.link} href="https://www.starwars.com/">Our site</a>
                <a className={styles.link} href="https://instagram.com/starwars?igshid=YmMyMTA2M2Y=">Our Inst</a>
            </div>
        </header>
    )
}

export default Header;