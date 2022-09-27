import styled from "styled-components";
import background from '../../assets/backgroundFilmList.jpg'

export const Container = styled.div`
    background: url(${background}) no-repeat center/cover;
    height: 100vh;
`

export const Content = styled.div`
    padding-top: 25vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Films = styled.div`
    margin-bottom: 40px;
    padding: 50px 30px;
    cursor: pointer;
    text-align: center;
    transition: 0.3s;
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(240, 248, 255, 0.562);

    :hover {
        box-shadow: #cea317 0px 5px 15px;
    }
`

export const Film = styled.div`
    color: black;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 4px;
`

export const FilmTitle = styled.h3`
    font-size: 20px;
    height: 100px;
`

export const FilmDirector = styled.h5`
    height: 50px;
    font-family: 'Montserrat', sans-serif;
`