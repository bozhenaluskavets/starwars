import React from 'react';
import FilmList from './FilmList/FilmList';
import FilmInfo from "./FilmInfo/FilmInfo";
import Characters from "./Characters/Characters";

const Profile = () => {

    return (
        <div>
            <FilmList />
            <FilmInfo />
            <Characters />
        </div>
    )
}

export default Profile;