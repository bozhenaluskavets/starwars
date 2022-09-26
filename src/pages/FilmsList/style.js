import styled from "styled-components";
import background from '../../assets/backgroundFilmList.jpg'

export const Container = styled.div`
    background: url(${background}) no-repeat center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Films = styled.div`
    padding: 50px 30px;
    margin: 10px;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    width: 270px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(240, 248, 255, 0.562);

    :hover {
        box-shadow: #cea317 0px 5px 15px;
    }
`

export const Film = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 4px;
`

export const FilmTitle = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 4px;
`

export const FilmDirector = styled.h5`
    margin: 50px 0;
`