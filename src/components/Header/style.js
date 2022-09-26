import styled from "styled-components";
import background from '../../assets/backgroundFilmInfo.jpg';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #000000;
    width: 100%;
    height: 10vh;
    align-items: center;
    position: fixed;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
`

export const Logo = styled.img`
    object-fit: contain;
    height: 10vh;
    cursor: pointer;
    background: url(${background}) no-repeat;
`

export const Links = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 3px;
`

export const Link = styled.a`
    text-decoration: none;
    color: #ce8e17;
    cursor: pointer;
    margin: 0 20px;
    transition: 0.3s;
    font-size: large;

    :hover {
        color: #ecd27b;
    }
`
